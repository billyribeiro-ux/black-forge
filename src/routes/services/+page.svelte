<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import Icon from '@iconify/svelte';

	const webCapabilities = [
		{
			icon: 'ph:browser',
			title: 'Marketing & Corporate Sites',
			description:
				'High-performance marketing sites built for conversion. SEO-optimized architecture, blazing speed, pixel-perfect design.'
		},
		{
			icon: 'ph:shopping-cart',
			title: 'E-Commerce Platforms',
			description:
				'Custom storefronts on Shopify Headless, Saleor, or fully custom. Product pages that sell, checkout flows that convert.'
		},
		{
			icon: 'ph:app-window',
			title: 'Web Applications (SaaS)',
			description:
				'Full-stack applications with real-time features, authentication, databases, and APIs. Built for scale from day one.'
		},
		{
			icon: 'ph:layout',
			title: 'Landing Pages & Funnels',
			description:
				'Conversion-optimized landing pages with A/B testing infrastructure, analytics, and performance tracking baked in.'
		},
		{
			icon: 'ph:arrows-clockwise',
			title: 'Migrations & Rebuilds',
			description:
				'Migrating off WordPress, Wix, or legacy platforms? We handle the transition without losing your SEO equity.'
		},
		{
			icon: 'ph:puzzle-piece',
			title: 'API & Integration Development',
			description:
				'Custom APIs, third-party integrations, payment processing, CRM connections — the plumbing that makes everything work.'
		}
	];

	const appCapabilities = [
		{
			icon: 'ph:apple-logo',
			title: 'iOS Development',
			description:
				'Native Swift applications optimized for the Apple ecosystem. Clean architecture, smooth animations, Apple HIG compliance.'
		},
		{
			icon: 'ph:android-logo',
			title: 'Android Development',
			description:
				'Kotlin-first Android apps built for the fragmented device landscape. Material Design 3, offline support, deep linking.'
		},
		{
			icon: 'ph:devices',
			title: 'Cross-Platform',
			description:
				'React Native and Flutter applications that share 90%+ code across platforms without sacrificing native feel.'
		},
		{
			icon: 'ph:rocket-launch',
			title: 'MVP Development',
			description:
				'Validate your idea in 8-12 weeks with a production-quality MVP. Architected to scale — not throwaway prototypes.'
		},
		{
			icon: 'ph:database',
			title: 'Backend & APIs',
			description:
				'Scalable backend infrastructure purpose-built for your app. Real-time data, push notifications, authentication, payments.'
		},
		{
			icon: 'ph:arrows-counter-clockwise',
			title: 'App Modernization',
			description:
				'Legacy app running on outdated tech? We rebuild with modern architecture while preserving your user base.'
		}
	];

	const seoCapabilities = [
		{
			icon: 'ph:code',
			title: 'Technical SEO',
			description:
				"Site architecture, Core Web Vitals, structured data, crawl optimization. We fix what's broken and build what's missing."
		},
		{
			icon: 'ph:article',
			title: 'Content Strategy',
			description:
				'Keyword research, topic clusters, editorial calendars, and content production that ranks and converts.'
		},
		{
			icon: 'ph:map-pin',
			title: 'Local SEO',
			description:
				'Google Business Profile optimization, local citations, review management, and map pack domination for CT businesses.'
		},
		{
			icon: 'ph:link',
			title: 'Link Building & PR',
			description:
				'White-hat link acquisition through digital PR, guest placement, and authority building. Quality over quantity, always.'
		},
		{
			icon: 'ph:chart-bar',
			title: 'Analytics & Reporting',
			description:
				"Custom dashboards, conversion tracking, attribution modeling. You'll know exactly what's working and what's not."
		},
		{
			icon: 'ph:target',
			title: 'Conversion Optimization',
			description:
				'Traffic means nothing without conversions. A/B testing, UX analysis, and funnel optimization to maximize every visitor.'
		}
	];
</script>

<svelte:head>
	<title>Services — Web Development, App Development & SEO | Blackforge Digital</title>
	<meta
		name="description"
		content="Custom web development, native app development, and data-driven SEO services. No templates. No shortcuts. Built to last."
	/>
</svelte:head>

