import { Link } from 'react-router';
import { CtaBand, PageHead, Section, useTitle } from '@/components/ui';
import { LANGUAGES } from '@/content/site';

const STEPS = [
	{
		no: '01',
		title: 'Scope',
		body: 'We sit down with your team and write down the calls: who rings, what they ask, what should happen next, and what must never happen.',
	},
	{
		no: '02',
		title: 'Build',
		body: 'We build the agent in Studio — instructions, knowledge base, the fields to extract after each call — and test it by talking to it.',
	},
	{
		no: '03',
		title: 'Connect',
		body: 'We connect telephony through Telnyx for inbound calls, or embed the agent in your web product with the SDK.',
	},
	{
		no: '04',
		title: 'Hand over',
		body: 'Your team gets the workspace, with roles for the people who edit, operate and audit it. Published versions stay immutable, so changes are deliberate.',
	},
];

export default function Custom() {
	useTitle('Custom deployments');
	return (
		<>
			<PageHead
				no="06"
				kicker="Custom · enterprise and white-glove"
				title={
					<>
						We build it <span className="hl">with</span> you.
					</>
				}
				lead="For organisations that want a voice agent on their line without configuring it themselves, or that need the engine deployed on their own terms."
				aside={
					<div className="btn-row" style={{ marginTop: 28 }}>
						<Link className="btn" to="/contact">
							Talk to us
						</Link>
					</div>
				}
			/>

			<Section id="process" label="01 · How it runs" title="Four steps, in order.">
				<ol className="ledger" role="list">
					{STEPS.map((s) => (
						<li key={s.no}>
							<span className="label">{s.no}</span>
							<div>
								<h3>{s.title}</h3>
								<p>{s.body}</p>
							</div>
						</li>
					))}
				</ol>
			</Section>

			<Section
				id="deployment"
				label="02 · Where it runs"
				title="Hosted, or on your infrastructure."
				intro="The engine ships as self-hostable container images."
			>
				<dl className="facts">
					<dt className="label">Self-hosted</dt>
					<dd>Run the container images in your own environment.</dd>
					<dt className="label">Hosted</dt>
					<dd>Our hosted deployment is designed for AWS me-central-1 (UAE). That region is planned; it is not live yet.</dd>
					<dt className="label">Provider keys</dt>
					<dd>Use your own speech-to-text, language-model and text-to-speech keys. They are stored encrypted.</dd>
					<dt className="label">Telephony</dt>
					<dd>Telnyx inbound calls and controlled single outbound calls.</dd>
					<dt className="label">Languages</dt>
					<dd>Configured for {LANGUAGES.join(', ')}.</dd>
				</dl>
			</Section>

			<Section
				id="governance"
				label="03 · Governance"
				title="Controls your compliance team can use."
				intro="We describe controls, not certificates. These exist in the product today."
			>
				<ul className="ledger" role="list">
					<li>
						<span className="label">Roles</span>
						<p>Administrator, editor, developer, read-only operator and compliance administrator.</p>
					</li>
					<li>
						<span className="label">Retention</span>
						<p>Per-workspace retention of conversations, with legal hold.</p>
					</li>
					<li>
						<span className="label">Erasure</span>
						<p>Conversation deletion and full workspace erasure, recorded in the audit trail.</p>
					</li>
					<li>
						<span className="label">Audit log</span>
						<p>Workspace actions are recorded and readable by the roles granted audit access.</p>
					</li>
					<li>
						<span className="label">Redaction</span>
						<p>Logs are redacted so sensitive values are not written out in plain text.</p>
					</li>
				</ul>
			</Section>

			<CtaBand
				title={
					<>
						Tell us about the <em>calls</em>.
					</>
				}
			>
				<Link className="btn" to="/contact">
					Contact us
				</Link>
				<Link className="btn btn--ghost" to="/product">
					Read the product page
				</Link>
			</CtaBand>
		</>
	);
}
