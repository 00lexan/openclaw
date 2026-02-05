---
read_when:
  - ä½ æƒ³ä½¿ç”¨ Perplexity Sonar è¿›è¡Œç½‘ç»œæœç´¢
  - ä½ éœ€è¦è®¾ç½® PERPLEXITY_API_KEY æˆ– OpenRouter
summary: Perplexity Sonar çš„ web_search è®¾ç½®
title: Perplexity Sonar
x-i18n:
  generated_at: "2026-02-01T21:19:10Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 264d08e62e3bec854e378dad345ca209d139cd19b0469f3b25f88bb63b73ba00
  source_path: perplexity.md
  workflow: 15
---

# Perplexity Sonar

 å¯ä»¥ä½¿ç”¨ Perplexity Sonar ä½œä¸º `web_search` å·¥å…·ã€‚ä½ å¯ä»¥é€šè¿‡ Perplexity çš„ç›´è¿ž API æˆ–é€šè¿‡ OpenRouter è¿žæŽ¥ã€‚

## API é€‰é¡¹

### Perplexityï¼ˆç›´è¿žï¼‰

- Base URLï¼šhttps://api.perplexity.ai
- çŽ¯å¢ƒå˜é‡ï¼š`PERPLEXITY_API_KEY`

### OpenRouterï¼ˆæ›¿ä»£æ–¹æ¡ˆï¼‰

- Base URLï¼šhttps://openrouter.ai/api/v1
- çŽ¯å¢ƒå˜é‡ï¼š`OPENROUTER_API_KEY`
- æ”¯æŒé¢„ä»˜è´¹/åŠ å¯†è´§å¸ç§¯åˆ†ã€‚

## é…ç½®ç¤ºä¾‹

```json5
{
  tools: {
    web: {
      search: {
        provider: "perplexity",
        perplexity: {
          apiKey: "pplx-...",
          baseUrl: "https://api.perplexity.ai",
          model: "perplexity/sonar-pro",
        },
      },
    },
  },
}
```

## ä»Ž Brave åˆ‡æ¢

```json5
{
  tools: {
    web: {
      search: {
        provider: "perplexity",
        perplexity: {
          apiKey: "pplx-...",
          baseUrl: "https://api.perplexity.ai",
        },
      },
    },
  },
}
```

å¦‚æžœåŒæ—¶è®¾ç½®äº† `PERPLEXITY_API_KEY` å’Œ `OPENROUTER_API_KEY`ï¼Œè¯·è®¾ç½® `tools.web.search.perplexity.baseUrl`ï¼ˆæˆ– `tools.web.search.perplexity.apiKey`ï¼‰ä»¥æ¶ˆé™¤æ­§ä¹‰ã€‚

å¦‚æžœæœªè®¾ç½® base URLï¼Œ ä¼šæ ¹æ® API å¯†é’¥æ¥æºé€‰æ‹©é»˜è®¤å€¼ï¼š

- `PERPLEXITY_API_KEY` æˆ– `pplx-...` â†’ ç›´è¿ž Perplexityï¼ˆ`https://api.perplexity.ai`ï¼‰
- `OPENROUTER_API_KEY` æˆ– `sk-or-...` â†’ OpenRouterï¼ˆ`https://openrouter.ai/api/v1`ï¼‰
- æœªçŸ¥å¯†é’¥æ ¼å¼ â†’ OpenRouterï¼ˆå®‰å…¨å›žé€€ï¼‰

## æ¨¡åž‹

- `perplexity/sonar` â€” å¸¦ç½‘ç»œæœç´¢çš„å¿«é€Ÿé—®ç­”
- `perplexity/sonar-pro`ï¼ˆé»˜è®¤ï¼‰ â€” å¤šæ­¥æŽ¨ç† + ç½‘ç»œæœç´¢
- `perplexity/sonar-reasoning-pro` â€” æ·±åº¦ç ”ç©¶

è¯·å‚é˜… [Web å·¥å…·](/tools/web) äº†è§£ web_search é…ç½®è¯¦æƒ…ã€‚


