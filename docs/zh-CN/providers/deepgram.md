---
read_when:
  - ä½ æƒ³ä½¿ç”¨ Deepgram è¯­éŸ³è½¬æ–‡å­—å¤„ç†éŸ³é¢‘é™„ä»¶
  - ä½ éœ€è¦ä¸€ä¸ªå¿«é€Ÿçš„ Deepgram é…ç½®ç¤ºä¾‹
summary: Deepgram è¯­éŸ³è½¬å½•ï¼Œç”¨äºŽæŽ¥æ”¶è¯­éŸ³æ¶ˆæ¯
title: Deepgram
x-i18n:
  generated_at: "2026-02-01T21:34:47Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 8f19e072f08672116ed1a72578635c0dcebb2b1f0dfcbefa12f80b21a18ad25c
  source_path: providers/deepgram.md
  workflow: 15
---

# Deepgramï¼ˆéŸ³é¢‘è½¬å½•ï¼‰

Deepgram æ˜¯ä¸€ä¸ªè¯­éŸ³è½¬æ–‡å­— APIã€‚åœ¨  ä¸­ï¼Œå®ƒé€šè¿‡ `tools.media.audio` ç”¨äºŽ**æŽ¥æ”¶éŸ³é¢‘/è¯­éŸ³æ¶ˆæ¯çš„è½¬å½•**ã€‚

å¯ç”¨åŽï¼Œ ä¼šå°†éŸ³é¢‘æ–‡ä»¶ä¸Šä¼ åˆ° Deepgramï¼Œå¹¶å°†è½¬å½•æ–‡æœ¬æ³¨å…¥å›žå¤ç®¡é“ï¼ˆ`{{Transcript}}` + `[Audio]` å—ï¼‰ã€‚è¿™**ä¸æ˜¯æµå¼**å¤„ç†ï¼›å®ƒä½¿ç”¨çš„æ˜¯é¢„å½•éŸ³è½¬å½•ç«¯ç‚¹ã€‚

ç½‘ç«™ï¼šhttps://deepgram.com  
æ–‡æ¡£ï¼šhttps://developers.deepgram.com

## å¿«é€Ÿå¼€å§‹

1. è®¾ç½®ä½ çš„ API å¯†é’¥ï¼š

```
DEEPGRAM_API_KEY=dg_...
```

2. å¯ç”¨æä¾›å•†ï¼š

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

## é€‰é¡¹

- `model`ï¼šDeepgram æ¨¡åž‹ IDï¼ˆé»˜è®¤ï¼š`nova-3`ï¼‰
- `language`ï¼šè¯­è¨€æç¤ºï¼ˆå¯é€‰ï¼‰
- `tools.media.audio.providerOptions.deepgram.detect_language`ï¼šå¯ç”¨è¯­è¨€æ£€æµ‹ï¼ˆå¯é€‰ï¼‰
- `tools.media.audio.providerOptions.deepgram.punctuate`ï¼šå¯ç”¨æ ‡ç‚¹ç¬¦å·ï¼ˆå¯é€‰ï¼‰
- `tools.media.audio.providerOptions.deepgram.smart_format`ï¼šå¯ç”¨æ™ºèƒ½æ ¼å¼åŒ–ï¼ˆå¯é€‰ï¼‰

å¸¦è¯­è¨€å‚æ•°çš„ç¤ºä¾‹ï¼š

```json5
{
  tools: {
    media: {
      audio: {
        enabled: true,
        models: [{ provider: "deepgram", model: "nova-3", language: "en" }],
      },
    },
  },
}
```

å¸¦ Deepgram é€‰é¡¹çš„ç¤ºä¾‹ï¼š

```json5
{
  tools: {
    media: {
      audio: {
        enabled: true,
        providerOptions: {
          deepgram: {
            detect_language: true,
            punctuate: true,
            smart_format: true,
          },
        },
        models: [{ provider: "deepgram", model: "nova-3" }],
      },
    },
  },
}
```

## æ³¨æ„äº‹é¡¹

- è®¤è¯éµå¾ªæ ‡å‡†æä¾›å•†è®¤è¯é¡ºåºï¼›`DEEPGRAM_API_KEY` æ˜¯æœ€ç®€å•çš„æ–¹å¼ã€‚
- ä½¿ç”¨ä»£ç†æ—¶ï¼Œå¯é€šè¿‡ `tools.media.audio.baseUrl` å’Œ `tools.media.audio.headers` è¦†ç›–ç«¯ç‚¹æˆ–è¯·æ±‚å¤´ã€‚
- è¾“å‡ºéµå¾ªä¸Žå…¶ä»–æä¾›å•†ç›¸åŒçš„éŸ³é¢‘è§„åˆ™ï¼ˆå¤§å°é™åˆ¶ã€è¶…æ—¶ã€è½¬å½•æ–‡æœ¬æ³¨å…¥ï¼‰ã€‚


