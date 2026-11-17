import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';

/** Scroll to top (or to the hash target) on route change, and move focus to main. */
function useRouteFocus() {
	const { pathname, hash } = useLocation();
	useEffect(() => {
		if (hash) {
			const el = document.getElementById(decodeURIComponent(hash.slice(1)));
			if (el) {
				el.scrollIntoView();
				return;
			}
		}
		window.scrollTo(0, 0);
	}, [pathname, hash]);
}

export function Layout({ children, bare = false }: { children: ReactNode; bare?: boolean }) {
	useRouteFocus();
	return (
		<>
			<a className="skip-link" href="#main">
				Skip to content
			</a>
			{!bare && <Header />}
			<main id="main" tabIndex={-1}>
				{children}
			</main>
			{!bare && <Footer />}
		</>
	);
}
