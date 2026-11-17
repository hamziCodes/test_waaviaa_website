# Wavia — Scroll Story & Sitemap (Step 3)

**Status:** Step 3 deliverable, signed off. **Theme B — Marigold Market (light) locked 30 Oct 2026.** Session 0 (tokens & shell) is built and awaiting shell sign-off; no page beats built yet.
**Branch:** `hamziTest`.
**Date:** 30 Oct 2026 (rev 3).
**Reads:** `docs/design/theme-proposal.md`, `docs/namingclaude.txt`, `docs/wavia-visual-design-audit.md`, `src/**` (current site), `package.json`.

### Revision note (rev 1 → rev 2)

| # | Change | Why |
|---|---|---|
| 1 | Story rewritten to be **theme-agnostic**; every theme-specific note is now an explicit `IF THEME A` / `IF THEME B` conditional | Theme A/B is your choice, not mine. "Continue" was not "pick B". |
| 2 | Beat order replaced with the mandated Step 3 order (landing → custom setup → businesses → developers → trailer → proof → one-stack → pricing → privacy → developers-deep → enterprise → footer). **The white-glove build section moved from position 10 to position 2**, and there are now **12 beats**, not 11 | The custom path has to be offered before the self-serve path, and the old order buried it at the bottom |
| 3 | Beat 1 demo changed from a live microphone demo to **pre-recorded real calls + a branching demo**, honestly labelled. Kicker `LIVE DEMO — NO SIGN-UP` deleted | There is no open live demo at launch |
| 4 | Trailer returned to the **60–90s** spec. Rev 1's 40s (and its 30–45s gate) were an unannounced narrowing — reverted | Specs change by agreement, not by edit |
| 5 | The company name moved from the decisions table to the gates | Not a confirmed name |
| 6 | All references to the studio that built the site deleted, including the Beat 12 footer line | Settled rule: that name appears nowhere on this site |
| 7 | Section numbering marked as optional chrome, since numbering is a spine decision that depends on the theme | — (reversed in rev 3: B makes the numerals the spine) |

### Revision note (rev 2 → rev 3)

**Theme B locked by Hamzi, 30 Oct 2026, with four conditions:** never pure white — warm paper/cream only, ink type; the one-stack pipeline stays the single dark act; the footer stays full-bleed marigold with the giant wordmark; no theme toggle. All 14 `IF A` / `IF B` brackets are collapsed to B, the section numbers are now fixed rather than optional chrome, and §2.1 and gap 8.1 are closed.

---

## 0. What this document is

The Step 3 deliverable: the 12-beat scroll story with purpose, headline, subcopy, layout, motion and gate for each beat, plus the sitemap, the subdomain plan and the Studio placeholder plan. Copy is final-draft quality, not lorem; edit in place.

**Theme B — Marigold Market, locked.** Warm paper (`#FFF6E5`) and ink (`#1C1408`) with burnt marigold (`#B45309`) as the accent, palm green (`#1E6B4F`) for verified states and brass (`#A8862B`) for Shield marks only. Display is Bricolage Grotesque 800, body Instrument Sans, technical text Space Mono, one serif italic (Instrument Serif) for the privacy line, Urdu in Noto Nastaliq. Radii are heavy (cards 24px, media 32px, panels 40px), rules are 1.5px, shadows are earned by exactly two elements. Motion is **draw and press**: ink lines drawing themselves, blocks wiping in, a stamp on the logo.

**Four standing conditions from the sign-off, binding on every beat:**

1. **Never pure white.** Paper and cream only — `#FFF6E5`, `#FBEACD`, `#FFFBF2`, `#F6E6C8`. No `#FFF`, no cool grey, no glass.
2. **Ink type.** Headlines, body and rules are ink and muted brown; the marigold is for live states and labels, never for paragraphs.
3. **The one-stack pipeline is the single dark act.** `#16120B` appears exactly once on the page — Beat 7 — and nowhere else, including the trailer, which is specified below as a framed poster rather than a black band.
4. **The footer is full-bleed marigold with the giant wordmark**, and **there is no theme toggle** anywhere in the product.

### Limitation

The code repo (SDK docs, blueprint, Studio screens) is **not connected** to this workspace. Every product claim below is either (a) already published on the current site, (b) in the brand kit / naming doc, or (c) marked **UNVERIFIED** and blocked on you. Nothing is invented, and nothing is asserted as fact that I could not source.

---

## 1. The five sentences this site has to land

Unchanged, and the editorial rule for every beat:

1. **"It answers my business phone."** — the job, not the technology.
2. **"It answers in Urdu."** — the open lane; no competitor demos it.
3. **"I can talk over it."** — the proof of full-duplex.
4. **"It books the appointment / writes the CRM."** — action, not chat.
5. **"My calls are mine."** — the reason a clinic or a bank says yes.

