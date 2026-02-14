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
		<div class="text-center mb-16">
			<Eyebrow class="mb-4 justify-center">Selected Projects</Eyebrow>
			<h2 class="font-clash text-4xl md:text-5xl font-semibold text-forge-white mb-6">
				Work That Speaks for Itself.
			</h2>
			<p class="text-lg text-forge-smoke max-w-2xl mx-auto">
				A selection of recent projects across industries. Every one built custom. Every one still
				performing.
			</p>
		</div>

		<div class="space-y-0.5">
			{#each projects as project, i}
				<div
					class="flex flex-col {i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-forge-black group hover:bg-forge-charcoal transition-colors duration-500"
				>
					<!-- Image Side -->
					<div class="lg:w-3/5 relative overflow-hidden aspect-video lg:aspect-auto">
						<div
							class="w-full h-full bg-forge-steel flex items-center justify-center text-forge-ash group-hover:scale-105 transition-transform duration-700"
						>
							<!-- Placeholder for project image -->
							<span class="text-sm">Project Screenshot</span>
						</div>
						<div
							class="absolute inset-0 bg-gradient-to-t from-forge-ember/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
						></div>
					</div>

					<!-- Content Side -->
					<div class="lg:w-2/5 p-12 lg:p-16 flex flex-col justify-center">
						<div
							class="inline-block px-3 py-1 border border-forge-ember text-forge-ember font-jetbrains text-xs uppercase tracking-wider mb-5"
						>
							{project.category}
						</div>
						<h3 class="font-clash text-3xl font-semibold text-forge-white mb-4 leading-tight">
							{project.title}
						</h3>
						<p class="text-forge-smoke leading-relaxed mb-6">
							{project.description}
						</p>
						<div class="flex flex-wrap gap-2 mb-8">
							{#each project.stack as tech}
								<span
									class="px-3 py-1 border border-forge-steel text-forge-ash font-jetbrains text-xs"
								>
									{tech}
								</span>
							{/each}
						</div>
						<a
							href={project.href}
							class="inline-flex items-center gap-2 text-forge-ember hover:text-forge-glow font-satoshi text-sm uppercase tracking-wider transition-colors group/link"
						>
							View Case Study
							<span class="group-hover/link:translate-x-1 transition-transform">→</span>
						</a>
					</div>
				</div>
			{/each}
		</div>

		<div class="text-center mt-16">
			<Button variant="primary" size="lg" href="/portfolio">
				{#snippet children()}
					View All Projects →
				{/snippet}
			</Button>
		</div>
	</Container>
</Section>
