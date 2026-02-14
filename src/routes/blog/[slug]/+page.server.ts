/**
 * Blog post data loader.
 *
 * Loads blog post data from markdown files or database.
 * Implements caching and ISR for optimal performance.
 *
 * @module routes/blog/[slug]/+page.server
 */

import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { BlogPost } from '$lib/types/blog';

/**
 * Mock blog posts database.
 *
 * In production, this would be replaced with actual database queries
 * or markdown file parsing with MDsveX.
 */
const blogPosts: Record<string, BlogPost> = {
	'sveltekit-vs-wordpress': {
		title: 'Why Your Next Website Should Be Built on SvelteKit — Not WordPress',
		slug: 'sveltekit-vs-wordpress',
		excerpt:
			"WordPress powers 40% of the internet. It also accounts for 90% of hacked CMS sites. Here's why modern frameworks deliver better performance, security, and ROI for serious businesses.",
		category: 'Web Development',
		author: {
			name: 'Alex Rivera',
			role: 'Founder & Lead Engineer',
			bio: 'Full-stack engineer with 12 years building production applications. Obsessed with performance and clean architecture.',
			avatar: '/images/team/alex.jpg',
			social: {
				twitter: 'https://twitter.com/alexrivera',
				linkedin: 'https://linkedin.com/in/alexrivera',
				github: 'https://github.com/alexrivera'
			}
		},
		publishedAt: '2025-01-15T10:00:00Z',
		readTime: 8,
		featured: true,
		featuredImage: '/images/blog/sveltekit-vs-wordpress.jpg',
		featuredImageAlt: 'SvelteKit vs WordPress comparison',
		tags: ['SvelteKit', 'WordPress', 'Performance', 'Security'],
		seo: {
			metaTitle: 'SvelteKit vs WordPress: Why Modern Frameworks Win in 2025',
			metaDescription:
				'WordPress accounts for 90% of hacked CMS sites. Learn why SvelteKit delivers better performance, security, and ROI for serious businesses.',
			focusKeyword: 'SvelteKit vs WordPress',
			ogImage: '/images/blog/sveltekit-vs-wordpress-og.jpg'
		},
		content: `# The WordPress Problem

WordPress powers 40% of the internet. It's also responsible for 90% of hacked CMS sites. If you're building a serious business in 2025, WordPress is a liability, not an asset.

## Performance: The Hidden Tax

Every WordPress site ships with:
- 50+ database queries per page load
- 2MB+ of JavaScript (jQuery, plugins, themes)
- Render-blocking CSS from multiple sources
- Unoptimized images loaded synchronously

**Result:** Average load time of 3-5 seconds. Google penalizes sites over 2.5s.

### SvelteKit's Performance Advantage

SvelteKit compiles to vanilla JavaScript at build time:
- Zero runtime overhead
- Sub-100ms server response times
- Automatic code splitting
- Optimized asset delivery

**Real numbers from our projects:**
- WordPress site: 4.2s load time, 78 Lighthouse score
- SvelteKit rebuild: 0.8s load time, 98 Lighthouse score

## Security: The WordPress Vulnerability Crisis

WordPress security issues stem from its architecture:

1. **Plugin ecosystem**: Average site runs 20+ plugins, each a potential attack vector
2. **PHP vulnerabilities**: Legacy codebase with known exploits
3. **Database exposure**: Direct SQL queries vulnerable to injection
4. **Update fatigue**: Constant security patches create maintenance burden

### The SvelteKit Security Model

- **No database by default**: Static generation eliminates SQL injection
- **Minimal attack surface**: No admin panel to exploit
- **Modern security**: Built-in CSRF protection, XSS prevention
- **Dependency management**: Automated security audits via npm

## Cost of Ownership

### WordPress Hidden Costs

- **Hosting**: $50-200/month for decent performance
- **Premium plugins**: $200-500/year
- **Security monitoring**: $100-300/year
- **Developer maintenance**: 5-10 hours/month
- **Emergency fixes**: $500-2000 per incident

**Annual cost: $3,000-8,000**

### SvelteKit Total Cost

- **Hosting**: $0-20/month (Vercel, Netlify free tier)
- **Dependencies**: $0 (open source)
- **Maintenance**: 1-2 hours/month
- **Security incidents**: Near zero

**Annual cost: $500-1,500**

## Developer Experience

WordPress development in 2025 feels like time travel to 2010:
- PHP templating with mixed HTML/logic
- Global state management via hooks
- No TypeScript support
- Manual asset optimization

SvelteKit provides modern DX:
- TypeScript-first
- Component-based architecture
- Hot module replacement
- Built-in testing utilities

## When WordPress Still Makes Sense

WordPress isn't always wrong. It's appropriate for:
- Non-technical users who need a visual editor
- Content-heavy sites with 100+ editors
- Legacy systems with deep WordPress integration
- Blogs where performance isn't critical

## Migration Strategy

Moving from WordPress to SvelteKit:

1. **Audit current site**: Identify essential features
2. **Export content**: Use WordPress REST API or export tools
3. **Rebuild with SvelteKit**: Modern stack, clean architecture
4. **Preserve SEO**: 301 redirects, sitemap migration
5. **Launch**: Zero downtime deployment

**Timeline:** 6-12 weeks for most sites

## The Bottom Line

WordPress made sense in 2010. In 2025, it's technical debt.

For businesses that value:
- **Performance**: Sub-second load times
- **Security**: Sleep at night
- **Cost**: Predictable, low overhead
- **Scalability**: Handle traffic spikes

SvelteKit (or Next.js, Astro, etc.) is the only rational choice.

## Ready to Migrate?

We've rebuilt 50+ WordPress sites with modern frameworks. Average results:
- 340% faster load times
- 90% reduction in security incidents
- 60% lower hosting costs
- 2.1x higher conversion rates

[Schedule a migration consultation →](/contact)`,
		htmlContent: '',
		tableOfContents: [
			{ id: 'the-wordpress-problem', text: 'The WordPress Problem', level: 2 },
			{ id: 'performance-the-hidden-tax', text: 'Performance: The Hidden Tax', level: 2 },
			{
				id: 'security-the-wordpress-vulnerability-crisis',
				text: 'Security: The WordPress Vulnerability Crisis',
				level: 2
			},
			{ id: 'cost-of-ownership', text: 'Cost of Ownership', level: 2 },
			{ id: 'developer-experience', text: 'Developer Experience', level: 2 },
			{
				id: 'when-wordpress-still-makes-sense',
				text: 'When WordPress Still Makes Sense',
				level: 2
			},
			{ id: 'migration-strategy', text: 'Migration Strategy', level: 2 },
			{ id: 'the-bottom-line', text: 'The Bottom Line', level: 2 }
		],
		relatedPosts: [
			{
				title: 'Technical SEO Checklist for 2025',
				slug: 'technical-seo-checklist-2025',
				excerpt:
					'The 47 technical SEO items we audit on every project. Core Web Vitals, schema, crawlability, and more.',
				category: 'SEO & Growth',
				author: {
					name: 'Jennifer Park',
					role: 'SEO Strategist',
					bio: 'SEO specialist focused on technical optimization and data-driven strategies.',
					avatar: '/images/team/jennifer.jpg',
					social: {}
				},
				publishedAt: '2025-01-28T10:00:00Z',
				readTime: 15,
				featured: false,
				featuredImage: '/images/blog/technical-seo.jpg',
				featuredImageAlt: 'Technical SEO checklist',
				tags: ['SEO', 'Technical SEO', 'Core Web Vitals'],
				seo: {
					metaTitle: 'Technical SEO Checklist for 2025',
					metaDescription: 'Complete technical SEO audit checklist with 47 items.',
					focusKeyword: 'technical SEO checklist'
				}
			},
			{
				title: 'TypeScript Strict Mode: Why We Mandate It',
				slug: 'typescript-strict-mode',
				excerpt:
					'How strict mode catches bugs before they ship and why every serious project should enforce it.',
				category: 'Technical Deep-Dives',
				author: {
					name: 'Alex Rivera',
					role: 'Founder & Lead Engineer',
					bio: 'Full-stack engineer with 12 years building production applications.',
					avatar: '/images/team/alex.jpg',
					social: {}
				},
				publishedAt: '2024-12-28T10:00:00Z',
				readTime: 9,
				featured: false,
				featuredImage: '/images/blog/typescript-strict.jpg',
				featuredImageAlt: 'TypeScript strict mode',
				tags: ['TypeScript', 'Code Quality', 'Best Practices'],
				seo: {
					metaTitle: 'TypeScript Strict Mode: Why We Mandate It',
					metaDescription: 'Learn why TypeScript strict mode is essential for production code.',
					focusKeyword: 'TypeScript strict mode'
				}
			},
			{
				title: 'Headless CMS: The End of WordPress?',
				slug: 'headless-cms-guide',
				excerpt:
					'Comparing Sanity, Contentful, and Strapi to WordPress for modern web applications.',
				category: 'Web Development',
				author: {
					name: 'Marcus Chen',
					role: 'Backend Architect',
					bio: 'Backend specialist focused on scalable architecture and API design.',
					avatar: '/images/team/marcus.jpg',
					social: {}
				},
				publishedAt: '2024-12-18T10:00:00Z',
				readTime: 11,
				featured: false,
				featuredImage: '/images/blog/headless-cms.jpg',
				featuredImageAlt: 'Headless CMS comparison',
				tags: ['CMS', 'Headless', 'WordPress'],
				seo: {
					metaTitle: 'Headless CMS: The End of WordPress?',
					metaDescription: 'Compare modern headless CMS options to traditional WordPress.',
					focusKeyword: 'headless CMS'
				}
			}
		]
	}
};

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	const { slug } = params;

	// Get blog post
	const post = blogPosts[slug];

	if (!post) {
		error(404, {
			message: `Blog post not found: ${slug}`
		});
	}

	// Convert markdown to HTML (in production, use marked or similar)
	post.htmlContent = post.content
		.split('\n')
		.map((line) => {
			if (line.startsWith('# ')) {
				const text = line.slice(2);
				const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
				return `<h2 id="${id}">${text}</h2>`;
			}
			if (line.startsWith('## ')) {
				const text = line.slice(3);
				const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
				return `<h3 id="${id}">${text}</h3>`;
			}
			if (line.startsWith('### ')) {
				return `<h4>${line.slice(4)}</h4>`;
			}
			if (line.startsWith('- ')) {
				return `<li>${line.slice(2)}</li>`;
			}
			if (line.startsWith('**') && line.endsWith('**')) {
				return `<p><strong>${line.slice(2, -2)}</strong></p>`;
			}
			if (line.trim() === '') {
				return '';
			}
			return `<p>${line}</p>`;
		})
		.join('\n');

	// Cache for 5 minutes, stale-while-revalidate for 1 hour
	setHeaders({
		'Cache-Control': 'public, max-age=300, s-maxage=300, stale-while-revalidate=3600'
	});

	return { post };
};
