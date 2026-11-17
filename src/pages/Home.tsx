import { Link } from 'react-router';
import { CallJourney } from '@/landing/CallJourney';
import { CtaBand, Doors, Section, useTitle } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { PROVIDERS } from '@/content/site';
import { SIGN_UP_URL } from '@/config';

const FLOORS = [
	{
		tag: 'VAD',
		title: 'Hears you stop talking.',
		body: 'Silero voice activity detection marks where speech starts and ends, so the engine knows when the caller has finished a turn.',
		who: 'Silero VAD',
	},
	{
		tag: 'STT',
		title: 'Turns speech into text, as it arrives.',
		body: 'Streaming speech-to-text produces partial and final transcripts while the caller is still speaking.',
		who: PROVIDERS.stt.join(' · '),
	},
	{
		tag: 'LLM',
		title: 'Decides what to say.',
		body: 'A language model answers from your agent’s instructions and knowledge base.',
		who: PROVIDERS.llm.join(' · '),
	},
	{
		tag: 'TTS',
		title: 'Speaks back — and stops when you do.',
		body: 'Speech is streamed as it is generated. A barge-in clears playback and commits only the text that was played.',
		who: PROVIDERS.tts.join(' · '),
	},
];

const CONTROLS = [
	{ no: '01', title: 'Retention', body: 'Set how long conversations are kept in a workspace.' },
	{ no: '02', title: 'Legal hold', body: 'Hold conversations so retention does not remove them while a hold applies.' },
	{ no: '03', title: 'Deletion and erasure', body: 'Delete a single conversation, or erase a whole workspace, with an audit trail of what happened.' },
	{ no: '04', title: 'Log redaction', body: 'Logs are redacted, so sensitive values are not written out in plain text.' },
];

export default function Home() {
	useTitle('');
	return (
		<>
			<CallJourney />

			<section className="stack on-dark" aria-labelledby="stack-title">
				<div className="wrap">
					<div className="stack__head">
						<p className="label label--lilac">The engine</p>
						<div>
							<h2 id="stack-title">One loop. Four jobs.</h2>
							<p>
								Every turn runs through one native WebSocket pipeline. Turn latency is measured from the end of speech to
								the first audible sample.
							</p>
						</div>
					</div>
					<ol className="floors" role="list">
						{FLOORS.map((f, i) => (
							<Reveal as="li" key={f.tag} className="floor" delay={i * 80}>
								<span className="floor__tag">{f.tag}</span>
								<div>
									<h3>{f.title}</h3>
									<p>{f.body}</p>
								</div>
								<p className="label">{f.who}</p>
							</Reveal>
						))}
					</ol>
					<p className="label" style={{ marginTop: 24 }}>
						Read bottom to top · each agent stage needs two routes, so a provider can fail over ·{' '}
						<Link to="/how-it-works">How it works</Link>
					</p>
				</div>
			</section>

			<Section
				id="doors"
				label="Three doors"
				title={
					<>
						Pick the way <em>in</em>.
					</>
				}
				intro="Have it built for you, build it yourself in Studio, or wire the engine into your own product."
			>
				<Doors />
			</Section>

			<Section
				id="controls"
				label="Your data"
				title="Controls you can point at."
				intro="Privacy in Wavia is a set of product controls, not a badge. Here is what exists today."
			>
				<ul className="ledger" role="list">
					{CONTROLS.map((c) => (
						<li key={c.no}>
							<span className="label">{c.no}</span>
							<div>
								<h3>{c.title}</h3>
								<p>{c.body}</p>
							</div>
						</li>
					))}
				</ul>
				<p style={{ marginTop: 24 }}>
					<Link className="arrow-link" to="/privacy">
						How the site and the product handle data
					</Link>
				</p>
			</Section>

			<CtaBand
				title={
					<>
						Start where <span className="hl">you</span> are.
					</>
				}
			>
				<Link className="btn btn--ghost" to="/custom">
					Talk to us
				</Link>
				<a className="btn btn--lime" href={SIGN_UP_URL}>
					Start building
				</a>
				<Link className="btn btn--ghost" to="/developers/docs">
					Read the docs
				</Link>
			</CtaBand>
		</>
	);
}
