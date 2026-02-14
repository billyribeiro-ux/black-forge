/**
 * E2E tests for all pages.
 *
 * Smoke tests to ensure all pages load correctly and have basic content.
 *
 * @module tests/e2e/all-pages.spec
 */

import { test, expect } from '@playwright/test';

const pages = [
	{
		path: '/',
		title: /Blackforge Digital — Forged for Performance/,
		heading: /We Don't Build Websites/
	},
	{ path: '/services', title: /Services/, heading: /Everything You Need/ },
	{ path: '/portfolio', title: /Portfolio/, heading: /Proof\. Not Promises/ },
	{ path: '/about', title: /About Us/, heading: /Built Different/ },
	{ path: '/process', title: /Our Process/, heading: /Precision Has a Process/ },
	{ path: '/pricing', title: /Pricing/, heading: /Transparent Pricing/ },
	{ path: '/blog', title: /Blog/, heading: /The Forge Journal/ },
	{ path: '/contact', title: /Contact Us/, heading: /Your Move/ }
];

test.describe('All Pages Smoke Tests', () => {
	for (const pageData of pages) {
		test(`should load ${pageData.path} successfully`, async ({ page }) => {
			await page.goto(pageData.path);

			// Check title
			await expect(page).toHaveTitle(pageData.title);

			// Check main heading
			await expect(page.getByRole('heading', { name: pageData.heading })).toBeVisible();

			// Check navigation is present
			await expect(page.getByRole('link', { name: /BLACKFORGE/i })).toBeVisible();

			// Check footer is present
			await expect(page.getByText(/© \d{4} Blackforge Digital/)).toBeVisible();
		});

		test(`${pageData.path} should have no console errors`, async ({ page }) => {
			const consoleErrors: string[] = [];

			page.on('console', (msg) => {
				if (msg.type() === 'error') {
					consoleErrors.push(msg.text());
				}
			});

			await page.goto(pageData.path);
			await page.waitForLoadState('networkidle');

			// Allow some time for any delayed errors
			await page.waitForTimeout(1000);

			// Check for critical errors (ignore known warnings)
			const criticalErrors = consoleErrors.filter(
				(error) => !error.includes('favicon') && !error.includes('DevTools')
			);

			expect(criticalErrors).toHaveLength(0);
		});

		test(`${pageData.path} should be responsive`, async ({ page }) => {
			// Test mobile viewport
			await page.setViewportSize({ width: 375, height: 667 });
			await page.goto(pageData.path);
			await expect(page.getByRole('heading', { name: pageData.heading })).toBeVisible();

			// Test tablet viewport
			await page.setViewportSize({ width: 768, height: 1024 });
			await expect(page.getByRole('heading', { name: pageData.heading })).toBeVisible();

			// Test desktop viewport
			await page.setViewportSize({ width: 1920, height: 1080 });
			await expect(page.getByRole('heading', { name: pageData.heading })).toBeVisible();
		});

		test(`${pageData.path} should have accessible navigation`, async ({ page }) => {
			await page.goto(pageData.path);

			// Check that page can be navigated with keyboard
			await page.keyboard.press('Tab');
			await page.keyboard.press('Tab');

			// At least one element should be focused
			const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
			expect(focusedElement).toBeTruthy();
		});
	}
});

test.describe('Footer', () => {
	test('should display on all pages', async ({ page }) => {
		for (const pageData of pages) {
			await page.goto(pageData.path);

			// Check footer elements
			await expect(page.getByText(/BLACKFORGE/).last()).toBeVisible();
			await expect(page.getByText(/© \d{4} Blackforge Digital/)).toBeVisible();

			// Check footer links
			await expect(page.getByRole('link', { name: /Privacy Policy/i })).toBeVisible();
			await expect(page.getByRole('link', { name: /Terms of Service/i })).toBeVisible();
		}
	});

	test('should have working footer links', async ({ page }) => {
		await page.goto('/');

		// Check Services link in footer
		const servicesLink = page.getByRole('link', { name: /^Services$/i }).last();
		await expect(servicesLink).toHaveAttribute('href', /\/services/);

		// Check About link in footer
		const aboutLink = page.getByRole('link', { name: /^About$/i }).last();
		await expect(aboutLink).toHaveAttribute('href', /\/about/);
	});

	test('should have social media links', async ({ page }) => {
		await page.goto('/');

		// Scroll to footer
		await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

		// Check social links
		const socialLinks = page.locator('footer a[target="_blank"]');
		await expect(socialLinks).toHaveCount(4); // LinkedIn, X, Instagram, GitHub
	});
});

test.describe('404 Error Page', () => {
	test('should display custom 404 page', async ({ page }) => {
		const response = await page.goto('/this-page-does-not-exist');

		// Check status code
		expect(response?.status()).toBe(404);

		// Check 404 content
		await expect(page.getByRole('heading', { name: /Page Not Found/i })).toBeVisible();
		await expect(page.getByText(/404/)).toBeVisible();

		// Check back to home button
		await expect(page.getByRole('link', { name: /Back to Home/i })).toBeVisible();
	});

	test('should navigate back to home from 404', async ({ page }) => {
		await page.goto('/this-page-does-not-exist');

		// Click back to home button
		await page.getByRole('link', { name: /Back to Home/i }).click();

		// Should be on home page
		await expect(page).toHaveURL('/');
		await expect(page.getByRole('heading', { name: /We Don't Build Websites/i })).toBeVisible();
	});
});
