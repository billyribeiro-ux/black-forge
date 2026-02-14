/**
 * E2E tests for Navigation component.
 * 
 * Tests desktop and mobile navigation, scroll behavior, and menu interactions.
 * 
 * @module tests/e2e/navigation.spec
 */

import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('should display logo and navigation links', async ({ page }) => {
		// Check logo
		await expect(page.getByRole('link', { name: /BLACKFORGE/i })).toBeVisible();

		// Check all nav links (desktop)
		await expect(page.getByRole('link', { name: /^Services$/i })).toBeVisible();
		await expect(page.getByRole('link', { name: /^Work$/i })).toBeVisible();
		await expect(page.getByRole('link', { name: /^About$/i })).toBeVisible();
		await expect(page.getByRole('link', { name: /^Process$/i })).toBeVisible();
		await expect(page.getByRole('link', { name: /^Blog$/i })).toBeVisible();

		// Check CTA button
		await expect(page.getByRole('link', { name: /Start a Project/i }).first()).toBeVisible();
	});

	test('should navigate to all pages', async ({ page }) => {
		// Navigate to Services
		await page.getByRole('link', { name: /^Services$/i }).click();
		await expect(page).toHaveURL('/services');
		await expect(page.getByRole('heading', { name: /Everything You Need/i })).toBeVisible();

		// Navigate to Portfolio
		await page.getByRole('link', { name: /^Work$/i }).click();
		await expect(page).toHaveURL('/portfolio');
		await expect(page.getByRole('heading', { name: /Proof\. Not Promises/i })).toBeVisible();

		// Navigate to About
		await page.getByRole('link', { name: /^About$/i }).click();
		await expect(page).toHaveURL('/about');
		await expect(page.getByRole('heading', { name: /Built Different/i })).toBeVisible();

		// Navigate to Process
		await page.getByRole('link', { name: /^Process$/i }).click();
		await expect(page).toHaveURL('/process');
		await expect(page.getByRole('heading', { name: /Precision Has a Process/i })).toBeVisible();

		// Navigate to Blog
		await page.getByRole('link', { name: /^Blog$/i }).click();
		await expect(page).toHaveURL('/blog');
		await expect(page.getByRole('heading', { name: /The Forge Journal/i })).toBeVisible();
	});

	test('should change style on scroll', async ({ page }) => {
		// Get navigation element
		const nav = page.locator('nav').first();

		// Check initial state (no background)
		const initialBg = await nav.evaluate((el) => window.getComputedStyle(el).backgroundColor);

		// Scroll down
		await page.evaluate(() => window.scrollTo(0, 500));
		await page.waitForTimeout(300);

		// Check scrolled state (should have background)
		const scrolledBg = await nav.evaluate((el) => window.getComputedStyle(el).backgroundColor);

		// Background should change (not be transparent)
		expect(scrolledBg).not.toBe(initialBg);
	});

	test('should open and close mobile menu', async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 667 });

		// Mobile menu should not be visible initially
		await expect(page.getByRole('dialog')).not.toBeVisible();

		// Click hamburger button
		const menuButton = page.getByRole('button', { name: /Toggle menu/i });
		await menuButton.click();

		// Mobile menu should be visible
		await expect(page.getByRole('dialog')).toBeVisible();

		// Check mobile menu links
		await expect(page.getByRole('link', { name: /^Services$/i }).last()).toBeVisible();
		await expect(page.getByRole('link', { name: /^Work$/i }).last()).toBeVisible();

		// Close menu by clicking hamburger again
		await menuButton.click();

		// Menu should be hidden
		await expect(page.getByRole('dialog')).not.toBeVisible();
	});

	test('should navigate from mobile menu', async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 667 });

		// Open mobile menu
		await page.getByRole('button', { name: /Toggle menu/i }).click();

		// Click Services link in mobile menu
		await page.getByRole('link', { name: /^Services$/i }).last().click();

		// Should navigate to services page
		await expect(page).toHaveURL('/services');

		// Mobile menu should close
		await expect(page.getByRole('dialog')).not.toBeVisible();
	});

	test('should close mobile menu with Escape key', async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 667 });

		// Open mobile menu
		await page.getByRole('button', { name: /Toggle menu/i }).click();
		await expect(page.getByRole('dialog')).toBeVisible();

		// Press Escape
		await page.keyboard.press('Escape');

		// Menu should close
		await expect(page.getByRole('dialog')).not.toBeVisible();
	});

	test('should have accessible navigation', async ({ page }) => {
		// Check that navigation is keyboard accessible
		await page.keyboard.press('Tab');
		await page.keyboard.press('Tab');

		// Logo should be focused
		const logo = page.getByRole('link', { name: /BLACKFORGE/i });
		await expect(logo).toBeFocused();

		// Tab through nav links
		await page.keyboard.press('Tab');
		await expect(page.getByRole('link', { name: /^Services$/i })).toBeFocused();
	});

	test('should return to home when clicking logo', async ({ page }) => {
		// Navigate away from home
		await page.goto('/services');

		// Click logo
		await page.getByRole('link', { name: /BLACKFORGE/i }).click();

		// Should be back on home page
		await expect(page).toHaveURL('/');
	});
});
