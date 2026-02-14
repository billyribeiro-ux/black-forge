<script lang="ts">
	/**
	 * Related posts component for blog posts.
	 *
	 * Displays 3 related posts in a grid below the main article.
	 */
	import type { BlogPostMeta } from '$lib/types/blog';

	let { posts }: { posts: BlogPostMeta[] } = $props();
</script>

<div class="mt-20">
	<h2 class="font-clash text-forge-white mb-8 text-3xl font-semibold">Keep Reading</h2>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
		{#each posts as post}
			<a
				href="/blog/{post.slug}"
				class="bg-forge-charcoal border-forge-steel hover:border-forge-ember group overflow-hidden border transition-all duration-300 hover:-translate-y-1"
			>
				<!-- Image -->
				<div class="bg-forge-steel flex aspect-video items-center justify-center">
					<span class="text-forge-ash text-sm transition-transform group-hover:scale-105">
						Article Image
					</span>
				</div>

				<!-- Content -->
				<div class="p-6">
					<div class="font-jetbrains text-forge-ember mb-3 text-xs tracking-wider uppercase">
						{post.category}
					</div>
					<h3
						class="font-satoshi text-forge-white group-hover:text-forge-ember mb-2 line-clamp-2 text-lg font-semibold transition-colors"
					>
						{post.title}
					</h3>
					<p class="text-forge-ash mb-4 line-clamp-3 text-sm leading-relaxed">
						{post.excerpt}
					</p>
					<div
						class="text-forge-ash border-forge-steel flex items-center justify-between border-t pt-4 text-xs"
					>
						<span>{post.publishedAt}</span>
						<span>{post.readTime} min read</span>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