If a beat does not serve one of those five, it does not ship.

---

## 2. Working assumptions (not decisions — none of these are mine to make)

These are the proposal's own recommendations, carried forward so the story can be written at all. Each one is still yours to overturn, and each is reversible in one line.

| # | Item | Working assumption | Source | Status |
|---|---|---|---|---|
| 2.1 | Polarity / theme | **B — Marigold Market (light).** Warm paper only, never pure white; ink type; one-stack is the single dark act; footer full-bleed marigold; no theme toggle | your sign-off, 30 Oct 2026 | **locked** |
| 2.2 | Latency claim | **"~450ms to first audio"**, one number, every page | proposal §8.2 rec | assumption |
| 2.3 | Hero headline | **"It picks up. In Urdu."** | proposal §8.3 rec | assumption, gated (see Beat 1) |
| 2.4 | Studio subdomain | **`studio.`** | proposal §8.4 rec | assumption |
| 2.5 | Sub-brand scheme | **Core / Studio / Shield** (Scheme B) | `docs/namingclaude.txt`, current site | in use |
| 2.6 | Pricing | **$29 Studio / $149 Core / Custom Shield**, monthly + usage | `src/pages/Pricing.tsx` | needs repricing confirmation — §8 |
| 2.7 | Spice Hut | **No claim anywhere.** No logo, no number, no "trusted by" | proposal §8.5 | correctly absent |
| 2.8 | Trailer footage | **Does not exist yet.** Beat 5 is specified at 60–90s and ships in poster-only state until the clip exists | audit; no video in repo | gate — §8 |

**Deliberately absent from this table:** the company name. It is not a working assumption, it is an open question (§8, gap 8.3).

---

## 3. The 12 beats

Each beat: **purpose → what it proves → layout → copy → motion → gate.**

Section labels are given as `NN — LABEL`, and in Theme B **the mono numerals are the spine of the page** — they render, they do not decorate. The hero and the footer carry none; every beat between them does.

---

### Beat 1 — Landing / hero

**Purpose.** State the job and the open lane in one breath, then hand the visitor something real to poke.
**Proves.** This is a working phone product, in Urdu, and it is not a chatbot landing page.

**Layout.** Full-bleed. Left column (5/12): kicker, H1, subcopy, two CTAs, one mono proof line. Right column (7/12): the **demo card**. Below both, at the fold's bottom edge: the language/scenario chip row (`اردو · English · العربية · Bahasa Melayu`), first chip active, RTL correct.
Mobile: H1 → demo card → CTAs. **The demo comes before the CTAs on mobile** — a caller on a phone gets the call before being asked to sign up.

**Copy.**
- Kicker (mono, 12px): `HEAR A REAL CALL — 20 SECONDS`
- H1: **It picks up. In Urdu.**
- Sub: *Wavia answers your business line, books the appointment and writes it into your systems — in English, Urdu, Arabic or Malay. Interrupt it mid-sentence; it stops and listens.*
- CTA primary: `Book a walkthrough →` · secondary: `See the pricing` (→ `/pricing`)
- Proof line (mono): `~450ms to first audio · 99.9% uptime · no recording by default`

**The demo card — honest by construction.** This is the most important copy decision on the page. Three modes, each labelled in the interface, no mode pretending to be another:

1. **Recorded calls (default).** A real call, captured from the live engine, playable in-card: waveform trace, `RECORDED CALL` tag in mono, duration, scenario name. Chips switch between Urdu / English / Arabic / Malay recordings of the same scenario. This is what most visitors will use, and it costs nothing to serve.
2. **Branching demo.** A guided script tree: the visitor picks *what the caller says* from two or three visible options, the trace responds with the next recorded line, and one branch is always an **interruption** — pick it, and the trace cuts, dips and resumes. Labelled `BRANCHING DEMO · SCRIPTED`, with the branch path shown as it goes. This is how "you can talk over it" gets proven without a microphone.
3. **Book a live call.** The CTA. A human on the other end of a real number, not a widget.

**There is no open microphone state on the landing page.** No `waiting / listening / thinking / speaking` lifecycle, no permission prompt, no spinner that never resolves. The demo is recorded, branching, or a human — and it says which.

**Motion.** H1 clip-reveals line by line (0.6s, `power3.out`). Card fades up 28px, then its trace idles at 2.4s. Trace draws left-to-right once (1.1s) then breathes. Chip switch: 200ms change on the card, no layout shift. Branch selection: 150ms cut on the trace, the interruption branch visibly truncates the waveform rather than fading it.

