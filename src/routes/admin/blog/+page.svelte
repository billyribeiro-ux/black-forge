<script lang="ts">
	/**
	 * Blog post management page.
	 *
	 * Lists all blog posts with filtering, search, and quick actions.
	 */
	import Icon from '@iconify/svelte';
	import Button from '$lib/components/ui/Button.svelte';

	let searchQuery = $state('');
	let filterStatus = $state('all');

	const posts = [
		{
			id: '1',
			title: 'Why Your Next Website Should Be Built on SvelteKit — Not WordPress',
			slug: 'sveltekit-vs-wordpress',
			category: 'Web Development',
			status: 'published',
			publishedAt: 'Jan 15, 2025',
			views: 1247
		},
		{
			id: '2',
			title: 'Technical SEO Checklist for 2025',
			slug: 'technical-seo-checklist-2025',
			category: 'SEO & Growth',
			status: 'published',
			publishedAt: 'Jan 28, 2025',
			views: 892
		},
		{
			id: '3',
			title: 'TypeScript Strict Mode: Why We Mandate It',
			slug: 'typescript-strict-mode',
			category: 'Technical Deep-Dives',
			status: 'draft',
			publishedAt: null,
			views: 0
		}
	];

	const filteredPosts = $derived(
		posts.filter((post) => {
			const matchesSearch =
				searchQuery === '' ||
				post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				post.category.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesStatus = filterStatus === 'all' || post.status === filterStatus;
			return matchesSearch && matchesStatus;
		})
	);
</script>

<svelte:head>
	<title>Manage Blog Posts | Admin | Blackforge Digital</title>
</svelte:head>

<div class="p-8">
	<!-- Header -->
	<div class="mb-8 flex items-center justify-between">
		<div>
			<h1 class="font-clash text-forge-white mb-2 text-4xl font-bold">Blog Posts</h1>
			<p class="text-forge-smoke">Manage all your blog content</p>
		</div>
		<Button variant="primary" size="lg" href="/admin/blog/new">
			{#snippet children()}
				<Icon icon="ph:plus-circle" width="20" />
				New Post
			{/snippet}
		</Button>
	</div>

	<!-- Filters -->
	<div class="bg-forge-charcoal border-forge-steel mb-6 border p-6">
		<div class="flex flex-col gap-4 md:flex-row">
			<!-- Search -->
			<div class="flex-1">
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Search posts..."
					class="bg-forge-black border-forge-steel text-forge-white placeholder:text-forge-ash focus:border-forge-ember focus:ring-forge-ember w-full border px-4 py-2 focus:ring-1 focus:outline-none"
				/>
			</div>

			<!-- Status Filter -->
			<div>
				<select
					bind:value={filterStatus}
					class="bg-forge-black border-forge-steel text-forge-white focus:border-forge-ember focus:ring-forge-ember border px-4 py-2 focus:ring-1 focus:outline-none"
				>
					<option value="all">All Status</option>
					<option value="published">Published</option>
					<option value="draft">Draft</option>
				</select>
			</div>
		</div>
	</div>

	<!-- Posts Table -->
	<div class="bg-forge-charcoal border-forge-steel overflow-hidden border">
		<table class="w-full">
			<thead class="bg-forge-steel">
				<tr>
					<th
						class="font-jetbrains text-forge-white px-6 py-4 text-left text-xs tracking-wider uppercase"
					>
						Title
					</th>
					<th
						class="font-jetbrains text-forge-white px-6 py-4 text-left text-xs tracking-wider uppercase"
					>
						Category
					</th>
					<th
						class="font-jetbrains text-forge-white px-6 py-4 text-left text-xs tracking-wider uppercase"
					>
						Status
					</th>
					<th
						class="font-jetbrains text-forge-white px-6 py-4 text-left text-xs tracking-wider uppercase"
					>
						Published
					</th>
					<th
						class="font-jetbrains text-forge-white px-6 py-4 text-left text-xs tracking-wider uppercase"
					>
						Views
					</th>
					<th
						class="font-jetbrains text-forge-white px-6 py-4 text-right text-xs tracking-wider uppercase"
					>
						Actions
					</th>
				</tr>
			</thead>
			<tbody class="divide-forge-steel divide-y">
				{#each filteredPosts as post}
					<tr class="hover:bg-forge-steel/50 transition-colors">
						<td class="px-6 py-4">
							<div class="text-forge-white font-satoshi font-medium">{post.title}</div>
							<div class="text-forge-ash text-sm">/blog/{post.slug}</div>
						</td>
						<td class="px-6 py-4">
							<div class="text-forge-smoke text-sm">{post.category}</div>
						</td>
						<td class="px-6 py-4">
							<span
								class="font-jetbrains px-3 py-1 text-xs tracking-wider uppercase {post.status ===
								'published'
									? 'border border-green-500 bg-green-500/10 text-green-400'
									: 'border border-yellow-500 bg-yellow-500/10 text-yellow-400'}"
							>
								{post.status}
							</span>
						</td>
						<td class="px-6 py-4">
							<div class="text-forge-smoke text-sm">
								{post.publishedAt || '—'}
							</div>
						</td>
						<td class="px-6 py-4">
							<div class="text-forge-smoke text-sm">{post.views.toLocaleString()}</div>
						</td>
						<td class="px-6 py-4">
							<div class="flex items-center justify-end gap-2">
								<a
									href="/blog/{post.slug}"
									target="_blank"
									class="text-forge-ash hover:text-forge-ember p-2 transition-colors"
									title="View"
								>
									<Icon icon="ph:eye" width="18" />
								</a>
								<a
									href="/admin/blog/{post.id}/edit"
									class="text-forge-ash hover:text-forge-ember p-2 transition-colors"
									title="Edit"
								>
									<Icon icon="ph:pencil" width="18" />
								</a>
								<button
									class="text-forge-ash p-2 transition-colors hover:text-red-400"
									title="Delete"
								>
									<Icon icon="ph:trash" width="18" />
								</button>
							</div>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>

		{#if filteredPosts.length === 0}
			<div class="p-12 text-center">
				<Icon icon="ph:article" width="48" class="text-forge-ash mx-auto mb-4" />
				<p class="text-forge-ash">No posts found matching your criteria.</p>
			</div>
		{/if}
	</div>
</div>
