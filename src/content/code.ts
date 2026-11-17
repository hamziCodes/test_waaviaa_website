/**
 * Code samples. Names and routes are taken from the engine repo:
 * sdk/typescript (package @ucve/voice-sdk, UCVEVoiceClient, useUCVEVoice),
 * sdk/python (package ucve-voice-sdk, module ucve), control_plane/app.py
 * (POST /v1/session/mint, Bearer API key with the session:mint scope).
 */

export const MINT_CURL = `curl -X POST "$WAVIA_API_URL/v1/session/mint" \\
  -H "Authorization: Bearer $WAVIA_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "tenant_id": "<your-tenant-id>", "agent_id": "<your-agent-id>" }'`;

export const MINT_RESPONSE = `{
  "status": "success",
  "session_id": "…",
  "token": "…",          // short-lived, single-use
  "ttl_sec": …,          // read it; do not hard-code it
  "ws_url": "wss://…"
}`;

export const MINT_SERVER_TS = `// Your server — the only place the API key lives.
app.post('/api/voice-session', async (req, res) => {
  const r = await fetch(\`\${process.env.WAVIA_API_URL}/v1/session/mint\`, {
    method: 'POST',
    headers: {
      Authorization: \`Bearer \${process.env.WAVIA_API_KEY}\`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tenant_id: process.env.WAVIA_TENANT_ID,
      agent_id: process.env.WAVIA_AGENT_ID,
    }),
  });
  if (!r.ok) return res.status(502).end();
  const { token, ws_url } = await r.json();
  res.json({ token, wsUrl: ws_url }); // never forward the API key
});`;

export const CLIENT_TS = `import { UCVEVoiceClient } from '@ucve/voice-sdk';

const { token, wsUrl } = await fetch('/api/voice-session', { method: 'POST' })
  .then((r) => r.json());

const client = new UCVEVoiceClient(token, {
  wsUrl,
  onTranscript: (speaker, text) => console.log(speaker, text),
  onPlayedTextCommit: (event) => console.log('heard by caller', event),
  onTokenExpiring: () => console.log('token expiring'),
});

await client.connect();
client.sendTextTurn('Hello');      // or stream microphone audio:
// client.sendAudioChunk(pcm16);   // 16 kHz, mono, signed 16-bit PCM`;

export const REACT_TS = `import { useUCVEVoice } from '@ucve/voice-sdk/react';

export function VoiceButton() {
  const { isConnected, isSpeaking, transcript, connect, disconnect } = useUCVEVoice();

  async function start() {
    const { token, wsUrl } = await fetch('/api/voice-session', { method: 'POST' })
      .then((r) => r.json());
    await connect(token, { wsUrl });
  }

  return (
    <>
      <button onClick={isConnected ? disconnect : start}>
        {isConnected ? 'Hang up' : 'Talk to the agent'}
      </button>
      {isSpeaking && <p>Agent speaking…</p>}
      <ol>{transcript.map((t, i) => <li key={i}>{t.speaker}: {t.text}</li>)}</ol>
    </>
  );
}`;

export const PYTHON = `from ucve import UCVEVoiceClient

# session_token and ws_url come from your authenticated backend's mint call.
client = UCVEVoiceClient(token=session_token, ws_url=ws_url)
await client.connect()
await client.send_text_turn("Hello")
# await client.send_audio(pcm16_bytes)  # 16 kHz, mono, signed 16-bit little-endian
await client.disconnect()`;
