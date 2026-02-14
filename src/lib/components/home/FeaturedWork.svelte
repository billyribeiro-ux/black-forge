<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	const projects = [
		{
			category: 'E-Commerce',
			title: 'Scaling a DTC Brand to $2M/mo',
			description:
				'Complete platform rebuild that increased page speed by 340% and conversion rate by 2.1x.',
			stack: ['SvelteKit', 'Shopify Headless', 'Cloudflare'],
			image: '/images/projects/meridian.jpg',
			href: '/portfolio/meridian'
		},
		{
			category: 'Web Application',
			title: 'Real-Time Dashboard for Financial Services',
			description:
				'Enterprise dashboard processing 50k+ data points per second with sub-100ms render times.',
			stack: ['React', 'TypeScript', 'WebSockets', 'AWS'],
			image: '/images/projects/atlas.jpg',
			href: '/portfolio/atlas'
		},
		{
			category: 'Local SEO',
			title: 'From Page 5 to Position #1 in 90 Days',
			description:
				'Connecticut law firm went from invisible to dominating local search across 12 practice areas.',
			stack: ['Technical SEO', 'Content Strategy', 'Schema Markup'],
			image: '/images/projects/sterling.jpg',
			href: '/portfolio/sterling'
		}
	];
</script>

<Section background="charcoal" padding="lg">
	<Container>
		<div class="mb-16 text-center">
			<Eyebrow class="mb-4 justify-center">Selected Projects</Eyebrow>
			<h2 class="font-clash text-forge-white mb-6 text-4xl font-semibold md:text-5xl">
				Work That Speaks for Itself.
			</h2>
			<p class="text-forge-smoke mx-auto max-w-2xl text-lg">
				A selection of recent projects across industries. Every one built custom. Every one still
				performing.
			</p>
		</div>

		<div class="space-y-0.5">
			{#each projects as project, i}
				<div
					class="flex flex-col {i % 2 === 0
						? 'lg:flex-row'
						: 'lg:flex-row-reverse'} bg-forge-black group hover:bg-forge-charcoal transition-colors duration-500"
				>
					<!-- Image Side -->
					<div class="relative aspect-video overflow-hidden lg:aspect-auto lg:w-3/5">
						<div
							class="bg-forge-steel text-forge-ash flex h-full w-full items-center justify-center transition-transform duration-700 group-hover:scale-105"
						>
							<!-- Placeholder for project image -->
							<span class="text-sm">Project Screenshot</span>
						</div>
						<div
							class="from-forge-ember/10 absolute inset-0 bg-linear-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						></div>
					</div>

					<!-- Content Side -->
					<div class="flex flex-col justify-center p-12 lg:w-2/5 lg:p-16">
						<div
							class="border-forge-ember text-forge-ember font-jetbrains mb-5 inline-block border px-3 py-1 text-xs tracking-wider uppercase"
						>
							{project.category}
						</div>
						<h3 class="font-clash text-forge-white mb-4 text-3xl leading-tight font-semibold">
							{project.title}
						</h3>
						<p class="text-forge-smoke mb-6 leading-relaxed">
							{project.description}
						</p>
						<div class="mb-8 flex flex-wrap gap-2">
							{#each project.stack as tech}
								<span
									class="border-forge-steel text-forge-ash font-jetbrains border px-3 py-1 text-xs"
								>
									{tech}
								</span>
							{/each}
						</div>
						<a
							href={project.href}
							class="text-forge-ember hover:text-forge-glow font-satoshi group/link inline-flex items-center gap-2 text-sm tracking-wider uppercase transition-colors"
						>
							View Case Study
							<span class="transition-transform group-hover/link:translate-x-1">→</span>
						</a>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-16 text-center">
			<Button variant="primary" size="lg" href="/portfolio">
				{#snippet children()}
					View All Projects →
				{/snippet}
			</Button>
		</div>
	</Container>
</Section>
