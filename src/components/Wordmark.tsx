import { Link } from 'react-router';

/** Lowercase italic serif wordmark with the lilac voice dot. */
export function Wordmark({ asLink = true }: { asLink?: boolean }) {
	const inner = (
		<>
			wavia
			<span className="wordmark__dot" aria-hidden="true" />
		</>
	);
	if (!asLink) return <span className="wordmark">{inner}</span>;
	return (
		<Link to="/" className="wordmark" aria-label="wavia — home">
			{inner}
		</Link>
	);
}
