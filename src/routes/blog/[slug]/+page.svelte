<script lang="ts">
	/**
	 * Individual blog post page.
	 *
	 * Displays full blog post with table of contents, author bio,
	 * related posts, and share functionality per 07-BLOG.md specification.
	 */
	import type { PageData } from './$types';
	import Container from '$lib/components/ui/Container.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Breadcrumb from '$lib/components/blog/Breadcrumb.svelte';
	import TableOfContents from '$lib/components/blog/TableOfContents.svelte';
	import AuthorBio from '$lib/components/blog/AuthorBio.svelte';
	import ShareBar from '$lib/components/blog/ShareBar.svelte';
	import RelatedPosts from '$lib/components/blog/RelatedPosts.svelte';

	let { data }: { data: PageData } = $props();
	const post = $derived(data.post);
</script>

<svelte:head>
	<title>{post.seo.metaTitle} | Blackforge Digital</title>
	<meta name="description" content={post.seo.metaDescription} />
	<meta name="keywords" content={post.seo.focusKeyword} />

	<!-- Open Graph -->
	<meta property="og:title" content={post.seo.metaTitle} />
	<meta property="og:description" content={post.seo.metaDescription} />
	<meta property="og:type" content="article" />
	<meta property="og:image" content={post.seo.ogImage || post.featuredImage} />
	<meta property="article:published_time" content={post.publishedAt} />
	<meta property="article:author" content={post.author.name} />
	<meta property="article:section" content={post.category} />
	{#each post.tags as tag}
		<meta property="article:tag" content={tag} />
	{/each}

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={post.seo.metaTitle} />
	<meta name="twitter:description" content={post.seo.metaDescription} />
	<meta name="twitter:image" content={post.seo.ogImage || post.featuredImage} />
</svelte:head>

<!-- Share Bar -->
<ShareBar title={post.title} />

<!-- Post Hero -->
<Section background="black" padding="lg" grain={true}>
	<Container size="reading">
		<div class="pt-20 pb-12">
			<Breadcrumb category={post.category} title={post.title} />

			<!-- Category -->
			<div class="font-jetbrains text-forge-ember mb-4 text-xs tracking-widest uppercase">
				{post.category}
			</div>

			<!-- Title -->
			<h1 class="font-clash text-forge-white mb-6 text-4xl leading-tight font-bold md:text-5xl">
				{post.title}
			</h1>

			<!-- Meta -->
			<div class="text-forge-ash mb-8 flex items-center gap-4 text-sm">
				<div class="flex items-center gap-3">
					<div
						class="bg-forge-steel text-forge-white font-clash flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold"
					>
						{post.author.name.charAt(0)}
					</div>
					<span class="text-forge-white font-satoshi font-medium">{post.author.name}</span>
				</div>
				<span>·</span>
				<span>{post.publishedAt}</span>
				<span>·</span>
				<span>{post.readTime} min read</span>
			</div>

			<!-- Featured Image -->
			<div class="bg-forge-steel flex aspect-video items-center justify-center">
				<span class="text-forge-ash">Featured Image</span>
			</div>
		</div>
	</Container>
</Section>

<!-- Post Body -->
<Section background="black" padding="lg">
	<div class="container-forge max-w-7xl">
		<div class="flex gap-16">
			<!-- Main Content -->
			<article class="max-w-3xl flex-1">
				<div class="prose prose-lg prose-invert">
					{@html post.htmlContent}
				</div>

				<!-- Author Bio -->
				<div class="mt-16">
					<AuthorBio author={post.author} />
				</div>

				<!-- Related Posts -->
				{#if post.relatedPosts.length > 0}
					<RelatedPosts posts={post.relatedPosts} />
				{/if}
			</article>

			<!-- Table of Contents (Desktop) -->
			{#if post.tableOfContents.length > 0}
				<TableOfContents items={post.tableOfContents} />
			{/if}
		</div>
	</div>
</Section>

<style>
	:global(.prose) {
		@apply text-forge-smoke;
	}

	:global(.prose h2) {
		@apply font-satoshi text-forge-white mt-12 mb-4 text-3xl font-bold;
	}

	:global(.prose h3) {
		@apply font-satoshi text-forge-white mt-8 mb-3 text-2xl font-semibold;
	}

	:global(.prose p) {
		@apply mb-6 leading-relaxed;
	}

	:global(.prose a) {
		@apply text-forge-ember no-underline hover:underline;
	}

	:global(.prose code) {
		@apply font-jetbrains bg-forge-ember/10 text-forge-ember rounded px-2 py-1 text-sm;
	}

	:global(.prose pre) {
		@apply bg-forge-charcoal border-forge-ember my-6 overflow-x-auto border-l-4 p-6;
	}

	:global(.prose pre code) {
		@apply text-forge-smoke bg-transparent px-0 py-0;
	}

	:global(.prose blockquote) {
		@apply border-forge-ember text-forge-ash my-6 border-l-4 pl-6 italic;
	}

	:global(.prose ul) {
		@apply my-6 list-none space-y-2;
	}

	:global(.prose ul li) {
		@apply relative pl-6;
	}

	:global(.prose ul li::before) {
		content: '';
		@apply bg-forge-ember absolute top-2 left-0 h-2 w-2 rounded-full;
	}

	:global(.prose ol) {
		@apply my-6 list-inside list-decimal space-y-2;
	}

	:global(.prose img) {
		@apply border-forge-steel my-8 w-full border;
	}

	:global(.prose strong) {
		@apply text-forge-white font-semibold;
	}

	:global(.prose em) {
		@apply text-forge-ash italic;
	}
</style>
