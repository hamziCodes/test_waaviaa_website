/**
 * Build-time settings. The website has no backend and no auth of its own:
 * sign-up and sign-in hand off to the Studio app.
 *
 *   VITE_STUDIO_URL     Studio origin. Default: http://127.0.0.1:3100 (local Studio).
 *   VITE_CONTACT_EMAIL  Public contact address. No default: an address is never
 *                       invented. When unset, /contact says so plainly.
 */
function trimSlash(value: string): string {
	return value.replace(/\/+$/, '');
}

export const STUDIO_URL = trimSlash(
	(import.meta.env.VITE_STUDIO_URL as string | undefined) || 'http://127.0.0.1:3100',
);

export const SIGN_UP_URL = `${STUDIO_URL}/sign-up`;
export const SIGN_IN_URL = `${STUDIO_URL}/sign-in`;

export const CONTACT_EMAIL = ((import.meta.env.VITE_CONTACT_EMAIL as string | undefined) || '').trim();
