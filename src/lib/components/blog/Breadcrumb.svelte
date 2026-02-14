<script lang="ts">
	/**
	 * Breadcrumb navigation component.
	 *
	 * Displays hierarchical navigation path for blog posts.
	 */
	import Icon from '@iconify/svelte';

	let { category, title }: { category: string; title: string } = $props();
</script>

<nav aria-label="Breadcrumb" class="mb-8">
	<ol class="text-forge-ash flex items-center gap-2 text-sm">
		<li>
			<a href="/" class="hover:text-forge-ember transition-colors">Home</a>
		</li>
		<li>
			<Icon icon="ph:caret-right" width="12" />
		</li>
		<li>
			<a href="/blog" class="hover:text-forge-ember transition-colors">Blog</a>
		</li>
		<li>
			<Icon icon="ph:caret-right" width="12" />
		</li>
		<li>
			<span class="text-forge-ember">{category}</span>
		</li>
		<li>
			<Icon icon="ph:caret-right" width="12" />
		</li>
		<li class="text-forge-smoke max-w-xs truncate">{title}</li>
	</ol>
</nav>
