/**
 * Route check + screenshots for the built site.
 *
 *   npm run build && npm run test:routes
 *
 * Serves dist/ with `vite preview`, then for every route and width checks:
 * no console errors or page errors, no horizontal scroll, exactly one <h1>.
 * Screenshots go to docs/design/stage4-screens/ (full set under all/, which
 * is gitignored). Set PW_CHROMIUM to a Chromium executable if Playwright's
 * own browser download is not installed.
 */
import { mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';
import { preview } from 'vite';
import { chromium } from 'playwright';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outAll = join(root, 'docs/design/stage4-screens/all');
const outKey = join(root, 'docs/design/stage4-screens');
mkdirSync(outAll, { recursive: true });

const ROUTES = [
	'/',
	'/product',
	'/how-it-works',
	'/studio',
	'/developers',
	'/developers/docs',
	'/pricing',
	'/custom',
	'/about',
	'/contact',
	'/privacy',
	'/terms',
	'/demo',
	'/signup',
	'/login',
	'/no-such-page',
];
const WIDTHS = [320, 390, 768, 1280];
const SHOT_WIDTHS = new Set([390, 1280]);
const KEY_ROUTES = new Set(['/product', '/studio', '/developers/docs', '/pricing', '/demo', '/contact']);

/** Launch options: PW_CHROMIUM, else a cached headless shell, else installed Chrome. */
function launchOptions() {
	if (process.env.PW_CHROMIUM) return { executablePath: process.env.PW_CHROMIUM };
	const cache = join(process.env.LOCALAPPDATA || join(homedir(), '.cache'), 'ms-playwright');
	for (const rev of ['chromium_headless_shell-1255', 'chromium_headless_shell-1248']) {
		const exe = join(cache, rev, 'chrome-headless-shell-win64', 'chrome-headless-shell.exe');
		if (existsSync(exe)) return { executablePath: exe };
	}
	return { channel: 'chrome' };
}

const slug = (r) => (r === '/' ? 'home' : r.slice(1).replace(/\//g, '-'));

const server = await preview({ root, preview: { port: 4173, strictPort: true, host: '127.0.0.1' }, logLevel: 'warn' });
const base = 'http://127.0.0.1:4173';
const browser = await chromium.launch(launchOptions());
const failures = [];

async function open(route, width, opts = {}) {
	const context = await browser.newContext({
		viewport: { width, height: width < 768 ? 844 : 900 },
		reducedMotion: opts.reduced ? 'reduce' : 'no-preference',
		deviceScaleFactor: 1,
	});
	const page = await context.newPage();
	const errors = [];
	page.on('console', (m) => {
		if (m.type() === 'error') errors.push(m.text());
	});
	page.on('pageerror', (e) => errors.push(String(e)));
	await page.goto(base + route, { waitUntil: 'networkidle' });
	await page.evaluate(() => document.fonts.ready);
	return { context, page, errors };
}

for (const route of ROUTES) {
	for (const width of WIDTHS) {
		const { context, page, errors } = await open(route, width);
		const facts = await page.evaluate(() => ({
			overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
			h1: document.querySelectorAll('h1').length,
			title: document.title,
		}));
		const problems = [];
		if (errors.length) problems.push(`console: ${errors.join(' | ')}`);
		if (facts.overflow > 0) problems.push(`horizontal overflow ${facts.overflow}px`);
		if (facts.h1 !== 1) problems.push(`${facts.h1} h1 elements`);
		if (problems.length) failures.push(`${route} @${width}: ${problems.join('; ')}`);
		console.log(`${problems.length ? 'FAIL' : 'ok  '} ${route.padEnd(18)} ${String(width).padStart(4)}  ${facts.title}`);

		if (SHOT_WIDTHS.has(width) && route !== '/') {
			const file = `${slug(route)}-${width}.jpg`;
			await page.screenshot({ path: join(outAll, file), fullPage: true, type: 'jpeg', quality: 72 });
			if (KEY_ROUTES.has(route)) {
				await page.screenshot({ path: join(outKey, file), fullPage: false, type: 'jpeg', quality: 72 });
			}
		}
		await context.close();
	}
}

// Landing: one viewport screenshot per scene, at both widths, by scroll position.
const SCENE_PROGRESS = [
	['0-land', 0.0],
	['1-ring', 0.12],
	['2-conversation', 0.42],
	['3-interruption', 0.58],
	['4-booking', 0.79],
	['5-record', 0.97],
];
for (const width of [1280, 390]) {
	const { context, page, errors } = await open('/', width);
	for (const [name, p] of SCENE_PROGRESS) {
		await page.evaluate((prog) => {
			const el = document.querySelector('.journey');
			const total = el.offsetHeight - window.innerHeight;
			window.scrollTo(0, el.offsetTop + total * prog);
		}, p);
		await page.waitForTimeout(250);
		await page.screenshot({ path: join(outKey, `home-${name}-${width}.jpg`), type: 'jpeg', quality: 72 });
	}
	await page.screenshot({ path: join(outAll, `home-full-${width}.jpg`), fullPage: true, type: 'jpeg', quality: 60 });
	if (errors.length) failures.push(`/ scroll @${width}: ${errors.join(' | ')}`);
	await context.close();
}

// Reduced motion: the static sequence renders, with no pinned stage.
for (const width of [1280, 320]) {
	const { context, page, errors } = await open('/', width, { reduced: true });
	const facts = await page.evaluate(() => ({
		staticScenes: document.querySelectorAll('.journey-static__scene').length,
		pinned: document.querySelectorAll('.journey__stage').length,
		overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
	}));
	if (facts.staticScenes !== 6 || facts.pinned !== 0 || facts.overflow > 0 || errors.length) {
		failures.push(`/ reduced-motion @${width}: ${JSON.stringify(facts)} ${errors.join(' | ')}`);
	}
	console.log(`${facts.staticScenes === 6 && facts.pinned === 0 ? 'ok  ' : 'FAIL'} / reduced-motion   ${width}`);
	await page.screenshot({ path: join(outAll, `home-reduced-${width}.jpg`), fullPage: true, type: 'jpeg', quality: 60 });
	if (width === 1280) {
		await page.screenshot({ path: join(outKey, `home-reduced-1280.jpg`), type: 'jpeg', quality: 72 });
	}
	await context.close();
}

// Keyboard: first Tab reaches the skip link, and focus is visibly outlined.
{
	const { context, page } = await open('/', 1280);
	await page.keyboard.press('Tab');
	const focus = await page.evaluate(() => {
		const el = document.activeElement;
		return { cls: el?.className, outline: el ? getComputedStyle(el).outlineStyle : 'none' };
	});
	const ok = String(focus.cls).includes('skip-link') && focus.outline !== 'none';
	if (!ok) failures.push(`keyboard: first focus ${JSON.stringify(focus)}`);
	console.log(`${ok ? 'ok  ' : 'FAIL'} keyboard skip link`);
	await context.close();
}

await browser.close();
await new Promise((resolve) => server.httpServer.close(resolve));

if (failures.length) {
	console.error(`\n${failures.length} problem(s):\n${failures.join('\n')}`);
	process.exit(1);
}
console.log('\nAll routes passed.');
