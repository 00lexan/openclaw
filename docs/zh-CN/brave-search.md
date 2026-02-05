---
read_when:
  - ä½ æƒ³ä½¿ç”¨ Brave Search è¿›è¡Œ web_search
  - ä½ éœ€è¦ BRAVE_API_KEY æˆ–å¥—é¤è¯¦æƒ…
summary: ç”¨äºŽ web_search çš„ Brave Search API è®¾ç½®
title: Brave Search
x-i18n:
  generated_at: "2026-02-03T07:43:09Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: cdcb037b092b8a10609f02acf062b4164cb826ac22bdb3fb2909c842a1405341
  source_path: brave-search.md
  workflow: 15
---

# Brave Search API

 ä½¿ç”¨ Brave Search ä½œä¸º `web_search` çš„é»˜è®¤æä¾›å•†ã€‚

## èŽ·å– API å¯†é’¥

1. åœ¨ https://brave.com/search/api/ åˆ›å»º Brave Search API è´¦æˆ·
2. åœ¨æŽ§åˆ¶é¢æ¿ä¸­ï¼Œé€‰æ‹© **Data for Search** å¥—é¤å¹¶ç”Ÿæˆ API å¯†é’¥ã€‚
3. å°†å¯†é’¥å­˜å‚¨åœ¨é…ç½®ä¸­ï¼ˆæŽ¨èï¼‰ï¼Œæˆ–åœ¨ Gateway ç½‘å…³çŽ¯å¢ƒä¸­è®¾ç½® `BRAVE_API_KEY`ã€‚

## é…ç½®ç¤ºä¾‹

```json5
{
  tools: {
    web: {
      search: {
        provider: "brave",
        apiKey: "BRAVE_API_KEY_HERE",
        maxResults: 5,
        timeoutSeconds: 30,
      },
    },
  },
}
```

## æ³¨æ„äº‹é¡¹

- Data for AI å¥—é¤ä¸Ž `web_search` **ä¸**å…¼å®¹ã€‚
- Brave æä¾›å…è´¹å±‚çº§å’Œä»˜è´¹å¥—é¤ï¼›è¯·æŸ¥çœ‹ Brave API é—¨æˆ·äº†è§£å½“å‰é™åˆ¶ã€‚

è¯·å‚é˜… [Web å·¥å…·](/tools/web) äº†è§£å®Œæ•´çš„ web_search é…ç½®ã€‚


