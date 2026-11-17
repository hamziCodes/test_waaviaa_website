/**
 * Navigation and footer structure.
 *
 * Nav order follows RIPPLE-C2-MASTER.md §5.4: the audience order
 * Custom → Business (Studio) → Developers, then Pricing, with Sign in last.
 * Product, How it works, About, Contact and the legal pages live in the footer.
 */
export type NavItem = { label: string; to: string };

export const PRIMARY_NAV: NavItem[] = [
	{ label: 'Custom', to: '/custom' },
	{ label: 'Studio', to: '/studio' },
	{ label: 'Developers', to: '/developers' },
	{ label: 'Pricing', to: '/pricing' },
];

export const FOOTER_COLUMNS: { title: string; links: NavItem[] }[] = [
	{
		title: 'Product',
		links: [
			{ label: 'Product', to: '/product' },
			{ label: 'How it works', to: '/how-it-works' },
			{ label: 'Studio', to: '/studio' },
			{ label: 'Demo dashboard', to: '/demo' },
		],
	},
	{
		title: 'Build',
		links: [
			{ label: 'Custom deployments', to: '/custom' },
			{ label: 'Developers', to: '/developers' },
			{ label: 'Documentation', to: '/developers/docs' },
			{ label: 'Pricing', to: '/pricing' },
		],
	},
	{
		title: 'Company',
		links: [
			{ label: 'About', to: '/about' },
			{ label: 'Contact', to: '/contact' },
		],
	},
	{
		title: 'Legal',
		links: [
			{ label: 'Privacy', to: '/privacy' },
			{ label: 'Terms', to: '/terms' },
		],
	},
];

/** Languages configured in the engine. A configuration fact, not a quality claim. */
export const LANGUAGES = ['English', 'Urdu', 'Arabic', 'Malay'] as const;

export const PROVIDERS = {
	stt: ['Gladia', 'Deepgram'],
	llm: ['Groq', 'Gemini', 'OpenAI'],
	tts: ['Uplift', 'ElevenLabs', 'Cartesia'],
} as const;
