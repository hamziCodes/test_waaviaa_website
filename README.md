# test_waaviaa_website

Test/publish copy of the Wavia website (Stage 4, Ripple C2 build) so it can be deployed on Vercel and previewed.

**Source (untouched):** `hamziCodes/VERTEX-voiceai`, branch `website` @ `b4138aa` — the contents of its `website/` folder, copied to this repo's root on 2026-11-17. Nothing was committed back to the source repo or branch.

## Run / deploy

- Framework: Vite + React 19. Vercel auto-detects it — no extra settings needed.
- Build command: `npm run build` (runs `tsc --noEmit && vite build`), output `dist/`.
- `vercel.json` in the root carries the SPA rewrite + legacy redirects.
- Optional env: `VITE_STUDIO_URL` points the Sign up / Sign in links at the Studio origin (see `src/config.ts`); the site works without it.
