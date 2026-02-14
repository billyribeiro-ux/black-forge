<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import FeaturedWork from '$lib/components/home/FeaturedWork.svelte';
	import WhyBlackforge from '$lib/components/home/WhyBlackforge.svelte';
	import Testimonials from '$lib/components/home/Testimonials.svelte';
	import CTLocation from '$lib/components/home/CTLocation.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let heroRef = $state<HTMLElement>();
	let headlineRef = $state<HTMLElement>();

	onMount(() => {
		if (headlineRef) {
			const lines = headlineRef.querySelectorAll('.headline-line');
			gsap.from(lines, {
				y: 100,
				opacity: 0,
				duration: 0.8,
				stagger: 0.15,
				ease: 'power3.out',
				delay: 0.2
			});
		}
	});
</script>

<svelte:head>
	<title>Blackforge Digital — Forged for Performance</title>
	<meta
		name="description"
		content="Custom web development, app development, and SEO for Connecticut businesses. No templates. No shortcuts. Built to last."
	/>
</svelte:head>

<!-- HERO SECTION -->
<Section background="black" padding="none" grain={true} grid={true}>
	<div
		bind:this={heroRef}
		class="relative min-h-screen flex items-center justify-center"
		style="background: radial-gradient(ellipse at 80% 90%, rgba(255, 77, 0, 0.08) 0%, transparent 60%);"
	>
		<Container>
			<div class="max-w-4xl py-32">
				<!-- Eyebrow -->
				<Eyebrow class="mb-8 animate-fade-in">
					<span class="inline-flex items-center gap-2">
						<span class="w-1.5 h-1.5 rounded-full bg-forge-ember pulse-ember"></span>
						WEB DEVELOPMENT × APP DEVELOPMENT × SEO
					</span>
				</Eyebrow>

				<!-- Headline -->
				<div bind:this={headlineRef} class="mb-8 overflow-hidden">
					<h1 class="font-clash text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
						<div class="headline-line overflow-hidden">
							<span class="block">We Don't Build Websites.</span>
						</div>
						<div class="headline-line overflow-hidden">
							<span class="block">
								We Engineer
								<span class="text-forge-ember ember-glow">Digital</span>
							</span>
						</div>
						<div class="headline-line overflow-hidden">
							<span class="block">Dominance.</span>
						</div>
					</h1>
				</div>

				<!-- Subheadline -->
				<p class="text-lg md:text-xl text-forge-smoke leading-relaxed max-w-2xl mb-10">
					Custom-built web applications, native apps, and search strategies that turn Connecticut
					businesses into market leaders. No templates. No shortcuts. No compromises.
				</p>

				<!-- CTA Row -->
				<div class="flex flex-col sm:flex-row gap-5 mb-16">
					<Button variant="primary" size="lg" href="/portfolio">
						{#snippet children()}
							See Our Work →
						{/snippet}
					</Button>
					<Button variant="secondary" size="lg" href="/process">
						{#snippet children()}
							Our Process
						{/snippet}
					</Button>
				</div>

				<!-- Stats Row -->
				<div class="flex flex-wrap gap-8 md:gap-12 border-t border-forge-steel pt-12">
					<div class="flex flex-col">
						<span class="font-clash text-4xl md:text-5xl font-semibold text-forge-ember mb-2">
							150+
						</span>
						<span class="text-sm uppercase tracking-wider text-forge-ash">Projects Delivered</span>
					</div>
					<div class="w-px bg-forge-steel hidden md:block"></div>
					<div class="flex flex-col">
						<span class="font-clash text-4xl md:text-5xl font-semibold text-forge-ember mb-2">
							10+
						</span>
						<span class="text-sm uppercase tracking-wider text-forge-ash">
							Years of Engineering
						</span>
					</div>
					<div class="w-px bg-forge-steel hidden md:block"></div>
					<div class="flex flex-col">
						<span class="font-clash text-4xl md:text-5xl font-semibold text-forge-ember mb-2">
							97%
						</span>
						<span class="text-sm uppercase tracking-wider text-forge-ash">Client Retention</span>
					</div>
				</div>
			</div>
		</Container>

		<!-- Scroll Indicator -->
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
			<div class="w-px h-20 bg-forge-ash relative overflow-hidden">
				<div class="w-full h-4 bg-forge-ember animate-scroll-down"></div>
			</div>
			<span class="text-xs uppercase tracking-widest text-forge-ash">Scroll</span>
		</div>
	</div>
</Section>

<!-- TRUST BAR SECTION -->
<Section background="charcoal" padding="sm">
	<Container>
		<div class="flex flex-col md:flex-row items-center justify-between gap-8">
			<p class="text-sm uppercase tracking-wider text-forge-ash">
				Trusted by businesses across Connecticut and beyond
			</p>
			<div class="flex items-center gap-12 opacity-40 grayscale">
				<!-- Placeholder for client logos -->
				<div class="text-forge-smoke text-sm">Client Logos</div>
			</div>
		</div>
	</Container>
</Section>

<!-- SERVICES OVERVIEW SECTION -->
<Section background="black" padding="lg">
	<Container>
		<div class="mb-16">
			<Eyebrow withLine={true} class="mb-4">What We Build</Eyebrow>
			<h2 class="font-clash text-4xl md:text-5xl font-semibold text-forge-white mb-6 max-w-3xl">
				Three Disciplines. One Obsession.
			</h2>
			<p class="text-lg text-forge-smoke max-w-2xl leading-relaxed">
				Every project starts with strategy and ends with measurable results. We don't do one-offs —
				we build digital ecosystems.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-forge-steel">
			<!-- Service Card 1 - Web Development -->
			<div
				class="bg-forge-black p-12 hover:bg-forge-charcoal transition-colors duration-400 group"
			>
				<div class="text-forge-ember mb-6">
					<svg
						class="w-12 h-12"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect x="2" y="3" width="20" height="14" rx="2" stroke-width="2" />
						<path d="M8 21h8" stroke-width="2" stroke-linecap="round" />
						<path d="M12 17v4" stroke-width="2" stroke-linecap="round" />
					</svg>
				</div>
				<h3 class="font-satoshi text-2xl font-bold text-forge-white mb-4">Web Development</h3>
				<p class="text-forge-ash leading-relaxed mb-6">
					Performance-obsessed websites and web applications built on modern frameworks. Every site
					we ship scores 95+ on Lighthouse and converts visitors into customers.
				</p>
				<a
					href="/services#web-development"
					class="inline-flex items-center gap-2 text-forge-ember hover:text-forge-glow font-satoshi text-sm uppercase tracking-wider transition-colors"
				>
					Explore Web Development →
				</a>
			</div>

			<!-- Service Card 2 - App Development -->
			<div
				class="bg-forge-black p-12 hover:bg-forge-charcoal transition-colors duration-400 group"
			>
				<div class="text-forge-ember mb-6">
					<svg
						class="w-12 h-12"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect x="5" y="2" width="14" height="20" rx="2" stroke-width="2" />
						<path d="M12 18h.01" stroke-width="2" stroke-linecap="round" />
					</svg>
				</div>
				<h3 class="font-satoshi text-2xl font-bold text-forge-white mb-4">App Development</h3>
				<p class="text-forge-ash leading-relaxed mb-6">
					Native and cross-platform applications engineered for real users. We build apps that feel
					fast, work offline, and scale to millions — from MVP to enterprise.
				</p>
				<a
					href="/services#app-development"
					class="inline-flex items-center gap-2 text-forge-ember hover:text-forge-glow font-satoshi text-sm uppercase tracking-wider transition-colors"
				>
					Explore App Development →
				</a>
			</div>

			<!-- Service Card 3 - SEO & Growth -->
			<div
				class="bg-forge-black p-12 hover:bg-forge-charcoal transition-colors duration-400 group"
			>
				<div class="text-forge-ember mb-6">
					<svg
						class="w-12 h-12"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M3 13l4 4L21 3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke-width="2" />
					</svg>
				</div>
				<h3 class="font-satoshi text-2xl font-bold text-forge-white mb-4">SEO & Growth</h3>
				<p class="text-forge-ash leading-relaxed mb-6">
					Data-driven search strategies that compound over time. We don't chase algorithms — we
					build authority. Technical SEO, content strategy, and local dominance.
				</p>
				<a
					href="/services#seo-growth"
					class="inline-flex items-center gap-2 text-forge-ember hover:text-forge-glow font-satoshi text-sm uppercase tracking-wider transition-colors"
				>
					Explore SEO & Growth →
				</a>
			</div>
		</div>
	</Container>
</Section>

<!-- FEATURED WORK SECTION -->
<FeaturedWork />

<!-- WHY BLACKFORGE SECTION -->
<WhyBlackforge />

<!-- TESTIMONIALS SECTION -->
<Testimonials />

<!-- CT LOCATION SECTION -->
<CTLocation />

<!-- CTA BANNER -->
<Section background="black" padding="lg">
	<div
		class="bg-forge-ember grain-texture py-24 px-8 text-center"
		style="background: linear-gradient(135deg, var(--forge-ember) 0%, var(--forge-glow) 100%);"
	>
		<Container size="narrow">
			<h2 class="font-clash text-4xl md:text-5xl font-bold text-forge-black mb-6">
				Ready to Build Something That Actually Works?
			</h2>
			<p class="text-lg text-forge-black/80 mb-10 max-w-2xl mx-auto leading-relaxed">
				Let's talk about your project. No pitch decks. No fluff. Just a real conversation about
				what you need and how we'll build it.
			</p>
			<Button variant="secondary" size="lg" href="/contact">
				{#snippet children()}
					<span class="text-forge-black hover:text-forge-white transition-colors">
						Start a Conversation →
					</span>
				{/snippet}
			</Button>
		</Container>
	</div>
</Section>

<style>
	@keyframes scroll-down {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(400%);
		}
	}

	.animate-scroll-down {
		animation: scroll-down 2s ease-in-out infinite;
	}

	.animate-fade-in {
		animation: fade-in 0.6s ease-out 0.2s both;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
