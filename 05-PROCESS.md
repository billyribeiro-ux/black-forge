# 05 — PROCESS PAGE

> Eliminates the "how does this work?" friction. Shows prospects exactly what happens after they say yes. Builds confidence, reduces anxiety, and positions Blackforge as organized professionals — not fly-by-night freelancers.

---

## SECTION 1 — HERO

### Layout
- **Type:** 55vh
- **Background:** `--forge-black` with vertical blueprint lines: repeating thin `--forge-steel` lines at 80px intervals, 4% opacity
- **Container:** Max-width 1400px, centered

### Content

**Eyebrow:** "HOW WE WORK"
**Heading H1:** "Precision Has a Process."
- Font: Clash Display 700, 56px, `--forge-white`

**Subheadline:** "Every Blackforge project follows a proven 6-phase framework designed to eliminate surprises, maintain quality, and deliver on time. Here's exactly what to expect."
- Font: General Sans 400, 18px, `--forge-smoke`, max-width 640px

**Visual Timeline Indicator:**
- Horizontal line with 6 numbered dots, connecting the hero to the sections below
- Line: 2px `--forge-steel`, spans max-width 800px, centered
- Dots: 12px circles, numbered 1-6, `--forge-steel` fill, `--forge-ash` number text
- As user scrolls through each phase, the corresponding dot fills with `--forge-ember` (GSAP ScrollTrigger progress)

---

## SECTION 2 — THE 6 PHASES

> Each phase is a distinct visual section that the user scrolls through. The timeline indicator (fixed on desktop) tracks progress.

### Sticky Timeline (Desktop Only)
- Position: Fixed, right side, vertically centered
- Vertical line (200px) with 6 dots
- Active phase dot: `--forge-ember`, scale 1.3
- Phase label appears next to active dot: JetBrains Mono 400, 10px, `--forge-smoke`
- Transitions smoothly between phases

---

### PHASE 1 — DISCOVERY & STRATEGY

### Layout
- **Background:** `--forge-black`
- **Padding:** 120px 0
- **Container:** Max-width 1400px, centered
- **Structure:** 2-column flex — Left content (55%), Right visual (45%)

### Left Column

**Phase Tag:**
- "PHASE 01" — JetBrains Mono 400, 13px, `--forge-ember`, letterspacing 3px
- Horizontal line (40px, 2px, `--forge-ember`) after text

**Heading H2:** "Discovery & Strategy"
- Font: Clash Display 600, 40px, `--forge-white`

**Duration Badge:**
- "1-2 Weeks" — Pill, `--forge-charcoal` background, `--forge-smoke` text, General Sans 500, 12px, padding 6px 16px

**Description:**
- "Before a single line of code is written, we deep-dive into your business, your market, your competitors, and your users. This phase produces the strategic blueprint that every decision is built on."
- Font: General Sans 400, 16px, `--forge-smoke`, line-height 1.8

**Deliverables List:**
- Heading: "What You Get:" — Satoshi 600, 15px, `--forge-white`, margin-top 28px
- Each deliverable: Flex row, ember dot + text
  - Competitive analysis & market positioning report
  - User persona development
  - Site architecture & information hierarchy
  - SEO keyword strategy & content map
  - Technical requirements specification
  - Project timeline with milestones
- Font: General Sans 400, 14px, `--forge-ash`

### Right Column — Visual
- Illustration concept: A stylized blueprint/wireframe sketch emerging from an anvil
- Style: Thin line illustration, `--forge-ember` strokes on `--forge-charcoal` background
- Elements: Document icons, magnifying glass, chart, user silhouettes — all in a constellation layout
- Alternative: A dark mockup of an actual strategy document/report with Blackforge branding

### Animation
- Phase tag slides in from left
- Content staggers in below
- Right visual draws in (SVG path animation)

---

### PHASE 2 — DESIGN & PROTOTYPING

### Layout
- **Background:** `--forge-charcoal` (alternating)
- **Same 2-column structure, reversed:** Visual left (45%), Content right (55%)

**Phase Tag:** "PHASE 02"
**Heading H2:** "Design & Prototyping"
**Duration:** "2-3 Weeks"

