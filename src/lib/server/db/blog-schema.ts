/**
 * Blog post database schema.
 *
 * Defines tables for blog posts with full metadata and content.
 *
 * @module server/db/blog-schema
 */

import { pgTable, text, timestamp, boolean, integer, jsonb } from 'drizzle-orm/pg-core';
import { users } from './auth-schema';

/**
 * Blog posts table.
 */
export const blogPosts = pgTable('blog_post', {
	id: text('id').primaryKey(),
	title: text('title').notNull(),
	slug: text('slug').notNull().unique(),
	excerpt: text('excerpt').notNull(),
	content: text('content').notNull(),
	htmlContent: text('htmlContent').notNull(),
	category: text('category').notNull(),
	status: text('status').notNull().default('draft'), // 'draft' | 'published'
	featured: boolean('featured').notNull().default(false),
	featuredImage: text('featuredImage'),
	featuredImageAlt: text('featuredImageAlt'),
	readTime: integer('readTime').notNull(),
	views: integer('views').notNull().default(0),
	tags: jsonb('tags').$type<string[]>().notNull().default([]),
	seo: jsonb('seo')
		.$type<{
			metaTitle: string;
			metaDescription: string;
			focusKeyword: string;
			ogImage?: string;
		}>()
		.notNull(),
	authorId: text('authorId')
		.notNull()
		.references(() => users.id),
	publishedAt: timestamp('publishedAt'),
	createdAt: timestamp('createdAt').notNull().defaultNow(),
	updatedAt: timestamp('updatedAt').notNull().defaultNow()
});

/**
 * Type for blog post insert.
 */
export type BlogPostInsert = typeof blogPosts.$inferInsert;

/**
 * Type for blog post select.
 */
export type BlogPostSelect = typeof blogPosts.$inferSelect;
