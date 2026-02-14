/**
 * E2E tests for Blog page.
 *
 * @module tests/e2e/blog.spec
 */

import { test, expect } from '@playwright/test';

test.describe('Blog Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/blog');
	});

	test('should display hero section', async ({ page }) => {
		await expect(page.getByRole('heading', { name: /The Forge Journal/i })).toBeVisible();
		await expect(page.getByText(/Technical deep-dives/i)).toBeVisible();
	});

	test('should display search input', async ({ page }) => {
		const searchInput = page.getByPlaceholder(/Search articles/i);
		await expect(searchInput).toBeVisible();
	});

	test('should search articles', async ({ page }) => {
		const searchInput = page.getByPlaceholder(/Search articles/i);
		await searchInput.fill('SvelteKit');
		await page.waitForTimeout(300);

		// Articles should filter based on search
		await expect(page.getByText(/SvelteKit/i).first()).toBeVisible();
	});

	test('should display featured post', async ({ page }) => {
		await expect(page.getByText(/Featured/i)).toBeVisible();
		await expect(page.getByRole('heading', { name: /WordPress/i })).toBeVisible();
	});

	test('should display category filters', async ({ page }) => {
		await expect(page.getByRole('button', { name: /^All$/i })).toBeVisible();
		await expect(page.getByRole('button', { name: /Web Development/i })).toBeVisible();
		await expect(page.getByRole('button', { name: /SEO & Growth/i })).toBeVisible();
		await expect(page.getByRole('button', { name: /Case Studies/i })).toBeVisible();
	});

	test('should filter articles by category', async ({ page }) => {
		// Click Web Development filter
		await page.getByRole('button', { name: /Web Development/i }).click();
		await page.waitForTimeout(300);

		// Check filtered results
		const articles = page.locator('.bg-forge-charcoal.border');
		const count = await articles.count();
		expect(count).toBeGreaterThan(0);
	});

	test('should display article grid', async ({ page }) => {
		const articles = page.locator('.bg-forge-charcoal.border');
		const count = await articles.count();
		expect(count).toBeGreaterThan(0);
	});

	test('should display newsletter signup', async ({ page }) => {
		await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
		await expect(page.getByRole('heading', { name: /Get Forge Notes/i })).toBeVisible();
		await expect(page.getByPlaceholder(/your@email\.com/i)).toBeVisible();
		await expect(page.getByRole('button', { name: /Subscribe/i })).toBeVisible();
	});

	test('should handle newsletter signup', async ({ page }) => {
		await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

		const emailInput = page.getByPlaceholder(/your@email\.com/i);
		await emailInput.fill('test@example.com');

		const subscribeButton = page.getByRole('button', { name: /Subscribe/i });
		await expect(subscribeButton).toBeVisible();
	});
});
