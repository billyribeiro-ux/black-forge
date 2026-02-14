<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';

	const differentiators = [
		{
			number: '01',
			label: 'No Templates. Ever.',
			description:
				"Every project is custom-coded. We don't reskin — we build from scratch."
		},
		{
			number: '02',
			label: 'Performance Guaranteed',
			description:
				"95+ Lighthouse scores or we keep optimizing. Speed isn't a feature — it's a requirement."
		},
		{
			number: '03',
			label: 'Full-Stack Ownership',
			description:
				'Front-end, back-end, infrastructure, SEO — one team owns the entire stack.'
		},
		{
			number: '04',
			label: 'Built for 10 Years',
			description:
				'Our code is architected for longevity. No tech debt. No "rebuild it in 2 years."'
		}
	];
</script>

<Section background="black" padding="lg">
	<Container>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
			<!-- Left Column - Copy -->
			<div>
				<Eyebrow withLine={true} class="mb-6">Why Us</Eyebrow>
				<h2 class="font-clash text-4xl md:text-5xl font-semibold text-forge-white mb-8 max-w-lg">
					Agencies Build Sites. We Engineer Outcomes.
				</h2>
				<div class="space-y-6 text-forge-smoke leading-relaxed">
					<p>
						Most agencies hand you a WordPress template, slap on a theme, and call it custom. You
						deserve better. Every Blackforge project is architected from the ground up on modern
						frameworks built for speed, security, and scale.
					</p>
					<p>
						We're engineers first, designers second, and strategists always. Based in Wolcott,
						Connecticut, we bring Silicon Valley engineering standards to businesses that refuse to
						settle for average.
					</p>
				</div>
				<a
					href="/process"
					class="inline-flex items-center gap-2 text-forge-ember hover:text-forge-glow font-satoshi text-sm uppercase tracking-wider transition-colors mt-8"
				>
					See How We Work →
				</a>
			</div>

			<!-- Right Column - Differentiator Grid -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-0.5 bg-forge-steel">
				{#each differentiators as item}
					<div
						class="bg-forge-charcoal p-8 hover:border-l-4 hover:border-l-forge-ember transition-all duration-300 group"
					>
						<div class="font-clash text-5xl font-semibold text-forge-ember/30 mb-3">
							{item.number}
						</div>
						<h3 class="font-satoshi text-lg font-semibold text-forge-white mb-2">
							{item.label}
						</h3>
						<p class="text-sm text-forge-ash leading-relaxed">
							{item.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</Container>
</Section>
