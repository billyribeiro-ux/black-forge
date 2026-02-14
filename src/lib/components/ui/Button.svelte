<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface ButtonProps {
		variant?: 'primary' | 'secondary' | 'ghost' | 'link';
		size?: 'sm' | 'md' | 'lg';
		class?: string;
		children: Snippet;
		href?: string;
		type?: 'button' | 'submit' | 'reset';
		[key: string]: any;
	}

	let {
		variant = 'primary',
		size = 'md',
		class: className,
		children,
		href,
		type = 'button',
		...restProps
	}: ButtonProps = $props();

	const baseStyles =
		'inline-flex items-center justify-center font-satoshi font-semibold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forge-ember focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

	const variants = {
		primary:
			'bg-forge-ember text-forge-white hover:bg-forge-glow hover:-translate-y-0.5 hover:shadow-ember',
		secondary:
			'border border-forge-steel bg-transparent text-forge-smoke hover:border-forge-ember hover:text-forge-white',
		ghost: 'bg-transparent text-forge-ember hover:bg-forge-ember/10',
		link: 'text-forge-ember hover:text-forge-glow underline-offset-4 hover:underline'
	};

	const sizes = {
		sm: 'px-6 py-2.5 text-xs',
		md: 'px-7 py-3 text-sm',
		lg: 'px-9 py-4 text-base'
	};

	const classes = $derived(cn(baseStyles, variants[variant], sizes[size], className));
</script>

{#if href}
	<a {href} class={classes} {...restProps}>
		{@render children()}
	</a>
{:else}
	<button {type} class={classes} {...restProps}>
		{@render children()}
	</button>
{/if}
