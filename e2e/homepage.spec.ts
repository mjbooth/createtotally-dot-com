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
    await expect(canonical).toHaveAttribute('href', 'https://www.createtotally.com/');
    
    // Check structured data presence
    const structuredData = page.locator('script[type="application/ld+json"]');
    await expect(structuredData).toBeVisible();
  });

  test('should have working navigation menu', async ({ page }) => {
    await page.goto('/');
    
    // Check main navigation elements exist and are clickable
    const featuresLink = page.getByRole('link', { name: /features/i });
    const platformLink = page.getByRole('link', { name: /platform/i });
    const pricingLink = page.getByRole('link', { name: /pricing/i });
    
    await expect(featuresLink).toBeVisible();
    await expect(platformLink).toBeVisible();
    await expect(pricingLink).toBeVisible();
    
    // Test navigation to pricing page
    await pricingLink.click();
    await expect(page).toHaveURL(/.*pricing/);
    await expect(page).toHaveTitle(/pricing/i);
  });

  test('should have working CTA buttons', async ({ page }) => {
    await page.goto('/');
    
    // Look for main CTA button (Get Started)
    const ctaButton = page.getByRole('link', { name: /get started/i }).first();
    await expect(ctaButton).toBeVisible();
    
    // Click CTA and verify navigation
    await ctaButton.click();
    await expect(page).toHaveURL(/.*get-started/);
  });

  test('should load without console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Filter out known third-party errors (GTM, etc.)
    const relevantErrors = consoleErrors.filter(error => 
      !error.includes('googletagmanager') && 
      !error.includes('gtm') &&
      !error.includes('termly')
    );
    
    expect(relevantErrors.length).toBe(0);
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
    await page.goto('/');
    
    // Check that the page loads and main content is visible
    await expect(page.getByRole('main')).toBeVisible();
    
    // Check that navigation adapts for mobile (hamburger menu, etc.)
    const mobileNav = page.locator('[aria-label="menu"], .mobile-menu, button[aria-expanded]');
    const hasAnyMobileNav = await mobileNav.count() > 0;
    
    if (hasAnyMobileNav) {
      await expect(mobileNav.first()).toBeVisible();
    }
  });
});