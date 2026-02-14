<script lang="ts">
	/**
	 * Author bio card component for blog posts.
	 *
	 * Displays author information with avatar, bio, and social links.
	 */
	import type { BlogAuthor } from '$lib/types/blog';
	import Icon from '@iconify/svelte';

	let { author }: { author: BlogAuthor } = $props();
</script>

<div class="bg-forge-charcoal border-forge-steel border p-8">
	<div class="flex gap-6">
		<!-- Avatar -->
		<div class="shrink-0">
			<div
				class="bg-forge-steel text-forge-white font-clash flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold"
			>
				{author.name.charAt(0)}
			</div>
		</div>

		<!-- Content -->
		<div class="flex-1">
			<div class="font-satoshi text-forge-white mb-1 text-lg font-semibold">
				{author.name}
			</div>
			<div class="text-forge-ember mb-3 text-sm">{author.role}</div>
			<p class="text-forge-smoke mb-4 text-sm leading-relaxed">{author.bio}</p>

			<!-- Social Links -->
			<div class="flex gap-4">
				{#if author.social.twitter}
					<a
						href={author.social.twitter}
						target="_blank"
						rel="noopener noreferrer"
						class="text-forge-ash hover:text-forge-ember transition-colors"
						aria-label="Twitter"
					>
						<Icon icon="ph:x-logo" width="20" />
					</a>
				{/if}
				{#if author.social.linkedin}
					<a
						href={author.social.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						class="text-forge-ash hover:text-forge-ember transition-colors"
						aria-label="LinkedIn"
					>
						<Icon icon="ph:linkedin-logo" width="20" />
					</a>
				{/if}
				{#if author.social.github}
					<a
						href={author.social.github}
						target="_blank"
						rel="noopener noreferrer"
						class="text-forge-ash hover:text-forge-ember transition-colors"
						aria-label="GitHub"
					>
						<Icon icon="ph:github-logo" width="20" />
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
