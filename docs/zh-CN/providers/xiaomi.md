---
read_when:
  - ä½ æƒ³åœ¨  ä¸­ä½¿ç”¨ Xiaomi MiMo æ¨¡åž‹
  - ä½ éœ€è¦è®¾ç½® XIAOMI_API_KEY
summary: åœ¨  ä¸­ä½¿ç”¨ Xiaomi MiMo (mimo-v2-flash)
title: Xiaomi MiMo
x-i18n:
  generated_at: "2026-02-01T21:36:15Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 366fd2297b2caf8c5ad944d7f1b6d233b248fe43aedd22a28352ae7f370d2435
  source_path: providers/xiaomi.md
  workflow: 15
---

# Xiaomi MiMo

Xiaomi MiMo æ˜¯ **MiMo** æ¨¡åž‹çš„ API å¹³å°ã€‚å®ƒæä¾›ä¸Ž OpenAI å’Œ Anthropic æ ¼å¼å…¼å®¹çš„ REST APIï¼Œå¹¶ä½¿ç”¨ API å¯†é’¥è¿›è¡Œèº«ä»½éªŒè¯ã€‚è¯·åœ¨ [Xiaomi MiMo æŽ§åˆ¶å°](https://platform.xiaomimimo.com/#/console/api-keys) ä¸­åˆ›å»ºä½ çš„ API å¯†é’¥ã€‚ ä½¿ç”¨ `xiaomi` æä¾›å•†é…åˆ Xiaomi MiMo API å¯†é’¥ã€‚

## æ¨¡åž‹æ¦‚è§ˆ

- **mimo-v2-flash**ï¼š262144 token ä¸Šä¸‹æ–‡çª—å£ï¼Œå…¼å®¹ Anthropic Messages APIã€‚
- åŸºç¡€ URLï¼š`https://api.xiaomimimo.com/anthropic`
- æŽˆæƒæ–¹å¼ï¼š`Bearer $XIAOMI_API_KEY`

## CLI è®¾ç½®

```bash
 onboard --auth-choice xiaomi-api-key
# æˆ–éžäº¤äº’å¼
 onboard --auth-choice xiaomi-api-key --xiaomi-api-key "$XIAOMI_API_KEY"
```

## é…ç½®ç‰‡æ®µ

```json5
{
  env: { XIAOMI_API_KEY: "your-key" },
  agents: { defaults: { model: { primary: "xiaomi/mimo-v2-flash" } } },
  models: {
    mode: "merge",
    providers: {
      xiaomi: {
        baseUrl: "https://api.xiaomimimo.com/anthropic",
        api: "anthropic-messages",
        apiKey: "XIAOMI_API_KEY",
        models: [
          {
            id: "mimo-v2-flash",
            name: "Xiaomi MiMo V2 Flash",
            reasoning: false,
            input: ["text"],
            cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
            contextWindow: 262144,
            maxTokens: 8192,
          },
        ],
      },
    },
  },
}
```

## å¤‡æ³¨

- æ¨¡åž‹å¼•ç”¨ï¼š`xiaomi/mimo-v2-flash`ã€‚
- å½“è®¾ç½®äº† `XIAOMI_API_KEY`ï¼ˆæˆ–å­˜åœ¨èº«ä»½éªŒè¯é…ç½®æ–‡ä»¶ï¼‰æ—¶ï¼Œè¯¥æä¾›å•†ä¼šè‡ªåŠ¨æ³¨å…¥ã€‚
- æœ‰å…³æä¾›å•†è§„åˆ™ï¼Œè¯·å‚é˜… [/concepts/model-providers](/concepts/model-providers)ã€‚

