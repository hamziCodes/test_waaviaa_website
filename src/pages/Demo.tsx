import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { Link } from 'react-router';
import { useTitle } from '@/components/ui';
import { Wordmark } from '@/components/Wordmark';
import { SIGN_UP_URL } from '@/config';
import { AGENTS, AUDIT, CONVERSATIONS, KNOWLEDGE, KPIS, LEDGER, SELECTED, USAGE } from '@/demo/sample';

/**
 * /demo — a preview of what Studio looks like, in pure C2 "Ripple Paper".
 * Every value on this page is SAMPLE DATA and is labelled as such: a
 * persistent banner, the masthead pill and a footnote under every panel.
 * Nothing here talks to the engine.
 */

const TABS = ['Overview', 'Agents', 'Conversations', 'Knowledge', 'Usage', 'Audit log'] as const;
type Tab = (typeof TABS)[number];

const WAVE = Array.from({ length: 34 }, (_, i) => {
	const h = Math.abs(Math.sin(i * 0.9) * 0.6 + Math.sin(i * 0.37) * 0.4);
	return Math.max(0.06, Math.min(1, h));
});

function Footnote() {
	return <p className="label dash__note">Sample data · illustrative, not from the engine</p>;
}

function Overview() {
	return (
		<div className="dash__grid">
			<div className="dash__kpis">
				{KPIS.map((k) => (
					<div className="dash__kpi" key={k.label}>
						<p className="label">{k.label}</p>
						<p className="dash__num">{k.value}</p>
					</div>
				))}
				<Footnote />
			</div>

			<div className="dash__centre">
				<p className="label">Now speaking · service desk demo</p>
				<p className="dash__quote">
					“What time do <span className="hl">you close</span> today?”
				</p>
				<p className="dash__reply">We close at 6 p.m. today.</p>
				<svg className="dash__wave" viewBox="0 0 680 90" preserveAspectRatio="none" role="img" aria-label="Illustrative waveform, not real audio">
					{WAVE.map((h, i) => (
						<line key={i} x1={10 + i * 20} x2={10 + i * 20} y1={45 - h * 40} y2={45 + h * 40} />
					))}
				</svg>
				<Footnote />
			</div>

			<div className="dash__right">
				<p className="label">Turn · stages in order</p>
				<div className="dash__bar" aria-label="Stages of a turn: VAD, speech-to-text, language model, text-to-speech" role="img">
					<span style={{ background: 'var(--c-lilac)' }} />
					<span style={{ background: 'var(--c-lime)' }} />
					<span style={{ background: 'var(--c-aubergine)' }} />
					<span style={{ background: 'var(--c-lilac-deep)' }} />
				</div>
				<p className="label">VAD · STT · LLM · TTS — widths not to scale</p>

				<p className="label" style={{ marginTop: 22 }}>
					Event ledger · protocol v1
				</p>
				<ol className="dash__ledger" role="list">
					{LEDGER.map((e, i) => (
						<li key={e}>
							<span className="dash__chip">#{String(i + 1).padStart(2, '0')}</span>
							{e}
						</li>
					))}
				</ol>
				<Footnote />
			</div>
		</div>
	);
}

