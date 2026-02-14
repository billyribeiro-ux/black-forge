/**
 * E2E tests for Process page.
 *
 * @module tests/e2e/process.spec
 */

import { test, expect } from '@playwright/test';

test.describe('Process Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/process');
	});

	test('should display hero section', async ({ page }) => {
		await expect(page.getByRole('heading', { name: /Precision Has a Process/i })).toBeVisible();
	});

	test('should display all six phases', async ({ page }) => {
		await expect(
			page.getByRole('heading', { name: /Phase 1 — Discovery & Strategy/i })
		).toBeVisible();
		await expect(
			page.getByRole('heading', { name: /Phase 2 — Design & Prototyping/i })
		).toBeVisible();
		await expect(
			page.getByRole('heading', { name: /Phase 3 — Engineering & Development/i })
		).toBeVisible();
		await expect(page.getByRole('heading', { name: /Phase 4 — Testing & QA/i })).toBeVisible();
		await expect(page.getByRole('heading', { name: /Phase 5 — Launch/i })).toBeVisible();
		await expect(
			page.getByRole('heading', { name: /Phase 6 — Growth & Optimization/i })
		).toBeVisible();
	});

	test('should display phase deliverables', async ({ page }) => {
		await expect(page.getByText(/Technical specification document/i)).toBeVisible();
		await expect(page.getByText(/Wireframes & user flows/i)).toBeVisible();
		await expect(page.getByText(/Production-ready codebase/i)).toBeVisible();
	});

	test('should display phase durations', async ({ page }) => {
		await expect(page.getByText(/2 weeks/i)).toBeVisible();
		await expect(page.getByText(/3 weeks/i)).toBeVisible();
		await expect(page.getByText(/7 weeks/i)).toBeVisible();
	});

	test('should display timeline visualization', async ({ page }) => {
		await expect(page.getByRole('heading', { name: /Typical Project Timeline/i })).toBeVisible();
		await expect(page.getByText(/Weeks 1-2/i)).toBeVisible();
		await expect(page.getByText(/Weeks 3-5/i)).toBeVisible();
	});

	test('should display FAQ section', async ({ page }) => {
		await expect(page.getByRole('heading', { name: /Frequently Asked Questions/i })).toBeVisible();
		await expect(page.getByText(/How much does a project cost/i)).toBeVisible();
		await expect(page.getByText(/How long does a typical project take/i)).toBeVisible();
	});

	test('should toggle FAQ items', async ({ page }) => {
		// Find first FAQ button
		const faqButton = page.getByRole('button', { name: /How much does a project cost/i });
		await faqButton.click();
		await page.waitForTimeout(300);

		// Answer should be visible
		await expect(page.getByText(/Every project is scoped individually/i)).toBeVisible();

		// Click again to close
		await faqButton.click();
		await page.waitForTimeout(300);
	});

	test('should have CTA section', async ({ page }) => {
		await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
		await expect(page.getByRole('heading', { name: /Ready to Start/i })).toBeVisible();
	});
});
