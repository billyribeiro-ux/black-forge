<script lang="ts">
	/**
	 * Admin layout component.
	 *
	 * Provides consistent layout for all admin pages with sidebar navigation.
	 */
	import type { LayoutData } from './$types';
	import { authClient } from '$lib/auth-client';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	let { data, children }: { data: LayoutData; children: any } = $props();

	const isLoginPage = $derived($page.url.pathname === '/admin/login');

	async function handleLogout(): Promise<void> {
		await authClient.signOut();
		await goto('/admin/login');
	}

	const navItems = [
		{ label: 'Dashboard', href: '/admin', icon: 'ph:house' },
		{ label: 'Blog Posts', href: '/admin/blog', icon: 'ph:article' },
		{ label: 'New Post', href: '/admin/blog/new', icon: 'ph:plus-circle' },
		{ label: 'Settings', href: '/admin/settings', icon: 'ph:gear' }
	];
</script>

{#if isLoginPage}
	<!-- Login page - no layout -->
	{@render children()}
{:else}
	<!-- Admin layout with sidebar -->
	<div class="bg-forge-black flex min-h-screen">
		<!-- Sidebar -->
		<aside class="bg-forge-charcoal border-forge-steel w-64 shrink-0 border-r">
			<div class="border-forge-steel border-b p-6">
				<a href="/admin" class="font-clash text-forge-white text-2xl font-bold">
					<span class="text-forge-ember">BLACKFORGE</span>
					<div class="font-satoshi text-forge-ash mt-1 text-xs tracking-wider uppercase">
						Admin Portal
					</div>
				</a>
			</div>

			<nav class="p-4">
				<ul class="space-y-2">
					{#each navItems as item}
						<li>
							<a
								href={item.href}
								class="text-forge-smoke hover:text-forge-white hover:bg-forge-steel flex items-center gap-3 px-4 py-3 transition-colors {$page
									.url.pathname === item.href
									? 'bg-forge-steel text-forge-white border-forge-ember border-l-2'
									: ''}"
							>
								<Icon icon={item.icon} width="20" />
								<span class="font-satoshi text-sm">{item.label}</span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- User Info & Logout -->
			<div class="border-forge-steel absolute right-0 bottom-0 left-0 w-64 border-t p-4">
				{#if data.user}
					<div class="mb-3 flex items-center gap-3">
						<div
							class="bg-forge-steel text-forge-white font-clash flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
						>
							{data.user.email?.charAt(0).toUpperCase()}
						</div>
						<div class="min-w-0 flex-1">
							<div class="text-forge-white font-satoshi truncate text-sm">
								{data.user.email}
							</div>
							<div class="text-forge-ash text-xs">Administrator</div>
						</div>
					</div>
				{/if}
				<button
					onclick={handleLogout}
					class="bg-forge-steel hover:bg-forge-ember text-forge-white font-satoshi flex w-full items-center justify-center gap-2 px-4 py-2 text-sm transition-colors"
				>
					<Icon icon="ph:sign-out" width="16" />
					Sign Out
				</button>
			</div>
		</aside>

		<!-- Main Content -->
		<main class="flex-1 overflow-auto">
			{@render children()}
		</main>
	</div>
{/if}