<!-- HERO -->
<Section background="black" padding="lg" grain={true} grid={true}>
	<div
		class="relative"
		style="background: radial-gradient(ellipse at 90% 10%, rgba(255, 77, 0, 0.06) 0%, transparent 50%);"
	>
		<Container>
			<div class="max-w-4xl py-16">
				<div class="text-sm font-jetbrains text-forge-ash mb-6">
					<a href="/" class="hover:text-forge-ember transition-colors">Home</a>
					<span class="mx-2">/</span>
					<span>Services</span>
				</div>

				<h1 class="font-clash text-5xl md:text-6xl font-bold text-forge-white mb-6">
					Everything You Need. Nothing You Don't.
				</h1>

				<p class="text-xl text-forge-smoke leading-relaxed max-w-2xl mb-10">
					Three core disciplines executed at the highest level. We don't offer 47 services — we
					master three and deliver them better than anyone.
				</p>

				<div class="flex flex-wrap gap-4">
					<a
						href="#web-development"
						class="px-6 py-3 border border-forge-steel text-forge-smoke hover:border-forge-ember hover:text-forge-white transition-all font-satoshi text-sm uppercase tracking-wider"
					>
						01 — Web Development
					</a>
					<a
						href="#app-development"
						class="px-6 py-3 border border-forge-steel text-forge-smoke hover:border-forge-ember hover:text-forge-white transition-all font-satoshi text-sm uppercase tracking-wider"
					>
						02 — App Development
					</a>
					<a
						href="#seo-growth"
						class="px-6 py-3 border border-forge-steel text-forge-smoke hover:border-forge-ember hover:text-forge-white transition-all font-satoshi text-sm uppercase tracking-wider"
					>
						03 — SEO & Growth
					</a>
				</div>
			</div>
		</Container>
	</div>
</Section>

