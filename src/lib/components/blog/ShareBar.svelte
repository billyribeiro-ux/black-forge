<script lang="ts">
	/**
	 * Share bar component for blog posts.
	 *
	 * Fixed sidebar (desktop) or bottom bar (mobile) with social sharing options.
	 */
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';

	let { title }: { title: string } = $props();

	let copied = $state(false);

	const currentUrl = $derived($page.url.href);
	const encodedTitle = $derived(encodeURIComponent(title));
	const encodedUrl = $derived(encodeURIComponent(currentUrl));

	const twitterUrl = $derived(
		`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
	);
	const linkedinUrl = $derived(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`);

	async function copyLink(): Promise<void> {
		try {
			await navigator.clipboard.writeText(currentUrl);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}
</script>

<!-- Desktop: Fixed left sidebar -->
<div
	class="fixed top-1/2 left-8 z-10 hidden -translate-y-1/2 flex-col gap-4 lg:flex"
	aria-label="Share this article"
>
	<a
		href={twitterUrl}
		target="_blank"
		rel="noopener noreferrer"
		class="text-forge-ash hover:text-forge-ember transition-colors"
		aria-label="Share on Twitter"
	>
		<Icon icon="ph:x-logo" width="20" />
	</a>
	<a
		href={linkedinUrl}
		target="_blank"
		rel="noopener noreferrer"
		class="text-forge-ash hover:text-forge-ember transition-colors"
		aria-label="Share on LinkedIn"
	>
		<Icon icon="ph:linkedin-logo" width="20" />
	</a>
	<button
		onclick={copyLink}
		class="text-forge-ash hover:text-forge-ember relative transition-colors"
		aria-label="Copy link"
	>
		<Icon icon={copied ? 'ph:check' : 'ph:link'} width="20" />
		{#if copied}
			<span class="text-forge-ember font-satoshi absolute left-full ml-2 text-xs whitespace-nowrap">
				Copied!
			</span>
		{/if}
	</button>
</div>

<!-- Mobile: Bottom bar -->
<div
	class="bg-forge-charcoal border-forge-steel fixed right-0 bottom-0 left-0 z-10 border-t py-4 lg:hidden"
>
	<div class="container-forge flex justify-center gap-8">
		<a
			href={twitterUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="text-forge-ash hover:text-forge-ember transition-colors"
			aria-label="Share on Twitter"
		>
			<Icon icon="ph:x-logo" width="24" />
		</a>
		<a
			href={linkedinUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="text-forge-ash hover:text-forge-ember transition-colors"
			aria-label="Share on LinkedIn"
		>
			<Icon icon="ph:linkedin-logo" width="24" />
		</a>
		<button
			onclick={copyLink}
			class="text-forge-ash hover:text-forge-ember transition-colors"
			aria-label="Copy link"
		>
			<Icon icon={copied ? 'ph:check' : 'ph:link'} width="24" />
		</button>
	</div>
</div>
