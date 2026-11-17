/**
 * SAMPLE DATA for /demo. Every value here is illustrative: invented for the
 * preview, not captured from the engine, and not about any real customer.
 * The page labels it as sample data in a persistent banner, in the masthead
 * and under every panel. No latency figures are shown, even as samples.
 */

export const KPIS = [
	{ label: 'Conversations today', value: '48', detail: 'Across 2 live agents' },
	{ label: 'Interruptions handled', value: '12', detail: 'Callers changed direction mid-reply' },
	{ label: 'Active sessions', value: '3', detail: 'Phone and browser sessions' },
];

/** Real realtime-protocol v1 event names, in a plausible order; sequence numbers only. */
export const LEDGER_GLOSS: Record<string, string> = {
	'protocol.hello': 'the client connects and says hello',
	'session.ready': 'the session is live and ready',
	'transcript.partial': 'the caller’s words appear as they speak',
	'transcript.final': 'a finished sentence is locked in',
	'audio.start': 'the agent starts speaking',
	'control.barge_in': 'the caller talks over the agent — playback stops',
	'control.clear_audio': 'unsent audio is cleared, nothing stale plays',
	'assistant.played_text_commit': 'only the words actually heard are kept',
	'audio.end': 'the agent finishes speaking',
};

export const LEDGER = [
	'protocol.hello',
	'session.ready',
	'transcript.partial',
	'transcript.final',
	'audio.start',
	'control.barge_in',
	'control.clear_audio',
	'assistant.played_text_commit',
	'audio.end',
];

export const AGENTS = [
	{
		name: 'Clinic reception',
		version: 'v3 · published',
		language: 'English, Urdu',
		routes: '2 · 2 · 2',
		status: 'Live',
		channel: 'Telnyx · inbound',
		description: 'Answers the clinic phone line, books appointments and takes messages.',
	},
	{
		name: 'Service desk',
		version: 'v5 · published',
		language: 'English, Arabic',
		routes: '2 · 2 · 2',
		status: 'Live',
		channel: 'Web · SDK',
		description: 'Answers service questions in the browser and uses the knowledge base.',
	},
	{
		name: 'After-hours line',
		version: 'v1 · draft',
		language: 'Malay',
		routes: '2 · 2 · 1',
		status: 'Needs a second TTS route',
		channel: 'Not assigned',
		description: 'Draft cover for calls outside opening hours. It cannot publish yet.',
	},
];

export const CONVERSATIONS = [
	{ id: 'C-1048', time: '09:41', agent: 'Clinic reception', channel: 'Telnyx · inbound', outcome: 'Appointment requested', minutes: '2:41', status: 'Completed' },
	{ id: 'C-1047', time: '09:12', agent: 'Service desk', channel: 'Web · SDK', outcome: 'Opening hours answered', minutes: '0:58', status: 'Completed' },
	{ id: 'C-1046', time: '08:56', agent: 'Clinic reception', channel: 'Telnyx · inbound', outcome: 'Message taken', minutes: '1:37', status: 'Completed' },
	{ id: 'C-1045', time: '08:31', agent: 'Service desk', channel: 'Browser test', outcome: 'Test call', minutes: '0:44', status: 'Test' },
];

