# wavia — Visual & Motion Design Audit
**For: design/coding agent handoff**
**Scope:** wavia.vertexdevstudio.tech, based on the 20 screenshots provided (light + dark mode, most pages).

---

## 0. Honest headline: this site is in noticeably better shape than the VERTEX/studio main site

Worth saying plainly before the critique: wavia doesn't have the badge/pill/eyebrow-label repetition problem the main site had. One consistent orange accent, a working light/dark toggle, an actual interactive demo (the "Tap to talk" waveform), real code samples on the Core page, clean pricing cards — this reads like a real product site, not a templated one. The issues below are real, but they're a different category of problem: **layout gaps and repeated hero treatment**, not "AI slop" styling.

---

## 1. The one actual bug: dead whitespace gaps on inner pages

This is the most important finding and should be fixed first. On the **About**, **Wavia Studio ("Fill out a form, not a codebase")**, and **How It Works** pages, there's a large empty vertical gap — roughly 400-600px — between the hero headline/subhead and the content block below it (the body paragraphs on About, the numbered list on Studio and How It Works).

This doesn't read as intentional breathing room — it reads like a section is missing. A few possibilities and fixes:

- If a visual asset (product screenshot, animated diagram, illustration) was meant to go there and didn't load/ship, that's the fix: fill the gap with something — ideally something showing the product in use, since none of these three pages currently show any visual of wavia actually working mid-page.
- If it's a spacing/margin bug (e.g., a section given a large fixed min-height that isn't earning its size), tighten it to match the vertical rhythm used elsewhere on the same pages (the gap between the FAQ section and the CTA banner on the homepage, for comparison, is proportionate — these three pages are the outliers).
- Either way, verify this on the actual live site, not just these screenshots — if it's consistent across all three, it's systemic (a shared hero component with a fixed height), and fixing the component once fixes all three pages.

## 2. Every page opens with the identical hero treatment

Home, About, Studio, How It Works, Wavia Core, Wavia Shield, Pricing, Privacy Policy, Terms, and Contact — all ten pages use the same device: a soft orange radial glow positioned top-left-of-center behind the H1, on an otherwise plain background. It's a nice effect once. Across ten consecutive pages it becomes the site's version of the badge-repetition problem on the main VERTEX/studio site — recognizable, then invisible, then slightly templated-feeling.

**Fix, not a full redesign:** keep the glow for the homepage and maybe one or two flagship pages (Wavia Core, Wavia Shield — the two product pages where the glow's warmth reinforces "premium infrastructure"). For the rest — Privacy Policy, Terms, Contact, How It Works — drop the glow and let those pages be plainer/faster to read. Legal pages in particular don't need the same visual weight as the homepage; right now they're getting identical treatment to the hero, which dilutes the hero's impact.

## 3. Icon set reads generic

The line icons used throughout (chat bubble, lightning bolt, globe/language, calendar, shield, headset, phone, person) look like a default icon library (Lucide/Feather-style) used as-is. This isn't wrong exactly — but for a voice-AI product whose whole pitch is "not robotic, feels human," a custom or at least customized icon treatment (consistent stroke weight tuned to the brand, or a couple of bespoke icons for the highest-visibility spots like the four "What it's actually like" features) would reinforce the brand more than a stock set does. Lower priority than §1 and §2, but worth doing once those are fixed.

## 4. What's already working well — don't touch these

- **The "Tap to talk" interactive demo** on the homepage is the single best thing on the site — a real, try-it-now interaction rather than a screenshot or a promise. Lean into this more, not less (see §6).
- **Light/dark mode** is implemented properly, not just inverted — text weights and the orange accent both hold up in both modes across every page shown.
- **The numbered-circle timeline pattern** (01→02→03→04, connected by a vertical line) on the How It Works and Studio pages is a clean, legible pattern once the whitespace gap above it (§1) is fixed. Don't replace it — it's doing real work, unlike the badge patterns on the main site.
- **Wavia Core's code snippet** ("Start a call in nine lines") is exactly the right move for a developer-facing page — real, readable, syntax-highlighted code instead of a mock terminal. This is the opposite of the fake-`pytest`-output problem flagged on the main VERTEX/studio site — keep this pattern, and consider giving Wavia Shield an equivalent concrete artifact (an architecture diagram, not code, since that page is B2B/compliance-focused).
- **Pricing table** is a clean, standard three-tier layout with the middle plan appropriately highlighted — no notes here, it's doing its job.

## 5. Minor items

- The stat row on the homepage (`<500ms`, `99.9%`, `4`, `0`) is clean but floats in a lot of empty space above and below it — could sit tighter to the hero or gain a subtle connecting visual (a thin divider, or small icons per stat) so it reads as one unit rather than four disconnected numbers.
- Same latency-claim caution as the main site: `<500ms` (homepage stat) and `sub-400ms` (About page copy) should be verified as currently true before this goes live publicly — a technical/developer audience (Wavia Core's page is clearly speaking to them) will hold you to a specific number like this.
- "Private. Period." section and the four data-privacy list rows (No-recording mode, Sensitive data stays internal, etc.) are underdesigned relative to the rest of the site — plain text rows with a check-adjacent icon, sitting in a large otherwise-empty card. This is a genuine trust/compliance section (relevant to Wavia Shield's HIPAA/SOC2 audience) and could carry more visual weight — e.g., styled more like the Wavia Shield feature cards (icon + heading + body in a bordered card) rather than a bare list.

## 6. Motion — where it's most worth adding

Unlike the main site (which needed motion added everywhere as a first pass), wavia already has interactivity, so the highest-leverage next step is layering in scroll-based motion and richer states on top of what exists:

- **Scroll-triggered reveals** (fade + slight upward translate, staggered) for: the four "What it's actually like" feature rows, the three sub-product cards, and the FAQ list — same technique recommended for the main site (Framer Motion `whileInView`, ~0.5-0.6s duration, eased out).
- **The waveform/voice icon** — animate it continuously (subtle pulsing bars) rather than static, both in the hero's small waveform graphic and in the "Tap to talk" demo's idle state, so the page signals "this is a live voice system" even before interaction.
- **Stat counters** — animate the four homepage stats counting up from 0 on scroll-into-view rather than appearing as static text; small detail, reinforces "real numbers" over "marketing copy."
- **FAQ accordion** — verify the expand/collapse already has a smooth height transition (can't confirm from static screenshots); if it's an instant snap, add an eased height animation (~0.3s).
- **Pricing card hover** — a subtle lift/shadow increase on hover for the two non-highlighted tiers would help them feel as tappable as the highlighted middle one.

## 7. Priority order

1. **Fix the whitespace gaps** (§1) — this is the one item that looks like an actual defect rather than a design opinion; fix before anything else.
2. **Vary or reduce the repeated hero-glow treatment** (§2) — second highest impact, mostly a matter of removing the effect from lower-priority pages.
3. **Motion pass** (§6) — layer onto what's already working, doesn't require restructuring anything.
4. **Icon set + Private/Period section styling** (§3, §5) — polish items, do once the above are settled.

## 8. One cross-site note, not an action item

wavia's orange-on-cream/dark identity is entirely its own, distinct from VERTEX/studio's navy-and-brass system — that's a reasonable choice given wavia is a consumer/developer-facing product while VERTEX/studio is positioned as an enterprise consultancy. Flagging only so it's a conscious choice rather than an accident: if you ever want the two sites to feel like one visible ecosystem (beyond the "A product of Vertex Studio" footer credit), that would mean deliberately threading one shared element between them — not a full palette match, just something like a shared typeface or a shared motion language — rather than something to fix now.
