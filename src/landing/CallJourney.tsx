import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router';
import { CallObject, type CallHandle } from './CallObject';
import { SCENES, SCRIPT, type Scene } from './script';
import { clamp01, r3, seg } from './motion';

/**
 * The landing page's scroll story.
 *
 * Scroll mode: a tall scroller with a sticky stage. One rAF-throttled scroll
 * handler reads the scroller's rect once per frame and writes transforms and
 * opacity only — no layout writes, so no thrash. Animation loops on the stage
 * (ring pulse, voice bars) run only while the stage is on screen.
 *
 * Static mode: for `prefers-reduced-motion: reduce` and for screens too short to
 * hold a pinned stage. Every scene renders in its final, readable state, in
 * order, with the full transcript as text.
 */

type Mode = 'scroll' | 'static';

const STATIC_QUERY = '(prefers-reduced-motion: reduce), (max-height: 540px)';

function useJourneyMode(): Mode {
	const [mode, setMode] = useState<Mode>(() =>
		typeof window !== 'undefined' && window.matchMedia(STATIC_QUERY).matches ? 'static' : 'scroll',
	);
	useEffect(() => {
		const mq = window.matchMedia(STATIC_QUERY);
		const on = () => setMode(mq.matches ? 'static' : 'scroll');
		mq.addEventListener('change', on);
		return () => mq.removeEventListener('change', on);
	}, []);
	return mode;
}

function Title({ scene, as: Tag }: { scene: Scene; as: 'h1' | 'h2' }) {
	let content: ReactNode = scene.title;
	if (scene.mark && scene.title.endsWith(scene.mark)) {
		const head = scene.title.slice(0, -scene.mark.length);
		content = (
			<>
				{head}
				<span className="hl">{scene.mark}</span>
			</>
		);
	}
	return <Tag className={Tag === 'h1' ? 'scene__title scene__title--hero' : 'scene__title'}>{content}</Tag>;
}

function SceneCopy({ scene, index }: { scene: Scene; index: number }) {
	return (
		<>
			<p className="label scene__label">{scene.label}</p>
			<Title scene={scene} as={index === 0 ? 'h1' : 'h2'} />
			<p className="scene__body">{scene.body}</p>
			{index === 0 ? (
				<>
					<div className="btn-row scene__ctas">
						<Link className="btn btn--lime" to="/demo">
							See the demo dashboard
						</Link>
						<Link className="btn btn--ghost" to="/how-it-works">
							How it works
						</Link>
					</div>
					<p className="label scene__langs">
						<span className="visually-hidden">Languages configured in the engine: </span>
						English · Urdu · Arabic · Malay
					</p>
					<dl className="scene__stats">
						<div>
							<dt className="label">Turn latency</dt>
							<dd>under 283 ms</dd>
						</div>
						<div>
							<dt className="label">Interruption</dt>
							<dd>barge-in, mid-sentence</dd>
						</div>
						<div>
							<dt className="label">Failover</dt>
							<dd>2 routes, every stage</dd>
						</div>
					</dl>
				</>
			) : null}
		</>
	);
}

