# Wavia — Two Design Themes (Step 2 proposal)

**Status:** proposal for Hamzi's decision. Nothing is built yet.
**Branch:** `hamziTest` (created from the latest `main`).
**Date:** 29 Oct 2026.

---

## 0. What this document is, and what it is not

This is the Step 2 deliverable: **two complete, buildable design themes** for the Wavia website, presented side by side so you can pick one. Every section is a suggestion, not a verdict. Judgement calls are logged in §7, open questions in §8.

It is **not** the Step 3 game plan (scroll story, sitemap, section-by-section copy). That is built after you choose.

### What I read

| Source | Status |
|---|---|
| Website repo (`WAVIA_WEBSITE`), branch `main` @ `83f771c` | Read: `src/theme.css`, `docs/wavia_brandkit.html`, `docs/wavia-visual-design-audit.md`, `docs/namingclaude.txt`, package/build config, page inventory |
| Secrets check on the website tree (§9f) | **Clean** — no `.env`, key or credential file in the tree |
| Your brief (§1–§9) | Read in full |
| Code repo (the product truth) | **Not reachable from this workspace.** Only the website repo is connected to this Cloud session, so I could not open the SDK docs, blueprint, pricing guide or Agent Studio screens. No product fact below is invented — anything I could not verify is marked as unverified and carried as an open question |
| The two Dribbble videos | **Not viewable here.** This environment has no browser and no video playback. I worked from the extracted palette, layout description and motion analysis already in the brief (§5c), not from watching the clips. Flagged as a limitation; worth re-checking the themes against the videos yourself |

Everything about *what Wavia is* in this document comes from your brief. Everything about *how it looks* is my proposal.

---

## 1. The shared spine (identical in both themes)

The two themes differ in polarity, type, colour and logo — **not** in structure, copy or motion logic. That is deliberate: with one variable group changed, your choice is purely a visual one, and the winning theme can drop straight into Step 3.

Both themes share:

1. **The scroll story (11 beats).** Hero live demo → trailer → proof strip → one-stack diagram → use cases → how it works → pricing → privacy → developers → enterprise/custom → giant-wordmark footer.
2. **Section order for "what we do":** custom setup first → businesses second → developers third.
3. **The hero proof object is the live demo widget**, not a phone mock-up. Shot 1 centres a phone; Shot 2 centres a dashboard sphere. Ours centres the thing you can actually talk to.
4. **Urdu-first.** First scenario chip is Urdu, first use-case clip is Urdu, first language listed is Urdu in the demo. Urdu is never set in a Latin face — `Noto Nastaliq Urdu` with `Baloo Bhaijaan 2` fallback, `direction: rtl`, extra leading.
5. **One unbroken stroke as the brand mark.** Both themes drop the brand kit's five-bar waveform. Five bars is the universal voice-AI pictogram (ElevenLabs, Vapi, Retell all use it) and it says "audio file", not "we own the loop". A single continuous line that enters as a dot, rises, dips and exits as a dot reads as *turn-taking* — listen, think, speak — which is the actual differentiator in §2 of your brief. The brand kit's wave survives as the *idea*, not the drawing.
6. **Motion system** (§6) — same GSAP/Lenis grammar, tuned per theme.
7. **Copy.** Same headline, same subcopy, same proof numbers, same CTAs in both previews, so the comparison is fair. Headline recommendation is in §8.3.

---

## 2. Theme A — **Night Signal** (dark direction)

**The idea in one line:** the page is a dark stage with one warm light on it, and that light is the live call.

Reference lineage: Shot 2 (Navi AI) — near-black, iridescent glow, glass, tall condensed caps — re-tuned from fintech-cold to voice-warm. Not a copy of it: the aurora is amber-rose, not cyan-magenta, and the glass is warm, not clinical.

### 2.1 Typography

