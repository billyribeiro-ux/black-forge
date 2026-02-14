<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import Icon from '@iconify/svelte';
</script>

<Section background="black" padding="lg">
	<Container>
		<div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
			<!-- Left Column - Content -->
			<div>
				<Eyebrow withLine={true} class="mb-6">Wolcott, Connecticut</Eyebrow>
				<h2 class="font-clash text-forge-white mb-6 text-4xl font-semibold md:text-5xl">
					Built in Connecticut. Trusted Nationwide.
				</h2>
				<p class="text-forge-smoke mb-8 text-lg leading-relaxed">
					Headquartered in Wolcott, CT, we serve businesses across the state and beyond. From
					Hartford to New Haven, Waterbury to Greenwich — if you demand digital excellence, we're
					your team.
				</p>

				<div class="space-y-4">
					<div class="text-forge-smoke flex items-center gap-3">
						<Icon icon="ph:check-circle" class="text-forge-ember" width="20" />
						<span>Serving Connecticut since 2014</span>
					</div>
					<div class="text-forge-smoke flex items-center gap-3">
						<Icon icon="ph:check-circle" class="text-forge-ember" width="20" />
						<span>Clients across 12+ CT towns</span>
					</div>
					<div class="text-forge-smoke flex items-center gap-3">
						<Icon icon="ph:check-circle" class="text-forge-ember" width="20" />
						<span>Top-rated on Google (5.0 ★★★★★)</span>
					</div>
				</div>
			</div>

			<!-- Right Column - Map Visual -->
			<div class="bg-forge-charcoal relative h-96 overflow-hidden rounded-sm">
				<div class="absolute inset-0 flex items-center justify-center">
					<!-- Stylized CT Map Placeholder -->
					<div class="relative flex h-full w-full items-center justify-center">
						<div class="text-center">
							<div class="bg-forge-ember pulse-ember relative mx-auto mb-4 h-4 w-4 rounded-full">
								<div class="bg-forge-ember/30 absolute inset-0 animate-ping rounded-full"></div>
							</div>
							<div class="font-satoshi text-forge-white font-semibold">Wolcott, CT</div>
							<div class="text-forge-ash text-sm">06716</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Container>
</Section>
