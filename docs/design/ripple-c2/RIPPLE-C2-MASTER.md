# Wavia — Ripple C2 Master Document

**Status: DECIDED AND COMMITTED — 15 Nov 2026, by Hamzi (founder).**
**The decision: we go forward with option C2 — "Ripple Paper" — in BOTH source files.**
Every other direction in the two source files (A, B, C-dark, A2, B2) is documented
here for the record only. **Do not build them. Do not mix them in.** If a future
instruction seems to conflict with C2, this document wins until Hamzi changes it
in writing.

This folder contains:

| File | What it is |
| --- | --- |
| `RIPPLE-C2-MASTER.md` | This document: full extraction of both explorations, the decided C2 system, the whole Wavia vision, the website plan, and how the work proceeds. |
| `WAVIA-three-teaser-identities.html` | Source exploration 1 — three teaser identities (A/B/C) + round-2 variants (A2/B2/C2), 1080×1350 teaser format. |
| `WAVIA-three-dashboard-directions.html` | Source exploration 2 — six engine dashboard boards (A, B, C, A2, B2, C2) at 1280×800, all rendering the same mock session. |

Companion specs already living in the engine repo (VERTEX-voiceai, branch
`wavia-fixv1`): `docs/DESIGN.md` ("WAVIA · Ripple design specification v1.1,
final") and `docs/design/design-tokens.json` ("wavia-ripple" v1.1.0), plus
reference implementations `wavia-teaser.html` / `wavia-dashboard.html` named in
that spec. This master document and those files describe the same system; where
a number appears in both, they agree.

---

## 1. Extraction — File 1: "WAVIA — three teaser identities"

Format for every direction: a 1080×1350 teaser carrying one line — *"A first
listen is coming."* — a wordmark, mono labels, and no product claims. Round 1
set the palettes; round 2 kept the colours identical and changed the visual
language and fonts.

### Round 1

**A · Raven Signal** — "High-contrast, light falling into darkness."
Swatches: Raven `#0A0A0C`, Ice `#CFE6F5`, Poppy `#E8352B`, White `#FFFFFF`.
Light: poppy radial glow from top-right (to 50%, clear at 72%), ice glow
bottom-left at 38%. Type: Inter Tight 700, −4% tracking, sentence case, one word
in poppy; labels Space Mono 20px, +2px tracking. Wordmark: WAVIA in caps, +11px
tracking, preceded by a solid square. Texture: 1px ice vertical lines at 7px
pitch, masked to fade by 62% height; hanging waveform bars. Spacing: 60px
margins, text bottom-left, hairline footer rule.

**B · Sidetone Forward** — "Kinetic editorial, hard shadows, cropped movement."
Swatches: Soft blue `#B6DFED`, Midnight `#002941`, Coral `#FD6E6E`.
Lighting: none — flat colour with a hard 12px coral offset shadow on type.
Type: Barlow Condensed 800 italic, uppercase, −3px tracking; mono labels Space
Mono 700. Wordmark: "Wavia" in soft blue on the navy field, coral hard shadow.
Devices: a diagonal navy sweep cropped off both edges, coral edge band, one
thin blue sine line. Spacing: 60px margins, headline top-left, sweep rises to
the right.

**C · Ripple** — "A voice radiating outward, in dots. Warm and ownable."
Swatches: Aubergine `#1A0B2E`, Lime `#C8F169`, Lilac `#B8A4FF`, Bone `#F4EFE6`.
Lighting: none; depth comes from a vignette that fades the dot rings into the
aubergine. Type: Bricolage Grotesque 800, lowercase, −3% tracking; key word in
a lime pill; mono Space Mono 20px. Wordmark: lowercase "wavia" with a lilac dot
(the voice). Texture: 28px lime dot grid masked into concentric rings (54px on,
54px off) around a lilac core. Spacing: 60px margins, source of sound at
upper-centre, headline anchored low.

### Round 2 (same palettes, new style and type)

**A2 · Raven Dial** — Same swatches as A. Type: Unbounded 700, tight tracking,
sentence case; "listen" as an ice outline. Labels in Space Mono. Device: a flat
poppy disc cropped off the corner, like a signal dial, over a 90px ice grid at
14% opacity. Flat colour, no glow; the black reads as a technical instrument.

**B2 · Sidetone Chat** — Same swatches as B. Type: Syne 800, lowercase
wordmark, −3% tracking. Device: the headline set across three speech bubbles
(filled blue, filled coral, outlined), ending with a typing-dots bubble. Navy
ground inverted from round 1; the conversation motif makes the voice idea
literal.

**C2 · Ripple Paper — ★ THE DECISION.** Same swatches as C: Aubergine
`#1A0B2E`, Lime `#C8F169`, Lilac `#B8A4FF`, Bone `#F4EFE6`. Type: **Instrument
Serif, large, with italic wordmark; "listen" highlighted in lime.** Labels in
Space Mono. Device: **a solid lilac disc with two aubergine hairline rings, a
tilted lime sticker, and magazine rules top and bottom.** Bone paper ground
gives a printed, issue-style feel that suits a series of numbered sections.

### The file's own recommendation (kept for the record)

"Which I'd carry forward: C, Ripple. A is the most striking single image, but
black-with-red-light is the default look for AI tooling and it would blur into
the feed. B has great momentum, but its athletic energy suits sport more than
speech. C is the only one that visualises what WAVIA does (a voice radiating
outward), it reads clearly at thumbnail size, and the cream Studio paper UI
(#FFF6E5) sits naturally on aubergine, so the Studio carousels will pop. If you
want a safer, more premium-tech mood, A is the fallback."

Hamzi's ruling on top of that recommendation: **the C family wins, and C2 —
Ripple Paper — is the form we build.** C-dark remains the teaser/social face of
the same family (see §3); C2 is the product face.

---

## 2. Extraction — File 2: "WAVIA Engine — three dashboard directions"

Six boards at 1280×800 — A · Raven Signal, B · Sidetone Forward, C · Ripple,
A2 · Raven Slab, B2 · Sidetone Night, **C2 · Ripple Paper**. Every board renders
the *same* mock session, so the comparison is purely about design language:

- Session: "service desk demo", live provider · mock data, labelled
  "Illustrative data".
- Transcript — USER: "What time do you close today?" AGENT: "We close at
  6 p.m. today."
- Turn: 840 ms total — VAD 120 · STT 310 · LLM 260 · TTS 150.
- KPIs: turn latency p50 0.84s · interruptions 12 · active sessions 3 ·
  providers 3/3.
- Event stream: `vad.speech_start` 00:01.92 · `vad.speech_end` 00:03.10 ·
  `stt.final` 00:03.42 · `llm.first_token` 00:03.96 · `tts.first_audio` 00:04.31.

Per-board design language (extracted from the boards' own CSS):

| Board | Ground / text | Display face | Signature |
| --- | --- | --- | --- |
| A · Raven Signal | Raven `#0A0A0C` family, ice `#CFE6F5`, poppy `#E8352B` | Inter Tight + Space Mono | Top-nav console ("Live engine"), waveform mic panel, technical-instrument feel |
| B · Sidetone Forward | Soft blue `#B6DFED` ground, midnight `#002941`, coral `#FD6E6E` | Barlow Condensed + Inter Tight + Space Mono | Bright kinetic board, waveform hero strip |
| C · Ripple (dark) | Aubergine `#1A0B2E`, raised `#2A1647`, line `#3F2765`, lilac `#B8A4FF`, lime `#C8F169`, bone `#F4EFE6`, lilac-deep `#7A5BC4` | Bricolage Grotesque + Space Mono | 96px icon rail (lilac dot logo, lime active pill nav), rounded 26px cards, lime pills, mono event rows with lime timestamps |
| A2 · Raven Slab | Raven family + slate `#2A3A44` | Inter Tight + Space Mono | Oversized KPI numerals ("0.84 Seconds · turn latency p50"), slab layout |
| B2 · Sidetone Night | Midnight `#002941`, soft blue `#B6DFED`, coral `#FD6E6E` | Manrope + Space Mono | Dark navy console, "wavia ." wordmark, transcript panel |
| **C2 · Ripple Paper ★** | **Bone `#F4EFE6` ground, aubergine `#1A0B2E` text** | **Instrument Serif + Space Mono** | **Editorial "Engine report": magazine masthead, hairline rules, giant serif KPIs, lime-highlighted event ledger** |

### The C2 board, at CSS level (this is the dashboard we build)

- Frame: 1280×800, `background:#F4EFE6; color:#1A0B2E`, Instrument Serif,
  padding 30px 44px, flex column.
- Masthead (`.h`): **2px aubergine top rule + 1px bottom rule**, flex row,
  baseline-aligned — wordmark left ("wavia", serif italic), "Engine report ·
  live session" as the report title.
- Mono labels (`.m`): Space Mono 11px, +1.5px tracking, uppercase.
- Grid (`.g`): three columns `300px 1fr 330px`, gap 34px, 22px below masthead.
  Left column = KPI stack; centre = the live conversation ("Now speaking ·
  service desk demo", the quote set large in serif, agent reply in italic);
  right column = the event ledger.
- KPIs (`.k`): separated by 1px aubergine rules; numerals **84px Instrument
  Serif, weight 400, −3px tracking, line-height 0.95**; units in 40px italic.
  Values as mocked: "Turn latency p50 — 0.84 s", "Interruptions handled — 12",
  "Active sessions — 3", each footnoted "Illustrative data".
- Highlight (`.hl`): lime `#C8F169` behind aubergine text — used for the key
  word in the quote and for event timestamps in the ledger (`.ev span`).
- Event ledger (`.ev`): Space Mono 11px rows, 1px aubergine rule under each,
  timestamp chip in lime.
- **No shadows, no gradients, no rounded cards.** Depth is rules, spacing and
  type scale only. Lilac appears as fills/blocks (the disc device, reply
  blocks) — never as text on bone (≈1.9:1, fails contrast); lime on bone only
  as a fill behind aubergine text (≈1.1:1 as text, fails).

### The C-dark board (teaser face of the family — for social/teaser surfaces)

Aubergine ground, bone text; Bricolage Grotesque; 96px rail with a 14px lilac
dot as the logo mark; nav pills (active = lime fill, aubergine text); cards on
aubergine-raised `#2A1647` with 26px radius; hairlines aubergine-line
`#3F2765`; event rows with lime timestamps; transcript tags as lilac chips.
This is the language of the Instagram teaser and reel covers — not of the
product dashboard.

---

## 3. The C2 system, distilled (the rules that bind every surface)

**Palette (complete):**

| Token | Hex | Role |
| --- | --- | --- |
| aubergine | `#1A0B2E` | Text + rules on paper; dark ground for teaser face |
| lime | `#C8F169` | Highlight fill behind aubergine text; accent dots/pills on dark |
| lilac | `#B8A4FF` | Secondary fill: disc device, blocks, wordmark dot; labels on dark |
| bone | `#F4EFE6` | Paper ground (dashboard, product surfaces); text on aubergine |
| lilac-deep | `#7A5BC4` | Deep accent; fourth segment of the turn-timing bar |
| aubergine-raised | `#2A1647` | Card surface on dark UI only |
| aubergine-line | `#3F2765` | Hairlines on dark UI only |
| studio-paper | `#FFF6E5` | Bridge token: the Studio paper panel colour (matches the marketing site's Theme B paper — the two systems shake hands here) |

**Typography (complete):** Teaser/display face — Bricolage Grotesque 500/800
(lowercase wordmark, lilac dot). Dashboard display — Instrument Serif 400,
italic for the wordmark, emphasis and agent replies; never bold (the face has
none). Mono — Space Mono 400/700 for every label, timestamp, event and tick,
always uppercase with +1.5–2px tracking. Google Fonts loader and full type
scales are in `docs/DESIGN.md` §2 and `design-tokens.json`.

**Pairing law:** bone-on-aubergine ≈16:1 and aubergine-on-bone ≈16:1 carry all
real text. Aubergine-on-lime ≈14:1 and aubergine-on-lilac ≈8:1 are the only
text-on-accent pairings. Lilac or lime *as text on bone* is forbidden. No
colour gradients anywhere; the only gradient-type functions are the lime dot
field (28×28px tiles) and the aubergine vignette on the dark face. No shadows
except the disc's ring trick.

**Devices (the recognisable marks):** the lilac disc with two aubergine
hairline rings; the tilted lime sticker; magazine rules (2px over 1px) framing
content top and bottom; the dot-rings radiating from a lilac core (dark face);
the lowercase wordmark with its lilac dot.

**Surfaces and which face each takes:**

| Surface | Face | Ground |
| --- | --- | --- |
| Studio / engine dashboard (the product) | **C2 Ripple Paper** | Bone |
| Auth (sign up / sign in) | C2 Ripple Paper | Bone |
| Demo dashboard entry | C2 Ripple Paper | Bone |
| Instagram teasers, reel covers, social | C · Ripple (dark) | Aubergine |
| Marketing website | Theme B "Marigold Market" skin (see §5), C2 devices and palette accents woven in | Paper `#FFF6E5` family |

**Mock-data law:** every number rendered from mock data stays labelled
"Illustrative data" until it is a real capture from the real engine. This
applies to the dashboard, the website, and all social material.

---

## 4. The product — facts and figures (the only claims the website may make)

Wavia is a real-time voice AI engine. One call flows: **VAD → streaming STT →
LLM → neural TTS**, full-duplex and interruptible — the caller can cut in
mid-sentence and the agent yields, like a human conversation.

- **Languages:** English, Urdu, Arabic, Bahasa Melayu.
- **What it does:** telephony voice agents — inbound and outbound calls,
  appointment booking, CRM sync, failover. Plus an ephemeral no-recording mode
  and zero training on customer data.
- **Latency:** the engine is built for sub-second, human-feeling turns. The
  dashboard mock's turn anatomy (VAD 120 · STT 310 · LLM 260 · TTS 150 = 840 ms)
  is *illustrative*, not a published figure. Published latency numbers come
  only from the claims already approved in the repo's vision/claims documents
  — never invent a number, a certification, a customer, or an outcome.
- **Pricing:** pay-as-you-go from $29/mo; self-serve Studio includes 30 min/mo
  of free test calls. (Pricing copy follows the repo's existing approved
  pricing material; do not improvise tiers.)
- **Surfaces:** marketing site `wavia.vertexdevstudio.tech` · Studio
  `studio.wavia.vertexdevstudio.tech` · docs `docs.wavia.vertexdevstudio.tech`.
- **Three audiences, three doors** (this ordering shapes the whole site):
  1. **Business owners** — self-serve Agent Studio: build an agent in a
     no-code studio (≈5-minute setup), test it, put it on a phone number.
  2. **Developers** — SDKs and API: TypeScript (`@ucve/voice-sdk` + React
     hook), Python (`ucve`), Flutter on the roadmap; streaming, tool calls,
     telemetry, signed webhooks, test/live environments.
  3. **Custom / white-glove** — sales-led deployments on Telnyx/Twilio for
     businesses that want it done for them.
- **The dashboard already exists** — the Agent Studio was built in Phase 13 of
  the engine (screens SCR-01…SCR-13: auth, workspace, agents, knowledge, test
  calls, usage, settings). The website does not invent a second dashboard; it
  *connects* to this one and skins it in C2 (see §6).

**Claims discipline (hard rules, inherited from every previous phase):** no
HIPAA/SOC 2/GDPR claims until Hamzi decides them at gate H14; no open live
demo anywhere (pre-recorded/scripted demo material only, labelled as such); no
fake metrics, logos, testimonials, or outcomes; anything unverified is left
out or explicitly gated in the copy.

---

## 5. The website — vision

The website is a **product website**. One page performs; every other page
informs.

### 5.1 The landing page — immersive, scroll-driven storytelling

The homepage is a **scroll journey with one persistent object: the call**. A
single stage (the call card) pins to the viewport and the world changes around
it as you scroll — the visitor doesn't read about a call, they travel with one:
**ring → conversation → interruption → booking → CRM record**. The full scene
script (Scenes 0–10), the copy diet, and the motion rules live in
`docs/design/IMMERSIVE_SCENARIO.md` and `docs/design/scroll-story.md` in this
repo — they are part of this vision, not optional extras. The mechanics are
borrowed from three references, translated: the product object that stays
while its contents animate out into the page (the phone); the cross-section
that assembles layer by layer as you scroll (the building → our stack assembles
VAD/STT/LLM/TTS); the surface that becomes a vessel sailing source to
destination (the container ship → the call's voyage, the thread as its route).

Non-negotiables for the landing page:

- **One idea per scene; ~15 words of body copy per scene.** The homepage
  *shows*; sub-pages *tell*. Capability walls and paragraphs move off the
  homepage.
- **Scroll-scrubbed, reversible timelines** (GSAP + ScrollTrigger, pinning +
  scrub; transform/opacity/stroke only; loops pause off-screen). Scrolling
  back reverses the scene.
- **The thread is the route** — a single line that leaves the phone, carries
  the booking, docks into the CRM, runs through the stack, ends at the footer
  wordmark. Drawn by scroll, never decoration.
- **Type at architectural scale** on the landing page; mono only for
  transcripts/labels/ticks.
- **Mobile compresses, never breaks:** stage full-width, shorter pins,
  callouts stack under the stage. A scene that can't hold at 390px is
  redesigned, not shipped broken. `prefers-reduced-motion`: no pinning, every
  scene in its final readable state.
- **Honesty on stage:** scenes dramatise the scripted demo transcript and are
  labelled as a scripted demo. No open live demo.
- **Zero third-party/studio attribution** anywhere on the site, footer
  included. Footer: "© 2026 Wavia".

### 5.2 Every other page — informative, complete, calm

Product, how-it-works, developers, pricing, custom, about, contact, legal:
complete information, real documentation-grade detail, no scroll theatre. A
visitor who never sees the landing page must still be able to understand,
evaluate, and buy the product from these pages alone.

### 5.3 Look and feel

The marketing site's current skin is **Theme B "Marigold Market"** (paper
`#FFF6E5`, marigold `#B45309`, ink `#1C1408`, palm `#1E6B4F`, brass `#A8862B`;
Bricolage Grotesque / Instrument Sans / Space Mono — see
`docs/design/theme-proposal.md`). Ripple and Theme B are cousins, not rivals:
they share the paper warmth, the Bricolage/Space Mono voices, and the
`studio-paper #FFF6E5` bridge token. The website build keeps the Theme B
marketing skin, weaves in the C2 devices (disc + rings, lime highlight,
magazine rules) where they strengthen a page, and the moment a visitor crosses
into the product (auth, dashboard, demo), the surface becomes **pure C2**.

### 5.4 Sitemap

| Route | Purpose | Register |
| --- | --- | --- |
| `/` | The immersive call journey (Scenes 0–10) + entry points to all three doors | Immersive |
| `/product` | What Wavia is: pipeline, interruption, languages, telephony agents, privacy modes | Informative |
| `/how-it-works` | The call, step by step; the stack (VAD→STT→LLM→TTS); booking/CRM flow | Informative |
| `/studio` | The Agent Studio tour — screenshots in C2, the SCR screens, 5-minute setup story | Informative |
| `/developers` | SDKs (TS/React, Python, Flutter roadmap), quickstart, capability table | Informative |
| `/pricing` | Pay-as-you-go from $29/mo, free test minutes, custom tier pointer | Informative |
| `/custom` | White-glove deployments (Telnyx/Twilio), sales-led | Informative |
| `/about` | The studio behind Wavia, in one page | Informative |
| `/contact` | Contact + demo request | Informative |
| `/privacy`, `/terms` | Legal | Informative |
| `/login`, `/signup` | Auth — hands off to the Studio app (C2) | Product |
| `/demo` | Demo dashboard entry — C2 dashboard on labelled mock data, no live calls | Product |
| `docs.` subdomain | Quickstart, SDK reference, webhooks, telemetry (docs site) | Informative |
| `studio.` subdomain | The Phase 13 Studio, C2-skinned | Product |

Nav order mirrors the audience order: **Custom → Business (Studio) →
Developers**, with Pricing and Sign in at the end.

---

## 6. The product flow — site → auth → dashboard, one scenario

1. A visitor lands on the immersive homepage, travels with the call, and hits
   a door: *Start building* (Studio), *Read the docs* (developers), or *Talk
   to us* (custom).
2. **Sign up / sign in** happens on C2 paper: bone ground, serif wordmark,
   magazine rules — the same editorial calm as the dashboard behind it. No
   visual jump between the marketing site and the product.
3. Behind auth sits the **Phase 13 Studio dashboard**, re-skinned to C2
   exactly as specified in §2/§3 and in `docs/DESIGN.md`: bone ground,
   aubergine text and rules, Instrument Serif numerals and quotes, Space Mono
   labels and event rows, lime highlights, lilac blocks. The dashboard's
   information architecture (SCR-01…SCR-13) does not change — only its skin
   and its connection to the site's auth.
4. **Demo entry:** `/demo` (and a "View the demo dashboard" door on the site)
   opens the same C2 dashboard populated with the labelled mock session from
   the source boards (service desk demo, the 840 ms turn anatomy, the event
   ledger) — clearly marked "Illustrative data", no live calls, no signup
   wall.
5. One palette, one type system, one set of devices from the first scroll to
   the deepest settings screen. If a screen doesn't look like it belongs to
   the same product as the C2 board in the source file, it's wrong.

---

## 7. How the work proceeds (branches and sequence)

1. **Engine first** (VERTEX-voiceai, branch `wavia-fixv1`): the continuation
   prompt's Stages 0–3 — commit cleanly, Phase 14, Phase 15, then the full
   customer-style engine checkup. Gates H14/H15 stand exactly as written in
   the phase files.
2. **This document + both source HTMLs** live in WAVIA_WEBSITE on `main` under
   `docs/design/ripple-c2/` (docs only — the live site is untouched), and the
   whole website is mirrored into VERTEX-voiceai on a dedicated branch named
   **`website`**, as a `website/` folder, so the engine and the site sit in
   one repo with every fact in reach and nothing overwritten.
3. **Website build last** (same prompt, Stage 4, on branch `website`): pull
   the `website/` folder, build the site to §§5–6, skin the Studio dashboard
   to C2, wire the auth flow and the demo entry. Commits stay on `website`;
   the engine branches are not touched by website work.
4. **Working style — vision first, in harmony (the Praxis rule):** this
   document carries the *vision*; the palette, type system, devices and
   claims discipline are hard law, but composition inside them is the
   builder's design judgment. Nothing here is a final-word spec to be
   executed letter-by-letter at the cost of the whole — when a literal reading
   and a harmonious result conflict, choose harmony inside the system and
   note the choice in the report. No AI slop: no generic gradient heroes, no
   placeholder copy, no invented content, no stock "AI startup" furniture.
   If it could belong to any other product, it doesn't belong to Wavia.

---

*End of master document. Questions this document doesn't answer are Hamzi's to
decide — surface them, don't invent around them.*
