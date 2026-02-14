# BLACKFORGE DIGITAL — Full Install & Config Reference

## Project Scaffold

```bash
pnpm dlx sv create blackforge-digital
# Select: Skeleton project → TypeScript → Prettier + ESLint
cd blackforge-digital
```

## All Dependencies (single copy-paste block)

```bash
# Tailwind CSS 4 (Vite plugin — no PostCSS config needed in v4)
pnpm add -D tailwindcss @tailwindcss/vite

# GSAP — 100% free since Webflow acquisition, includes ALL plugins
# ScrollTrigger, SplitText, ScrollSmoother, MorphSVG, DrawSVG, Flip, etc.
pnpm add gsap

# Phosphor Icons — native Svelte 5 components, tree-shakeable individual imports
pnpm add -D phosphor-icons-svelte

# Iconify — Svelte 5 runes component + Phosphor + Carbon icon data sets
pnpm add -D @iconify/svelte @iconify-json/ph @iconify-json/carbon
```

> **NOTE: Framer Motion is React-only. Do NOT install it for Svelte/SvelteKit.**
> GSAP + Svelte 5 built-in `transition:` / `animate:` directives fully replace Framer Motion.
> If the declarative `animate={{ x: 100 }}` syntax is specifically needed, use `pnpm add motion-sv` (community Svelte 5 port, early-stage).

---

## Config Files

### vite.config.ts

```ts
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()]
});
```

### src/app.css

```css
@import 'tailwindcss';
```

### src/routes/+layout.svelte

```svelte
<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}
```

### src/lib/gsap.ts (centralized GSAP plugin registration)

```ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Flip } from 'gsap/Flip';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(
	ScrollTrigger,
	SplitText,
	ScrollSmoother,
	Flip,
	DrawSVGPlugin,
	ScrambleTextPlugin,
	MorphSVGPlugin
);

export {
	gsap,
	ScrollTrigger,
	SplitText,
	ScrollSmoother,
	Flip,
	DrawSVGPlugin,
	ScrambleTextPlugin,
	MorphSVGPlugin
};
```

### Icon Usage Examples

**Phosphor Icons (Svelte 5 — individual imports for tree-shaking):**

```svelte
<script lang="ts">
	import IconArrowRightBold from 'phosphor-icons-svelte/IconArrowRightBold.svelte';
	import IconCodeBold from 'phosphor-icons-svelte/IconCodeBold.svelte';
	import IconDevicesBold from 'phosphor-icons-svelte/IconDevicesBold.svelte';
	import IconChartLineUpBold from 'phosphor-icons-svelte/IconChartLineUpBold.svelte';
</script>

<IconArrowRightBold class="h-5 w-5" />
<IconCodeBold class="h-6 w-6 text-[--forge-ember]" />
```

**Iconify (Svelte 5 — supports any icon set via prefix):**

```svelte
<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<!-- Phosphor via Iconify -->
<Icon icon="ph:code-bold" class="h-6 w-6" />
<Icon icon="ph:chart-line-up-bold" class="h-6 w-6" />

<!-- Carbon via Iconify -->
<Icon icon="carbon:analytics" class="h-6 w-6" />
<Icon icon="carbon:deployment-pattern" class="h-6 w-6" />
```

### GSAP Usage in Svelte 5 Components

```svelte
<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger, SplitText } from '$lib/gsap';

	let heroHeading: HTMLElement;

	onMount(() => {
		const split = new SplitText(heroHeading, { type: 'lines,words' });

		gsap.from(split.lines, {
			y: 80,
			opacity: 0,
			duration: 0.8,
			stagger: 0.15,
			ease: 'power3.out'
		});

		// ScrollTrigger example
		gsap.from('.service-card', {
			scrollTrigger: {
				trigger: '.services-grid',
				start: 'top 80%',
				toggleActions: 'play none none none'
			},
			y: 60,
			opacity: 0,
			duration: 0.6,
			stagger: 0.15,
			ease: 'power2.out'
		});

		return () => {
			split.revert();
			ScrollTrigger.getAll().forEach((t) => t.kill());
		};
	});
</script>

<h1 bind:this={heroHeading}>We Engineer Digital Dominance.</h1>
```

---

## Tech Stack Summary

| Layer       | Technology                                               |
| ----------- | -------------------------------------------------------- |
| Framework   | SvelteKit 5 + Svelte 5 runes                             |
| Language    | TypeScript strict mode                                   |
| Styling     | Tailwind CSS 4 (Vite plugin)                             |
| Animations  | GSAP (ScrollTrigger, SplitText, ScrollSmoother, DrawSVG) |
| Icons       | Phosphor Icons Svelte + Iconify (Phosphor + Carbon sets) |
| Package Mgr | pnpm                                                     |
| Patterns    | $state, $derived, $effect, $props, snippets (not slots)  |

---

## Rules for AI Code Generation

- Always use Svelte 5 runes: `$state`, `$derived`, `$effect`, `$props`
- Always use snippets over slots
- Always use TypeScript strict mode
- Always use pnpm as package manager
- Never use Lucide icons — use Phosphor or Carbon via Iconify
- Never use Framer Motion — use GSAP for all animations
- Never use `<slot>` syntax — use `{@render children()}` pattern
- Never use `export let` — use `let { prop } = $props()`
- Never use `$:` reactive statements — use `$derived` or `$effect`
- All components must be production-ready, complete implementations
- Build for 10-year longevity, no shortcuts
