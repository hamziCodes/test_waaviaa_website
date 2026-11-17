import { useId, useMemo, useState } from 'react';
import { Link } from 'react-router';
import { PageHead, Section, useTitle } from '@/components/ui';
import { CONTACT_EMAIL, SIGN_UP_URL } from '@/config';

const TOPICS = ['A custom deployment', 'Studio', 'The SDKs and API', 'Pricing', 'Something else'];

/**
 * There is no backend behind this site, so nothing is ever "sent" from here.
 * The form only composes an email in the visitor's own mail app.
 */
export default function Contact() {
	useTitle('Contact');
	const id = useId();
	const [name, setName] = useState('');
	const [org, setOrg] = useState('');
	const [topic, setTopic] = useState(TOPICS[0]);
	const [message, setMessage] = useState('');

	const href = useMemo(() => {
		if (!CONTACT_EMAIL) return '';
		const subject = `Wavia — ${topic}`;
		const body = [message.trim(), '', name.trim() && `— ${name.trim()}`, org.trim()].filter(Boolean).join('\n');
		return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	}, [name, org, topic, message]);

	return (
		<>
			<PageHead
				no="08"
				kicker="Contact"
				title={
					<>
						Tell us about the <span className="hl">calls</span>.
					</>
				}
				lead="Custom deployments, questions about Studio or the SDKs, or a quote: write to the team directly."
			/>

			<Section id="write" label="01 · Write to us" title="By email.">
				<div className="split">
					<div>
						{CONTACT_EMAIL ? (
							<form className="form" onSubmit={(e) => e.preventDefault()} aria-describedby={`${id}-note`}>
								<div className="field">
									<label htmlFor={`${id}-topic`}>Topic</label>
									<select id={`${id}-topic`} value={topic} onChange={(e) => setTopic(e.target.value)}>
										{TOPICS.map((t) => (
											<option key={t}>{t}</option>
										))}
									</select>
								</div>
								<div className="field">
									<label htmlFor={`${id}-name`}>Your name</label>
									<input id={`${id}-name`} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
								</div>
								<div className="field">
									<label htmlFor={`${id}-org`}>Organisation</label>
									<input
										id={`${id}-org`}
										autoComplete="organization"
										value={org}
										onChange={(e) => setOrg(e.target.value)}
									/>
								</div>
								<div className="field">
									<label htmlFor={`${id}-msg`}>What should the agent handle?</label>
									<textarea id={`${id}-msg`} value={message} onChange={(e) => setMessage(e.target.value)} />
								</div>
								<div className="btn-row">
									<a className="btn" href={href}>
										Open in your email app
									</a>
								</div>
								<p id={`${id}-note`} className="field__hint">
									This opens your own email app with the message filled in, addressed to{' '}
									<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Nothing is sent from this page, and nothing you
									type here is stored.
								</p>
							</form>
						) : (
							<div className="notice" role="note">
								<span className="label">Note</span>
								<p>
									The public contact address has not been configured for this build of the site, so there is no address to
									show here yet. It is set at build time with <code>VITE_CONTACT_EMAIL</code>. Nothing on this page sends a
									message.
								</p>
							</div>
						)}
					</div>
					<div className="prose">
						<h3 style={{ marginTop: 0 }}>Useful to include</h3>
						<ul>
							<li>Who calls you, and roughly how often.</li>
							<li>What the agent should do on the call, and what it must never do.</li>
							<li>The languages your callers use.</li>
							<li>Whether calls come by phone, through your website, or both.</li>
							<li>Any requirement on where data is stored or how long it is kept.</li>
						</ul>
					</div>
				</div>
			</Section>

			<Section id="elsewhere" label="02 · Other routes" title="Or start on your own.">
				<div className="cols">
					<div>
						<span className="label">Studio</span>
						<h3>Build an agent</h3>
						<p>
							<a className="arrow-link" href={SIGN_UP_URL}>
								Sign up
							</a>
						</p>
					</div>
					<div>
						<span className="label">Developers</span>
						<h3>Read the docs</h3>
						<p>
							<Link className="arrow-link" to="/developers/docs">
								Documentation
							</Link>
						</p>
					</div>
					<div>
						<span className="label">Preview</span>
						<h3>See the dashboard</h3>
						<p>
							<Link className="arrow-link" to="/demo">
								Demo dashboard
							</Link>
						</p>
					</div>
				</div>
			</Section>
		</>
	);
}
