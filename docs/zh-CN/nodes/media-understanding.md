---
read_when:
  - è®¾è®¡æˆ–é‡æž„åª’ä½“ç†è§£
  - è°ƒä¼˜å…¥ç«™éŸ³é¢‘/è§†é¢‘/å›¾ç‰‡é¢„å¤„ç†
summary: å…¥ç«™å›¾ç‰‡/éŸ³é¢‘/è§†é¢‘ç†è§£ï¼ˆå¯é€‰ï¼‰ï¼Œå¸¦æä¾›å•† + CLI å›žé€€
title: åª’ä½“ç†è§£
x-i18n:
  generated_at: "2026-02-03T07:51:40Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: f6c575662b7fcbf0b62c46e3fdfa4cdb7cfd455513097e4a2cdec8a34cbdbd48
  source_path: nodes/media-understanding.md
  workflow: 15
---

# åª’ä½“ç†è§£ï¼ˆå…¥ç«™ï¼‰â€” 2026-01-17

 å¯ä»¥åœ¨å›žå¤æµç¨‹è¿è¡Œä¹‹å‰**æ‘˜è¦å…¥ç«™åª’ä½“**ï¼ˆå›¾ç‰‡/éŸ³é¢‘/è§†é¢‘ï¼‰ã€‚å®ƒä¼šè‡ªåŠ¨æ£€æµ‹æœ¬åœ°å·¥å…·æˆ–æä¾›å•†å¯†é’¥æ˜¯å¦å¯ç”¨ï¼Œå¹¶ä¸”å¯ä»¥ç¦ç”¨æˆ–è‡ªå®šä¹‰ã€‚å¦‚æžœç†è§£å…³é—­ï¼Œæ¨¡åž‹ä»ç„¶ä¼šåƒå¾€å¸¸ä¸€æ ·æŽ¥æ”¶åŽŸå§‹æ–‡ä»¶/URLã€‚

## ç›®æ ‡

- å¯é€‰ï¼šå°†å…¥ç«™åª’ä½“é¢„å…ˆæ¶ˆåŒ–ä¸ºçŸ­æ–‡æœ¬ï¼Œä»¥ä¾¿æ›´å¿«è·¯ç”± + æ›´å¥½çš„å‘½ä»¤è§£æžã€‚
- ä¿ç•™åŽŸå§‹åª’ä½“ä¼ é€’ç»™æ¨¡åž‹ï¼ˆå§‹ç»ˆï¼‰ã€‚
- æ”¯æŒ**æä¾›å•† API** å’Œ **CLI å›žé€€**ã€‚
- å…è®¸å¤šä¸ªæ¨¡åž‹å¹¶æŒ‰é¡ºåºå›žé€€ï¼ˆé”™è¯¯/å¤§å°/è¶…æ—¶ï¼‰ã€‚

## é«˜å±‚è¡Œä¸º

1. æ”¶é›†å…¥ç«™é™„ä»¶ï¼ˆ`MediaPaths`ã€`MediaUrls`ã€`MediaTypes`ï¼‰ã€‚
2. å¯¹äºŽæ¯ä¸ªå¯ç”¨çš„èƒ½åŠ›ï¼ˆå›¾ç‰‡/éŸ³é¢‘/è§†é¢‘ï¼‰ï¼Œæ ¹æ®ç­–ç•¥é€‰æ‹©é™„ä»¶ï¼ˆé»˜è®¤ï¼š**ç¬¬ä¸€ä¸ª**ï¼‰ã€‚
3. é€‰æ‹©ç¬¬ä¸€ä¸ªç¬¦åˆæ¡ä»¶çš„æ¨¡åž‹æ¡ç›®ï¼ˆå¤§å° + èƒ½åŠ› + è®¤è¯ï¼‰ã€‚
4. å¦‚æžœæ¨¡åž‹å¤±è´¥æˆ–åª’ä½“å¤ªå¤§ï¼Œ**å›žé€€åˆ°ä¸‹ä¸€ä¸ªæ¡ç›®**ã€‚
5. æˆåŠŸæ—¶ï¼š
   - `Body` å˜ä¸º `[Image]`ã€`[Audio]` æˆ– `[Video]` å—ã€‚
   - éŸ³é¢‘è®¾ç½® `{{Transcript}}`ï¼›å‘½ä»¤è§£æžåœ¨æœ‰æ ‡é¢˜æ–‡æœ¬æ—¶ä½¿ç”¨æ ‡é¢˜æ–‡æœ¬ï¼Œå¦åˆ™ä½¿ç”¨è½¬å½•ã€‚
   - æ ‡é¢˜ä½œä¸º `User text:` ä¿ç•™åœ¨å—å†…ã€‚

