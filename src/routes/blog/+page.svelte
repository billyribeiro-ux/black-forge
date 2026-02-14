<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import Icon from '@iconify/svelte';

	let activeCategory = $state('All');
	let searchQuery = $state('');

	const categories = [
		'All',
		'Web Development',
		'App Development',
		'SEO & Growth',
		'Case Studies',
		'Industry Insights',
		'Technical Deep-Dives'
	];

	const featuredPost = {
		category: 'Web Development',
		title: 'Why Your Next Website Should Be Built on SvelteKit — Not WordPress',
		excerpt:
			'WordPress powers 40% of the internet. It also accounts for 90% of hacked CMS sites. Here's why modern frameworks deliver better performance, security, and ROI for serious businesses.',
		author: 'Alex Rivera',
		date: 'Jan 15, 2025',
		readTime: '8 min read',
		image: '/images/blog/sveltekit-vs-wordpress.jpg',
		href: '/blog/sveltekit-vs-wordpress'
	};

	const posts = [
		{
			category: 'Web Development',
			title: 'SvelteKit vs. Next.js: A Real-World Comparison',
			excerpt:
				'Framework comparison based on production projects. Performance benchmarks, DX, and when to choose which.',
			date: 'Feb 3, 2025',
			readTime: '12 min',
			href: '/blog/sveltekit-vs-nextjs'
		},
		{
			category: 'SEO & Growth',
			title: 'Technical SEO Checklist for 2025',
			excerpt:
				'The 47 technical SEO items we audit on every project. Core Web Vitals, schema, crawlability, and more.',
			date: 'Jan 28, 2025',
			readTime: '15 min',
			href: '/blog/technical-seo-checklist'
		},
		{
			category: 'App Development',
			title: 'When to Build Native vs. Cross-Platform',
			excerpt:
				'Cost analysis, performance trade-offs, and the honest answer to the biggest mobile dev question.',
			date: 'Jan 20, 2025',
			readTime: '10 min',
			href: '/blog/native-vs-cross-platform'
		},
		{
			category: 'Case Studies',
			title: 'How We 3x'd a Law Firm's Leads in 90 Days',
			excerpt:
				'Complete case study: technical SEO, content strategy, and local optimization for Sterling & Associates.',
			date: 'Jan 12, 2025',
			readTime: '8 min',
			href: '/blog/law-firm-case-study'
		},
		{
			category: 'Industry Insights',
			title: 'The Real Cost of a Slow Website',
			excerpt:
				'Data-backed analysis of how page speed affects revenue. Includes formulas to calculate your own loss.',
			date: 'Jan 5, 2025',
			readTime: '7 min',
			href: '/blog/cost-of-slow-website'
		},
		{
			category: 'Technical Deep-Dives',
			title: 'TypeScript Strict Mode: Why We Mandate It',
			excerpt:
				'How strict mode catches bugs before they ship and why every serious project should enforce it.',
			date: 'Dec 28, 2024',
			readTime: '9 min',
			href: '/blog/typescript-strict-mode'
		},
		{
			category: 'Web Development',
			title: 'Headless CMS: The End of WordPress?',
			excerpt:
				'Comparing Sanity, Contentful, and Strapi to WordPress for modern web applications.',
			date: 'Dec 18, 2024',
			readTime: '11 min',
			href: '/blog/headless-cms-guide'
		},
		{
			category: 'SEO & Growth',
			title: 'Local SEO for Connecticut Businesses',
			excerpt:
				'The complete guide to dominating Google Maps and local search in CT markets.',
			date: 'Dec 10, 2024',
			readTime: '14 min',
			href: '/blog/local-seo-ct'
		},
		{
			category: 'Technical Deep-Dives',
			title: 'GSAP Animations: Performance Best Practices',
			excerpt:
				'How to build smooth, 60fps animations without killing your Lighthouse score.',
			date: 'Dec 1, 2024',
			readTime: '10 min',
			href: '/blog/gsap-performance'
		}
	];

	const filteredPosts = $derived(
		posts.filter((post) => {
			const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
			const matchesSearch =
				searchQuery === '' ||
				post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesCategory && matchesSearch;
		})
	);
</script>

<svelte:head>
	<title>Blog — The Forge Journal | Blackforge Digital</title>
	<meta
		name="description"
		content="Technical deep-dives, strategic playbooks, and hard-won insights from the engineering trenches. No fluff. Real knowledge."
	/>
</svelte:head>

<!-- HERO -->
<Section background="black" padding="lg" grain={true}>
	<Container>
		<div class="max-w-4xl py-16">
			<Eyebrow class="mb-6">Insights</Eyebrow>
			<h1 class="font-clash text-5xl md:text-6xl font-bold mb-2">
				<span class="text-forge-white">The Forge</span>
				<span class="text-forge-ember">Journal</span>
			</h1>
			<p class="text-xl text-forge-smoke leading-relaxed max-w-2xl mb-8">
				Technical deep-dives, strategic playbooks, and hard-won insights from the engineering
				trenches. No fluff. No listicles. Real knowledge.
			</p>

			<div class="relative max-w-lg">
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Search articles..."
					class="w-full px-5 py-3 bg-forge-charcoal border border-forge-steel text-forge-white placeholder:text-forge-ash focus:border-forge-ember focus:outline-none focus:ring-1 focus:ring-forge-ember transition-colors"
				/>
				<Icon
					icon="ph:magnifying-glass"
					class="absolute right-4 top-1/2 -translate-y-1/2 text-forge-ash"
					width="20"
				/>
			</div>
		</div>
	</Container>
