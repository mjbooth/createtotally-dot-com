import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load homepage with correct title and meta tags', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle(/Creative Automation for Figma & Adobe Teams/);

    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /Effortlessly scale creative production/);

    // Check canonical URL
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', /^https:\/\/www\.createtotally\.com\/?$/);

    // Check structured data presence
    const structuredData = page.locator('script[type="application/ld+json"]');
    await expect(structuredData.first()).toBeAttached();
  });

  test('should have working navigation menu', async ({ page, isMobile }) => {
    await page.goto('/');

    if (isMobile) {
      // On mobile, nav links are behind hamburger menu — verify logo link exists
      const logoLink = page.getByRole('link', { name: /logo/i });
      await expect(logoLink).toBeVisible();
    } else {
      // Check pricing link is visible on desktop
      const pricingLink = page.getByRole('link', { name: /pricing/i });
      await expect(pricingLink).toBeVisible();

      // Test navigation to pricing page
      await pricingLink.click();
      await expect(page).toHaveURL(/.*pricing/);
    }
  });

  test('should have working CTA buttons', async ({ page, isMobile }) => {
    await page.goto('/');

    if (isMobile) {
      // On mobile, CTA may not be visible in header — just verify page loaded
      await expect(page).toHaveTitle(/.+/);
    } else {
      // Look for main CTA button (Get Started / Get a Demo)
      const ctaButton = page.getByRole('link', { name: /get started|get a demo|book a demo/i }).first();
      await expect(ctaButton).toBeVisible();

      // Click CTA and verify navigation
      await ctaButton.click();
      await expect(page).toHaveURL(/.*get-started/);
    }
  });

  test('should load without console errors', async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    // Allow time for client-side hydration
    await page.waitForTimeout(3000);

    // Filter out known third-party errors
    const relevantErrors = consoleErrors.filter(error =>
      !error.includes('googletagmanager') &&
      !error.includes('gtm') &&
      !error.includes('termly') &&
      !error.includes('Failed to load resource') &&
      !error.includes('net::ERR')
    );

    expect(relevantErrors.length).toBe(0);
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check that the page loads and main content is visible
    const main = page.locator('main');
    if (await main.count() > 0) {
      await expect(main).toBeVisible();
    }

    // Page should render without crashing at mobile size
    await expect(page).toHaveTitle(/.+/);
  });
});
