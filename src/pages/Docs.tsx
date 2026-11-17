import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { CodeBlock, useTitle } from '@/components/ui';
import { CLIENT_TS, MINT_CURL, MINT_RESPONSE, MINT_SERVER_TS, PYTHON, REACT_TS } from '@/content/code';
import { LANGUAGES, PROVIDERS } from '@/content/site';

const TOC = [
	['overview', 'Overview'],
	['concepts', 'Concepts'],
	['packages', 'Packages'],
	['mint', 'Mint a session'],
	['browser', 'Connect from the browser'],
	['react', 'React hook'],
	['python', 'Python'],
	['audio', 'Audio format'],
	['events', 'Protocol v1 events'],
	['barge-in', 'Interruption and played text'],
	['expiry', 'Token expiry and refresh'],
	['providers', 'Providers and failover'],
	['languages', 'Languages'],
	['telephony', 'Telephony'],
	['security', 'Security checklist'],
] as const;

const EVENTS: [string, string, string][] = [
	['protocol.hello', 'client ↔ server', 'Opens the v1 handshake. The SDK sends and answers it for you.'],
	['session.ready', 'server → client', 'The session is ready for audio or text turns.'],
	['transcript.partial', 'server → client', 'Interim transcript of the caller while they speak.'],
	['transcript.final', 'server → client', 'Final transcript for the caller’s turn.'],
	['text.turn', 'client → server', 'A text turn in place of audio.'],
	['audio.start', 'server → client', 'Agent audio for a turn is starting.'],
	['audio.end', 'server → client', 'Agent audio for a turn has ended.'],
	['control.playback_started', 'client → server', 'The client began playing agent audio.'],
	['control.playback_drained', 'client → server', 'The client finished playing queued audio.'],
	['control.barge_in', 'client ↔ server', 'The caller spoke over the agent.'],
	['control.clear_audio', 'server → client', 'Stop playback and discard queued agent audio.'],
	['control.clear_audio_ack', 'client → server', 'Acknowledges the clear, with how much was actually played.'],
	['assistant.played_text_commit', 'server → client', 'The text the caller actually heard, committed to the conversation.'],
	['metric.latency', 'server → client', 'Latency measurements for the turn.'],
	['session.token_expiring', 'server → client', 'The session token is about to expire.'],
	['control.ping / control.pong', 'both', 'Keepalives. The SDKs answer them.'],
	['session.close', 'server → client', 'The session has ended, with a reason; some closes are retryable.'],
];

function DocSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
	return (
		<section id={id} className="doc-section" aria-labelledby={`${id}-h`}>
			<h2 id={`${id}-h`}>{title}</h2>
			<div className="prose">{children}</div>
		</section>
	);
}