å¦‚æžœç†è§£å¤±è´¥æˆ–è¢«ç¦ç”¨ï¼Œ**å›žå¤æµç¨‹ç»§ç»­**ä½¿ç”¨åŽŸå§‹æ­£æ–‡ + é™„ä»¶ã€‚

## é…ç½®æ¦‚è¿°

`tools.media` æ”¯æŒ**å…±äº«æ¨¡åž‹**åŠ ä¸Šæ¯èƒ½åŠ›è¦†ç›–ï¼š

- `tools.media.models`ï¼šå…±äº«æ¨¡åž‹åˆ—è¡¨ï¼ˆä½¿ç”¨ `capabilities` æ¥é™å®šï¼‰ã€‚
- `tools.media.image` / `tools.media.audio` / `tools.media.video`ï¼š
  - é»˜è®¤å€¼ï¼ˆ`prompt`ã€`maxChars`ã€`maxBytes`ã€`timeoutSeconds`ã€`language`ï¼‰
  - æä¾›å•†è¦†ç›–ï¼ˆ`baseUrl`ã€`headers`ã€`providerOptions`ï¼‰
  - é€šè¿‡ `tools.media.audio.providerOptions.deepgram` é…ç½® Deepgram éŸ³é¢‘é€‰é¡¹
  - å¯é€‰çš„**æ¯èƒ½åŠ› `models` åˆ—è¡¨**ï¼ˆä¼˜å…ˆäºŽå…±äº«æ¨¡åž‹ï¼‰
  - `attachments` ç­–ç•¥ï¼ˆ`mode`ã€`maxAttachments`ã€`prefer`ï¼‰
  - `scope`ï¼ˆå¯é€‰çš„æŒ‰æ¸ é“/èŠå¤©ç±»åž‹/ä¼šè¯é”®é™å®šï¼‰
- `tools.media.concurrency`ï¼šæœ€å¤§å¹¶å‘èƒ½åŠ›è¿è¡Œæ•°ï¼ˆé»˜è®¤ **2**ï¼‰ã€‚

```json5
{
  tools: {
    media: {
      models: [
        /* å…±äº«åˆ—è¡¨ */
      ],
      image: {
        /* å¯é€‰è¦†ç›– */
      },
      audio: {
        /* å¯é€‰è¦†ç›– */
      },
      video: {
        /* å¯é€‰è¦†ç›– */
      },
    },
  },
}
```

### æ¨¡åž‹æ¡ç›®

æ¯ä¸ª `models[]` æ¡ç›®å¯ä»¥æ˜¯**æä¾›å•†**æˆ– **CLI**ï¼š

```json5
{
  type: "provider", // çœç•¥æ—¶é»˜è®¤
  provider: "openai",
  model: "gpt-5.2",
  prompt: "Describe the image in <= 500 chars.",
  maxChars: 500,
  maxBytes: 10485760,
  timeoutSeconds: 60,
  capabilities: ["image"], // å¯é€‰ï¼Œç”¨äºŽå¤šæ¨¡æ€æ¡ç›®
  profile: "vision-profile",
  preferredProfile: "vision-fallback",
}
```

```json5
{
  type: "cli",
  command: "gemini",
  args: [
    "-m",
    "gemini-3-flash",
    "--allowed-tools",
    "read_file",
    "Read the media at {{MediaPath}} and describe it in <= {{MaxChars}} characters.",
  ],
  maxChars: 500,
  maxBytes: 52428800,
  timeoutSeconds: 120,
  capabilities: ["video", "image"],
}
```

CLI æ¨¡æ¿è¿˜å¯ä»¥ä½¿ç”¨ï¼š

- `{{MediaDir}}`ï¼ˆåŒ…å«åª’ä½“æ–‡ä»¶çš„ç›®å½•ï¼‰
- `{{OutputDir}}`ï¼ˆä¸ºæœ¬æ¬¡è¿è¡Œåˆ›å»ºçš„ä¸´æ—¶ç›®å½•ï¼‰
- `{{OutputBase}}`ï¼ˆä¸´æ—¶æ–‡ä»¶åŸºç¡€è·¯å¾„ï¼Œæ— æ‰©å±•åï¼‰

## é»˜è®¤å€¼å’Œé™åˆ¶

æŽ¨èé»˜è®¤å€¼ï¼š

