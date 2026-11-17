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
				lead="Wavia measures what each conversation actually uses. We have not published prices yet — tell us what you are building and we will quote it."
				aside={
					<div className="btn-row" style={{ marginTop: 28 }}>
						<Link className="btn" to="/contact">
							Ask for a quote
						</Link>
					</div>
				}
			/>

			<Section
				id="meters"
				label="01 · What is metered"
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

			<Section id="ways" label="02 · Ways to work" title="Three doors, one engine.">
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
						<p>Sign up, build agents and see usage in your workspace. There is no billing in Studio today.</p>
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

			<Section id="faq" label="03 · Questions" title="Straight answers.">
				<div className="faq">
					<details>
						<summary>Why are there no prices on this page?</summary>
						<div>
							<p>
								Because they are not set yet, and we would rather show nothing than a number that changes. The meters above
								are what pricing will be built on.
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
