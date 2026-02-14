/**
 * Blog post types and interfaces.
 *
 * @module types/blog
 */

/**
 * Blog post category.
 */
export type BlogCategory =
	| 'Web Development'
	| 'App Development'
	| 'SEO & Growth'
	| 'Case Studies'
	| 'Industry Insights'
	| 'Technical Deep-Dives';

/**
 * Blog post author.
 */
export interface BlogAuthor {
	name: string;
	role: string;
	bio: string;
	avatar: string;
	social: {
		twitter?: string;
		linkedin?: string;
		github?: string;
	};
}

/**
 * Blog post metadata.
 */
export interface BlogPostMeta {
	title: string;
	slug: string;
	excerpt: string;
	category: BlogCategory;
	author: BlogAuthor;
	publishedAt: string;
	updatedAt?: string;
	readTime: number;
	featured: boolean;
	featuredImage: string;
	featuredImageAlt: string;
	tags: string[];
	seo: {
		metaTitle: string;
		metaDescription: string;
		focusKeyword: string;
		ogImage?: string;
	};
}

/**
 * Complete blog post with content.
 */
export interface BlogPost extends BlogPostMeta {
	content: string;
	htmlContent: string;
	tableOfContents: TableOfContentsItem[];
	relatedPosts: BlogPostMeta[];
}

/**
 * Table of contents item.
 */
export interface TableOfContentsItem {
	id: string;
	text: string;
	level: 2 | 3;
	children?: TableOfContentsItem[];
}
