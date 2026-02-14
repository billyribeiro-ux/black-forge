<script lang="ts">
	/**
	 * Create new blog post page.
	 *
	 * Full-featured editor for creating blog posts with metadata,
	 * content, SEO, and publishing options.
	 */
	import TipTapEditor from '$lib/components/admin/TipTapEditor.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';

	let title = $state('');
	let slug = $state('');
	let excerpt = $state('');
	let content = $state('');
	let category = $state('Web Development');
	let tags = $state('');
	let featuredImage = $state('');
	let featuredImageAlt = $state('');
	let metaTitle = $state('');
	let metaDescription = $state('');
	let focusKeyword = $state('');
	let status = $state<'draft' | 'published'>('draft');
	let featured = $state(false);
	let isLoading = $state(false);
	let error = $state('');

	const categories = [
		'Web Development',
		'App Development',
		'SEO & Growth',
		'Case Studies',
		'Industry Insights',
		'Technical Deep-Dives'
	];

	// Auto-generate slug from title
	$effect(() => {
		if (title && !slug) {
			slug = title
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, '-')
				.replace(/^-|-$/g, '');
		}
	});

	// Auto-generate meta title if empty
	$effect(() => {
		if (title && !metaTitle) {
			metaTitle = title;
		}
	});

	// Calculate read time
	const readTime = $derived(() => {
		const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
		return Math.max(1, Math.ceil(words / 238));
	});

	async function handleSave(publishNow = false): Promise<void> {
		error = '';
		isLoading = true;

		try {
			// Validation
			if (!title.trim()) {
				error = 'Title is required';
				isLoading = false;
				return;
			}
			if (!slug.trim()) {
				error = 'Slug is required';
				isLoading = false;
				return;
			}
			if (!excerpt.trim()) {
				error = 'Excerpt is required';
				isLoading = false;
				return;
			}
			if (!content.trim()) {
				error = 'Content is required';
				isLoading = false;
				return;
			}

			const postData = {
				title,
				slug,
				excerpt,
				content,
				category,
				tags: tags
					.split(',')
					.map((t) => t.trim())
					.filter(Boolean),
				featuredImage: featuredImage || null,
				featuredImageAlt: featuredImageAlt || '',
				featured,
				status: publishNow ? 'published' : status,
				readTime: readTime(),
				seo: {
					metaTitle: metaTitle || title,
					metaDescription: metaDescription || excerpt,
					focusKeyword: focusKeyword || ''
				}
			};

			const response = await fetch('/api/admin/blog', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(postData)
			});

			if (!response.ok) {
				const data = await response.json();
				error = data.error || 'Failed to save post';
				isLoading = false;
				return;
			}

			const result = await response.json();
			await goto(`/admin/blog/${result.id}/edit?success=created`);
		} catch (err) {
			error = 'An unexpected error occurred';
			isLoading = false;
		}
	}
</script>

<svelte:head>
	<title>New Blog Post | Admin | Blackforge Digital</title>
</svelte:head>

