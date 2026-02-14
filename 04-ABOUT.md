# 04 — ABOUT PAGE

> The trust builder. This page humanizes the brand, establishes credibility, and answers the question every prospect has: "Who are these people and can I trust them with my business?"

---

## SECTION 1 — HERO

### Layout

- **Type:** 60vh
- **Background:** `--forge-black` with a dramatic, large-scale ember gradient: `radial-gradient(ellipse at 30% 80%, rgba(255, 77, 0, 0.07) 0%, transparent 50%)`
- **Container:** Max-width 1400px, centered

### Content — Split Layout

**Left (55%):**

**Eyebrow:** "ABOUT BLACKFORGE"
**Heading H1:** "Built Different. On Purpose."

- Font: Clash Display 700, 56px, `--forge-white`

**Lead Paragraph:**

- Text: "Blackforge Digital isn't a traditional agency. We're a tight engineering team that builds custom digital products — websites, applications, and search strategies — for businesses that can't afford to blend in."
- Font: General Sans 400, 18px, `--forge-smoke`, line-height 1.8, max-width 560px

**Right (45%) — Decorative:**

- Abstract geometric composition: Overlapping rectangles/squares in `--forge-charcoal`, `--forge-steel`, with one element in `--forge-ember`
- Creates a sense of precision construction / blueprint
- Subtle parallax on scroll

---

## SECTION 2 — ORIGIN STORY

### Layout

- **Background:** `--forge-charcoal`
- **Padding:** 120px 0
- **Container:** Max-width 900px, centered (narrower — editorial reading width)

### Content — Long-Form Copy Block

**Heading H2:** "The Forge Origin"

- Font: Clash Display 600, 40px, `--forge-white`

**Body Copy (3-4 paragraphs, editorial style):**

_Paragraph 1:_
"Every agency says they're different. Here's how we actually are: We started Blackforge because we were tired of watching businesses get burned by agencies that deliver templates dressed up as 'custom' work. Tired of seeing $30,000 WordPress sites that crumble under traffic and can't rank on Google."

_Paragraph 2:_
"We believe that building a website should be an engineering discipline — not a design exercise. That the technology choices you make today determine whether your digital presence compounds in value or decays into technical debt. That businesses deserve partners who think in decades, not deliverables."

_Paragraph 3:_
"Based in Wolcott, Connecticut, we've assembled a team of senior engineers, designers, and strategists who share one obsession: building digital products that are genuinely, measurably, undeniably better than what anyone else is shipping."

_Paragraph 4:_
"We're small by choice. We don't want 200 clients — we want 20 clients who we can make unstoppable."

- Font: General Sans 400, 17px, `--forge-smoke`, line-height 1.9
- First letter of first paragraph: Drop cap, Clash Display 700, 64px, `--forge-ember`, float left, margin-right 12px
- Pull quote between paragraphs 2 and 3:
  - Text: "Businesses deserve partners who think in decades, not deliverables."
  - Font: Clash Display 500, 28px, `--forge-ember`, italic
  - Left border: 3px `--forge-ember`, padding-left 28px
  - Margin: 48px 0

---

## SECTION 3 — VALUES / PRINCIPLES

### Layout

- **Background:** `--forge-black`
- **Padding:** 120px 0
- **Container:** Max-width 1400px, centered

### Section Header

**Eyebrow:** "WHAT WE STAND FOR"
**Heading H2:** "Principles. Not Platitudes."

### Values Grid

**Layout:** 2 columns, gap 32px

- On mobile: single column stack

**Each Value Card:**

- Background: transparent
- Border-bottom: 1px `--forge-steel`
- Padding: 40px 0
- Flex row: Number left, content right

**Number:**

- Font: Clash Display 700, 48px, `--forge-ember`, opacity 30%
- Width: 80px, flex-shrink 0

**Content:**

- **Title:** Satoshi 600, 22px, `--forge-white`
- **Description:** General Sans 400, 15px, `--forge-ash`, line-height 1.7, margin-top 8px

**Values (6 total):**

| #   | Title                         | Description                                                                                                                                        |
| --- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01  | Engineering Over Assembly     | We write code. Line by line. We don't drag and drop components and call it development. Every project is architected, not assembled.               |
| 02  | Performance Is Non-Negotiable | A beautiful website that loads in 5 seconds is a failed website. We guarantee 95+ Lighthouse scores because speed is the foundation of everything. |
| 03  | Radical Transparency          | No hidden fees. No scope creep surprises. No "that'll cost extra." You know exactly what you're getting, what it costs, and when it ships.         |
| 04  | Own Your Code                 | You paid for it, you own it. Full source code, full documentation, full freedom to take it anywhere. We earn your loyalty — we don't lock you in.  |
| 05  | Small Team, Big Standards     | We don't outsource to junior freelancers. Every person who touches your project is a senior professional who takes personal ownership.             |
| 06  | Build for the Long Game       | We architect for 10-year longevity. No tech debt bombs. No "you'll need to rebuild in 2 years." Our code is an investment, not an expense.         |

