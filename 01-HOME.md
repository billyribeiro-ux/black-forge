# 01 — HOME / LANDING PAGE

> The front door. First impression. This page has one job: make them feel like they just found the agency they've been looking for — and make them scroll.

---

## NAVIGATION BAR

### Layout
- **Type:** Fixed top, full-width, transparent on load → solid `--forge-black` with backdrop-blur on scroll
- **Height:** 72px desktop / 64px mobile
- **Container:** Max-width 1400px, centered, horizontal flex, `justify-between`, `align-center`
- **Padding:** 0 48px desktop / 0 20px mobile

### Left Side
- **Logo:** "BLACKFORGE" wordmark in Clash Display 700, `--forge-white`, 20px. The "O" in FORGE is replaced with a subtle anvil icon or ember spark SVG. On hover, the ember icon glows with a soft `--forge-ember` box-shadow pulse.
- Below the wordmark: "DIGITAL" letterspaced 6px, General Sans 500, 10px, `--forge-ash`, uppercase

### Right Side — Desktop
- **Nav Links:** Horizontal flex, gap 36px
- Items: Services | Work | About | Process | Blog
- Font: Satoshi 500, 14px, uppercase, letterspacing 2px, `--forge-smoke`
- Hover: Color transitions to `--forge-ember`, 200ms ease. Underline slides in from left (pseudo-element, `scaleX(0)` → `scaleX(1)`, transform-origin left)
- **CTA Button:** "Start a Project"
  - Background: `--forge-ember`
  - Text: `--forge-white`, Satoshi 600, 13px, uppercase, letterspacing 1.5px
  - Padding: 12px 28px
  - Border-radius: 0px (sharp, intentional — forged, not rounded)
  - Hover: Background shifts to `--forge-glow`, subtle `translateY(-1px)`, box-shadow `0 4px 20px rgba(255, 77, 0, 0.3)`
  - Micro-interaction: Magnetic button effect (GSAP — button follows cursor slightly within a 20px radius on hover)

### Right Side — Mobile
- **Hamburger:** Custom 3-line icon, `--forge-white`, lines are 24px wide, 2px thick, 6px gap
- Open animation: Top line rotates 45°, middle fades out, bottom rotates -45° — GSAP 300ms
- **Mobile Menu:** Full-screen overlay, `--forge-black` background, centered vertical nav links, Clash Display 600, 32px each, stagger-in from bottom (GSAP, 80ms delay each)

---

## SECTION 1 — HERO

### Layout
- **Type:** Full viewport height (`100vh`), relative positioned
- **Background:** `--forge-black` base with layered effects:
  1. Subtle noise/grain texture overlay at 4% opacity (CSS `background-image` with tiny noise PNG tiled)
  2. Large radial gradient in bottom-right: `radial-gradient(ellipse at 80% 90%, rgba(255, 77, 0, 0.08) 0%, transparent 60%)` — the distant ember glow
  3. Faint grid pattern overlay: thin `--forge-steel` lines forming a 60px grid at 5% opacity — engineering blueprint feel
- **Container:** Max-width 1400px, centered, flex column, `justify-center`, `align-start`
- **Padding:** 0 48px, with content vertically centered but offset 10% from true center (slightly above midpoint for visual weight)

### Content — Left-Aligned Block (max-width 900px)

**Eyebrow Tag:**
- Text: "WEB DEVELOPMENT × APP DEVELOPMENT × SEO"
- Font: JetBrains Mono 400, 12px, uppercase, letterspacing 3px, `--forge-ember`
- Decoration: Small ember dot (●) before text, pulsing glow animation (opacity 0.5 → 1, 2s infinite)
- Animation: Fade in + slide up 20px, 600ms ease-out, 200ms delay after page load

**Headline H1:**
- Text Line 1: "We Don't Build Websites."
- Text Line 2: "We Engineer"
- Text Line 3: "Digital Dominance."
- Font: Clash Display 700, 72px desktop / 42px tablet / 32px mobile
- Color: `--forge-white` for lines 1 and 3
- Line 2 special treatment: "We Engineer" — "Engineer" gets a `--forge-ember` color with a subtle text-shadow glow: `0 0 40px rgba(255, 77, 0, 0.3)`
- Line-height: 1.05
- Animation: GSAP SplitText — each line clips in from bottom with `overflow: hidden` wrapper, staggered 150ms, 800ms duration, `power3.out` ease

