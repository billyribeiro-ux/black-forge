<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import Icon from '@iconify/svelte';

	const tiers = [
		{
			name: 'Foundation',
			price: '$8,000',
			description:
				'Perfect for local businesses, professional services, and startups that need a fast, beautiful, and SEO-optimized web presence.',
			features: [
				'Up to 8 pages, fully responsive',
				'Custom design (no templates)',
				'SvelteKit or Astro framework',
				'Mobile-first development',
				'Basic SEO setup & schema markup',
				'Contact forms & integrations',
				'Google Analytics 4 setup',
				'95+ Lighthouse score guaranteed',
				'30-day post-launch support',
				'Full source code ownership'
			],
			idealFor: 'Local businesses, restaurants, law firms, medical practices',
			recommended: false
		},
		{
			name: 'Professional',
			price: '$20,000',
			description:
				'For growing businesses that need advanced functionality, CMS integration, e-commerce, or custom web applications with real-time features.',
			features: [
				'Everything in Foundation, plus:',
				'Up to 20 pages + blog/CMS',
				'Headless CMS integration (Sanity/Contentful)',
				'E-commerce functionality (if needed)',
				'Advanced animations & interactions (GSAP)',
				'Custom API development',
				'Advanced SEO (content strategy + technical audit)',
				'Performance monitoring dashboard',
				'A/B testing infrastructure',
				'3 months post-launch support',
				'Priority bug fixes (24hr SLA)'
			],
			idealFor: 'E-commerce brands, SaaS startups, growing companies, multi-location businesses',
			recommended: true
		},
		{
			name: 'Enterprise',
			price: '$40,000',
			description:
				'For businesses that need full-stack web applications, native mobile apps, or complex multi-platform digital ecosystems built to institutional standards.',
			features: [
				'Everything in Professional, plus:',
				'Full-stack web application development',
				'Native or cross-platform mobile apps',
				'Real-time features (WebSockets, live data)',
				'Database architecture & optimization',
				'Authentication & role-based access',
				'Third-party integrations (CRM, ERP, payment)',
				'Dedicated project manager',
				'Comprehensive SEO strategy (12-month)',
				'6 months post-launch support',
				'Dedicated Slack channel',
				'Quarterly strategy reviews'
			],
			idealFor: 'SaaS platforms, enterprise portals, apps with 10k+ users, fintech, healthtech',
			recommended: false
		}
	];

	const addons = [
		{
			icon: 'ph:chart-line',
			title: 'Monthly SEO Retainer',
			description: 'Ongoing technical SEO, content, and link building',
			price: 'From $2,000/mo'
		},
		{
			icon: 'ph:article',
			title: 'Content Writing',
			description: 'SEO-optimized blog posts and page copy',
			price: 'From $500/post'
		},
		{
			icon: 'ph:paint-brush',
			title: 'Branding & Identity',
			description: 'Logo, brand guidelines, visual identity system',
			price: 'From $3,000'
		},
		{
			icon: 'ph:video-camera',
			title: 'Video Production',
			description: 'Product videos, testimonials, brand content',
			price: 'From $2,500'
		},
		{
			icon: 'ph:app-store-logo',
			title: 'App Store Optimization',
			description: 'ASO strategy, listing optimization, review management',
			price: 'From $1,500/mo'
		},
		{
			icon: 'ph:wrench',
			title: 'Ongoing Maintenance',
			description: 'Updates, security, monitoring, priority support',
			price: 'From $500/mo'
		}
	];
</script>

<svelte:head>
	<title>Pricing — Transparent Investment | Blackforge Digital</title>
	<meta
		name="description"
		content="Fixed-price proposals. No hourly billing. Three tiers from $8k to $40k+. See exactly what quality digital work costs."
	/>
</svelte:head>

<!-- HERO -->
<Section background="black" padding="lg" grain={true}>
	<Container>
		<div class="max-w-4xl py-16">
			<Eyebrow class="mb-6">Investment</Eyebrow>
			<h1 class="font-clash text-5xl md:text-6xl font-bold text-forge-white mb-6">
				Transparent Pricing. No Surprises.
			</h1>
			<p class="text-xl text-forge-smoke leading-relaxed max-w-2xl mb-8">
				We don't hide behind "contact us for a quote." Here's what quality digital work costs — and
				why it's worth every dollar.
			</p>
			<div class="flex items-center gap-3 text-forge-ember">
				<Icon icon="ph:shield-check" width="24" />
				<span class="font-jetbrains text-sm uppercase tracking-wider">
					Fixed-price proposals. No hourly billing. No scope creep charges.
				</span>
			</div>
		</div>
	</Container>
</Section>

