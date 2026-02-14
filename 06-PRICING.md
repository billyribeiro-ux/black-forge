# 06 — PRICING PAGE

> Radical transparency. Most agencies hide pricing behind "contact us" forms. Blackforge leads with honest ranges to build trust, qualify leads, and eliminate tire-kickers.

---

## SECTION 1 — HERO

### Layout

- **Type:** 55vh
- **Background:** `--forge-black` with noise texture
- **Container:** Max-width 1400px, centered

### Content

**Eyebrow:** "INVESTMENT"
**Heading H1:** "Transparent Pricing. No Surprises."

- Font: Clash Display 700, 56px, `--forge-white`

**Subheadline:** "We don't hide behind 'contact us for a quote.' Here's what quality digital work costs — and why it's worth every dollar."

- Font: General Sans 400, 18px, `--forge-smoke`, max-width 640px

**Trust Statement (below sub, margin-top 24px):**

- Text: "Fixed-price proposals. No hourly billing. No scope creep charges."
- Font: JetBrains Mono 400, 13px, `--forge-ember`, letterspacing 1px
- Icon: Small shield/check icon before text

---

## SECTION 2 — PRICING TIERS

### Layout

- **Background:** `--forge-black`
- **Padding:** 80px 0 120px
- **Container:** Max-width 1200px, centered

### Pricing Cards — 3 Columns

**Layout:** CSS Grid, `grid-template-columns: repeat(3, 1fr)`, gap 2px

- Middle card (recommended) gets a visual elevation

**Card Structure:**

- Background: `--forge-charcoal`
- Padding: 48px 36px
- Border-top: 3px `--forge-steel` (default) / `--forge-ember` (recommended)

**Recommended card only:**

- Badge at top: "MOST POPULAR" — JetBrains Mono 400, 10px, `--forge-black` text, `--forge-ember` background, padding 4px 12px, absolute positioned above card top edge
- Background: `--forge-charcoal` with very subtle ember gradient at top: `linear-gradient(180deg, rgba(255, 77, 0, 0.04) 0%, transparent 30%)`
- Slight visual lift: `box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3)`

---

### TIER 1 — FOUNDATION

**Card Content:**

**Tier Name:** "Foundation"

- Font: Satoshi 600, 14px, uppercase, letterspacing 2px, `--forge-ash`

**Price:** "Starting at $8,000"

- "Starting at" — General Sans 400, 13px, `--forge-ash`
- "$8,000" — Clash Display 700, 44px, `--forge-white`

**Description:**

- "Perfect for local businesses, professional services, and startups that need a fast, beautiful, and SEO-optimized web presence."
- Font: General Sans 400, 14px, `--forge-ash`, line-height 1.7

**Divider:** 1px `--forge-steel`, margin 24px 0

**What's Included:**

- Check icon (small, `--forge-ember`) + text per line
- Up to 8 pages, fully responsive
- Custom design (no templates)
- SvelteKit or Astro framework
- Mobile-first development
- Basic SEO setup & schema markup
- Contact forms & integrations
- Google Analytics 4 setup
- 95+ Lighthouse score guaranteed
- 30-day post-launch support
- Full source code ownership
- Font: General Sans 400, 13px, `--forge-smoke`, line-height 2

**Ideal For:**

- "Local businesses, restaurants, law firms, medical practices"
- Font: JetBrains Mono 400, 11px, `--forge-ash`, italic, margin-top 20px

**CTA:** "Get a Quote →"

- Ghost button style, `--forge-steel` border, full-width

---

### TIER 2 — PROFESSIONAL (Recommended)

**Tier Name:** "Professional"
**Price:** "Starting at $20,000"

**Description:**

- "For growing businesses that need advanced functionality, CMS integration, e-commerce, or custom web applications with real-time features."

**What's Included:**

- Everything in Foundation, plus:
- Up to 20 pages + blog/CMS
- Headless CMS integration (Sanity/Contentful)
- E-commerce functionality (if needed)
- Advanced animations & interactions (GSAP)
- Custom API development
- Advanced SEO (content strategy + technical audit)
- Performance monitoring dashboard
- A/B testing infrastructure
- 3 months post-launch support
- Priority bug fixes (24hr SLA)

**Ideal For:**

- "E-commerce brands, SaaS startups, growing companies, multi-location businesses"

**CTA:** "Get a Quote →"

- Solid `--forge-ember` button, full-width

---

### TIER 3 — ENTERPRISE

**Tier Name:** "Enterprise"
**Price:** "Starting at $40,000"

**Description:**

- "For businesses that need full-stack web applications, native mobile apps, or complex multi-platform digital ecosystems built to institutional standards."

**What's Included:**

- Everything in Professional, plus:
- Full-stack web application development
- Native or cross-platform mobile apps
- Real-time features (WebSockets, live data)
- Database architecture & optimization
- Authentication & role-based access
- Third-party integrations (CRM, ERP, payment)
- Dedicated project manager
- Comprehensive SEO strategy (12-month)
- 6 months post-launch support
- Dedicated Slack channel
- Quarterly strategy reviews

