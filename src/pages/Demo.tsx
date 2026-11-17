import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router';
import { useTitle } from '@/components/ui';
import { Wordmark } from '@/components/Wordmark';
import { SIGN_UP_URL } from '@/config';
import { AGENTS, AUDIT, CONVERSATIONS, DETAILS, KNOWLEDGE, KPIS, LEDGER, LEDGER_GLOSS, USAGE } from '@/demo/sample';

/**
 * /demo — a REPORT about a Wavia workspace, not the dashboard itself.
 *
 * The real product surface is Studio (the Agent Studio app in the engine
 * repo). This page is the public, read-only preview for website visitors:
 * a clean sample report — contents rail, summary, then one section per
 * area of the workspace. Every value is SAMPLE DATA and is labelled as
 * such. Nothing here talks to the engine.
 */

const WAVE = Array.from({ length: 34 }, (_, i) => {
	const h = Math.abs(Math.sin(i * 0.9) * 0.6 + Math.sin(i * 0.37) * 0.4);
	return Math.max(0.06, Math.min(1, h));
});

const CONTENTS = [
	{ no: '01', id: 'summary', label: 'Summary' },
	{ no: '02', id: 'live-turn', label: 'A live turn' },
	{ no: '03', id: 'agents', label: 'Agents' },
	{ no: '04', id: 'conversations', label: 'Conversations' },
	{ no: '05', id: 'knowledge', label: 'Knowledge' },
	{ no: '06', id: 'usage', label: 'Usage' },
	{ no: '07', id: 'audit', label: 'Audit log' },
] as const;

function SampleNote() {
	return <p className="report__note">Sample data · illustrative, not from the engine</p>;
}

function SectionHead({ no, title, intro }: { no: string; title: string; intro: string }) {
	return (
		<div className="report__section-head">
			<span className="report__section-no" aria-hidden="true">
				{no}
			</span>
			<div>
				<h2>{title}</h2>
				<p>{intro}</p>
			</div>
		</div>
	);
}

function Chip({ kind, children }: { kind: 'live' | 'warn' | 'plain'; children: ReactNode }) {
	return (
		<span className="report-chip" data-kind={kind}>
			{children}
		</span>
	);
}

function Summary() {
	return (
		<section className="report__section" id="summary" aria-label="Summary">
			<SectionHead
				no="01"
				title="Summary"
				intro="What a workspace did today, in one page. The sections after this one show the evidence behind each line."
			/>
			<div className="report__cols">
				<div>
					<h3 className="report__h3">What this report shows</h3>
					<ul className="report__bullets">
						<li>
							<strong>48 conversations</strong> ran across two live agents — clinic bookings on the phone line and
							service questions in the browser.
						</li>
						<li>
							<strong>12 interruptions</strong> were handled: callers talked over the agent mid-reply and the
							conversation carried on from what was actually heard.
						</li>
						<li>
							<strong>One draft cannot publish.</strong> The After-hours line has only one voice route, and an agent
							needs two at every stage so a call survives a provider failing.
						</li>
						<li>
							<strong>Usage is at 41% of the session allowance</strong> for this period, with every meter inside its
							limit.
						</li>
					</ul>
				</div>
				<div className="report__aside-card">
					<h3 className="report__h3">How to read this report</h3>
					<p>
						This is a <strong>report</strong>, not the product. The working dashboard is Wavia Studio, where these
						agents are built and these calls happen live. This page restates one sample workspace as a document so a
						visitor can follow it end to end.
					</p>
					<p>
						Where a table shows <strong>routes</strong> as three numbers, they are the providers wired for
						speech-to-text, the language model and text-to-speech, in that order.
					</p>
				</div>
			</div>
		</section>
	);
}