| Role | Face | Fallback | Use |
|---|---|---|---|
| Display | **Archivo** (variable, `wdth 75–125`, `wght 400–900`, set at **width 82 / weight 800**) | `'Archivo', 'Helvetica Neue', Arial, sans-serif` | Hero + section headlines, uppercase, `letter-spacing: -0.02em`, `line-height: 0.88` |
| Body | **Instrument Sans** 400/500 | `'Instrument Sans', 'Inter', system-ui, sans-serif` | Paragraphs, UI labels, 17–18px, `line-height 1.55` |
| Mono | **JetBrains Mono** 400/500 | `'JetBrains Mono', ui-monospace, monospace` | Latency, code, scenario IDs, section numbers, kickers |
| Urdu | **Noto Nastaliq Urdu** 400–700 | `'Baloo Bhaijaan 2', 'Noto Naskh Arabic', serif` | All Urdu, `dir="rtl"`, `line-height 2.05` |

Why Archivo over the brand kit's Space Grotesk: the references both use enormous display type as the primary design object. Space Grotesk at 120px is charming but soft; Archivo at width 82 / weight 800 gives the tall, tight, confident caps of Shot 2 while staying a neutral grotesque, so Urdu and product UI do not compete with it. Judgement call — logged in §7.

### 2.2 Colour

| Token | HEX / value | Where |
|---|---|---|
| `--bg` | `#0B0A08` | Page stage (warm near-black, never blue-black) |
| `--bg-deep` | `#060505` | Footer, trailer cinema band |
| `--surface` | `#131110` | Solid cards |
| `--surface-2` | `#1B1815` | Nested panels, code block |
| `--glass` | `rgba(255, 243, 228, 0.045)` + `backdrop-filter: blur(18px)` | Hero demo, floating cards, nav |
| `--border` | `rgba(255, 240, 222, 0.10)` | Hairlines |
| `--border-strong` | `rgba(255, 240, 222, 0.20)` | Hover, focus rings, diagram rails |
| `--text` | `#F6EFE3` | Headlines, body |
| `--text-muted` | `#A79C8B` | Subcopy, captions |
| `--text-faint` | `#6E6557` | Disabled, footnotes |
| `--accent` | `#FF8A1F` | Marigold signal — primary CTA, live dot, active pipeline stage |
| `--accent-hover` | `#FFA044` | — |
| `--accent-soft` | `rgba(255, 138, 31, 0.14)` | Chips, tints |
| `--accent-glow` | `rgba(255, 138, 31, 0.30)` | 120px blur behind the demo |
| `--rose` | `#FF5C8A` | Aurora mid-stop only — never a UI colour |
| `--violet` | `#7B6BFF` | Aurora far-stop only — never a UI colour |
| `--verify` | `#37D7C4` | "Connected", success, second accent spark |
| `--shield` | `#C6A15B` | Brass, compliance/Shield marks |
| `--alert` | `#FF5A5F` | Errors |

Contrast: `#F6EFE3` on `#0B0A08` ≈ 17:1. `#A79C8B` on `#0B0A08` ≈ 7:1. `#FF8A1F` on `#0B0A08` ≈ 8:1. Black text on `#FF8A1F` ≈ 8:1 — so the primary button is **accent fill, near-black label**, never white-on-orange (which would fail at 3.1:1).

The aurora: one fixed layer behind the hero and the trailer, three radial gradients (`accent` → `rose` → `violet`), 22% opacity, 140px blur, drifting 18s. It is the only place those two cool stops appear, so the palette stays warm everywhere a user reads.

### 2.3 UI language

