<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import { onMount } from 'svelte';

	const testimonials = [
		{
			quote:
				"Blackforge didn't just build us a website — they engineered a revenue machine. Our conversion rate tripled in the first month.",
			author: 'Sarah Chen',
			title: 'CEO, Meridian Home Goods',
			avatar: '/images/avatars/sarah.jpg'
		},
		{
			quote:
				'Finally, a team that actually understands performance. Sub-second load times and our Google rankings doubled. Worth every penny.',
			author: 'Michael Torres',
			title: 'Partner, Sterling & Associates Law',
			avatar: '/images/avatars/michael.jpg'
		},
		{
			quote:
				"We've worked with three agencies before Blackforge. None of them came close to this level of technical excellence and transparency.",
			author: 'Jennifer Park',
			title: 'CTO, Atlas Financial',
			avatar: '/images/avatars/jennifer.jpg'
		}
	];

	let currentIndex = $state(0);
	let intervalId: number;

	onMount(() => {
		intervalId = window.setInterval(() => {
			currentIndex = (currentIndex + 1) % testimonials.length;
		}, 6000);

		return () => clearInterval(intervalId);
	});

	function goToSlide(index: number) {
		currentIndex = index;
	}
</script>

<Section
	background="charcoal"
	padding="lg"
	class="relative overflow-hidden"
	style="background: linear-gradient(135deg, var(--forge-charcoal) 0%, var(--forge-black) 100%);"
>
	<Container size="narrow">
		<div class="mb-16 text-center">
			<Eyebrow class="mb-4 justify-center">Client Words</Eyebrow>
			<h2 class="font-clash text-forge-white text-4xl font-semibold md:text-5xl">
				Don't Take Our Word For It.
			</h2>
		</div>

		<div class="relative">
			<!-- Large Quote Mark -->
			<div
				class="font-clash text-forge-ember/15 pointer-events-none absolute -top-8 -left-4 text-9xl leading-none"
			>
				"
			</div>

			<!-- Testimonial Content -->
			<div class="relative z-10 flex min-h-64 items-center justify-center">
				{#each testimonials as testimonial, i}
					{#if i === currentIndex}
						<div class="animate-fade-in text-center">
							<blockquote class="text-forge-white mb-8 text-xl leading-relaxed italic md:text-2xl">
								"{testimonial.quote}"
							</blockquote>
							<div class="flex items-center justify-center gap-4">
								<div
									class="bg-forge-steel border-forge-ember text-forge-white flex h-12 w-12 items-center justify-center rounded-full border-2 font-semibold"
								>
									{testimonial.author.charAt(0)}
								</div>
								<div class="text-left">
									<div class="font-satoshi text-forge-white font-semibold">
										{testimonial.author}
									</div>
									<div class="text-forge-ash text-sm">
										{testimonial.title}
									</div>
								</div>
							</div>
						</div>
					{/if}
				{/each}
			</div>

			<!-- Navigation Dots -->
			<div class="mt-12 flex justify-center gap-3">
				{#each testimonials as _testimonial, i}
					<button
						onclick={() => goToSlide(i)}
						class="h-2 w-2 rounded-full transition-all duration-300 {i === currentIndex
							? 'bg-forge-ember w-8'
							: 'bg-forge-steel hover:bg-forge-ash'}"
						aria-label="Go to testimonial {i + 1}"
					></button>
				{/each}
			</div>
		</div>
	</Container>
</Section>
