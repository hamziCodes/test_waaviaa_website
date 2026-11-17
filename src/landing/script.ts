/**
 * The landing page's one call, as a scripted demo.
 *
 * This is NOT a recording and NOT a live session. Every line is written for the
 * page and the stage says so on its own face ("Scripted demo · no audio").
 * The scenario is generic (a clinic line) and names no real business.
 *
 * Timing values are positions along the journey's scroll progress (0 → 1),
 * not milliseconds. They decide when each line lands as the visitor scrolls.
 */

export type Speaker = 'agent' | 'caller';

export type ScriptLine = {
	id: string;
	who: Speaker;
	/** Scroll progress at which the line lands. */
	at: number;
	text: string;
	/** For the interrupted line: the part the caller actually heard. */
	heard?: string;
	/** For the interrupted line: the part that was cut and never played. */
	cut?: string;
};

export const SCRIPT: ScriptLine[] = [
	{ id: 'l1', who: 'agent', at: 0.235, text: 'Good evening, you’ve reached the clinic. How can I help?' },
	{ id: 'l2', who: 'caller', at: 0.3, text: 'Hi — I’d like to see a doctor on Thursday morning.' },
	{
		id: 'l3',
		who: 'agent',
		at: 0.39,
		text: '',
		heard: 'Thursday morning I have ten o’clock or eleven thirty.',
		cut: ' If neither of those suits, I can also look at Friday, or',
	},
	{ id: 'l4', who: 'caller', at: 0.5, text: 'Ten is fine.' },
	{ id: 'l5', who: 'agent', at: 0.655, text: 'Ten o’clock on Thursday. Can I take a name for the appointment?' },
	{ id: 'l6', who: 'caller', at: 0.7, text: 'Sara Khan.' },
	{ id: 'l7', who: 'agent', at: 0.745, text: 'Thank you, Sara. You’re down for Thursday at ten.' },
];

/** When the interruption annotation appears under the cut line. */
export const BARGE_IN_AT = 0.535;
/** When the booking sticker stamps onto the call. */
export const STAMP_AT = 0.77;

/** The record Studio keeps after the call: summary + extracted fields. */
export const RECORD = {
	summary:
		'Caller asked for a Thursday morning appointment. She cut in while options were read out, chose 10:00 and gave her name.',
	fields: [
		{ key: 'Intent', value: 'appointment' },
		{ key: 'Requested slot', value: 'Thursday 10:00' },
		{ key: 'Caller name', value: 'Sara Khan' },
		{ key: 'Language', value: 'English' },
		{ key: 'Interruptions', value: '1' },
	],
};

export type Scene = {
	id: string;
	/** Station name on the route bar. */
	station: string;
	from: number;
	to: number;
	label: string;
	title: string;
	/** Word inside the title that carries the lime highlight. */
	mark?: string;
	body: string;
	/** Progress used to render this scene as a still in the static sequence. */
	still: number;
};

export const SCENES: Scene[] = [
	{
		id: 'land',
		station: 'Start',
		from: 0,
		to: 0.07,
		label: 'Scripted demo · scroll to follow one call',
		title: 'It picks up. It listens.',
		mark: 'listens.',
		body: 'Wavia is a real-time voice engine for phone and web calls. Follow one call from ring to record.',
		still: 0.02,
	},
	{
		id: 'ring',
		station: 'Ring',
		from: 0.07,
		to: 0.22,
		label: '01 — The ring',
		title: 'A call comes in.',
		mark: 'in.',
		body: 'Inbound calls arrive over Telnyx telephony and land on your published agent.',
		still: 0.12,
	},
	{
		id: 'conversation',
		station: 'Conversation',
		from: 0.22,
		to: 0.47,
		label: '02 — The conversation',
		title: 'It hears where you stop.',
		mark: 'stop.',
		body: 'Voice activity detection, streaming speech-to-text, a language model, then speech streamed back.',
		still: 0.46,
	},
	{
		id: 'interruption',
		station: 'Interruption',
		from: 0.47,
		to: 0.63,
		label: '03 — The interruption',
		title: 'Talk over it. It stops.',
		mark: 'stops.',
		body: 'Barge-in halts playback, and the agent keeps only the words the caller actually heard.',
		still: 0.62,
	},
	{
		id: 'booking',
		station: 'Booking',
		from: 0.63,
		to: 0.81,
		label: '04 — The booking',
		title: 'It finishes the job.',
		mark: 'job.',
		body: 'Your instructions and knowledge base keep the agent on task until the caller has an answer.',
		still: 0.8,
	},
	{
		id: 'record',
		station: 'Record',
		from: 0.81,
		to: 1,
		label: '05 — The record',
		title: 'Then it writes it down.',
		mark: 'down.',
		body: 'Each conversation keeps its transcript, a post-call summary and the fields you chose to extract.',
		still: 1,
	},
];