- **Radii:** cards `28px`, feature panels `36px`, media `32px`, inputs `16px`, pills `999px`.
- **Borders:** 1px hairline at 10% cream; the top inner edge of every glass card gets a 1px `rgba(255,255,255,0.06)` highlight so glass reads as glass.
- **Shadow/glow:** ambient `0 40px 120px -32px rgba(0,0,0,0.9)`; accent glow `0 0 140px rgba(255,138,31,0.22)` only behind the demo and the trailer poster. No drop shadows on text.
- **Buttons:** primary = 56px pill, accent fill, ink label, `hover: translateY(-1px) + glow`. Secondary = 56px pill, glass, hairline border, cream label. Icon buttons = 48px circles.
- **Chips / pill callouts:** glass, hairline, mono 12px uppercase, `letter-spacing 0.08em` — the Shot 2 device, used only in the hero and as scenario selectors.
- **Nav:** floating glass pill, centred, 72px tall, shrinks to 56px and gains a border on scroll. No full-width bar.
- **Section rhythm:** 168–200px vertical padding; sections divided by hairlines that fade out at both ends; each section's last element is deliberately clipped by the section edge so the next one peeks in.
- **Inputs:** 56px, glass, hairline, mono placeholder, accent focus ring at 40% + 1px inner border.
- **Inverse act:** none needed — the whole site is dark; one section (how it works) goes *lighter* (a `#1B1815` panel band) to break the rhythm.

### 2.4 Logo — "The Signal"

