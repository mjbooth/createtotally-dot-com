'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Box, Flex, Text, Button, Switch, Heading } from '@chakra-ui/react';
import {
  hasConsentChoice,
  readConsent,
  acceptAll,
  rejectAll,
  savePreferences,
} from '@/src/lib/consent';

type View = 'hidden' | 'banner' | 'preferences';

export default function CookieBanner() {
  const [view, setView] = useState<View>('hidden');
  const bannerRef = useRef<HTMLDivElement>(null);
  const prefsRef = useRef<HTMLDivElement>(null);

  // Granular toggles
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [functional, setFunctional] = useState(false);

  // Show banner on mount if no consent choice exists
  useEffect(() => {
    if (!hasConsentChoice()) {
      setView('banner');
    }
  }, []);

  // Listen for re-consent requests (from Footer link)
  useEffect(() => {
    const handler = () => {
      const saved = readConsent();
      if (saved) {
        setAnalytics(saved.analytics);
        setMarketing(saved.marketing);
        setFunctional(saved.functional);
      }
      setView('preferences');
    };
    window.addEventListener('show_consent_preferences', handler);
    return () => window.removeEventListener('show_consent_preferences', handler);
  }, []);

  // Focus trap for preferences modal
  useEffect(() => {
    if (view !== 'preferences') return;

    const container = prefsRef.current;
    if (!container) return;

    const focusable = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first.focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setView('banner');
        return;
      }
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', trap);
    return () => document.removeEventListener('keydown', trap);
  }, [view]);

  const handleAcceptAll = useCallback(() => {
    acceptAll();
    setView('hidden');
  }, []);

  const handleRejectAll = useCallback(() => {
    rejectAll();
    setView('hidden');
  }, []);

  const handleSavePreferences = useCallback(() => {
    savePreferences({ analytics, marketing, functional });
    setView('hidden');
  }, [analytics, marketing, functional]);

  if (view === 'hidden') return null;

  if (view === 'preferences') {
    return (
      <>
        {/* Backdrop */}
        <Box
          position="fixed"
          inset="0"
          bg="blackAlpha.600"
          zIndex="9998"
          onClick={() => setView('banner')}
        />
        {/* Preferences modal */}
        <Box
          ref={prefsRef}
          role="dialog"
          aria-label="Cookie preferences"
          aria-modal="true"
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="9999"
          bg="white"
          borderRadius="xl"
          boxShadow="lg"
          maxW="520px"
          w={{ base: '92vw', md: '520px' }}
          maxH="85vh"
          overflowY="auto"
          p={{ base: 5, md: 8 }}
        >
          <Heading as="h2" fontSize="xl" fontWeight="700" color="gray.900" mb="4">
            Cookie Preferences
          </Heading>
          <Text fontSize="sm" color="gray.600" mb="6">
            Choose which cookies you&apos;d like to accept. Essential cookies are always
            active as they are necessary for the website to function.
          </Text>

          {/* Essential — always on */}
          <Flex justify="space-between" align="center" py="3" borderBottomWidth="1px" borderColor="gray.200">
            <Box>
              <Text fontWeight="600" fontSize="sm" color="gray.900">Essential</Text>
              <Text fontSize="xs" color="gray.500">Required for the website to function</Text>
            </Box>
            <Switch.Root checked disabled>
              <Switch.HiddenInput />
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              <Switch.Label srOnly>Essential cookies (always active)</Switch.Label>
            </Switch.Root>
          </Flex>

          {/* Analytics */}
          <Flex justify="space-between" align="center" py="3" borderBottomWidth="1px" borderColor="gray.200">
            <Box>
              <Text fontWeight="600" fontSize="sm" color="gray.900">Analytics</Text>
              <Text fontSize="xs" color="gray.500">Help us understand how visitors use our site</Text>
            </Box>
            <Switch.Root checked={analytics} onCheckedChange={(e) => setAnalytics(e.checked)}>
              <Switch.HiddenInput />
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              <Switch.Label srOnly>Analytics cookies</Switch.Label>
            </Switch.Root>
          </Flex>

          {/* Marketing */}
          <Flex justify="space-between" align="center" py="3" borderBottomWidth="1px" borderColor="gray.200">
            <Box>
              <Text fontWeight="600" fontSize="sm" color="gray.900">Marketing</Text>
              <Text fontSize="xs" color="gray.500">Used to deliver relevant advertisements</Text>
            </Box>
            <Switch.Root checked={marketing} onCheckedChange={(e) => setMarketing(e.checked)}>
              <Switch.HiddenInput />
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              <Switch.Label srOnly>Marketing cookies</Switch.Label>
            </Switch.Root>
          </Flex>

          {/* Functional */}
          <Flex justify="space-between" align="center" py="3" mb="6">
            <Box>
              <Text fontWeight="600" fontSize="sm" color="gray.900">Functional</Text>
              <Text fontSize="xs" color="gray.500">Enable enhanced functionality and personalisation</Text>
            </Box>
            <Switch.Root checked={functional} onCheckedChange={(e) => setFunctional(e.checked)}>
              <Switch.HiddenInput />
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              <Switch.Label srOnly>Functional cookies</Switch.Label>
            </Switch.Root>
          </Flex>

          <Flex gap="3" direction={{ base: 'column', sm: 'row' }}>
            <Button
              flex="1"
              size="sm"
              variant="outline"
              borderColor="gray.300"
              color="gray.700"
              onClick={handleRejectAll}
            >
              Reject All
            </Button>
            <Button
              flex="1"
              size="sm"
              colorPalette="brandFuchsia"
              onClick={handleSavePreferences}
            >
              Save Preferences
            </Button>
          </Flex>
        </Box>
      </>
    );
  }

  // Banner view
  return (
    <Box
      ref={bannerRef}
      role="dialog"
      aria-label="Cookie consent"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      zIndex="9999"
      bg="white"
      borderTopWidth="1px"
      borderColor="gray.200"
      boxShadow="0 -2px 10px rgba(0,0,0,0.08)"
      px={{ base: 4, md: 8 }}
      py={{ base: 4, md: 5 }}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'stretch', md: 'center' }}
        gap={{ base: 4, md: 6 }}
      >
        <Box flex="1">
          <Text fontSize="sm" color="gray.700" lineHeight="1.5">
            We use cookies to improve your experience, analyse site traffic, and deliver
            relevant content. You can manage your preferences or accept all cookies.
          </Text>
        </Box>
        <Flex gap="3" flexShrink={0} direction={{ base: 'column', sm: 'row' }}>
          <Button
            size="sm"
            variant="outline"
            borderColor="gray.300"
            color="gray.700"
            onClick={() => setView('preferences')}
          >
            Manage Preferences
          </Button>
          <Button
            size="sm"
            variant="outline"
            borderColor="gray.300"
            color="gray.700"
            onClick={handleRejectAll}
          >
            Reject All
          </Button>
          <Button
            size="sm"
            colorPalette="brandFuchsia"
            onClick={handleAcceptAll}
          >
            Accept All
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
