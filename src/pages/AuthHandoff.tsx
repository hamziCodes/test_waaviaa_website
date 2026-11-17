import { useEffect } from 'react';
import { Link } from 'react-router';
import { Disc, useTitle } from '@/components/ui';
import { Wordmark } from '@/components/Wordmark';
import { SIGN_IN_URL, SIGN_UP_URL, STUDIO_URL } from '@/config';

/**
 * /signup and /login: the website has no auth of its own. These pages are pure
 * C2 paper and hand the visitor to the Studio app, which owns both routes.
 */
export default function AuthHandoff({ kind }: { kind: 'sign-up' | 'sign-in' }) {
	const signUp = kind === 'sign-up';
	useTitle(signUp ? 'Sign up' : 'Sign in');
	useEffect(() => window.scrollTo(0, 0), []);
	const target = signUp ? SIGN_UP_URL : SIGN_IN_URL;

	return (
		<>
			<a className="skip-link" href="#main">
				Skip to content
			</a>
			<div className="handoff">
				<header className="masthead">
					<Wordmark />
					<span className="label">Studio · {signUp ? 'Sign up' : 'Sign in'}</span>
				</header>
				<main id="main" tabIndex={-1} className="handoff__body">
					<div>
						<p className="label">Accounts live in Studio</p>
						<h1>
							{signUp ? (
								<>
									Start <span className="hl">building</span>.
								</>
							) : (
								<>
									Welcome <span className="hl">back</span>.
								</>
							)}
						</h1>
						<p>
							{signUp
								? 'Creating an account happens in the Wavia Studio app. You will build agents, test them in the browser and publish them from there.'
								: 'Signing in happens in the Wavia Studio app, where your workspaces, agents and conversations are.'}
						</p>
						<div className="btn-row" style={{ marginTop: 28 }}>
							<a className="btn btn--lime" href={target}>
								{signUp ? 'Continue to sign up' : 'Continue to sign in'}
							</a>
							<a className="btn btn--ghost" href={signUp ? SIGN_IN_URL : SIGN_UP_URL}>
								{signUp ? 'I already have an account' : 'Create an account'}
							</a>
						</div>
						<p className="label" style={{ marginTop: 20 }}>
							Studio · {STUDIO_URL.replace(/^https?:\/\//, '')}
						</p>
					</div>
					<Disc size="200px" />
				</main>
				<footer className="footer__base" style={{ borderColor: 'var(--rule)' }}>
					<Link className="label" to="/">
						Back to the site
					</Link>
					<span className="label">© 2026 Wavia</span>
				</footer>
			</div>
		</>
	);
}