</Section>

<!-- FEATURED POST -->
<Section background="charcoal" padding="lg">
	<Container>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div class="aspect-video bg-forge-steel flex items-center justify-center group cursor-pointer">
				<span class="text-forge-ash text-sm group-hover:text-forge-ember transition-colors">
					Featured Image
				</span>
			</div>

			<div>
				<div
					class="inline-block px-3 py-1 bg-forge-ember/10 border border-forge-ember text-forge-ember font-jetbrains text-xs uppercase tracking-wider mb-4"
				>
					Featured
				</div>
				<div class="font-jetbrains text-xs uppercase tracking-wider text-forge-ash mb-3">
					{featuredPost.category}
				</div>
				<a href={featuredPost.href} class="group">
					<h2
						class="font-clash text-3xl md:text-4xl font-semibold text-forge-white mb-4 group-hover:text-forge-ember transition-colors leading-tight"
					>
						{featuredPost.title}
					</h2>
				</a>
				<p class="text-forge-smoke leading-relaxed mb-6">{featuredPost.excerpt}</p>
				<div class="flex items-center gap-4 text-sm text-forge-ash">
					<span>{featuredPost.author}</span>
					<span>·</span>
					<span>{featuredPost.date}</span>
					<span>·</span>
					<span>{featuredPost.readTime}</span>
				</div>
				<a
					href={featuredPost.href}
					class="inline-flex items-center gap-2 text-forge-ember hover:text-forge-glow font-satoshi text-sm uppercase tracking-wider transition-colors mt-6"
				>
					Read Article →
				</a>
			</div>
		</div>
	</Container>
</Section>

<!-- CATEGORY FILTER -->
<Section background="black" padding="sm" class="sticky top-18 md:top-20 z-10 border-b border-forge-steel">
	<Container>
		<div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
			{#each categories as category}
				<button
					onclick={() => (activeCategory = category)}
					class="px-4 py-2 border font-satoshi text-xs uppercase tracking-wider whitespace-nowrap transition-all shrink-0 {activeCategory ===
					category
						? 'bg-forge-ember border-forge-ember text-forge-white'
						: 'border-forge-steel text-forge-smoke hover:border-forge-ember'}"
				>
					{category}
				</button>
			{/each}
		</div>
	</Container>
</Section>

<!-- POST GRID -->
<Section background="black" padding="lg">
	<Container>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each filteredPosts as post}
				<a
					href={post.href}
					class="bg-forge-charcoal border border-forge-steel hover:border-forge-ember transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
				>
					<div class="aspect-video bg-forge-steel flex items-center justify-center">
						<span class="text-forge-ash text-sm group-hover:scale-105 transition-transform">
							Article Image
						</span>
					</div>
					<div class="p-6">
						<div class="font-jetbrains text-xs uppercase tracking-wider text-forge-ember mb-3">
							{post.category}
						</div>
						<h3
							class="font-satoshi text-lg font-semibold text-forge-white mb-2 group-hover:text-forge-ember transition-colors line-clamp-2"
						>
							{post.title}
						</h3>
						<p class="text-sm text-forge-ash leading-relaxed mb-4 line-clamp-3">
							{post.excerpt}
						</p>
						<div class="flex items-center justify-between text-xs text-forge-ash pt-4 border-t border-forge-steel">
							<span>{post.date}</span>
							<span>{post.readTime}</span>
						</div>
					</div>
				</a>
			{/each}
		</div>

		{#if filteredPosts.length === 0}
			<div class="text-center py-16">
				<p class="text-forge-ash text-lg">No articles found matching your search.</p>
			</div>
		{/if}
	</Container>
</Section>

<!-- NEWSLETTER -->
<Section background="charcoal" padding="lg">
	<div
		class="py-16 px-8 text-center"
		style="background: radial-gradient(ellipse at 50% 50%, rgba(255, 77, 0, 0.05) 0%, transparent 60%);"
	>
		<Container size="narrow">
			<h3 class="font-clash text-3xl md:text-4xl font-semibold text-forge-white mb-4">
				Get Forge Notes
			</h3>
			<p class="text-forge-smoke mb-8">
				One email per month. Technical insights, strategy deep-dives, and no spam. Ever.
			</p>
			<form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
				<input
					type="email"
					placeholder="your@email.com"
					class="flex-1 px-5 py-3 bg-forge-black border border-forge-steel text-forge-white placeholder:text-forge-ash focus:border-forge-ember focus:outline-none focus:ring-1 focus:ring-forge-ember"
				/>
				<Button variant="primary" size="md" type="submit">
					{#snippet children()}
						Subscribe
					{/snippet}
				</Button>
			</form>
			<p class="text-xs text-forge-ash mt-4">
				We respect your inbox. Unsubscribe anytime.
			</p>
		</Container>
	</div>
</Section>
