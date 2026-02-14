/**
 * Blog post CRUD API endpoints.
 *
 * Handles creating, reading, updating, and deleting blog posts.
 * Protected by authentication middleware.
 *
 * @module routes/api/admin/blog/+server
 */

import type { RequestHandler } from './$types';
import { json, error } from '@sveltejs/kit';
import { blogPostSchema } from '$lib/schemas/blog';
import { nanoid } from 'nanoid';

/**
 * Create a new blog post.
 *
 * POST /api/admin/blog
 */
export const POST: RequestHandler = async ({ request, locals }) => {
	// Check authentication
	if (!locals.user) {
		error(401, 'Unauthorized');
	}

	try {
		const body = await request.json();

		const postId = nanoid();

		// Validate with Zod
		const validation = blogPostSchema.safeParse({
			...body,
			id: postId,
			htmlContent: body.content, // TipTap already provides HTML
			tableOfContents: extractTableOfContents(body.content),
			relatedPosts: [],
			author: {
				name: locals.user?.name || locals.user?.email?.split('@')[0] || 'Admin',
				role: 'Administrator',
				bio: 'Content creator at Blackforge Digital',
				avatar: '/images/team/default.jpg',
				social: {}
			},
			publishedAt: body.status === 'published' ? new Date().toISOString() : undefined
		});

		if (!validation.success) {
			return json(
				{ error: 'Validation failed', details: validation.error.flatten() },
				{ status: 400 }
			);
		}

		const post = validation.data;

		// TODO: Save to database
		// await db.insert(blogPosts).values(post);

		return json({ success: true, id: postId, slug: post.slug }, { status: 201 });
	} catch (err) {
		console.error('Error creating blog post:', err);
		error(500, 'Failed to create blog post');
	}
};

/**
 * Get all blog posts.
 *
 * GET /api/admin/blog
 */
export const GET: RequestHandler = async ({ locals }) => {
	// Check authentication
	if (!locals.user) {
		error(401, 'Unauthorized');
	}

	try {
		// TODO: Fetch from database
		// const posts = await db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));

		return json({ posts: [] });
	} catch (err) {
		console.error('Error fetching blog posts:', err);
		error(500, 'Failed to fetch blog posts');
	}
};

/**
 * Extract table of contents from HTML content.
 *
 * @param html - HTML content
 * @returns Array of TOC items
 */
function extractTableOfContents(html: string): Array<{
	id: string;
	text: string;
	level: 2 | 3;
}> {
	const toc: Array<{ id: string; text: string; level: 2 | 3 }> = [];
	const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
	const h3Regex = /<h3[^>]*>(.*?)<\/h3>/gi;

	let match;
	while ((match = h2Regex.exec(html)) !== null) {
		const text = match[1]?.replace(/<[^>]*>/g, '') || '';
		const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
		toc.push({ id, text, level: 2 });
	}

	while ((match = h3Regex.exec(html)) !== null) {
		const text = match[1]?.replace(/<[^>]*>/g, '') || '';
		const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
		toc.push({ id, text, level: 3 });
	}

	return toc;
}
