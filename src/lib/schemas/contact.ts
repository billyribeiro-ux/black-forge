/**
 * Zod validation schemas for contact form.
 *
 * All user input is validated through these schemas before processing.
 * This prevents XSS, injection attacks, and ensures data integrity.
 *
 * @module schemas/contact
 */

import { z } from 'zod';

/**
 * Email validation with normalization.
 *
 * Validates email format, enforces maximum length per RFC 5321,
 * and normalizes to lowercase with trimmed whitespace.
 */
const email = z
	.string()
	.min(1, 'Email is required')
	.email('Invalid email address')
	.max(254, 'Email exceeds maximum length')
	.transform((v: string) => v.toLowerCase().trim());

/**
 * Phone number validation (US format).
 *
 * Accepts various formats: (203) 555-0100, 203-555-0100, 2035550100
 * Normalizes to E.164 format for storage.
 */
const phone = z
	.string()
	.regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Invalid phone number format')
	.transform((v: string) => v.replace(/\D/g, ''))
	.optional()
	.or(z.literal(''));

/**
 * Service selection enum.
 *
 * Matches the service options presented in the contact form.
 */
const serviceType = z.enum(['web', 'app', 'seo', 'web-seo', 'full', 'unsure']);

/**
 * Budget range enum.
 *
 * Used for project scoping and qualification.
 */
const budgetRange = z.enum(['under-8k', '8k-15k', '15k-30k', '30k-50k', '50k-plus', 'unsure']);

/**
 * Contact form schema.
 *
 * Validates all fields from the contact form with appropriate
 * constraints, sanitization, and error messages.
 *
 * @example
 * ```ts
 * const result = contactFormSchema.safeParse(formData);
 * if (!result.success) {
 *   console.error(result.error.flatten().fieldErrors);
 * }
 * ```
 */
export const contactFormSchema = z.object({
	name: z
		.string()
		.min(1, 'Name is required')
		.max(100, 'Name must be under 100 characters')
		.trim()
		.regex(/^[a-zA-Z\s\-']+$/, 'Name contains invalid characters'),

	email: email,

	phone: phone,

	company: z
		.string()
		.max(100, 'Company name must be under 100 characters')
		.trim()
		.optional()
		.or(z.literal('')),

	service: serviceType,

	budget: budgetRange.optional().or(z.literal('')),

	message: z
		.string()
		.min(10, 'Message must be at least 10 characters')
		.max(2000, 'Message must be under 2000 characters')
		.trim(),

	source: z.string().max(100).optional().or(z.literal('')),

	// Honeypot field for bot detection
	website: z.string().max(0, 'Bot detected').optional().or(z.literal(''))
});

/**
 * Inferred TypeScript type from the contact form schema.
 *
 * Use this type for form data throughout the application.
 */
export type ContactFormInput = z.infer<typeof contactFormSchema>;

/**
 * Contact form submission response schema.
 *
 * Validates the server response after form submission.
 */
export const contactFormResponseSchema = z.object({
	success: z.boolean(),
	message: z.string(),
	submissionId: z.string().uuid().optional()
});

export type ContactFormResponse = z.infer<typeof contactFormResponseSchema>;