**Description:** "Design isn't decoration — it's communication. We create high-fidelity designs and interactive prototypes that you can click through, test, and approve before development begins. No surprises when the site launches."

**Deliverables:**
- Brand integration & visual direction
- High-fidelity desktop & mobile mockups (Figma)
- Interactive prototype for key user flows
- Design system & component library
- Animation & micro-interaction specifications
- Client review & revision rounds (2 included)

**Left Visual:**
- Figma-style design mockup with layers visible, showing a website being designed
- Overlapping artboards, ruler guides, `--forge-ember` selection handles
- Subtle hover parallax effect

---

### PHASE 3 — ENGINEERING & DEVELOPMENT

### Layout
- **Background:** `--forge-black`
- **Visual right, content left**

**Phase Tag:** "PHASE 03"
**Heading H2:** "Engineering & Development"
**Duration:** "4-8 Weeks"

**Description:** "This is where the forge fires up. Our engineers hand-code every component using modern frameworks and TypeScript strict mode. No page builders, no shortcuts. You get production-grade code that performs, scales, and lasts."

**Deliverables:**
- Custom frontend development (SvelteKit/React/Next.js)
- Backend & API architecture
- CMS integration & content modeling
- Responsive implementation (mobile-first)
- Performance optimization (target: 95+ Lighthouse)
- Weekly progress demos & staging access

**Right Visual:**
- Code editor mockup showing clean TypeScript/Svelte code
- Dark theme (VS Code style), `--forge-ember` syntax highlights
- Blurred slightly to prevent readability but convey "real code"
- Scrolling animation (code slowly scrolls up)

---

### PHASE 4 — TESTING & QA

### Layout
- **Background:** `--forge-charcoal`
- **Visual left, content right**

**Phase Tag:** "PHASE 04"
**Heading H2:** "Testing & Quality Assurance"
**Duration:** "1-2 Weeks"

**Description:** "Nothing ships until it's tested across every browser, every device, and every edge case. We run automated tests, manual QA, accessibility audits, and performance benchmarks. If it doesn't meet our standards, it doesn't ship."

**Deliverables:**
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Device testing (iOS, Android, tablet, desktop)
- Accessibility audit (WCAG 2.1 AA compliance)
- Performance benchmarking & optimization
- SEO pre-launch audit
- Security vulnerability scan

**Left Visual:**
- Checklist/test report mockup with green checkmarks
- Browser icons with status indicators
- Lighthouse score gauge showing 98 in `--forge-ember`

---

### PHASE 5 — LAUNCH

### Layout
- **Background:** `--forge-black`
- **Full-width centered moment — this phase gets dramatic treatment**

**Phase Tag:** "PHASE 05"
**Heading H2 (centered, large):** "Launch Day."
- Font: Clash Display 700, 56px, `--forge-white`
- Special treatment: Subtle ember glow behind the text

**Duration:** "1 Day (Coordinated)"

**Description (centered):** "Deployment is choreographed, not chaotic. DNS switches, SSL certificates, redirects, analytics — everything is handled. You wake up to a live site that works perfectly."

**Launch Checklist (centered, styled differently):**
- Displayed as a vertical timeline with checkmarks
- Each item: Flex row, `--forge-ember` check icon + text
  - DNS configuration & SSL setup
  - 301 redirect mapping (preserving SEO equity)
  - Analytics & tracking verification
  - Search Console & sitemap submission
  - Performance monitoring activation
  - Client walkthrough & CMS training
- Font: General Sans 400, 15px, `--forge-smoke`

**Visual:** Centered below — a "Go Live" button mockup, large, `--forge-ember`, with radiating pulse rings (like pressing a launch button)

---

### PHASE 6 — GROWTH & OPTIMIZATION

### Layout
- **Background:** `--forge-charcoal`
- **Content left, visual right**

**Phase Tag:** "PHASE 06"
**Heading H2:** "Growth & Optimization"
**Duration:** "Ongoing"

**Description:** "Launch isn't the finish line — it's the starting line. We monitor performance, analyze user behavior, and continuously optimize. Your site gets better every month, not worse."

