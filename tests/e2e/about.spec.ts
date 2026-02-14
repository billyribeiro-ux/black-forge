/**
 * E2E tests for About page.
 * 
 * @module tests/e2e/about.spec
 */

import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/about');
	});

	test('should display hero section', async ({ page }) => {
		await expect(page.getByRole('heading', { name: /Built Different/i })).toBeVisible();
	});

	test('should display origin story', async ({ page }) => {
		await expect(page.getByRole('heading', { name: /The Origin Story/i })).toBeVisible();
		await expect(page.getByText(/We started Blackforge in 2014/i)).toBeVisible();
	});

	test('should display values section', async ({ page }) => {
		await expect(page.getByRole('heading', { name: /Principles\. Not Platitudes/i })).toBeVisible();
		
		// Check all six values
		await expect(page.getByText(/Performance Is Non-Negotiable/i)).toBeVisible();
		await expect(page.getByText(/Code Quality Over Speed/i)).toBeVisible();
		await expect(page.getByText(/Radical Transparency/i)).toBeVisible();
		await expect(page.getByText(/Own Your Code/i)).toBeVisible();
		await expect(page.getByText(/Small Team, Big Standards/i)).toBeVisible();
		await expect(page.getByText(/Build for the Long Game/i)).toBeVisible();
	});

	test('should display team section', async ({ page }) => {
		await expect(page.getByRole('heading', { name: /The Team/i })).toBeVisible();
		
		// Check team members
		await expect(page.getByText(/Alex Rivera/i)).toBeVisible();
		await expect(page.getByText(/Founder & Lead Engineer/i)).toBeVisible();
		await expect(page.getByText(/Jennifer Park/i)).toBeVisible();
		await expect(page.getByText(/Marcus Chen/i)).toBeVisible();
	});

	test('should display team member social links', async ({ page }) => {
		const linkedinLinks = page.getByLabel(/LinkedIn profile/i);
		const count = await linkedinLinks.count();
		expect(count).toBeGreaterThan(0);
	});

	test('should display toolkit section', async ({ page }) => {
		await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
		await expect(page.getByRole('heading', { name: /Our Toolkit/i })).toBeVisible();
		
		// Check some technologies
		await expect(page.getByText(/SvelteKit/i)).toBeVisible();
		await expect(page.getByText(/TypeScript/i)).toBeVisible();
		await expect(page.getByText(/React/i)).toBeVisible();
		await expect(page.getByText(/Node\.js/i)).toBeVisible();
	});

	test('should have CTA section', async ({ page }) => {
		await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
		await expect(page.getByRole('heading', { name: /Work With Us/i })).toBeVisible();
	});

	test('should scroll through all sections', async ({ page }) => {
		await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
		await page.waitForTimeout(500);
		await expect(page.getByRole('heading', { name: /Work With Us/i })).toBeVisible();
	});
});
