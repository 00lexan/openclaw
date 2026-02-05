---
read_when:
  - æ›´æ”¹éŸ³é¢‘è½¬å½•æˆ–åª’ä½“å¤„ç†æ–¹å¼
summary: å…¥ç«™éŸ³é¢‘/è¯­éŸ³æ¶ˆæ¯å¦‚ä½•è¢«ä¸‹è½½ã€è½¬å½•å¹¶æ³¨å…¥å›žå¤
title: éŸ³é¢‘ä¸Žè¯­éŸ³æ¶ˆæ¯
x-i18n:
  generated_at: "2026-02-01T21:17:35Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: b926c47989ab0d1ee1fb8ae6372c51d27515b53d6fefe211a85856d372f14569
  source_path: nodes/audio.md
  workflow: 15
---

# éŸ³é¢‘ / è¯­éŸ³æ¶ˆæ¯ â€” 2026-01-17

## å·²æ”¯æŒçš„åŠŸèƒ½

- **åª’ä½“ç†è§£ï¼ˆéŸ³é¢‘ï¼‰**ï¼šå¦‚æžœéŸ³é¢‘ç†è§£å·²å¯ç”¨ï¼ˆæˆ–è‡ªåŠ¨æ£€æµ‹ï¼‰ï¼Œ ä¼šï¼š
  1. æ‰¾åˆ°ç¬¬ä¸€ä¸ªéŸ³é¢‘é™„ä»¶ï¼ˆæœ¬åœ°è·¯å¾„æˆ– URLï¼‰ï¼Œå¦‚æœ‰éœ€è¦åˆ™ä¸‹è½½ã€‚
  2. åœ¨å‘é€ç»™æ¯ä¸ªæ¨¡åž‹æ¡ç›®ä¹‹å‰æ‰§è¡Œ `maxBytes` é™åˆ¶ã€‚
  3. æŒ‰é¡ºåºè¿è¡Œç¬¬ä¸€ä¸ªç¬¦åˆæ¡ä»¶çš„æ¨¡åž‹æ¡ç›®ï¼ˆæä¾›å•†æˆ– CLIï¼‰ã€‚
  4. å¦‚æžœå¤±è´¥æˆ–è·³è¿‡ï¼ˆå¤§å°/è¶…æ—¶ï¼‰ï¼Œåˆ™å°è¯•ä¸‹ä¸€ä¸ªæ¡ç›®ã€‚
  5. æˆåŠŸåŽï¼Œå°† `Body` æ›¿æ¢ä¸º `[Audio]` å—å¹¶è®¾ç½® `{{Transcript}}`ã€‚
- **å‘½ä»¤è§£æž**ï¼šè½¬å½•æˆåŠŸæ—¶ï¼Œ`CommandBody`/`RawBody` ä¼šè®¾ç½®ä¸ºè½¬å½•æ–‡æœ¬ï¼Œå› æ­¤æ–œæ å‘½ä»¤ä»ç„¶æœ‰æ•ˆã€‚
- **è¯¦ç»†æ—¥å¿—**ï¼šåœ¨ `--verbose` æ¨¡å¼ä¸‹ï¼Œæˆ‘ä»¬ä¼šåœ¨è½¬å½•è¿è¡Œå’Œæ›¿æ¢æ­£æ–‡æ—¶è®°å½•æ—¥å¿—ã€‚

## è‡ªåŠ¨æ£€æµ‹ï¼ˆé»˜è®¤ï¼‰

å¦‚æžœä½ **æœªé…ç½®æ¨¡åž‹**ä¸” `tools.media.audio.enabled` **æœª**è®¾ç½®ä¸º `false`ï¼Œ ä¼šæŒ‰ä»¥ä¸‹é¡ºåºè‡ªåŠ¨æ£€æµ‹ï¼Œå¹¶åœ¨æ‰¾åˆ°ç¬¬ä¸€ä¸ªå¯ç”¨é€‰é¡¹æ—¶åœæ­¢ï¼š

1. **æœ¬åœ° CLI**ï¼ˆå¦‚å·²å®‰è£…ï¼‰
   - `sherpa-onnx-offline`ï¼ˆéœ€è¦ `SHERPA_ONNX_MODEL_DIR` åŒ…å« encoder/decoder/joiner/tokensï¼‰
   - `whisper-cli`ï¼ˆæ¥è‡ª `whisper-cpp`ï¼›ä½¿ç”¨ `WHISPER_CPP_MODEL` æˆ–å†…ç½®çš„ tiny æ¨¡åž‹ï¼‰
   - `whisper`ï¼ˆPython CLIï¼›è‡ªåŠ¨ä¸‹è½½æ¨¡åž‹ï¼‰
2. **Gemini CLI**ï¼ˆ`gemini`ï¼‰ä½¿ç”¨ `read_many_files`
3. **æä¾›å•†å¯†é’¥**ï¼ˆOpenAI â†’ Groq â†’ Deepgram â†’ Googleï¼‰

è¦ç¦ç”¨è‡ªåŠ¨æ£€æµ‹ï¼Œè¯·è®¾ç½® `tools.media.audio.enabled: false`ã€‚
è¦è‡ªå®šä¹‰ï¼Œè¯·è®¾ç½® `tools.media.audio.models`ã€‚
æ³¨æ„ï¼šäºŒè¿›åˆ¶æ£€æµ‹åœ¨ macOS/Linux/Windows ä¸Šé‡‡ç”¨å°½åŠ›è€Œä¸ºçš„æ–¹å¼ï¼›è¯·ç¡®ä¿ CLI åœ¨ `PATH` ä¸­ï¼ˆæˆ‘ä»¬ä¼šå±•å¼€ `~`ï¼‰ï¼Œæˆ–é€šè¿‡å®Œæ•´å‘½ä»¤è·¯å¾„è®¾ç½®æ˜¾å¼ CLI æ¨¡åž‹ã€‚

