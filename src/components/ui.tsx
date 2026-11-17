import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router';
import { SIGN_UP_URL } from '@/config';

/** Sets the document title for a route. */
export function useTitle(title: string) {
	useEffect(() => {
		document.title = title ? `${title} — wavia` : 'wavia — a real-time voice AI engine';
	}, [title]);
}

/** The C2 device: a solid lilac disc with two aubergine hairline rings. */
export function Disc({ size, className = '', style }: { size?: string; className?: string; style?: CSSProperties }) {
	return (
		<div
			className={`disc ${className}`}
			style={{ ...(size ? ({ '--disc-size': size } as CSSProperties) : null), ...style }}
			aria-hidden="true"
		>
			<span className="disc__ring disc__ring--outer" />
			<span className="disc__ring disc__ring--inner" />
			<span className="disc__core" />
		</div>
	);
}

/** Issue-style page header: mono kicker row, large serif title, lead. */
export function PageHead({
	no,
	kicker,
	title,
	lead,
	aside,
	disc = true,
}: {
	no: string;
	kicker: string;
	title: ReactNode;
	lead?: ReactNode;
	aside?: ReactNode;
	disc?: boolean;
}) {
	return (
		<header className="page-head">
			<div className="wrap">
				<div className="page-head__kicker">
					<p className="label">{kicker}</p>
					<p className="label">No. {no}</p>
				</div>
				<div className="page-head__grid">
					<div>
						<h1>{title}</h1>
						{lead ? <p className="page-head__lead">{lead}</p> : null}
						{aside}
					</div>
					{disc ? <Disc /> : null}
				</div>
			</div>
		</header>
	);
}

/** Numbered, ruled section with a heading column. */
export function Section({
	id,
	label,
	title,
	intro,
	children,
	className = '',
}: {
	id?: string;
	label: string;
	title: ReactNode;
	intro?: ReactNode;
	children?: ReactNode;
	className?: string;
}) {
	const headingId = id ? `${id}-title` : undefined;
	return (
		<section id={id} className={`section ${className}`} aria-labelledby={headingId}>
			<div className="wrap">
				<div className="section__head">
					<p className="label">{label}</p>
					<div>
						<h2 id={headingId}>{title}</h2>
						{intro ? <p>{intro}</p> : null}
					</div>
				</div>
				{children}
			</div>
		</section>
	);
}

/** Code block with an in-place copy confirmation. */
export function CodeBlock({ code, label }: { code: string; label: string }) {
	const [copied, setCopied] = useState(false);
	useEffect(() => {
		if (!copied) return;
		const t = window.setTimeout(() => setCopied(false), 1600);
		return () => window.clearTimeout(t);
	}, [copied]);

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(code);
			setCopied(true);
		} catch {
			setCopied(false);
		}
	};

	return (
		<div className="code">
			<div className="code__bar">
				<span className="label">{label}</span>
				<button type="button" className="code__copy" onClick={copy} data-copied={copied}>
					{copied ? 'Copied' : 'Copy'}
					<span className="visually-hidden"> {label}</span>
				</button>
			</div>
			<pre tabIndex={0} aria-label={label}>
				<code>{code}</code>
			</pre>
		</div>
	);
}

/** The three doors, in the master doc's audience order. */
export function Doors() {
	return (
		<div className="doors">
			<article className="door">
				<p className="label">Door 01 · Custom</p>
				<h3>
					We build it <em>with</em> you.
				</h3>
				<p>
					For teams that want a voice agent on their line without configuring it themselves. We scope the calls, build
					the agent, connect telephony and hand it over.
				</p>
				<Link className="btn btn--ghost" to="/custom">
					Talk to us
				</Link>
			</article>
			<article className="door">
				<p className="label">Door 02 · Studio</p>
				<h3>
					Build it <em>yourself</em>.
				</h3>
				<p>
					Create an agent, give it a knowledge base, test it in the browser, publish a version. No code required to get
					a working agent.
				</p>
				<div className="btn-row">
					<a className="btn btn--lime" href={SIGN_UP_URL}>
						Start building
					</a>
					<Link className="btn btn--ghost" to="/demo">
						View the demo dashboard
					</Link>
				</div>
			</article>
			<article className="door">
				<p className="label">Door 03 · Developers</p>
				<h3>
					Wire it <em>in</em>.
				</h3>
				<p>
					Mint a session on your server, hand the browser a short-lived token, and stream audio over realtime protocol
					v1 with the TypeScript or Python SDK.
				</p>
				<Link className="btn btn--ghost" to="/developers/docs">
					Read the docs
				</Link>
			</article>
		</div>
	);
}

/** Closing call to action band. */
export function CtaBand({ title, children }: { title: ReactNode; children: ReactNode }) {
	return (
		<section className="cta-band wrap" aria-label="Next step">
			<h2>{title}</h2>
			<div className="btn-row">{children}</div>
		</section>
	);
}
