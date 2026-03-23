/**
 * Cookie Consent Management
 *
 * Handles GDPR/PECR-compliant consent with GTM Consent Mode v2.
 * Consent is persisted in a first-party cookie (ct_consent).
 */

// --- Types ---

export interface ConsentPreferences {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: string;
}

interface GtagConsentState {
  ad_storage: 'granted' | 'denied';
  ad_user_data: 'granted' | 'denied';
  ad_personalization: 'granted' | 'denied';
  analytics_storage: 'granted' | 'denied';
  functionality_storage: 'granted' | 'denied';
  personalization_storage: 'granted' | 'denied';
  security_storage: 'granted' | 'denied';
}

// --- Constants ---

const COOKIE_NAME = 'ct_consent';
const COOKIE_MAX_AGE_SECONDS = 395 * 24 * 60 * 60; // 395 days (~13 months, GDPR guideline)

// --- Cookie helpers ---

function parseCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`));
  if (!match) return undefined;
  return decodeURIComponent(match.split('=').slice(1).join('='));
}

function writeCookie(name: string, value: string, maxAge: number): void {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; samesite=lax`;
}

function deleteCookie(name: string): void {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=; path=/; max-age=0; samesite=lax`;
}

// --- Read / write consent ---

export function readConsent(): ConsentPreferences | null {
  const raw = parseCookie(COOKIE_NAME);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as ConsentPreferences;
    // Validate shape
    if (
      typeof parsed.analytics !== 'boolean' ||
      typeof parsed.marketing !== 'boolean' ||
      typeof parsed.functional !== 'boolean' ||
      typeof parsed.timestamp !== 'string'
    ) {
      return null;
    }

    // Check expiry (395 days from timestamp)
    const age = Date.now() - new Date(parsed.timestamp).getTime();
    if (age > COOKIE_MAX_AGE_SECONDS * 1000) {
      deleteCookie(COOKIE_NAME);
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(prefs: Omit<ConsentPreferences, 'timestamp'>): void {
  const value: ConsentPreferences = {
    ...prefs,
    timestamp: new Date().toISOString(),
  };
  writeCookie(COOKIE_NAME, JSON.stringify(value), COOKIE_MAX_AGE_SECONDS);
}

export function clearConsent(): void {
  deleteCookie(COOKIE_NAME);
}

// --- Consent state checks ---

export function hasConsentChoice(): boolean {
  return readConsent() !== null;
}

// --- Map preferences to GTM consent types ---

function toGtagState(prefs: Omit<ConsentPreferences, 'timestamp'>): GtagConsentState {
  return {
    analytics_storage: prefs.analytics ? 'granted' : 'denied',
    ad_storage: prefs.marketing ? 'granted' : 'denied',
    ad_user_data: prefs.marketing ? 'granted' : 'denied',
    ad_personalization: prefs.marketing ? 'granted' : 'denied',
    functionality_storage: prefs.functional ? 'granted' : 'denied',
    personalization_storage: prefs.functional ? 'granted' : 'denied',
    security_storage: 'granted',
  };
}

// --- GTM signalling ---

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

function ensureGtag(): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args as unknown as Record<string, unknown>);
    };
  }
}

export function pushConsentUpdate(prefs: Omit<ConsentPreferences, 'timestamp'>): void {
  if (typeof window === 'undefined') return;
  ensureGtag();

  const state = toGtagState(prefs);
  window.gtag!('consent', 'update', state);

  // Also push a consent_update event for GTM triggers
  window.dataLayer!.push({
    event: 'consent_update',
    consent_state: state,
  });
}

// --- High-level actions ---

export function acceptAll(): void {
  const prefs = { analytics: true, marketing: true, functional: true };
  writeConsent(prefs);
  pushConsentUpdate(prefs);
}

export function rejectAll(): void {
  const prefs = { analytics: false, marketing: false, functional: false };
  writeConsent(prefs);
  pushConsentUpdate(prefs);
}

export function savePreferences(prefs: Omit<ConsentPreferences, 'timestamp'>): void {
  writeConsent(prefs);
  pushConsentUpdate(prefs);
}

// --- Inline script for <head> (runs before GTM) ---

/**
 * Returns the JavaScript string for the inline consent-mode-init script.
 * This MUST execute synchronously before GTM loads.
 *
 * It:
 * 1. Bootstraps dataLayer + gtag()
 * 2. Pushes consent defaults (all denied except security_storage)
 * 3. Reads the ct_consent cookie and pushes an update if found
 */
export function getConsentInitScript(): string {
  return `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','functionality_storage':'denied','personalization_storage':'denied','security_storage':'granted','wait_for_update':500});try{var m=document.cookie.match('(?:^|; )${COOKIE_NAME}=([^;]*)');if(m){var c=JSON.parse(decodeURIComponent(m[1]));var g=function(v){return v?'granted':'denied'};gtag('consent','update',{'analytics_storage':g(c.analytics),'ad_storage':g(c.marketing),'ad_user_data':g(c.marketing),'ad_personalization':g(c.marketing),'functionality_storage':g(c.functional),'personalization_storage':g(c.functional),'security_storage':'granted'})}}catch(e){}`;
}
