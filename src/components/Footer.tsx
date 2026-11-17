import { Link } from 'react-router';
import { FOOTER_COLUMNS } from '@/content/site';
import { SIGN_IN_URL, SIGN_UP_URL } from '@/config';

export function Footer() {
	return (
		<footer className="site-footer on-dark">
			<div className="wrap">
				<div className="footer__grid">
					<div>
						<p className="footer__tag">
							A real-time voice engine that <em>listens</em> while it talks.
						</p>
						<div className="btn-row" style={{ marginTop: 24 }}>
							<a className="btn btn--lime" href={SIGN_UP_URL}>
								Sign up
							</a>
							<a className="btn btn--ghost" href={SIGN_IN_URL}>
								Sign in
							</a>
						</div>
					</div>
					{FOOTER_COLUMNS.map((col) => (
						<nav key={col.title} aria-label={col.title}>
							<h2>{col.title}</h2>
							<ul>
								{col.links.map((l) => (
									<li key={l.to}>
										<Link to={l.to}>{l.label}</Link>
									</li>
								))}
							</ul>
						</nav>
					))}
				</div>
				<p className="footer__mark" aria-hidden="true">
					wavia<span aria-hidden="true" />
				</p>
				<div className="footer__base">
					<p className="label">© 2026 Wavia</p>
					<p className="label">Voice AI engine</p>
				</div>
			</div>
		</footer>
	);
}