**Type & surface.** Cream card (`#FFFBF2`) on the paper field, 1.5px border `#E8D8BA`, 32px radius, marigold trace, and the page's only other shadow (`0 24px 60px -24px rgba(80,52,12,0.35)`). H1 Bricolage Grotesque 800, sentence case, `-0.03em`. No aurora, no glow, no glass — the card sits on the paper like a printed insert.

**Gate.** The Urdu recordings must be real engine output, recorded before launch, with the caller's consent if a human is on the line. If Urdu audio is not recorded in time, the headline falls back to **"It picks up."** and Urdu moves to the subcopy. Decide at build time, not in copy review. **Never ship a synthetic-sounding TTS sample labelled "a real call."**

---

### Beat 2 — Custom-made setup: we build the first one with you

**Purpose.** Before offering self-serve, offer the path that most of this market actually wants: someone else does it. This is the beat that converts a clinic manager who has no intention of configuring an assistant at 11pm.
**Proves.** There is a human who will build it, on your number, in your language, this week.

**Layout.** Full-bleed band, offset from the hero by generous space (this is a chapter break, not a continuation). Left (6/12): section label, H2, two lines, the two-path choice, CTA. Right (6/12): a **four-step build strip** — vertical on desktop, each step with a mono duration and a one-line deliverable, joined by a hairline. Below the whole block: a single centred line that hands the impatient reader to the self-serve path.

**Copy.**
- Label: `02 — DONE FOR YOU`
- H2: **We build the first one. You take the calls.**
- Sub: *Tell us what your callers ask and what should happen next. We build the assistant, train it on your scripts, connect your number and hand it over working — usually inside a week.*
- Steps: `01 Script call` (`~30 min`) · `02 Build & train` (`2–3 days`) · `03 Test on your line` (`1 day`) · `04 Handover` (`live, with a named contact`)
- Two-path line, mono: `DONE-FOR-YOU · SELF-SERVE` — and the second half is a link
- CTA primary: `Book a build call →` · secondary: `Or set it up yourself in 5 minutes →` (→ Beat 4)
- Reassurance line: *No setup fee on Studio and Core. You own the number and the scripts either way.*

**Motion.** Steps reveal in sequence with a 0.06s stagger as the strip enters; each step's hairline segment draws in. No pin, no scrub — this section should feel like a handshake, not a ride.

**Type & surface.** Cream-2 band (`#FBEACD`), ink hairlines between steps, steps numbered in marigold Space Mono. The "done-for-you" half of the two-path line is set in ink, the "self-serve" half in muted with a 2px underline offset 4px.

**Gate.** "Usually inside a week" is a promise about your own delivery capacity. Confirm it or cut to *"we'll tell you the date on the call."* Do not print a turnaround you cannot staff.

---

### Beat 3 — Businesses: four calls, Urdu first

**Purpose.** Move from "it works" to "it works for a business like mine."
**Proves.** The product has shape: it books, routes, answers and qualifies — not just chats.

**Layout.** Section label `03 — IN THE FIELD`. Four cards in a 2×2 grid (single column on mobile), alternating band tones so the block does not read as a wall. Card: mono scenario ID, H3, two-line description, and an inline **mini waveform** that plays a 6–10s **recorded** clip of that exact call on click. Urdu clip in card 1, always.

**Copy.**
1. `SC-01 · CLINIC` — **The 9pm appointment.** *A patient calls after hours in Urdu. Wavia finds the next open slot, books it, and confirms by SMS.*
2. `SC-02 · SALON` — **The double booking.** *Two callers, one stylist, one slot. The second call gets the next available time instead of a busy tone.*
3. `SC-03 · SERVICES` — **The "is anyone there?"** *A caller wants a human. It takes a message, tags it urgent, and routes it to the on-call phone.*
4. `SC-04 · PROPERTY` — **The qualification.** *Twelve enquiries, four genuine. Wavia asks the three questions that matter and writes the answers into the CRM.*

**Motion.** Cards reveal 0.06s stagger. Clip plays inline; the waveform animates only while audio is actually playing and stops if the card leaves the viewport. Only one clip plays at a time.

**Type & surface.** Cards on cream (`#FFFBF2`) with a 1.5px `#E8D8BA` rule at rest and ink on hover; scenario IDs in Space Mono 12px; the play state is marigold, and the clip's waveform is marigold while playing and ink-muted at rest.

**Gate.** Every clip must be a real recording from the engine in that scenario's language. **Do not ship a card without its clip** — two playable cards beat four silent ones.

---

### Beat 4 — Developers: the specimen

**Purpose.** Prove engineering credibility to the reader who will judge the code, not the copy — and do it early, because for the technical buyer it is the real proof.
**Proves.** The SDK is real, small, and interruption is on by default.

