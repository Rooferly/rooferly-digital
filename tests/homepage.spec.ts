import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  
  // Check that the page title is correct
  await expect(page).toHaveTitle(/Rooferly/);
  
  // Check that key elements are visible
  await expect(page.locator('h1')).toBeVisible();
  
  // Check for navigation elements
  await expect(page.locator('nav')).toBeVisible();
  
  // Check for main content
  await expect(page.locator('main')).toBeVisible();
});

test('estimate form is accessible', async ({ page }) => {
  await page.goto('/');
  
  // Navigate to estimate page
  await page.click('a[href="/estimate"]');
  
  // Check that we're on the estimate page
  await expect(page).toHaveURL(/.*estimate/);
  
  // Check for estimate form elements
  await expect(page.locator('form')).toBeVisible();
});

test('responsive design works on mobile', async ({ page }) => {
  // Set viewport to mobile size
  await page.setViewportSize({ width: 375, height: 667 });
  
  await page.goto('/');
  
  // Check that mobile navigation works
  await expect(page.locator('nav')).toBeVisible();
  
  // Verify mobile-friendly layout
  await expect(page.locator('main')).toBeVisible();
});
