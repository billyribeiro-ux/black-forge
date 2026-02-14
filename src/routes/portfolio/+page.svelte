<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';

	let activeFilter = $state('All');

	const filters = ['All', 'Web Development', 'App Development', 'SEO', 'E-Commerce'];

	const projects = [
		{
			category: 'E-Commerce',
			title: 'Meridian Home Goods',
			result: '340% increase in page speed. $2.1M monthly revenue.',
			stack: ['SvelteKit', 'Shopify Headless', 'Cloudflare Workers'],
			image: '/images/projects/meridian.jpg',
			href: '/portfolio/meridian'
		},
		{
			category: 'App Development',
			title: 'PulseTrack Fitness',
			result: '4.9★ App Store rating. 50k+ downloads month one.',
			stack: ['React Native', 'Node.js', 'PostgreSQL'],
			image: '/images/projects/pulsetrack.jpg',
			href: '/portfolio/pulsetrack'
		},
		{
			category: 'Web Development',
			title: 'Atlas Financial Dashboard',
			result: 'Sub-100ms render times. 50k data points/second.',
			stack: ['React', 'TypeScript', 'WebSockets', 'AWS'],
			image: '/images/projects/atlas.jpg',
			href: '/portfolio/atlas'
		},
		{
			category: 'SEO',
			title: 'Sterling & Associates',
			result: 'Page 5 → Position #1 in 90 days. 412% organic traffic growth.',
			stack: ['SvelteKit', 'Sanity CMS', 'Schema Markup'],
			image: '/images/projects/sterling.jpg',
			href: '/portfolio/sterling'
		},
		{
			category: 'Web Development',
			title: 'Ember Kitchen & Bar',
			result: 'Online reservations up 180%. 0.6s average load time.',
			stack: ['Astro', 'Tailwind', 'Cloudflare'],
			image: '/images/projects/ember.jpg',
			href: '/portfolio/ember'
		},
		{
			category: 'Web Development',
			title: 'Keystone Properties',
			result: 'Custom MLS integration. 3x lead generation increase.',
			stack: ['Next.js', 'PostgreSQL', 'Mapbox'],
			image: '/images/projects/keystone.jpg',
			href: '/portfolio/keystone'
		},
		{
			category: 'SEO',
			title: 'Northside Medical Group',
			result: 'Google Map Pack #1 for 8 specialties. 220% new patient inquiries.',
			stack: ['SvelteKit', 'Structured Data', 'GBP Optimization'],
			image: '/images/projects/northside.jpg',
			href: '/portfolio/northside'
		},
		{
			category: 'Web Development',
			title: 'FlowState Project Management',
			result: 'Enterprise SaaS with 10k+ active users. 99.99% uptime.',
			stack: ['SvelteKit', 'Rust/Axum', 'PostgreSQL', 'Redis'],
			image: '/images/projects/flowstate.jpg',
			href: '/portfolio/flowstate'
		}
	];

	const filteredProjects = $derived(
		activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)
	);
</script>

<svelte:head>
	<title>Portfolio — Our Work | Blackforge Digital</title>
	<meta
		name="description"
		content="Real projects. Real results. See how we've helped businesses transform their digital presence with custom web development, apps, and SEO."
	/>
</svelte:head>

<!-- HERO -->
<Section background="black" padding="lg" grain={true}>
	<Container>
		<div class="max-w-4xl py-16">
			<Eyebrow class="mb-6">Portfolio</Eyebrow>
			<h1 class="font-clash text-forge-white mb-6 text-5xl font-bold md:text-6xl">
				Proof. Not Promises.
			</h1>
			<p class="text-forge-smoke mb-10 max-w-2xl text-xl leading-relaxed">
				Every project below was engineered from scratch. No templates. No page builders. Real code,
				real results, real businesses transformed.
			</p>

			<div class="flex flex-wrap gap-3">
				{#each filters as filter}
					<button
						onclick={() => (activeFilter = filter)}
						class="font-satoshi border px-5 py-2.5 text-sm tracking-wider uppercase transition-all {activeFilter ===
						filter
							? 'bg-forge-ember border-forge-ember text-forge-white'
							: 'border-forge-steel text-forge-smoke hover:border-forge-ember'}"
					>
						{filter}
					</button>
				{/each}
			</div>
		</div>
	</Container>
