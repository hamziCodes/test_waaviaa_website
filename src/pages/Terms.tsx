import { Link } from 'react-router';
import { useTitle } from '@/components/ui';

export default function Terms() {
	useTitle('Terms');
	return (
		<article className="wrap legal">
			<header className="docs__head">
				<div className="page-head__kicker">
					<p className="label">Legal · Terms</p>
					<p className="label">Preview edition · November 2026</p>
				</div>
				<h1>Terms</h1>
				<p className="page-head__lead">Terms for using this website. Use of the Wavia service is covered separately.</p>
			</header>

			<div className="prose legal__body">
				<div className="notice" role="note">
					<span className="label">Status</span>
					<p>
						This is a preview edition. Full terms of service, naming the contracting entity, will be published before the
						service is offered commercially. Until then, use of the Wavia service is governed by whatever written agreement
						you have with us.
					</p>
				</div>

				<h2>1. What this site is</h2>
				<p>
					This website describes Wavia, a real-time voice AI engine, its Studio and its SDKs. It is provided for information.
				</p>

				<h2>2. Demos and sample data</h2>
				<p>
					The call shown on the home page is a scripted demo with no audio. The dashboard at <Link to="/demo">/demo</Link>{' '}
					uses sample data. Neither is a recording of a real call, a measurement of the engine or a statement about any
					customer.
				</p>

				<h2>3. Product descriptions</h2>
				<p>
					We describe features as they exist when the page is published, and mark planned items as planned. Features can
					change. Nothing on this site is a warranty, a service-level commitment or a certification.
				</p>

				<h2>4. Code samples</h2>
				<p>
					Code samples in the documentation are examples to help you integrate. Review and test them before using them in
					production; you are responsible for keeping your API keys and provider keys secret.
				</p>

				<h2>5. Accounts</h2>
				<p>
					Signing up and signing in happen in the Studio application, not on this website. Studio accounts are covered by
					the terms presented there and by your agreement with us.
				</p>

				<h2>6. Acceptable use of this site</h2>
				<p>Do not attempt to disrupt the site, probe it for vulnerabilities without permission, or misrepresent it.</p>

				<h2>7. Contact</h2>
				<p>
					Questions about these terms: <Link to="/contact">Contact</Link>.
				</p>
			</div>
		</article>
	);
}