<!-- PRICING TIERS -->
<Section background="black" padding="lg">
	<Container>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-px bg-forge-steel">
			{#each tiers as tier}
				<div
					class="bg-forge-charcoal p-12 relative {tier.recommended
						? 'lg:-mt-8 lg:mb-0 lg:pt-16 lg:pb-16 border-t-4 border-t-forge-ember'
						: ''}"
				>
					{#if tier.recommended}
						<div
							class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-forge-ember text-forge-black font-jetbrains text-xs uppercase tracking-wider"
						>
							Most Popular
						</div>
					{/if}

					<div class="mb-6">
						<div class="font-satoshi text-sm uppercase tracking-wider text-forge-ash mb-2">
							{tier.name}
						</div>
						<div class="flex items-baseline gap-2 mb-4">
							<span class="text-sm text-forge-ash">Starting at</span>
							<span class="font-clash text-5xl font-bold text-forge-white">{tier.price}</span>
						</div>
						<p class="text-sm text-forge-ash leading-relaxed">{tier.description}</p>
					</div>

					<div class="h-px bg-forge-steel my-6"></div>

					<ul class="space-y-3 mb-8">
						{#each tier.features as feature}
							<li class="flex items-start gap-3">
								<Icon icon="ph:check" class="text-forge-ember shrink-0 mt-0.5" width="18" />
								<span class="text-sm text-forge-smoke">{feature}</span>
							</li>
						{/each}
					</ul>

					<div class="mb-6">
						<div class="text-xs font-jetbrains text-forge-ash italic mb-2">Ideal For:</div>
						<div class="text-sm text-forge-ash">{tier.idealFor}</div>
					</div>

					<Button
						variant={tier.recommended ? 'primary' : 'secondary'}
						size="md"
						href="/contact"
						class="w-full"
					>
						{#snippet children()}
							Get a Quote →
						{/snippet}
					</Button>
				</div>
			{/each}
		</div>
	</Container>
</Section>

<!-- ADD-ONS -->
<Section background="charcoal" padding="lg">
	<Container>
		<div class="mb-12">
			<h2 class="font-clash text-4xl md:text-5xl font-semibold text-forge-white mb-4">
				Add-On Services
			</h2>
			<p class="text-forge-smoke">Layer these onto any tier for enhanced results.</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each addons as addon}
				<div
					class="bg-forge-black p-8 flex items-start gap-6 border-l-2 border-l-forge-steel hover:border-l-forge-ember transition-colors"
				>
					<Icon icon={addon.icon} class="text-forge-ember shrink-0" width="32" />
					<div class="flex-1">
						<h3 class="font-satoshi text-lg font-semibold text-forge-white mb-1">
							{addon.title}
						</h3>
						<p class="text-sm text-forge-ash mb-3">{addon.description}</p>
						<div class="font-clash text-xl font-semibold text-forge-ember">{addon.price}</div>
					</div>
				</div>
			{/each}
		</div>
	</Container>
</Section>

<!-- PRICING PHILOSOPHY -->
<Section background="black" padding="lg">
	<Container size="narrow">
		<h2 class="font-clash text-4xl md:text-5xl font-semibold text-forge-white mb-8">
			Why We Charge What We Charge.
		</h2>

		<div class="space-y-6 text-forge-smoke leading-relaxed text-lg">
			<p>
				Custom development costs more than a Squarespace template. That's because a Squarespace
				template doesn't generate revenue — it just exists. Our builds are engineered to pay for
				themselves through increased traffic, higher conversions, and lower maintenance costs.
			</p>

			<p>
				The average Blackforge client sees a 2.3x return on their investment within the first year.
				That's not marketing — that's math.
			</p>

			<p>
				We use fixed pricing because hourly billing incentivizes inefficiency. When you know the
				total cost upfront, you can plan, budget, and evaluate ROI with confidence.
			</p>
		</div>
	</Container>
</Section>

<!-- COMPARISON -->
<Section background="charcoal" padding="lg">
	<Container size="narrow">
		<div class="text-center mb-12">
			<h2 class="font-clash text-4xl md:text-5xl font-semibold text-forge-white">
				The Real Cost of Cheap
			</h2>
		</div>

		<div class="overflow-x-auto">
			<table class="w-full border-collapse">
				<thead>
					<tr class="border-b-2 border-forge-steel">
						<th class="text-left p-4 font-satoshi text-sm uppercase tracking-wider text-forge-white">
							Feature
						</th>
						<th class="text-center p-4 font-satoshi text-sm uppercase tracking-wider text-forge-white">
							DIY / Template
						</th>
						<th class="text-center p-4 font-satoshi text-sm uppercase tracking-wider text-forge-white">
							Cheap Agency
						</th>
						<th
							class="text-center p-4 font-satoshi text-sm uppercase tracking-wider text-forge-ember bg-forge-ember/10"
						>
							Blackforge
						</th>
					</tr>
				</thead>
				<tbody>
					{#each [ ['Cost', '$0 – $500', '$2,000 – $8,000', '$8,000 – $50,000+'], ['Performance', 'Slow (3-5s load)', 'Mediocre (2-3s)', 'Blazing (<1s)'], ['SEO', 'Basic / None', 'Plugin-dependent', 'Built into architecture'], ['Mobile', 'Responsive (barely)', 'Responsive', 'Mobile-first engineered'], ['Ownership', 'Platform lock-in', 'Maybe', 'Full code ownership'], ['Scalability', 'Breaks under growth', 'Needs rebuild in 2 yrs', 'Built for 10 years'], ['Support', 'Forum / chatbot', 'Outsourced', 'Dedicated senior team'], ['ROI (Year 1)', 'Minimal', 'Low', '2-3x average'] ] as [feature, diy, cheap, blackforge]}
						<tr class="border-b border-forge-steel">
							<td class="p-4 text-forge-smoke">{feature}</td>
							<td class="p-4 text-center text-forge-ash/50 text-sm">{diy}</td>
							<td class="p-4 text-center text-forge-ash/50 text-sm">{cheap}</td>
							<td class="p-4 text-center text-forge-ember font-semibold text-sm bg-forge-ember/5">
								{blackforge}
							</td>
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
				Let's Talk Numbers.
			</h2>
			<p class="text-lg text-forge-black/80 mb-10">
				Every project gets a detailed, fixed-price proposal. No commitment required — just a real
				conversation about what you need and what it costs.
			</p>
			<Button variant="secondary" size="lg" href="/contact">
				{#snippet children()}
					<span class="text-forge-black hover:text-forge-white transition-colors">
						Request a Proposal →
					</span>
				{/snippet}
			</Button>
		</Container>
	</div>
</Section>
