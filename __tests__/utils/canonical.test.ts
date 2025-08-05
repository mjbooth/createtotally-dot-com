import {
  getHomeCanonicalUrl,
  getCategoryCanonicalUrl,
  getCategorySlugCanonicalUrl,
  generateCanonicalUrl,
  SITE_CONFIG
} from '@/src/utils/canonical';

describe('Canonical URL Utilities', () => {
  describe('SITE_CONFIG', () => {
    it('should have correct site configuration', () => {
      expect(SITE_CONFIG.domain).toBe('www.createtotally.com');
      expect(SITE_CONFIG.baseUrl).toBe('https://www.createtotally.com');
    });
  });

  describe('getHomeCanonicalUrl', () => {
    it('should return homepage URL', () => {
      const url = getHomeCanonicalUrl();
      expect(url).toBe('https://www.createtotally.com/');
    });
  });

  describe('getCategoryCanonicalUrl', () => {
    it('should return category URL', () => {
      const url = getCategoryCanonicalUrl('features');
      expect(url).toBe('https://www.createtotally.com/features');
    });

    it('should handle different categories', () => {
      expect(getCategoryCanonicalUrl('pricing')).toBe('https://www.createtotally.com/pricing');
      expect(getCategoryCanonicalUrl('platform')).toBe('https://www.createtotally.com/platform');
    });
  });

  describe('getCategorySlugCanonicalUrl', () => {
    it('should return category with slug URL', () => {
      const url = getCategorySlugCanonicalUrl('features', 'creative-automation');
      expect(url).toBe('https://www.createtotally.com/features/creative-automation');
    });

    it('should handle different categories and slugs', () => {
      expect(getCategorySlugCanonicalUrl('platform', 'figma')).toBe('https://www.createtotally.com/platform/figma');
      expect(getCategorySlugCanonicalUrl('integrations', 'example-integration')).toBe('https://www.createtotally.com/integrations/example-integration');
    });
  });

  describe('generateCanonicalUrl', () => {
    it('should generate URL with proper path handling', () => {
      expect(generateCanonicalUrl('/features')).toBe('https://www.createtotally.com/features');
      expect(generateCanonicalUrl('features')).toBe('https://www.createtotally.com/features');
      expect(generateCanonicalUrl('/')).toBe('https://www.createtotally.com/');
    });

    it('should remove query parameters and fragments', () => {
      expect(generateCanonicalUrl('/features?param=value')).toBe('https://www.createtotally.com/features');
      expect(generateCanonicalUrl('/features#section')).toBe('https://www.createtotally.com/features');
      expect(generateCanonicalUrl('/features?param=value#section')).toBe('https://www.createtotally.com/features');
    });

    it('should handle trailing slashes correctly', () => {
      expect(generateCanonicalUrl('/features/')).toBe('https://www.createtotally.com/features');
      expect(generateCanonicalUrl('/features/test/')).toBe('https://www.createtotally.com/features/test');
    });
  });
});