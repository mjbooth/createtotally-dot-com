/**
 * Canonical URL utilities for the CreateTOTALLY website
 * Provides consistent canonical URL generation for all pages
 */

export const SITE_CONFIG = {
  baseUrl: 'https://www.createtotally.com',
  domain: 'www.createtotally.com',
} as const;

/**
 * Generates a canonical URL by combining the base URL with a path
 * Handles trailing slashes, query parameters, and URL normalization
 * 
 * @param path - The path to append to the base URL (should start with /)
 * @returns The complete canonical URL
 */
export function generateCanonicalUrl(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Remove trailing slash unless it's the root path
  const cleanPath = normalizedPath === '/' 
    ? normalizedPath 
    : normalizedPath.replace(/\/$/, '');
  
  // Remove any query parameters or fragments for canonical URLs
  const pathWithoutParams = cleanPath.split('?')[0].split('#')[0];
  
  return `${SITE_CONFIG.baseUrl}${pathWithoutParams}`;
}

/**
 * Generates canonical URL for the homepage
 */
export function getHomeCanonicalUrl(): string {
  return generateCanonicalUrl('/');
}

/**
 * Generates canonical URL for feature pages
 * @param slug - The feature slug
 */
export function getFeatureCanonicalUrl(slug: string): string {
  return generateCanonicalUrl(`/features/${slug}`);
}

/**
 * Generates canonical URL for platform pages
 * @param slug - The platform slug
 */
export function getPlatformCanonicalUrl(slug: string): string {
  return generateCanonicalUrl(`/platform/${slug}`);
}

/**
 * Generates canonical URL for category pages
 * @param category - The category slug
 */
export function getCategoryCanonicalUrl(category: string): string {
  return generateCanonicalUrl(`/${category}`);
}

/**
 * Generates canonical URL for category/slug pages (blog posts, integrations, etc.)
 * @param category - The category slug
 * @param slug - The post slug
 */
export function getCategorySlugCanonicalUrl(category: string, slug: string): string {
  return generateCanonicalUrl(`/${category}/${slug}`);
}

/**
 * Generates canonical URL for static pages
 * @param path - The static page path (e.g., 'pricing', 'get-started')
 */
export function getStaticPageCanonicalUrl(path: string): string {
  return generateCanonicalUrl(`/${path}`);
}

/**
 * Extracts the canonical URL from Next.js request headers or pathname
 * Useful for dynamic route handlers or middleware
 * 
 * @param pathname - The pathname from Next.js request
 * @returns The canonical URL
 */
export function getCanonicalUrlFromPathname(pathname: string): string {
  return generateCanonicalUrl(pathname);
}

/**
 * Validates if a URL is a valid canonical URL for this site
 * @param url - The URL to validate
 * @returns Whether the URL is valid for this site
 */
export function isValidCanonicalUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.origin === SITE_CONFIG.baseUrl;
  } catch {
    return false;
  }
}