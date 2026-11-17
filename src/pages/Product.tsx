import { Link } from 'react-router';
import { CtaBand, PageHead, Section, useTitle } from '@/components/ui';
import { LANGUAGES, PROVIDERS } from '@/content/site';
import { SIGN_UP_URL } from '@/config';

export default function Product() {
	useTitle('Product');
	return (
		<>
			<PageHead
				no="01"
				kicker="Product"
				title={
					<>
						A voice engine that <span className="hl">listens</span> while it talks.
					</>
				}
				lead="Wavia runs the whole spoken turn — hearing, transcribing, deciding, speaking — in one realtime pipeline, and lets the caller cut in at any moment."
			/>

			<Section
				id="pipeline"
				label="01 · The pipeline"
				title="One native WebSocket pipeline."
				intro="Audio in, audio out, over a single realtime connection. Four stages, each streaming into the next."
			>
				<div className="table-wrap">
					<table className="table">
						<caption className="label">Stages of a turn, in order</caption>
						<thead>
							<tr>
								<th scope="col">Stage</th>
								<th scope="col">What it does</th>
								<th scope="col">Providers</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>VAD</td>
								<td>Silero voice activity detection finds where the caller starts and stops speaking.</td>
								<td>Silero (in the engine)</td>
							</tr>
							<tr>
								<td>Speech-to-text</td>
								<td>Streams partial and final transcripts while the caller is still talking.</td>
								<td>{PROVIDERS.stt.join(', ')}</td>
							</tr>
							<tr>
								<td>Language model</td>
								<td>Writes the reply from the agent’s instructions and knowledge base.</td>
								<td>{PROVIDERS.llm.join(', ')}</td>
							</tr>
							<tr>
								<td>Text-to-speech</td>
								<td>Streams speech back as it is generated, so playback starts before the reply is finished.</td>
								<td>{PROVIDERS.tts.join(', ')}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p className="prose" style={{ marginTop: 24 }}>
					Turn latency is measured from the end of the caller’s speech to the first audible sample of the reply — the
					moment a person on the line would notice. We do not publish latency figures on this site.
				</p>
			</Section>

			<Section
				id="interruption"
				label="02 · Interruption"
				title={
					<>
						Talk over it. It <em>yields</em>.
					</>
				}
				intro="Barge-in is part of the protocol, not an afterthought."
			>
				<div className="split">
					<div className="prose">
						<p>
							When the caller starts speaking while the agent is talking, the engine stops playback and clears the queued
							audio. It then commits the <em>played text</em> — only the words the caller actually heard — to the
							conversation.
						</p>
						<p>
							That matters for the next turn. If the agent was cut off halfway through a list of options, it knows which
							options were heard and which were never spoken, and answers from there.
						</p>
					</div>
					<ul className="ledger" role="list">
						<li>
							<span className="label">Heard</span>
							<p>“Thursday morning I have ten o’clock or eleven thirty.”</p>
						</li>
						<li>
							<span className="label">Never played</span>
							<p>
								<s>“If neither of those suits, I can also look at Friday…”</s>
							</p>
						</li>
						<li>
							<span className="label">Committed</span>
							<p>Only the heard sentence enters the conversation history.</p>
						</li>
					</ul>
				</div>
			</Section>

			<Section
				id="languages"
				label="03 · Languages"
				title="Four languages configured."
				intro="The engine is configured for the languages below. A session can request a language and a voice when it is created."
			>
				<ul className="cols" role="list" style={{ ['--cols' as string]: 4 }}>
					{LANGUAGES.map((l, i) => (
						<li key={l}>
							<span className="label">0{i + 1}</span>
							<h3>{l}</h3>
						</li>
					))}
				</ul>
			</Section>

			<Section
				id="channels"
				label="04 · Where calls come from"
				title="Phone lines and the browser."
				intro="The same agent can answer a phone call or a web session."
			>
				<div className="cols" style={{ ['--cols' as string]: 3 }}>
					<div>
						<span className="label">Telephony</span>
						<h3>Telnyx</h3>
						<p>Inbound calls to your number, and controlled single outbound calls.</p>
					</div>
					<div>
						<span className="label">Web</span>
						<h3>SDKs</h3>
						<p>
							Your server mints a session; the browser gets a short-lived, single-use token and connects with the
							TypeScript SDK or its React hook.
						</p>
					</div>
					<div>
						<span className="label">Studio</span>
						<h3>Browser voice test</h3>
						<p>Talk to an agent from Studio before you publish it, with the transcript alongside.</p>
					</div>
				</div>
			</Section>

			<Section
				id="providers"
				label="05 · Providers"
				title="Your choice of models, with failover."
				intro="Each stage draws from a provider catalogue. Agents need two routes per stage, so a stage can fail over to its second route."
			>
				<dl className="facts">
					<dt className="label">Speech-to-text</dt>
					<dd>{PROVIDERS.stt.join(' · ')}</dd>
					<dt className="label">Language model</dt>
					<dd>{PROVIDERS.llm.join(' · ')}</dd>
					<dt className="label">Text-to-speech</dt>
					<dd>{PROVIDERS.tts.join(' · ')}</dd>
					<dt className="label">Your own keys</dt>
					<dd>Tenants can bring their own provider keys. They are stored encrypted.</dd>
				</dl>
			</Section>

			<Section
				id="privacy"
				label="06 · Data controls"
				title="Controls, described plainly."
				intro="What the product does with conversation data, and what you can do about it."
			>
				<ul className="ledger" role="list">
					<li>
						<span className="label">Retention</span>
						<p>Choose how long a workspace keeps conversations.</p>
					</li>
					<li>
						<span className="label">Legal hold</span>
						<p>Keep conversations from being removed while a hold applies.</p>
					</li>
					<li>
						<span className="label">Deletion</span>
						<p>Delete individual conversations, or erase a whole workspace. Erasure leaves an audit trail.</p>
					</li>
					<li>
						<span className="label">Redaction</span>
						<p>Logs are redacted so sensitive values are not written out in plain text.</p>
					</li>
					<li>
						<span className="label">Audit log</span>
						<p>Workspace actions are recorded in an audit log visible in Studio.</p>
					</li>
				</ul>
			</Section>

			<Section
				id="deploy"
				label="07 · Deployment"
				title="Run it where you need it."
				intro="Wavia ships as container images, so it can be self-hosted."
			>
				<div className="prose">
					<p>
						The engine and its services are packaged as self-hostable container images. Our hosted deployment is designed
						for AWS in the UAE (me-central-1); that region is planned, not yet live.
					</p>
					<p>
						For a deployment shaped around your own infrastructure, see <Link to="/custom">Custom</Link>.
					</p>
				</div>
			</Section>

			<CtaBand title="See how one call moves through it.">
				<Link className="btn" to="/how-it-works">
					How it works
				</Link>
				<a className="btn btn--lime" href={SIGN_UP_URL}>
					Start building
				</a>
			</CtaBand>
		</>
	);
}
