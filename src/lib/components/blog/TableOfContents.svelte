<script lang="ts">
	/**
	 * Table of Contents component for blog posts.
	 *
	 * Sticky sidebar that auto-generates from H2/H3 headings and tracks
	 * active section during scroll.
	 */
	import type { TableOfContentsItem } from '$lib/types/blog';
	import { onMount } from 'svelte';

	let { items }: { items: TableOfContentsItem[] } = $props();

	let activeId = $state<string>('');

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeId = entry.target.id;
					}
				});
			},
			{
				rootMargin: '-80px 0px -80% 0px'
			}
		);

		items.forEach((item) => {
			const element = document.getElementById(item.id);
			if (element) {
				observer.observe(element);
			}
		});

		return () => observer.disconnect();
	});

	function scrollToHeading(id: string): void {
		const element = document.getElementById(id);
		if (element) {
			const offset = 100;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	}
</script>

<aside class="sticky top-32 hidden w-64 shrink-0 lg:block">
	<div class="font-jetbrains text-forge-ash mb-4 text-xs tracking-wider uppercase">
		On This Page
	</div>
	<nav>
		<ul class="space-y-2">
			{#each items as item}
				<li>
					<button
						onclick={() => scrollToHeading(item.id)}
						class="text-left text-sm leading-relaxed transition-colors {activeId === item.id
							? 'text-forge-ember font-semibold'
							: 'text-forge-ash hover:text-forge-white'} {item.level === 3 ? 'pl-4' : ''}"
					>
						{item.text}
					</button>
					{#if item.children}
						<ul class="mt-1 space-y-1">
							{#each item.children as child}
								<li>
									<button
										onclick={() => scrollToHeading(child.id)}
										class="pl-4 text-left text-sm leading-relaxed transition-colors {activeId ===
										child.id
											? 'text-forge-ember font-semibold'
											: 'text-forge-ash hover:text-forge-white'}"
									>
										{child.text}
									</button>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
</aside>
