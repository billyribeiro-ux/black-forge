# 07 — BLOG PAGE

> The SEO engine and authority builder. This page drives organic traffic, demonstrates expertise, and positions Blackforge as thought leaders in web development, app development, and digital strategy.

---

## SECTION 1 — HERO

### Layout
- **Type:** 45vh (compact — get to the content fast)
- **Background:** `--forge-black` with subtle horizontal scan lines at 2% opacity (CRT/terminal aesthetic)
- **Container:** Max-width 1400px, centered

### Content

**Eyebrow:** "INSIGHTS"
**Heading H1:** "The Forge Journal"
- Font: Clash Display 700, 52px, `--forge-white`
- "Journal" in `--forge-ember` — positions blog as curated, not a content dump

**Subheadline:** "Technical deep-dives, strategic playbooks, and hard-won insights from the engineering trenches. No fluff. No listicles. Real knowledge."
- Font: General Sans 400, 17px, `--forge-smoke`, max-width 600px

**Search Bar (margin-top 32px):**
- Width: 480px max
- Style: `--forge-charcoal` background, 1px `--forge-steel` border, padding 14px 20px
- Placeholder: "Search articles..." — General Sans 400, 14px, `--forge-ash`
- Search icon: Right-aligned inside input, `--forge-ash`, 18px
- Focus: Border → `--forge-ember`, subtle glow
- Active search: Live-filter posts below

---

## SECTION 2 — FEATURED POST (Latest/Pinned)

### Layout
- **Background:** `--forge-charcoal`
- **Padding:** 80px 0
- **Container:** Max-width 1400px, centered
- **Structure:** 2-column flex — Image left (55%), Content right (45%)

### Left — Featured Image
- Aspect ratio: 16:9
- Dark-themed hero image/illustration for the post
- Rounded: 0 (sharp edges)
- Hover: Scale 1.02, 600ms ease

### Right — Content Block
- Padding: 0 0 0 48px
- Vertical flex, `justify-center`

**Badge:** "FEATURED" — JetBrains Mono 400, 10px, `--forge-ember`, letterspacing 3px, background `rgba(255, 77, 0, 0.1)`, padding 4px 12px, inline-block

**Category:** "Web Development" — JetBrains Mono 400, 11px, `--forge-ash`, uppercase, margin-top 16px

**Title:** "Why Your Next Website Should Be Built on SvelteKit — Not WordPress"
- Font: Clash Display 600, 32px, `--forge-white`, line-height 1.2
- Margin-top: 12px
- Hover: `--forge-ember` underline slides in from left

**Excerpt:** "WordPress powers 40% of the internet. It also accounts for 90% of hacked CMS sites. Here's why modern frameworks deliver better performance, security, and ROI for serious businesses."
- Font: General Sans 400, 15px, `--forge-smoke`, line-height 1.7, margin-top 16px

**Meta Row (margin-top 20px):**
- Flex row, gap 16px, `align-center`
- Author avatar: 32px circle (grayscale)
- Author name: Satoshi 500, 13px, `--forge-white`
- Separator: " · "
- Date: "Jan 15, 2025" — General Sans 400, 13px, `--forge-ash`
- Separator: " · "
- Read time: "8 min read" — General Sans 400, 13px, `--forge-ash`

**CTA:** "Read Article →" — Satoshi 500, 14px, `--forge-ember`, margin-top 24px

---

## SECTION 3 — CATEGORY FILTER BAR

### Layout
- **Background:** `--forge-black`, sticky top (below nav on scroll)
- **Height:** 56px
- **Container:** Max-width 1400px, centered
- **Padding:** 0 48px

### Content — Horizontal Scroll on Mobile
- Filter pills in a horizontal flex, gap 12px, overflow-x scroll on mobile
- Categories:
  - All | Web Development | App Development | SEO & Growth | Case Studies | Industry Insights | Technical Deep-Dives
- Active: `--forge-ember` background, `--forge-white` text
- Inactive: `--forge-steel` border, `--forge-smoke` text
- Hover: Border → `--forge-ember`
- Font: Satoshi 500, 12px, uppercase, letterspacing 1px

---

## SECTION 4 — POST GRID

### Layout
- **Background:** `--forge-black`
- **Padding:** 60px 0 120px
- **Container:** Max-width 1400px, centered
- **Grid:** 3 columns desktop, 2 tablet, 1 mobile, gap 24px

### Blog Post Card Component

**Card Structure:**
- Background: `--forge-charcoal`
- Overflow: hidden
- Border: 1px `--forge-steel`, hover → `--forge-ember`
- Transition: Border 300ms, transform 300ms
- Hover: `translateY(-4px)`, box-shadow `0 8px 30px rgba(0, 0, 0, 0.3)`

**Image Area:**
- Aspect ratio: 16:9
- Position: top of card
- Dark-themed featured image / abstract illustration
- Hover: Scale 1.04 (inside overflow-hidden)

**Content Area:**
- Padding: 24px

**Category Tag:**
- Font: JetBrains Mono 400, 10px, uppercase, letterspacing 2px, `--forge-ember`
- Margin-bottom: 12px

**Title:**
- Font: Satoshi 600, 18px, `--forge-white`, line-height 1.3
- Max 2 lines, overflow ellipsis
- Hover: Color → `--forge-ember`

**Excerpt:**
- Font: General Sans 400, 13px, `--forge-ash`, line-height 1.6
- Max 3 lines, overflow ellipsis
- Margin-top: 10px

**Footer Row (bottom of card):**
- Flex row, `justify-between`, margin-top 16px, padding-top 16px, border-top 1px `--forge-steel`
- Left: Date — General Sans 400, 12px, `--forge-ash`
- Right: Read time — General Sans 400, 12px, `--forge-ash`

### Sample Posts (9 for initial grid)

