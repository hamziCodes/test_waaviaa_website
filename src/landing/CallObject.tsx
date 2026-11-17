import { forwardRef, useCallback, useImperativeHandle, useLayoutEffect, useRef } from 'react';
import { BARGE_IN_AT, RECORD, SCRIPT, STAMP_AT } from './script';
import { ease, lerp, r3, seg } from './motion';

/**
 * The one persistent call object. A single element that becomes, in turn:
 * a ringing disc → a live call card → an interrupted turn → a confirmed slot
 * → a conversation record. Everything it does is driven by `apply(p)` with a
 * scroll progress p in 0..1. It only ever writes transform and opacity (plus a
 * few discrete data attributes and one text node), never layout properties.
 *
 * Static mode (reduced motion, short screens) renders the same object at a
 * fixed `still` progress, so the static sequence and the scroll story can
 * never drift apart.
 */

export type CallHandle = {
	apply: (p: number) => void;
	measure: () => void;
};

type Props = {
	/** When set, the object renders once at this progress and never animates. */
	still?: number;
};

const BARS = [0.35, 0.6, 0.9, 0.5, 0.75, 1, 0.65, 0.4, 0.85, 0.55, 0.95, 0.7, 0.45, 0.8, 0.6, 0.3, 0.7, 0.9, 0.5, 0.65, 0.4, 0.75];

type Metrics = {
	dx: number;
	dy: number;
	endScale: number;
	viewport: number;
	bottoms: number[];
};

function statusFor(p: number): { text: string; voice: 'agent' | 'caller' | 'none'; phase: string } {
	if (p < 0.07) return { text: 'Line idle', voice: 'none', phase: 'idle' };
	if (p < 0.2) return { text: 'Incoming call', voice: 'none', phase: 'ring' };
	if (p >= 0.81) return { text: 'Call ended · saved', voice: 'none', phase: 'record' };
	if (p >= 0.5 && p < 0.6) return { text: 'Barge-in · agent yielded', voice: 'caller', phase: 'barge' };
	let who: 'agent' | 'caller' = 'agent';
	for (const line of SCRIPT) if (p >= line.at) who = line.who;
	return {
		text: who === 'agent' ? 'Agent speaking' : 'Caller speaking',
		voice: who,
		phase: 'talk',
	};
}

