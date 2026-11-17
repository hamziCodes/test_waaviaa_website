import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { CtaBand, PageHead, Section, useTitle } from '@/components/ui';
import { SIGN_UP_URL } from '@/config';

function Frame({ title, children }: { title: string; children: ReactNode }) {
	return (
		<figure className="frame" aria-label={`${title} — illustrative interface`}>
			<div className="frame__bar">
				<span className="label">{title}</span>
				<span className="label">Illustrative UI</span>
			</div>
			<div className="frame__body">{children}</div>
		</figure>
	);
}

function Row({ k, v, chip }: { k: string; v: string; chip?: string }) {
	return (
		<div className="mini-row">
			<span>{k}</span>
			<span className="mini-row__v">
				{chip ? <span className="label hl">{chip}</span> : null} {v}
			</span>
		</div>
	);
}

const TOUR = [
	{
		id: 'agents',
		label: '01 · Agents',
		title: 'Build an agent, then publish a version.',
		body: [
			'An agent holds its instructions, language and voice, and its provider routes — two per stage, for failover.',
			'Publishing creates a version. Published versions are immutable, so what is answering your calls today does not change while you edit tomorrow’s.',
		],
		frame: (
			<Frame title="Agents · clinic reception">
				<Row k="Version 3" v="Published" chip="Live" />
				<Row k="Version 2" v="Published · immutable" />
				<Row k="Draft" v="Edited, not published" />
			</Frame>
		),
	},
	{
		id: 'knowledge',
		label: '02 · Knowledge',
		title: 'Give it something to know.',
		body: [
			'Knowledge bases hold documents and FAQs. Before a caller ever asks, you can preview the answer the agent would give — with citations back to the source it used.',
		],
		frame: (
			<Frame title="Knowledge · preview answer">
				<p className="mini-q">“Do you open on Fridays?”</p>
				<p className="mini-a">We are open on Fridays from nine until one.</p>
				<p className="label" style={{ marginTop: 8 }}>
					Cited · opening-hours.pdf · FAQ 4
				</p>
			</Frame>
		),
	},
	{
		id: 'test',
		label: '03 · Test',
		title: 'Talk to it in the browser.',
		body: [
			'The browser voice test lets you speak to an agent from Studio and read the transcript as it happens — including what happens when you interrupt it.',
		],
		frame: (
			<Frame title="Test · browser voice">
				<Row k="Caller" v="Can I book for Thursday?" />
				<Row k="Agent" v="Thursday morning I have ten o’clock or—" />
				<Row k="Event" v="Barge-in · playback stopped" chip="cut" />
			</Frame>
		),
	},
	{
		id: 'channels',
		label: '04 · Channels',
		title: 'Put it on a line, or on a page.',
		body: [
			'Connect a Telnyx number for inbound calls, place controlled single outbound calls, or embed the agent in your own web app with the SDK and a server-minted session token.',
		],
		frame: (
			<Frame title="Channels">
				<Row k="Telephony" v="Telnyx · inbound" />
				<Row k="Outbound" v="Single, controlled calls" />
				<Row k="Web" v="SDK · server-minted token" />
			</Frame>
		),
	},
	{
		id: 'conversations',
		label: '05 · Conversations',
		title: 'Every call, written down.',
		body: [
			'Each conversation keeps its transcript, a post-call summary and the fields you asked to extract. Retention, legal hold and deletion are applied here too.',
		],
		frame: (
			<Frame title="Conversation · post-call">
				<p className="mini-a">Caller asked for a Thursday appointment and chose 10:00.</p>
				<Row k="requested_slot" v="Thursday 10:00" />
				<Row k="caller_name" v="Sara Khan" />
			</Frame>
		),
	},
	{
		id: 'operate',
		label: '06 · Operate',
		title: 'Usage, limits, audit, keys.',
		body: [
			'See usage against your limits — sessions, minutes, language-model tokens, speech-to-text and text-to-speech seconds. Every workspace action lands in the audit log. Developers manage API keys; provider keys you bring are stored encrypted.',
		],
		frame: (
			<Frame title="Settings">
				<Row k="Usage & limits" v="Sessions · minutes · tokens · seconds" />
				<Row k="Audit log" v="Who did what, and when" />
				<Row k="API keys" v="Scoped to the workspace" />
				<Row k="Providers" v="Bring your own keys" />
			</Frame>
		),
	},
];

const ROLES = [
	{ role: 'Administrator', does: 'Members and invitations, agents, knowledge, telephony, API keys and provider keys.' },
	{ role: 'Editor', does: 'Agents, knowledge bases and extracted fields; reads conversations and usage.' },
	{ role: 'Developer', does: 'API keys and session minting; reads agents and usage.' },
	{ role: 'Read-only operator', does: 'Reads agents, knowledge, conversations and usage without changing them.' },
	{ role: 'Compliance administrator', does: 'Audit log, legal hold and erasure.' },
];

export default function Studio() {
	useTitle('Studio');
	return (
		<>
			<PageHead
				no="03"
				kicker="Studio · for business teams"
				title={
					<>
						Build a voice agent <span className="hl">yourself</span>.
					</>
				}
				lead="Studio is where you create agents, give them knowledge, test them by talking to them, publish them and read every conversation afterwards."
				aside={
					<div className="btn-row" style={{ marginTop: 28 }}>
						<a className="btn btn--lime" href={SIGN_UP_URL}>
							Sign up for Studio
						</a>
						<Link className="btn btn--ghost" to="/demo">
							View the demo dashboard
						</Link>
					</div>
				}
			/>

			{TOUR.map((t) => (
				<Section key={t.id} id={t.id} label={t.label} title={t.title}>
					<div className="split">
						<div className="prose">
							{t.body.map((b) => (
								<p key={b.slice(0, 24)}>{b}</p>
							))}
						</div>
						{t.frame}
					</div>
				</Section>
			))}

			<Section
				id="workspaces"
				label="07 · Workspaces"
				title="A workspace for your team."
				intro="Invite people to a workspace and give each one a role."
			>
				<div className="table-wrap">
					<table className="table">
						<caption className="label">Workspace roles</caption>
						<thead>
							<tr>
								<th scope="col">Role</th>
								<th scope="col">Works with</th>
							</tr>
						</thead>
						<tbody>
							{ROLES.map((r) => (
								<tr key={r.role}>
									<td>{r.role}</td>
									<td>{r.does}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</Section>

			<CtaBand title="Open Studio and build the first one.">
				<a className="btn btn--lime" href={SIGN_UP_URL}>
					Sign up
				</a>
				<Link className="btn btn--ghost" to="/custom">
					Or have us build it
				</Link>
			</CtaBand>
		</>
	);
}
