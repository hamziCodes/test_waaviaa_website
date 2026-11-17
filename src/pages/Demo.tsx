import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { Link } from 'react-router';
import { useTitle } from '@/components/ui';
import { Wordmark } from '@/components/Wordmark';
import { SIGN_UP_URL } from '@/config';
import { AGENTS, AUDIT, CONVERSATIONS, DETAILS, KNOWLEDGE, KPIS, LEDGER, LEDGER_GLOSS, USAGE } from '@/demo/sample';

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
				<div className="dash__bar-labels" aria-hidden="true">
					<span><strong>VAD</strong> hears</span>
					<span><strong>STT</strong> transcribes</span>
					<span><strong>LLM</strong> decides</span>
					<span><strong>TTS</strong> speaks</span>
				</div>
				<p className="label">One spoken turn, left to right — widths not to scale</p>

				<p className="label" style={{ marginTop: 22 }}>
					Event ledger · protocol v1
				</p>
				<ol className="dash__ledger" role="list">
					{LEDGER.map((e, i) => (
						<li key={e}>
							<span className="dash__chip">#{String(i + 1).padStart(2, '0')}</span>
							<span className="dash__event">{e}</span>
							<span className="dash__gloss">{LEDGER_GLOSS[e]}</span>
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
				<strong>How to read the routes column:</strong> the three numbers are the providers wired for speech-to-text,
				the language model, and text-to-speech. An agent needs <strong>2 at every stage</strong> so a call survives one
				provider failing — that is why the After-hours line (2 · 2 · 1) cannot publish yet. Published versions are
				immutable; edits ship as a new version.
			</p>
		</>
	);
}

function Conversations() {
	const [selectedId, setSelectedId] = useState('C-1048');
	const detail = DETAILS[selectedId];
	return (
		<div className="dash__split">
			<div>
				<div className="table-wrap">
					<table className="table table--pick">
						<caption className="label">Conversations · sample data — select a call to read it</caption>
						<thead>
							<tr>
								{['ID', 'Agent', 'Channel', 'Outcome', 'Length'].map((h) => (
									<th scope="col" key={h}>{h}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{CONVERSATIONS.map((c) => (
								<tr key={c.id} data-selected={c.id === selectedId} onClick={() => setSelectedId(c.id)}>
									<td>{c.id}</td>
									<td>{c.agent}</td>
									<td>{c.channel}</td>
									<td>{c.outcome}</td>
									<td>{c.minutes}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<p className="dash__aside">Select any call — its transcript, summary and extracted fields appear on the right.</p>
			</div>
			<div className="dash__detail">
				<p className="label">{selectedId} · transcript</p>
				<ol className="dash__transcript" role="list">
					{detail.transcript.map((t, i) => (
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
				<p className="dash__summary">{detail.summary}</p>
				<dl className="facts">
					{detail.fields.map(([k, v]) => (
						<div key={k} style={{ display: 'contents' }}>
							<dt className="label">{k.replace(/_/g, ' ')}</dt>
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
									{u.unit ? ` ${u.unit}` : ''} · <strong>{pct}%</strong> · {u.plain}
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
		<Table
			caption="Audit log · sample data"
			head={['When', 'Role', 'Action', 'Detail']}
			rows={AUDIT.map((a) => [a.when, a.who, a.what, a.detail])}
		/>
	);
}

const TAB_INTRO: Record<Tab, string> = {
	Overview: 'Today at a glance: how many conversations happened, what a live turn looks like, and the events the engine recorded.',
	Agents: 'Every voice agent in this workspace — its version, languages, provider routes and whether it is live.',
	Conversations: 'Every call and browser session, written down. Select one to read its transcript and the record it produced.',
	Knowledge: 'The facts your agents answer from — FAQs and documents. Answers cite the source they used.',
	Usage: 'What this workspace has used this period, meter by meter, against its limits.',
	'Audit log': 'Who did what, and when. Every publish, invite, hold and key is written here.',
};

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
				<div className="dash__intro">
					<h1 className="dash__h1">This is what a Wavia workspace looks like.</h1>
					<p>
						Studio is where you build a voice agent, watch its calls and read what it wrote down. This preview runs on
						sample data — work through the tabs; start with <strong>Conversations</strong> and select a call.
					</p>
				</div>
				<main id="main" tabIndex={-1}>
					<section
						role="tabpanel"
						id={`panel-${slug(tab)}`}
						aria-labelledby={`tab-${slug(tab)}`}
						tabIndex={0}
						className="dash__panel"
					>
						<h2 className="visually-hidden">{tab}</h2>
						<p className="dash__tab-intro">{TAB_INTRO[tab]}</p>
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
