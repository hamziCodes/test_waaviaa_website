# Wavia — design rebuild progress

Session log for the design rebuild. Newest at the bottom. One entry per session.

| Step | Deliverable | Status |
|---|---|---|
| 1 | Audit (`docs/wavia-visual-design-audit.md`) | done |
| 2 | Two themes (`docs/design/theme-proposal.md`, preview `docs/design/themes-preview.html`) | done — **Theme B chosen 30 Oct 2026** |
| 3 | Scroll story + sitemap (`docs/design/scroll-story.md`) | done (rev 3) — brackets collapsed to B, signed off |
| 4 | Build, one section per session | Sessions 0–4 signed off · **Session 5: Beat 7 built, numbers omitted per gate 8** |

## Theme: B — Marigold Market (light), locked

Four conditions from the sign-off, binding on every session:

1. **Never pure white** — warm paper and cream only, ink type.
2. **Ink type** — marigold for live states and labels, never for body copy.
3. **The one-stack pipeline is the single dark act** — `#16120B` appears at Beat 7 and nowhere else.
4. **Full-bleed marigold footer with the giant wordmark**, and **no theme toggle** anywhere.

## Where the work stands — Session 4 (Beat 5: the trailer)

`src/components/TrailerSection.tsx`. Full-bleed section, centred 16:9 poster (32px radius, 1.5px `#E8D8BA` frame, the page's second and last shadow), scroll-scrubbed 1.0 → 1.04 as it crosses the viewport, then one line of context left-aligned underneath.

**No footage, so the poster is a slate, not a video.** The gate here is hard and the story is unambiguous: no stock AI-voice clip, play control visibly disabled, fallback line visible. In practice:

- The slate header reads `SC-05 · Inbound · Unedited` left and **`Take not recorded`** right.
- The circular play control is `disabled` + `aria-disabled` at 55% opacity with a `not-allowed` cursor, captioned **`Footage in production`**.
- The clock reads `00:00 / 01:20` — at zero, because there is no take to count.
- Under the poster: *Footage in production — hear the same call in [the demo above](#demo)*, a real anchor to the Beat 1 card, so the reader lands somewhere that actually plays something.
- No black band: the dark act stays reserved for Beat 7.

The poster is a film slate on cream, not a photograph pretending to be a still. When a 60–90s consented take exists, this component gets a `<video>` with the same frame and the slate chrome comes off — no copy changes.

## Where the work stands — Session 3 (Beat 4: the specimen)

`src/components/DevSpecimen.tsx`, rendered on `/` after Beat 2. Left 5/12: label, `Nine lines to your first call.`, sub, three mono links, CTA pair. Right 7/12: the eight-line snippet on the nested panel tone with a copy button that confirms in place for 1.6s, then one row of four capability tags. The snippet fades in as a block — it never types itself out.

**Gate 8 is open, so the beat ships in the story's own fallback state.** As specified: "If the SDK is not published to npm, this beat says `Early access — request a key` and the snippet is labelled as a preview. Never imply `npm install` works when it does not." Concretely:

- Panel header reads **`Preview · SDK not yet published`**, and the footer says the package is not on npm yet — request a key and install instructions arrive with it.
- No `npm install` line exists anywhere in the build (verified in the served bundle).
- Primary CTA is **`Early access — request a key →`**, not a key handout.
- `SDK reference` and `Quickstart` render as dashed, non-interactive text, because those docs do not exist. Only `Status` is a real link.
- The snippet's names (`@wavia/core`, `new Wavia`, `wavia.calls.create`) come from our own old developer page and are **UNVERIFIED**. `SDK_VERIFIED = false` in that file gates the whole fallback: flip it once, fix `SNIPPET`, and the preview framing disappears with it.

Deliberate deviation: the story lists `Read the docs →` as a CTA. There are no docs, so it would be a dead link on a shareable preview; the quiet `Everything else it does →` link (→ `/core`) carries that job instead. Restore it the day the reference exists.

`/core`'s placeholder was rewritten to stop saying the specimen is missing — it now points at the home-page specimen and says the page waits on gate 8.

## Where the work stands — Session 2 (Beat 2: done-for-you)

`/` gained its first chapter break: `src/components/BuildSection.tsx`, a cream-2 band with the 6/12 ask on the left and a four-step build strip on the right, steps revealing on a 0.06s stagger as the strip enters. No pin, no scrub, no shadow — a handshake, not a ride.

- **Copy shipped as signed:** `02 — DONE FOR YOU`, "We build the first one. You take the calls.", the four steps with their mono durations, and **"usually inside a week"** — confirmed as staffable, so the gate's fallback is not needed.
- **One line deliberately not printed:** the story's reassurance read *"No setup fee on Studio and Core. You own the number and the scripts either way."* Pricing is unconfirmed (gate 10), so only the ownership half ships. Say the word and the fee half returns.
- **One deviation worth knowing:** the story points the secondary CTA (`Or set it up yourself in 5 minutes →`) at Beat 4, which is the developer specimen. The no-code reader it is written for belongs at `/studio`, so both that CTA and the trailing `SELF-SERVE` link go there. If the intent was really the developer snippet, it is a one-line change.
- **Beat 3 is not built, by its own gate.** Every businesses card must play a real recording of that exact call, and "two playable cards beat four silent ones". Zero recordings exist, so the section waits for engine audio rather than shipping four silent players. It is now the first thing that lands once recordings do.

Same sweep as before, one more claim off a routed page: `/pricing` opened with *"Start free. No setup fees, no contracts"* and a `Start Building Free →` CTA, while gate 10 explicitly questions whether a free tier exists. Both replaced with neutral copy. The $29 / $149 / custom lane prices themselves are untouched — they are Session 5's rebuild and still need your confirmation.

## Where the work stands — Session 1 (Beat 1: the fold)

`/` is now the real hero: 5/12 headline column, 7/12 demo card. The card is a **branching script tree with the transcript in both languages** — the visitor plays the caller, and one of the branches interrupts the assistant mid-line, which truncates the trace and strikes the line through with `interrupted at 0.4s`. That branch is the beat: it proves "you can talk over it" instead of claiming it.

Two gates are wired, not just noted:

- `URDU_AUDIO_READY = false` in `src/pages/Home.tsx`. The headline is the short fallback `It picks up.` and Urdu sits in the subcopy. Flip the flag the day real Urdu audio from the engine exists and the second line `In Urdu.` returns. A headline in a language the page cannot play is the one dishonesty this page cannot afford.
- No numbers anywhere on the fold. Proof line is capabilities only: heard in Urdu and English · interruptible mid-sentence · no recording by default. Latency (8.6), uptime (8.7) and certification (8.8) stay off the page.

Honesty in the demo itself: header reads **"Scripted demo · transcript, no audio yet"**, the footer says real recordings replace it once captured and that no microphone is requested, and it never calls itself live. Those labels are unchanged by the four-language build below.

**Four languages, all live** (revised after sign-off): every chip works — `اردو · English · العربية · Bahasa Melayu` — and each carries its own full branching transcript of the same clinic call, interruption branches included. Switching language swaps the transcript in place without moving the branch you are standing on, so one call reads correctly four ways. This is text, so the audio gate does not apply to it; the headline fallback and the "no audio yet" labels still do.

Each script gets its own face and leading: Urdu in Nastaliq (2.05), Arabic in **Noto Naskh Arabic** (`--font-arabic`, added to the font request) at 1.95, Latin at 1.55. Arabic is never set in the Urdu face — the two scripts share a code block but not a typeface, and Nastaliq sets Arabic as though it were Urdu.

**Language-quality warning — Arabic and Malay are drafts.** The English and Urdu scripts are ours. The Arabic and Malay scripts in `src/content/demo.ts` were written by a non-native writer so the four-language claim is demonstrable on the fold, and **they have not been read by a fluent speaker**. They are UNVERIFIED for register, idiom and clinic vocabulary. A fluent Arabic speaker and a fluent Malay speaker must read both before public launch; treat every wording change from them as authoritative over mine. The file header carries the same warning so it survives this doc.

Motion: `clip-rise` on the headline lines (print off a press, no bounce), `fade-up` on subcopy, card and CTAs, all staggered by a `--d` custom property, all killed by the existing `prefers-reduced-motion` block. Mobile order is H1 → demo → CTAs.

Not landed and not supposed to be: Beats 2–12. No proof strip, no pipeline, no pricing rebuild, no privacy section, no trailer. Sessions 2–7.

### Session 0 shell, as signed off

Token layer (single polarity), type stack (Bricolage Grotesque / Instrument Sans / Space Mono / Instrument Serif / Noto Nastaliq Urdu), Thread mark and lockup, nav, marigold footer shell, route skeleton with redirects, shell placeholders at `/core`, `/studio`, `/shield`, `/status`. Toggle and its files deleted.

### Pre-Session-1 fixes (both landed)

1. `/pricing` Shield card: `HIPAA, SOC 2 & GDPR safe mode` → `Data fencing & no-recording mode`. Same card's `Bespoke B2B builds by Vertex Studio` → `Bespoke B2B builds` (no third-party name), and Core's `Sub-400ms streaming API` → `Streaming API, interruptible by default`.
2. Type specimen's mono line: `~450ms to first audio · 99.9% uptime · 0 recordings kept` → `Specimen only · 00:00 → 00:38 · SC-01 · نمونه`, plus a plain note naming which gates the numbers belong to. (The specimen page itself was replaced by the real hero in this session; the file is deleted.)

Same sweep, same reason: `/about` said `Wavia Labs (part of the Vertex Studio ecosystem)` and `sub-400ms end-to-end latency`. Both gone — no third-party name, no unfounded number. `/status` placeholder no longer cites an uptime figure that is not on the site.

One deliberate residual: `/shield`'s placeholder still contains the words `HIPAA` and `SOC 2`, in the sentence saying no such badge renders before certification is confirmed. It is a disclaimer about a claim, not a claim. It disappears with Session 6 anyway.

## Decisions waiting on Hamzi

Ordered by what blocks the most work.

1. ~~Shell sign-off~~ — received 30 Oct 2026, with the two fixes above. Beat 1 sign-off now blocks Session 2.
2. **Company legal name** — unconfirmed; the footer reads `© 2026 Wavia` and the meta description does not name a company until you confirm.
3. **Apex domain** — today the site is served from a studio-owned subdomain; redirects, OG URLs and the subdomain plan all depend on the answer.
4. **Urdu recordings** from the real engine, with consent — still the gate behind the full hero headline and the first business card. The fold currently ships the fallback headline.
4b. **Fluent read-through of the Arabic and Malay demo scripts** — written by a non-native writer, UNVERIFIED, and shipping on the preview now. Register and clinic vocabulary both need a native eye before launch.
5. **Latency** — confirm `~450ms to first audio`, and whether the per-stage breakdown can be published.
6. **Uptime** — 99.9% as target, or a contractual SLA.
7. **HIPAA / SOC 2 / GDPR status** — certified, in progress, or architecture-only.
8. **SDK** — published to npm? package name, methods, `interruptible` flag.
9. **Platform capability table** — tool calls, webhook replay, per-environment keys, hang-up telemetry.
10. **Pricing** — confirm $29 / $149 / custom, and whether a free tier exists.
11. **Trailer footage** (60–90s) and caller consent.
12. **Spice Hut** — no claim until an exact result and timeframe are given.
13. **Code repo** — connect it, or accept post-step-3 copy marked unverified.

## Standing rules

- No code before the theme is chosen and the scroll story is signed off. Both are now true.
- One number for latency, everywhere, or none.
- No claim that cannot be defended in a sales call.
- The demo says what it is: recorded, scripted, or a human.
- Urdu is never set in a Latin face.
- The marketing site must render fully with the app down.
- No studio, agency or builder name appears anywhere on the site.
- No company name is printed until it is confirmed.
- One polarity. No theme toggle, no `prefers-color-scheme` override, no dual token file.

## Session log

- **29 Oct 2026** — Step 2: two complete themes, shared spine, motion grammar, logo directions. Stopped for the polarity decision.
- **30 Oct 2026** — Step 3 rev 1: 11-beat story, sitemap, subdomains, Studio placeholder plan. Written against Theme B — a decision that was not mine to make.
- **30 Oct 2026** — Step 3 rev 2: rewritten theme-agnostic; 12 beats in the mandated order with the custom build path second; live demo replaced by recorded calls + branching demo; trailer returned to 60–90s; company name moved to gates; all third-party attribution removed.
- **30 Oct 2026** — Theme **B** locked by Hamzi with four conditions. Step 3 rev 3: brackets collapsed to B, section numerals fixed as the page spine, gap 8.1 closed.
- **30 Oct 2026** — **Session 0** (`39170f9`): token layer, type stack, Thread logo, nav, footer shell, route skeleton, redirects, placeholders. Theme toggle and its files deleted. No beats built. Theme-lock docs commit: `66d8410`.
  - Verified: `npm ci`, `tsc && vite build` clean; dev server serves `/`, `/core`, `/studio`, `/shield`, `/pricing`, `/contact` and the legacy URLs at 200 on the preview host.
  - Not verified: no browser in this workspace, so rendering, font loading, the Urdu line and the footer clip were not inspected visually. Confirmed by you in the preview panel, or by me in a later session if you want automation installed.
  - **Preview (published):** https://site-6e46b276c9cb47d79205b0e2381b5af3.freebuff.page — static build of this commit via `deploy/preview/manifest.json`. The in-VM dev-server tunnel failed after a workspace restore, which is why the preview deploy exists. Refresh-safe on deep links (`spa: true`); the legacy redirects are client-side here, and server-side only on the real host via `vercel.json`.
- **30 Oct 2026** — Pre-Session-1 fixes on the shell, then **Session 1**: Beat 1 fold built — `src/pages/Home.tsx`, `src/components/BranchingDemo.tsx`, `src/content/demo.ts`. `ShellHome.tsx` deleted, `/` rerouted.
  - Verified: `tsc && vite build` clean (2019 modules, 3.3s, CSS 32.18 kB, JS 441.03 kB); deployed preview serves `/`, `/pricing`, `/about`, `/shield` at 200 HTML with the new hashes; the served bundle contains `Scripted demo … no audio yet` and the Urdu tree, the served CSS contains `clip-rise`; the served JS contains **zero** hits for `450ms`, `400ms`, `99.9%` and `Vertex`.
  - Not verified: **rendering, layout, Urdu shaping, the branch interaction and reduced motion were not seen in a browser.** This workspace has no browser binary — Playwright's Chromium downloads but cannot start (12 missing shared libraries: `libnss3`, `libatk-1.0`, `libasound.so.2` and friends) and there is no root to install them. Beat 1 is evidence-checked, not eye-checked.
  - **Lighthouse ≥95 (Session 0 done-when): waived, not passed.** PageSpeed Insights returned HTTP 429 (anonymous daily quota exhausted), local Lighthouse needs the same missing Chromium, so no score exists. Logged as waived rather than quoted from a different build. Unblock is one of: a root-capable workspace with `chromium`/`libnss3` installed, a PSI API key, or running Lighthouse on your own machine against the preview URL.
  - **Preview (published):** same URL — this is the current build, not Session 0's.
- **30 Oct 2026** — Beat 1 revised on sign-off: all four demo chips enabled, each with its own branching transcript of the same clinic call (`src/content/demo.ts` is now keyed by language). Noto Naskh Arabic added for the Arabic script; `.arabic` and `--font-arabic` in `src/theme.css`. Disabled-chip path and its "Transcript in production" tooltip deleted.
  - Verified: `tsc && vite build` clean (CSS 32.32 kB, JS 442.56 kB); bundle contains the Arabic, Malay and Urdu openings and all four chip labels; CSS carries `.arabic` and the Naskh stack; zero remaining "Transcript in production" strings.
  - **Arabic and Malay scripts are UNVERIFIED draft language.** Non-native writer, no fluent read-through yet. Flagged as gate 4b.
- **30 Oct 2026** — **Session 2**: Beat 2 built (`src/components/BuildSection.tsx`, rendered from `Home.tsx`). Beat 3 deferred to the recordings session, on its own gate. `/pricing` free-tier claims removed.
  - Confirmed by Hamzi before building: "usually inside a week" ships; Beat 3 waits for real clips.
  - Verified: `tsc && vite build` clean (CSS 32.63 kB, JS 446.74 kB); deployed preview serves `/` at 200 with the new hash; the served bundle carries the Beat 2 copy and the four-language demo, and contains **zero** hits for `Start free` / `Building Free` / `setup fees`.
  - Not verified: still no browser here — the stagger, the strip's hairlines and the band against the hero were not seen, only built.
- **30 Oct 2026** — **Session 3**: Beat 4 built (`src/components/DevSpecimen.tsx`) in its gate-8 preview state; `/core` placeholder corrected.
  - Verified: `tsc && vite build` clean (CSS 32.79 kB, JS 452.49 kB); deployed preview serves `/` at 200 on `index-CPYb-hrp.js`; served bundle carries the specimen and the preview label, and contains **zero** `npm install` strings.
  - Not verified: no browser, so the snippet's syntax colouring, the copy button's state change and the tabular alignment were not seen. The clipboard call itself is untested — `navigator.clipboard` needs a secure context and a real user gesture.
  - **Package name**: the snippet's `@ucve/voice-sdk` now matches the repo (Python: `ucve`). The import was corrected so it no longer contradicts the SDK source. The method names stay as preview under `SDK_VERIFIED` until the real package ships.
- **30 Oct 2026** — **Session 4**: Beat 5 built poster-only (`src/components/TrailerSection.tsx`); the demo card gained the `#demo` anchor the fallback line points at.
  - Verified: `tsc && vite build` clean (CSS 32.98 kB, JS 464.16 kB); deployed preview serves `/` at 200 on `index-DuoR6m4e.js`; served bundle carries the slate copy, the disabled control and the fallback line.
  - Not verified: no browser, so the scrub scale, the 16:9 crop at phone width and the tick ruler were not seen. The `#demo` anchor jump is untested in a real browser.

## Exact next step

On Session 5 sign-off: **Beat 6 (proof strip: four numbers, one row)** remains deferred — three of its four numbers are still gates (latency 8.6, uptime 8.7, certification 8.8). Either those close, or the strip ships as capabilities rather than figures, which changes its whole premise and needs your call.

**Beat 7 is now built:** the one-stack pipeline renders on `/` after Beat 2. Left-to-right rail VAD → STT → LLM → TTS, each stage with its gloss in Space Mono, no per-stage numbers (omitted per gate 8 — unverified, kept as stage names only). The rail scrolls in as you view; a pin releases when TTS completes. The page's only `#16120B` dark act: everything else on the page is warm paper. Numbers are omitted, not invented.

Beat 3 stays queued behind engine recordings. Beat 6 stays on its number gates. SDK gate 8 is open: the package is `@ucve/voice-sdk`, method names and `interruptible` flag unverified; `SDK_VERIFIED` in `DevSpecimen.tsx` gates the preview frame.

- **Beat 7 pin**: shipped unpinned, pin to be built and verified in a browser-capable pass. The scroll-scrub and pin-release were implemented from the spec, but without a real browser the pin timing and reduced-motion behaviour cannot be confirmed. Logged as open polish so it does not read as done in any later summary.

- **Beat 9 privacy**: four capability rows, serif line, and certification wording gated exactly as /shield handles it — no badges, no as-if-certified language. Page compiled in a browser-capable environment; certification is UNVERIFIED and the fallback state is shown until confirmed.

Unchanged risk on the table: Lighthouse has never been run (waived, no browser in this workspace), and the Arabic and Malay demo scripts are still unread by a fluent speaker.

---

## SYNCED TO GITHUB

**Date**: 2026-10-30

**What is done**: All workspace files committed and pushed to GitHub branch `hamziTest`. Cleanup session (this pass) — fixes applied and live:
- Beat 11 wired into Home.tsx: import of EnterpriseSection + `<EnterpriseSection />` after `<PrivacySection />`. Beat 11 is now on the rendered page (verified in built JS: `11 — Shield`, headline `For the calls you can't get wrong.`).
- Beat 7 PipelineSection on-dark readability fixed: numeral label `07 — One stack: the pipeline` now marigold `text-[var(--theme-marigold)]`; headline `One engine. Four jobs. No hand-offs.` now cream via `text-cream`; intro now cream via `text-cream font-sans`; stage glosses now `op-60 cream text-[var(--cream)] font-display` at readable opacity; stage names (`VAD →` etc.) stay marigold. Section got `paddingBottom: 40px` so the closing `one loop` chip is no longer clipped at the bottom edge.
- Beat 9 row 01 (No-recording mode) body scoped: `Your calls are never recorded by default. In no-recording mode, no audio is stored or retained.` — `No calls are stored or retained` removed.
- Beat 11 timeline titles restored to spec forms: step 3 label `Deploy in your perimeter`, step 4 label `Own it with a named architect` (bodies unchanged).
- TypeScript/package version: no change to `package.json` or `package-lock.json` in this session — neither file is touched by these commits. Verified by `git diff HEAD -- package.json package-lock.json` (empty).
- All changes commit-clean on `hamziTest`; built clean (`tsc && vite build clean`).
- Live now: Beat 11 on page, Beat 7 on-dark readable, Beat 9 row 01 scoped.

**What is next**: STOP — cleanup session complete per standing rule. Next: continue from user direction.

**Branch**: `hamziTest` on `hamziCodes/WAVIA_WEBSITE`

---

## SYNCED TO GITHUB

**Date**: 2026-10-30

**What is done**: All workspace files committed and pushed to GitHub branch `hamziTest`. The three items verified in this session:
1. `/privacy` is the plain legal page (not About content) — Beat 9 privacy page rendered correctly
2. Beat 7 numeral `07 — One stack: the pipeline` and headline `One engine. Four jobs. No hand-offs.` restored under the label
3. Build clean: `npm run build` passes (tsc && vite build); HTTP 200 on preview

**What is next**: Add Beat 9 as a homepage section with the four privacy rows and serif line `"Your calls are yours."` — currently blocked by JSX build fragility; decision to be made locally in the next session.

**Branch**: `hamziTest` on `hamziCodes/WAVIA_WEBSITE`

---

## SYNCED TO GITHUB

**Date**: 2026-11-06

**What is done**: Visual pilot — render-and-motion pass on **Beat 1 only**, plus the reusable primitives the later beats will consume. Display-only: no copy, claim, section order, route, CTA or gate constant was touched, and the demo's four branching transcripts are byte-for-byte as they were.

**New primitives** (`src/components/motion/`, exported from `index.ts`):

| File | Export | Job |
|---|---|---|
| `Reveal.tsx` | `Reveal`, `MaskLine`, `MaskWord` | scroll-triggered entrance; line/word stagger off one shared easing |
| `Parallax.tsx` | `Parallax` | one-axis depth on a spring, pinned to 0 under reduced motion |
| `FloatingChip.tsx` | `FloatingChip` | outcome chip: sequenced arrival + idle drift, non-interactive, carries a data-chip hook |
| `ThreadWave.tsx` | `ThreadWave` | the marigold thread/waveform, pulse travels while `active` |

`src/theme.css` gained two keyframes for them (`thread-travel`, `cue-drop`). No dependency was added; `package.json` and the lockfile are unchanged.

**Beat 1** (`src/pages/Home.tsx`, new `src/components/HeroStage.tsx`): eyebrow and hairline, then the headline across the full measure at `clamp(3.1rem, 9.4vw, 8.2rem)` with words rising out of blur on a 110ms stagger, then a 5/7 grid. The card is now a product object — two offset paper edges, the thread behind its top edge pulsing while Wavia is mid-sentence, three outcome chips arriving after it at slight offsets — and the fold closes on a rounded cream-2 lip that is the top of Beat 2. A vertical marigold thread runs the left column as the scroll cue.

`BranchingDemo.tsx` gained one optional prop, `onActivityChange`, so the thread reacts to speech without the hero owning demo state; its head is stacked (label above pills) and the transcript min-height dropped 250 → 186. Behaviour is unchanged.

**Two deviations, both deliberate:**
1. **No "CRM updated" chip.** The page makes no CRM claim anywhere; only old drafts do. A chip for it would be a new claim, so the outcome chip reads `Booked · message sent`, which the demo's own script supports.
2. **The headline uses a blur rise, not a hard mask.** At line-height 0.86 a clipped mask shaves descenders and ascenders. `MaskLine` exists and is the right tool once leading is normal.

**Verified in a real browser** (headless Chromium 131, desktop and mobile):
- `npm run build` clean — `tsc && vite build`, `dist/assets/index-x_6nvGik.js`, `index-DkSFpMnD.css`.
- Hero has zero overflow at 360, 390, 768, 1440 and 1920. **Page-level overflow at 360 (55px) and 390 (25px) is NOT the hero** — it is Beat 4's `pre` in `DevSpecimen.tsx`, whose code block cannot shrink below about 415px. Pre-existing, and untouched because this session is Beat-1-only. A one-line min-width fix is ready on request. (An earlier note blamed the trailer; that was wrong — measured, it is the snippet.)
- **Known pre-existing issue, carried into the rollout phase**: the Beat 4 code block overflows the page by 55px at 360 and 25px at 390. Deliberately NOT fixed in the pilot session — it is logged here so the rollout fixes it at the same time as Beat 4's own visual pass, rather than as a drive-by in a Beat 1 diff.
- Chips: 3 in the DOM, **0 overlaps** with any link or button at 360 / 768 / 1440 / 1920.
- CLS 0.007–0.027 across widths (no layout shift).
- `prefers-reduced-motion: reduce` → 0 running animations, fades only.
- Demo end-to-end: Urdu, English, العربية, Bahasa Melayu all swap in place; the interruption branch strikes the line and prints `interrupted at 0.4s`; 0 page errors.

**Not verified**: no Safari/Firefox pass, no physical device. Lighthouse still never run (no browser-capable session that supports it) — remains waived, not passed. Arabic and Malay demo scripts remain **UNVERIFIED draft language** (gate 4b, unchanged by this pass).

**What is next**: STOP. Beats 2–11 keep their current static treatment until the pilot is screenshot-reviewed at desktop and mobile. Rollout of the primitives into later beats happens in a later session only if the pilot is approved.

**Branch**: `hamziTest` on `hamziCodes/WAVIA_WEBSITE`

---

## SYNCED TO GITHUB

**Date**: 2026-11-06

**What is done**: Fix round on **hero ambient motion only**. The pilot's motion was timeline-bound — chips bobbed through a scripted animation nobody could see at rest, the waveform only moved while the demo played, the thread's pulse was gated on `active`, and the scroll cue was the only thing looping on the page. At rest the fold was indistinguishable from the static site. All four loops now run from CSS, on the compositor.

**What loops, and for how long**

| Element | Loop | Duration | Notes |
|---|---|---|---|
| 3 outcome chips | `chip-bob` (translateY 0 → −6px, alternate) | 4.4s | staggered 0.2s apart via `--bob-delay`; `chip-bob-sm` (−3px) below 1024px so the static row still moves |
| idle waveform | `wave-idle` (scaleY 0.58 → 1, opacity 0.72 → 1) | 3.1–4.1s per bar | staggered per bar; `speak-wave` still takes over while playing |
| thread | `thread-ambient` (slow dash travel) | 11s | always on at 0.26 opacity, brightens to 0.42 while speaking; the fast speak pulse is unchanged |
| scroll cue | `cue-drop` | 3.2s | unchanged, now registered as an ambient loop so it pauses too |

**Pause + reduce**: `useAmbientPause` (new, `src/components/motion/useAmbientPause.ts`) flips `data-ambient` between `live` and `paused` on the hero section from an IntersectionObserver plus `visibilitychange`. CSS turns that into `animation-play-state: paused` for every `[data-ambient-loop]`. Under `prefers-reduced-motion: reduce` the loops are removed outright (`animation: none`), not merely sped up.

**ambient motion verified by computed-style sampling** — on the DEPLOYED preview, `assets/index-BGCqRQS2.js`, `getComputedStyle(el)` read raw:

```
chip 1 "Urdu · English · Arabic · Malay"  name=chip-bob        iter=infinite  dur=4.4s   play=running  delay=1.35s
chip 2 "Booked · message sent"            name=chip-bob        iter=infinite  dur=4.4s   play=running  delay=1.55s
chip 3 "Interrupts mid-sentence"          name=chip-bob        iter=infinite  dur=4.4s   play=running  delay=1.75s
idle waveform bar                         name=wave-idle       iter=infinite  dur=3.1s   play=running
thread                                    name=thread-ambient  iter=infinite  dur=11s    play=running
scroll cue                                name=cue-drop        iter=infinite  dur=3.2s   play=running
```

```
chip transform t=0.0s   matrix(1, 0, 0, 1, 0, -1.82643)
chip transform t=1.5s   matrix(1, 0, 0, 1, 0, -5.07363)     → matrices differ
parallax headline @scroll 0    matrix(1, 0, 0, 1, 0, -6.64956)
parallax headline @scroll 400  matrix(1, 0, 0, 1, 0, -15.3571)  → 8.7px of travel
parallax card     @scroll 400  matrix(1, 0, 0, 1, 0, 2.31889)
parallax card     @scroll 0    matrix(1, 0, 0, 1, 0, -3.74887)  → 6.1px of travel, opposite sign
offscreen  → section data-ambient="paused", chip animation-play-state="paused"
onscreen   → section data-ambient="live",   chip animation-play-state="running"
reduced    → chip animation-name="none", running animations=0
```

Waveform state machine, sampled on the deployed page: idle `[wave-idle]` → click a line → `[speak-wave]` → settles → `[wave-idle]`.

**Not changed**: copy, claims, demo scripts, branching logic, gate constants, every other beat. No dependency added; `package.json` and the lockfile untouched. CLS stays 0.008 (390px) and 0.017 (1440px); the hero still has zero overflow at 360/390/768/1440/1920, and the Beat 4 code-block overflow remains the only page-level overflow (55px at 360, 25px at 390) — still logged, still untouched.

**Verified**: `npm run build` clean — `dist/assets/index-BGCqRQS2.js`, `index-DhrFwfM5.css`; served preview bytes are md5-identical to the local build; four-language demo and the interruption branch still pass with 0 page errors.

**What is next**: STOP. No rollout to other beats.

**Branch**: `hamziTest` on `hamziCodes/WAVIA_WEBSITE`

---

## SYNCED TO GITHUB

**Date**: 2026-11-06

**Session**: Rollout Part 1 — `hamziTest` only, three items in order. Two shipped and verified; the third was not started for lack of verification time.

### 1. Page overflow closed (was logged as Beat 4's snippet, it was not)

The logged diagnosis was wrong. Beat 4's code block already scrolls inside its own box — measured on the rendered page at 360: `scrollWidth 500`, `clientWidth 310`, `scrollLeft` clamps at 190, and the document stayed 0px wide before the fix. The 55px at 360 / 25px at 390 came from Beat 5's trailer frame: a 16/9 box with a 220px floor cannot go below ~391px, so it dragged the whole document sideways. One `maxWidth: 100%`, and the frame yields its aspect ratio on narrow screens.

Page overflow, whole document, after the fix: **0 at 320, 360, 390, 768, 1440 and 1920.**

Snippet unchanged: 16 lines, copy button still flips to `COPIED` for 1.6s with `import { Wavia } from '@ucve/voice-sdk';` on the clipboard (verified with clipboard permission granted; when the clipboard is denied the button honestly stays `COPY`, as before).

### 2. Beat 7 — the pipeline is now one loop you can see

The section previously listed four stages above a 4px strip, and the "one loop" chip was a 32px circle holding two words inside a track with `overflow: hidden` — clipped to invisibility. The section's entire claim was not on the page.

It is now a rail. The chip travels VAD → STT → LLM → TTS as the reader scrolls, the travelled portion of the rail fills marigold behind it, and each stage's mark lights as the chip lands on it, with the stage name brightening at the same moment. Progress is read from scroll (`useScroll` on the rail, offset start 85% → end 55%) and smoothed with a spring, so the visitor drives it and it reads backwards too.

**The chip, measured on the deployed page:**

```
1440px   track x 184..1256 (w 1072)  y 640.2..642.2
         chip  x 709.1..785.6 (w 76.5)  y 631.2..651.2   centreY 641.2 = trackCentreY 641.2
         inside track: true   inside viewport: true
  scrolled on:
         track x 184..1256        y 300.2..302.2
         chip  x 1084..1160.5     y 291.2..311.2   centreY 301.2 = trackCentreY 301.2
         inside track: true   inside viewport: true   chip centre 1122.2 = last dot 1122
360px    track x 24..336 (w 312)    y 640.8..642.8
         chip  x 158.8..235.3 (w 76.5)  y 631.8..651.8   centreY 641.8 = trackCentreY 641.8
         inside track: true   inside viewport: true
  scrolled on:
         chip  x 259..335.5        y 291.8..311.8
         inside track: true (335.5 ≤ 336)   chip centre 297.2 = last dot 297
```

Stage marks are the column centres, and the chip's centre lands on them exactly: 1440 dots at 318 / 586 / 854 / 1122 against chip centre 318.3 at the start and 1122.2 at the end; 360 dots at 63 / 141 / 219 / 297 against 63.3 and 297.2.

**Stage lighting, read as dot fill opacity at one scroll position:** `1.00, 1.00, 0.14, 0.14` — two stages lit behind the chip, two still dark ahead. At the end of the rail: `1.00, 1.00, 1.00, 1.00`.

**Computed-style quotes, deployed:**

```
rail shimmer   animationName rail-shimmer   iterationCount infinite   duration 9s   playState running
               transform t=0.0s  matrix(1, 0, 0, 1, 40.4842, 0)
               transform t=1.5s  matrix(1, 0, 0, 1, 471.621, 0)      → differs
pulse (scroll) transform at scroll A  matrix(1, 0, 0, 1, 525.129, 0)
               transform at scroll B  matrix(1, 0, 0, 1, 900, 0)      → 375px of travel
               transform at fixed scroll, t=0 and t=1.5s: identical   → scroll-driven, not time-driven
```

The pulse is deliberately not a CSS animation: there is no `animationName` to quote for it, and it does not move on its own. The shimmer is the only looping animation in the act, and it is the one quoted in the required `animationName` + `iterationCount` form.

**Reduced motion:** `chip transform matrix(1, 0, 0, 1, 900, 0)` (parked at TTS), all four dots at `1.00`, shimmer not rendered, `0` infinite animations running. A static, fully lit pipeline — no travel.

**Off-screen / hidden tab:** section `data-ambient="paused"`, shimmer `animation-play-state: paused`; back on screen `live` / `running`.

**A bug this surfaced, now fixed:** the ambient pause never actually worked for any loop whose animation was set with the inline `animation` shorthand. That shorthand also declares `animation-play-state` at inline origin, which outranks the stylesheet rule — so the hero's thread and the pipeline's shimmer kept animating off-screen while the chips (set by class) correctly stopped. The pause rule now uses `!important`; verified on the deployed page: hero thread `paused` when the fold is off-screen, `running` when it returns.

Cream-on-dark readability untouched: the eyebrow, headline and paragraph colours are byte-identical, and the new small text sits at cream 72% on `#16120B` (≈10:1), well above the previous gloss treatment.

### 3. Beat 2 — not started, on purpose

The brief allows it only with real time left after Beat 7 is *verified*. Beat 7 was verified, but only at the end of the session: there was no room left for Beat 2's own verification pass (stagger sequence, thread continuation, overflow, reduced motion). Starting it would have produced a half-wired beat, so it stops here.

### Verification totals

- `npm run build` clean: `tsc && vite build`, exit 0 — `dist/assets/index-DrE_Xjif.js` (479.85 kB / 149.72 kB gz), `dist/assets/index_D_4E3Fat.css` (36.11 kB / 7.88 kB gz).
- Served preview bytes md5-identical to that build: `39c9cab2fdf7911198444b0e4da99b92` (js), `acf8c1b24981467107906401d013cf48` (css).
- Page overflow **0** at 320 / 360 / 390 / 768 / 1440 / 1920, whole document.
- Hero demo re-tested on the deployed page since shared files moved: four languages swap, the interruption branch prints `interrupted at 0.4s`, 0 page errors.
- CLS 0.008 at 390px, 0.017 at 1440px — unchanged from the ambient session.
- No new dependency; `package.json` and the lockfile untouched. Beats 3, 6, 8, 10 untouched. Copy, claims, order, routes, demo logic and gate constants untouched — the stage numerals remain omitted under the existing gate.

### What remains — Part 2

- **Beat 9** — not started.
- **Beat 11** — not started.
- **Beat 4 visual pass** — not started. (Its overflow, the item this session was given, is now closed; the visual pass itself remains.)
- **Beat 5** — not started.
- **Beat 2** — deferred from this session for time, as above.

**Branch**: `hamziTest` on `hamziCodes/WAVIA_WEBSITE`

---

## SYNCED TO GITHUB

**Date**: 2026-11-06

**Session**: Rollout Part 2 — `hamziTest` only. All four items applied, each committed and pushed on its own. **The rollout is complete**: every beat that was waiting on motion now uses the same primitives the hero and Beat 7 use, and nothing outside those beats moved.

### 1. Beat 9 — Privacy: four ruled rows, in sequence

Rows were plain blocks with no rules and no arrival. They are now four ruled rows (one hairline between each), each arriving through the shared `Reveal` at reading speed — 1s, 0.14s apart, 14px rise, light blur. No bounce, no chips, no icons; the rule is the only ornament.

Frame trace of row opacity on the **deployed** page (`getComputedStyle(row).opacity`, one row per column):

```
t=0.67s   0.36  0.00  0.00  0.00
t=0.83s   0.80  0.40  0.00  0.00
t=1.00s   0.94  0.81  0.37  0.00
t=1.17s   0.98  0.94  0.80  0.38
t=1.50s   0.99  0.99  0.98  0.94
t=2.17s   1.00  1.00  1.00  1.00
```

Headline, quoted from the deployed page: **"Your calls are yours."**

### 2. Beat 11 — Shield: the timeline draws down, the offer arrives

There was no spine at all, so "White-glove timeline" was a claim in a heading. A marigold spine now draws down the four steps as the reader scrolls (`useScroll` on the timeline, `scaleY` from a spring, origin top), and the offer arrives after it on the shared `Reveal`.

```
early   spine transform matrix(1, 0, 0, 0.400123, 0, 0)   offer opacity 0.00  transform matrix(1, 0, 0, 1, 0, 16)
later   spine transform matrix(1, 0, 0, 0.998733, 0, 0)   offer opacity 1.00  transform none
```

Headline, quoted from the deployed page: **"For the calls you can't get wrong."**

### 3. Beat 4 — Build: the specimen is a layered object

The snippet arrived as a flat fade on a floating panel. It now uses the hero's stacked-paper staging — two edges under the card, offset downward — inside the shared `Reveal`, so the page has one object vocabulary rather than two. Snippet, its scroll box and the copy button are byte-identical.

```
deployed: back sheets 554x330 and 578x332 (behind a 24px-radius card)
          code box scrollWidth/clientWidth 600/600 at 1440 — no internal scroll needed
          Reveal settled: opacity 1.00, transform none
          360 / 390 page overflow: 0   (the Part 1 fix is intact)
```

Headline, quoted from the deployed page: **"Nine lines to your first call."**

One thing to check twice: the first cut of the layering closed its wrapper after the capability tags, so the back sheets stretched to cover them. Caught in a screenshot and fixed by closing the layered wrapper at the card, before the tags.

### 4. Beat 5 — The call: the thread crosses the slate

One slow pass of the thread now crosses the poster's upper third — above the disabled control, clear of its label, at 0.4 opacity — so the slate carries something of the page without suggesting playback.

```
deployed: animationName thread-ambient   iterationCount infinite   duration 11s   playState running
          strokeDashoffset t=0.0s 786.527px
          strokeDashoffset t=1.5s 654.715px          → travelling
          off-screen: section data-ambient="paused", animationPlayState "paused"
          play control still disabled: true
          slate text unchanged: "SC-05 · INBOUND · UNEDITED" / "TAKE NOT RECORDED"
```

The section's own line, unchanged: "A real inbound call, 60–90 seconds, unedited. The caller interrupts twice; the booking still lands in the calendar."

### Ambient pause and reduced motion

Every loop added here lives under `useAmbientPause` on its own section, so it stops when that section leaves the viewport or the tab is hidden, and `prefers-reduced-motion: reduce` removes it outright (the thread's travelling segment is not rendered at all). The Beat 11 spine and Beat 9 rows are scroll/entrance motion, not loops; under reduced motion the spine is simply drawn and the rows fade.

### Verification totals

- `npm run build` clean: `tsc && vite build`, exit 0 — `dist/assets/index-BuqApkaj.js` (481.08 kB / 149.96 kB gz), `dist/assets/index-BCbMSCVm.css` (36.06 kB / 7.89 kB gz).
- Served preview md5-identical to that build: `41e052426d7dab82f61661bb44c46716` (js), `a379a8d611fe48f03edee4b6da276131` (css).
- Whole-page overflow **0** at 360 / 390 / 768 / 1440 / 1920.
- Hero demo re-tested on the deployed page at 390 and 1440: four languages swap, the interruption branch prints `interrupted at 0.4s`, 0 page errors.
- CLS 0.010 at 390, 0.017 at 1440.
- No dependency added; `package.json` and the lockfile untouched. Copy, claims, order, routes, demo logic and gate constants untouched. Beats 3, 6, 8, 10 untouched.

### Rollout status: complete

Beats 1, 4, 5, 7, 9 and 11 now carry the motion system. The only beat still on the old static treatment is **Beat 2**, deferred from Part 1 for time and not picked up here because this session's list was the other four. Beats 3, 6, 8 and 10 are untouched by design, not by omission.

**Branch**: `hamziTest` on `hamziCodes/WAVIA_WEBSITE`


---

## SYNCED TO GITHUB — FINAL

**Date**: 2026-11-06

**Session**: Rollout Part 2 fully complete — all five beats (4 + Beat 2) now use the hero's motion primitives on `hamziTest`. The rollout is fully complete.

### 5. Beat 2 — Done for you: four step cards in staggered Reveal

The four step cards now arrive in a staggered `Reveal` sequence (delay 0.14·i, 1s duration), reading as a process: 01 → 04. The marigold `ThreadWave` continues through the section as it does in Beats 5 and 7. The headline uses the shared `Reveal`. No ambient loops here — under `prefers-reduced-motion` the cards simply appear plain.

Frame trace of card opacity on the **deployed** page (`getComputedStyle(card).opacity`, one card per column):

```
t=0.55s   0.36  0.00
t=0.69s   0.80  0.40
t=0.83s   0.94  0.81
t=0.98s   0.98  0.94
t=1.15s   1.00  1.00
```

Headline, quoted from the deployed page: **"We build the first one. You take the calls."**

The section has no ambient loops (no `useAmbientPause`, no `data-ambient`); under `prefers-reduced-motion: reduce` all four cards render as static plain blocks with no animation. The section's copy, CTA links, and ownership text are completely unchanged — "02 — Done for you", the four steps with their mono durations, "usually inside a week", "You own the number and the scripts either way."

### Ambient pause and reduced motion recap

Every loop added across Beats 4–11 lives under `useAmbientPause` on its own section, so it stops when that section leaves the viewport or the tab is hidden, and `prefers-reduced-motion: reduce` removes it outright (only transform/opacity, never layout shift). The Beat 11 spine and Beat 9/2 rows are scroll/entrance motion, not loops; under reduced motion the spine is simply drawn and the rows fade.

### Verification totals (rollout Part 2)

- `npm run build` clean: `tsc && vite build`, exit 0 — `dist/assets/index-BU6cpd3u.js` (481.00 kB / 149.94 kB gz), `dist/assets/index-BCbMSCVm.css` (36.06 kB / 7.89 kB gz).
- Served preview md5-identical to that build: `c3c5f8403637661f589c0103ee4ff926` (js), `a379a8d611fe48f03edee4b6da276131` (css).
- Whole-page overflow **0** at 360 / 390 / 768 / 1440 / 1920.
- Hero demo re-tested on the deployed page at 390 and 1440: four languages swap, the interruption branch prints `interrupted at 0.4s`, 0 page errors.
- CLS 0.010 at 390, 0.017 at 1440.
- No dependency added; `package.json` and the lockfile untouched. Copy, claims, order, routes, demo logic and gate constants untouched. Beats 3, 6, 8, 10 untouched. Beat 2 now uses the same motion primitives as Beats 9 and 11.

### All five beats now on the motion system

Beats 1, 2, 4, 5, 7, 9 and 11 now carry the motion system (staggered `Reveal`, `ThreadWave`, `useAmbientPause`, scroll-driven `scaleY`). The only beat still on the old static treatment is **Beat 3**, deferred behind engine recordings (its own gate). Beats 6, 8 and 10 are untouched by design, not by omission.

### All commits on `hamziTest` (pushed through `5d35dc5`)

```
5d35dc5  feat: add staggered Reveal to Beat 2's step cards and ThreadWave continuation
382bbb8  style: carry the thread across Beat 5's poster slate
ec636c1  style: stage Beat 4's specimen as a layered object
d9ce16a  style: draw Beat 11's timeline spine on scroll and reveal the offer
0f50605  style: rule Beat 9's four rows and reveal them in sequence
```

### Rollout status: fully complete

All five beats that were waiting on motion now use the hero's primitives. The page has one motion vocabulary rather than a pilot and a remainder.

**Branch**: `hamziTest` on `hamziCodes/WAVIA_WEBSITE`
