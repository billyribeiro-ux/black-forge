<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
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
	class="z-fixed fixed top-0 right-0 left-0 transition-all duration-300"
	class:bg-forge-black={isScrolled}
	class:backdrop-blur-md={isScrolled}
	class:shadow-lg={isScrolled}
>
	<div class="container-forge">
		<div class="flex h-18 items-center justify-between md:h-20">
			<!-- Logo -->
			<a href="/" class="group flex flex-col">
				<div class="flex items-center gap-2">
					<span class="font-clash text-forge-white text-xl font-bold tracking-tight">
						BLACKFORGE
					</span>
					<span
						class="bg-forge-ember pulse-ember h-2 w-2 rounded-full transition-transform group-hover:scale-125"
					></span>
				</div>
				<span class="font-general text-forge-ash text-[10px] tracking-[0.375em] uppercase">
					Digital
				</span>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center gap-9 lg:flex">
				{#each navLinks as link}
					<a
						href={link.href}
						class="font-satoshi text-forge-smoke hover:text-forge-ember group relative text-sm tracking-wider uppercase transition-colors duration-200"
					>
						{link.label}
						<span
							class="bg-forge-ember absolute bottom-0 left-0 h-0.5 w-0 origin-left transition-all duration-300 group-hover:w-full"
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
				class="group flex h-6 w-6 flex-col items-center justify-center gap-1.5 lg:hidden"
				aria-label="Toggle menu"
			>
				<span
					class="bg-forge-white h-0.5 w-6 transition-all duration-300"
					class:rotate-45={isMobileMenuOpen}
					class:translate-y-2={isMobileMenuOpen}
				></span>
				<span
					class="bg-forge-white h-0.5 w-6 transition-all duration-300"
					class:opacity-0={isMobileMenuOpen}
				></span>
				<span
					class="bg-forge-white h-0.5 w-6 transition-all duration-300"
					class:-rotate-45={isMobileMenuOpen}
					class:-translate-y-2={isMobileMenuOpen}
				></span>
			</button>
		</div>
	</div>

	<!-- Mobile Menu Overlay -->
	{#if isMobileMenuOpen}
		<div
			class="bg-forge-black fixed inset-0 top-18 z-50 lg:hidden"
			onclick={toggleMobileMenu}
			onkeydown={(e) => e.key === 'Escape' && toggleMobileMenu()}
			role="dialog"
			aria-modal="true"
			tabindex="-1"
		>
			<div class="container-forge flex flex-col items-center gap-8 py-12">
				{#each navLinks as link}
					<a
						href={link.href}
						class="mobile-menu-item font-clash text-forge-white hover:text-forge-ember text-3xl font-semibold transition-colors"
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
