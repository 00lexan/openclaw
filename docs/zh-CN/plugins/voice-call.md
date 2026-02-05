---
read_when:
  - ä½ æƒ³ä»Ž  å‘èµ·å‡ºç«™è¯­éŸ³é€šè¯
  - ä½ æ­£åœ¨é…ç½®æˆ–å¼€å‘ voice-call æ’ä»¶
summary: Voice Call æ’ä»¶ï¼šé€šè¿‡ Twilio/Telnyx/Plivo è¿›è¡Œå‡ºç«™ + å…¥ç«™é€šè¯ï¼ˆæ’ä»¶å®‰è£… + é…ç½® + CLIï¼‰
title: Voice Call æ’ä»¶
x-i18n:
  generated_at: "2026-02-03T07:53:40Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: d731c63bf52781cc49262db550d0507d7fc33e5e7ce5d87efaf5d44aedcafef7
  source_path: plugins/voice-call.md
  workflow: 15
---

# Voice Callï¼ˆæ’ä»¶ï¼‰

é€šè¿‡æ’ä»¶ä¸º  æä¾›è¯­éŸ³é€šè¯ã€‚æ”¯æŒå‡ºç«™é€šçŸ¥å’Œå¸¦æœ‰å…¥ç«™ç­–ç•¥çš„å¤šè½®å¯¹è¯ã€‚

å½“å‰æä¾›å•†ï¼š

- `twilio`ï¼ˆProgrammable Voice + Media Streamsï¼‰
- `telnyx`ï¼ˆCall Control v2ï¼‰
- `plivo`ï¼ˆVoice API + XML transfer + GetInput speechï¼‰
- `mock`ï¼ˆå¼€å‘/æ— ç½‘ç»œï¼‰

å¿«é€Ÿå¿ƒæ™ºæ¨¡åž‹ï¼š

- å®‰è£…æ’ä»¶
- é‡å¯ Gateway ç½‘å…³
- åœ¨ `plugins.entries.voice-call.config` ä¸‹é…ç½®
- ä½¿ç”¨ ` voicecall ...` æˆ– `voice_call` å·¥å…·

## è¿è¡Œä½ç½®ï¼ˆæœ¬åœ° vs è¿œç¨‹ï¼‰

Voice Call æ’ä»¶è¿è¡Œåœ¨ **Gateway ç½‘å…³è¿›ç¨‹å†…éƒ¨**ã€‚

å¦‚æžœä½ ä½¿ç”¨è¿œç¨‹ Gateway ç½‘å…³ï¼Œåœ¨**è¿è¡Œ Gateway ç½‘å…³çš„æœºå™¨**ä¸Šå®‰è£…/é…ç½®æ’ä»¶ï¼Œç„¶åŽé‡å¯ Gateway ç½‘å…³ä»¥åŠ è½½å®ƒã€‚

## å®‰è£…

### é€‰é¡¹ Aï¼šä»Ž npm å®‰è£…ï¼ˆæŽ¨èï¼‰

```bash
 plugins install @/voice-call
```

ä¹‹åŽé‡å¯ Gateway ç½‘å…³ã€‚

### é€‰é¡¹ Bï¼šä»Žæœ¬åœ°æ–‡ä»¶å¤¹å®‰è£…ï¼ˆå¼€å‘ï¼Œä¸å¤åˆ¶ï¼‰

```bash
 plugins install ./extensions/voice-call
cd ./extensions/voice-call && pnpm install
```

ä¹‹åŽé‡å¯ Gateway ç½‘å…³ã€‚

## é…ç½®

åœ¨ `plugins.entries.voice-call.config` ä¸‹è®¾ç½®é…ç½®ï¼š

