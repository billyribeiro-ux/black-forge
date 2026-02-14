<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import Icon from '@iconify/svelte';
</script>

<Section background="black" padding="lg">
	<Container>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			<!-- Left Column - Content -->
			<div>
				<Eyebrow withLine={true} class="mb-6">Wolcott, Connecticut</Eyebrow>
				<h2 class="font-clash text-4xl md:text-5xl font-semibold text-forge-white mb-6">
					Built in Connecticut. Trusted Nationwide.
				</h2>
				<p class="text-lg text-forge-smoke leading-relaxed mb-8">
					Headquartered in Wolcott, CT, we serve businesses across the state and beyond. From
					Hartford to New Haven, Waterbury to Greenwich — if you demand digital excellence, we're
					your team.
				</p>

				<div class="space-y-4">
					<div class="flex items-center gap-3 text-forge-smoke">
						<Icon icon="ph:check-circle" class="text-forge-ember" width="20" />
						<span>Serving Connecticut since 2014</span>
					</div>
					<div class="flex items-center gap-3 text-forge-smoke">
						<Icon icon="ph:check-circle" class="text-forge-ember" width="20" />
						<span>Clients across 12+ CT towns</span>
					</div>
					<div class="flex items-center gap-3 text-forge-smoke">
						<Icon icon="ph:check-circle" class="text-forge-ember" width="20" />
						<span>Top-rated on Google (5.0 ★★★★★)</span>
					</div>
				</div>
			</div>

			<!-- Right Column - Map Visual -->
			<div class="relative h-96 bg-forge-charcoal rounded-sm overflow-hidden">
				<div class="absolute inset-0 flex items-center justify-center">
					<!-- Stylized CT Map Placeholder -->
					<div class="relative w-full h-full flex items-center justify-center">
						<div class="text-center">
							<div
								class="w-4 h-4 rounded-full bg-forge-ember pulse-ember mx-auto mb-4 relative"
							>
								<div
									class="absolute inset-0 rounded-full bg-forge-ember/30 animate-ping"
								></div>
							</div>
							<div class="font-satoshi text-forge-white font-semibold">Wolcott, CT</div>
							<div class="text-sm text-forge-ash">06716</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Container>
</Section>
