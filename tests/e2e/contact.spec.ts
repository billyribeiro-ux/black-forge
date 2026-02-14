/**
 * E2E tests for Contact page and form.
 * 
 * Tests form validation, submission, and all interactive elements.
 * 
 * @module tests/e2e/contact.spec
 */

import { test, expect } from '@playwright/test';
import { contactFormData } from '../fixtures/seed-data';

test.describe('Contact Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/contact');
	});

	test('should display contact page elements', async ({ page }) => {
		// Check heading
		await expect(page.getByRole('heading', { name: /Your Move/i })).toBeVisible();

		// Check direct contact information
		await expect(page.getByText(/hello@blackforge\.digital/i)).toBeVisible();
		await expect(page.getByText(/\(203\) 555-0100/i)).toBeVisible();
		await expect(page.getByText(/Wolcott, Connecticut 06716/i)).toBeVisible();

		// Check response time indicator
		await expect(page.getByText(/Average response time: under 4 hours/i)).toBeVisible();

		// Check social links
		await expect(page.getByLabel(/LinkedIn/i)).toBeVisible();
		await expect(page.getByLabel(/GitHub/i)).toBeVisible();
	});

	test('should display contact form', async ({ page }) => {
		// Check form heading
		await expect(page.getByRole('heading', { name: /Start Your Project/i })).toBeVisible();

		// Check all form fields
		await expect(page.getByLabel(/Full Name/i)).toBeVisible();
		await expect(page.getByLabel(/Email Address/i)).toBeVisible();
		await expect(page.getByLabel(/Phone Number/i)).toBeVisible();
		await expect(page.getByLabel(/Company/i)).toBeVisible();
		await expect(page.getByLabel(/What Do You Need/i)).toBeVisible();
		await expect(page.getByLabel(/Budget Range/i)).toBeVisible();
		await expect(page.getByLabel(/Tell Us About Your Project/i)).toBeVisible();

		// Check submit button
		await expect(page.getByRole('button', { name: /Submit Your Project/i })).toBeVisible();
	});

	test('should validate required fields', async ({ page }) => {
		// Try to submit empty form
		await page.getByRole('button', { name: /Submit Your Project/i }).click();

		// Check for HTML5 validation (browser will prevent submission)
		const nameInput = page.getByLabel(/Full Name/i);
		const isInvalid = await nameInput.evaluate((el: HTMLInputElement) => !el.validity.valid);
		expect(isInvalid).toBe(true);
	});

	test('should fill and submit contact form', async ({ page }) => {
		const { valid } = contactFormData;

		// Fill out form
		await page.getByLabel(/Full Name/i).fill(valid.name);
		await page.getByLabel(/Email Address/i).fill(valid.email);
		await page.getByLabel(/Phone Number/i).fill(valid.phone);
		await page.getByLabel(/Company/i).fill(valid.company);
		await page.getByLabel(/What Do You Need/i).selectOption(valid.service);
		await page.getByLabel(/Budget Range/i).selectOption(valid.budget);
		await page.getByLabel(/Tell Us About Your Project/i).fill(valid.message);

		// Submit form
		await page.getByRole('button', { name: /Submit Your Project/i }).click();

		// Wait for success state (or form processing)
		await page.waitForTimeout(1000);

		// Note: Actual submission would require backend implementation
		// This test verifies the form can be filled and submitted
	});

	test('should show character count for message field', async ({ page }) => {
		const message = 'This is a test message';
		await page.getByLabel(/Tell Us About Your Project/i).fill(message);

		// Check character count
		await expect(page.getByText(`${message.length} / 2000`)).toBeVisible();
	});

	test('should display alternative contact methods', async ({ page }) => {
		// Scroll to alternative methods section
		await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

		// Check section heading
		await expect(
			page.getByRole('heading', { name: /Prefer a Different Way to Connect/i })
		).toBeVisible();

		// Check contact method cards
		await expect(page.getByRole('heading', { name: /Email Us Directly/i })).toBeVisible();
		await expect(page.getByRole('heading', { name: /Call Our Team/i })).toBeVisible();
		await expect(page.getByRole('heading', { name: /Book a Strategy Call/i })).toBeVisible();
	});

	test('should have working email link', async ({ page }) => {
		const emailLink = page.getByRole('link', { name: /hello@blackforge\.digital/i }).first();
		await expect(emailLink).toHaveAttribute('href', 'mailto:hello@blackforge.digital');
	});

	test('should have working phone link', async ({ page }) => {
		const phoneLink = page.getByRole('link', { name: /\(203\) 555-0100/i }).first();
		await expect(phoneLink).toHaveAttribute('href', 'tel:+12035550100');
	});

	test('should display map section', async ({ page }) => {
		await expect(page.getByText(/Wolcott, CT 06716/i)).toBeVisible();
		await expect(page.getByText(/Serving businesses across Connecticut and nationwide/i)).toBeVisible();
	});

	test('should be responsive on mobile', async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 667 });

		// Form should be visible
		await expect(page.getByRole('heading', { name: /Start Your Project/i })).toBeVisible();

		// Form fields should stack vertically
		const nameInput = page.getByLabel(/Full Name/i);
		const emailInput = page.getByLabel(/Email Address/i);

		const nameBox = await nameInput.boundingBox();
		const emailBox = await emailInput.boundingBox();

		// Email should be below name (higher Y coordinate)
		expect(emailBox?.y).toBeGreaterThan(nameBox?.y ?? 0);
	});

	test('should have proper meta tags', async ({ page }) => {
		await expect(page).toHaveTitle(/Contact Us — Start Your Project/);

		const metaDescription = page.locator('meta[name="description"]');
		await expect(metaDescription).toHaveAttribute('content', /Ready to build something exceptional/);
	});

	test('should validate email format', async ({ page }) => {
		// Fill with invalid email
		await page.getByLabel(/Email Address/i).fill('invalid-email');
		await page.getByLabel(/Full Name/i).click(); // Blur email field

		// Check HTML5 validation
		const emailInput = page.getByLabel(/Email Address/i);
		const isInvalid = await emailInput.evaluate((el: HTMLInputElement) => !el.validity.valid);
		expect(isInvalid).toBe(true);
	});

	test('should enforce message length limits', async ({ page }) => {
		const longMessage = 'a'.repeat(2001);
		const messageField = page.getByLabel(/Tell Us About Your Project/i);

		await messageField.fill(longMessage);

		// Check that input is limited (HTML maxlength attribute)
		const actualValue = await messageField.inputValue();
		expect(actualValue.length).toBeLessThanOrEqual(2000);
	});
});
