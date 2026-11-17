import { Link } from 'react-router';
import { CtaBand, PageHead, Section, useTitle } from '@/components/ui';
import { SIGN_UP_URL } from '@/config';

const METERS = [
	['Sessions', 'Each conversation, from mint or inbound call to close.'],
	['Minutes', 'Conversation time.'],
	['LLM tokens', 'Language-model tokens used to write replies.'],
	['STT seconds', 'Seconds of caller audio transcribed.'],
	['TTS seconds', 'Seconds of agent speech generated.'],
];

export default function Pricing() {
	useTitle('Pricing');
	return (
		<>
			<PageHead
				no="05"
				kicker="Pricing"
				title={
					<>
						Priced on <span className="hl">use</span>.
					</>
				}
				lead="Two flat monthly plans and one custom tier. Every plan is measured on the same five usage meters, live in your workspace — so a conversation's cost is never a surprise."
				aside={
					<div className="btn-row" style={{ marginTop: 28 }}>
						<a className="btn btn--lime" href={SIGN_UP_URL}>
							Start with Studio
						</a>
						<Link className="btn btn--ghost" to="/contact">
							Ask a question
						</Link>
					</div>
				}
			/>

			<Section id="plans" label="01 · Plans" title="Pick a size. Change it when you grow.">
				<div className="doors">
					<div className="door">
						<span className="label">Studio · self-serve</span>
						<p className="plan__price">
							$29<span> / month</span>
						</p>
						<p>
							Start here. Build a voice agent yourself in the browser, test it by talking to it, and put it on the web —
							no code, about five minutes to your first agent.
						</p>
						<ul className="plan__list">
							<li>Agent builder with knowledge base</li>
							<li>30 minutes of free test calls every month</li>
							<li>Transcripts, summaries and extracted fields</li>
							<li>Every meter visible in your workspace</li>
						</ul>
						<p>
							<a className="arrow-link" href={SIGN_UP_URL}>
								Start with Studio
							</a>
						</p>
					</div>
					<div className="door">
						<span className="label">Core · live phone lines</span>
						<p className="plan__price">
							$149<span> / month</span>
						</p>
						<p>
							For a real phone number your customers already call. Inbound and outbound agents on telephony, with a
							backup provider at every stage so one failure never drops a call.
						</p>
						<ul className="plan__list">
							<li>Everything in Studio</li>
							<li>Phone agents via Telnyx (Twilio on request)</li>
							<li>Two routes per stage — automatic failover</li>
							<li>Retention controls, legal hold, audit log</li>
						</ul>
						<p>
							<Link className="arrow-link" to="/contact">
								Talk to us about Core
							</Link>
						</p>
					</div>
					<div className="door">
						<span className="label">Shield · custom</span>
						<p className="plan__price">
							Custom<span> / quoted</span>
						</p>
						<p>
							We scope, build and deploy the agent with your team — including self-hosted deployments and setups with
							strict rules on where data lives and how long it is kept.
						</p>
						<ul className="plan__list">
							<li>Everything in Core</li>
							<li>Built and deployed with you, white-glove</li>
							<li>Self-hostable container images</li>
							<li>Custom retention and data-residency terms</li>
						</ul>
						<p>
							<Link className="arrow-link" to="/custom">
								About custom deployments
							</Link>
						</p>
					</div>
				</div>
			</Section>

			<Section
				id="meters"
				label="02 · What is metered"
				title="Five meters, all visible to you."
				intro="These are the usage meters in the product. Studio shows your usage against your workspace limits."
			>
				<div className="table-wrap">
					<table className="table">
						<caption className="label">Usage meters</caption>
						<thead>
							<tr>
								<th scope="col">Meter</th>
								<th scope="col">What it counts</th>
							</tr>
						</thead>
						<tbody>
							{METERS.map(([m, d]) => (
								<tr key={m}>
									<td>{m}</td>
									<td>{d}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</Section>

			<Section id="ways" label="03 · Ways to work" title="Three doors, one engine.">
				<div className="cols">
					<div>
						<span className="label">Custom</span>
						<h3>Built with you</h3>
						<p>We scope, build and deploy the agent with your team. Quoted per project.</p>
						<p style={{ marginTop: 16 }}>
							<Link className="arrow-link" to="/custom">
								About custom deployments
							</Link>
						</p>
					</div>
					<div>
						<span className="label">Studio</span>
						<h3>Self-serve</h3>
						<p>Sign up, build agents and see usage in your workspace. $29/mo, with 30 minutes of free test calls every month.</p>
						<p style={{ marginTop: 16 }}>
							<a className="arrow-link" href={SIGN_UP_URL}>
								Sign up
							</a>
						</p>
					</div>
					<div>
						<span className="label">Developers</span>
						<h3>API and SDKs</h3>
						<p>The same meters apply to sessions you mint from your own backend.</p>
						<p style={{ marginTop: 16 }}>
							<Link className="arrow-link" to="/developers">
								Developer overview
							</Link>
						</p>
					</div>
				</div>
			</Section>

			<Section id="faq" label="04 · Questions" title="Straight answers.">
				<div className="faq">
					<details>
						<summary>What do the plans include beyond the monthly price?</summary>
						<div>
							<p>
								Usage on the five meters above. Your workspace shows every meter against your plan, live — so you see a
								conversation's cost as it happens, not at the end of the month. Heavy or unusual usage is quoted with you
								before it runs, never after.
							</p>
						</div>
					</details>
					<details>
						<summary>Can I start free?</summary>
						<div>
							<p>
								Studio includes 30 minutes of test calls every month, so you can build an agent and talk to it before
								putting it in front of a single customer.
							</p>
						</div>
					</details>
					<details>
						<summary>Can I use my own provider keys?</summary>
						<div>
							<p>
								Yes. Tenants can bring their own speech-to-text, language-model and text-to-speech provider keys; they are
								stored encrypted. Tell us if you plan to, as it affects a quote.
							</p>
						</div>
					</details>
					<details>
						<summary>Where can I see what I have used?</summary>
						<div>
							<p>In Studio, under usage and limits, for each workspace.</p>
						</div>
					</details>
					<details>
						<summary>Can we self-host?</summary>
						<div>
							<p>
								Wavia ships as self-hostable container images. Self-hosted deployments are arranged through{' '}
								<Link to="/custom">Custom</Link>.
							</p>
						</div>
					</details>
				</div>
			</Section>

			<CtaBand title="Tell us what you want it to answer.">
				<Link className="btn" to="/contact">
					Contact us
				</Link>
				<a className="btn btn--ghost" href={SIGN_UP_URL}>
					Sign up
				</a>
			</CtaBand>
		</>
	);
}