function Table({ caption, head, rows }: { caption: string; head: string[]; rows: ReactNode[][] }) {
	return (
		<div className="table-wrap">
			<table className="table">
				<caption className="label">{caption}</caption>
				<thead>
					<tr>
						{head.map((h) => (
							<th scope="col" key={h}>
								{h}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((r, i) => (
						<tr key={i}>
							{r.map((c, j) => (
								<td key={j}>{c}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

function Agents() {
	return (
		<>
			<Table
				caption="Agents · sample data"
				head={['Agent', 'Version', 'Languages', 'Routes STT · LLM · TTS', 'Status']}
				rows={AGENTS.map((a) => [
					a.name,
					a.version,
					a.language,
					a.routes,
					a.status === 'Live' ? <span className="hl label">Live</span> : a.status,
				])}
			/>
			<p className="dash__aside">
				Published versions are immutable. Each stage needs two routes before an agent can fail over.
			</p>
		</>
	);
}

function Conversations() {
	return (
		<div className="dash__split">
			<Table
				caption="Conversations · sample data"
				head={['ID', 'Agent', 'Channel', 'Outcome', 'Length']}
				rows={CONVERSATIONS.map((c) => [c.id, c.agent, c.channel, c.outcome, c.minutes])}
			/>
			<div className="dash__detail">
				<p className="label">{SELECTED.id} · transcript</p>
				<ol className="dash__transcript" role="list">
					{SELECTED.transcript.map((t, i) => (
						<li key={i} data-who={t.who}>
							<span className="label">{t.who}</span>
							<p>
								{t.text}
								{t.cut ? (
									<>
										<s>{t.cut}</s>
										<span className="label hl" style={{ marginLeft: 8 }}>
											Barge-in
										</span>
									</>
								) : null}
							</p>
						</li>
					))}
				</ol>
				<p className="label" style={{ marginTop: 16 }}>
					Post-call summary
				</p>
				<p className="dash__summary">{SELECTED.summary}</p>
				<dl className="facts">
					{SELECTED.fields.map(([k, v]) => (
						<div key={k} style={{ display: 'contents' }}>
							<dt className="label">{k}</dt>
							<dd>{v}</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
}

function Knowledge() {
	return (
		<div className="dash__split">
			<Table
				caption="Knowledge base · sample data"
				head={['Source', 'Kind', 'Updated']}
				rows={KNOWLEDGE.map((k) => [k.name, k.kind, k.updated])}
			/>
			<div className="dash__detail">
				<p className="label">Preview answer</p>
				<p className="dash__quote dash__quote--small">“Are you open on Fridays?”</p>
				<p className="dash__reply dash__reply--small">We are open on Fridays from nine until one.</p>
				<p className="label" style={{ marginTop: 10 }}>
					Cited · Opening hours · FAQ 4
				</p>
			</div>
		</div>
	);
}

function Usage() {
	return (
		<div>
			<ul className="dash__meters" role="list">
				{USAGE.map((u) => {
					const pct = Math.round((u.used / u.limit) * 100);
					return (
						<li key={u.meter}>
							<div className="dash__meter-head">
								<span className="label">{u.meter}</span>
								<span>
									{u.used}
									{u.unit ? ` ${u.unit}` : ''} of {u.limit}
									{u.unit ? ` ${u.unit}` : ''}
								</span>
							</div>
							<div
								className="dash__meter"
								role="meter"
								aria-label={`${u.meter}, sample`}
								aria-valuemin={0}
								aria-valuemax={100}
								aria-valuenow={pct}
							>
								<span style={{ transform: `scaleX(${pct / 100})` }} />
							</div>
						</li>
					);
				})}
			</ul>
			<p className="dash__aside">These are the five usage meters in the product. The amounts and limits are samples.</p>
		</div>
	);
}

function Audit() {
	return (
		<Table caption="Audit log · sample data" head={['#', 'Role', 'Action']} rows={AUDIT.map((a, i) => [String(i + 1).padStart(2, '0'), a.who, a.what])} />
	);
}

const PANELS: Record<Tab, () => ReactNode> = {
	Overview,
	Agents,
	Conversations,
	Knowledge,
	Usage,
	'Audit log': Audit,
};

export default function Demo() {
	useTitle('Demo dashboard · sample data');
	const [tab, setTab] = useState<Tab>('Overview');
	const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

	useEffect(() => window.scrollTo(0, 0), []);

	const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
		let next = -1;
		if (e.key === 'ArrowRight') next = (i + 1) % TABS.length;
		else if (e.key === 'ArrowLeft') next = (i - 1 + TABS.length) % TABS.length;
		else if (e.key === 'Home') next = 0;
		else if (e.key === 'End') next = TABS.length - 1;
		if (next < 0) return;
		e.preventDefault();
		setTab(TABS[next]);
		tabRefs.current[next]?.focus();
	};

	const Panel = PANELS[tab];
	const slug = (t: string) => t.toLowerCase().replace(/\s+/g, '-');

	return (
		<>
			<a className="skip-link" href="#main">
				Skip to content
			</a>
			<div className="dash-banner" role="note">
				<p>
					<span className="label label--bold">Sample data</span> This is a preview of Studio built on illustrative values.
					No live calls, no real customers, nothing is sent to the engine.
				</p>
				<Link className="label" to="/">
					Back to the site
				</Link>
			</div>
			<div className="dash">
				<header className="dash__mast">
					<Wordmark />
					<p className="label dash__title">Studio · workspace report</p>
					<p className="label dash__pill">Sample data</p>
				</header>
				<div className="dash__tabs" role="tablist" aria-label="Studio sections">
					{TABS.map((t, i) => (
						<button
							key={t}
							type="button"
							role="tab"
							id={`tab-${slug(t)}`}
							aria-selected={tab === t}
							aria-controls={`panel-${slug(t)}`}
							tabIndex={tab === t ? 0 : -1}
							ref={(el) => {
								tabRefs.current[i] = el;
							}}
							onClick={() => setTab(t)}
							onKeyDown={(e) => onKey(e, i)}
						>
							{t}
						</button>
					))}
				</div>
				<main id="main" tabIndex={-1}>
					<h1 className="visually-hidden">Demo dashboard — sample data</h1>
					<section
						role="tabpanel"
						id={`panel-${slug(tab)}`}
						aria-labelledby={`tab-${slug(tab)}`}
						tabIndex={0}
						className="dash__panel"
					>
						<h2 className="visually-hidden">{tab}</h2>
						<Panel />
					</section>
				</main>
				<footer className="dash__foot">
					<p className="label">Everything above is sample data. Real workspaces live in Studio.</p>
					<div className="btn-row">
						<a className="btn btn--lime" href={SIGN_UP_URL}>
							Sign up for Studio
						</a>
						<Link className="btn btn--ghost" to="/studio">
							Studio tour
						</Link>
					</div>
				</footer>
			</div>
		</>
	);
}
