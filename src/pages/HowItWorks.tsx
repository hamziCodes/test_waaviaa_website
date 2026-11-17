import { Link } from 'react-router';
import { CtaBand, PageHead, Section, useTitle } from '@/components/ui';

const STEPS = [
	{
		no: '01',
		title: 'A session is opened.',
		body: [
			'A phone call arrives on a Telnyx number, or your web app asks for a session. For web sessions your server calls the control plane with a tenant API key and receives a short-lived, single-use token plus the WebSocket address. Only that token goes to the browser.',
			'The session runs a published version of the agent. Published versions are immutable: editing the agent creates a new version rather than changing the one a call is using.',
		],
		events: ['protocol.hello', 'session.ready'],
	},
	{
		no: '02',
		title: 'The caller speaks; the engine listens.',
		body: [
			'Audio streams in as 16 kHz mono PCM. Silero voice activity detection marks where speech starts and stops, so the engine knows when the caller has finished a turn.',
		],
		events: ['audio frames'],
	},
	{
		no: '03',
		title: 'Speech becomes text while it is spoken.',
		body: [
			'Streaming speech-to-text produces partial transcripts as the caller talks and a final transcript when the turn ends.',
		],
		events: ['transcript.partial', 'transcript.final'],
	},
	{
		no: '04',
		title: 'The agent decides what to say.',
		body: [
			'A language model writes the reply from the agent’s instructions and, where one is attached, its knowledge base of documents and FAQs.',
		],
		events: [],
	},
	{
		no: '05',
		title: 'The reply is spoken as it is written.',
		body: [
			'Text-to-speech is streamed, so audio starts playing before the whole reply exists. Turn latency is measured from the end of the caller’s speech to the first audible sample of this reply.',
		],
		events: ['audio.start', 'metric.latency', 'audio.end'],
	},
	{
		no: '06',
		title: 'If the caller cuts in, the agent yields.',
		body: [
			'A barge-in stops playback and clears queued audio. The client reports what was actually played, and the engine commits only that text to the conversation — so the next turn starts from what the caller really heard.',
		],
		events: ['control.barge_in', 'control.clear_audio', 'assistant.played_text_commit'],
	},
	{
		no: '07',
		title: 'After the call, it is written down.',
		body: [
			'The conversation is stored with its transcript. Post-call processing adds a summary and the fields you chose to extract — a requested time, a name, a reason for calling — so the call can be picked up by a person or a system without listening back.',
		],
		events: ['session.close'],
	},
];

export default function HowItWorks() {
	useTitle('How it works');
	return (
		<>
			<PageHead
				no="02"
				kicker="How it works"
				title={
					<>
						One call, <span className="hl">step</span> by step.
					</>
				}
				lead="The landing page shows the call. This page explains it: what happens at each stage, what the protocol says, and what is left behind afterwards."
			/>

			<Section id="steps" label="The call" title="Seven steps, one connection.">
				<ol className="ledger" role="list">
					{STEPS.map((s) => (
						<li key={s.no}>
							<span className="label">{s.no}</span>
							<div>
								<h3>{s.title}</h3>
								{s.body.map((b) => (
									<p key={b.slice(0, 24)}>{b}</p>
								))}
								{s.events.length ? (
									<p className="label" style={{ marginTop: 12 }}>
										Protocol · {s.events.map((e) => <code key={e} style={{ marginRight: 6 }}>{e}</code>)}
									</p>
								) : null}
							</div>
						</li>
					))}
				</ol>
			</Section>

			<Section
				id="failover"
				label="Resilience"
				title="Two routes for every stage."
				intro="An agent is configured with two provider routes per stage — speech-to-text, language model and text-to-speech — so a stage can fail over to its second route."
			>
				<div className="prose">
					<p>
						Routes are chosen from the provider catalogue: Gladia or Deepgram for speech-to-text; Groq, Gemini or OpenAI
						for the language model; Uplift, ElevenLabs or Cartesia for text-to-speech. Tenants can bring their own provider
						keys, which are stored encrypted.
					</p>
				</div>
			</Section>

			<Section
				id="security"
				label="Session security"
				title="Secrets stay on your server."
				intro="Browsers and phones never hold an API key or a provider credential."
			>
				<div className="prose">
					<p>
						Your backend mints the session with a tenant API key. The client receives a short-lived, single-use token and
						the WebSocket URL, and connects with realtime protocol v1. The worker warns the client before the token
						expires.
					</p>
					<p>
						The details, with code, are in the <Link to="/developers/docs">developer documentation</Link>.
					</p>
				</div>
			</Section>

			<CtaBand title="Build an agent and hear it yourself.">
				<Link className="btn btn--ghost" to="/studio">
					Tour Studio
				</Link>
				<Link className="btn" to="/developers/docs">
					Read the docs
				</Link>
			</CtaBand>
		</>
	);
}