**Subheadline:**
- Text: "Custom-built web applications, native apps, and search strategies that turn Connecticut businesses into market leaders. No templates. No shortcuts. No compromises."
- Font: General Sans 400, 18px desktop / 16px mobile, `--forge-smoke`
- Max-width: 620px
- Line-height: 1.7
- Margin-top: 28px
- Animation: Fade in + slide up 15px, 700ms, 400ms delay after headline completes

**CTA Row:**
- Layout: Horizontal flex, gap 20px, margin-top 40px
- **Primary CTA:** "See Our Work →"
  - Same button style as nav CTA but larger: padding 16px 36px, font 15px
  - The arrow (→) animates right 4px on hover, GSAP
- **Secondary CTA:** "Our Process"
  - Border: 1px solid `--forge-steel`
  - Background: transparent
  - Text: `--forge-smoke`, same font specs
  - Hover: Border color transitions to `--forge-ember`, text to `--forge-white`
- Animation: Both buttons fade in + slide up, staggered, after subheadline

**Stats Row:**
- Layout: Horizontal flex, gap 48px, margin-top 64px
- Divider: 1px vertical line `--forge-steel` between each stat
- Items (3 total):
  1. **"150+"** — Projects Delivered
  2. **"10+"** — Years of Engineering
  3. **"97%"** — Client Retention
- Number: Clash Display 600, 36px, `--forge-ember`
- Label: General Sans 400, 13px, uppercase, letterspacing 2px, `--forge-ash`
- Animation: Numbers count up from 0 (GSAP CountUp) when section enters viewport. Labels fade in simultaneously.

### Right Side — Decorative Element (Desktop Only)

- **Floating code block:** A decorative, semi-transparent code snippet positioned absolute, right 5%, top 35%
- Shows a blurred/partially visible SvelteKit component snippet in JetBrains Mono 13px, `--forge-ash` at 15% opacity
- Rotated slightly (-3deg) for dynamic feel
- Parallax: Moves at 0.3x scroll speed (GSAP ScrollTrigger)
- Purpose: Subliminally communicates "we write real code" without being literal

### Scroll Indicator
- Position: Absolute bottom center, 32px from bottom
- Design: Small vertical line (20px tall, 1px, `--forge-ash`) with a small circle (4px) that animates down the line and loops
- Text below: "Scroll" in General Sans 400, 10px, uppercase, letterspacing 3px, `--forge-ash`
- Animation: Fades out as user begins scrolling (GSAP ScrollTrigger, scrub)

---

## SECTION 2 — SOCIAL PROOF / TRUST BAR

### Layout
- **Type:** Horizontal strip, full-width
- **Background:** `--forge-charcoal` with subtle top/bottom border: 1px `--forge-steel`
- **Height:** ~100px
- **Container:** Max-width 1400px, centered
- **Content:** Flex row, `justify-between`, `align-center`, gap 60px

### Content
- **Left label:** "Trusted by businesses across Connecticut and beyond"
  - Font: General Sans 400, 13px, `--forge-ash`, uppercase, letterspacing 2px
- **Client logos:** 5–7 grayscale logo marks of past/current clients
  - Opacity: 40% default → 70% on hover
  - Filter: grayscale(100%) brightness(0.7) — keeps them muted
  - Hover: Transition to full color, 300ms
- If no real logos yet: Use industry category icons (Medical, Legal, E-commerce, Real Estate, Finance) with labels below each in JetBrains Mono 10px

### Animation
- Logos slide in from right as a continuous marquee (CSS `@keyframes` infinite scroll) — slow, 40s duration
- Pauses on hover over the strip

---

## SECTION 3 — SERVICES OVERVIEW

### Layout
- **Background:** `--forge-black`
- **Padding:** 120px 0 (generous vertical breathing room)
- **Container:** Max-width 1400px, centered, padding 0 48px

### Section Header — Left-Aligned

**Eyebrow:**
- Text: "WHAT WE BUILD"
- Font: JetBrains Mono 400, 12px, uppercase, letterspacing 4px, `--forge-ember`
- Decoration: Horizontal line (40px, 1px, `--forge-ember`) before text