export const DETAILS: Record<string, { transcript: { who: string; text: string; cut?: string }[]; summary: string; fields: [string, string][] }> = {
	'C-1048': {
		transcript: [
			{ who: 'Agent', text: 'Good evening, you’ve reached the clinic. How can I help?' },
			{ who: 'Caller', text: 'I’d like to see a doctor on Thursday morning.' },
			{ who: 'Agent', text: 'Thursday morning I have ten o’clock or eleven thirty.', cut: ' If neither suits—' },
			{ who: 'Caller', text: 'Ten is fine.' },
			{ who: 'Agent', text: 'Ten o’clock on Thursday. Can I take a name?' },
			{ who: 'Caller', text: 'Sara Khan.' },
		],
		summary: 'Caller asked for a Thursday morning appointment, interrupted the options, chose 10:00 and gave her name.',
		fields: [
			['intent', 'appointment'],
			['requested_slot', 'Thursday 10:00'],
			['caller_name', 'Sara Khan'],
			['language', 'English'],
		],
	},
	'C-1047': {
		transcript: [
			{ who: 'Agent', text: 'Hello, service desk. How can I help?' },
			{ who: 'Caller', text: 'What time do you close today?' },
			{ who: 'Agent', text: 'We close at six this evening. Anything else?' },
			{ who: 'Caller', text: 'No, that’s all — thanks.' },
		],
		summary: 'Caller asked for today’s closing time and was answered directly from the knowledge base.',
		fields: [
			['intent', 'opening_hours'],
			['answer', 'Closes 18:00 today'],
			['language', 'English'],
		],
	},
	'C-1046': {
		transcript: [
			{ who: 'Agent', text: 'Good afternoon, clinic reception.' },
			{ who: 'Caller', text: 'Please tell Dr. Ahmed the reports are ready for pickup.' },
			{ who: 'Agent', text: 'I’ll pass that on. Who should I say called?' },
			{ who: 'Caller', text: 'This is Bilal, from the lab.' },
		],
		summary: 'Caller left a message for Dr. Ahmed: lab reports are ready for pickup. Message recorded for the team.',
		fields: [
			['intent', 'take_message'],
			['message_for', 'Dr. Ahmed'],
			['caller_name', 'Bilal'],
			['language', 'English'],
		],
	},
	'C-1045': {
		transcript: [
			{ who: 'Agent', text: 'Service desk test line — this is a browser test call.' },
			{ who: 'Caller', text: 'Testing one, two. Can you hear me?' },
			{ who: 'Agent', text: 'Clearly. The line, the transcript and the record are all working.' },
		],
		summary: 'A browser test call from the Studio test console. Audio, transcript and post-call record all verified.',
		fields: [
			['intent', 'test_call'],
			['result', 'passed'],
			['language', 'English'],
		],
	},
};

export const KNOWLEDGE = [
	{ name: 'Opening hours', kind: 'FAQ', entries: '12 entries', updated: '14 Nov 2026', status: 'Indexed' },
	{ name: 'clinic-services.pdf', kind: 'Document', entries: '18 pages', updated: '11 Nov 2026', status: 'Indexed' },
	{ name: 'Booking policy', kind: 'FAQ', entries: '7 entries', updated: '9 Nov 2026', status: 'Indexed' },
];

export const USAGE = [
	{ meter: 'Sessions', used: 412, limit: 1000, unit: '', plain: '412 calls and browser sessions started' },
	{ meter: 'Minutes', used: 905, limit: 3000, unit: 'min', plain: '905 minutes of conversation' },
	{ meter: 'LLM tokens', used: 1.9, limit: 5, unit: 'M', plain: 'the words the model read and wrote' },
	{ meter: 'STT seconds', used: 31, limit: 100, unit: 'k sec', plain: '≈ 8.6 hours of caller speech transcribed' },
	{ meter: 'TTS seconds', used: 27, limit: 100, unit: 'k sec', plain: '≈ 7.5 hours of agent speech generated' },
];

export const AUDIT = [
	{ when: 'Today · 09:41', who: 'Editor', what: 'Published Clinic reception v3', detail: 'Version 3 replaced v2 on the inbound number', category: 'Publishing' },
	{ when: 'Today · 09:12', who: 'Administrator', what: 'Invited a read-only operator', detail: 'Invite sent; access is view-only until accepted', category: 'Access' },
	{ when: 'Yesterday · 16:03', who: 'Compliance administrator', what: 'Placed a legal hold on 2 conversations', detail: 'C-1039 and C-1041 are exempt from retention deletion', category: 'Retention' },
	{ when: 'Yesterday · 11:27', who: 'Developer', what: 'Created an API key (session:mint scope)', detail: 'Key shown once at creation; only its hash is stored', category: 'Security' },
	{ when: 'Monday · 10:05', who: 'Administrator', what: 'Set conversation retention for the workspace', detail: 'Recordings and transcripts kept for 90 days', category: 'Settings' },
];