<!-- WEB DEVELOPMENT -->
<Section id="web-development" background="black" padding="lg">
	<Container>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
			<div class="relative">
				<div
					class="absolute -left-8 -top-12 font-clash text-9xl font-bold text-forge-ember/15 pointer-events-none"
				>
					01
				</div>
				<div class="relative z-10">
					<Eyebrow class="mb-4">Service</Eyebrow>
					<h2 class="font-clash text-4xl md:text-5xl font-semibold text-forge-white mb-6">
						Web Development
					</h2>
					<p class="text-lg text-forge-smoke leading-relaxed mb-6">
						We build websites and web applications that load in under 1 second, score 95+ on every
						Lighthouse metric, and convert visitors at 2-3x industry average. Every project is
						hand-coded on modern frameworks — never WordPress, never templates, never compromise.
					</p>
					<p class="text-forge-smoke leading-relaxed">
						From marketing sites to full-stack SaaS platforms, our engineering team delivers
						production-grade code that your future developers will thank you for.
					</p>
				</div>
			</div>

			<div class="flex items-center justify-center">
				<div class="grid grid-cols-3 gap-4 opacity-30">
					{#each ['SvelteKit', 'React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL', 'Redis', 'Vercel'] as tech}
						<div
							class="p-4 bg-forge-charcoal border border-forge-steel text-center text-xs font-jetbrains text-forge-smoke"
						>
							{tech}
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-forge-steel mb-12">
			{#each webCapabilities as capability}
				<div
					class="bg-forge-charcoal p-8 hover:bg-forge-black hover:border-l-4 hover:border-l-forge-ember transition-all duration-300"
				>
					<Icon icon={capability.icon} class="text-forge-ember mb-4" width="32" />
					<h3 class="font-satoshi text-lg font-semibold text-forge-white mb-2">
						{capability.title}
					</h3>
					<p class="text-sm text-forge-ash leading-relaxed">
						{capability.description}
					</p>
				</div>
			{/each}
		</div>

		<div class="grid grid-cols-3 gap-px bg-forge-steel">
			<div class="bg-forge-charcoal p-8 text-center">
				<div class="font-clash text-5xl font-bold text-forge-ember mb-2">&lt;1s</div>
				<div class="text-sm uppercase tracking-wider text-forge-ash">Average Load Time</div>
			</div>
			<div class="bg-forge-charcoal p-8 text-center">
				<div class="font-clash text-5xl font-bold text-forge-ember mb-2">95+</div>
				<div class="text-sm uppercase tracking-wider text-forge-ash">Lighthouse Score</div>
			</div>
			<div class="bg-forge-charcoal p-8 text-center">
				<div class="font-clash text-5xl font-bold text-forge-ember mb-2">2.3x</div>
				<div class="text-sm uppercase tracking-wider text-forge-ash">Conversion Lift</div>
			</div>
		</div>
	</Container>
</Section>

<!-- APP DEVELOPMENT -->
<Section id="app-development" background="charcoal" padding="lg">
	<Container>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
			<div class="order-2 lg:order-1 flex items-center justify-center">
				<div class="relative">
					<div class="w-64 h-96 bg-forge-steel rounded-lg flex items-center justify-center">
						<span class="text-forge-ash text-sm">Device Mockup</span>
					</div>
				</div>
			</div>

			<div class="order-1 lg:order-2 relative">
				<div
					class="absolute -left-8 -top-12 font-clash text-9xl font-bold text-forge-ember/15 pointer-events-none"
				>
					02
				</div>
				<div class="relative z-10">
					<Eyebrow class="mb-4">Service</Eyebrow>
					<h2 class="font-clash text-4xl md:text-5xl font-semibold text-forge-white mb-6">
						App Development
					</h2>
					<p class="text-lg text-forge-smoke leading-relaxed mb-6">
						Native performance. Cross-platform efficiency. We build mobile applications that users
						love, investors notice, and competitors study. From concept to App Store — fully
						managed, fully owned.
					</p>
					<p class="text-forge-smoke leading-relaxed">
						Whether you're launching an MVP to validate a market or scaling a product to millions of
						users, our engineering team builds apps that are fast, reliable, and built to evolve.
					</p>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-forge-steel mb-12">
			{#each appCapabilities as capability}
				<div
					class="bg-forge-black p-8 hover:bg-forge-charcoal hover:border-l-4 hover:border-l-forge-ember transition-all duration-300"
				>
					<Icon icon={capability.icon} class="text-forge-ember mb-4" width="32" />
					<h3 class="font-satoshi text-lg font-semibold text-forge-white mb-2">
						{capability.title}
					</h3>
					<p class="text-sm text-forge-ash leading-relaxed">
						{capability.description}
					</p>
				</div>
			{/each}
		</div>

		<div class="grid grid-cols-3 gap-px bg-forge-steel">
			<div class="bg-forge-black p-8 text-center">
				<div class="font-clash text-5xl font-bold text-forge-ember mb-2">4.8★</div>
				<div class="text-sm uppercase tracking-wider text-forge-ash">App Store Rating</div>
			</div>
			<div class="bg-forge-black p-8 text-center">
				<div class="font-clash text-5xl font-bold text-forge-ember mb-2">60%</div>
				<div class="text-sm uppercase tracking-wider text-forge-ash">Faster Time-to-Market</div>
			</div>
			<div class="bg-forge-black p-8 text-center">
				<div class="font-clash text-5xl font-bold text-forge-ember mb-2">99.9%</div>
				<div class="text-sm uppercase tracking-wider text-forge-ash">Uptime SLA</div>
			</div>
		</div>
	</Container>
</Section>

<!-- SEO & GROWTH -->
<Section id="seo-growth" background="black" padding="lg">
	<Container>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
			<div class="relative">
				<div
					class="absolute -left-8 -top-12 font-clash text-9xl font-bold text-forge-ember/15 pointer-events-none"
				>
					03
				</div>
				<div class="relative z-10">
					<Eyebrow class="mb-4">Service</Eyebrow>
					<h2 class="font-clash text-4xl md:text-5xl font-semibold text-forge-white mb-6">
						SEO & Growth
					</h2>
					<p class="text-lg text-forge-smoke leading-relaxed mb-6">
						Search is the highest-intent traffic on the internet. We build search strategies that
						compound month over month — technical SEO, content engines, and local dominance that
						turns Google into your best salesperson.
					</p>
					<p class="text-forge-smoke leading-relaxed">
						No black hat tactics. No keyword stuffing. No vanity metrics. Just measurable organic
						growth backed by data, strategy, and relentless execution.
					</p>
				</div>
			</div>

			<div class="flex items-center justify-center">
				<div class="w-full h-64 bg-forge-charcoal rounded-sm flex items-center justify-center">
					<span class="text-forge-ash text-sm">Growth Chart Visual</span>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-forge-steel mb-12">
			{#each seoCapabilities as capability}
				<div
					class="bg-forge-charcoal p-8 hover:bg-forge-black hover:border-l-4 hover:border-l-forge-ember transition-all duration-300"
				>
					<Icon icon={capability.icon} class="text-forge-ember mb-4" width="32" />
					<h3 class="font-satoshi text-lg font-semibold text-forge-white mb-2">
						{capability.title}
					</h3>
					<p class="text-sm text-forge-ash leading-relaxed">
						{capability.description}
					</p>
				</div>
			{/each}
		</div>

		<div class="grid grid-cols-3 gap-px bg-forge-steel">
			<div class="bg-forge-charcoal p-8 text-center">
				<div class="font-clash text-5xl font-bold text-forge-ember mb-2">312%</div>
				<div class="text-sm uppercase tracking-wider text-forge-ash">Organic Traffic Increase</div>
			</div>
			<div class="bg-forge-charcoal p-8 text-center">
				<div class="font-clash text-5xl font-bold text-forge-ember mb-2">#1</div>
				<div class="text-sm uppercase tracking-wider text-forge-ash">Local Pack Position</div>
			</div>
			<div class="bg-forge-charcoal p-8 text-center">
				<div class="font-clash text-5xl font-bold text-forge-ember mb-2">4.2x</div>
				<div class="text-sm uppercase tracking-wider text-forge-ash">ROI on Investment</div>
			</div>
		</div>
	</Container>
</Section>

<!-- COMPARISON TABLE -->
<Section background="charcoal" padding="lg">
	<Container size="narrow">
		<div class="text-center mb-12">
			<h2 class="font-clash text-4xl md:text-5xl font-semibold text-forge-white mb-4">
				What You Get vs. What They Offer
			</h2>
			<p class="text-forge-smoke">
				A transparent look at how Blackforge compares to the typical agency.
			</p>
		</div>

		<div class="overflow-x-auto">
			<table class="w-full border-collapse">
				<thead>
					<tr class="bg-forge-ember">
						<th
							class="text-left p-4 font-satoshi text-sm uppercase tracking-wider text-forge-black"
						>
							Feature
						</th>
						<th
							class="text-center p-4 font-satoshi text-sm uppercase tracking-wider text-forge-black"
						>
							Blackforge
						</th>
						<th
							class="text-center p-4 font-satoshi text-sm uppercase tracking-wider text-forge-black"
						>
							Typical Agency
						</th>
					</tr>
				</thead>
				<tbody>
					{#each [ ['Custom Code (No Templates)', '✓', '✗'], ['95+ Lighthouse Guaranteed', '✓', '✗'], ['TypeScript Strict Mode', '✓', '✗'], ['Mobile-First Architecture', '✓', 'Sometimes'], ['Dedicated Senior Engineer', '✓', 'Junior Devs'], ['SEO Built Into Architecture', '✓', 'Afterthought'], ['Source Code Ownership', '✓ Full', '✗ Locked In'], ['Post-Launch Support', '✓ Included', '$ Extra'], ['Performance Monitoring', '✓ Proactive', '✗ Reactive'], ['Transparent Pricing', '✓ Always', '✗ Hidden Fees'] ] as [feature, blackforge, typical]}
						<tr class="border-b border-forge-steel">
							<td class="p-4 text-forge-smoke">{feature}</td>
							<td class="p-4 text-center text-forge-ember font-semibold">{blackforge}</td>
							<td class="p-4 text-center text-forge-ash/50">{typical}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</Container>
</Section>

<!-- CTA -->
<Section background="black" padding="lg">
	<div
		class="py-24 px-8 text-center"
		style="background: linear-gradient(135deg, var(--forge-ember) 0%, var(--forge-glow) 100%);"
	>
		<Container size="narrow">
			<h2 class="font-clash text-4xl md:text-5xl font-bold text-forge-black mb-6">
				Let's Scope Your Project.
			</h2>
			<p class="text-lg text-forge-black/80 mb-10 max-w-2xl mx-auto">
				Every project starts with a free strategy call. We'll map out your goals, recommend the
				right approach, and give you an honest timeline and budget.
			</p>
			<Button variant="secondary" size="lg" href="/contact">
				{#snippet children()}
					<span class="text-forge-black hover:text-forge-white transition-colors">
						Book a Strategy Call →
					</span>
				{/snippet}
			</Button>
		</Container>
	</div>
</Section>
