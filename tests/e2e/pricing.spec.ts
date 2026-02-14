/**
 * E2E tests for Pricing page.
 *
 * @module tests/e2e/pricing.spec
 */

import { test, expect } from '@playwright/test';

test.describe('Pricing Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/pricing');
	});

	test('should display hero section', async ({ page }) => {
		await expect(page.getByRole('heading', { name: /Transparent Pricing/i })).toBeVisible();
		await expect(page.getByText(/No hidden fees/i)).toBeVisible();
	});

	test('should display all three pricing tiers', async ({ page }) => {
		await expect(page.getByRole('heading', { name: /Foundation/i })).toBeVisible();
		await expect(page.getByRole('heading', { name: /Professional/i })).toBeVisible();
		await expect(page.getByRole('heading', { name: /Enterprise/i })).toBeVisible();
	});

	test('should display pricing amounts', async ({ page }) => {
		await expect(page.getByText(/\$8,000/i)).toBeVisible();
		await expect(page.getByText(/\$20,000/i)).toBeVisible();
		await expect(page.getByText(/\$40,000\+/i)).toBeVisible();
	});

	test('should highlight recommended tier', async ({ page }) => {
		const professionalTier = page.locator('.border-forge-ember').first();
		await expect(professionalTier).toBeVisible();
		await expect(page.getByText(/Recommended/i)).toBeVisible();
	});

	test('should display tier features', async ({ page }) => {
		// Foundation features
		await expect(page.getByText(/Up to 10 pages/i)).toBeVisible();
		await expect(page.getByText(/Mobile responsive/i)).toBeVisible();

		// Professional features
		await expect(page.getByText(/Up to 25 pages/i)).toBeVisible();
		await expect(page.getByText(/Advanced animations/i)).toBeVisible();

		// Enterprise features
		await expect(page.getByText(/Unlimited pages/i)).toBeVisible();
		await expect(page.getByText(/Dedicated account manager/i)).toBeVisible();
	});

	test('should display add-on services', async ({ page }) => {
		await expect(page.getByRole('heading', { name: /Add-On Services/i })).toBeVisible();
		await expect(page.getByText(/SEO Optimization/i)).toBeVisible();
		await expect(page.getByText(/Content Writing/i)).toBeVisible();
		await expect(page.getByText(/Ongoing Maintenance/i)).toBeVisible();
	});

	test('should display pricing philosophy', async ({ page }) => {
		await expect(page.getByRole('heading', { name: /Our Pricing Philosophy/i })).toBeVisible();
		await expect(page.getByText(/Fixed pricing/i)).toBeVisible();
	});

	test('should display comparison table', async ({ page }) => {
		await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
		await expect(page.getByRole('heading', { name: /Cost Comparison/i })).toBeVisible();
		await expect(page.getByText(/DIY Website Builder/i)).toBeVisible();
		await expect(page.getByText(/Cheap Freelancer/i)).toBeVisible();
		await expect(page.getByText(/Blackforge Digital/i)).toBeVisible();
	});

	test('should have CTA buttons', async ({ page }) => {
		const ctaButtons = page.getByRole('link', { name: /Get a Proposal/i });
		const count = await ctaButtons.count();
		expect(count).toBeGreaterThan(0);
	});

	test('should scroll through all sections', async ({ page }) => {
		await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
		await page.waitForTimeout(500);
		await expect(page.getByRole('heading', { name: /Ready to Get Started/i })).toBeVisible();
	});
});