- `maxChars`ï¼šå›¾ç‰‡/è§†é¢‘ä¸º **500**ï¼ˆç®€çŸ­ï¼Œé€‚åˆå‘½ä»¤ï¼‰
- `maxChars`ï¼šéŸ³é¢‘**ä¸è®¾ç½®**ï¼ˆå®Œæ•´è½¬å½•ï¼Œé™¤éžä½ è®¾ç½®é™åˆ¶ï¼‰
- `maxBytes`ï¼š
  - å›¾ç‰‡ï¼š**10MB**
  - éŸ³é¢‘ï¼š**20MB**
  - è§†é¢‘ï¼š**50MB**

è§„åˆ™ï¼š

- å¦‚æžœåª’ä½“è¶…è¿‡ `maxBytes`ï¼Œè¯¥æ¨¡åž‹è¢«è·³è¿‡ï¼Œ**å°è¯•ä¸‹ä¸€ä¸ªæ¨¡åž‹**ã€‚
- å¦‚æžœæ¨¡åž‹è¿”å›žè¶…è¿‡ `maxChars`ï¼Œè¾“å‡ºè¢«æˆªæ–­ã€‚
- `prompt` é»˜è®¤ä¸ºç®€å•çš„"Describe the {media}."åŠ ä¸Š `maxChars` æŒ‡å¯¼ï¼ˆä»…å›¾ç‰‡/è§†é¢‘ï¼‰ã€‚
- å¦‚æžœ `<capability>.enabled: true` ä½†æœªé…ç½®æ¨¡åž‹ï¼Œå½“æä¾›å•†æ”¯æŒè¯¥èƒ½åŠ›æ—¶ï¼Œ å°è¯•**æ´»åŠ¨çš„å›žå¤æ¨¡åž‹**ã€‚

### è‡ªåŠ¨æ£€æµ‹åª’ä½“ç†è§£ï¼ˆé»˜è®¤ï¼‰

å¦‚æžœ `tools.media.<capability>.enabled` **æœª**è®¾ç½®ä¸º `false` ä¸”ä½ æ²¡æœ‰é…ç½®æ¨¡åž‹ï¼Œ æŒ‰ä»¥ä¸‹é¡ºåºè‡ªåŠ¨æ£€æµ‹å¹¶**åœ¨ç¬¬ä¸€ä¸ªå¯ç”¨é€‰é¡¹å¤„åœæ­¢**ï¼š

1. **æœ¬åœ° CLI**ï¼ˆä»…éŸ³é¢‘ï¼›å¦‚æžœå·²å®‰è£…ï¼‰
   - `sherpa-onnx-offline`ï¼ˆéœ€è¦å¸¦æœ‰ encoder/decoder/joiner/tokens çš„ `SHERPA_ONNX_MODEL_DIR`ï¼‰
   - `whisper-cli`ï¼ˆ`whisper-cpp`ï¼›ä½¿ç”¨ `WHISPER_CPP_MODEL` æˆ–æ†ç»‘çš„ tiny æ¨¡åž‹ï¼‰
   - `whisper`ï¼ˆPython CLIï¼›è‡ªåŠ¨ä¸‹è½½æ¨¡åž‹ï¼‰
2. **Gemini CLI**ï¼ˆ`gemini`ï¼‰ä½¿ç”¨ `read_many_files`
3. **æä¾›å•†å¯†é’¥**
   - éŸ³é¢‘ï¼šOpenAI â†’ Groq â†’ Deepgram â†’ Google
   - å›¾ç‰‡ï¼šOpenAI â†’ Anthropic â†’ Google â†’ MiniMax
   - è§†é¢‘ï¼šGoogle

è¦ç¦ç”¨è‡ªåŠ¨æ£€æµ‹ï¼Œè®¾ç½®ï¼š

```json5
{
  tools: {
    media: {
      audio: {
        enabled: false,
      },
    },
  },
}
```

æ³¨æ„ï¼šäºŒè¿›åˆ¶æ–‡ä»¶æ£€æµ‹åœ¨ macOS/Linux/Windows ä¸Šæ˜¯å°½åŠ›è€Œä¸ºçš„ï¼›ç¡®ä¿ CLI åœ¨ `PATH` ä¸Šï¼ˆæˆ‘ä»¬ä¼šå±•å¼€ `~`ï¼‰ï¼Œæˆ–è®¾ç½®å¸¦æœ‰å®Œæ•´å‘½ä»¤è·¯å¾„çš„æ˜¾å¼ CLI æ¨¡åž‹ã€‚

## èƒ½åŠ›ï¼ˆå¯é€‰ï¼‰