**Ideal For:**

- "SaaS platforms, enterprise portals, apps with 10k+ users, fintech, healthtech"

**CTA:** "Schedule a Call →"

- Ghost button style, full-width

---

## SECTION 3 — ADD-ON SERVICES

### Layout

- **Background:** `--forge-black`, border-top 1px `--forge-steel`
- **Padding:** 100px 0
- **Container:** Max-width 1200px, centered

### Heading

**H2:** "Add-On Services"
**Sub:** "Layer these onto any tier for enhanced results."

### Add-On Grid

**Layout:** 2 columns, gap 16px

**Each Add-On Card:**

- Background: `--forge-charcoal`
- Padding: 28px 32px
- Flex row: Icon + content + price right-aligned
- Border-left: 2px `--forge-steel`, hover → `--forge-ember`

**Card Content:**

- Icon: 24px, `--forge-ember`, SVG
- Title: Satoshi 600, 16px, `--forge-white`
- Description: General Sans 400, 13px, `--forge-ash`, 1 line
- Price: Clash Display 600, 18px, `--forge-ember`, right-aligned

**Add-Ons:**

| Title                  | Description                                             | Price          |
| ---------------------- | ------------------------------------------------------- | -------------- |
| Monthly SEO Retainer   | Ongoing technical SEO, content, and link building       | From $2,000/mo |
| Content Writing        | SEO-optimized blog posts and page copy                  | From $500/post |
| Branding & Identity    | Logo, brand guidelines, visual identity system          | From $3,000    |
| Video Production       | Product videos, testimonials, brand content             | From $2,500    |
| App Store Optimization | ASO strategy, listing optimization, review management   | From $1,500/mo |
| Ongoing Maintenance    | Updates, security, monitoring, priority support         | From $500/mo   |
| UI/UX Audit            | Comprehensive UX review with actionable recommendations | From $2,500    |
| Analytics Setup        | GA4, conversion tracking, custom dashboards             | From $1,500    |

---

## SECTION 4 — PRICING PHILOSOPHY

### Layout

- **Background:** `--forge-charcoal`
- **Padding:** 100px 0
- **Container:** Max-width 900px, centered

### Heading

**H2:** "Why We Charge What We Charge."

### Content — 2-Column Text Block

**Left Column (60%):**
_3 short paragraphs explaining the pricing rationale:_

"Custom development costs more than a Squarespace template. That's because a Squarespace template doesn't generate revenue — it just exists. Our builds are engineered to pay for themselves through increased traffic, higher conversions, and lower maintenance costs."

"The average Blackforge client sees a 2.3x return on their investment within the first year. That's not marketing — that's math."

"We use fixed pricing because hourly billing incentivizes inefficiency. When you know the total cost upfront, you can plan, budget, and evaluate ROI with confidence."

**Right Column (40%) — ROI Calculator Concept:**

- Simple interactive calculator:
  - Input: "Current monthly revenue from website: $\_\_\_\_"
  - Input: "Current conversion rate: \_\_\_\_%"
  - Output: "With a 2x conversion improvement, your additional annual revenue: $\_\_\_\_"
- Dark card, `--forge-charcoal` background, `--forge-ember` accent on inputs
- Note: JetBrains Mono 400, 10px, `--forge-ash` — "\* Based on average client performance data"

---

## SECTION 5 — COMPARISON: BLACKFORGE vs. ALTERNATIVES

### Layout

- **Background:** `--forge-black`
- **Padding:** 80px 0
- **Container:** Max-width 1000px, centered

### Heading

**H2:** "The Real Cost of Cheap"

### Comparison Table

|              | DIY / Template      | Cheap Agency           | Blackforge              |
| ------------ | ------------------- | ---------------------- | ----------------------- |
| Cost         | $0 – $500           | $2,000 – $8,000        | $8,000 – $50,000+       |
| Performance  | Slow (3-5s load)    | Mediocre (2-3s)        | Blazing (<1s)           |
| SEO          | Basic / None        | Plugin-dependent       | Built into architecture |
| Mobile       | Responsive (barely) | Responsive             | Mobile-first engineered |
| Ownership    | Platform lock-in    | Maybe                  | Full code ownership     |
| Scalability  | Breaks under growth | Needs rebuild in 2 yrs | Built for 10 years      |
| Support      | Forum / chatbot     | Outsourced             | Dedicated senior team   |
| ROI (Year 1) | Minimal             | Low                    | 2-3x average            |

**Table Style:**

- Blackforge column: `--forge-ember` header, slight ember glow
- Other columns: `--forge-steel` header
- Winning cells in Blackforge column: Text in `--forge-ember` to draw the eye
- Row styling: Alternating `--forge-charcoal` / `--forge-black`

---

## SECTION 6 — CTA BANNER

**Heading:** "Let's Talk Numbers."
**Sub:** "Every project gets a detailed, fixed-price proposal. No commitment required — just a real conversation about what you need and what it costs."
**CTA:** "Request a Proposal →"
