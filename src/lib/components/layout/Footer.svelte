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

<footer class="bg-forge-black border-t border-forge-steel">
	<div class="container-forge py-20">
		<!-- Top Row - 4 Column Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12">
			<!-- Column 1 - Brand -->
			<div class="lg:col-span-2">
				<a href="/" class="flex flex-col mb-5">
					<div class="flex items-center gap-2">
						<span class="font-clash text-xl font-bold text-forge-white tracking-tight">
							BLACKFORGE
						</span>
						<span class="w-2 h-2 rounded-full bg-forge-ember pulse-ember"></span>
					</div>
					<span class="font-general text-[10px] uppercase tracking-[0.375em] text-forge-ash">
						Digital
					</span>
				</a>
				<p class="text-sm text-forge-ash leading-relaxed max-w-sm mb-6">
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
				<h3 class="font-satoshi text-sm font-semibold uppercase tracking-wider text-forge-white mb-5">
					Services
				</h3>
				<ul class="space-y-3">
					{#each footerLinks.services as link}
						<li>
							<a
								href={link.href}
								class="text-sm text-forge-ash hover:text-forge-white transition-colors duration-200"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Column 3 - Company -->
			<div>
				<h3 class="font-satoshi text-sm font-semibold uppercase tracking-wider text-forge-white mb-5">
					Company
				</h3>
				<ul class="space-y-3">
					{#each footerLinks.company as link}
						<li>
							<a
								href={link.href}
								class="text-sm text-forge-ash hover:text-forge-white transition-colors duration-200"
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
			class="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-forge-steel"
		>
			<p class="text-sm text-forge-ash">
				© {currentYear} Blackforge Digital. All rights reserved.
			</p>
			<div class="flex items-center gap-6">
				<a
					href="/privacy"
					class="text-sm text-forge-ash hover:text-forge-white transition-colors duration-200"
				>
					Privacy Policy
				</a>
				<span class="text-forge-steel">·</span>
				<a
					href="/terms"
					class="text-sm text-forge-ash hover:text-forge-white transition-colors duration-200"
				>
					Terms of Service
				</a>
			</div>
		</div>
	</div>
</footer>
