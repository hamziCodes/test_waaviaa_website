import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

/**
 * One-shot reveal on entering the viewport (opacity + transform only).
 * Content is visible by default if IntersectionObserver is missing, and the
 * CSS disables the offset under prefers-reduced-motion.
 */
export function Reveal({
	as: Tag = 'div',
	children,
	className = '',
	delay = 0,
}: {
	as?: ElementType;
	children: ReactNode;
	className?: string;
	delay?: number;
}) {
	const ref = useRef<HTMLElement>(null);
	const [shown, setShown] = useState(typeof IntersectionObserver === 'undefined');

	useEffect(() => {
		const el = ref.current;
		if (!el || shown) return;
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setShown(true);
					io.disconnect();
				}
			},
			{ rootMargin: '0px 0px -10% 0px' },
		);
		io.observe(el);
		return () => io.disconnect();
	}, [shown]);

	return (
		<Tag
			ref={ref}
			className={`reveal ${className}`}
			data-shown={shown}
			style={delay ? { transitionDelay: `${delay}ms` } : undefined}
		>
			{children}
		</Tag>
	);
}