**Heading H2:**
- Text: "Three Disciplines. One Obsession."
- Font: Clash Display 600, 48px desktop / 32px mobile, `--forge-white`
- Max-width: 700px
- Margin-top: 16px

**Subtext:**
- Text: "Every project starts with strategy and ends with measurable results. We don't do one-offs — we build digital ecosystems."
- Font: General Sans 400, 17px, `--forge-smoke`, line-height 1.7
- Max-width: 600px
- Margin-top: 20px

### Services Grid — 3 Columns

**Layout:** CSS Grid, `grid-template-columns: repeat(3, 1fr)`, gap 0
- On tablet: 1 column stack
- Each card fills its column with no gap (cards separated by `--forge-steel` 1px vertical borders)

**Each Service Card:**
- Padding: 48px 40px
- Background: transparent (inherits `--forge-black`)
- Border-right: 1px solid `--forge-steel` (except last card)
- Hover: Background transitions to `--forge-charcoal`, entire card, 400ms ease

**Card Content (per card):**

1. **Icon Area:**
   - Custom SVG icon, 48px, stroke-only, `--forge-ember`
   - Card 1: Monitor/browser wireframe icon (web dev)
   - Card 2: Phone/app icon with code brackets (app dev)
   - Card 3: Chart-trending-up with magnifying glass (SEO)
   - Hover: Icon stroke animates (GSAP drawSVG effect — lines draw in)

2. **Service Title:**
   - Font: Satoshi 700, 24px, `--forge-white`
   - Margin-top: 28px

3. **Service Description:**
   - Font: General Sans 400, 15px, `--forge-ash`, line-height 1.7
   - Margin-top: 16px
   - 2–3 sentences max

4. **Capability List:**
   - Margin-top: 24px
   - Each item: Horizontal flex, gap 12px
     - Ember dot (6px circle, `--forge-ember`) + text
     - Font: General Sans 400, 14px, `--forge-smoke`
     - Margin-bottom: 10px per item

5. **Card CTA:**
   - Text: "Explore [Service Name] →"
   - Font: Satoshi 500, 14px, `--forge-ember`, uppercase, letterspacing 1px
   - Margin-top: 32px
   - Hover: Arrow slides right 4px, text to `--forge-glow`

**Card 1 — Web Development:**
- Title: "Web Development"
- Description: "Performance-obsessed websites and web applications built on modern frameworks. Every site we ship scores 95+ on Lighthouse and converts visitors into customers."
- Capabilities: SvelteKit & React Apps · E-Commerce Platforms · Progressive Web Apps · Headless CMS Integration · API Development

**Card 2 — App Development:**
- Title: "App Development"
- Description: "Native and cross-platform applications engineered for real users. We build apps that feel fast, work offline, and scale to millions — from MVP to enterprise."
- Capabilities: iOS & Android Native · Cross-Platform (React Native) · Backend & API Architecture · Real-Time Features · App Store Optimization

**Card 3 — SEO & Digital Strategy:**
- Title: "SEO & Growth"
- Description: "Data-driven search strategies that compound over time. We don't chase algorithms — we build authority. Technical SEO, content strategy, and local dominance."
- Capabilities: Technical SEO Audits · Content Strategy & Execution · Local SEO (Google Business) · Link Building & Digital PR · Analytics & Conversion Tracking

### Animation
- Section header: Fade in + slide up on scroll enter (GSAP ScrollTrigger)
- Cards: Stagger in from bottom, 150ms apart, triggered when section hits 30% viewport
- Capability list items: Stagger in 50ms apart after card enters

---

## SECTION 4 — FEATURED WORK (Portfolio Preview)

### Layout
- **Background:** `--forge-charcoal`
- **Padding:** 120px 0
- **Container:** Max-width 1400px, centered

### Section Header — Centered

**Eyebrow:** "SELECTED PROJECTS"
**Heading H2:** "Work That Speaks for Itself."
**Subtext:** "A selection of recent projects across industries. Every one built custom. Every one still performing."
*(Same styling pattern as Section 3 header but `text-align: center`)*

### Project Showcase — Alternating Layout

**3 featured projects displayed in alternating asymmetric layout:**

