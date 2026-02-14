# BLACKFORGE DIGITAL — Brand Overview

## Why "Blackforge"

Connecticut's identity is forged in industry — brass, steel, precision manufacturing. Wolcott sits in the heart of that heritage. **Blackforge Digital** channels that legacy: raw materials (ideas, problems, ambitions) enter the forge and emerge as precision-engineered digital products. It's not cute. It's not trendy. It's built to last — just like the work.

---

## Brand Pillars

- **Precision Over Decoration** — Every pixel, every line of code, every strategy serves a purpose.
- **Built to Endure** — 10-year architecture. No throwaway templates. No duct-tape fixes.
- **Engineered Performance** — Speed, SEO, conversion — measured, optimized, relentless.
- **Craft at Scale** — Small-shop attention with enterprise-grade execution.

---

## Visual Identity Direction

### Color Palette

| Token              | Hex       | Usage                                    |
| ------------------ | --------- | ---------------------------------------- |
| `--forge-black`    | `#0A0A0A` | Primary background, text                 |
| `--forge-charcoal` | `#1A1A1A` | Card backgrounds, elevated surfaces      |
| `--forge-steel`    | `#2D2D2D` | Borders, dividers, secondary surfaces    |
| `--forge-ash`      | `#8A8A8A` | Body text on dark, muted labels          |
| `--forge-smoke`    | `#C4C4C4` | Secondary text on dark                   |
| `--forge-white`    | `#F5F5F0` | Primary text on dark, headings           |
| `--forge-ember`    | `#FF4D00` | Primary accent — CTAs, highlights, hover |
| `--forge-glow`     | `#FF6B2B` | Hover state, gradient endpoint           |
| `--forge-heat`     | `#FF8C42` | Tertiary warm accent                     |
| `--forge-blue`     | `#0066FF` | Links, secondary accent, trust signals   |

### Typography

| Role           | Font                            | Weight  | Notes                                  |
| -------------- | ------------------------------- | ------- | -------------------------------------- |
| Display/H1     | **Clash Display**               | 600–700 | Geometric, sharp, high-impact          |
| Headings H2–H4 | **Satoshi**                     | 500–700 | Clean geometric sans, modern authority |
| Body           | **General Sans**                | 400–500 | Highly readable, warm geometric        |
| Code/Mono      | **JetBrains Mono**              | 400     | Technical credibility                  |
| Accent/Nav     | **Space Grotesk** _(sparingly)_ | 500     | Navigation labels, badges              |

> Fonts sourced from Fontshare (free for commercial use) and Google Fonts.

### Design Language

- **Dark-dominant theme** with forge-ember accents creating heat and energy
- **Grain/noise texture overlays** on hero sections — subtle, 3–5% opacity
- **Diagonal slashes** and angled dividers between sections (the forge cut)
- **Ember glow effects** — soft orange radial gradients behind CTAs and key elements
- **Grid-breaking asymmetry** — content that intentionally breaks the grid to create tension
- **Monospaced code snippets** woven into design as texture/decoration
- **Micro-interactions** — GSAP-driven scroll reveals, magnetic buttons, text scramble effects

---

## Tagline Options

1. **"Forged for Performance."** _(primary)_
2. "Where Code Meets Craft."
3. "Precision-Built Digital."
4. "Engineered to Convert."

---

## Tone of Voice

- Direct. No fluff. Every sentence earns its place.
- Confident without arrogance — let the work speak.
- Technical credibility woven naturally into the copy.
- Short paragraphs. Punchy sentences. Strategic long-form when depth is needed.
- Never say "leverage," "synergy," "cutting-edge," or "solutions" without specificity.

---

## Target Audience

- Business owners who've been burned by cheap agencies and template sites
- Professional service firms (law, medical, finance, real estate) needing authority online
- E-commerce operators ready to scale beyond Shopify templates
- SaaS founders needing production-grade web applications
- Local CT businesses wanting to dominate their market digitally

---

## Site Architecture

| #   | Page           | File              |
| --- | -------------- | ----------------- |
| 01  | Home / Landing | `01-HOME.md`      |
| 02  | Services       | `02-SERVICES.md`  |
| 03  | Portfolio      | `03-PORTFOLIO.md` |
| 04  | About          | `04-ABOUT.md`     |
| 05  | Process        | `05-PROCESS.md`   |
| 06  | Pricing        | `06-PRICING.md`   |
| 07  | Blog           | `07-BLOG.md`      |
| 08  | Contact        | `08-CONTACT.md`   |

---

## Tech Stack (The Site Itself)

- **Framework:** SvelteKit 5 with Svelte 5 runes
- **Language:** TypeScript strict mode
- **Animations:** GSAP + ScrollTrigger + SplitText
- **Styling:** Tailwind CSS 4 + custom CSS properties
- **CMS:** Sanity.io or custom headless (for blog/portfolio)
- **Hosting:** Vercel Edge or Cloudflare Pages
- **Analytics:** Plausible (privacy-first)
- **Forms:** Custom serverless endpoints (no third-party form junk)