function ScrollJourney() {
	const scrollerRef = useRef<HTMLDivElement>(null);
	const callRef = useRef<CallHandle>(null);
	const copyRefs = useRef<(HTMLDivElement | null)[]>([]);
	const fillRef = useRef<HTMLSpanElement>(null);
	const stationRefs = useRef<(HTMLAnchorElement | null)[]>([]);
	const stageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scroller = scrollerRef.current;
		const stage = stageRef.current;
		if (!scroller || !stage) return;
		let raf = 0;
		let last = -1;
		let activeScene = -1;

		const applyCopy = (p: number) => {
			const n = SCENES.length;
			SCENES.forEach((s, i) => {
				const el = copyRefs.current[i];
				if (!el) return;
				const fadeIn = i === 0 ? 1 : seg(p, s.from, s.from + 0.03);
				const fadeOut = i === n - 1 ? 1 : 1 - seg(p, s.to - 0.025, s.to);
				const o = Math.min(fadeIn, fadeOut);
				const dir = fadeIn < 1 ? 1 : -1;
				el.style.opacity = String(r3(o));
				el.style.transform = `translate3d(0, ${r3((1 - o) * 22 * dir)}px, 0)`;
			});
			let idx = 0;
			SCENES.forEach((s, i) => {
				if (p >= s.from) idx = i;
			});
			if (idx !== activeScene) {
				activeScene = idx;
				copyRefs.current.forEach((el, i) => el?.setAttribute('data-active', String(i === idx)));
				stationRefs.current.forEach((el, i) => {
					if (!el) return;
					el.dataset.state = i + 1 < idx ? 'done' : i + 1 === idx ? 'active' : 'next';
					if (i + 1 === idx) el.setAttribute('aria-current', 'step');
					else el.removeAttribute('aria-current');
				});
			}
			if (fillRef.current) fillRef.current.style.transform = `scaleX(${r3(p)})`;
		};

		const frame = () => {
			raf = 0;
			const rect = scroller.getBoundingClientRect();
			const total = rect.height - window.innerHeight;
			const p = total > 0 ? clamp01(-rect.top / total) : 0;
			if (Math.abs(p - last) < 0.0002) return;
			last = p;
			callRef.current?.apply(p);
			applyCopy(p);
		};
		const request = () => {
			if (!raf) raf = requestAnimationFrame(frame);
		};
		const remeasure = () => {
			callRef.current?.measure();
			last = -1;
			request();
		};

		remeasure();
		document.fonts?.ready.then(remeasure).catch(() => undefined);
		window.addEventListener('scroll', request, { passive: true });
		window.addEventListener('resize', remeasure);
		const ro = new ResizeObserver(remeasure);
		ro.observe(stage);

		// Loops (ring pulse, voice bars) only run while the stage is visible.
		const io = new IntersectionObserver(([entry]) => {
			stage.dataset.live = String(entry.isIntersecting);
		});
		io.observe(stage);

		return () => {
			if (raf) cancelAnimationFrame(raf);
			window.removeEventListener('scroll', request);
			window.removeEventListener('resize', remeasure);
			ro.disconnect();
			io.disconnect();
		};
	}, []);

	return (
		<section className="journey" ref={scrollerRef} aria-label="One call, from ring to record">
			{SCENES.map((s) => (
				<span
					key={s.id}
					id={`scene-${s.id}`}
					className="journey__anchor"
					style={{ ['--at' as string]: s.from === 0 ? 0 : s.from + 0.035 }}
				/>
			))}
			<div className="journey__stage" ref={stageRef} data-live="true">
				<div className="journey__copy">
					{SCENES.map((s, i) => (
						<div
							key={s.id}
							className="scene"
							data-active={i === 0}
							ref={(el) => {
								copyRefs.current[i] = el;
							}}
							style={i === 0 ? undefined : { opacity: 0 }}
						>
							<SceneCopy scene={s} index={i} />
						</div>
					))}
				</div>
				<div className="journey__object">
					<CallObject ref={callRef} />
				</div>
				<nav className="journey__route" aria-label="Call journey">
					<span className="journey__track" aria-hidden="true">
						<span className="journey__fill" ref={fillRef} />
					</span>
					<ol className="journey__stations">
						{SCENES.slice(1).map((s, i) => (
							<li key={s.id}>
								<a
									href={`#scene-${s.id}`}
									data-state="next"
									ref={(el) => {
										stationRefs.current[i] = el;
									}}
								>
									<span className="journey__dot" aria-hidden="true" />
									<span className="label">{s.station}</span>
								</a>
							</li>
						))}
					</ol>
				</nav>
			</div>
		</section>
	);
}

function StaticJourney() {
	return (
		<section className="journey-static" aria-label="One call, from ring to record">
			{SCENES.map((s, i) => (
				<div key={s.id} id={`scene-${s.id}`} className="journey-static__scene wrap">
					<div className="journey-static__copy">
						<SceneCopy scene={s} index={i} />
					</div>
					<div className="journey-static__object" aria-hidden="true">
						<CallObject still={s.still} />
					</div>
				</div>
			))}
			<div className="wrap journey-static__transcript">
				<h2 className="label">Full transcript · scripted demo</h2>
				<ol>
					{SCRIPT.map((l) => (
						<li key={l.id}>
							<span className="label">{l.who === 'agent' ? 'Agent' : 'Caller'}</span>{' '}
							{l.heard ? (
								<>
									{l.heard} <s>{l.cut}</s> <em>(cut off by the caller; never played)</em>
								</>
							) : (
								l.text
							)}
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}

export function CallJourney() {
	const mode = useJourneyMode();
	return mode === 'scroll' ? <ScrollJourney /> : <StaticJourney />;
}