### Animation

- Cards stagger in from left, 120ms apart on scroll
- Numbers fade in from 0% → 30% opacity

---

## SECTION 4 — TEAM

### Layout

- **Background:** `--forge-charcoal`
- **Padding:** 120px 0
- **Container:** Max-width 1200px, centered

### Section Header

**Eyebrow:** "THE TEAM"
**Heading H2:** "Senior Talent Only."
**Subtext:** "No interns. No junior devs learning on your project. Every team member has 7+ years of production experience."

### Team Grid

**Layout:** 3 columns (desktop), 2 columns (tablet), 1 column (mobile), gap 32px

**Team Member Card:**

- Background: `--forge-black`
- Padding: 0 (image edge-to-edge at top)

**Photo area:**

- Aspect ratio: 1:1 (square)
- Grayscale by default, `filter: grayscale(100%) brightness(0.8)`
- Hover: Transitions to full color, 600ms
- If no real photos: Solid `--forge-steel` background with minimal geometric avatar icon in `--forge-ash`

**Info area (below photo):**

- Padding: 24px
- Name: Satoshi 600, 18px, `--forge-white`
- Role: General Sans 400, 14px, `--forge-ember`
- Bio: General Sans 400, 13px, `--forge-ash`, line-height 1.6, margin-top 12px, 2 lines max
- Social links (margin-top 12px): LinkedIn, GitHub, X — 16px icons, `--forge-ash`, hover → `--forge-ember`

**Team Members (adapt to your real team):**

| Name           | Role                     | Bio                                                                                                                    |
| -------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| [Founder Name] | Founder & Lead Engineer  | Full-stack engineer with [X] years building production applications. Obsessed with performance and clean architecture. |
| [Name]         | Senior Frontend Engineer | Specialist in modern frameworks, animation, and pixel-perfect interfaces.                                              |
| [Name]         | Backend & Infrastructure | Database architecture, API design, and cloud infrastructure. Keeps everything running at scale.                        |
| [Name]         | SEO Strategist           | Data-driven search specialist. Turns organic traffic into revenue with technical SEO and content strategy.             |
| [Name]         | UI/UX Designer           | Human-centered design for complex applications. Converts wireframes into high-converting interfaces.                   |
| [Name]         | Project Manager          | Keeps timelines tight, communication clear, and deliverables on schedule. Your single point of contact.                |

### Animation

- Cards stagger in on scroll, 100ms apart
- Photos: Subtle scale 1 → 1.02 on hover (inside overflow-hidden container)

---

## SECTION 5 — TOOLS & TECHNOLOGIES

### Layout

- **Background:** `--forge-black`
- **Padding:** 100px 0
- **Container:** Max-width 1200px, centered, text-align center

### Heading

**H2:** "Our Toolkit"
**Sub:** "We use the best tools for the job — not the most popular ones. Here's what powers our work."

### Tech Logo Cloud

- Grid layout: 6 columns, gap 24px
- Each cell: 80px square, centered logo icon
- Logo style: Monochrome `--forge-ash` at 40% opacity
- Hover: Full color, opacity 100%, label appears below
- Label: JetBrains Mono 400, 10px, `--forge-smoke`

**Technologies shown:**
SvelteKit · React · Next.js · TypeScript · Rust · Node.js · PostgreSQL · Redis · Tailwind · GSAP · Figma · Vercel · AWS · Cloudflare · Docker · Sanity · Ahrefs · Google Analytics · Swift · Kotlin · Python · GraphQL · Supabase · Stripe

### Animation

- Logos fade in randomly (not sequentially), 50ms stagger, random order

---

## SECTION 6 — AWARDS / RECOGNITION (Optional)

### Layout

- **Background:** `--forge-charcoal`
- **Padding:** 80px 0
- **Container:** Max-width 1000px, centered

### Content

- Horizontal flex of award badges/logos
- Examples: Google Partner, Clutch Top Agency, DesignRush, etc.
- Same grayscale treatment as trust bar

---

## SECTION 7 — CTA BANNER

**Heading:** "Ready to Work With a Team That Actually Gives a Damn?"
**Sub:** "Let's build something that makes your competitors nervous."
**CTA:** "Talk to Our Team →"
