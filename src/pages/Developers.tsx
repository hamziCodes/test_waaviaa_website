import { Link } from 'react-router';
import { CodeBlock, CtaBand, PageHead, Section, useTitle } from '@/components/ui';
import { CLIENT_TS, MINT_CURL, PYTHON } from '@/content/code';
import { SIGN_UP_URL } from '@/config';

const CAPABILITIES = [
	['Realtime protocol v1', 'Raw WebSocket protocol with a versioned hello handshake, keepalives and typed events.'],
	['Server-side minting', 'POST /v1/session/mint with a tenant API key; the client only ever holds a short-lived, single-use token.'],
	['Audio format', '16 kHz, mono, signed 16-bit PCM in both directions.'],
	['Transcripts', 'Partial and final transcripts as events while the caller speaks.'],
	['Barge-in', 'Interruptions stop playback; played-text commits record exactly what the caller heard.'],
	['Token expiry', 'The worker signals session.token_expiring before expiry; your backend can refresh.'],
	['Text turns', 'Send a text turn instead of audio — useful for tests and accessibility.'],
	['Provider choice', 'Agents route each stage through the provider catalogue, two routes per stage.'],
];

export default function Developers() {
	useTitle('Developers');
	return (
		<>
			<PageHead
				no="04"
				kicker="Developers · SDKs and API"
				title={
					<>
						Wire the engine into <span className="hl">your</span> product.
					</>
				}
				lead="Mint a session on your server, hand the client a short-lived token, and stream audio over realtime protocol v1 — with the TypeScript SDK, its React hook, or the Python SDK."
				aside={
					<div className="btn-row" style={{ marginTop: 28 }}>
						<Link className="btn" to="/developers/docs">
							Read the docs
						</Link>
						<a className="btn btn--ghost" href={SIGN_UP_URL}>
							Get a workspace
						</a>
					</div>
				}
			/>

			<Section id="shape" label="01 · The shape" title="Three moves." intro="Secrets stay on your server; the browser gets a token that expires.">
				<ol className="cols" role="list">
					<li>
						<span className="label">Server</span>
						<h3>Mint</h3>
						<p>
							Your backend calls <code>POST /v1/session/mint</code> with a tenant API key that carries the{' '}
							<code>session:mint</code> scope.
						</p>
					</li>
					<li>
						<span className="label">Hand-off</span>
						<h3>Pass the token</h3>
						<p>
							Return only <code>token</code> and <code>ws_url</code> to the client. The token is short-lived and
							single-use.
						</p>
					</li>
					<li>
						<span className="label">Client</span>
						<h3>Connect</h3>
						<p>The SDK opens the WebSocket, performs the v1 handshake and streams audio both ways.</p>
					</li>
				</ol>
			</Section>

			<Section id="quickstart" label="02 · Quickstart" title="From mint to first turn.">
				<div className="code-stack">
					<CodeBlock label="1 · Mint on your server (curl)" code={MINT_CURL} />
					<CodeBlock label="2 · Connect from the browser (TypeScript)" code={CLIENT_TS} />
					<CodeBlock label="Or from Python" code={PYTHON} />
				</div>
				<p className="prose" style={{ marginTop: 24 }}>
					The full walkthrough — server example, React hook, events, interruption and token refresh — is in the{' '}
					<Link to="/developers/docs">documentation</Link>.
				</p>
			</Section>

			<Section id="sdks" label="03 · SDKs" title="Two SDKs, one protocol.">
				<div className="table-wrap">
					<table className="table">
						<caption className="label">Client SDKs</caption>
						<thead>
							<tr>
								<th scope="col">Language</th>
								<th scope="col">Package</th>
								<th scope="col">Entry points</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>TypeScript</td>
								<td>
									<code>@ucve/voice-sdk</code>
								</td>
								<td>
									<code>UCVEVoiceClient</code> — no React dependency
								</td>
							</tr>
							<tr>
								<td>React</td>
								<td>
									<code>@ucve/voice-sdk/react</code>
								</td>
								<td>
									<code>useUCVEVoice()</code> hook
								</td>
							</tr>
							<tr>
								<td>Python</td>
								<td>
									<code>ucve-voice-sdk</code>
								</td>
								<td>
									<code>from ucve import UCVEVoiceClient</code>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Section>

			<Section id="capabilities" label="04 · Capabilities" title="What the protocol gives you.">
				<dl className="facts">
					{CAPABILITIES.map(([k, v]) => (
						<div key={k} style={{ display: 'contents' }}>
							<dt className="label">{k}</dt>
							<dd>{v}</dd>
						</div>
					))}
				</dl>
			</Section>

			<CtaBand title="Read the full reference.">
				<Link className="btn" to="/developers/docs">
					Documentation
				</Link>
				<Link className="btn btn--ghost" to="/custom">
					Need it built with you?
				</Link>
			</CtaBand>
		</>
	);
}
