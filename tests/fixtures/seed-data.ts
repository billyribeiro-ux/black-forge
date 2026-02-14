/**
 * Seed data for E2E testing.
 *
 * Provides realistic test data for all components and pages.
 *
 * @module tests/fixtures/seed-data
 */

export const projects = [
	{
		id: 'meridian-home-goods',
		category: 'E-Commerce',
		title: 'Meridian Home Goods',
		result: '340% increase in page speed. $2.1M monthly revenue.',
		stack: ['SvelteKit', 'Shopify Headless', 'Cloudflare Workers'],
		description:
			'Complete platform rebuild that increased page speed by 340% and conversion rate by 2.1x.',
		image: '/images/projects/meridian.jpg'
	},
	{
		id: 'pulsetrack-fitness',
		category: 'App Development',
		title: 'PulseTrack Fitness',
		result: '4.9★ App Store rating. 50k+ downloads month one.',
		stack: ['React Native', 'Node.js', 'PostgreSQL'],
		description:
			'Native fitness tracking app with real-time workout analytics and social features.',
		image: '/images/projects/pulsetrack.jpg'
	},
	{
		id: 'atlas-financial',
		category: 'Web Development',
		title: 'Atlas Financial Dashboard',
		result: 'Sub-100ms render times. 50k data points/second.',
		stack: ['React', 'TypeScript', 'WebSockets', 'AWS'],
		description:
			'Enterprise dashboard processing 50k+ data points per second with sub-100ms render times.',
		image: '/images/projects/atlas.jpg'
	}
];

export const blogPosts = [
	{
		id: 'sveltekit-vs-wordpress',
		category: 'Web Development',
		title: 'Why Your Next Website Should Be Built on SvelteKit — Not WordPress',
		excerpt:
			"WordPress powers 40% of the internet. It also accounts for 90% of hacked CMS sites. Here's why modern frameworks deliver better performance, security, and ROI for serious businesses.",
		author: 'Alex Rivera',
		date: 'Jan 15, 2025',
		readTime: '8 min read'
	},
	{
		id: 'technical-seo-checklist',
		category: 'SEO & Growth',
		title: 'Technical SEO Checklist for 2025',
		excerpt:
			'The 47 technical SEO items we audit on every project. Core Web Vitals, schema, crawlability, and more.',
		author: 'Jennifer Park',
		date: 'Jan 28, 2025',
		readTime: '15 min read'
	}
];

export const testimonials = [
	{
		quote:
			"Blackforge didn't just build us a website — they engineered a revenue machine. Our conversion rate tripled in the first month.",
		author: 'Sarah Chen',
		title: 'CEO, Meridian Home Goods'
	},
	{
		quote:
			'Finally, a team that actually understands performance. Sub-second load times and our Google rankings doubled. Worth every penny.',
		author: 'Michael Torres',
		title: 'Partner, Sterling & Associates Law'
	}
];

export const contactFormData = {
	valid: {
		name: 'John Smith',
		email: 'john.smith@example.com',
		phone: '(203) 555-0100',
		company: 'Acme Corp',
		service: 'web',
		budget: '15k-30k',
		message:
			'We need a complete website rebuild for our e-commerce platform. Looking for a team that can handle both frontend and backend development.'
	},
	invalid: {
		name: '',
		email: 'invalid-email',
		phone: 'abc',
		company: '',
		service: '',
		budget: '',
		message: 'Too short'
	}
};

export const navLinks = [
	{ label: 'Services', href: '/services' },
	{ label: 'Work', href: '/portfolio' },
	{ label: 'About', href: '/about' },
	{ label: 'Process', href: '/process' },
	{ label: 'Blog', href: '/blog' }
];

export const serviceCategories = ['Web Development', 'App Development', 'SEO & Growth'];

export const pricingTiers = [
	{ name: 'Foundation', price: '$8,000' },
	{ name: 'Professional', price: '$20,000' },
	{ name: 'Enterprise', price: '$40,000' }
];
