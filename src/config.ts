/**
 * Build-time settings. The website has no backend and no auth of its own:
 * sign-up and sign-in hand off to the Studio app.
 *
 *   VITE_STUDIO_URL     Studio origin (e.g. https://studio.example.com, or
 *                       http://127.0.0.1:3100 for a local Studio in a .env.local).
 *                       When unset, sign-up / sign-in send visitors to the
 *                       /demo dashboard preview instead of a dead address —
 *                       a published page must never point at localhost.
 *   VITE_CONTACT_EMAIL  Public contact address. Defaults to the founder's
 *                       published Wavia address; override at build time.
 */
function trimSlash(value: string): string {
	return value.replace(/\/+$/, '');
}

export const STUDIO_URL = trimSlash((import.meta.env.VITE_STUDIO_URL as string | undefined) || '');

/** True when a real Studio origin is configured at build time. */
export const HAS_STUDIO = STUDIO_URL.length > 0;

export const SIGN_UP_URL = HAS_STUDIO ? `${STUDIO_URL}/sign-up` : '/demo';
export const SIGN_IN_URL = HAS_STUDIO ? `${STUDIO_URL}/sign-in` : '/demo';

export const CONTACT_EMAIL = (
	(import.meta.env.VITE_CONTACT_EMAIL as string | undefined) || 'hamza@vertexdevstudio.tech'
).trim();
