/**
 * Static-only Worker for the Wavia marketing site preview.
 *
 * The site is a client-routed SPA (react-router), so the Worker only has to
 * hand every request to the asset layer; `spa: true` in the manifest makes the
 * ASSETS binding fall back to index.html for unknown paths, which is what keeps
 * deep links like /core and /pricing working on refresh.
 *
 * No Node APIs, no bindings, no secrets — this is a public build of the shell.
 */
export default {
	async fetch(request, env) {
		return env.ASSETS.fetch(request);
	},
};
