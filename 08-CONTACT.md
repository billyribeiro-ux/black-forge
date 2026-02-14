# 08 — CONTACT PAGE

> The conversion point. Every design decision, every word of copy, every animation across the entire site funnels here. This page must feel effortless, trustworthy, and urgent.

---

## SECTION 1 — HERO

### Layout

- **Type:** Full viewport height on desktop, auto on mobile
- **Background:** `--forge-black` with dual effect:
  1. Large radial gradient bottom-left: `radial-gradient(ellipse at 20% 80%, rgba(255, 77, 0, 0.06) 0%, transparent 50%)`
  2. Faint topographic/contour line pattern in `--forge-steel` at 3% opacity (precision/mapping metaphor)
- **Container:** Max-width 1400px, centered
- **Structure:** 2-column flex — Left info (45%), Right form (55%)
- **Padding:** 120px 48px

---

### LEFT COLUMN — Contact Information

**Eyebrow:** "LET'S BUILD"
**Heading H1:** "Your Move."

- Font: Clash Display 700, 56px, `--forge-white`
- Special: Period in `--forge-ember`

**Subheadline:**

- Text: "Every great project starts with a conversation. Tell us what you're building, and we'll tell you exactly how we'd approach it. No commitment. No pitch deck. Just a real talk."
- Font: General Sans 400, 17px, `--forge-smoke`, line-height 1.8, max-width 440px

### Direct Contact Block (margin-top 48px)

**Section label:** "DIRECT CONTACT" — JetBrains Mono 400, 11px, `--forge-ember`, letterspacing 3px, uppercase, margin-bottom 20px

**Email:**

- Icon: Mail icon, 20px, `--forge-ember`
- Text: "hello@blackforge.digital"
- Font: General Sans 400, 16px, `--forge-white`
- Hover: `--forge-ember` color, underline
- Click: `mailto:` link

**Phone:**

- Icon: Phone icon, 20px, `--forge-ember`
- Text: "(203) XXX-XXXX"
- Font: General Sans 400, 16px, `--forge-white`
- Click: `tel:` link

**Location:**

- Icon: Map pin icon, 20px, `--forge-ember`
- Text: "Wolcott, Connecticut 06716"
- Font: General Sans 400, 16px, `--forge-smoke`
- Sub-text: "Serving clients nationwide" — General Sans 400, 13px, `--forge-ash`

**Each contact item:** Flex row, gap 16px, margin-bottom 20px, align-center

### Response Time (margin-top 40px)

**Badge-style info block:**

- Background: `--forge-charcoal`
- Padding: 20px 24px
- Border-left: 3px `--forge-ember`
- Max-width: 380px

**Content:**

- Icon: Clock icon, 16px, `--forge-ember`, inline before text
- Text: "Average response time: under 4 hours during business hours."
- Font: General Sans 400, 14px, `--forge-smoke`

### Social Links (margin-top 40px)

**Section label:** "FOLLOW US" — JetBrains Mono 400, 11px, `--forge-ash`, letterspacing 3px

**Social icons:** Horizontal flex, gap 20px, margin-top 12px

- LinkedIn, X/Twitter, Instagram, GitHub, Dribbble
- Icon size: 24px, `--forge-ash`
- Hover: `--forge-ember`, `translateY(-2px)`, 200ms

### Office Hours (margin-top 32px)

**Section label:** "HOURS" — JetBrains Mono 400, 11px, `--forge-ash`, letterspacing 3px

- "Monday – Friday: 8:00 AM – 6:00 PM EST"
- "Saturday: By Appointment"
- "Sunday: Closed"
- Font: General Sans 400, 14px, `--forge-smoke`

---

### RIGHT COLUMN — Contact Form

**Form Container:**

- Background: `--forge-charcoal`
- Padding: 48px 40px
- Border: 1px `--forge-steel`
- Position: relative

**Form Header:**

- Text: "Start Your Project"
- Font: Satoshi 700, 24px, `--forge-white`
- Subtext: "Fill out the form below and we'll get back to you within one business day."
- Font: General Sans 400, 14px, `--forge-ash`, margin-top 8px

### Form Fields

**Layout:** Vertical stack, gap 20px, margin-top 32px

**Field Style (all inputs/textareas):**