Each project block is a full-width row, flex, with alternating image/text sides:
- **Odd projects:** Image left (60% width), text right (40% width)
- **Even projects:** Text left (40% width), image right (60% width)
- Gap: 0 (image and text block touch, creating a magazine-style layout)
- Margin between project blocks: 2px (thin `--forge-steel` line)

**Image Side:**
- Aspect ratio: 16:10
- Displays a browser mockup frame (thin `--forge-steel` border, 3 dots in top-left for browser chrome) containing the project screenshot
- Hover: Image scales up 1.03 with `overflow: hidden` on container, 600ms ease
- Overlay on hover: Slight `--forge-ember` gradient overlay at 10% opacity from bottom

**Text Side:**
- Background: `--forge-black`
- Padding: 60px 48px
- Vertical flex, `justify-center`
- **Project category tag:** JetBrains Mono 400, 11px, uppercase, letterspacing 3px, `--forge-ember`, border 1px `--forge-ember`, padding 4px 12px, inline-block
- **Project title:** Clash Display 600, 36px, `--forge-white`, margin-top 20px
- **Project description:** General Sans 400, 15px, `--forge-smoke`, line-height 1.7, margin-top 16px, 2 sentences
- **Tech stack:** Horizontal flex, gap 8px, margin-top 24px
  - Each tech: Pill badge, `--forge-steel` border, padding 4px 12px, JetBrains Mono 400, 11px, `--forge-ash`
- **Link:** "View Case Study →", Satoshi 500, 14px, `--forge-ember`, margin-top 28px

**Sample Projects:**

1. **Category:** E-Commerce · **Title:** "Scaling a DTC Brand to $2M/mo" · **Stack:** SvelteKit, Shopify Headless, Cloudflare · **Description:** "Complete platform rebuild that increased page speed by 340% and conversion rate by 2.1x."

2. **Category:** Web Application · **Title:** "Real-Time Dashboard for Financial Services" · **Stack:** React, TypeScript, WebSockets, AWS · **Description:** "Enterprise dashboard processing 50k+ data points per second with sub-100ms render times."

3. **Category:** Local SEO · **Title:** "From Page 5 to Position #1 in 90 Days" · **Stack:** Technical SEO, Content Strategy, Schema Markup · **Description:** "Connecticut law firm went from invisible to dominating local search across 12 practice areas."

### Bottom CTA
- Centered below projects, margin-top 60px
- "View All Projects →"
- Styled as primary CTA button

### Animation
- Each project block slides in from its image side (left or right) on scroll, GSAP ScrollTrigger, 800ms, `power2.out`
- Text elements stagger in 100ms after image arrives

---

## SECTION 5 — WHY BLACKFORGE (Differentiator Section)

### Layout
- **Background:** `--forge-black`
- **Padding:** 120px 0
- **Container:** Max-width 1400px, centered
- **Structure:** 2-column flex — Left text (45%), Right visual grid (55%)

### Left Column — Copy Block

**Eyebrow:** "WHY US"
**Heading H2:** "Agencies Build Sites. We Engineer Outcomes."
- Font: Clash Display 600, 44px, `--forge-white`
- Max-width: 480px

**Body paragraphs (2):**
- Paragraph 1: "Most agencies hand you a WordPress template, slap on a theme, and call it custom. You deserve better. Every Blackforge project is architected from the ground up on modern frameworks built for speed, security, and scale."
- Paragraph 2: "We're engineers first, designers second, and strategists always. Based in Wolcott, Connecticut, we bring Silicon Valley engineering standards to businesses that refuse to settle for average."
- Font: General Sans 400, 16px, `--forge-smoke`, line-height 1.8
- Max-width: 480px

**CTA:** "See How We Work →" (link-style, `--forge-ember`)

### Right Column — Differentiator Grid

**Layout:** 2×2 grid, gap 2px (thin lines create a cross-hair/forge grid effect)

**Each cell:**
- Background: `--forge-charcoal`
- Padding: 36px 32px
- Hover: Left border transitions to 3px `--forge-ember` (the heat indicator)

**Cell Content:**
1. **Number:** Clash Display 600, 40px, `--forge-ember`
2. **Label:** Satoshi 600, 18px, `--forge-white`, margin-top 8px
3. **Description:** General Sans 400, 14px, `--forge-ash`, margin-top 8px, line-height 1.6