**Deliverables:**
- Monthly performance reports
- Core Web Vitals monitoring
- Conversion rate optimization (CRO)
- Content updates & feature additions
- Security patches & dependency updates
- Priority support & bug fixes (SLA-backed)

**Right Visual:**
- Dashboard mockup showing upward-trending charts
- `--forge-ember` line chart on dark background
- Key metrics: Traffic ↑, Conversions ↑, Speed maintained
- Animated: Line draws in from left, data points pop in

---

## SECTION 3 — TIMELINE OVERVIEW

### Layout
- **Background:** `--forge-black`
- **Padding:** 100px 0
- **Container:** Max-width 1200px, centered

### Heading
**H2:** "Typical Timeline"
**Sub:** "Most projects complete in 10-16 weeks from kickoff to launch."

### Visual Timeline (Horizontal Gantt-Style Bar Chart)

**Layout:** Full-width horizontal bars, one per phase

```
Phase 1 — Discovery    ████                          (Weeks 1-2)
Phase 2 — Design           ████████                  (Weeks 3-5)
Phase 3 — Engineering              ████████████████  (Weeks 5-12)
Phase 4 — QA                                   ████  (Weeks 12-14)
Phase 5 — Launch                                  █  (Week 14)
Phase 6 — Growth                                   ████████ (Ongoing)
```

- Bar colors: Gradient from `--forge-ember` to `--forge-glow`
- Background: `--forge-charcoal` strips
- Phase labels: Satoshi 500, 14px, `--forge-white`
- Week labels: JetBrains Mono 400, 11px, `--forge-ash`
- Animation: Bars grow from left to right on scroll, staggered

---

## SECTION 4 — FAQ

### Layout
- **Background:** `--forge-charcoal`
- **Padding:** 100px 0
- **Container:** Max-width 800px, centered

### Heading
**H2:** "Questions We Get Asked."

### Accordion FAQ
**Style:**
- Each question: Full-width row, border-bottom 1px `--forge-steel`
- Padding: 24px 0
- Question text: Satoshi 500, 17px, `--forge-white`
- Plus/minus icon: Right-aligned, `--forge-ember`, 20px, rotates 45° on open
- Answer: General Sans 400, 15px, `--forge-ash`, line-height 1.7, slides down with height animation (300ms)
- Open state: Question text → `--forge-ember`

**FAQs:**

1. **"How much does a project cost?"**
   → "Every project is scoped individually because every business is different. Web development projects typically range from $8,000 to $50,000+ depending on complexity. We provide detailed proposals with fixed pricing — no hourly surprises."

2. **"How long does a typical project take?"**
   → "Most projects launch in 10-16 weeks. Simple marketing sites can be faster (6-8 weeks), while complex web applications may take longer (16-24 weeks). You'll have a detailed timeline before we start."

3. **"Do I own the code when it's done?"**
   → "100%. Full source code, full documentation, full repository access. You can take it anywhere. We earn your continued business through results, not vendor lock-in."

4. **"Do you work with businesses outside of Connecticut?"**
   → "Absolutely. While we're based in Wolcott, CT, we work with clients nationwide. Our process is fully remote-friendly with structured communication and weekly demos."

5. **"What if I already have a website?"**
   → "We specialize in migrations and rebuilds. We'll audit your current site, preserve your SEO equity, and build you something dramatically better. Your rankings won't drop — they'll improve."

6. **"What happens after launch?"**
   → "We offer ongoing support and optimization packages. Monthly performance monitoring, content updates, security patches, and continuous improvement. We don't disappear after launch."

7. **"Can you just do SEO without a new website?"**
   → "Yes. We offer standalone SEO engagements with technical audits, content strategy, and ongoing optimization. Though if your site has fundamental performance issues, we'll be honest about that."

---

## SECTION 5 — CTA BANNER

**Heading:** "Enough Reading. Let's Talk."
**Sub:** "Book a free strategy call and we'll walk you through exactly how this process applies to your project."
**CTA:** "Book Your Strategy Call →"
