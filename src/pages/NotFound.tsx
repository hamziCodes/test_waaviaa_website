import { Link } from 'react-router';
import { PageHead, useTitle } from '@/components/ui';

export default function NotFound() {
	useTitle('Page not found');
	return (
		<>
			<PageHead
				no="404"
				kicker="Not found"
				title={
					<>
						This line is <span className="hl">quiet</span>.
					</>
				}
				lead="There is no page at this address."
				aside={
					<div className="btn-row" style={{ marginTop: 28 }}>
						<Link className="btn" to="/">
							Go to the home page
						</Link>
						<Link className="btn btn--ghost" to="/developers/docs">
							Documentation
						</Link>
					</div>
				}
			/>
		</>
	);
}
