import { useEffect, useId, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { PRIMARY_NAV } from '@/content/site';
import { SIGN_IN_URL, SIGN_UP_URL } from '@/config';
import { Wordmark } from './Wordmark';

export function Header() {
	const [open, setOpen] = useState(false);
	const navId = useId();
	const { pathname } = useLocation();

	// Close the mobile menu on navigation.
	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false);
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [open]);

	return (
		<header className="site-header">
			<div className="wrap" style={{ position: 'relative' }}>
				<div className="masthead">
					<Wordmark />
					<button
						type="button"
						className="nav-toggle"
						aria-expanded={open}
						aria-controls={navId}
						onClick={() => setOpen((v) => !v)}
					>
						{open ? 'Close' : 'Menu'}
					</button>
					<nav id={navId} className="nav" aria-label="Main" data-open={open}>
						<ul className="nav__list">
							{PRIMARY_NAV.map((item) => (
								<li key={item.to}>
									<NavLink to={item.to} className="nav__link">
										{item.label}
									</NavLink>
								</li>
							))}
						</ul>
						<div className="nav__auth">
							<a className="btn btn--lime" href={SIGN_UP_URL}>
								Sign up
							</a>
							<a className="nav__link" href={SIGN_IN_URL}>
								Sign in
							</a>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
}