- Background: `--forge-black`
- Border: 1px `--forge-steel`
- Padding: 14px 18px
- Font: General Sans 400, 15px, `--forge-white`
- Placeholder: `--forge-ash`
- Focus: Border → `--forge-ember`, box-shadow `0 0 0 3px rgba(255, 77, 0, 0.1)`
- Label above: Satoshi 500, 13px, `--forge-smoke`, uppercase, letterspacing 1px, margin-bottom 6px
- Required indicator: Small `--forge-ember` asterisk after label

**Field 1 — Name:**

- Type: text
- Label: "Full Name \*"
- Placeholder: "John Smith"
- Full width

**Field 2 — Email:**

- Type: email
- Label: "Email Address \*"
- Placeholder: "john@company.com"
- Full width

**Field 3 — Phone:**

- Type: tel
- Label: "Phone Number"
- Placeholder: "(203) 555-0100"
- Full width
- Not required

**Field 4 — Company:**

- Type: text
- Label: "Company / Organization"
- Placeholder: "Acme Corp"
- Full width
- Not required

**Field 5 — Service Interest:**

- Type: Select dropdown
- Label: "What Do You Need? \*"
- Options:
  - "Select a service..."
  - "Web Development"
  - "App Development"
  - "SEO & Digital Growth"
  - "Web + SEO Package"
  - "Full Digital Ecosystem"
  - "Not Sure Yet — Let's Talk"
- Custom dropdown styling: `--forge-black` background, `--forge-steel` border, chevron icon `--forge-ember`
- Open state: Options on `--forge-charcoal`, hover highlight `--forge-ember` at 10% opacity

**Field 6 — Budget Range:**

- Type: Select dropdown
- Label: "Budget Range"
- Options:
  - "Select a range..."
  - "Under $8,000"
  - "$8,000 – $15,000"
  - "$15,000 – $30,000"
  - "$30,000 – $50,000"
  - "$50,000+"
  - "Not Sure Yet"
- Not required

**Field 7 — Project Details:**

- Type: textarea
- Label: "Tell Us About Your Project \*"
- Placeholder: "What are you building? What problems are you solving? What does success look like?"
- Height: 140px
- Full width
- Character count: Bottom-right corner, General Sans 400, 11px, `--forge-ash` — "0 / 2000"

**Field 8 — How Did You Find Us:**

- Type: Select dropdown
- Label: "How Did You Find Us?"
- Options:
  - "Select..."
  - "Google Search"
  - "Referral"
  - "Social Media"
  - "Blog / Article"
  - "Local Directory"
  - "Other"
- Not required

### Submit Button

**Layout:** Full-width, margin-top 28px

**Style:**

- Background: `--forge-ember`
- Text: "Submit Your Project →" — Satoshi 600, 15px, uppercase, letterspacing 1.5px, `--forge-white`
- Padding: 18px
- Border-radius: 0
- Hover: Background → `--forge-glow`, `translateY(-1px)`, box-shadow `0 4px 20px rgba(255, 77, 0, 0.3)`
- Active: `translateY(0)`, darker ember

**Loading State:**

- Text replaced with spinner animation (small dots rotating) + "Sending..."
- Button disabled, opacity 0.8

**Success State:**

- Background transitions to `#2D8A4E` (success green)
- Text: "✓ Message Sent!"
- After 2 seconds, shows success message panel

### Form Validation

**Inline validation:**

- Error state: Border → `#FF4444` (red), error message below field
- Error message: General Sans 400, 12px, `#FF4444`, margin-top 4px
- Success state: Border → `#2D8A4E` (green), check icon appears inside field right side

**Error Messages:**

- Name: "Please enter your name"
- Email: "Please enter a valid email address"
- Service: "Please select a service"
- Project: "Please tell us about your project (minimum 20 characters)"

---

## SECTION 2 — SUCCESS STATE (After Form Submit)

### Layout

- Replaces the form container (smooth transition)
- Same `--forge-charcoal` background and dimensions

### Content (centered)

**Check Icon:**

- Large circle (64px), `--forge-ember` border, check mark SVG inside
- Animation: Scale 0 → 1 with bounce, 400ms

**Heading:** "We're On It."

- Font: Clash Display 600, 32px, `--forge-white`

**Message:**

- "Thank you for reaching out. We'll review your project details and get back to you within one business day — usually much sooner."
- Font: General Sans 400, 16px, `--forge-smoke`, max-width 440px

**What Happens Next (margin-top 32px):**

