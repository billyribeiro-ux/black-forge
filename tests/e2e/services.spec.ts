/**
 * E2E tests for Services page.
 *
 * @module tests/e2e/services.spec
 */

import { test, expect } from '@playwright/test';

test.describe('Services Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/services');
	});

	test('should display hero section', async ({ page }) => {
		await expect(page.getByRole('heading', { name: /Everything You Need/i })).toBeVisible();
		await expect(page.getByText(/Three core disciplines/i)).toBeVisible();
	});

	test('should display all three service sections', async ({ page }) => {
		await expect(page.getByRole('heading', { name: /Web Development/i })).toBeVisible();
		await expect(page.getByRole('heading', { name: /App Development/i })).toBeVisible();
		await expect(page.getByRole('heading', { name: /SEO & Growth/i })).toBeVisible();
	});

	test('should display web development capabilities', async ({ page }) => {
		await expect(page.getByText(/Custom Web Applications/i)).toBeVisible();
		await expect(page.getByText(/E-Commerce Platforms/i)).toBeVisible();
		await expect(page.getByText(/SaaS Products/i)).toBeVisible();
		await expect(page.getByText(/Marketing Sites/i)).toBeVisible();
		await expect(page.getByText(/Progressive Web Apps/i)).toBeVisible();
		await expect(page.getByText(/API Development/i)).toBeVisible();
	});

	test('should display app development capabilities', async ({ page }) => {
		await expect(page.getByText(/Native iOS & Android/i)).toBeVisible();
		await expect(page.getByText(/Cross-Platform Apps/i)).toBeVisible();
		await expect(page.getByText(/Real-Time Features/i)).toBeVisible();
	});

	test('should display SEO capabilities', async ({ page }) => {
		await expect(page.getByText(/Technical SEO Audits/i)).toBeVisible();
		await expect(page.getByText(/Content Strategy/i)).toBeVisible();
		await expect(page.getByText(/Local SEO/i)).toBeVisible();
	});

	test('should display comparison table', async ({ page }) => {
		await expect(
			page.getByRole('heading', { name: /Blackforge vs\. Typical Agency/i })
		).toBeVisible();
		await expect(page.getByText(/Custom-built from scratch/i)).toBeVisible();
		await expect(page.getByText(/Template-based/i)).toBeVisible();
	});

	test('should have CTA button', async ({ page }) => {
		const ctaButton = page.getByRole('link', { name: /Let's Build Something/i });
		await expect(ctaButton).toBeVisible();
		await expect(ctaButton).toHaveAttribute('href', '/contact');
	});

	test('should scroll through all sections', async ({ page }) => {
		await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
		await page.waitForTimeout(500);
		await expect(page.getByRole('heading', { name: /Let's Build Something/i })).toBeVisible();
	});
});
