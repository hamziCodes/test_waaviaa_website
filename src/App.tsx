/**
 * Routes. Sitemap per website/docs/design/ripple-c2/RIPPLE-C2-MASTER.md §5.4.
 * The single BrowserRouter lives in main.tsx; static imports only.
 */
import { Navigate, Route, Routes } from 'react-router';
import { Layout } from '@/components/Layout';
import Home from '@/pages/Home';
import Product from '@/pages/Product';
import HowItWorks from '@/pages/HowItWorks';
import Studio from '@/pages/Studio';
import Developers from '@/pages/Developers';
import Docs from '@/pages/Docs';
import Pricing from '@/pages/Pricing';
import Custom from '@/pages/Custom';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import Demo from '@/pages/Demo';
import AuthHandoff from '@/pages/AuthHandoff';
import NotFound from '@/pages/NotFound';

export default function App() {
	return (
		<Routes>
			<Route path="/demo" element={<Demo />} />
			<Route path="/signup" element={<AuthHandoff kind="sign-up" />} />
			<Route path="/login" element={<AuthHandoff kind="sign-in" />} />
			<Route
				path="*"
				element={
					<Layout>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/product" element={<Product />} />
							<Route path="/how-it-works" element={<HowItWorks />} />
							<Route path="/studio" element={<Studio />} />
							<Route path="/developers" element={<Developers />} />
							<Route path="/developers/docs" element={<Docs />} />
							<Route path="/docs" element={<Navigate to="/developers/docs" replace />} />
							<Route path="/pricing" element={<Pricing />} />
							<Route path="/custom" element={<Custom />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/privacy" element={<Privacy />} />
							<Route path="/terms" element={<Terms />} />

							{/* Earlier URLs from the Theme B build stay alive. */}
							<Route path="/core" element={<Navigate to="/developers" replace />} />
							<Route path="/for-developers" element={<Navigate to="/developers" replace />} />
							<Route path="/shield" element={<Navigate to="/custom" replace />} />
							<Route path="/enterprise" element={<Navigate to="/custom" replace />} />
							<Route path="/get-started" element={<Navigate to="/studio" replace />} />
							<Route path="/sign-up" element={<Navigate to="/signup" replace />} />
							<Route path="/sign-in" element={<Navigate to="/login" replace />} />

							<Route path="*" element={<NotFound />} />
						</Routes>
					</Layout>
				}
			/>
		</Routes>
	);
}