```json5
{
  plugins: {
    entries: {
      "voice-call": {
        enabled: true,
        config: {
          provider: "twilio", // æˆ– "telnyx" | "plivo" | "mock"
          fromNumber: "+15550001234",
          toNumber: "+15550005678",

          twilio: {
            accountSid: "ACxxxxxxxx",
            authToken: "...",
          },

          plivo: {
            authId: "MAxxxxxxxxxxxxxxxxxxxx",
            authToken: "...",
          },

          // Webhook æœåŠ¡å™¨
          serve: {
            port: 3334,
            path: "/voice/webhook",
          },

          // å…¬å¼€æš´éœ²ï¼ˆé€‰ä¸€ä¸ªï¼‰
          // publicUrl: "https://example.ngrok.app/voice/webhook",
          // tunnel: { provider: "ngrok" },
          // tailscale: { mode: "funnel", path: "/voice/webhook" }

          outbound: {
            defaultMode: "notify", // notify | conversation
          },

          streaming: {
            enabled: true,
            streamPath: "/voice/stream",
          },
        },
      },
    },
  },
}
```

æ³¨æ„äº‹é¡¹ï¼š

- Twilio/Telnyx éœ€è¦**å¯å…¬å¼€è®¿é—®**çš„ webhook URLã€‚
- Plivo éœ€è¦**å¯å…¬å¼€è®¿é—®**çš„ webhook URLã€‚
- `mock` æ˜¯æœ¬åœ°å¼€å‘æä¾›å•†ï¼ˆæ— ç½‘ç»œè°ƒç”¨ï¼‰ã€‚
- `skipSignatureVerification` ä»…ç”¨äºŽæœ¬åœ°æµ‹è¯•ã€‚
- å¦‚æžœä½ ä½¿ç”¨ ngrok å…è´¹ç‰ˆï¼Œå°† `publicUrl` è®¾ç½®ä¸ºç¡®åˆ‡çš„ ngrok URLï¼›ç­¾åéªŒè¯å§‹ç»ˆå¼ºåˆ¶æ‰§è¡Œã€‚
- `tunnel.allowNgrokFreeTierLoopbackBypass: true` å…è®¸å¸¦æœ‰æ— æ•ˆç­¾åçš„ Twilio webhooksï¼Œ**ä»…å½“** `tunnel.provider="ngrok"` ä¸” `serve.bind` æ˜¯ loopbackï¼ˆngrok æœ¬åœ°ä»£ç†ï¼‰æ—¶ã€‚ä»…ç”¨äºŽæœ¬åœ°å¼€å‘ã€‚
- Ngrok å…è´¹ç‰ˆ URL å¯èƒ½ä¼šæ›´æ”¹æˆ–æ·»åŠ ä¸­é—´é¡µé¢è¡Œä¸ºï¼›å¦‚æžœ `publicUrl` æ¼‚ç§»ï¼ŒTwilio ç­¾åå°†å¤±è´¥ã€‚å¯¹äºŽç”Ÿäº§çŽ¯å¢ƒï¼Œä¼˜å…ˆä½¿ç”¨ç¨³å®šåŸŸåæˆ– Tailscale funnelã€‚

## é€šè¯çš„ TTS

Voice Call ä½¿ç”¨æ ¸å¿ƒ `messages.tts` é…ç½®ï¼ˆOpenAI æˆ– ElevenLabsï¼‰è¿›è¡Œé€šè¯ä¸­çš„æµå¼è¯­éŸ³ã€‚ä½ å¯ä»¥åœ¨æ’ä»¶é…ç½®ä¸‹ä½¿ç”¨**ç›¸åŒçš„ç»“æž„**è¦†ç›–å®ƒâ€”â€”å®ƒä¼šä¸Ž `messages.tts` æ·±åº¦åˆå¹¶ã€‚

```json5
{
  tts: {
    provider: "elevenlabs",
    elevenlabs: {
      voiceId: "pMsXgVXv3BLzUgSXRplE",
      modelId: "eleven_multilingual_v2",
    },
  },
}
```

æ³¨æ„äº‹é¡¹ï¼š

