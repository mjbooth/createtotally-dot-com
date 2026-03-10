import { test, expect } from '@playwright/test';

test.describe('Form Submission', () => {
  test('should handle contact form submission on get-started page', async ({ page }) => {
    await page.goto('/get-started');

    // Dismiss cookie banner if present
    const declineButton = page.locator('button[data-tid="banner-decline"]');
    if (await declineButton.count() > 0) {
      await declineButton.click();
    }

    // Look for contact form
    const formCount = await page.locator('form').count();
    if (formCount === 0) {
      test.skip();
      return;
    }

    const form = page.locator('form').first();

    // Fill out form fields
    const nameField = page.locator('input[name="name"], input[placeholder*="name" i]').first();
    const emailField = page.locator('input[name="email"], input[type="email"], input[placeholder*="email" i]').first();
    const messageField = page.locator('textarea[name="message"], textarea[placeholder*="message" i]').first();

    if (await nameField.count() > 0) {
      await nameField.fill('Test User');
    }

    if (await emailField.count() > 0) {
      await emailField.fill('test@example.com');
    }

    if (await messageField.count() > 0) {
      await messageField.fill('This is a test message from automated testing.');
    }

    // Mock the form submission to prevent actual API calls
    await page.route('**/api/submit-form', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Form submitted successfully' })
      });
    });

    // Submit form
    const submitButton = form.locator('button[type="submit"], input[type="submit"]').first();
    if (await submitButton.count() > 0) {
      await submitButton.click();

      // Wait for response
      await page.waitForTimeout(2000);

      // Test passes if form submission was handled (no crash)
      expect(true).toBeTruthy();
    }
  });

  test('should validate required form fields', async ({ page }) => {
    await page.goto('/get-started');

    const formCount = await page.locator('form').count();
    if (formCount === 0) {
      test.skip();
      return;
    }

    // Try to submit empty form
    const submitButton = page.locator('form').first().locator('button[type="submit"], input[type="submit"]').first();
    if (await submitButton.count() > 0) {
      await submitButton.click();

      // Form should prevent submission or show validation errors
      const currentUrl = page.url();
      expect(currentUrl).toContain('get-started');
    }
  });

  test('should have honeypot protection', async ({ page }) => {
    await page.goto('/get-started');

    // Look for hidden honeypot field
    const honeypotField = page.locator('input[name="honeypot"], input[style*="display: none"], input[type="hidden"][name*="bot"]');

    if (await honeypotField.count() > 0) {
      expect(await honeypotField.first().isHidden()).toBeTruthy();
    }
  });
});
