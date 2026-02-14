# 02 — SERVICES PAGE

> Deep dive into every capability. This page converts researchers into leads by demonstrating technical depth and real expertise — not generic agency talk.

---

## SECTION 1 — HERO

### Layout
- **Type:** 60vh height (shorter hero — this isn't a landing page, it's a reference page)
- **Background:** `--forge-black` with the same grain texture + grid pattern as home hero
- Diagonal ember gradient in top-right corner: `radial-gradient(ellipse at 90% 10%, rgba(255, 77, 0, 0.06) 0%, transparent 50%)`
- **Container:** Max-width 1400px, centered, flex column, `justify-center`, `align-start`
- **Padding:** 0 48px

### Content

**Breadcrumb:**
- Text: "Home / Services"
- Font: JetBrains Mono 400, 12px, `--forge-ash`, letterspacing 2px
- "Home" is a link — hover `--forge-ember`

**Heading H1:**
- Text: "Everything You Need. Nothing You Don't."
- Font: Clash Display 700, 56px desktop / 36px mobile, `--forge-white`
- Max-width: 800px

**Subheadline:**
- Text: "Three core disciplines executed at the highest level. We don't offer 47 services — we master three and deliver them better than anyone."
- Font: General Sans 400, 18px, `--forge-smoke`, line-height 1.7, max-width 620px
- Margin-top: 24px

**Anchor Nav (Jump Links):**
- Layout: Horizontal flex, gap 16px, margin-top 40px
- 3 pill-style buttons that scroll to their respective sections:
  1. "01 — Web Development"
  2. "02 — App Development"
  3. "03 — SEO & Growth"
- Style: Border 1px `--forge-steel`, padding 10px 24px, General Sans 500, 13px, `--forge-smoke`, uppercase, letterspacing 1px
- Hover: Border → `--forge-ember`, text → `--forge-white`
- Active (when scrolled to that section): Background `--forge-ember`, text `--forge-white`

### Animation
- Breadcrumb: Instant
- H1: GSAP SplitText word reveal, 700ms, stagger 40ms
- Sub + anchor nav: Fade up, stagger 200ms

---

## SECTION 2 — WEB DEVELOPMENT (Deep Dive)

### Layout
- **Background:** `--forge-black`, top border: 1px `--forge-steel`
- **Padding:** 120px 0
- **Container:** Max-width 1400px, centered
- **ID:** `#web-development` (anchor target)

### Sub-Section A — Intro Block

**Structure:** 2-column flex — Left text (55%), Right decorative (45%)

**Left Column:**

**Section Number:**
- Text: "01"
- Font: Clash Display 700, 96px, `--forge-ember`, opacity 15% — large watermark positioned behind the heading
- Position: Absolute, left -20px, top -30px (bleeds slightly)

**Eyebrow:** "SERVICE"
**Heading H2:** "Web Development"
- Font: Clash Display 600, 48px, `--forge-white`

**Lead Paragraph:**
- Text: "We build websites and web applications that load in under 1 second, score 95+ on every Lighthouse metric, and convert visitors at 2-3x industry average. Every project is hand-coded on modern frameworks — never WordPress, never templates, never compromise."
- Font: General Sans 400, 17px, `--forge-smoke`, line-height 1.8

**Secondary Paragraph:**
- Text: "From marketing sites to full-stack SaaS platforms, our engineering team delivers production-grade code that your future developers will thank you for."

**Right Column — Tech Stack Visual:**
- A visually striking arrangement of tech logos/icons in a loose grid:
  - SvelteKit, React, Next.js, TypeScript, Tailwind, Node.js, PostgreSQL, Redis, Vercel, AWS
  - Each logo: 40px, monochrome `--forge-ash` at 30% opacity
  - On hover: Individual logo pops to full color + `--forge-ember` glow behind it
  - Subtle floating animation — each logo bobs independently at different speeds (GSAP)
- Background: Faint connection lines between logos (like a constellation) in `--forge-steel` at 10% opacity

### Sub-Section B — What We Build (Capability Cards)

**Layout:** Grid, 2 columns, gap 2px, margin-top 80px

**6 Capability Cards, each:**
- Background: `--forge-charcoal`
- Padding: 40px 36px
- Border-left: 3px transparent → transitions to `--forge-ember` on hover
- Hover: Subtle background lighten to `#1E1E1E`

**Card Content:**
1. **Icon:** Custom SVG, 32px, stroke `--forge-ember`
2. **Title:** Satoshi 600, 20px, `--forge-white`, margin-top 16px
3. **Description:** General Sans 400, 14px, `--forge-ash`, line-height 1.7, margin-top 10px

**Cards:**

