import { Link } from 'react-router';
import { CtaBand, PageHead, Section, useTitle } from '@/components/ui';

const PRINCIPLES = [
	{
		no: '01',
		title: 'Listening is the product.',
		body: 'A voice agent that cannot be interrupted is a recording with extra steps. Barge-in and played-text commits are in the protocol because a conversation depends on them.',
	},
	{
		no: '02',
		title: 'Say what is built.',
		body: 'This site states what the engine does today. Where something is planned — like our hosted region in the UAE — it says planned. Demos are labelled scripted. Sample data is labelled sample.',
	},
	{
		no: '03',
		title: 'No numbers we cannot defend.',
		body: 'We define how turn latency is measured — end of speech to first audible sample — and publish no latency figures, customer counts or certifications here.',
	},
	{
		no: '04',
		title: 'Your keys, your controls.',
		body: 'Bring your own provider keys, choose retention, place legal holds, erase a workspace. Controls you can use beat promises you have to trust.',
	},
];

export default function About() {
	useTitle('About');
	return (
		<>
			<PageHead
				no="07"
				kicker="About"
				title={
					<>
						Built to <span className="hl">listen</span>.
					</>
				}
				lead="Wavia is a real-time voice AI engine and the Studio around it: a way for businesses and developers to put an agent on a phone line or a web page that holds a real conversation."
			/>

			<Section id="what" label="01 · What Wavia is" title="An engine, a studio, two SDKs.">
				<div className="split">
					<div className="prose">
						<p>
							The engine runs the spoken turn: Silero voice activity detection, streaming speech-to-text, a language model
							and streamed text-to-speech, in one native WebSocket pipeline that handles interruption.
						</p>
						<p>
							Studio is where teams build, test and publish agents and read their conversations. The TypeScript and Python
							SDKs let developers connect their own products to the same agents.
						</p>
					</div>
					<div className="prose">
						<p>
							It is configured for English, Urdu, Arabic and Malay, answers phone calls through Telnyx, and ships as
							self-hostable container images.
						</p>
						<p>
							Read more on the <Link to="/product">product page</Link>, or follow a single call on{' '}
							<Link to="/how-it-works">how it works</Link>.
						</p>
					</div>
				</div>
			</Section>

			<Section id="principles" label="02 · How we work" title="Four rules we keep.">
				<ul className="ledger" role="list">
					{PRINCIPLES.map((p) => (
						<li key={p.no}>
							<span className="label">{p.no}</span>
							<div>
								<h3>{p.title}</h3>
								<p>{p.body}</p>
							</div>
						</li>
					))}
				</ul>
			</Section>

			<CtaBand title="Want to talk it through?">
				<Link className="btn" to="/contact">
					Contact
				</Link>
				<Link className="btn btn--ghost" to="/demo">
					View the demo dashboard
				</Link>
			</CtaBand>
		</>
	);
}
