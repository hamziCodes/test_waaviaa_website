# Wavia Website — The Immersive Scenario v1

Written 6 Nov 2026 (Kai, from Hamzi's clarification of 6 Nov 22:58) as the build
spec for the redo on branch `Kai` (based on FreeBuff's final hamziTest commit
`ffd9e3f`). This document supersedes the motion language of
`Wavia_Website_End_Result_Vision.md` where the two conflict: the look (Theme B),
the claims discipline and the gates from that doc still hold. Hamzi approves or
corrects this scenario first; only then does building start.

## The idea

The current site is a 2D page: sections stacked, cards revealing as you scroll,
too much text on screen at once. What replaces it is a **scroll journey with one
persistent object — the call**.

Three reference mechanics, translated:

1. **The phone** (Hamzi's example): an object slides in and stays; its contents
   animate *out of it* into the page, with lines/callouts explaining each piece.
   → Our object is the call card ("the stage"). The conversation flows out of it.
2. **The building** (his example): scroll constructs the thing layer by layer,
   and the cross-section is annotated as it builds. → Beat 7 becomes a stack
   that assembles floor by floor: VAD, STT, LLM, TTS.
3. **The container ship** (his example): the landing surface itself becomes the
   vessel; scroll sails it from source to destination, and the ports along the
   way are the audiences and proof. → The whole homepage is one call's voyage:
   ring → conversation → interruption → booking → CRM record. The visitor
   doesn't read about a call; they travel with one.

## Global rules (every scene obeys these)

- **One stage, pinned.** On the homepage, a single stage (the call card + the
  marigold thread) pins to the viewport and the *world changes around it* as
  you scroll. Scenes are scroll-scrubbed timelines (progress = scroll
  position), not play-once reveals. Scrolling back reverses the scene.
- **One idea per scene.** Each scene lands exactly one of the story's
  sentences. If a scene needs a paragraph to explain itself, it's two scenes.
- **Copy diet.** Max ~15 words of body text on screen per scene, excluding the
  transcript itself and labels. Everything the current site dumps into
  paragraphs (capability walls, feature lists, explanations) moves to the
  sub-pages or becomes a visual. The homepage *shows*; the sub-pages *tell*.
- **Type.** The current failure is not the font family, it's the usage: too
  many words at reading size. New usage: Bricolage Grotesque at architectural
  scale (headlines as the scene's scenery, 64–120px desktop), Instrument Sans
  only for the few functional lines, Space Mono only for transcript/labels/
  ticks, Instrument Serif italic for exactly one human line per page.
  *(Open decision for Hamzi before build: keep Bricolage as the display face
  under this new usage, or replace the display face entirely — his call, one
  word, decided before Scene 0 is built.)*
- **Colour.** Theme B unchanged: paper `#FFF6E5`, ink `#1C1408`, marigold
  `#B45309`, surfaces `#FFFBF2`/`#FBEACD`/`#F6E6C8`, one dark act `#16120B`.
- **The thread is the route.** The marigold thread is the ship's route line:
  it leaves the phone, carries the booking, docks into the CRM, runs through
  the stack, and ends at the footer wordmark. It is drawn by scroll, never
  decoration.
- **Honesty, unchanged.** No open live demo; scenes dramatise the existing
  scripted demo transcript and are labelled as such. No invented numbers,
  certifications or outcomes. Gates stay shut: recordings (Beat 3 material),
  proof numbers (Beat 6), pricing numbers (Beat 8), SDK facts (Beat 10) —
  scenes that touch them are designed around the gate, not through it.
- **Motion tech.** GSAP + ScrollTrigger (the one new dependency, named now),
  pinning + scrub. Transform/opacity/stroke only. Every loop pauses
  off-screen. `prefers-reduced-motion`: no pinning, every scene renders in its
  final, fully-readable state.
- **Mobile.** Scenes compress, never break: the stage goes full-width, pin
  durations shorten, callouts stack under the stage instead of beside it. A
  scene that can't hold at 390px is redesigned, not shipped broken.

## The homepage, scene by scene

### Scene 0 — Land (no scroll yet)
Full viewport. Giant "It picks up." The call card sits right-of-centre, idle,
waveform breathing. Under it, the four language names in mono. One line only:
"Wavia answers in Urdu, English, Arabic and Bahasa Melayu." A scroll cue and
the thread's start. Nothing else on screen — the current hero's bullet list
and disclaimer block move below the fold / shrink to a single honest label:
"Scripted demo · transcript, no audio yet."
**Lands:** it answers my business phone.

### Scene 1 — The ring (~100vh of scroll)
The stage pins. The page background subtly darkens toward the card (the world
quiets). The phone rings: an incoming-call state scrubs in — caller name
"Clinic line", the marigold ring pulse. The headline words slide away as the
card grows to centre stage. By the end of the scene the call is answered and
the first Wavia line types into the transcript: the clinic greeting, in Urdu
script, large.
**Lands:** it picks up — really picks up.

### Scene 2 — The conversation flows out (~200vh)
The transcript now drives the page. As scroll advances, each line of the
existing demo call plays in the card — and as the key lines land, they *leave
the phone*: a line lifts out along a drawn path to a callout beside the stage.
Three callouts only:
- the Urdu line → "In Urdu. Not translated later — spoken first." (the other
  three language names tick in beside it)
- the caller's request ("Thursday, ten.") → "It understands the ask."
- Wavia's confirmation → "It books it."
Between callouts, the stage is the only thing on screen. No feature grid
exists anymore — the features are these moments.
**Lands:** in Urdu, and it does the job.

### Scene 3 — The interruption (~100vh)
The signature scene, given its own room. A new Wavia line starts speaking —
and mid-sentence the caller's line strikes through it, exactly as the demo
does ("interrupted at 0.4s"). The waveform flatlines the instant the caller
starts. One callout, big serif italic: "It stops talking the moment your
caller starts." Nothing else competes with it.
**Lands:** I can talk over it.

### Scene 4 — The booking docks (~150vh)
The voyage's destination. The transcript's booking line glows, lifts out of
the phone, and travels along the thread — the page pans with it — into a CRM
record panel that assembles on the right like the ship docking: fields fill
in one by one from the call itself (Caller · Thursday 10:00 · Confirmation
sent), each field stamped as the corresponding transcript line highlights
back in the phone. End state: phone and CRM side by side, thread connecting
them, one line: "Booked — and written where your team works."
**Lands:** it books the appointment and writes the CRM.

### Scene 5 — Your turn (interactive, unpinned)
The stage unpins and the existing branching demo takes over, full-size,
under Beat 2's headline: "We build the first one. You take the calls." The
visitor plays the caller (all existing demo logic, four languages,
interruption branch — untouched). Around it, the four setup steps are no
longer cards in a grid: they are four short stations under the demo —
Script call ~30 min · Build & train 2–3 days · Test on your line 1 day ·
Handover live — each lighting as it scrolls into view, with the ownership
line: "You own the number and the scripts either way."
**Lands:** done for you, and it's yours.

### Scene 6 — The cross-section (~200vh, the dark act)
Lights drop to `#16120B`. The building scene: an empty outline of the stack
sits centre. Scroll assembles it floor by floor — VAD ("Hears you stop
talking") locks in at the base, then STT, then LLM, then TTS at the top —
each floor sliding/drawing in with its annotation line, a pulse travelling
up through the completed floors as they stack. The "one loop" pill rides the
pulse. At completion the whole stack breathes once as a single object.
Headline: "One engine. Four jobs. No hand-offs." One supporting line: "Not
four vendors stitched together."
**Lands:** one engine, not a patchwork.

### Scene 7 — The seal (~100vh)
Register change: the printed-contract scene. The call card returns, and as
scroll advances a seal closes over it — the four privacy facts arrive as
four ruled lines stamped beside the sealed card, one per scroll beat:
No-recording mode · Data fencing · Zero model training · Signed webhooks.
Serif headline: "Your calls are yours." Slow, quiet, no other motion.
**Lands:** my calls are mine.

### Scene 8 — Who it's for (~150vh)
The ship's ports. The stage shrinks to a small phone that travels a
horizontal route across three vignettes as you scroll: **the clinic**
(reception that never sleeps — the demo's own setting), **the restaurant**,
**the services business** — each vignette is one image-like composition
(built from type and shapes, no stock photos, no generated imagery) + one
line naming what Wavia does there. A fourth, smaller port: **developers** —
the phone docks into a code panel ("Nine lines to your first call."), the
existing SDK specimen, preview-labelled as it is today.
*(Vignette businesses stay generic until real recordings/customers exist —
no Spice Hut outcome line, as locked.)*
**Lands:** it's for people like me.

### Scene 9 — Pricing (short, calm, still gated)
The voyage ends; the page breathes out. Three calm cards — Studio / Core /
Shield — rise as one group, middle card edged in marigold. Numbers ship only
when Hamzi confirms them (gate 10); until then this scene is designed and
built with the current live numbers *held in one constant*, swappable in a
minute, and reviewed by him before any launch.
**Lands:** it has a price, and it's sane. *(copy lands when numbers do)*

### Scene 10 — Footer
The thread completes its route across the top of the marigold footer and
plugs into the giant ink `wavia.` wordmark. "Where the conversation actually
happens." Links, "© 2026 Wavia". The route you travelled is visible end to
end if you scroll back up — the page is one journey, not twelve sections.

## The sub-pages — immersive-lite

Same design language, one scrub moment each, no full journey. They carry the
detail the homepage no longer dumps.

- **/core** — the engine page: Scene 6's stack, explorable — each floor gets
  its own scroll beat with the technical depth (latency behaviour,
  interruption mechanics) the homepage omits. One pinned diagram, rest calm.
- **/studio** — the dashboard page: a Studio screenshot-frame (built from the
  real SCR structure, not a mockup image) that scrolls through its tabs as
  the page scrolls — Persona → Languages → Providers → Monitor — one line
  each. Ties the marketing site to the actual Studio pilot.
- **/shield** — the enterprise page: slower, heavier. The white-glove
  timeline as a drawn vertical route (Scope → Build → Deploy in your
  perimeter → Own it with a named architect), drawn by scroll. Nothing else
  moves.
- **/pricing** — the calm page: the three cards, a comparison table that
  reveals row by row, one FAQ accordion. No pinning.
- **/for-developers** — docs-grade: the self-typing code specimen, endpoint
  list, webhook payload visual. Motion limited to the typing + reveals.
  Preview gates on the SDK stay exactly as they are.
- **/how-it-works** — the journey, retold slowly with the detail scenes cut:
  each homepage scene gets a full text explanation here for visitors who
  want the words. (This page absorbs the copy the homepage diet removed.)
- **/about** — the studio page: type-led, one serif moment, team/facts in
  plain structure. Minimal motion.
- **/contact** — one panel, the walkthrough form, thread motif in the
  header. Nothing else.
- **/status** — plain operational page: mono, factual, no choreography.
- **/privacy** and **/terms** — plain legal pages, unchanged in spirit: no
  motion at all, by design.
- **/get-started** and **/login** — functional pages wearing the theme;
  no scroll scenes.

## What gets removed or demoted from the current site

- The hero's bullet list, floating chips and disclaimer block (Scene 0 diet).
- Every capability-tag wall and feature grid — features become scenes or
  move to sub-pages.
- Beat 2's step-card grid → stations under the interactive demo (Scene 5).
- Beat 4's homepage specimen as a static card → the developer port inside
  Scene 8 + the full page at /for-developers.
- Beat 5's empty trailer slate → removed from the homepage journey until
  real footage exists; the trailer, when filmed, becomes a scene between
  5 and 6 (poster slate only until then, off the main route).
- The skip-numbering problem (02, 04, 05…) disappears: scenes are a journey,
  not numbered sections. The five sentences land in order, no gaps.

## Build order (each stage screenshot-verified by Kai before the next)

1. **Pilot: Scenes 0–4** (land → ring → conversation → interruption →
   booking docks). This is the whole thesis in five scenes. Kai builds,
   serves, screenshots desktop + mobile, Hamzi judges against his examples.
2. **Scenes 5–7** (interactive demo, cross-section, seal).
3. **Scenes 8–10** (audiences, pricing shell, footer).
4. **Sub-pages lite**, in route order above.
5. Full-page QA: overflow, CLS, reduced-motion states, demo logic regression
   (the interactive demo must survive the rebuild functionally identical).

## Open decisions for Hamzi (before or during the pilot)

1. Display face: keep Bricolage Grotesque under the new type usage, or
   replace it? (One word — decide before Scene 0.)
2. Scene appetite: the journey above is ~1,150vh of scroll. Longer = more
   cinematic, shorter = snappier. Pilot will prove the feel at Scenes 0–4.
3. Trailer: park it off-route (as specced) until footage exists — confirm.
