<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
		size?: 'default' | 'narrow' | 'reading';
		class?: string;
		children: Snippet;
	}

	let { size = 'default', class: className, children, ...restProps }: ContainerProps = $props();

	const sizeClasses = {
		default: 'container-forge',
		narrow: 'container-forge container-narrow',
		reading: 'container-forge container-reading'
	};

	const classes = $derived(cn(sizeClasses[size], className));
</script>

<div class={classes} {...restProps}>
	{@render children()}
</div>