<div class="p-8">
	<!-- Header -->
	<div class="mb-8 flex items-center justify-between">
		<div>
			<h1 class="font-clash text-forge-white mb-2 text-4xl font-bold">New Blog Post</h1>
			<p class="text-forge-smoke">Create a new article for your blog</p>
		</div>
		<div class="flex gap-3">
			<Button variant="ghost" size="md" href="/admin/blog">
				{#snippet children()}
					<Icon icon="ph:x" width="20" />
					Cancel
				{/snippet}
			</Button>
			<Button variant="secondary" size="md" onclick={() => handleSave(false)} disabled={isLoading}>
				{#snippet children()}
					<Icon icon="ph:floppy-disk" width="20" />
					Save Draft
				{/snippet}
			</Button>
			<Button variant="primary" size="md" onclick={() => handleSave(true)} disabled={isLoading}>
				{#snippet children()}
					{#if isLoading}
						<Icon icon="ph:circle-notch" class="animate-spin" width="20" />
						Publishing...
					{:else}
						<Icon icon="ph:paper-plane-tilt" width="20" />
						Publish Now
					{/if}
				{/snippet}
			</Button>
		</div>
	</div>

	{#if error}
		<div class="mb-6 flex items-start gap-3 border border-red-500 bg-red-500/10 p-4 text-red-400">
			<Icon icon="ph:warning-circle" width="20" class="mt-0.5 shrink-0" />
			<span>{error}</span>
		</div>
	{/if}

	<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
		<!-- Main Content -->
		<div class="space-y-6 lg:col-span-2">
			<!-- Title -->
			<div>
				<label for="title" class="font-satoshi text-forge-white mb-2 block text-sm font-medium">
					Title *
				</label>
				<input
					type="text"
					id="title"
					bind:value={title}
					placeholder="Enter post title..."
					class="bg-forge-charcoal border-forge-steel text-forge-white placeholder:text-forge-ash focus:border-forge-ember focus:ring-forge-ember font-satoshi w-full border px-4 py-3 text-xl font-semibold focus:ring-1 focus:outline-none"
				/>
			</div>

			<!-- Slug -->
			<div>
				<label for="slug" class="font-satoshi text-forge-white mb-2 block text-sm font-medium">
					Slug *
				</label>
				<div class="flex items-center gap-2">
					<span class="text-forge-ash text-sm">/blog/</span>
					<input
						type="text"
						id="slug"
						bind:value={slug}
						placeholder="post-slug"
						class="bg-forge-charcoal border-forge-steel text-forge-white placeholder:text-forge-ash focus:border-forge-ember focus:ring-forge-ember flex-1 border px-4 py-2 font-mono text-sm focus:ring-1 focus:outline-none"
					/>
				</div>
			</div>

			<!-- Excerpt -->
			<div>
				<label for="excerpt" class="font-satoshi text-forge-white mb-2 block text-sm font-medium">
					Excerpt * <span class="text-forge-ash font-normal">({excerpt.length}/300)</span>
				</label>
				<textarea
					id="excerpt"
					bind:value={excerpt}
					maxlength="300"
					rows="3"
					placeholder="Brief description of the post..."
					class="bg-forge-charcoal border-forge-steel text-forge-white placeholder:text-forge-ash focus:border-forge-ember focus:ring-forge-ember w-full resize-none border px-4 py-3 focus:ring-1 focus:outline-none"
				></textarea>
			</div>

			<!-- Content Editor -->
			<div>
				<label class="font-satoshi text-forge-white mb-2 block text-sm font-medium">
					Content * <span class="text-forge-ash font-normal">({readTime()} min read)</span>
				</label>
				<TipTapEditor bind:content />
			</div>
		</div>

		<!-- Sidebar -->
		<div class="space-y-6">
			<!-- Category -->
			<div class="bg-forge-charcoal border-forge-steel border p-6">
				<h3 class="font-satoshi text-forge-white mb-4 font-semibold">Category</h3>
				<select
					bind:value={category}
					class="bg-forge-black border-forge-steel text-forge-white focus:border-forge-ember focus:ring-forge-ember w-full border px-4 py-2 focus:ring-1 focus:outline-none"
				>
					{#each categories as cat}
						<option value={cat}>{cat}</option>
					{/each}
				</select>
			</div>

			<!-- Tags -->
			<div class="bg-forge-charcoal border-forge-steel border p-6">
				<h3 class="font-satoshi text-forge-white mb-4 font-semibold">Tags</h3>
				<input
					type="text"
					bind:value={tags}
					placeholder="tag1, tag2, tag3"
					class="bg-forge-black border-forge-steel text-forge-white placeholder:text-forge-ash focus:border-forge-ember focus:ring-forge-ember w-full border px-4 py-2 text-sm focus:ring-1 focus:outline-none"
				/>
				<p class="text-forge-ash mt-2 text-xs">Separate tags with commas</p>
			</div>

			<!-- Featured Image -->
			<div class="bg-forge-charcoal border-forge-steel border p-6">
				<h3 class="font-satoshi text-forge-white mb-4 font-semibold">Featured Image</h3>
				<input
					type="url"
					bind:value={featuredImage}
					placeholder="https://..."
					class="bg-forge-black border-forge-steel text-forge-white placeholder:text-forge-ash focus:border-forge-ember focus:ring-forge-ember mb-3 w-full border px-4 py-2 text-sm focus:ring-1 focus:outline-none"
				/>
				<input
					type="text"
					bind:value={featuredImageAlt}
					placeholder="Alt text"
					class="bg-forge-black border-forge-steel text-forge-white placeholder:text-forge-ash focus:border-forge-ember focus:ring-forge-ember w-full border px-4 py-2 text-sm focus:ring-1 focus:outline-none"
				/>
			</div>

			<!-- Options -->
			<div class="bg-forge-charcoal border-forge-steel border p-6">
				<h3 class="font-satoshi text-forge-white mb-4 font-semibold">Options</h3>
				<label class="flex cursor-pointer items-center gap-3">
					<input type="checkbox" bind:checked={featured} class="h-4 w-4" />
					<span class="text-forge-smoke text-sm">Feature this post</span>
				</label>
			</div>

			<!-- SEO -->
			<div class="bg-forge-charcoal border-forge-steel border p-6">
				<h3 class="font-satoshi text-forge-white mb-4 font-semibold">SEO</h3>
				<div class="space-y-3">
					<input
						type="text"
						bind:value={metaTitle}
						placeholder="Meta title (60 chars)"
						maxlength="60"
						class="bg-forge-black border-forge-steel text-forge-white placeholder:text-forge-ash focus:border-forge-ember focus:ring-forge-ember w-full border px-4 py-2 text-sm focus:ring-1 focus:outline-none"
					/>
					<textarea
						bind:value={metaDescription}
						placeholder="Meta description (160 chars)"
						maxlength="160"
						rows="3"
						class="bg-forge-black border-forge-steel text-forge-white placeholder:text-forge-ash focus:border-forge-ember focus:ring-forge-ember w-full resize-none border px-4 py-2 text-sm focus:ring-1 focus:outline-none"
					></textarea>
					<input
						type="text"
						bind:value={focusKeyword}
						placeholder="Focus keyword"
						class="bg-forge-black border-forge-steel text-forge-white placeholder:text-forge-ash focus:border-forge-ember focus:ring-forge-ember w-full border px-4 py-2 text-sm focus:ring-1 focus:outline-none"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
