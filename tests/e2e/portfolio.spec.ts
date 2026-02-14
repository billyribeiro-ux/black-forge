/**
 * E2E tests for Portfolio page.
 *
 * @module tests/e2e/portfolio.spec
 */

import { test, expect } from '@playwright/test';

test.describe('Portfolio Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/portfolio');
	});

	test('should display hero section', async ({ page }) => {
		await expect(page.getByRole('heading', { name: /Proof\. Not Promises/i })).toBeVisible();
	});

	test('should display filter buttons', async ({ page }) => {
		await expect(page.getByRole('button', { name: /^All$/i })).toBeVisible();
		await expect(page.getByRole('button', { name: /Web Development/i })).toBeVisible();
		await expect(page.getByRole('button', { name: /App Development/i })).toBeVisible();
		await expect(page.getByRole('button', { name: /SEO & Growth/i })).toBeVisible();
		await expect(page.getByRole('button', { name: /E-Commerce/i })).toBeVisible();
	});

	test('should filter projects by category', async ({ page }) => {
		// Click Web Development filter
		await page.getByRole('button', { name: /Web Development/i }).click();
		await page.waitForTimeout(300);

		// Check that filtered projects are visible
		const projectCards = page.locator('.bg-forge-charcoal.border');
		const count = await projectCards.count();
		expect(count).toBeGreaterThan(0);

		// Click All to reset
		await page.getByRole('button', { name: /^All$/i }).click();
		await page.waitForTimeout(300);
	});

	test('should display project cards', async ({ page }) => {
		const projectCards = page.locator('.bg-forge-charcoal.border');
		const count = await projectCards.count();
		expect(count).toBeGreaterThan(0);
	});

	test('should display industry experience section', async ({ page }) => {
		await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
		await expect(page.getByRole('heading', { name: /Industry Experience/i })).toBeVisible();
		await expect(page.getByText(/E-Commerce & Retail/i)).toBeVisible();
		await expect(page.getByText(/Professional Services/i)).toBeVisible();
		await expect(page.getByText(/SaaS & Technology/i)).toBeVisible();
	});

	test('should have CTA section', async ({ page }) => {
		await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
		await expect(page.getByRole('heading', { name: /Ready to Add Your Project/i })).toBeVisible();
	});
});