export const CallObject = forwardRef<CallHandle, Props>(function CallObject({ still }, ref) {
	const rootRef = useRef<HTMLDivElement>(null);
	const discRef = useRef<HTMLDivElement>(null);
	const ringsRef = useRef<HTMLDivElement>(null);
	const anchorRef = useRef<HTMLSpanElement>(null);
	const cardRef = useRef<HTMLDivElement>(null);
	const statusRef = useRef<HTMLSpanElement>(null);
	const viewportRef = useRef<HTMLDivElement>(null);
	const listRef = useRef<HTMLOListElement>(null);
	const lineRefs = useRef<(HTMLLIElement | null)[]>([]);
	const cutRef = useRef<HTMLSpanElement>(null);
	const bargeRef = useRef<HTMLParagraphElement>(null);
	const recordRef = useRef<HTMLDivElement>(null);
	const fieldRefs = useRef<(HTMLDivElement | null)[]>([]);
	const tickerRef = useRef<HTMLDivElement>(null);
	const stampRef = useRef<HTMLDivElement>(null);
	const metrics = useRef<Metrics>({ dx: 0, dy: 0, endScale: 0.05, viewport: 0, bottoms: [] });
	const lastStatus = useRef('');

	const measure = useCallback(() => {
		const root = rootRef.current;
		const disc = discRef.current;
		const anchor = anchorRef.current;
		const viewport = viewportRef.current;
		if (!root || !disc || !anchor || !viewport) return;
		// Layout reads only. The disc's offset box ignores its transform; the
		// anchor sits in an untransformed card, so its rect is its layout box.
		const size = disc.offsetWidth || 1;
		const homeX = disc.offsetLeft + size / 2;
		const homeY = disc.offsetTop + size / 2;
		const rootRect = root.getBoundingClientRect();
		const a = anchor.getBoundingClientRect();
		metrics.current = {
			dx: a.left + a.width / 2 - rootRect.left - homeX,
			dy: a.top + a.height / 2 - rootRect.top - homeY,
			endScale: a.width / size,
			viewport: viewport.clientHeight,
			bottoms: lineRefs.current.map((li) => (li ? li.offsetTop + li.offsetHeight : 0)),
		};
	}, []);

	const apply = useCallback((p: number) => {
		const m = metrics.current;

		// 1 · Ring: the disc sits centre stage, then folds into the card's voice dot.
		const k = ease(seg(p, 0.165, 0.225));
		if (discRef.current) {
			discRef.current.style.transform = `translate3d(${r3(m.dx * k)}px, ${r3(m.dy * k)}px, 0) scale(${r3(lerp(1, m.endScale, k))})`;
		}
		if (ringsRef.current) ringsRef.current.style.opacity = String(r3(1 - seg(p, 0.16, 0.2)));
		if (tickerRef.current) {
			const o = seg(p, 0.075, 0.1) * (1 - seg(p, 0.15, 0.175));
			tickerRef.current.style.opacity = String(r3(o));
			tickerRef.current.style.transform = `translate3d(-50%, ${r3((1 - o) * 12)}px, 0) rotate(-8deg)`;
		}
		if (cardRef.current) cardRef.current.style.opacity = String(r3(seg(p, 0.175, 0.225)));

		// 2 · Conversation: lines land one by one; the list rolls up to keep the newest in view.
		let offset = 0;
		SCRIPT.forEach((line, i) => {
			const o = seg(p, line.at, line.at + 0.03);
			const li = lineRefs.current[i];
			if (li) {
				li.style.opacity = String(r3(o));
				li.style.transform = `translate3d(0, ${r3((1 - o) * 14)}px, 0)`;
			}
			const overflow = (m.bottoms[i] ?? 0) - m.viewport + 8;
			if (overflow > 0) offset = Math.max(offset, overflow * o);
		});
		if (listRef.current) listRef.current.style.transform = `translate3d(0, ${r3(-offset)}px, 0)`;

		// 3 · Interruption: the unplayed tail appears, then is struck when the caller cuts in.
		if (cutRef.current) {
			cutRef.current.style.opacity = String(r3(seg(p, 0.43, 0.47)));
			cutRef.current.dataset.struck = p >= 0.5 ? 'true' : 'false';
		}
		if (bargeRef.current) {
			const o = seg(p, BARGE_IN_AT, BARGE_IN_AT + 0.03);
			bargeRef.current.style.opacity = String(r3(o));
			bargeRef.current.style.transform = `translate3d(${r3((1 - o) * -10)}px, 0, 0)`;
		}

		// 4 · Booking: the agreed slot stamps onto the call.
		if (stampRef.current) {
			const o = seg(p, STAMP_AT, STAMP_AT + 0.02);
			stampRef.current.style.opacity = String(r3(o));
			stampRef.current.style.transform = `rotate(-8deg) scale(${r3(1.35 - 0.35 * o)})`;
		}

		// 5 · Record: the transcript gives way to the conversation record.
		if (listRef.current) listRef.current.style.opacity = String(r3(1 - seg(p, 0.81, 0.845)));
		if (recordRef.current) {
			const o = seg(p, 0.835, 0.875);
			recordRef.current.style.opacity = String(r3(o));
			recordRef.current.style.transform = `translate3d(0, ${r3((1 - o) * 18)}px, 0)`;
		}
		fieldRefs.current.forEach((el, i) => {
			if (!el) return;
			const o = seg(p, 0.87 + i * 0.018, 0.9 + i * 0.018);
			el.style.opacity = String(r3(o));
			el.style.transform = `translate3d(${r3((1 - o) * 10)}px, 0, 0)`;
		});

		// Discrete state: status text, who is speaking, which phase.
		const s = statusFor(p);
		const key = `${s.text}|${s.voice}|${s.phase}`;
		if (key !== lastStatus.current) {
			lastStatus.current = key;
			if (statusRef.current) statusRef.current.textContent = s.text;
			if (rootRef.current) {
				rootRef.current.dataset.voice = s.voice;
				rootRef.current.dataset.phase = s.phase;
			}
		}
	}, []);

	useImperativeHandle(ref, () => ({ apply, measure }), [apply, measure]);

	// Still mode: measure and render once, re-render on resize.
	useLayoutEffect(() => {
		if (still === undefined) return;
		const run = () => {
			measure();
			lastStatus.current = '';
			apply(still);
		};
		run();
		const ro = new ResizeObserver(run);
		if (rootRef.current) ro.observe(rootRef.current);
		document.fonts?.ready.then(run).catch(() => undefined);
		return () => ro.disconnect();
	}, [still, apply, measure]);

	return (
		<div className="call" ref={rootRef} data-voice="none" data-phase="idle" data-still={still !== undefined}>
			<div className="call__card" ref={cardRef}>
				<div className="call__mast">
					<span className="call__anchor" ref={anchorRef} aria-hidden="true" />
					<span className="label call__line-name">Clinic line · inbound</span>
					<span className="label call__status" ref={statusRef} aria-hidden="true">
						Line idle
					</span>
				</div>
				<div className="call__wave" aria-hidden="true">
					{BARS.map((h, i) => (
						<span key={i} style={{ ['--h' as string]: h, ['--i' as string]: i }} />
					))}
				</div>
				<div className="call__viewport" ref={viewportRef}>
					<ol className="call__lines" ref={listRef} aria-label="Scripted demo transcript">
						{SCRIPT.map((line, i) => (
							<li
								key={line.id}
								className={`call__turn call__turn--${line.who}`}
								ref={(el) => {
									lineRefs.current[i] = el;
								}}
							>
								<span className="label">{line.who === 'agent' ? 'Agent' : 'Caller'}</span>
								{line.heard ? (
									<>
										<p className="call__text">
											{line.heard}
											<span className="call__cut" ref={cutRef} data-struck="false">
												{line.cut}
												<span className="visually-hidden"> (cut off — never played)</span>
											</span>
										</p>
										<p className="call__barge label" ref={bargeRef}>
											<span className="hl">Barge-in</span> playback stopped · kept only what was heard
										</p>
									</>
								) : (
									<p className="call__text">{line.text}</p>
								)}
							</li>
						))}
					</ol>
					<div className="call__record" ref={recordRef}>
						<p className="label call__record-title">Conversation record · post-call</p>
						<p className="call__summary">{RECORD.summary}</p>
						<div className="call__fields">
							{RECORD.fields.map((f, i) => (
								<div
									key={f.key}
									className="call__field"
									ref={(el) => {
										fieldRefs.current[i] = el;
									}}
								>
									<span className="label">{f.key}</span>
									<span>{f.value}</span>
								</div>
							))}
						</div>
					</div>
				</div>
				<p className="label call__foot">Scripted demo · no audio · illustrative</p>
			</div>

			<div className="call__disc" ref={discRef} aria-hidden="true">
				<div className="call__rings" ref={ringsRef}>
					<span className="call__ring call__ring--outer" />
					<span className="call__ring call__ring--inner" />
					<span className="call__pulse" />
					<span className="call__pulse call__pulse--late" />
				</div>
				<span className="call__core" />
			</div>

			<div className="sticker call__ticker" ref={tickerRef} aria-hidden="true">
				Incoming · clinic line
			</div>
			<div className="sticker call__stamp" ref={stampRef} aria-hidden="true">
				Thu 10:00 · agreed
			</div>
		</div>
	);
});
