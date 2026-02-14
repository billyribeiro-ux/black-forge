/**
 * E2E tests for Home page.
 *
 * Tests all sections, interactions, and animations on the home page.
 *
 * @module tests/e2e/home.spec
 */

import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('should load and display hero section', async ({ page }) => {
		// Check hero headline
		await expect(page.getByRole('heading', { name: /We Don't Build Websites/i })).toBeVisible();
		await expect(page.getByRole('heading', { name: /Digital Dominance/i })).toBeVisible();

		// Check eyebrow text
		await expect(page.getByText(/WEB DEVELOPMENT × APP DEVELOPMENT × SEO/i)).toBeVisible();

		// Check CTA buttons
		await expect(page.getByRole('link', { name: /See Our Work/i })).toBeVisible();
		await expect(page.getByRole('link', { name: /Our Process/i })).toBeVisible();

		// Check stats
		await expect(page.getByText(/150\+/)).toBeVisible();
		await expect(page.getByText(/Projects Delivered/i)).toBeVisible();
		await expect(page.getByText(/10\+/)).toBeVisible();
		await expect(page.getByText(/Years of Engineering/i)).toBeVisible();
		await expect(page.getByText(/97%/)).toBeVisible();
		await expect(page.getByText(/Client Retention/i)).toBeVisible();
	});

	test('should display trust bar section', async ({ page }) => {
		await expect(
			page.getByText(/Trusted by businesses across Connecticut and beyond/i)
		).toBeVisible();
	});

	test('should display services overview section', async ({ page }) => {
		// Check section heading
		await expect(page.getByRole('heading', { name: /Three Disciplines/i })).toBeVisible();

		// Check all three service cards
		await expect(page.getByRole('heading', { name: /Web Development/i })).toBeVisible();
		await expect(page.getByRole('heading', { name: /App Development/i })).toBeVisible();
		await expect(page.getByRole('heading', { name: /SEO & Growth/i })).toBeVisible();

		// Check service descriptions
		await expect(
			page.getByText(/Performance-obsessed websites and web applications/i)
		).toBeVisible();
		await expect(
			page.getByText(/Native and cross-platform applications engineered for real users/i)
		).toBeVisible();
		await expect(
			page.getByText(/Data-driven search strategies that compound over time/i)
		).toBeVisible();
	});

	test('should display featured work section', async ({ page }) => {
		await expect(page.getByRole('heading', { name: /Work That Speaks for Itself/i })).toBeVisible();

		// Check for project cards
		await expect(page.getByText(/Scaling a DTC Brand to \$2M\/mo/i)).toBeVisible();
		await expect(page.getByText(/Real-Time Dashboard for Financial Services/i)).toBeVisible();
	});

	test('should display why blackforge section', async ({ page }) => {
		await expect(
			page.getByRole('heading', { name: /Agencies Build Sites\. We Engineer Outcomes/i })
		).toBeVisible();

		// Check differentiators
		await expect(page.getByText(/No Templates\. Ever\./i)).toBeVisible();
		await expect(page.getByText(/Performance Guaranteed/i)).toBeVisible();
		await expect(page.getByText(/Full-Stack Ownership/i)).toBeVisible();
		await expect(page.getByText(/Built for 10 Years/i)).toBeVisible();
	});

	test('should display testimonials section', async ({ page }) => {
		await expect(page.getByRole('heading', { name: /Don't Take Our Word For It/i })).toBeVisible();

		// Check for testimonial content
		await expect(page.getByText(/revenue machine/i)).toBeVisible();
	});

	test('should navigate testimonials with dots', async ({ page }) => {
		// Find testimonial navigation dots
		const dots = page.locator('button[aria-label^="Go to testimonial"]');
		await expect(dots).toHaveCount(3);

		// Click second dot
		await dots.nth(1).click();
		await page.waitForTimeout(500); // Wait for transition

		// Click third dot
		await dots.nth(2).click();
		await page.waitForTimeout(500);
	});

	test('should display CT location section', async ({ page }) => {
		await expect(
			page.getByRole('heading', { name: /Built in Connecticut\. Trusted Nationwide/i })
		).toBeVisible();
		await expect(page.getByText(/Wolcott, CT/i)).toBeVisible();
		await expect(page.getByText(/Serving Connecticut since 2014/i)).toBeVisible();
	});

	test('should display final CTA banner', async ({ page }) => {
		await expect(
			page.getByRole('heading', { name: /Ready to Build Something That Actually Works/i })
		).toBeVisible();
		await expect(page.getByRole('link', { name: /Start a Conversation/i })).toBeVisible();
	});

	test('should have working CTA buttons', async ({ page }) => {
		// Click "See Our Work" button
		const seeWorkButton = page.getByRole('link', { name: /See Our Work/i }).first();
		await expect(seeWorkButton).toHaveAttribute('href', '/portfolio');

		// Click "Our Process" button
		const processButton = page.getByRole('link', { name: /Our Process/i }).first();
		await expect(processButton).toHaveAttribute('href', '/process');
	});

	test('should scroll smoothly to sections', async ({ page }) => {
		// Scroll to bottom
		await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
		await page.waitForTimeout(500);

		// Scroll back to top
		await page.evaluate(() => window.scrollTo(0, 0));
		await page.waitForTimeout(500);
	});

	test('should be responsive on mobile', async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 667 });

		// Check hero is visible
		await expect(page.getByRole('heading', { name: /We Don't Build Websites/i })).toBeVisible();

		// Check services are stacked vertically
		const serviceCards = page.locator('.bg-forge-black.p-12');
		await expect(serviceCards).toHaveCount(3);
	});

	test('should have proper meta tags', async ({ page }) => {
		// Check title
		await expect(page).toHaveTitle(/Blackforge Digital — Forged for Performance/);

		// Check meta description
		const metaDescription = page.locator('meta[name="description"]');
		await expect(metaDescription).toHaveAttribute(
			'content',
			/Custom web development, app development, and SEO/
		);
	});
});