function LiveTurn() {
	return (
		<section className="report__section" id="live-turn" aria-label="A live turn">
			<SectionHead
				no="02"
				title="A live turn"
				intro="One spoken exchange, slowed down. A caller asks a question; the agent answers from the knowledge base."
			/>
			<div className="report__card">
				<div className="report__card-head">
					<span className="report__live-dot" aria-hidden="true" />
					<span>Service desk · Web session · Sample</span>
					<span className="report__card-head-right">Outcome · Opening hours answered</span>
				</div>
				<p className="report__caller">“What time do you close today?”</p>
				<p className="report__reply">We close at 6 p.m. today.</p>
				<svg className="report__wave" viewBox="0 0 680 90" preserveAspectRatio="none" role="img" aria-label="Illustrative waveform, not real audio">
					{WAVE.map((h, i) => (
						<line key={i} x1={10 + i * 20} x2={10 + i * 20} y1={45 - h * 40} y2={45 + h * 40} />
					))}
				</svg>
				<dl className="report__meta">
					<div>
						<dt>Agent</dt>
						<dd>Service desk</dd>
					</div>
					<div>
						<dt>Channel</dt>
						<dd>Web · SDK</dd>
					</div>
					<div>
						<dt>Length</dt>
						<dd>0:58</dd>
					</div>
					<div>
						<dt>Record</dt>
						<dd>Conversation C-1047</dd>
					</div>
				</dl>
			</div>

			<h3 className="report__h3 report__h3--spaced">How one turn moves</h3>
			<ol className="report__steps" role="list">
				<li>
					<span className="report__step-no">1</span>
					<div>
						<strong>Listen</strong>
						<p>Voice activity detection hears the caller start and stop speaking.</p>
					</div>
				</li>
				<li>
					<span className="report__step-no">2</span>
					<div>
						<strong>Transcribe</strong>
						<p>Speech-to-text turns the audio into words, live, as they are spoken.</p>
					</div>
				</li>
				<li>
					<span className="report__step-no">3</span>
					<div>
						<strong>Decide</strong>
						<p>The language model reads the words and picks the answer or the action.</p>
					</div>
				</li>
				<li>
					<span className="report__step-no">4</span>
					<div>
						<strong>Speak</strong>
						<p>Text-to-speech streams the reply back as audio, interruptible at any word.</p>
					</div>
				</li>
			</ol>

			<h3 className="report__h3 report__h3--spaced">What the engine recorded</h3>
			<p className="report__section-sub">
				Every turn writes an event ledger. The protocol names are technical; the right-hand column is what each one
				means.
			</p>
			<div className="report__table-wrap">
				<table className="report__table">
					<thead>
						<tr>
							<th scope="col" className="report__th-num">#</th>
							<th scope="col">Event</th>
							<th scope="col">What it means</th>
						</tr>
					</thead>
					<tbody>
						{LEDGER.map((e, i) => (
							<tr key={e}>
								<td className="report__td-num">{String(i + 1).padStart(2, '0')}</td>
								<td>
									<code>{e}</code>
								</td>
								<td>{LEDGER_GLOSS[e]}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<SampleNote />
		</section>
	);
}

function Agents() {
	return (
		<section className="report__section" id="agents" aria-label="Agents">
			<SectionHead
				no="03"
				title="Agents"
				intro="The voice agents in this workspace — what each one does, where it runs, and whether it is ready to take calls."
			/>
			<div className="report__table-wrap">
				<table className="report__table">
					<thead>
						<tr>
							<th scope="col">Agent</th>
							<th scope="col">Status</th>
							<th scope="col">Version</th>
							<th scope="col">Languages</th>
							<th scope="col">Channel</th>
							<th scope="col">Routes · STT / LLM / TTS</th>
						</tr>
					</thead>
					<tbody>
						{AGENTS.map((a) => (
							<tr key={a.name}>
								<td>
									<strong className="report__cell-title">{a.name}</strong>
									<span className="report__cell-sub">{a.description}</span>
								</td>
								<td>{a.status === 'Live' ? <Chip kind="live">Live</Chip> : <Chip kind="warn">{a.status}</Chip>}</td>
								<td>{a.version}</td>
								<td>{a.language}</td>
								<td>{a.channel}</td>
								<td className="report__td-mono">{a.routes}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<p className="report__para">
				An agent needs <strong>2 routes at every stage</strong> so a call survives one provider failing. The
				After-hours line is at 2 · 2 · 1 — one voice route short — so it stays a draft. Published versions are
				immutable; edits ship as a new version.
			</p>
			<SampleNote />
		</section>
	);
}

function Conversations() {
	const [selectedId, setSelectedId] = useState('C-1048');
	const detail = DETAILS[selectedId];
	const selected = CONVERSATIONS.find((c) => c.id === selectedId) ?? CONVERSATIONS[0];
	return (
		<section className="report__section" id="conversations" aria-label="Conversations">
			<SectionHead
				no="04"
				title="Conversations"
				intro="Every call and browser session, written down. Select a conversation to read its record — transcript, summary and the fields the agent extracted."
			/>
			<div className="report__table-wrap">
				<table className="report__table report__table--pick">
					<thead>
						<tr>
							<th scope="col">Time</th>
							<th scope="col">ID</th>
							<th scope="col">Agent</th>
							<th scope="col">Channel</th>
							<th scope="col">Outcome</th>
							<th scope="col">Length</th>
							<th scope="col">Status</th>
						</tr>
					</thead>
					<tbody>
						{CONVERSATIONS.map((c) => (
							<tr key={c.id} data-selected={c.id === selectedId} onClick={() => setSelectedId(c.id)}>
								<td className="report__td-mono">{c.time}</td>
								<td className="report__td-mono">{c.id}</td>
								<td>{c.agent}</td>
								<td>{c.channel}</td>
								<td>{c.outcome}</td>
								<td className="report__td-mono">{c.minutes}</td>
								<td>
									<Chip kind={c.status === 'Test' ? 'plain' : 'live'}>{c.status}</Chip>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="report__record">
				<div className="report__record-head">
					<h3 className="report__h3">
						Record · {selected.id} — {selected.outcome}
					</h3>
					<span className="report__record-meta">
						{selected.agent} · {selected.channel} · {selected.minutes}
					</span>
				</div>
				<div className="report__record-grid">
					<div>
						<h4 className="report__h4">Transcript</h4>
						<ol className="report__transcript" role="list">
							{detail.transcript.map((t, i) => (
								<li key={i} data-who={t.who}>
									<span className="report__who">{t.who}</span>
									<p>
										{t.text}
										{t.cut ? (
											<>
												<s>{t.cut}</s>
												<Chip kind="warn">Barge-in</Chip>
											</>
										) : null}
									</p>
								</li>
							))}
						</ol>
					</div>
					<div>
						<h4 className="report__h4">Post-call summary</h4>
						<p className="report__summary">{detail.summary}</p>
						<h4 className="report__h4">Extracted fields</h4>
						<dl className="report__fields">
							{detail.fields.map(([k, v]) => (
								<div key={k}>
									<dt>{k.replace(/_/g, ' ')}</dt>
									<dd>{v}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
			<SampleNote />
		</section>
	);
}

function Knowledge() {
	return (
		<section className="report__section" id="knowledge" aria-label="Knowledge">
			<SectionHead
				no="05"
				title="Knowledge"
				intro="The facts the agents answer from — FAQs and documents. Answers cite the source they used, so a reply can always be checked."
			/>
			<div className="report__table-wrap">
				<table className="report__table">
					<thead>
						<tr>
							<th scope="col">Source</th>
							<th scope="col">Kind</th>
							<th scope="col">Contents</th>
							<th scope="col">Updated</th>
							<th scope="col">Status</th>
						</tr>
					</thead>
					<tbody>
						{KNOWLEDGE.map((k) => (
							<tr key={k.name}>
								<td>
									<strong className="report__cell-title">{k.name}</strong>
								</td>
								<td>{k.kind}</td>
								<td>{k.entries}</td>
								<td>{k.updated}</td>
								<td>
									<Chip kind="live">{k.status}</Chip>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="report__card report__card--answer">
				<p className="report__card-label">Answer preview · cited</p>
				<p className="report__caller report__caller--small">“Are you open on Fridays?”</p>
				<p className="report__reply report__reply--small">We are open on Fridays from nine until one.</p>
				<p className="report__cite">Cited · Opening hours · FAQ 4</p>
			</div>
			<SampleNote />
		</section>
	);
}

function Usage() {
	return (
		<section className="report__section" id="usage" aria-label="Usage">
			<SectionHead
				no="06"
				title="Usage"
				intro="What this workspace has used this period, meter by meter, against its plan limits."
			/>
			<ul className="report__meters" role="list">
				{USAGE.map((u) => {
					const pct = Math.round((u.used / u.limit) * 100);
					return (
						<li key={u.meter} className="report__meter">
							<div className="report__meter-main">
								<span className="report__meter-name">{u.meter}</span>
								<span className="report__meter-plain">{u.plain}</span>
							</div>
							<div className="report__meter-side">
								<span className="report__meter-value">
									{u.used}
									{u.unit ? ` ${u.unit}` : ''} of {u.limit}
									{u.unit ? ` ${u.unit}` : ''}
								</span>
								<span className="report__meter-pct">{pct}%</span>
							</div>
							<div
								className="report__meter-bar"
								role="meter"
								aria-label={`${u.meter}, sample`}
								aria-valuemin={0}
								aria-valuemax={100}
								aria-valuenow={pct}
							>
								<span style={{ width: `${pct}%` }} />
							</div>
						</li>
					);
				})}
			</ul>
			<p className="report__para">Every meter is inside its limit. The amounts and limits on this page are samples.</p>
			<SampleNote />
		</section>
	);
}

function Audit() {
	return (
		<section className="report__section" id="audit" aria-label="Audit log">
			<SectionHead
				no="07"
				title="Audit log"
				intro="Who did what, and when. Every publish, invite, hold and key is written here — nothing in a workspace changes silently."
			/>
			<div className="report__table-wrap">
				<table className="report__table">
					<thead>
						<tr>
							<th scope="col">When</th>
							<th scope="col">Category</th>
							<th scope="col">Role</th>
							<th scope="col">Action</th>
							<th scope="col">Detail</th>
						</tr>
					</thead>
					<tbody>
						{AUDIT.map((a) => (
							<tr key={a.when + a.what}>
								<td className="report__td-mono">{a.when}</td>
								<td>
									<Chip kind="plain">{a.category}</Chip>
								</td>
								<td>{a.who}</td>
								<td>
									<strong className="report__cell-title">{a.what}</strong>
								</td>
								<td>{a.detail}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<SampleNote />
		</section>
	);
}

export default function Demo() {
	useTitle('Workspace report · sample data');

	useEffect(() => window.scrollTo(0, 0), []);

	return (
		<>
			<a className="skip-link" href="#main">
				Skip to content
			</a>
			<div className="report-banner" role="note">
				<p>
					<span className="report-banner__tag">Sample data</span>
					This page is a <strong>report about a sample workspace</strong> — not the live dashboard. No real calls, no
					real customers, nothing here talks to the engine.
				</p>
				<Link to="/">Back to the site</Link>
			</div>

			<div className="report">
				<aside className="report__rail">
					<div className="report__rail-brand">
						<Wordmark />
						<p className="report__rail-doc">Studio · Workspace report</p>
					</div>
					<dl className="report__rail-meta">
						<div>
							<dt>Workspace</dt>
							<dd>Demo workspace</dd>
						</div>
						<div>
							<dt>Data</dt>
							<dd>Sample data only</dd>
						</div>
						<div>
							<dt>Period</dt>
							<dd>Today · sample</dd>
						</div>
						<div>
							<dt>Product</dt>
							<dd>Wavia Studio</dd>
						</div>
					</dl>
					<nav className="report__toc" aria-label="Report contents">
						<p className="report__toc-title">Contents</p>
						<ul role="list">
							{CONTENTS.map((c) => (
								<li key={c.id}>
									<a href={`#${c.id}`}>
										<span className="report__toc-no">{c.no}</span>
										{c.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
					<div className="report__rail-actions">
						<a className="btn btn--lime" href={SIGN_UP_URL}>
							Sign up for Studio
						</a>
						<Link className="btn btn--ghost" to="/studio">
							Studio tour
						</Link>
					</div>
					<p className="report__rail-note">
						The working dashboard lives in Studio. This report is the read-only preview for visitors.
					</p>
				</aside>

				<main className="report__main" id="main" tabIndex={-1}>
					<header className="report__cover">
						<p className="report__kicker">Wavia Studio · Sample workspace report</p>
						<h1 className="report__title">One day in a Wavia workspace.</h1>
						<p className="report__lead">
							A voice agent answered the phone, handled interruptions, wrote down what happened and stayed inside
							its usage limits. This report walks through that day in order — what ran, what it recorded, and the
							one thing that needs fixing.
						</p>
						<div className="report__kpis">
							{KPIS.map((k) => (
								<div className="report__kpi" key={k.label}>
									<span className="report__kpi-value">{k.value}</span>
									<span className="report__kpi-label">{k.label}</span>
									<span className="report__kpi-detail">{k.detail}</span>
								</div>
							))}
							<div className="report__kpi">
								<span className="report__kpi-value">412</span>
								<span className="report__kpi-label">Sessions this period</span>
								<span className="report__kpi-detail">41% of the 1,000 allowance</span>
							</div>
						</div>
					</header>

					<Summary />
					<LiveTurn />
					<Agents />
					<Conversations />
					<Knowledge />
					<Usage />
					<Audit />

					<footer className="report__closing">
						<h2>End of report</h2>
						<p>
							Everything above is sample data, written as a report so the shape of a workspace is easy to follow.
							Real workspaces — live agents, real calls, real records — live in Studio.
						</p>
						<div className="btn-row">
							<a className="btn btn--lime" href={SIGN_UP_URL}>
								Sign up for Studio
							</a>
							<Link className="btn btn--ghost" to="/studio">
								Studio tour
							</Link>
						</div>
					</footer>
				</main>
			</div>
		</>
	);
}