| Icon | Title | Description |
|------|-------|-------------|
| Browser window | Marketing & Corporate Sites | High-performance marketing sites built for conversion. SEO-optimized architecture, blazing speed, pixel-perfect design. |
| Shopping cart | E-Commerce Platforms | Custom storefronts on Shopify Headless, Saleor, or fully custom. Product pages that sell, checkout flows that convert. |
| App window | Web Applications (SaaS) | Full-stack applications with real-time features, authentication, databases, and APIs. Built for scale from day one. |
| Layout grid | Landing Pages & Funnels | Conversion-optimized landing pages with A/B testing infrastructure, analytics, and performance tracking baked in. |
| Refresh arrows | Migrations & Rebuilds | Migrating off WordPress, Wix, or legacy platforms? We handle the transition without losing your SEO equity. |
| Puzzle piece | API & Integration Development | Custom APIs, third-party integrations, payment processing, CRM connections — the plumbing that makes everything work. |

### Sub-Section C — Our Stack

**Layout:** Full-width strip, `--forge-black` with top/bottom 1px `--forge-steel` borders
**Padding:** 60px 48px

**Heading:** "Our Web Stack" — Satoshi 600, 20px, `--forge-white`

**Stack Table:** Horizontal flex with category groupings

| Category    | Technologies                                                       |
|-------------|---------------------------------------------------------------------|
| Frameworks  | SvelteKit 5 · React / Next.js · Astro · Nuxt                      |
| Languages   | TypeScript (strict) · JavaScript · Rust · Python                    |
| Styling     | Tailwind CSS · CSS Modules · GSAP · Framer Motion                  |
| Backend     | Node.js · Rust/Axum · PostgreSQL · Redis · Supabase               |
| Deployment  | Vercel · Cloudflare · AWS · Docker                                  |
| CMS         | Sanity · Contentful · Strapi · Custom Headless                      |

- Category label: JetBrains Mono 400, 11px, uppercase, `--forge-ember`, letterspacing 2px
- Tech items: General Sans 400, 14px, `--forge-smoke`, separated by " · " with 1px dot separators

### Sub-Section D — Results Banner

**Layout:** 3-column flex, equal width, separated by 1px `--forge-steel` vertical dividers
**Background:** `--forge-charcoal`
**Padding:** 48px

**Each stat:**
- Number: Clash Display 700, 48px, `--forge-ember` — CountUp animation on scroll
- Label: General Sans 400, 13px, `--forge-ash`, uppercase, letterspacing 2px

| Number | Label |
|--------|-------|
| <1s    | Average Load Time |
| 95+    | Lighthouse Score (Guaranteed) |
| 2.3x   | Average Conversion Lift |

### Animation
- Entire section: Staggered reveal on scroll (header first, then cards row by row)
- Tech logos: Float in with random delays
- Stats: CountUp when visible

---

## SECTION 3 — APP DEVELOPMENT (Deep Dive)

### Layout
- **Same structural pattern as Section 2** but with visual variation:
- **Background:** `--forge-charcoal` (alternates from web dev section)
- **ID:** `#app-development`

### Sub-Section A — Intro Block

**Section Number:** "02" (same watermark treatment)
**Heading H2:** "App Development"
**Lead Paragraph:** "Native performance. Cross-platform efficiency. We build mobile applications that users love, investors notice, and competitors study. From concept to App Store — fully managed, fully owned."
**Secondary Paragraph:** "Whether you're launching an MVP to validate a market or scaling a product to millions of users, our engineering team builds apps that are fast, reliable, and built to evolve."

**Right Column — Device Mockup:**
- iPhone and Android device frames side by side, slightly overlapping, angled 5° and -5°
- Showing placeholder app screens with `--forge-charcoal` backgrounds and `--forge-ember` accent UI elements
- Subtle shadow: `0 20px 60px rgba(0, 0, 0, 0.5)`
- Parallax: Slight vertical offset on scroll (GSAP)

### Sub-Section B — Capability Cards (Same 2×3 grid)

| Icon | Title | Description |
|------|-------|-------------|
| Apple logo | iOS Development | Native Swift applications optimized for the Apple ecosystem. Clean architecture, smooth animations, Apple HIG compliance. |
| Android icon | Android Development | Kotlin-first Android apps built for the fragmented device landscape. Material Design 3, offline support, deep linking. |
| Devices overlap | Cross-Platform | React Native and Flutter applications that share 90%+ code across platforms without sacrificing native feel. |
| Rocket | MVP Development | Validate your idea in 8-12 weeks with a production-quality MVP. Architected to scale — not throwaway prototypes. |
| Server stack | Backend & APIs | Scalable backend infrastructure purpose-built for your app. Real-time data, push notifications, authentication, payments. |
| Refresh sync | App Modernization | Legacy app running on outdated tech? We rebuild with modern architecture while preserving your user base. |

### Sub-Section C — Stack
| Category    | Technologies                                          |
|-------------|-------------------------------------------------------|
| iOS         | Swift · SwiftUI · UIKit · Core Data                   |
| Android     | Kotlin · Jetpack Compose · Room · Retrofit            |
| Cross-Plat  | React Native · Flutter · Expo                          |
| Backend     | Node.js · Rust · GraphQL · REST · WebSockets          |
| Database    | PostgreSQL · MongoDB · Firebase · Supabase             |
| DevOps      | CI/CD · TestFlight · Google Play Console · Fastlane   |

### Sub-Section D — Results Banner