- Label: "WHAT HAPPENS NEXT" — JetBrains Mono 400, 11px, `--forge-ember`
- Steps (vertical timeline style):
  1. "We review your project details" — within hours
  2. "We schedule a strategy call" — to discuss your goals
  3. "We deliver a custom proposal" — with timeline and pricing
- Each: Flex row, ember dot + text, General Sans 400, 14px, `--forge-smoke`

**Secondary CTA:**

- "While you wait, check out our recent work →" — Satoshi 500, 14px, `--forge-ember`
- Links to Portfolio page

---

## SECTION 3 — MAP & LOCATION

### Layout

- **Background:** `--forge-black`
- **Padding:** 80px 0
- **Container:** Full-width

### Content

**Interactive Map:**

- Full-width dark-themed map (Mapbox GL JS with custom dark style)
- Color scheme: Dark roads, `--forge-charcoal` buildings, `--forge-steel` labels, `--forge-ember` pin
- Centered on Wolcott, CT
- Zoom level: Shows surrounding area (Waterbury, Bristol, Meriden)
- Pin: Custom `--forge-ember` pin SVG with pulse animation at Wolcott location
- Interaction: Scroll zoom disabled (prevents accidental scroll-jacking), drag enabled
- Below map: "Wolcott, CT 06716 — Serving businesses across Connecticut and nationwide" — centered, General Sans 400, 14px, `--forge-ash`

**Map Height:** 400px desktop / 300px mobile

---

## SECTION 4 — QUICK CONTACT ALTERNATIVES

### Layout

- **Background:** `--forge-charcoal`
- **Padding:** 80px 0
- **Container:** Max-width 1200px, centered

### Heading (centered)

**H3:** "Prefer a Different Way to Connect?"

### 3-Column Cards

**Layout:** 3 equal columns, gap 24px

**Each Card:**

- Background: `--forge-black`
- Padding: 36px 32px, text-align center
- Border: 1px `--forge-steel`
- Hover: Border → `--forge-ember`, `translateY(-4px)`

**Card 1 — Email Us:**

- Icon: Mail, 32px, `--forge-ember`
- Title: "Email Us Directly" — Satoshi 600, 18px, `--forge-white`
- Text: "hello@blackforge.digital" — General Sans 400, 15px, `--forge-smoke`
- CTA: "Send Email →" — `--forge-ember`

**Card 2 — Call Us:**

- Icon: Phone, 32px, `--forge-ember`
- Title: "Call Our Team" — Satoshi 600, 18px, `--forge-white`
- Text: "(203) XXX-XXXX" — General Sans 400, 15px, `--forge-smoke`
- Sub: "Mon–Fri, 8am–6pm EST"
- CTA: "Call Now →" — `--forge-ember`

**Card 3 — Schedule a Call:**

- Icon: Calendar, 32px, `--forge-ember`
- Title: "Book a Strategy Call" — Satoshi 600, 18px, `--forge-white`
- Text: "Pick a time that works for you" — General Sans 400, 15px, `--forge-smoke`
- CTA: "Open Calendar →" — `--forge-ember`
- Links to: Calendly or Cal.com booking page

---

## PAGE-LEVEL NOTES

### Form Backend

- Custom serverless endpoint (Vercel Edge Function or Cloudflare Worker)
- No third-party form services (no Formspree, no Typeform embeds)
- Sends notification to:
  - Slack channel (#new-leads)
  - Email (hello@blackforge.digital)
  - Optional: CRM integration (HubSpot, Pipedrive)
- Stores submission in database for tracking
- CAPTCHA: Invisible reCAPTCHA v3 or Cloudflare Turnstile (no visible checkbox)

### SEO

- Title: "Contact Blackforge Digital | Web Development & SEO Agency in Wolcott, CT"
- Meta Description: "Start your next web development, app development, or SEO project with Blackforge Digital. Based in Wolcott, Connecticut. Get a free strategy consultation."
- Schema: LocalBusiness markup with address, phone, hours
- Open Graph: Custom image showing the contact page design

### Conversion Tracking

- Form submit event: Google Analytics 4 + Google Ads conversion pixel
- Phone click event: GA4 event tracking
- Email click event: GA4 event tracking
- Calendly booking: Webhook → GA4

### Accessibility

- All form fields have associated `<label>` elements
- Error messages linked via `aria-describedby`
- Focus visible states on all interactive elements
- Tab order follows visual layout
- Submit button has clear focus state
- Success/error states announced via `aria-live="polite"` region