**Layout.** Cream/dark band, two columns. Left: label, H2, two lines, three mono links (`SDK reference`, `Quickstart`, `Status`). Right: the nine-line snippet, mono, one syntax colour, copy button top-right that confirms in place. Under the snippet: one row of four capability tags (streaming, tool calls, telemetry, webhooks) — no cards, no icons.

**Copy.**
- Label: `04 — BUILD`
- H2: **Nine lines to your first call.**
- Sub: *Streaming audio in, streaming audio out, and `interruptible` on by default. Same engine that answers the phone.*
- Snippet: as in `src/pages/ForDevelopers.tsx` — **verified against the real SDK before publish** (package name, method names, the `interruptible` flag).
- CTA: `Get an API key →` · `Read the docs →` · and a quiet link: `Everything else it does →` (→ Beat 10)

**Motion.** The snippet fades in as a block — it never types itself out. Engineers read code; they do not watch it appear. Copy button: 200ms state change, `Copied` for 1.6s.

**Type & surface.** Code block on the nested panel tone (`#F6E6C8`), Space Mono, one syntax colour only — marigold for strings and keywords. Copy button top-right, ink outline, confirms in place.

**Gate.** If the SDK is not published to npm, this beat says `Early access — request a key` and the snippet is labelled as a preview. Never imply `npm install` works when it does not.

---

### Beat 5 — Trailer: a whole call, unbroken

**Purpose.** Show one complete call, start to finish. This is the credibility beat that copy cannot buy.
**Proves.** It handles a real caller — accent, interruption, a mid-call change of mind — not a scripted demo.

**Layout.** Full-bleed band. Centre: 16:9 poster, generous radius, ink frame. Overlay: a mono timestamp strip at the bottom and a circular play control. Below: one line of context, left-aligned — not a caption essay.

**Copy.**
- Label: `05 — THE CALL`
- Line: *A real inbound call, **60–90 seconds**, unedited. The caller interrupts twice; the booking still lands in the calendar.*
- While there is no footage, under the poster: *Footage in production — hear the same call in the demo above.*

**Spec.** **60–90 seconds.** Long enough that the caller's second interruption and a change of mind both fit inside one take; short enough that it can be watched without a commitment. Rev 1 narrowed this to 40s without saying so — that was a silent spec change and it is reverted. If a shorter cut is wanted later, it is a decision to be made in the open, not an edit.

**Motion.** Scroll-scrubbed poster scale (1.0 → 1.04) as it enters. Click-to-play only; **never autoplay with sound**. On play: poster fades out over 300ms, sound fades in.

**Type & surface.** No black band. The poster sits as a framed 32px media block on the paper field, 1.5px `#E8D8BA` frame, with the page's second and last shadow. **The dark act is reserved for Beat 7 alone** — a black trailer band would spend it in the wrong place.

**Gate (hard).** No clip exists. Beat 5 ships in **poster-only state** until a 60–90s real call with signed consent is in hand. A stock "AI voice" clip would be the most damaging thing on this site — worse than omitting the beat entirely. Until then the play control is visibly disabled and the fallback line is visible.

---

### Beat 6 — Proof strip: four numbers, one row

**Purpose.** Give the scanner a reason to keep scrolling without a paragraph.
**Proves.** Engineering discipline — each number is a spec, not a slogan.

**Layout.** Label `06 — BY THE NUMBERS`. One band, four cells, hairline dividers, numerals large in the display face, label in body, footnote in mono muted. Nothing else in the section. Sits tighter than a full chapter — 96px above and below — so it reads as an instrument panel.

**Copy.**
| Value | Label | Footnote |
|---|---|---|
| `~450ms` | to first audio | engineering target, end-to-end |
| `99.9%` | uptime | auto-failover across regions |
| `4` | languages | English · Urdu · Arabic · Malay |
| `0` | recordings kept | ephemeral mode, default on |

**Rules.** Count-up once on enter (900ms, ease-out). `prefers-reduced-motion` → final value immediately. **`~450ms` replaces both `<400ms` and `<283ms` everywhere on the site in the same commit** — two numbers on two pages is the mistake the audit called out.

**Type & surface.** Numerals in Bricolage 800 at 56px, values in ink, labels in ink at 15px, footnotes in Space Mono at 12px in muted brown, dividers as ink hairlines.

**Gate.** 99.9% is currently a marketing figure. Either label it "uptime target" or drop the cell. Do not print "guarantee" unless Shield contracts actually carry one.

---

### Beat 7 — One stack: the pipeline, pinned

**Purpose.** Explain *why* it is fast and interruptible in the only way a non-engineer will accept: by showing the hand-offs other products have, and ours does not.
**Proves.** It is one engine, not three vendors duct-taped together.

