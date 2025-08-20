import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  
  // Check that the page title is correct
  await expect(page).toHaveTitle(/Rooferly/);
  
  // Check that key elements are visible
  await expect(page.locator('h1')).toBeVisible();
  
  // Check for navigation elements (handle both mobile and desktop)
  const nav = page.locator('nav');
  await expect(nav).toBeVisible();
  
  // Check for main content
  await expect(page.locator('main')).toBeVisible();
});

test('estimate form is accessible', async ({ page }) => {
  await page.goto('/');
  
  // Wait for the page to load completely
  await page.waitForLoadState('networkidle');
  
  // Look for estimate links more specifically
  const estimateLinks = page.locator('a[href="/estimate"]');
  await expect(estimateLinks.first()).toBeVisible();
  
  // Navigate to estimate page
  await estimateLinks.first().click();
  
  // Check that we're on the estimate page
  await expect(page).toHaveURL(/.*estimate/);
  
  // Check for estimate form elements (be more specific)
  const forms = page.locator('form');
  await expect(forms.first()).toBeVisible();
});

test('responsive design works on mobile', async ({ page }) => {
  // Set viewport to mobile size
  await page.setViewportSize({ width: 375, height: 667 });
  
  await page.goto('/');
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');
  
  // Check that navigation exists (may be hidden on mobile)
  const nav = page.locator('nav');
  await expect(nav).toBeVisible();
  
  // Verify mobile-friendly layout
  await expect(page.locator('main')).toBeVisible();
  
  // Check for mobile-specific elements like hamburger menu
  const mobileMenu = page.locator('button[aria-label*="menu"], button[aria-label*="Menu"]');
  if (await mobileMenu.count() > 0) {
    await expect(mobileMenu.first()).toBeVisible();
  }
});

test('basic page structure exists', async ({ page }) => {
  await page.goto('/');
  
  // Check for essential page elements
  await expect(page.locator('body')).toBeVisible();
  await expect(page.locator('header')).toBeVisible();
  await expect(page.locator('footer')).toBeVisible();
  
  // Check for content sections
  const contentSections = page.locator('section, main, article');
  await expect(contentSections.first()).toBeVisible();
});

test('navigation links work', async ({ page }) => {
  await page.goto('/');
  
  // Check for common navigation links
  const aboutLink = page.locator('a[href="/about"]');
  if (await aboutLink.count() > 0) {
    await expect(aboutLink.first()).toBeVisible();
  }
  
  const contactLink = page.locator('a[href="/contact"]');
  if (await contactLink.count() > 0) {
    await expect(contactLink.first()).toBeVisible();
  }
});
