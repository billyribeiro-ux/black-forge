<script lang="ts">
	/**
	 * Admin dashboard page.
	 *
	 * Overview of blog statistics and recent activity.
	 */
	import Icon from '@iconify/svelte';
	import Button from '$lib/components/ui/Button.svelte';

	const stats = [
		{ label: 'Total Posts', value: '12', icon: 'ph:article', change: '+2 this month' },
		{ label: 'Published', value: '9', icon: 'ph:check-circle', change: '75% of total' },
		{ label: 'Drafts', value: '3', icon: 'ph:file-dashed', change: '25% of total' },
		{ label: 'Total Views', value: '1,247', icon: 'ph:eye', change: '+18% this month' }
	];

	const recentPosts = [
		{
			title: 'Why Your Next Website Should Be Built on SvelteKit',
			status: 'Published',
			date: 'Jan 15, 2025'
		},
		{ title: 'Technical SEO Checklist for 2025', status: 'Published', date: 'Jan 28, 2025' },
		{ title: 'TypeScript Strict Mode: Why We Mandate It', status: 'Draft', date: 'Dec 28, 2024' }
	];
</script>

<svelte:head>
	<title>Dashboard | Admin | Blackforge Digital</title>
</svelte:head>

<div class="p-8">
	<!-- Header -->
	<div class="mb-8">
		<h1 class="font-clash text-forge-white mb-2 text-4xl font-bold">Dashboard</h1>
		<p class="text-forge-smoke">Welcome back! Here's what's happening with your blog.</p>
	</div>

	<!-- Stats Grid -->
	<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
		{#each stats as stat}
			<div class="bg-forge-charcoal border-forge-steel border p-6">
				<div class="mb-4 flex items-start justify-between">
					<Icon icon={stat.icon} width="32" class="text-forge-ember" />
				</div>
				<div class="font-clash text-forge-white mb-1 text-3xl font-bold">{stat.value}</div>
				<div class="text-forge-smoke mb-2 text-sm">{stat.label}</div>
				<div class="text-forge-ash text-xs">{stat.change}</div>
			</div>
		{/each}
	</div>

	<!-- Quick Actions -->
	<div class="bg-forge-charcoal border-forge-steel mb-8 border p-6">
		<h2 class="font-satoshi text-forge-white mb-4 text-xl font-semibold">Quick Actions</h2>
		<div class="flex flex-wrap gap-4">
			<Button variant="primary" size="md" href="/admin/blog/new">
				{#snippet children()}
					<Icon icon="ph:plus-circle" width="20" />
					New Blog Post
				{/snippet}
			</Button>
			<Button variant="secondary" size="md" href="/admin/blog">
				{#snippet children()}
					<Icon icon="ph:article" width="20" />
					Manage Posts
				{/snippet}
			</Button>
			<Button variant="ghost" size="md" href="/blog">
				{#snippet children()}
					<Icon icon="ph:eye" width="20" />
					View Blog
				{/snippet}
			</Button>
		</div>
	</div>

	<!-- Recent Posts -->
	<div class="bg-forge-charcoal border-forge-steel border p-6">
		<h2 class="font-satoshi text-forge-white mb-4 text-xl font-semibold">Recent Posts</h2>
		<div class="space-y-4">
			{#each recentPosts as post}
				<div
					class="border-forge-steel flex items-center justify-between border-b py-3 last:border-0"
				>
					<div class="flex-1">
						<div class="text-forge-white font-satoshi mb-1">{post.title}</div>
						<div class="text-forge-ash text-sm">{post.date}</div>
					</div>
					<div
						class="font-jetbrains px-3 py-1 text-xs tracking-wider uppercase {post.status ===
						'Published'
							? 'border border-green-500 bg-green-500/10 text-green-400'
							: 'border border-yellow-500 bg-yellow-500/10 text-yellow-400'}"
					>
						{post.status}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
