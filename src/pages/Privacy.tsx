import { Link } from 'react-router';
import { useTitle } from '@/components/ui';

export default function Privacy() {
	useTitle('Privacy');
	return (
		<article className="wrap legal">
			<header className="docs__head">
				<div className="page-head__kicker">
					<p className="label">Legal · Privacy</p>
					<p className="label">Preview edition · November 2026</p>
				</div>
				<h1>Privacy</h1>
				<p className="page-head__lead">
					How this website handles your data, and the data controls in the Wavia product. Plain statements of fact; no
					certification is claimed.
				</p>
			</header>

			<div className="prose legal__body">
				<div className="notice" role="note">
					<span className="label">Status</span>
					<p>
						This is a preview edition. The full privacy notice — naming the legal entity responsible for your data and how to
						exercise your rights — will replace it before the service is offered commercially.
					</p>
				</div>

				<h2>This website</h2>
				<ul>
					<li>The site sets no cookies and runs no analytics or advertising scripts.</li>
					<li>Fonts are served from the site itself, not from a third-party font service.</li>
					<li>
						The contact page does not submit anything. It composes an email in your own mail app; nothing you type there is
						stored by the site.
					</li>
					<li>
						Sign-up and sign-in buttons take you to the Studio application, which is a separate service with its own
						account data.
					</li>
					<li>
						The demo dashboard at <Link to="/demo">/demo</Link> shows sample data only. It makes no network calls to the
						engine and records nothing.
					</li>
					<li>
						The hosting provider that serves the site may keep standard request logs (such as IP address and time of
						request) for operating and securing it.
					</li>
				</ul>

				<h2>The Wavia product</h2>
				<p>When an organisation uses Wavia to run voice agents, the product handles:</p>
				<ul>
					<li>call audio, streamed through the engine for speech recognition and speech synthesis;</li>
					<li>conversations: transcripts, post-call summaries and the fields the organisation chose to extract;</li>
					<li>workspace data: members, roles, agents, knowledge bases, usage and the audit log;</li>
					<li>provider keys an organisation brings, which are stored encrypted.</li>
				</ul>
				<p>
					To produce speech recognition, replies and speech, the engine sends audio or text to the speech-to-text,
					language-model and text-to-speech providers configured for the agent. The provider catalogue is Gladia and
					Deepgram (speech-to-text), Groq, Gemini and OpenAI (language model), and Uplift, ElevenLabs and Cartesia
					(text-to-speech).
				</p>

				<h2>Controls in the product</h2>
				<ul>
					<li>
						<em>Retention</em> — each workspace sets how long conversations are kept.
					</li>
					<li>
						<em>Legal hold</em> — conversations under hold are kept while the hold applies.
					</li>
					<li>
						<em>Deletion</em> — individual conversations can be deleted.
					</li>
					<li>
						<em>Workspace erasure</em> — a whole workspace can be erased, with an audit trail.
					</li>
					<li>
						<em>Log redaction</em> — logs are redacted so sensitive values are not written out in plain text.
					</li>
					<li>
						<em>Roles</em> — including a compliance administrator role for audit, legal hold and erasure.
					</li>
				</ul>
				<p>
					Organisations using Wavia decide what their agents collect and are responsible for informing their own callers.
				</p>

				<h2>Where data is hosted</h2>
				<p>
					Wavia’s hosted deployment is designed for AWS me-central-1 (UAE); that region is planned and not yet live.
					Organisations can also self-host the engine from its container images.
				</p>

				<h2>Questions</h2>
				<p>
					See <Link to="/contact">Contact</Link>.
				</p>
			</div>
		</article>
	);
}
