<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface SectionProps extends HTMLAttributes<HTMLElement> {
		background?: 'black' | 'charcoal' | 'steel';
		padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
		class?: string;
		children: Snippet;
		grain?: boolean;
		grid?: boolean;
	}

	let {
		background = 'black',
		padding = 'lg',
		class: className,
		children,
		grain = false,
		grid = false,
		...restProps
	}: SectionProps = $props();

	const bgClasses = {
		black: 'bg-forge-black',
		charcoal: 'bg-forge-charcoal',
		steel: 'bg-forge-steel'
	};

	const paddingClasses = {
		none: '',
		sm: 'py-12 md:py-16',
		md: 'py-16 md:py-24',
		lg: 'py-20 md:py-32',
		xl: 'py-24 md:py-40'
	};

	const classes = $derived(
		cn(
			'relative w-full',
			bgClasses[background],
			paddingClasses[padding],
			grain && 'grain-texture',
			className
		)
	);
</script>

<section class={classes} {...restProps}>
	{#if grid}
		<div class="grid-pattern pointer-events-none absolute inset-0"></div>
	{/if}
	{@render children()}
</section>
