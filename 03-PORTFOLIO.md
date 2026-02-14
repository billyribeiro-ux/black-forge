# 03 — PORTFOLIO / WORK PAGE

> Proof over promises. This page is the closer. Visual-heavy, results-driven, and designed to make prospects think "I need this for my business."

---

## SECTION 1 — HERO

### Layout
- **Type:** 50vh, minimal hero — let the work take center stage fast
- **Background:** `--forge-black` with subtle diagonal grid lines at 3% opacity
- **Container:** Max-width 1400px, centered, flex column, `justify-center`

### Content

**Eyebrow:** "PORTFOLIO"
**Heading H1:** "Proof. Not Promises."
- Font: Clash Display 700, 56px, `--forge-white`

**Subheadline:** "Every project below was engineered from scratch. No templates. No page builders. Real code, real results, real businesses transformed."
- Font: General Sans 400, 18px, `--forge-smoke`, max-width 640px

**Filter Bar (margin-top 40px):**
- Horizontal flex, gap 12px
- Pill-style filter buttons:
  - "All" | "Web Development" | "App Development" | "SEO" | "E-Commerce"
- Default active: "All" — `--forge-ember` background, `--forge-white` text
- Inactive: `--forge-steel` border, transparent background, `--forge-smoke` text
- Hover inactive: Border → `--forge-ember`
- Click: Smooth filter transition (items fade/scale out, matching items fade/scale in — GSAP with layout animation)
- Font: Satoshi 500, 13px, uppercase, letterspacing 1px

---

## SECTION 2 — PROJECT GRID

### Layout
- **Background:** `--forge-black`
- **Padding:** 80px 0 120px
- **Container:** Max-width 1400px, centered
- **Grid:** Masonry-style or CSS Grid with varying spans:
  - Row 1: 2 columns (60% / 40%)
  - Row 2: 2 columns (40% / 60%) — reversed
  - Row 3: 3 equal columns
  - Pattern repeats with variation
- **Gap:** 16px

### Project Card Component

**Card Structure:**
- Aspect ratio: Varies (16:10 for wide, 4:3 for square, 3:4 for tall)
- Overflow hidden, border-radius: 0 (sharp edges — the forge aesthetic)
- Position: relative

**Default State:**
- Full project screenshot/mockup fills the card
- Subtle dark overlay gradient at bottom: `linear-gradient(transparent 50%, rgba(10, 10, 10, 0.8) 100%)`
- Bottom-left text overlay:
  - Project name: Satoshi 600, 18px, `--forge-white`
  - Category tag: JetBrains Mono 400, 11px, `--forge-ember`, uppercase

**Hover State (entire card):**
- Image scales to 1.05 (600ms ease-out)
- Overlay darkens to 70% black
- Full info reveals:
  - Project name (larger): Clash Display 600, 28px, `--forge-white`
  - One-line result: General Sans 400, 14px, `--forge-ember` (e.g., "2.3x conversion increase")
  - Tech stack pills: 3-4 inline pills, `--forge-steel` border, JetBrains Mono 11px
  - CTA: "View Case Study →" — Satoshi 500, 14px, `--forge-ember`
- Elements slide up from bottom, staggered 50ms (GSAP)

### Sample Project Cards (8-12 total)

**Card 1 — Wide (60%)**
- Image: E-commerce storefront mockup in browser frame
- Name: "Meridian Home Goods"
- Category: E-Commerce
- Result: "340% increase in page speed. $2.1M monthly revenue."
- Stack: SvelteKit · Shopify Headless · Cloudflare Workers

**Card 2 — Narrow (40%)**
- Image: Mobile app on phone mockup
- Name: "PulseTrack Fitness"
- Category: App Development
- Result: "4.9★ App Store rating. 50k+ downloads month one."
- Stack: React Native · Node.js · PostgreSQL

**Card 3 — Narrow (40%)**
- Image: Dashboard UI screenshot
- Name: "Atlas Financial Dashboard"
- Category: Web Application
- Result: "Sub-100ms render times. 50k data points/second."
- Stack: React · TypeScript · WebSockets · AWS

**Card 4 — Wide (60%)**
- Image: Law firm website
- Name: "Sterling & Associates"
- Category: Web + SEO
- Result: "Page 5 → Position #1 in 90 days. 412% organic traffic growth."
- Stack: SvelteKit · Sanity CMS · Schema Markup

