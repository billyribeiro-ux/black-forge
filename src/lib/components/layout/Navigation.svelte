<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/Button.svelte';
	import Icon from '@iconify/svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let navRef = $state<HTMLElement>();
	let isScrolled = $state(false);
	let isMobileMenuOpen = $state(false);

	const navLinks = [
		{ label: 'Services', href: '/services' },
		{ label: 'Work', href: '/portfolio' },
		{ label: 'About', href: '/about' },
		{ label: 'Process', href: '/process' },
		{ label: 'Blog', href: '/blog' }
	];

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;

		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	$effect(() => {
		if (isMobileMenuOpen && navRef) {
			const menuItems = navRef.querySelectorAll('.mobile-menu-item');
			gsap.from(menuItems, {
				y: 20,
				opacity: 0,
				duration: 0.4,
				stagger: 0.08,
				ease: 'power2.out'
			});
		}
	});
</script>

<nav
	bind:this={navRef}
	class="fixed top-0 left-0 right-0 z-fixed transition-all duration-300"
	class:bg-forge-black={isScrolled}
	class:backdrop-blur-md={isScrolled}
	class:shadow-lg={isScrolled}
>
	<div class="container-forge">
		<div class="flex h-18 md:h-20 items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex flex-col group">
				<div class="flex items-center gap-2">
					<span class="font-clash text-xl font-bold text-forge-white tracking-tight">
						BLACKFORGE
					</span>
					<span
						class="w-2 h-2 rounded-full bg-forge-ember pulse-ember group-hover:scale-125 transition-transform"
					></span>
				</div>
				<span class="font-general text-[10px] uppercase tracking-[0.375em] text-forge-ash">
					Digital
				</span>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden lg:flex items-center gap-9">
				{#each navLinks as link}
					<a
						href={link.href}
						class="relative font-satoshi text-sm uppercase tracking-wider text-forge-smoke hover:text-forge-ember transition-colors duration-200 group"
					>
						{link.label}
						<span
							class="absolute bottom-0 left-0 w-0 h-0.5 bg-forge-ember group-hover:w-full transition-all duration-300 origin-left"
						></span>
					</a>
				{/each}
			</div>

			<!-- CTA Button (Desktop) -->
			<div class="hidden lg:block">
				<Button variant="primary" size="sm" href="/contact">
					{#snippet children()}
						Start a Project
					{/snippet}
				</Button>
			</div>

			<!-- Mobile Menu Button -->
			<button
				onclick={toggleMobileMenu}
				class="lg:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center group"
				aria-label="Toggle menu"
			>
				<span
					class="w-6 h-0.5 bg-forge-white transition-all duration-300"
					class:rotate-45={isMobileMenuOpen}
					class:translate-y-2={isMobileMenuOpen}
				></span>
				<span
					class="w-6 h-0.5 bg-forge-white transition-all duration-300"
					class:opacity-0={isMobileMenuOpen}
				></span>
				<span
					class="w-6 h-0.5 bg-forge-white transition-all duration-300"
					class:-rotate-45={isMobileMenuOpen}
					class:-translate-y-2={isMobileMenuOpen}
				></span>
			</button>
		</div>
	</div>

	<!-- Mobile Menu Overlay -->
	{#if isMobileMenuOpen}
		<div
			class="fixed inset-0 top-18 bg-forge-black z-50 lg:hidden"
			onclick={toggleMobileMenu}
			role="dialog"
			aria-modal="true"
		>
			<div class="container-forge py-12 flex flex-col items-center gap-8">
				{#each navLinks as link}
					<a
						href={link.href}
						class="mobile-menu-item font-clash text-3xl font-semibold text-forge-white hover:text-forge-ember transition-colors"
						onclick={toggleMobileMenu}
					>
						{link.label}
					</a>
				{/each}
				<div class="mobile-menu-item mt-4">
					<Button variant="primary" size="lg" href="/contact">
						{#snippet children()}
							Start a Project
						{/snippet}
					</Button>
				</div>
			</div>
		</div>
	{/if}
</nav>