</Section>

<!-- PROJECT GRID -->
<Section background="black" padding="lg">
	<Container>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredProjects as project}
				<a
					href={project.href}
					class="group bg-forge-charcoal border-forge-steel hover:border-forge-ember hover:shadow-ember-lg relative overflow-hidden border transition-all duration-300 hover:-translate-y-1"
				>
					<!-- Image -->
					<div class="bg-forge-steel relative aspect-video overflow-hidden">
						<div
							class="text-forge-ash flex h-full w-full items-center justify-center transition-transform duration-700 group-hover:scale-105"
						>
							<span class="text-sm">Project Screenshot</span>
						</div>
						<div class="from-forge-black/80 absolute inset-0 bg-linear-to-t to-transparent"></div>
						<div
							class="bg-forge-ember/90 text-forge-white font-jetbrains absolute bottom-4 left-4 px-2 py-1 text-xs tracking-wider uppercase"
						>
							{project.category}
						</div>
					</div>

					<!-- Content -->
					<div class="p-6">
						<h3
							class="font-satoshi text-forge-white group-hover:text-forge-ember mb-2 text-xl font-semibold transition-colors"
						>
							{project.title}
						</h3>
						<p class="text-forge-ember mb-4 text-sm">{project.result}</p>
						<div class="flex flex-wrap gap-2">
							{#each project.stack.slice(0, 3) as tech}
								<span
									class="border-forge-steel text-forge-ash font-jetbrains border px-2 py-1 text-xs"
								>
									{tech}
								</span>
							{/each}
						</div>
					</div>
				</a>
			{/each}
		</div>
	</Container>
</Section>

<!-- INDUSTRIES -->
<Section background="charcoal" padding="lg">
	<Container size="narrow">
		<div class="mb-12 text-center">
			<h2 class="font-clash text-forge-white mb-4 text-4xl font-semibold md:text-5xl">
				Industries We've Transformed
			</h2>
			<p class="text-forge-smoke">
				Deep experience across verticals means we understand your market, your users, and your
				competitive landscape.
			</p>
		</div>

		<div class="grid grid-cols-2 gap-6 md:grid-cols-4">
			{#each [{ icon: 'ph:scales', label: 'Legal & Law Firms' }, { icon: 'ph:heart-pulse', label: 'Healthcare & Medical' }, { icon: 'ph:buildings', label: 'Real Estate' }, { icon: 'ph:shopping-bag', label: 'E-Commerce & Retail' }, { icon: 'ph:chart-line', label: 'Financial Services' }, { icon: 'ph:fork-knife', label: 'Restaurant & Hospitality' }, { icon: 'ph:graduation-cap', label: 'Education & EdTech' }, { icon: 'ph:factory', label: 'Manufacturing & Industrial' }] as industry}
				<div
					class="bg-forge-black hover:border-b-forge-ember group p-6 text-center transition-all hover:border-b-2"
				>
					<div class="text-forge-ember mb-3 flex justify-center">
						<svg class="h-9 w-9" fill="currentColor" viewBox="0 0 256 256">
							<rect width="256" height="256" fill="none" />
						</svg>
					</div>
					<div class="font-satoshi text-forge-white text-sm">{industry.label}</div>
				</div>
			{/each}
		</div>
	</Container>
</Section>

<!-- CTA -->
<Section background="black" padding="lg">
	<div
		class="px-8 py-24 text-center"
		style="background: linear-gradient(135deg, var(--forge-ember) 0%, var(--forge-glow) 100%);"
	>
		<Container size="narrow">
			<h2 class="font-clash text-forge-black mb-6 text-4xl font-bold md:text-5xl">
				Your Project Could Be Next.
			</h2>
			<p class="text-forge-black/80 mb-10 text-lg">
				Let's talk about building something you'll be proud to show off.
			</p>
			<Button variant="secondary" size="lg" href="/contact">
				{#snippet children()}
					<span class="text-forge-black hover:text-forge-white transition-colors">
						Start Your Project →
					</span>
				{/snippet}
			</Button>
		</Container>
	</div>
</Section>