**Cells:**
| #   | Label                     | Description |
|-----|---------------------------|-------------|
| 01  | No Templates. Ever.       | Every project is custom-coded. We don't reskin — we build from scratch. |
| 02  | Performance Guaranteed    | 95+ Lighthouse scores or we keep optimizing. Speed isn't a feature — it's a requirement. |
| 03  | Full-Stack Ownership      | Front-end, back-end, infrastructure, SEO — one team owns the entire stack. |
| 04  | Built for 10 Years        | Our code is architected for longevity. No tech debt. No "rebuild it in 2 years." |

### Animation
- Left column: Fades in + slides right on scroll
- Right grid cells: Stagger in from bottom, 120ms apart
- Numbers in cells: Count in from 00 to their value

---

## SECTION 6 — TESTIMONIALS

### Layout
- **Background:** Diagonal split — `--forge-charcoal` top-left to `--forge-black` bottom-right (CSS `clip-path` or angled pseudo-element)
- **Padding:** 120px 0
- **Container:** Max-width 1000px, centered

### Section Header — Centered
**Eyebrow:** "CLIENT WORDS"
**Heading H2:** "Don't Take Our Word For It."

### Testimonial Carousel
- **Type:** Single testimonial visible at a time, horizontal swipe/click navigation
- **Testimonial Card:**
  - Large opening quote mark: Clash Display 700, 120px, `--forge-ember`, 15% opacity, positioned absolute top-left as decorative element
  - Quote text: General Sans 400, 20px, `--forge-white`, line-height 1.8, italic
  - Attribution row (margin-top 32px):
    - Client avatar: 48px circle, `--forge-steel` border (placeholder if no real photo)
    - Name: Satoshi 600, 16px, `--forge-white`
    - Title/Company: General Sans 400, 14px, `--forge-ash`
  - Max-width: 700px, centered

- **Navigation:**
  - Left/right arrows: Minimal chevrons, `--forge-ash`, 20px, positioned outside the card on desktop
  - Dot indicators below: Small circles, `--forge-steel` default, `--forge-ember` active
  - Auto-advance: Every 6 seconds, pauses on hover

### Animation
- Testimonial transitions: Fade + slide horizontal, 500ms
- Quote mark: Subtle float animation (translateY -5px → 5px, 4s infinite)

---

## SECTION 7 — LOCAL AUTHORITY / CT PRIDE

### Layout
- **Background:** `--forge-black`
- **Padding:** 100px 0
- **Container:** Max-width 1400px, centered
- **Structure:** Flex row, gap 60px — Left text (50%), Right map visual (50%)

### Left Column
**Eyebrow:** "WOLCOTT, CONNECTICUT"
**Heading H2:** "Built in Connecticut. Trusted Nationwide."
**Body:** "Headquartered in Wolcott, CT, we serve businesses across the state and beyond. From Hartford to New Haven, Waterbury to Greenwich — if you demand digital excellence, we're your team."
**Local Stats (vertical list, margin-top 32px):**
- "Serving Connecticut since [year]" — General Sans 400, 15px, `--forge-smoke`
- "Clients across 12+ CT towns"
- "Top-rated on Google (5.0 ★★★★★)"

### Right Column
- Stylized dark map of Connecticut with Wolcott marked by a pulsing `--forge-ember` dot
- Map style: Dark monochrome (`--forge-charcoal` fill, `--forge-steel` borders), SVG
- Other client locations marked with smaller dots
- Subtle radar-pulse animation radiating from Wolcott dot

### Animation
- Map draws in (SVG path animation, GSAP drawSVG) on scroll enter
- Dots appear with pop-in effect after map draws

---

## SECTION 8 — CTA BANNER (Pre-Footer)

### Layout
- **Background:** Full-width `--forge-ember` background with noise texture overlay at 8% opacity
- **Padding:** 100px 48px
- **Container:** Max-width 900px, centered, text-align center

### Content
**Heading H2:**
- Text: "Ready to Build Something That Actually Works?"
- Font: Clash Display 700, 48px desktop / 32px mobile, `--forge-black`
- Max-width: 700px

