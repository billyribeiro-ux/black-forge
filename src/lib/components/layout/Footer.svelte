<script lang="ts">
	import Icon from '@iconify/svelte';

	const currentYear = new Date().getFullYear();

	const footerLinks = {
		services: [
			{ label: 'Web Development', href: '/services#web-development' },
			{ label: 'App Development', href: '/services#app-development' },
			{ label: 'SEO & Growth', href: '/services#seo-growth' },
			{ label: 'UI/UX Design', href: '/services' },
			{ label: 'Consulting', href: '/contact' }
		],
		company: [
			{ label: 'About', href: '/about' },
			{ label: 'Our Process', href: '/process' },
			{ label: 'Portfolio', href: '/portfolio' },
			{ label: 'Blog', href: '/blog' },
			{ label: 'Contact', href: '/contact' }
		]
	};

	const socialLinks = [
		{ icon: 'ph:linkedin-logo', href: 'https://linkedin.com', label: 'LinkedIn' },
		{ icon: 'ph:x-logo', href: 'https://x.com', label: 'X/Twitter' },
		{ icon: 'ph:instagram-logo', href: 'https://instagram.com', label: 'Instagram' },
		{ icon: 'ph:github-logo', href: 'https://github.com', label: 'GitHub' }
	];
</script>

<footer class="bg-forge-black border-forge-steel border-t">
	<div class="container-forge py-20">
		<!-- Top Row - 4 Column Grid -->
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
			<!-- Column 1 - Brand -->
			<div class="lg:col-span-2">
				<a href="/" class="mb-5 flex flex-col">
					<div class="flex items-center gap-2">
						<span class="font-clash text-forge-white text-xl font-bold tracking-tight">
							BLACKFORGE
						</span>
						<span class="bg-forge-ember pulse-ember h-2 w-2 rounded-full"></span>
					</div>
					<span class="font-general text-forge-ash text-[10px] tracking-[0.375em] uppercase">
						Digital
					</span>
				</a>
				<p class="text-forge-ash mb-6 max-w-sm text-sm leading-relaxed">
					Precision-built web development, app development, and SEO for businesses that refuse to
					settle.
				</p>
				<div class="flex items-center gap-5">
					{#each socialLinks as social}
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							class="text-forge-ash hover:text-forge-ember transition-colors duration-200"
							aria-label={social.label}
						>
							<Icon icon={social.icon} width="20" height="20" />
						</a>
					{/each}
				</div>
			</div>

			<!-- Column 2 - Services -->
			<div>
				<h3
					class="font-satoshi text-forge-white mb-5 text-sm font-semibold tracking-wider uppercase"
				>
					Services
				</h3>
				<ul class="space-y-3">
					{#each footerLinks.services as link}
						<li>
							<a
								href={link.href}
								class="text-forge-ash hover:text-forge-white text-sm transition-colors duration-200"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Column 3 - Company -->
			<div>
				<h3
					class="font-satoshi text-forge-white mb-5 text-sm font-semibold tracking-wider uppercase"
				>
					Company
				</h3>
				<ul class="space-y-3">
					{#each footerLinks.company as link}
						<li>
							<a
								href={link.href}
								class="text-forge-ash hover:text-forge-white text-sm transition-colors duration-200"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- Bottom Row - Copyright -->
		<div
			class="border-forge-steel mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row"
		>
			<p class="text-forge-ash text-sm">
				© {currentYear} Blackforge Digital. All rights reserved.
			</p>
			<div class="flex items-center gap-6">
				<a
					href="/privacy"
					class="text-forge-ash hover:text-forge-white text-sm transition-colors duration-200"
				>
					Privacy Policy
				</a>
				<span class="text-forge-steel">·</span>
				<a
					href="/terms"
					class="text-forge-ash hover:text-forge-white text-sm transition-colors duration-200"
				>
					Terms of Service
				</a>
			</div>
		</div>
	</div>
</footer>