**Card 5 — Equal (33%)**
- Image: Restaurant website
- Name: "Ember Kitchen & Bar"
- Category: Web Development
- Result: "Online reservations up 180%. 0.6s average load time."
- Stack: Astro · Tailwind · Cloudflare

**Card 6 — Equal (33%)**
- Image: Real estate platform
- Name: "Keystone Properties"
- Category: Web Application
- Result: "Custom MLS integration. 3x lead generation increase."
- Stack: Next.js · PostgreSQL · Mapbox

**Card 7 — Equal (33%)**
- Image: Medical practice site
- Name: "Northside Medical Group"
- Category: Web + Local SEO
- Result: "Google Map Pack #1 for 8 specialties. 220% new patient inquiries."
- Stack: SvelteKit · Structured Data · GBP Optimization

**Card 8 — Wide (50/50)**
- Image: SaaS platform
- Name: "FlowState Project Management"
- Category: Web Application
- Result: "Enterprise SaaS with 10k+ active users. 99.99% uptime."
- Stack: SvelteKit · Rust/Axum · PostgreSQL · Redis

### Load More
- Below grid: "Load More Projects" button
- Style: Ghost button, `--forge-steel` border, `--forge-smoke` text
- Loads 4 more cards with fade-in animation

---

## SECTION 3 — CASE STUDY TEMPLATE (When Card is Clicked)

> Each project card links to a full case study page. Here's the template:

### Case Study Hero
- **Background:** Full-width project screenshot/mockup, darkened 60%
- **Overlay content:**
  - Category badge: `--forge-ember` pill
  - Project name: Clash Display 700, 56px, `--forge-white`
  - One-line outcome: General Sans 400, 20px, `--forge-smoke`

### Case Study Body

**Results Bar (sticky or prominent):**
- 3-4 key metrics in horizontal flex
- Example: "2.3x Conversion" | "0.8s Load Time" | "$2.1M Revenue" | "95+ Lighthouse"
- Numbers: Clash Display 600, 36px, `--forge-ember`
- Labels: General Sans 400, 12px, `--forge-ash`

**Section: The Challenge**
- What problem the client had, why they came to us, what had failed before
- 2-3 paragraphs, General Sans 400, 16px, `--forge-smoke`

**Section: Our Approach**
- What we did and why (technical and strategic)
- Can include inline code snippets, architecture diagrams
- Custom SVG diagrams in `--forge-ember` + `--forge-steel` color scheme

**Section: The Build**
- Tech decisions explained
- Before/after screenshots in side-by-side comparison frames
- Performance benchmark comparisons (Lighthouse before vs. after)

**Section: The Results**
- Data-driven results with visual charts (Recharts or D3)
- Timeline of improvements (month-over-month growth)

**Section: Client Testimonial**
- Quoted feedback with attribution
- Same styling as home testimonials

**Next Project CTA:**
- "Next Project: [Name] →"
- Full-width strip at bottom linking to the next case study

---

## SECTION 4 — INDUSTRY EXPERIENCE

### Layout
- **Background:** `--forge-charcoal`
- **Padding:** 100px 0
- **Container:** Max-width 1200px, centered, text-align center

### Content
**Heading H2:** "Industries We've Transformed"
**Subtext:** "Deep experience across verticals means we understand your market, your users, and your competitive landscape."

**Industry Grid:**
- Layout: 4 columns, 2 rows, gap 20px
- Each cell: `--forge-black` background, padding 32px, text-align center
- Icon: Custom SVG, 36px, `--forge-ember`, centered
- Label: Satoshi 500, 15px, `--forge-white`, margin-top 12px
- Hover: Bottom border 2px `--forge-ember` slides in

**Industries:**
| Icon | Label |
|------|-------|
| Scale of justice | Legal & Law Firms |
| Heart pulse | Healthcare & Medical |
| Building | Real Estate |
| Shopping bag | E-Commerce & Retail |
| Chart trending | Financial Services |
| Utensils | Restaurant & Hospitality |
| Graduation cap | Education & EdTech |
| Factory | Manufacturing & Industrial |

---

## SECTION 5 — CTA BANNER

**Same pattern as home:**
**Heading:** "Your Project Could Be Next."
**Sub:** "Let's talk about building something you'll be proud to show off."
**CTA:** "Start Your Project →"