| Number | Label |
|--------|-------|
| 4.8★   | Average App Store Rating |
| 60%    | Faster Time-to-Market vs. Traditional |
| 99.9%  | Uptime SLA |

---

## SECTION 4 — SEO & GROWTH (Deep Dive)

### Layout
- **Background:** Back to `--forge-black`
- **ID:** `#seo-growth`

### Sub-Section A — Intro Block

**Section Number:** "03"
**Heading H2:** "SEO & Growth"
**Lead Paragraph:** "Search is the highest-intent traffic on the internet. We build search strategies that compound month over month — technical SEO, content engines, and local dominance that turns Google into your best salesperson."
**Secondary Paragraph:** "No black hat tactics. No keyword stuffing. No vanity metrics. Just measurable organic growth backed by data, strategy, and relentless execution."

**Right Column — Data Visualization:**
- Animated line chart showing organic traffic growth curve
- Dark background, `--forge-ember` line, `--forge-steel` grid lines
- Data points glow on hover
- Chart draws in from left to right on scroll (GSAP path animation)

### Sub-Section B — Capability Cards

| Icon | Title | Description |
|------|-------|-------------|
| Code brackets | Technical SEO | Site architecture, Core Web Vitals, structured data, crawl optimization. We fix what's broken and build what's missing. |
| Document/pen | Content Strategy | Keyword research, topic clusters, editorial calendars, and content production that ranks and converts. |
| Map pin | Local SEO | Google Business Profile optimization, local citations, review management, and map pack domination for CT businesses. |
| Link chain | Link Building & PR | White-hat link acquisition through digital PR, guest placement, and authority building. Quality over quantity, always. |
| Chart bars | Analytics & Reporting | Custom dashboards, conversion tracking, attribution modeling. You'll know exactly what's working and what's not. |
| Target | Conversion Optimization | Traffic means nothing without conversions. A/B testing, UX analysis, and funnel optimization to maximize every visitor. |

### Sub-Section C — Stack
| Category    | Technologies                                            |
|-------------|----------------------------------------------------------|
| Analytics   | Google Analytics 4 · Search Console · Plausible           |
| Research    | Ahrefs · SEMrush · Screaming Frog · Surfer SEO            |
| Technical   | Schema.org · Core Web Vitals · XML Sitemaps · hreflang    |
| Content     | Clearscope · MarketMuse · Custom Topic Clustering Tools    |
| Local       | Google Business · BrightLocal · Yext · Whitespark          |
| Reporting   | Looker Studio · Custom Dashboards · Automated Alerts       |

### Sub-Section D — Results Banner

| Number | Label |
|--------|-------|
| 312%   | Average Organic Traffic Increase (12 mo.) |
| #1     | Local Pack Position (CT Clients) |
| 4.2x   | Average ROI on SEO Investment |

---

## SECTION 5 — SERVICE COMPARISON TABLE

### Layout
- **Background:** `--forge-charcoal`
- **Padding:** 100px 0
- **Container:** Max-width 1000px, centered

### Heading
**H2:** "What You Get vs. What They Offer"
**Subtext:** "A transparent look at how Blackforge compares to the typical agency."

### Comparison Table

**Table Style:**
- Full-width, clean lines
- Header row: `--forge-ember` background, `--forge-black` text, Satoshi 600, 13px, uppercase
- Row alt: `--forge-charcoal` / `--forge-black` alternating
- Cell text: General Sans 400, 14px, `--forge-smoke`
- Check marks: `--forge-ember` ✓
- X marks: `--forge-ash` at 30% opacity ✗

| Feature | Blackforge | Typical Agency |
|---------|-----------|----------------|
| Custom Code (No Templates) | ✓ | ✗ |
| 95+ Lighthouse Guaranteed | ✓ | ✗ |
| TypeScript Strict Mode | ✓ | ✗ |
| Mobile-First Architecture | ✓ | Sometimes |
| Dedicated Senior Engineer | ✓ | Junior Devs |
| SEO Built Into Architecture | ✓ | Afterthought |
| Source Code Ownership | ✓ Full | ✗ Locked In |
| Post-Launch Support | ✓ Included | $ Extra |
| Performance Monitoring | ✓ Proactive | ✗ Reactive |
| Transparent Pricing | ✓ Always | ✗ Hidden Fees |

### Animation
- Table rows slide in from left, staggered 50ms apart on scroll

---

## SECTION 6 — CTA (Same Pattern as Home)

**Heading H2:** "Let's Scope Your Project."
**Subtext:** "Every project starts with a free strategy call. We'll map out your goals, recommend the right approach, and give you an honest timeline and budget."
**CTA:** "Book a Strategy Call →"

---

## STICKY SIDE NAVIGATION (Desktop Only)

- Position: Fixed, left edge, vertically centered
- Small vertical line with 3 dots representing the 3 service sections
- Active dot: `--forge-ember` (based on scroll position)
- Labels appear on hover: "Web Dev" / "App Dev" / "SEO"
- Font: JetBrains Mono 400, 10px, `--forge-smoke`
- Transitions between active states smoothly as user scrolls