## é…ç½®ç¤ºä¾‹

### æä¾›å•† + CLI å›žé€€ï¼ˆOpenAI + Whisper CLIï¼‰

```json5
{
  tools: {
    media: {
      audio: {
        enabled: true,
        maxBytes: 20971520,
        models: [
          { provider: "openai", model: "gpt-4o-mini-transcribe" },
          {
            type: "cli",
            command: "whisper",
            args: ["--model", "base", "{{MediaPath}}"],
            timeoutSeconds: 45,
          },
        ],
      },
    },
  },
}
```

### ä»…æä¾›å•† + ä½œç”¨åŸŸæŽ§åˆ¶

```json5
{
  tools: {
    media: {
      audio: {
        enabled: true,
        scope: {
          default: "allow",
          rules: [{ action: "deny", match: { chatType: "group" } }],
        },
        models: [{ provider: "openai", model: "gpt-4o-mini-transcribe" }],
      },
    },
  },
}
```

### ä»…æä¾›å•†ï¼ˆDeepgramï¼‰

```json5
{
  tools: {
    media: {
      audio: {
        enabled: true,
        models: [{ provider: "deepgram", model: "nova-3" }],
      },
    },
  },
}
```

## æ³¨æ„äº‹é¡¹ä¸Žé™åˆ¶

- æä¾›å•†è®¤è¯éµå¾ªæ ‡å‡†çš„æ¨¡åž‹è®¤è¯é¡ºåºï¼ˆè®¤è¯é…ç½®æ–‡ä»¶ã€çŽ¯å¢ƒå˜é‡ã€`models.providers.*.apiKey`ï¼‰ã€‚
- å½“ä½¿ç”¨ `provider: "deepgram"` æ—¶ï¼ŒDeepgram ä¼šè¯»å– `DEEPGRAM_API_KEY`ã€‚
- Deepgram è®¾ç½®è¯¦æƒ…ï¼š[Deepgramï¼ˆéŸ³é¢‘è½¬å½•ï¼‰](/providers/deepgram)ã€‚
- éŸ³é¢‘æä¾›å•†å¯ä»¥é€šè¿‡ `tools.media.audio` è¦†ç›– `baseUrl`ã€`headers` å’Œ `providerOptions`ã€‚
- é»˜è®¤å¤§å°é™åˆ¶ä¸º 20MBï¼ˆ`tools.media.audio.maxBytes`ï¼‰ã€‚è¶…å¤§éŸ³é¢‘ä¼šè·³è¿‡è¯¥æ¨¡åž‹å¹¶å°è¯•ä¸‹ä¸€ä¸ªæ¡ç›®ã€‚
- éŸ³é¢‘çš„é»˜è®¤ `maxChars` **æœªè®¾ç½®**ï¼ˆå®Œæ•´è½¬å½•æ–‡æœ¬ï¼‰ã€‚è®¾ç½® `tools.media.audio.maxChars` æˆ–æ¯ä¸ªæ¡ç›®çš„ `maxChars` æ¥è£å‰ªè¾“å‡ºã€‚
- OpenAI è‡ªåŠ¨æ£€æµ‹é»˜è®¤ä½¿ç”¨ `gpt-4o-mini-transcribe`ï¼›è®¾ç½® `model: "gpt-4o-transcribe"` å¯èŽ·å¾—æ›´é«˜å‡†ç¡®åº¦ã€‚
- ä½¿ç”¨ `tools.media.audio.attachments` å¤„ç†å¤šæ¡è¯­éŸ³æ¶ˆæ¯ï¼ˆ`mode: "all"` + `maxAttachments`ï¼‰ã€‚
- è½¬å½•æ–‡æœ¬å¯åœ¨æ¨¡æ¿ä¸­é€šè¿‡ `{{Transcript}}` ä½¿ç”¨ã€‚
- CLI æ ‡å‡†è¾“å‡ºæœ‰ä¸Šé™ï¼ˆ5MBï¼‰ï¼›è¯·ä¿æŒ CLI è¾“å‡ºç®€æ´ã€‚

## å¸¸è§é™·é˜±

- ä½œç”¨åŸŸè§„åˆ™é‡‡ç”¨é¦–æ¬¡åŒ¹é…ä¼˜å…ˆã€‚`chatType` ä¼šè¢«è§„èŒƒåŒ–ä¸º `direct`ã€`group` æˆ– `room`ã€‚
- ç¡®ä¿ä½ çš„ CLI ä»¥é€€å‡ºç  0 é€€å‡ºå¹¶è¾“å‡ºçº¯æ–‡æœ¬ï¼›JSON æ ¼å¼éœ€è¦é€šè¿‡ `jq -r .text` è¿›è¡Œè½¬æ¢ã€‚
- ä¿æŒåˆç†çš„è¶…æ—¶æ—¶é—´ï¼ˆ`timeoutSeconds`ï¼Œé»˜è®¤ 60 ç§’ï¼‰ï¼Œä»¥é¿å…é˜»å¡žå›žå¤é˜Ÿåˆ—ã€‚