å¦‚æžœä½ è®¾ç½®äº† `capabilities`ï¼Œè¯¥æ¡ç›®ä»…å¯¹è¿™äº›åª’ä½“ç±»åž‹è¿è¡Œã€‚å¯¹äºŽå…±äº«åˆ—è¡¨ï¼Œ å¯ä»¥æŽ¨æ–­é»˜è®¤å€¼ï¼š

- `openai`ã€`anthropic`ã€`minimax`ï¼š**å›¾ç‰‡**
- `google`ï¼ˆGemini APIï¼‰ï¼š**å›¾ç‰‡ + éŸ³é¢‘ + è§†é¢‘**
- `groq`ï¼š**éŸ³é¢‘**
- `deepgram`ï¼š**éŸ³é¢‘**

å¯¹äºŽ CLI æ¡ç›®ï¼Œ**æ˜¾å¼è®¾ç½® `capabilities`** ä»¥é¿å…æ„å¤–åŒ¹é…ã€‚å¦‚æžœä½ çœç•¥ `capabilities`ï¼Œè¯¥æ¡ç›®å¯¹å®ƒå‡ºçŽ°çš„åˆ—è¡¨éƒ½ç¬¦åˆæ¡ä»¶ã€‚

## æä¾›å•†æ”¯æŒçŸ©é˜µï¼ˆ é›†æˆï¼‰

| èƒ½åŠ› | æä¾›å•†é›†æˆ                                     | è¯´æ˜Ž                                    |
| ---- | ---------------------------------------------- | --------------------------------------- |
| å›¾ç‰‡ | OpenAI / Anthropic / Google / å…¶ä»–é€šè¿‡ `pi-ai` | æ³¨å†Œè¡¨ä¸­ä»»ä½•æ”¯æŒå›¾ç‰‡çš„æ¨¡åž‹éƒ½å¯ç”¨ã€‚      |
| éŸ³é¢‘ | OpenAIã€Groqã€Deepgramã€Google                 | æä¾›å•†è½¬å½•ï¼ˆWhisper/Deepgram/Geminiï¼‰ã€‚ |
| è§†é¢‘ | Googleï¼ˆGemini APIï¼‰                           | æä¾›å•†è§†é¢‘ç†è§£ã€‚                        |

## æŽ¨èæä¾›å•†

**å›¾ç‰‡**

- å¦‚æžœæ”¯æŒå›¾ç‰‡ï¼Œä¼˜å…ˆä½¿ç”¨ä½ çš„æ´»åŠ¨æ¨¡åž‹ã€‚
- è‰¯å¥½çš„é»˜è®¤å€¼ï¼š`openai/gpt-5.2`ã€`anthropic/claude-opus-4-5`ã€`google/gemini-3-pro-preview`ã€‚

**éŸ³é¢‘**

- `openai/gpt-4o-mini-transcribe`ã€`groq/whisper-large-v3-turbo` æˆ– `deepgram/nova-3`ã€‚
- CLI å›žé€€ï¼š`whisper-cli`ï¼ˆwhisper-cppï¼‰æˆ– `whisper`ã€‚
- Deepgram è®¾ç½®ï¼š[Deepgramï¼ˆéŸ³é¢‘è½¬å½•ï¼‰](/providers/deepgram)ã€‚

**è§†é¢‘**

- `google/gemini-3-flash-preview`ï¼ˆå¿«é€Ÿï¼‰ã€`google/gemini-3-pro-preview`ï¼ˆæ›´ä¸°å¯Œï¼‰ã€‚
- CLI å›žé€€ï¼š`gemini` CLIï¼ˆæ”¯æŒå¯¹è§†é¢‘/éŸ³é¢‘ä½¿ç”¨ `read_file`ï¼‰ã€‚

## é™„ä»¶ç­–ç•¥

æ¯èƒ½åŠ›çš„ `attachments` æŽ§åˆ¶å¤„ç†å“ªäº›é™„ä»¶ï¼š

- `mode`ï¼š`first`ï¼ˆé»˜è®¤ï¼‰æˆ– `all`
- `maxAttachments`ï¼šé™åˆ¶å¤„ç†æ•°é‡ï¼ˆé»˜è®¤ **1**ï¼‰
- `prefer`ï¼š`first`ã€`last`ã€`path`ã€`url`

å½“ `mode: "all"` æ—¶ï¼Œè¾“å‡ºæ ‡è®°ä¸º `[Image 1/2]`ã€`[Audio 2/2]` ç­‰ã€‚

## é…ç½®ç¤ºä¾‹

