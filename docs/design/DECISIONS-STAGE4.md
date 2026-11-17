# Stage 4 — website build decisions (C2 · Ripple Paper)

Branch `website`, folder `website/`. Sources: `ripple-c2/RIPPLE-C2-MASTER.md`,
the two C2 reference HTMLs, `docs/DESIGN.md` + `docs/design/design-tokens.json`
(repo root), `IMMERSIVE_SCENARIO.md`, `scroll-story.md`, and the Stage 4 brief.
Where these disagree or are silent, the choice below keeps the system coherent
("harmony over literalism", master §7.4). Each entry: what, why, how to undo.

## Identity

1. **C2 palette only, on every page.** Master §5.3 kept the Theme B "Marigold
   Market" skin for marketing pages; the Stage 4 brief says C2 only. The brief
   wins. All colours are CSS custom properties in `src/styles/tokens.css`
   (aubergine, lime, lilac, bone, lilac-deep, aubergine-raised/-line,
   studio-paper). `studio-paper #FFF6E5` — a C2 bridge token — is used only as
   a panel fill (code blocks, notices, illustrative Studio frames).
2. **One display face: Instrument Serif, also for body text.** DESIGN.md §9
   allows one display face per surface and gives paper surfaces Instrument
   Serif. No body face exists in the system, so body copy is Instrument Serif
   at ≥18px; Space Mono carries labels, code and tables. Bricolage Grotesque
   (dark teaser face) is not used.
3. **Aubergine ground in exactly two places:** the engine-stack band on the
   landing page (the scroll story's single "dark act") and the footer. The lime
   dot-ripple motif belongs to the dark teaser face and is not used.
4. **Single light polarity, no dark mode or theme toggle** (standing rule in
   PROGRESS.md).
5. **Square paper, no shadows, no gradients.** Radius only on the tilted lime
   sticker and the disc. The wordmark's lilac dot gets a 1px aubergine border so
   lilac never stands alone on bone. In display headings the lime highlight is a
   tight inline block so its fill never covers the line above.
6. **Fonts self-hosted** via `@fontsource` (DESIGN.md §8 "self-host in
   production"); no third-party font requests, which the privacy page states.

## Structure

7. **Nav:** Custom · Studio · Developers · Pricing, then the auth group — lime
   *Sign up* and *Sign in* last (master §5.4). Product, How it works, About,
   Contact, Demo and legal live in the footer and in page links.
8. **Docs live at `/developers/docs`** (no `docs.` subdomain exists); `/docs`
   redirects there. Content is taken from `sdk/` and `control_plane/` in this
   repo.
9. **`/signup` and `/login`** are pure-C2 hand-off pages; every Sign up / Sign in
   button links straight to `${VITE_STUDIO_URL}/sign-up` and `/sign-in`
   (default `http://127.0.0.1:3100`). Note: `vercel.json` (deploy config, not
   touched) still redirects `/login` → `/studio` server-side.
10. **Old URLs** (`/core`, `/shield`, `/enterprise`, `/for-developers`,
    `/get-started`) redirect client-side to their new homes.

## Landing story

11. **Scenes: land + five (ring → conversation → interruption → booking →
    record)**, one sticky stage, one call object that transforms
    (disc → card → struck turn → stamped slot → record). Scenes 5–10 of
    IMMERSIVE_SCENARIO (branching demo, seal, ports, pricing) become calm,
    unpinned sections: the engine stack, the three doors, data controls, CTA.
12. **Booking and "CRM record" are dramatised, not claimed.** No CRM or calendar
    integration is verified, so the record is shown as Studio's conversation
    record: post-call summary + extracted fields (real features). The stage is
    labelled "Scripted demo · no audio · illustrative".
13. **The four-language branching demo was removed.** Its Arabic and Malay
    scripts were unverified drafts and there is no audio. Languages appear as
    configuration facts, in English names only.
14. **No GSAP.** A ~200-line rAF scroll timeline (one rect read per frame,
    transform/opacity writes only) replaces it; `gsap`, `motion`, `lucide-react`
    and Tailwind were removed to keep the bundle lean (~110 kB JS gzip).
15. **Static sequence** for `prefers-reduced-motion` *and* screens shorter than
    540px: six stills of the same call object plus the full transcript as text.

## Facts discipline

16. **Pricing shows no prices.** Master §4 cites "$29/mo, 30 free minutes"; the
    brief says no billing system and no invented prices. The page lists the five
    real meters and invites contact.
17. **`/demo` uses Studio's sections** (Overview, Agents, Conversations,
    Knowledge, Usage, Audit log) rather than the engine-board nav, because it
    previews Studio. Sample data is labelled in a persistent banner, the
    masthead pill and under every panel. **No latency numbers, even as
    samples:** the turn bar shows stage order ("widths not to scale") and the
    event ledger uses sequence numbers with real protocol v1 event names.
18. **Telephony = Telnyx only** (Twilio is in the master doc but unverified).
    Flutter, webhooks, tool calls, test/live environments, no-recording mode and
    "zero training" are left out as unverified.
19. **No install commands.** Package names are given (`@ucve/voice-sdk`,
    `ucve-voice-sdk`); registry publication is unverified, so no `npm install`
    or `pip install` line appears.
20. **Contact has no default address.** `VITE_CONTACT_EMAIL` sets it; the form
    only composes a `mailto:` and says nothing is sent. Unset, the page says so.
21. **Legal pages are "preview editions"** that name no legal entity (company
    name unconfirmed) and claim no certification.