- **Mark:** one continuous 2px stroke on a 32×24 grid, round caps. Enters at left mid-height from a 4px dot → crest at 25% width → trough at 45% → **taller** crest at 68% → trough at 84% → exits into a 6px dot at right mid-height. Stroke gradient left-to-right: `#FF8A1F → #FF5C8A → #37D7C4` (the aurora compressed into the mark). The right-hand dot pulses 3s.
- **Small sizes:** below 24px the stroke disappears; the mark becomes the glowing amber dot alone (matches the brand kit's "below 24px, simplify to the dot" rule, kept).
- **Wordmark:** `wavia` lowercase, Archivo 800 at width 88%, `letter-spacing -0.045em`, cream. The signal dot sits 0.14em after the final `a`, 0.18em diameter, accent, pulsing — the same dot as the mark's exit point, so lockup and mark are visibly the same object.
- **Lockup:** mark left, gap equal to 0.5× mark height, dot baselines aligned. Clear space = mark height on all sides.
- **Departure from brand kit v1.1:** new mark (unbroken line, not five bars) and new display face (Archivo, not Space Grotesk). Kept: warm-dark canvas, amber signal, mono for technical text, the pulsing end-dot. Reason: the kit's identity is *warm*, which we keep; its mark is *generic*, which we lose.

### 2.5 What Theme A is good at

The live demo reads as a lit object on a dark stage — exactly the Shot 2 effect. Glass + glow + giant condensed caps is the current premium-AI vocabulary, so it photographs well in a deck, on a phone, and in the trailer. Urdu in Nastaliq on near-black looks genuinely beautiful.

### 2.6 What Theme A risks

**Every voice-AI competitor is dark.** Vapi, Retell, ElevenLabs, Cartesia, Synthflow, PlayAI — all near-black with a glow. The designer-site brief (§4) says Wavia is unknown and the design must carry the brand; a dark glowing AI site is the *expected* answer, so it wins on polish and loses on recall. Mitigation: the amber-rose aurora and the serif-free but warm palette pull it away from the cyan-magenta default, and the giant wordmark footer is the recall device. Still the bigger risk of the two.

---

## 3. Theme B — **Marigold Market** (light direction)

**The idea in one line:** warm paper, burnt-marigold ink, and one dark act in the middle — a printed thing, not a glowing thing.

Reference lineage: Shot 1 (Crypto.Hub) — flat field, huge black grotesque, heavy radii, pill callouts, near-black section, circular photo cluster, giant closing block — executed in the research's recommended Direction 1 (Marigold Market) rather than acid lime, because lime belongs to a different brand.

### 3.1 Typography

| Role | Face | Fallback | Use |
|---|---|---|---|
| Display | **Bricolage Grotesque** 600–800, optical size 96 | `'Bricolage Grotesque', 'Archivo', Arial, sans-serif` | Hero + section headlines, **mixed case** (not caps), `letter-spacing -0.045em`, `line-height 0.92` |
| Body | **Instrument Sans** 400/500 | `'Instrument Sans', 'Inter', system-ui, sans-serif` | 17–18px, `line-height 1.6` |
| Mono | **Space Mono** 400/700 | `'Space Mono', ui-monospace, monospace` | Section numbers, kickers, latency, pricing meta |
| Serif accent | **Instrument Serif** italic 400 | `'Instrument Serif', Georgia, serif` | One emotional phrase per page only ("Your calls are yours.") |
| Urdu | **Noto Nastaliq Urdu** 400–700 | `'Baloo Bhaijaan 2', 'Noto Naskh Arabic', serif` | All Urdu, RTL, `line-height 2.05` |

Why Bricolage: it is a warm, slightly quirky grotesque with real personality in the `a`, `g` and `t` — which is what makes a small brand look designed rather than templated. In caps it would look like every other AI site; in mixed case with tight tracking it looks like an editorial masthead. Judgement call — logged in §7.

### 3.2 Colour

| Token | HEX / value | Where |
|---|---|---|
| `--bg` | `#FFF6E5` | Mango-milk page field |
| `--bg-2` | `#FBEACD` | Alternating act band |
| `--surface` | `#FFFBF2` | Cards |
| `--surface-2` | `#F6E6C8` | Nested panels, code |
| `--ink` | `#1C1408` | Text, and the primary button fill |
| `--ink-muted` | `#6B5B45` | Subcopy |
| `--border` | `#E8D8BA` | 1.5px card rules |
| `--border-ink` | `#1C1408` | Selected/hover rules, diagram rails |
| `--accent` | `#B45309` | Burnt marigold — labels, live dot, active states, link underline |
| `--accent-hover` | `#93430A` | — |
| `--accent-soft` | `rgba(180, 83, 9, 0.10)` | Chips, tints |
| `--accent-2` | `#1E6B4F` | Palm green — success/verified, privacy marks, secondary labels |
| `--brass` | `#A8862B` | Trust/Shield marks only |
| `--dark-act-bg` | `#16120B` | The one full-bleed dark section (one-stack diagram) |
| `--dark-act-text` | `#FFF6E5` | — |
| `--alert` | `#B3261E` | Errors |

Contrast: `#1C1408` on `#FFF6E5` ≈ 15:1. `#6B5B45` on `#FFF6E5` ≈ 6.2:1. `#B45309` on `#FFF6E5` ≈ 5.1:1 (fine for labels, large text and 15px+ semibold; for long body links use `#93430A` at 6.3:1). `#1E6B4F` on `#FFF6E5` ≈ 6.4:1. Cream `#FFF6E5` on marigold `#B45309` = 5.1:1, so marigold is safe as a button fill with cream text — but the primary button is **ink** (see below), and marigold is the accent, not the workhorse.

### 3.3 UI language

- **Radii:** cards `24px`, media `32px`, feature panels `40px`, pills `999px`, inputs `999px`.
- **Borders:** 1.5px `#E8D8BA` at rest, 1.5px ink on hover/selected. Flat colour blocks instead of soft shadows — the page is printed, not floating.
- **Shadow:** only on two things — the hero demo card and the trailer poster: `0 24px 60px -24px rgba(80, 52, 12, 0.35)`.
- **Buttons:** primary = ink `#1C1408` pill, cream label, 56px (Shot 1's black pill). Secondary = cream pill, 1.5px ink border. Text link = marigold with a 2px underline offset 4px.
- **Chips / pill callouts:** cream fill, 1.5px border, mono 12px — the Shot 1 device, used for scenario selectors and proof tags.
- **Nav:** flat cream bar, 1.5px ink bottom rule, wordmark left, three links centre, ink pill CTA right. Not floating — it belongs to the paper.
- **Section rhythm:** 128–160px padding; acts separated by full-bleed colour bands (cream → cream-2 → **dark act** → cream), each opened by a mono section number `01 — THE DEMO`. Section numbers are the spine of the page.
- **Inputs:** 56px, cream, 1.5px border, ink placeholder at 55%, marigold focus ring.
- **Inverse act:** the **how-it-works / one-stack section is the single dark act** — `#16120B` full-bleed, cream type, the pipeline drawn as a marigold trace. This is the polarity answer inside a light theme: one dramatic dark beat instead of a dark site.

### 3.4 Logo — "The Thread"

- **Mark:** a printed stamp. One 2.5px marigold line that begins as a filled 5px dot, rises into two hand-threaded loops (second taller than the first), and lands in a filled dot — control points deliberately off-centre so it reads *drawn*, not geometric. On the app icon / favicon it sits inside a 44px marigold circle as a cream thread.
- **Small sizes:** below 24px the thread drops; marigold dot plus a half-circle arc remains, legible as one mark.
- **Wordmark:** `wavia` lowercase, Bricolage 800, `letter-spacing -0.05em`, ink `#1C1408`; the dot after the final `a` is marigold, 0.16em, always present.
- **Lockup:** mark left, gap = thread height, wordmark baseline aligned to the thread's exit dot. Clear space = thread height on all sides.
- **Departure from brand kit v1.1:** same journey as Theme A (bars → one line), but rendered as ink-and-paper rather than light. Kept from the kit: warm cream canvas, amber/marigold accent, the pulsing end-dot, JetBrains-grade mono for technical text (swapped to Space Mono for the printed feel — logged in §7).

### 3.5 What Theme B is good at

**It is the open lane.** Nobody in voice AI runs warm cream and marigold — competitors are near-black, acid-lime, or clinical white. It is also the honest continuation of the existing brand kit, so the identity does not reset, and Nastaliq Urdu is far more legible on warm paper than on glass. Shot 1's structure gives the "designed, not templated" feel with flat colour, heavy radii and giant type, and the single dark act delivers the polarity punch of Shot 2 in the middle of the page instead of everywhere.

### 3.6 What Theme B risks

Light sites can read "friendly SaaS" rather than "premium infrastructure", which matters for the Shield/compliance buyer and for developer credibility. Mitigations: the dark act, the mono system, the oversized type, and an absence of soft pastel gradients. The marigold-on-cream pairing also needs discipline — if the accent is sprinkled everywhere the page goes orange-mush; the rule is accent for *live* states and labels only.

---

## 4. Side by side

| | **A — Night Signal** | **B — Marigold Market** |
|---|---|---|
| Polarity | Near-black stage, warm amber light | Warm cream paper, burnt-marigold ink |
| First impression | Premium, cinematic, "this is a live product" | Confident, editorial, "this brand has a point of view" |
| Display face | Archivo 800, width 82, uppercase, 0.88 leading | Bricolage Grotesque 800, mixed case, 0.92 leading |
| Body / mono | Instrument Sans / JetBrains Mono | Instrument Sans / Space Mono |
| Hero proof object | Glass demo card, accent glow behind it | Cream demo card, ink rule, marigold trace |
| Surfaces | Glass + hairline + glow | Flat colour block + 1.5px ink/oat rule |
| Radii | 28 / 36 / pill | 24 / 32 / 40 / pill |
| Signature motion | Aurora drift, glow pulse, pipeline light travelling the rail | Ink-line draw-on, colour-block wipe, stamp press, pipeline trace drawn as you scroll |
| Competitor distance | Low — dark AI is the category default | **High** — no voice-AI competitor is warm cream |
| Brand-kit continuity | Medium — keeps warmth + amber, changes type and mark | **High** — keeps cream/amber system, changes type and mark |
| Urdu legibility | Very good (warm light type on black) | **Best** (dark ink on paper, Nastaliq at speed) |
| Enterprise/Shield credibility | Strong out of the box | Needs the dark act + brass marks to earn it |
| Build cost | Higher (glass, blur, gradients, aurora perf) | Lower (flat fills, fewer composited layers) |
| Main risk | Looks like every other voice-AI site | Looks friendly rather than infrastructural |

---

## 5. How each theme carries the 11 beats

| Beat | Theme A | Theme B |
|---|---|---|
| 1 Hero live demo | Glass card floating in aurora; waveform lit amber; Urdu chip active | Cream card on marigold band; ink rules; marigold waveform trace; Urdu chip active |
| 2 Trailer | Full-bleed near-black cinema band, glow spill from the poster | Marigold full-bleed band, poster with ink frame, play button as ink circle |
| 3 Proof strip | Mono numerals, hairline dividers, accent tickers | Mono numerals on a cream-2 band, ink dividers |
| 4 One-stack diagram | Pinned; light pulse travels VAD→STT→LLM→TTS on the glass rail | Pinned dark act; marigold trace draws the pipeline, cream labels |
| 5 Use cases | Four glass cards; each reveals an Urdu-first waveform clip | Four cream cards on alternating bands; each reveals an Urdu-first clip with ink waveform |
| 6 How it works + code | Lighter `#1B1815` band, self-typing code in JetBrains Mono | Cream band with code on `#F6E6C8`, Space Mono — the only place mono carries body text |
| 7 Pricing | Three glass cards, middle one glowing, $29 in display caps | Three cream cards, middle one ink-outlined, $29 in display, mono meta |
| 8 Privacy | Sealed dark panel; brass Shield mark; "no recording" as a switch, not a sentence | `Instrument Serif` italic line — "Your calls are yours." — with the four guarantees as printed rows |
| 9 Developers | Code-first, mono, terminal glass, 5-minute quickstart | Code-first, ink panel, "nine lines" snippet as a printed specimen |
| 10 Enterprise/custom | Glow returns, quieter; white-glove timeline | Marigold band, numbered white-glove timeline, brass accents |
| 11 Footer | Giant WAVIA in Archivo, clipped by the viewport bottom, aurora behind, dot pulsing | Giant WAVIA in Bricolage on marigold, ink rules, one CTA |

---

## 6. The motion system (shared)

Lenis smooth scroll + GSAP ScrollTrigger. One grammar, both themes:

1. **Reveal:** `blur(10px) → 0`, `y: 28 → 0`, `opacity 0 → 1`, 0.6s `power3.out`, stagger 0.06s. Never a bounce.
2. **Hero:** waveform idle-breathes (0.9–1.15 scaleY, 2.4s), mic button pulses while "listening", aurora/ink band drifts, the demo card's glow intensifies 200ms after a scenario chip is picked.
3. **Pinned one-stack:** the section pins for 1.2 viewports; the pulse walks VAD → STT → LLM → TTS; each stage lights its label and drops its latency/stat in mono. The pin releases exactly as the fourth stage completes.
4. **Numbers:** count up once, on enter, 900ms, ease-out, mono. `prefers-reduced-motion` shows the final value immediately.
5. **Trailer:** scroll-scrubbed, poster → play. Click-to-play, never autoplay with sound.
6. **Words:** section headlines clip-reveal line by line (`overflow: hidden` + `y: 100%`), not per letter — per-letter is the tell of a template.
7. **Footer:** the giant wordmark rises 40px over 1.1s as it enters, then holds.
8. **Reduced motion:** every pinned section unpins, every reveal becomes a 1-frame opacity change, no scrubbing, no aurora drift.

Preference between the two: A leans on **light and drift** (glow pulses, aurora, glass highlights); B leans on **draw and press** (ink lines drawing themselves, blocks wiping in, stamp/letterpress on the logo). Same beats, different physics.

---

## 7. Judgement calls (and what the alternative was)

| # | Call | Alternative | Why |
|---|---|---|---|
| 1 | Drop the brand kit's five-bar waveform for a single unbroken line | Keep the bars, just redraw them | Bars = every voice-AI pictogram; a single line says "one loop, ours" |
| 2 | Theme A uses Archivo, not the kit's Space Grotesk | Keep Space Grotesk in both | Space Grotesk at display size is polite; the references need weight and width |
| 3 | Theme B uses Bricolage for display and Space Mono for mono | Space Grotesk + JetBrains Mono (kit) | Bricolage gives the editorial personality; Space Mono supports the printed feel. JetBrains stays a fallback and returns if code legibility suffers |
| 4 | Theme A's aurora is amber → rose → violet | Cyan → magenta (Shot 2 exactly) | Cool aurora on a warm brand reads borrowed; amber keeps the warmth |
| 5 | Theme B puts the only dark section at "how it works" | Dark footer only | Gives a polarity beat mid-scroll, where attention dips |
| 6 | Primary button is ink (B) / accent (A), never white-on-orange | White label on marigold | White on `#B45309` fails 4.5:1; the fix is a different button, not a lighter orange |
| 7 | Hero proof object = the live demo widget | Phone mock-up (Shot 1) or dashboard sphere (Shot 2) | The demo is the product; the refs' objects are stand-ins for products you can't try |
| 8 | Both themes keep Instrument Sans for body | Inter (kit) | Instrument Sans is warmer at the same neutrality and pairs with both displays |
| 9 | Mixed-case display in B, uppercase in A | Same case treatment in both | The case *is* the polarity contrast: printed editorial vs cinematic caption |

---

## 8. Open questions — recommendations, not decisions

**8.1 Polarity.** Recommendation: **B (light)**, because dark is where every competitor already sits and the brief's whole premise is that Wavia is unknown and must be *remembered*. Alternative: A if the priority is "looks like a premium AI company on first scroll" and the trailer/hero footage is strong enough to carry a dark page. **Your call — this is the Step 2 stop.**

**8.2 Latency number.** Three exist: `<283ms` (brand line), `sub-400ms` (live site), `<450ms` (code-repo blueprint target for first audio). Recommendation: **use `<450ms` publicly, everywhere**, described as "first audio", because it is the engineering target rather than a best-case measurement, and it cannot be contradicted. Keep `<283ms` unpublished until it is measured end-to-end on production numbers and you are willing to defend it in a sales call. Do not run two numbers on two pages — that is how the current site got caught. **Needs your confirmation.**

**8.3 Hero headline.** The blueprint draft is *"Talk to it."* Recommendation: **"It picks up. In Urdu."** Reasons: it names the actual job (answering the phone), stakes the open lane (Urdu, which no competitor demos), and leaves the CTA to do the demo. *"Talk to it."* is a CTA masquerading as a headline, and it duplicates the button text. Alternatives considered: "The phone answers itself." (clever, less concrete), "Your next receptionist speaks four languages." (clear, longer, less memorable), "Hire a voice that never sleeps." (generic). Subcopy under it: "Wavia answers your business line, books the appointment and writes it into your CRM — in English, Urdu, Arabic or Malay. Interruptible, ~450ms to first audio, and never a vendor's logo in sight." **Needs your sign-off.**

**8.4 Studio subdomain.** Recommendation: **`studio.`** — it matches the repo convention, it names the product (Agent Studio), and `app.` is the most overused subdomain in SaaS. **Needs your confirmation before DNS.**

**8.5 Spice Hut outcome.** No claim appears anywhere in this proposal. Nothing is publishable until you give me the exact Wavia-specific result, with the number and the timeframe. **Blocked on you.**

**8.6 Code repo unavailable.** I could not read the SDK docs, blueprint or Studio screens from this workspace. Nothing in this proposal depends on them, but Step 3 (sitemap, section copy, developer page, Studio placeholders) does. Options: (a) connect the code repo to this session, (b) paste the specific files, or (c) accept that Step 3 is written against the brief only and marked unverified. **Needs your choice before Step 3.**

**8.7 The two Dribbble videos.** I could not watch them here. If they matter to the final call, watch them yourself against these two themes, or give me screenshots/frames and I will re-tune.

---

## 9. What happens when you choose

Step 3, next session, on this same `hamziTest` branch:

1. Re-read only the chosen theme spec + this file + `PROGRESS.md`.
2. Write `docs/design/scroll-story.md` — all 11 beats with purpose, headline, subcopy, layout, motion and what each proves, plus the full sitemap across marketing / Studio / docs, subdomain plan and Studio placeholder plan.
3. Stop. No code until you sign off on the story.

Then, section by section, one per session: scaffold → hero → custom → businesses → developers → proof/diagram → pricing/privacy → trailer/footer → polish.
