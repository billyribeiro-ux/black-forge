<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface EyebrowProps extends HTMLAttributes<HTMLDivElement> {
		class?: string;
		children: Snippet;
		withLine?: boolean;
	}

	let { class: className, children, withLine = false, ...restProps }: EyebrowProps = $props();

	const classes = $derived(
		cn(
			'font-jetbrains text-xs uppercase tracking-[0.25em] text-forge-ember',
			withLine && 'flex items-center gap-3',
			className
		)
	);
</script>

<div class={classes} {...restProps}>
	{#if withLine}
		<span class="h-px w-10 bg-forge-ember"></span>
	{/if}
	{@render children()}
</div>