- **è¯­éŸ³é€šè¯å¿½ç•¥ Edge TTS**ï¼ˆç”µè¯éŸ³é¢‘éœ€è¦ PCMï¼›Edge è¾“å‡ºä¸å¯é ï¼‰ã€‚
- å½“å¯ç”¨ Twilio åª’ä½“æµæ—¶ä½¿ç”¨æ ¸å¿ƒ TTSï¼›å¦åˆ™é€šè¯å›žé€€åˆ°æä¾›å•†åŽŸç”Ÿè¯­éŸ³ã€‚

### æ›´å¤šç¤ºä¾‹

ä»…ä½¿ç”¨æ ¸å¿ƒ TTSï¼ˆæ— è¦†ç›–ï¼‰ï¼š

```json5
{
  messages: {
    tts: {
      provider: "openai",
      openai: { voice: "alloy" },
    },
  },
}
```

ä»…ä¸ºé€šè¯è¦†ç›–ä¸º ElevenLabsï¼ˆå…¶ä»–åœ°æ–¹ä¿æŒæ ¸å¿ƒé»˜è®¤ï¼‰ï¼š

```json5
{
  plugins: {
    entries: {
      "voice-call": {
        config: {
          tts: {
            provider: "elevenlabs",
            elevenlabs: {
              apiKey: "elevenlabs_key",
              voiceId: "pMsXgVXv3BLzUgSXRplE",
              modelId: "eleven_multilingual_v2",
            },
          },
        },
      },
    },
  },
}
```

ä»…ä¸ºé€šè¯è¦†ç›– OpenAI æ¨¡åž‹ï¼ˆæ·±åº¦åˆå¹¶ç¤ºä¾‹ï¼‰ï¼š

```json5
{
  plugins: {
    entries: {
      "voice-call": {
        config: {
          tts: {
            openai: {
              model: "gpt-4o-mini-tts",
              voice: "marin",
            },
          },
        },
      },
    },
  },
}
```

## å…¥ç«™é€šè¯

å…¥ç«™ç­–ç•¥é»˜è®¤ä¸º `disabled`ã€‚è¦å¯ç”¨å…¥ç«™é€šè¯ï¼Œè®¾ç½®ï¼š

```json5
{
  inboundPolicy: "allowlist",
  allowFrom: ["+15550001234"],
  inboundGreeting: "Hello! How can I help?",
}
```

è‡ªåŠ¨å“åº”ä½¿ç”¨æ™ºèƒ½ä½“ç³»ç»Ÿã€‚é€šè¿‡ä»¥ä¸‹æ–¹å¼è°ƒæ•´ï¼š

- `responseModel`
- `responseSystemPrompt`
- `responseTimeoutMs`

## CLI

```bash
 voicecall call --to "+15555550123" --message "Hello from "
 voicecall continue --call-id <id> --message "Any questions?"
 voicecall speak --call-id <id> --message "One moment"
 voicecall end --call-id <id>
 voicecall status --call-id <id>
 voicecall tail
 voicecall expose --mode funnel
```

## æ™ºèƒ½ä½“å·¥å…·

å·¥å…·åç§°ï¼š`voice_call`

æ“ä½œï¼š

- `initiate_call`ï¼ˆmessageã€to?ã€mode?ï¼‰
- `continue_call`ï¼ˆcallIdã€messageï¼‰
- `speak_to_user`ï¼ˆcallIdã€messageï¼‰
- `end_call`ï¼ˆcallIdï¼‰
- `get_status`ï¼ˆcallIdï¼‰

æ­¤ä»“åº“åœ¨ `skills/voice-call/SKILL.md` æä¾›äº†é…å¥—çš„ skill æ–‡æ¡£ã€‚

## Gateway ç½‘å…³ RPC

- `voicecall.initiate`ï¼ˆ`to?`ã€`message`ã€`mode?`ï¼‰
- `voicecall.continue`ï¼ˆ`callId`ã€`message`ï¼‰
- `voicecall.speak`ï¼ˆ`callId`ã€`message`ï¼‰
- `voicecall.end`ï¼ˆ`callId`ï¼‰
- `voicecall.status`ï¼ˆ`callId`ï¼‰