| Category | Title | Excerpt | Date | Read Time |
|----------|-------|---------|------|-----------|
| Web Development | "SvelteKit vs. Next.js: A Real-World Comparison" | Framework comparison based on production projects. Performance benchmarks, DX, and when to choose which. | Feb 3, 2025 | 12 min |
| SEO | "Technical SEO Checklist for 2025" | The 47 technical SEO items we audit on every project. Core Web Vitals, schema, crawlability, and more. | Jan 28, 2025 | 15 min |
| App Development | "When to Build Native vs. Cross-Platform" | Cost analysis, performance trade-offs, and the honest answer to the biggest mobile dev question. | Jan 20, 2025 | 10 min |
| Case Study | "How We 3x'd a Law Firm's Leads in 90 Days" | Complete case study: technical SEO, content strategy, and local optimization for Sterling & Associates. | Jan 12, 2025 | 8 min |
| Industry Insights | "The Real Cost of a Slow Website" | Data-backed analysis of how page speed affects revenue. Includes formulas to calculate your own loss. | Jan 5, 2025 | 7 min |
| Technical | "TypeScript Strict Mode: Why We Mandate It" | How strict mode catches bugs before they ship and why every serious project should enforce it. | Dec 28, 2024 | 9 min |
| Web Development | "Headless CMS: The End of WordPress?" | Comparing Sanity, Contentful, and Strapi to WordPress for modern web applications. | Dec 18, 2024 | 11 min |
| SEO | "Local SEO for Connecticut Businesses" | The complete guide to dominating Google Maps and local search in CT markets. | Dec 10, 2024 | 14 min |
| Technical | "GSAP Animations: Performance Best Practices" | How to build smooth, 60fps animations without killing your Lighthouse score. | Dec 1, 2024 | 10 min |

### Pagination
- Below grid, centered
- Style: Horizontal flex of page numbers
- Current page: `--forge-ember` background circle
- Other pages: `--forge-smoke` text, hover → `--forge-white`
- "← Previous" / "Next →" buttons on sides
- Font: Satoshi 500, 14px

---

## SECTION 5 — NEWSLETTER SIGNUP

### Layout
- **Background:** `--forge-charcoal` with ember gradient: `radial-gradient(ellipse at 50% 50%, rgba(255, 77, 0, 0.05) 0%, transparent 60%)`
- **Padding:** 80px 0
- **Container:** Max-width 700px, centered, text-align center

### Content

**Heading H3:** "Get Forge Notes"
- Font: Clash Display 600, 32px, `--forge-white`

**Subtext:** "One email per month. Technical insights, strategy deep-dives, and no spam. Ever."
- Font: General Sans 400, 15px, `--forge-smoke`

**Email Input + Submit:**
- Horizontal flex, max-width 480px, centered
- Input: `--forge-black` background, 1px `--forge-steel` border, padding 14px 20px, flex 1
  - Placeholder: "your@email.com" — General Sans 400, 14px, `--forge-ash`
  - Focus: Border → `--forge-ember`
- Button: "Subscribe" — `--forge-ember` background, `--forge-white` text, Satoshi 600, 13px, uppercase, padding 14px 28px
  - Hover: `--forge-glow` background

**Privacy note:**
- "We respect your inbox. Unsubscribe anytime." — General Sans 400, 11px, `--forge-ash`, margin-top 12px

---

## INDIVIDUAL BLOG POST TEMPLATE

> When a user clicks into a post, here's the layout:

### Post Hero
- **Background:** `--forge-black`
- **Padding:** 140px 0 80px (account for nav)
- **Container:** Max-width 800px, centered (editorial width)

**Breadcrumb:** "Home / Blog / [Category] / [Post Title]"
**Category:** `--forge-ember`, JetBrains Mono 11px
**Title:** Clash Display 700, 44px, `--forge-white`, line-height 1.15
**Meta:** Author + Date + Read Time (same style as cards)
**Featured Image:** Below meta, full-width within 800px container, aspect 16:9

### Post Body
- **Container:** Max-width 720px, centered (reading width)
- **Typography:**
  - Body: General Sans 400, 17px, `--forge-smoke`, line-height 1.9
  - H2: Satoshi 700, 28px, `--forge-white`, margin-top 48px, margin-bottom 16px
  - H3: Satoshi 600, 22px, `--forge-white`, margin-top 36px, margin-bottom 12px
  - Code inline: JetBrains Mono 400, 15px, `--forge-ember`, background `rgba(255, 77, 0, 0.08)`, padding 2px 8px
  - Code block: `--forge-charcoal` background, JetBrains Mono 400, 14px, padding 24px, border-left 3px `--forge-ember`, overflow-x scroll
  - Blockquote: Left border 3px `--forge-ember`, padding-left 24px, General Sans 400, 17px, `--forge-ash` italic
  - Lists: Ember dots (not default browser dots), General Sans 400, 16px
  - Links: `--forge-ember`, underline on hover
  - Images: Full-width within container, subtle `--forge-steel` border

### Sidebar — Table of Contents (Desktop)
- Position: Sticky, right side, outside main content
- Auto-generated from H2/H3 headings
- Font: General Sans 400, 13px, `--forge-ash`
- Active section: `--forge-ember`, bold
- Click: Smooth scroll to heading

### Post Footer
- **Author Bio Card:** `--forge-charcoal` background, flex row
  - Avatar: 64px circle
  - Name, role, short bio
  - Social links

- **Related Posts:** 3-card grid below, same card style as main grid
  - Heading: "Keep Reading"

- **Share Bar:** Fixed left sidebar (desktop) or bottom bar (mobile)
  - Icons: X/Twitter, LinkedIn, Copy Link
  - Icon style: 20px, `--forge-ash`, hover → `--forge-ember`