### 1) å…±äº«æ¨¡åž‹åˆ—è¡¨ + è¦†ç›–

```json5
{
  tools: {
    media: {
      models: [
        { provider: "openai", model: "gpt-5.2", capabilities: ["image"] },
        {
          provider: "google",
          model: "gemini-3-flash-preview",
          capabilities: ["image", "audio", "video"],
        },
        {
          type: "cli",
          command: "gemini",
          args: [
            "-m",
            "gemini-3-flash",
            "--allowed-tools",
            "read_file",
            "Read the media at {{MediaPath}} and describe it in <= {{MaxChars}} characters.",
          ],
          capabilities: ["image", "video"],
        },
      ],
      audio: {
        attachments: { mode: "all", maxAttachments: 2 },
      },
      video: {
        maxChars: 500,
      },
    },
  },
}
```

### 2) ä»…éŸ³é¢‘ + è§†é¢‘ï¼ˆå›¾ç‰‡å…³é—­ï¼‰

```json5
{
  tools: {
    media: {
      audio: {
        enabled: true,
        models: [
          { provider: "openai", model: "gpt-4o-mini-transcribe" },
          {
            type: "cli",
            command: "whisper",
            args: ["--model", "base", "{{MediaPath}}"],
          },
        ],
      },
      video: {
        enabled: true,
        maxChars: 500,
        models: [
          { provider: "google", model: "gemini-3-flash-preview" },
          {
            type: "cli",
            command: "gemini",
            args: [
              "-m",
              "gemini-3-flash",
              "--allowed-tools",
              "read_file",
              "Read the media at {{MediaPath}} and describe it in <= {{MaxChars}} characters.",
            ],
          },
        ],
      },
    },
  },
}
```

### 3) å¯é€‰å›¾ç‰‡ç†è§£

```json5
{
  tools: {
    media: {
      image: {
        enabled: true,
        maxBytes: 10485760,
        maxChars: 500,
        models: [
          { provider: "openai", model: "gpt-5.2" },
          { provider: "anthropic", model: "claude-opus-4-5" },
          {
            type: "cli",
            command: "gemini",
            args: [
              "-m",
              "gemini-3-flash",
              "--allowed-tools",
              "read_file",
              "Read the media at {{MediaPath}} and describe it in <= {{MaxChars}} characters.",
            ],
          },
        ],
      },
    },
  },
}
```

### 4) å¤šæ¨¡æ€å•æ¡ç›®ï¼ˆæ˜¾å¼èƒ½åŠ›ï¼‰

```json5
{
  tools: {
    media: {
      image: {
        models: [
          {
            provider: "google",
            model: "gemini-3-pro-preview",
            capabilities: ["image", "video", "audio"],
          },
        ],
      },
      audio: {
        models: [
          {
            provider: "google",
            model: "gemini-3-pro-preview",
            capabilities: ["image", "video", "audio"],
          },
        ],
      },
      video: {
        models: [
          {
            provider: "google",
            model: "gemini-3-pro-preview",
            capabilities: ["image", "video", "audio"],
          },
        ],
      },
    },
  },
}
```

## çŠ¶æ€è¾“å‡º

å½“åª’ä½“ç†è§£è¿è¡Œæ—¶ï¼Œ`/status` åŒ…å«ä¸€è¡Œç®€çŸ­æ‘˜è¦ï¼š

```
ðŸ“Ž Media: image ok (openai/gpt-5.2) Â· audio skipped (maxBytes)
```

è¿™æ˜¾ç¤ºæ¯èƒ½åŠ›çš„ç»“æžœä»¥åŠé€‚ç”¨æ—¶é€‰æ‹©çš„æä¾›å•†/æ¨¡åž‹ã€‚

## æ³¨æ„äº‹é¡¹

- ç†è§£æ˜¯**å°½åŠ›è€Œä¸º**çš„ã€‚é”™è¯¯ä¸ä¼šé˜»æ­¢å›žå¤ã€‚
- å³ä½¿ç†è§£è¢«ç¦ç”¨ï¼Œé™„ä»¶ä»ç„¶ä¼ é€’ç»™æ¨¡åž‹ã€‚
- ä½¿ç”¨ `scope` é™åˆ¶ç†è§£è¿è¡Œçš„ä½ç½®ï¼ˆä¾‹å¦‚ä»…ç§ä¿¡ï¼‰ã€‚

## ç›¸å…³æ–‡æ¡£

- [é…ç½®](/gateway/configuration)
- [å›¾ç‰‡å’Œåª’ä½“æ”¯æŒ](/nodes/images)