export default function Docs() {
	useTitle('Documentation');
	return (
		<div className="wrap docs">
			<header className="docs__head">
				<div className="page-head__kicker">
					<p className="label">Developers · Documentation</p>
					<p className="label">Protocol v1</p>
				</div>
				<h1>
					Developer <span className="hl">docs</span>.
				</h1>
				<p className="page-head__lead">
					Everything needed to put a Wavia agent behind your own interface: minting sessions, connecting clients, the
					realtime events and how interruptions behave.
				</p>
			</header>

			<div className="docs__grid">
				<nav className="docs__toc" aria-label="On this page">
					<p className="label">On this page</p>
					<ol role="list">
						{TOC.map(([id, label]) => (
							<li key={id}>
								<a href={`#${id}`}>{label}</a>
							</li>
						))}
					</ol>
				</nav>

				<div className="docs__body">
					<DocSection id="overview" title="Overview">
						<p>
							Wavia is a realtime voice engine. A client streams the caller’s audio to a worker over a WebSocket; the
							worker runs voice activity detection (Silero), streaming speech-to-text, a language model and streamed
							text-to-speech, and streams the agent’s audio back. Interruptions (barge-in) are handled in the protocol.
						</p>
						<p>
							There are two ways in. <Link to="/studio">Studio</Link> is the no-code workspace where agents are built,
							tested and published. The SDKs on this page connect your own web or Python application to a published
							agent.
						</p>
					</DocSection>

					<DocSection id="concepts" title="Concepts">
						<dl className="facts">
							<dt className="label">Tenant · workspace</dt>
							<dd>Your organisation’s space in Wavia. Members are invited with a role.</dd>
							<dt className="label">Agent</dt>
							<dd>Instructions, language, voice, knowledge and provider routes for one assistant.</dd>
							<dt className="label">Published version</dt>
							<dd>An immutable snapshot of an agent. Sessions run published versions.</dd>
							<dt className="label">API key</dt>
							<dd>
								A tenant credential for your server. Minting needs the <code>session:mint</code> scope. Never ship it to a
								client.
							</dd>
							<dt className="label">Session</dt>
							<dd>One conversation. Created by a mint call; joined by a client holding the session token.</dd>
							<dt className="label">Session token</dt>
							<dd>Short-lived and single-use. The only credential a browser or device should hold.</dd>
						</dl>
					</DocSection>

					<DocSection id="packages" title="Packages">
						<ul>
							<li>
								TypeScript: <code>@ucve/voice-sdk</code> — an ES module exporting <code>UCVEVoiceClient</code>, with no
								React runtime dependency.
							</li>
							<li>
								React: <code>@ucve/voice-sdk/react</code> — the <code>useUCVEVoice</code> hook. React 18 or later.
							</li>
							<li>
								Python: <code>ucve-voice-sdk</code>, imported as <code>ucve</code>.
							</li>
						</ul>
						<p>
							Both SDKs speak realtime protocol v1. If you do not yet have access to the packages, <Link to="/contact">contact us</Link>.
						</p>
					</DocSection>

					<DocSection id="mint" title="Mint a session">
						<p>
							Minting happens on a server you control. Call <code>POST /v1/session/mint</code> with your tenant API key
							as a bearer token and the tenant and agent identifiers in the body. Optional <code>language</code> and{' '}
							<code>voice_id</code> fields request a language and voice for the session.
						</p>
						<CodeBlock label="Mint · curl" code={MINT_CURL} />
						<p>The response carries everything the client needs, and nothing secret:</p>
						<CodeBlock label="Mint · response shape" code={MINT_RESPONSE} />
						<p>
							Read <code>ttl_sec</code> from the response rather than hard-coding a lifetime. A typical server endpoint
							forwards only the token and the WebSocket URL:
						</p>
						<CodeBlock label="Mint · Node server (example)" code={MINT_SERVER_TS} />
					</DocSection>

					<DocSection id="browser" title="Connect from the browser">
						<p>
							Fetch a token from your own endpoint, create a <code>UCVEVoiceClient</code>, and connect. The client
							performs the v1 handshake, answers keepalives and calls your handlers as events arrive.
						</p>
						<CodeBlock label="Browser · TypeScript" code={CLIENT_TS} />
						<p>
							Useful handlers include <code>onTranscript</code>, <code>onAudio</code>, <code>onAudioStart</code>,{' '}
							<code>onAudioEnd</code>, <code>onBargeIn</code>, <code>onClearAudio</code>,{' '}
							<code>onPlayedTextCommit</code>, <code>onMetric</code>, <code>onDegraded</code>,{' '}
							<code>onTokenExpiring</code>, <code>onError</code> and <code>onClose</code>.
						</p>
					</DocSection>

					<DocSection id="react" title="React hook">
						<p>
							<code>useUCVEVoice()</code> wraps the client’s lifecycle and exposes <code>isConnected</code>,{' '}
							<code>isSpeaking</code>, <code>transcript</code> and <code>remoteClose</code>, with{' '}
							<code>connect</code>, <code>disconnect</code>, <code>sendAudioChunk</code>, <code>sendTextTurn</code>,{' '}
							<code>sendBargeIn</code> and <code>cancelPlayback</code>.
						</p>
						<CodeBlock label="React · useUCVEVoice" code={REACT_TS} />
					</DocSection>

					<DocSection id="python" title="Python">
						<p>
							The Python SDK connects a trusted application to the same protocol. It performs the handshake, answers
							keepalives, reports interruption playback acknowledgements, and surfaces typed error, degraded and expiry
							events.
						</p>
						<CodeBlock label="Python · ucve" code={PYTHON} />
					</DocSection>

					<DocSection id="audio" title="Audio format">
						<p>
							The v1 wire format is 16 kHz, mono, signed 16-bit little-endian PCM. Send microphone audio in chunks with{' '}
							<code>sendAudioChunk</code> (TypeScript) or <code>send_audio</code> (Python); agent audio arrives in the
							same format.
						</p>
					</DocSection>

					<DocSection id="events" title="Protocol v1 events">
						<p>The SDKs handle most of these for you; they are listed so you can follow a session in your logs.</p>
						<div className="table-wrap">
							<table className="table">
								<caption className="label">Realtime protocol v1 · event types</caption>
								<thead>
									<tr>
										<th scope="col">Event</th>
										<th scope="col">Direction</th>
										<th scope="col">Meaning</th>
									</tr>
								</thead>
								<tbody>
									{EVENTS.map(([e, dir, m]) => (
										<tr key={e}>
											<td>
												<code>{e}</code>
											</td>
											<td className="label">{dir}</td>
											<td>{m}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</DocSection>

					<DocSection id="barge-in" title="Interruption and played text">
						<p>
							When the caller talks over the agent, the engine sends <code>control.clear_audio</code>. Your client stops
							playback, discards queued audio and acknowledges how much it had played. The engine then sends{' '}
							<code>assistant.played_text_commit</code> with the text the caller actually heard, and only that text
							enters the conversation history.
						</p>
						<p>
							The TypeScript SDK sends the acknowledgement for you. Return the milliseconds of agent audio actually
							played from <code>onClearAudio</code> — the SDK reports it as <code>played_audio_ms</code> — so the commit
							matches what the caller heard.
						</p>
					</DocSection>

					<DocSection id="expiry" title="Token expiry and refresh">
						<p>
							Before a session token expires the worker emits <code>session.token_expiring</code>; at expiry it closes
							the session with a retryable <code>session.close</code>. Your backend can call{' '}
							<code>POST /v1/session/refresh</code> with the current token. Clients surface the signal to your
							application; they never see your API key.
						</p>
					</DocSection>

					<DocSection id="providers" title="Providers and failover">
						<p>
							Each agent routes speech-to-text, the language model and text-to-speech through the provider catalogue,
							with two routes per stage so a stage can fail over.
						</p>
						<dl className="facts">
							<dt className="label">Speech-to-text</dt>
							<dd>{PROVIDERS.stt.join(' · ')}</dd>
							<dt className="label">Language model</dt>
							<dd>{PROVIDERS.llm.join(' · ')}</dd>
							<dt className="label">Text-to-speech</dt>
							<dd>{PROVIDERS.tts.join(' · ')}</dd>
						</dl>
						<p>Tenants can bring their own provider keys; they are stored encrypted and managed in Studio.</p>
					</DocSection>

					<DocSection id="languages" title="Languages">
						<p>
							The engine is configured for {LANGUAGES.slice(0, -1).join(', ')} and {LANGUAGES[LANGUAGES.length - 1]}. A
							mint request may ask for a language with the <code>language</code> field.
						</p>
					</DocSection>

					<DocSection id="telephony" title="Telephony">
						<p>
							Phone calls run through Telnyx: inbound calls to a connected number, and controlled single outbound calls.
							Telephony is set up from Studio’s channels page; the same published agent can serve phone and web.
						</p>
					</DocSection>

					<DocSection id="security" title="Security checklist">
						<ul>
							<li>Keep tenant API keys and provider keys on the server. Never bundle them into a client.</li>
							<li>Give each server the narrowest key scope it needs — minting needs <code>session:mint</code>.</li>
							<li>Forward only <code>token</code> and <code>ws_url</code> to clients.</li>
							<li>Treat <code>session.token_expiring</code> as the cue to refresh, not a fixed timer.</li>
							<li>Authenticate your own mint endpoint, so only your users can start sessions.</li>
						</ul>
					</DocSection>
				</div>
			</div>
		</div>
	);
}
