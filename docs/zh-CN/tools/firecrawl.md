---
read_when:
  - ä½ æƒ³è¦ Firecrawl æ”¯æŒçš„ç½‘é¡µæå–
  - ä½ éœ€è¦ Firecrawl API å¯†é’¥
  - ä½ æƒ³è¦ web_fetch çš„åæœºå™¨äººæå–
summary: ç”¨äºŽ web_fetch çš„ Firecrawl å›žé€€ï¼ˆåæœºå™¨äºº + ç¼“å­˜æå–ï¼‰
title: Firecrawl
x-i18n:
  generated_at: "2026-02-03T10:10:35Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 08a7ad45b41af41204e44d2b0be0f980b7184d80d2fa3977339e42a47beb2851
  source_path: tools/firecrawl.md
  workflow: 15
---

# Firecrawl

 å¯ä»¥ä½¿ç”¨ **Firecrawl** ä½œä¸º `web_fetch` çš„å›žé€€æå–å™¨ã€‚å®ƒæ˜¯ä¸€ä¸ªæ‰˜ç®¡çš„
å†…å®¹æå–æœåŠ¡ï¼Œæ”¯æŒæœºå™¨äººè§„é¿å’Œç¼“å­˜ï¼Œæœ‰åŠ©äºŽå¤„ç†
JS å¯†é›†åž‹ç½‘ç«™æˆ–é˜»æ­¢æ™®é€š HTTP è¯·æ±‚çš„é¡µé¢ã€‚

## èŽ·å– API å¯†é’¥

1. åˆ›å»º Firecrawl è´¦æˆ·å¹¶ç”Ÿæˆ API å¯†é’¥ã€‚
2. å°†å…¶å­˜å‚¨åœ¨é…ç½®ä¸­æˆ–åœ¨ Gateway ç½‘å…³çŽ¯å¢ƒä¸­è®¾ç½® `FIRECRAWL_API_KEY`ã€‚

## é…ç½® Firecrawl

```json5
{
  tools: {
    web: {
      fetch: {
        firecrawl: {
          apiKey: "FIRECRAWL_API_KEY_HERE",
          baseUrl: "https://api.firecrawl.dev",
          onlyMainContent: true,
          maxAgeMs: 172800000,
          timeoutSeconds: 60,
        },
      },
    },
  },
}
```

æ³¨æ„äº‹é¡¹ï¼š

- å½“å­˜åœ¨ API å¯†é’¥æ—¶ï¼Œ`firecrawl.enabled` é»˜è®¤ä¸º trueã€‚
- `maxAgeMs` æŽ§åˆ¶ç¼“å­˜ç»“æžœå¯ä»¥ä¿ç•™å¤šä¹…ï¼ˆæ¯«ç§’ï¼‰ã€‚é»˜è®¤ä¸º 2 å¤©ã€‚

## éšèº« / æœºå™¨äººè§„é¿

Firecrawl æä¾›äº†ä¸€ä¸ªç”¨äºŽæœºå™¨äººè§„é¿çš„**ä»£ç†æ¨¡å¼**å‚æ•°ï¼ˆ`basic`ã€`stealth` æˆ– `auto`ï¼‰ã€‚
 å¯¹ Firecrawl è¯·æ±‚å§‹ç»ˆä½¿ç”¨ `proxy: "auto"` åŠ  `storeInCache: true`ã€‚
å¦‚æžœçœç•¥ proxyï¼ŒFirecrawl é»˜è®¤ä½¿ç”¨ `auto`ã€‚`auto` åœ¨åŸºæœ¬å°è¯•å¤±è´¥æ—¶ä¼šä½¿ç”¨éšèº«ä»£ç†é‡è¯•ï¼Œè¿™å¯èƒ½æ¯”
ä»…ä½¿ç”¨åŸºæœ¬æŠ“å–æ¶ˆè€—æ›´å¤šç§¯åˆ†ã€‚

## `web_fetch` å¦‚ä½•ä½¿ç”¨ Firecrawl

`web_fetch` æå–é¡ºåºï¼š

1. Readabilityï¼ˆæœ¬åœ°ï¼‰
2. Firecrawlï¼ˆå¦‚æžœå·²é…ç½®ï¼‰
3. åŸºæœ¬ HTML æ¸…ç†ï¼ˆæœ€åŽå›žé€€ï¼‰

å‚è§ [Web å·¥å…·](/tools/web) äº†è§£å®Œæ•´çš„ Web å·¥å…·è®¾ç½®ã€‚


