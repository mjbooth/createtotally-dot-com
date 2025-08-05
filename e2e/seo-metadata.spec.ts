import { test, expect } from '@playwright/test';

const testPages = [
  { url: '/', title: /Creative Automation for Figma & Adobe Teams/ },
  { url: '/features/creative-automation', title: /Creative Automation/ },
  { url: '/platform/figma-creative-automation', title: /Figma/ },
  { url: '/pricing', title: /pricing/i },
  { url: '/get-started', title: /get started/i }
];

test.describe('SEO Metadata', () => {
  for (const { url, title } of testPages) {
    test(`should have correct SEO metadata for ${url}`, async ({ page }) => {
      await page.goto(url);
      
      // Check page title
      await expect(page).toHaveTitle(title);
      
      // Check meta description exists and is not empty
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveAttribute('content', /.+/);
      
      // Check canonical URL exists
      const canonical = page.locator('link[rel="canonical"]');
      await expect(canonical).toHaveAttribute('href', /^https:\/\/www\.createtotally\.com/);
      
      // Check Open Graph tags
      const ogTitle = page.locator('meta[property="og:title"]');
      const ogDescription = page.locator('meta[property="og:description"]');
      const ogImage = page.locator('meta[property="og:image"]');
      const ogUrl = page.locator('meta[property="og:url"]');
      
      await expect(ogTitle).toHaveAttribute('content', /.+/);
      await expect(ogDescription).toHaveAttribute('content', /.+/);
      await expect(ogImage).toHaveAttribute('content', /\.(jpg|jpeg|png|webp)$/);
      await expect(ogUrl).toHaveAttribute('content', /^https:\/\/www\.createtotally\.com/);
      
      // Check Twitter Card tags
      const twitterCard = page.locator('meta[name="twitter:card"]');
      const twitterTitle = page.locator('meta[name="twitter:title"]');
      const twitterDescription = page.locator('meta[name="twitter:description"]');
      
      await expect(twitterCard).toHaveAttribute('content', 'summary_large_image');
      await expect(twitterTitle).toHaveAttribute('content', /.+/);
      await expect(twitterDescription).toHaveAttribute('content', /.+/);
    });
  }

  test('should have structured data on all pages', async ({ page }) => {
    for (const { url } of testPages) {
      await page.goto(url);
      
      // Check for JSON-LD structured data
      const structuredData = page.locator('script[type="application/ld+json"]');
      await expect(structuredData.first()).toBeVisible();
      
      // Verify structured data is valid JSON
      const jsonContent = await structuredData.first().textContent();
      expect(() => JSON.parse(jsonContent || '{}')).not.toThrow();
      
      const parsedJson = JSON.parse(jsonContent || '{}');
      expect(parsedJson['@context']).toBe('https://schema.org');
      expect(parsedJson['@type']).toBeTruthy();
    }
  });

  test('should have proper viewport meta tag', async ({ page }) => {
    await page.goto('/');
    
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute('content', /width=device-width/);
  });

  test('should have robots meta tags allowing indexing', async ({ page }) => {
    await page.goto('/');
    
    // Check that robots meta tag doesn't prevent indexing
    const robotsMeta = page.locator('meta[name="robots"]');
    if (await robotsMeta.count() > 0) {
      const content = await robotsMeta.getAttribute('content');
      expect(content).not.toContain('noindex');
      expect(content).not.toContain('nofollow');
    }
  });

  test('should have language attributes', async ({ page }) => {
    await page.goto('/');
    
    // Check html lang attribute
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'en');
  });
});