**Layout.** Label `07 — WHY IT'S FAST`. Pinned for 1.2 viewports. Centre: a horizontal rail `VAD → STT → LLM → TTS` drawn as one continuous trace over hairlines. Each stage: mono stage label, one-line plain-English gloss, and its latency contribution in mono (`~80ms`, `~90ms`, `~180ms`, `~100ms` — **UNVERIFIED, must match engineering's real budget before publish**). H2 above the rail, one sentence below.

**Copy.**
- H2: **One engine. Four jobs. No hand-offs.**
- Glosses: `Hears you stop talking (VAD)` · `Turns speech into text` · `Decides what to do` · `Speaks back — and stops when you do`
- Closing line: *Most voice agents stitch together four vendors. Every seam is a delay, and none of them are built to be interrupted. This is one loop.*

**Motion.** Pin, then the trace draws stage by stage as you scroll; each stage lights its label and drops its number as it completes. Pin releases exactly when TTS completes. Reduced motion: no pin, all four stages visible at once with numbers present.

**Type & surface.** **The page's single dark act.** `#16120B` full-bleed, cream (`#FFF6E5`) type, marigold trace and stage labels, state labels and numbers in Space Mono. Nothing else on the page is this dark, which is what makes it land.

**Gate.** The four stage numbers must come from the engineering budget. If they cannot be shared, remove the per-stage numbers and keep the stage names — on a page explicitly talking to engineers, an invented breakdown is worse than no breakdown.

---

### Beat 8 — Pricing: three lanes, one honest number

**Purpose.** Let the visitor self-select without a sales call.
**Proves.** The pricing is legible and the middle lane is the intended one.

**Layout.** Label `08 — PRICING`. Three cards, middle one emphasised with a heavier rule and a `MOST CHOSEN` mono tag. Price in the display face, `+ usage` in mono. Five features max per card. Under the grid: one mono footnote row (usage rate, overage, cancellation) — the thing every competitor buries.

**Copy.**
- H2: **Pay for the calls you take.**
- Lanes: `Studio $29/mo + usage` · `Core $149/mo + usage` · `Shield Custom`
- Footnote: *Per-minute usage billed monthly. Cancel anytime. No setup fee on Studio or Core.*

**Motion.** Cards rise 20px on enter, 0.06s stagger. No hover lift — a 2px border change only.

**Type & surface.** Cream cards on the paper field, 1.5px rules, the emphasised lane outlined 2px in **ink** (not marigold — the accent is for live states, not for emphasis), prices in Bricolage 800, `MOST CHOSEN` in Space Mono.

**Gate.** §8 — these numbers are inherited from the current site and are not confirmed as current. Also: "Start Building Free" on the Core card currently implies a free tier; if none exists, that CTA becomes `Read the docs`.

---

### Beat 9 — Privacy: the reason to say yes

**Purpose.** Turn the compliance buyer's biggest objection into the page's quietest, most confident section.
**Proves.** No recording, no training, no leakage — as defaults, not add-ons.

**Layout.** Label `09 — PRIVACY`. Left: one large **serif italic** line — *Your calls are yours.* Right: four printed rows, each with a mono index, an H3 and one sentence, separated by hairlines. A small shield mark sits above the serif line. No icon circles, no glass. It should read like a policy printed on good paper.

**Copy.** Four rows, from `TRUST_ITEMS` in `src/pages/Index.tsx`, each cut to one sentence:
`01 No-recording mode` · `02 Data fencing` · `03 Zero model training` · `04 Signed webhooks`
Closing link: `How Shield deployments handle compliance →` (→ `/shield`)

**Motion.** Rows reveal in a 0.05s stagger; the serif line uses the same clip-reveal as headlines. Nothing else moves — this section earns trust by being still.

**Type & surface.** Instrument Serif italic, ink on cream, at the largest text size on the page. Rows separated by ink hairlines. The Shield mark is the only brass on the page — no other gold, no metallic gradient.

**Gate.** HIPAA / SOC 2 / GDPR appear on the current site as if certified. **Certification status must be confirmed before any compliance badge renders.** Until then the copy says "HIPAA-ready architecture" / "SOC 2 in progress", or the rows stay capability-only.

---

### Beat 10 — Developers, deep: what you get to build with

**Purpose.** The second developer beat, for the reader who is now convinced and wants the surface area: what happens when it is not nine lines.
**Proves.** It is a platform, not a demo — and the operational story (telemetry, webhooks, keys, limits) is real.

**Layout.** Label `10 — THE PLATFORM`. Two-column text blocks, then a mono capability table with no chrome: four columns (Capability · What it does · Default · Docs), hairline separated, no zebra striping. Right rail: three mono links (`Reference`, `Webhooks`, `Status`) and one rate-limit note.

**Copy.**
- H2: **Past the first call.**
- Two lines: *Streaming both ways, tool calls against your own APIs, webhooks on every event, and telemetry that tells you why a call ended. Keys are scoped per environment; test keys never touch production data.*
- Capability rows: `Streaming` (both directions, interruption-aware) · `Tool calls` (function calling against your endpoints) · `Telemetry` (per-turn latency, hang-up reason) · `Webhooks` (signed, replayable) · `Environments` (test / live, separate keys) · `Rate limits` (published in the reference)
- CTA: `Read the reference →` · `Get a key →`

**Motion.** Table rows reveal in a 0.04s stagger; the table itself fades as a block. No hover effects on rows.

**Type & surface.** Space Mono table on cream, capability names in ink, the docs column in marigold as the only colour in the table, hairlines between rows and no zebra striping.

**Gate.** Everything in the capability table must be true of the shipped SDK. **UNVERIFIED** items to confirm before this beat renders: tool-call support, webhook signing and replay, per-environment keys, whether telemetry includes hang-up reason. Cut any row that cannot be verified — six rows of which two are false is worse than four true ones.

---

### Beat 11 — Enterprise: the quiet close

**Purpose.** Catch the buyer who scrolled past pricing because "custom" is the only acceptable answer.
**Proves.** There is a human, named, accountable path for the calls that cannot fail.

**Layout.** Label `11 — SHIELD`. Left: H2 + two lines. Right: a four-step white-glove timeline (scope → build → deploy in your perimeter → named architect), numbered in mono, joined by a vertical rule. One metallic accent only. CTA → `/contact`.

**Copy.**
- H2: **For the calls you can't get wrong.**
- Sub: *Dedicated VPC or on-prem, SIP trunking into the PBX you already own, HIPAA/SOC 2 architecture, and one named engineer who answers.*
- Timeline: `Scope` · `Build` · `Deploy in your perimeter` · `Own it with a named architect`

**Motion.** The timeline draws once; no pin. This section should feel slower and quieter than the rest — the motion equivalent of a lower voice.

**Type & surface.** A `#FBEACD` band with the timeline rule in ink, steps numbered in Space Mono, one brass accent on the Shield mark only — deliberately quieter than the footer that follows it.

**Gate.** The same certification gate as Beat 9 — "HIPAA/SOC 2 architecture" is a claim about design, not certification, and must not be read as the latter. Keep the wording exact.

---

### Beat 12 — Footer: the wordmark that gets remembered

**Purpose.** Leave a mark. The giant wordmark is the recall device the whole proposal is built around.
**Proves.** Confidence — a brand willing to spend a whole screen on its own name.

**Layout.** Full-bleed band. Top: four link columns (Product / Developers / Company / Legal) plus one CTA. Then the **wordmark at roughly 28vw, clipped by the viewport bottom**, with the dot after the `a` pulsing. Under it, a mono row: `© 2026 Wavia` · `Wavia Core · Wavia Studio · Wavia Shield` · `Privacy` · `Terms` · `Status`.

No third-party or studio attribution of any kind appears in the footer, or anywhere else on this site. That is a settled rule (§8, note 8.4), not a preference.

**Copy.** Tagline (brand kit): *Where the conversation actually happens.*

**Motion.** Wordmark rises 40px over 1.1s on enter, then holds. Dot pulses on the 3s cycle in the brand kit. Reduced motion: static.

**Type & surface.** Full-bleed marigold (`#B45309`) band, ink `#1C1408` wordmark in Bricolage 800 at `-0.05em`, dot in cream. The one place the accent becomes a field instead of a mark.

**Gate.** The copyright line names the company. Until the company name is confirmed (§8, gap 8.3), the line reads `© 2026 Wavia`.

---

## 4. Sitemap

### 4.1 Marketing (this repo, primary domain)

| Route | Page | Beats | State |
|---|---|---|---|
| `/` | Home — the 12 beats | 1–12 | rebuild |
| `/pricing` | Pricing (full table, usage footnote, FAQ) | 8 expanded | rebuild |
| `/how-it-works` | How it works (our four steps + pipeline detail) | 2, 7 expanded | rebuild |
| `/core` | **Wavia Core** — developer engine, SDK, snippet, docs | 4, 10 expanded | **new route** |
| `/studio` | **Wavia Studio** — no-code dashboard marketing | 2 expanded | **new route** |
| `/shield` | **Wavia Shield** — enterprise / compliance track | 9, 11 expanded | **new route** |
| `/about` | About — the one-engine argument, the blockquote | — | rebuild |
| `/contact` | Contact / scope a build / talk to sales | 11 | rebuild |
| `/privacy`, `/terms` | Legal — **plain, no hero, no glow** (audit §2) | — | rebuild |
| `/status` | Uptime + incident history | 6 link target | **new, external or simple page** |

### 4.2 Redirects (keep every existing URL alive)

| Old | New | Why |
|---|---|---|
| `/for-developers` | `/core` | sub-brand naming |
| `/enterprise` | `/shield` | sub-brand naming |
| `/get-started` | `/studio` | Studio is the product; signup lives on the app subdomain |
| `/login` | `https://studio.<domain>/login` | app owns auth |

All 301 and permanent. **Order matters in `vercel.json`:** explicit redirects go before the catch-all `/*` → `index.html`, or client-side routing swallows them.

### 4.3 App (separate deployment, subdomain)

| Route | Purpose |
|---|---|
| `studio.<domain>/` | Dashboard — assistants, calls, numbers |
| `studio.<domain>/login`, `/signup` | Auth. The marketing site never hosts a password field |
| `studio.<domain>/assistants/:id` | The builder (name → voice → hours → number) |
| `studio.<domain>/calls` | Call log, transcripts (respecting no-recording mode) |
| `studio.<domain>/settings` | Numbers, hours, integrations, API keys |
| `core.<domain>/dashboard` | Keys, usage, session logs for Core customers |

**Rule:** the marketing site and the app deploy separately, and the marketing site must render fully — every beat, every number — with the app **down**. No marketing section may depend on an app API to display its content.

### 4.4 Docs

| Route | Purpose |
|---|---|
| `docs.<domain>/` | Quickstart, SDK reference, webhooks, telemetry |
| `docs.<domain>/quickstart` | The nine-line snippet, expanded |
| `docs.<domain>/sdk/*` | Per-language reference (JS first) |

Docs are generated from the code repo, not hand-written here. Until that repo is connected, `/core` links out and **must not 404** — if docs are not live, the link is disabled with `Docs coming with early access`.

---

## 5. Navigation & IA

Six links, one CTA, no dropdowns:

- `Wavia Core` → `/core`
- `Wavia Studio` → `/studio`
- `Wavia Shield` → `/shield`
- `Pricing` → `/pricing`
- `About` → `/about`
- `Docs` (external) · `Log in` (app subdomain)
- `Book a walkthrough →` as the ink pill (→ `/contact`), because Beat 1's primary CTA is a human, and the nav should not promise something the page does not

Three sub-brands do not justify a mega-menu, and a mega-menu on a five-page marketing site is a tell.

Footer: the four columns from Beat 12, plus `Status` and the legal pair. Nothing in the footer that is not also in the nav, except legal and status.

**Kill list (from the current site):** the `EYEBROW` above every headline (the audit's badge-repetition complaint), the identical orange hero glow repeated on every page, `GradientText`, and **the theme toggle**. A theme toggle exists because a site has no opinion about polarity; shipping both modes halves the design's confidence and doubles the QA surface. This is independent of whether you pick A or B — the site gets **one** polarity either way.

---

## 6. Subdomain plan

| Host | Serves | Notes |
|---|---|---|
| `<domain>` | Marketing site (static build) | apex, canonical, all redirects |
| `www.<domain>` | 301 → apex | — |
| `studio.<domain>` | The Studio app | separate deploy; app owns auth |
| `core.<domain>` | Dashboard + API keys | may merge into `studio.` later |
| `docs.<domain>` | SDK docs from the code repo | external until repo connected |
| `status.<domain>` | Uptime / incidents | third-party or simple static page |

**Open:** the apex domain. Today the site is served from a studio-owned subdomain (per the audit). If Wavia keeps that, every `X.<domain>` above becomes `X.<that host>` — workable, but it makes `studio.<host>` a mouthful and puts a client brand under a host it does not own. Recommendation: move Wavia to its own apex before launch and 301 the old host to it. Flagged, not assumed (§8, gap 8.2).

---

## 7. Studio placeholder plan

The app does not exist yet. The rule: **never fake a working product.**

| Surface | What ships | What it must never do |
|---|---|---|
| `/studio` | Full page: the four-step story, screenshots of the **real** builder if available, otherwise a designed diagram of the steps. CTA is **`Join the waitlist`** until the app is live | Show a fake dashboard screenshot |
| Nav CTA | `Book a walkthrough` → `/contact` while Beat 1's demo is recorded + branching | Point at a dead app subdomain |
| `studio.<domain>` | Nothing. DNS stays unpointed until the app ships | Serve a "coming soon" page on a domain nobody links to |
| `/login` on marketing | Removed. 301 to the app subdomain once it exists; until then there is no `Log in` link | Collect credentials on a static site |
| Hero demo | Recorded calls + branching demo, labelled | Present a recording as a live session |
| Pricing | Studio lane stays, `+ usage`, waitlist CTA. Core can sell today if keys are real | Sell a Studio seat that cannot be provisioned |

**Sequencing:** marketing site → recorded demo → waitlist → Studio app → flip three CTAs and one nav link, add `/get-started` → `studio.` redirect. The flip is deliberately small and written down here so it is not forgotten.

---

## 8. Gates — what I cannot resolve from this workspace

| # | Gap | Blocks | Who |
|---|---|---|---|
| 8.1 | ~~Theme A or B~~ | **Closed — B locked 30 Oct 2026** | — |
| 8.2 | **Apex domain** (`wavia.<tld>` vs staying under the studio's host) | §6, redirects, OG URLs | Hamzi |
| 8.3 | **Company legal name** — "Wavia Labs" is unconfirmed, so it appears nowhere in this document as fact; the footer reads `© 2026 Wavia` until you confirm | Footer, `/about`, legal pages | Hamzi |
| 8.4 | **Third-party attribution** — settled: no studio, agency or builder name appears on the site | Nothing — already applied | — |
| 8.5 | Urdu recordings from the real engine, with consent | Beats 1, 3 | Hamzi |
| 8.6 | Latency: confirm `~450ms to first audio`, and whether per-stage numbers can be published | Beats 6, 7 | Engineering |
| 8.7 | Uptime figure vs contractual SLA | Beat 6 | Hamzi |
| 8.8 | HIPAA / SOC 2 / GDPR — certified, in progress, or architecture-only | Beats 9, 11, `/shield` | Hamzi / legal |
| 8.9 | SDK published to npm? package name, methods, `interruptible` | Beat 4 | Code repo |
| 8.10 | Platform capability table (tool calls, webhook replay, env keys, hang-up telemetry) | Beat 10 | Code repo |
| 8.11 | Pricing confirmed, and whether a free tier exists | Beat 8 | Hamzi |
| 8.12 | Trailer footage (60–90s) + caller consent | Beat 5 | Hamzi |
| 8.13 | Spice Hut: no claim until an exact result and timeframe are given | Nowhere — correctly absent | Hamzi |
| 8.14 | Code repo connected, or post-Step-3 copy written against the brief and marked unverified | `/core`, `/shield`, docs | Hamzi |

---

## 9. Build order, one session per section

Each session ends with a preview and a sign-off request. Nothing merges to `main` before sign-off.

| # | Session | Scope | Done when |
|---|---|---|---|
| 0 | Tokens & shell | One theme's tokens, type scale, spacing, radii, rules, logo, nav, footer, route skeleton, theme toggle removed | A blank page with correct type, colour and nav |
| 1 | Landing + demo | Beat 1, recorded clips, branching tree with the interruption branch, chip row + RTL, mobile order, reduced motion | You can play a real Urdu call and trigger the interruption branch on a phone |
| 2 | Custom setup + businesses | Beats 2 and 3 | Two-path choice works; four clips, Urdu first |
| 3 | Developers + trailer | Beats 4 and 5, snippet, copy button, poster state | Snippet verified against the SDK; trailer poster honest |
| 4 | Proof + pipeline | Beats 6 and 7, count-ups, pinned rail | Pin releases cleanly; reduced motion shows a static pipeline |
| 5 | Pricing + privacy | Beats 8 and 9, `/pricing`, compliance copy gated | No unverified badge anywhere |
| 6 | Platform + enterprise + footer | Beats 10, 11, 12 | Capability table fully verified; footer keyboard-passable |
| 7 | Polish | 404, OG images, redirects in `vercel.json`, sitemap.xml, robots, analytics, page transitions | Every old URL 301s; no console errors; CLS ≈ 0 |

**Cross-cutting, every session:** keyboard operable, focus visible, `prefers-reduced-motion` honoured, no layout shift on font load (Nastaliq is the risk — preload, `font-display: swap`, explicit line-height), every image has width/height, Urdu never rendered in a Latin face.

---

## 10. Out of scope for this step

No component code, no tokens committed — this is the story, not the build. No copy for `/about`, `/contact`, `/privacy`, `/terms` beyond structure. No pricing page redesign beyond Beat 8. No SEO strategy, blog or careers page. No Studio app work.

---

## 11. What I need from you

1. **Sign-off on the Session 0 shell** — tokens, type, logo, nav, footer, route skeleton — before any beat is built.
2. Then, in order of what bites first: Urdu recordings (8.5), apex domain (8.2), company name (8.3).