**Subtext:**
- Text: "Let's talk about your project. No pitch decks. No fluff. Just a real conversation about what you need and how we'll build it."
- Font: General Sans 400, 17px, `--forge-black` at 80% opacity, line-height 1.7
- Margin-top: 20px

**CTA Button:**
- Text: "Start a Conversation →"
- Background: `--forge-black`
- Text color: `--forge-white`
- Padding: 18px 44px
- Font: Satoshi 600, 15px, uppercase, letterspacing 1.5px
- Hover: Background to `--forge-charcoal`, box-shadow `0 8px 30px rgba(0, 0, 0, 0.3)`
- Margin-top: 36px

### Animation
- Entire section: Fade in + slight scale from 0.97 to 1 on scroll enter
- Heading: SplitText words fade in staggered

---

## FOOTER

### Layout
- **Background:** `--forge-black` with top border: 1px `--forge-steel`
- **Padding:** 80px 48px 40px
- **Container:** Max-width 1400px, centered

### Top Row — 4-Column Grid
`grid-template-columns: 2fr 1fr 1fr 1fr`, gap 48px (collapses to stack on mobile)

**Column 1 — Brand:**
- Logo (same as nav)
- Description: "Precision-built web development, app development, and SEO for businesses that refuse to settle." — General Sans 400, 14px, `--forge-ash`, max-width 280px, margin-top 20px
- Social icons (margin-top 24px): LinkedIn, X/Twitter, Instagram, GitHub
  - Icon style: 20px, `--forge-ash`, hover → `--forge-ember`

**Column 2 — Services:**
- Header: "Services" — Satoshi 600, 14px, `--forge-white`, uppercase, letterspacing 2px
- Links: Web Development, App Development, SEO & Growth, UI/UX Design, Consulting
- Font: General Sans 400, 14px, `--forge-ash`, margin-bottom 12px each
- Hover: `--forge-white`, 200ms

**Column 3 — Company:**
- Header: "Company"
- Links: About, Our Process, Portfolio, Blog, Careers, Contact

**Column 4 — Contact:**
- Header: "Get in Touch"
- Email: hello@blackforge.digital — `--forge-ember`
- Phone: (203) XXX-XXXX — `--forge-smoke`
- Location: Wolcott, CT 06716 — `--forge-ash`

### Bottom Row — Copyright Bar
- Flex row, `justify-between`, padding-top 40px, border-top 1px `--forge-steel`
- Left: "© 2025 Blackforge Digital. All rights reserved." — General Sans 400, 13px, `--forge-ash`
- Right: "Privacy Policy · Terms of Service" — same font, `--forge-ash`, hover → `--forge-white`

---

## PAGE-LEVEL ANIMATIONS SUMMARY

| Element              | Trigger           | Effect                                      | Timing          |
|----------------------|-------------------|----------------------------------------------|-----------------|
| Nav                  | Page load         | Fade in from top                             | 400ms, 100ms delay |
| Hero eyebrow         | Page load         | Fade + slide up                              | 600ms, 200ms delay |
| Hero H1              | Page load         | SplitText clip-in per line                   | 800ms, stagger 150ms |
| Hero sub             | Page load         | Fade + slide up                              | 700ms, after H1 |
| Hero CTAs            | Page load         | Fade + slide up, stagger                     | 600ms, after sub |
| Hero stats           | Page load         | CountUp numbers + fade labels                | 1200ms, after CTAs |
| Trust bar logos      | Always            | Infinite marquee scroll                      | 40s loop |
| Services header      | Scroll enter 80%  | Fade + slide up                              | 700ms |
| Service cards        | Scroll enter 30%  | Stagger slide up from bottom                 | 600ms, 150ms apart |
| Project blocks       | Scroll enter 40%  | Slide in from image side                     | 800ms |
| Differentiator cells | Scroll enter 50%  | Stagger from bottom                          | 500ms, 120ms apart |
| Testimonial          | Auto / click      | Fade + slide horizontal                      | 500ms |
| CT map               | Scroll enter 50%  | SVG draw-in                                  | 1200ms |
| CTA banner           | Scroll enter 60%  | Fade + scale 0.97→1                          | 800ms |
| Footer               | Scroll enter      | Fade in                                      | 600ms |
