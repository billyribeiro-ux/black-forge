/**
 * Zod validation schemas for blog posts.
 *
 * @module schemas/blog
 */

import { z } from 'zod';

/**
 * Blog category enum schema.
 */
export const blogCategorySchema = z.enum([
	'Web Development',
	'App Development',
	'SEO & Growth',
	'Case Studies',
	'Industry Insights',
	'Technical Deep-Dives'
]);

/**
 * Blog author schema.
 */
export const blogAuthorSchema = z.object({
	name: z.string().min(1).max(100),
	role: z.string().min(1).max(100),
	bio: z.string().min(1).max(500),
	avatar: z.string().url(),
	social: z.object({
		twitter: z.string().url().optional(),
		linkedin: z.string().url().optional(),
		github: z.string().url().optional()
	})
});

/**
 * Blog post metadata schema.
 */
export const blogPostMetaSchema = z.object({
	title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
	slug: z
		.string()
		.min(1, 'Slug is required')
		.max(200, 'Slug too long')
		.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format'),
	excerpt: z.string().min(10).max(300),
	category: blogCategorySchema,
	author: blogAuthorSchema,
	publishedAt: z.string().datetime(),
	updatedAt: z.string().datetime().optional(),
	readTime: z.number().int().positive(),
	featured: z.boolean().default(false),
	featuredImage: z.string().url(),
	featuredImageAlt: z.string().max(200),
	tags: z.array(z.string()).max(10),
	seo: z.object({
		metaTitle: z.string().max(60),
		metaDescription: z.string().max(160),
		focusKeyword: z.string().max(50),
		ogImage: z.string().url().optional()
	})
});

/**
 * Complete blog post schema.
 */
export const blogPostSchema = blogPostMetaSchema.extend({
	content: z.string().min(100, 'Content too short'),
	htmlContent: z.string(),
	tableOfContents: z.array(
		z.object({
			id: z.string(),
			text: z.string(),
			level: z.union([z.literal(2), z.literal(3)]),
			children: z.array(z.any()).optional()
		})
	),
	relatedPosts: z.array(blogPostMetaSchema).max(3)
});

export type BlogPostInput = z.infer<typeof blogPostSchema>;
export type BlogPostMetaInput = z.infer<typeof blogPostMetaSchema>;
