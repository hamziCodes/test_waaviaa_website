/**
 * SAMPLE DATA for /demo. Every value here is illustrative: invented for the
 * preview, not captured from the engine, and not about any real customer.
 * The page labels it as sample data in a persistent banner, in the masthead
 * and under every panel. No latency figures are shown, even as samples.
 */

export const KPIS = [
	{ label: 'Conversations today', value: '48' },
	{ label: 'Interruptions handled', value: '12' },
	{ label: 'Active sessions', value: '3' },
];

/** Real realtime-protocol v1 event names, in a plausible order; sequence numbers only. */
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
	{ name: 'Clinic reception', version: 'v3 · published', language: 'English, Urdu', routes: '2 · 2 · 2', status: 'Live' },
	{ name: 'Service desk', version: 'v5 · published', language: 'English, Arabic', routes: '2 · 2 · 2', status: 'Live' },
	{ name: 'After-hours line', version: 'v1 · draft', language: 'Malay', routes: '2 · 2 · 1', status: 'Needs a second TTS route' },
];

export const CONVERSATIONS = [
	{ id: 'C-1048', agent: 'Clinic reception', channel: 'Telnyx · inbound', outcome: 'Appointment requested', minutes: '2:41' },
	{ id: 'C-1047', agent: 'Service desk', channel: 'Web · SDK', outcome: 'Opening hours answered', minutes: '0:58' },
	{ id: 'C-1046', agent: 'Clinic reception', channel: 'Telnyx · inbound', outcome: 'Message taken', minutes: '1:37' },
	{ id: 'C-1045', agent: 'Service desk', channel: 'Browser test', outcome: 'Test call', minutes: '0:44' },
];

export const SELECTED = {
	id: 'C-1048',
	transcript: [
		{ who: 'Agent', text: 'Good evening, you’ve reached the clinic. How can I help?' },
		{ who: 'Caller', text: 'I’d like to see a doctor on Thursday morning.' },
		{ who: 'Agent', text: 'Thursday morning I have ten o’clock or eleven thirty.', cut: ' If neither suits—' },
		{ who: 'Caller', text: 'Ten is fine.' },
		{ who: 'Agent', text: 'Ten o’clock on Thursday. Can I take a name?' },
	],
	summary: 'Caller asked for a Thursday morning appointment, interrupted the options, chose 10:00 and gave her name.',
	fields: [
		['intent', 'appointment'],
		['requested_slot', 'Thursday 10:00'],
		['caller_name', 'Sara Khan'],
		['language', 'English'],
	],
};

export const KNOWLEDGE = [
	{ name: 'Opening hours', kind: 'FAQ · 12 entries', updated: 'Sample' },
	{ name: 'clinic-services.pdf', kind: 'Document', updated: 'Sample' },
	{ name: 'Booking policy', kind: 'FAQ · 7 entries', updated: 'Sample' },
];

export const USAGE = [
	{ meter: 'Sessions', used: 412, limit: 1000, unit: '' },
	{ meter: 'Minutes', used: 905, limit: 3000, unit: 'min' },
	{ meter: 'LLM tokens', used: 1.9, limit: 5, unit: 'M' },
	{ meter: 'STT seconds', used: 31, limit: 100, unit: 'k s' },
	{ meter: 'TTS seconds', used: 27, limit: 100, unit: 'k s' },
];

export const AUDIT = [
	{ who: 'Editor', what: 'Published Clinic reception v3' },
	{ who: 'Administrator', what: 'Invited a read-only operator' },
	{ who: 'Compliance administrator', what: 'Placed a legal hold on 2 conversations' },
	{ who: 'Developer', what: 'Created an API key with the session:mint scope' },
	{ who: 'Administrator', what: 'Set conversation retention for the workspace' },
];
