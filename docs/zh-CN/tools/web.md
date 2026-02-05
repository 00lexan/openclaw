---
read_when:
  - ä½ æƒ³å¯ç”¨ web_search æˆ– web_fetch
  - ä½ éœ€è¦è®¾ç½® Brave Search API å¯†é’¥
  - ä½ æƒ³ä½¿ç”¨ Perplexity Sonar è¿›è¡Œç½‘ç»œæœç´¢
summary: Web æœç´¢ + èŽ·å–å·¥å…·ï¼ˆBrave Search APIã€Perplexity ç›´è¿ž/OpenRouterï¼‰
title: Web å·¥å…·
x-i18n:
  generated_at: "2026-02-03T10:12:43Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 760b706cc966cb421e370f10f8e76047f8ca9fe0a106d90c05d979976789465a
  source_path: tools/web.md
  workflow: 15
---

# Web å·¥å…·

 æä¾›ä¸¤ä¸ªè½»é‡çº§ Web å·¥å…·ï¼š

- `web_search` â€” é€šè¿‡ Brave Search APIï¼ˆé»˜è®¤ï¼‰æˆ– Perplexity Sonarï¼ˆç›´è¿žæˆ–é€šè¿‡ OpenRouterï¼‰æœç´¢ç½‘ç»œã€‚
- `web_fetch` â€” HTTP èŽ·å– + å¯è¯»æ€§æå–ï¼ˆHTML â†’ markdown/æ–‡æœ¬ï¼‰ã€‚

è¿™äº›**ä¸æ˜¯**æµè§ˆå™¨è‡ªåŠ¨åŒ–ã€‚å¯¹äºŽ JS å¯†é›†åž‹ç½‘ç«™æˆ–éœ€è¦ç™»å½•çš„æƒ…å†µï¼Œè¯·ä½¿ç”¨[æµè§ˆå™¨å·¥å…·](/tools/browser)ã€‚

## å·¥ä½œåŽŸç†

- `web_search` è°ƒç”¨ä½ é…ç½®çš„æä¾›å•†å¹¶è¿”å›žç»“æžœã€‚
  - **Brave**ï¼ˆé»˜è®¤ï¼‰ï¼šè¿”å›žç»“æž„åŒ–ç»“æžœï¼ˆæ ‡é¢˜ã€URLã€æ‘˜è¦ï¼‰ã€‚
  - **Perplexity**ï¼šè¿”å›žå¸¦æœ‰å®žæ—¶ç½‘ç»œæœç´¢å¼•ç”¨çš„ AI ç»¼åˆç­”æ¡ˆã€‚
- ç»“æžœæŒ‰æŸ¥è¯¢ç¼“å­˜ 15 åˆ†é’Ÿï¼ˆå¯é…ç½®ï¼‰ã€‚
- `web_fetch` æ‰§è¡Œæ™®é€š HTTP GET å¹¶æå–å¯è¯»å†…å®¹ï¼ˆHTML â†’ markdown/æ–‡æœ¬ï¼‰ã€‚å®ƒ**ä¸**æ‰§è¡Œ JavaScriptã€‚
- `web_fetch` é»˜è®¤å¯ç”¨ï¼ˆé™¤éžæ˜¾å¼ç¦ç”¨ï¼‰ã€‚

## é€‰æ‹©æœç´¢æä¾›å•†

| æä¾›å•†            | ä¼˜ç‚¹                     | ç¼ºç‚¹                               | API å¯†é’¥                                     |
| ----------------- | ------------------------ | ---------------------------------- | -------------------------------------------- |
| **Brave**ï¼ˆé»˜è®¤ï¼‰ | å¿«é€Ÿã€ç»“æž„åŒ–ç»“æžœã€å…è´¹å±‚ | ä¼ ç»Ÿæœç´¢ç»“æžœ                       | `BRAVE_API_KEY`                              |
| **Perplexity**    | AI ç»¼åˆç­”æ¡ˆã€å¼•ç”¨ã€å®žæ—¶  | éœ€è¦ Perplexity æˆ– OpenRouter è®¿é—® | `OPENROUTER_API_KEY` æˆ– `PERPLEXITY_API_KEY` |

å‚è§ [Brave Search è®¾ç½®](/brave-search) å’Œ [Perplexity Sonar](/perplexity) äº†è§£æä¾›å•†ç‰¹å®šè¯¦æƒ…ã€‚

åœ¨é…ç½®ä¸­è®¾ç½®æä¾›å•†ï¼š

```json5
{
  tools: {
    web: {
      search: {
        provider: "brave", // æˆ– "perplexity"
      },
    },
  },
}
```

ç¤ºä¾‹ï¼šåˆ‡æ¢åˆ° Perplexity Sonarï¼ˆç›´è¿ž APIï¼‰ï¼š

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

## èŽ·å– Brave API å¯†é’¥

1. åœ¨ https://brave.com/search/api/ åˆ›å»º Brave Search API è´¦æˆ·
2. åœ¨æŽ§åˆ¶é¢æ¿ä¸­ï¼Œé€‰æ‹© **Data for Search** è®¡åˆ’ï¼ˆä¸æ˜¯"Data for AI"ï¼‰å¹¶ç”Ÿæˆ API å¯†é’¥ã€‚
3. è¿è¡Œ ` configure --section web` å°†å¯†é’¥å­˜å‚¨åœ¨é…ç½®ä¸­ï¼ˆæŽ¨èï¼‰ï¼Œæˆ–åœ¨çŽ¯å¢ƒä¸­è®¾ç½® `BRAVE_API_KEY`ã€‚

Brave æä¾›å…è´¹å±‚å’Œä»˜è´¹è®¡åˆ’ï¼›æŸ¥çœ‹ Brave API é—¨æˆ·äº†è§£å½“å‰é™åˆ¶å’Œå®šä»·ã€‚

### åœ¨å“ªé‡Œè®¾ç½®å¯†é’¥ï¼ˆæŽ¨èï¼‰

**æŽ¨èï¼š** è¿è¡Œ ` configure --section web`ã€‚å®ƒå°†å¯†é’¥å­˜å‚¨åœ¨ `~/./.json` çš„ `tools.web.search.apiKey` ä¸‹ã€‚

**çŽ¯å¢ƒå˜é‡æ›¿ä»£æ–¹æ¡ˆï¼š** åœ¨ Gateway ç½‘å…³è¿›ç¨‹çŽ¯å¢ƒä¸­è®¾ç½® `BRAVE_API_KEY`ã€‚å¯¹äºŽ Gateway ç½‘å…³å®‰è£…ï¼Œå°†å…¶æ”¾åœ¨ `~/./.env`ï¼ˆæˆ–ä½ çš„æœåŠ¡çŽ¯å¢ƒï¼‰ä¸­ã€‚å‚è§[çŽ¯å¢ƒå˜é‡](/help/faq#how-does--load-environment-variables)ã€‚

## ä½¿ç”¨ Perplexityï¼ˆç›´è¿žæˆ–é€šè¿‡ OpenRouterï¼‰

Perplexity Sonar æ¨¡åž‹å…·æœ‰å†…ç½®çš„ç½‘ç»œæœç´¢åŠŸèƒ½ï¼Œå¹¶è¿”å›žå¸¦æœ‰å¼•ç”¨çš„ AI ç»¼åˆç­”æ¡ˆã€‚ä½ å¯ä»¥é€šè¿‡ OpenRouter ä½¿ç”¨å®ƒä»¬ï¼ˆæ— éœ€ä¿¡ç”¨å¡ - æ”¯æŒåŠ å¯†è´§å¸/é¢„ä»˜è´¹ï¼‰ã€‚

### èŽ·å– OpenRouter API å¯†é’¥

1. åœ¨ https://openrouter.ai/ åˆ›å»ºè´¦æˆ·
2. æ·»åŠ é¢åº¦ï¼ˆæ”¯æŒåŠ å¯†è´§å¸ã€é¢„ä»˜è´¹æˆ–ä¿¡ç”¨å¡ï¼‰
3. åœ¨è´¦æˆ·è®¾ç½®ä¸­ç”Ÿæˆ API å¯†é’¥

### è®¾ç½® Perplexity æœç´¢

```json5
{
  tools: {
    web: {
      search: {
        enabled: true,
        provider: "perplexity",
        perplexity: {
          // API å¯†é’¥ï¼ˆå¦‚æžœè®¾ç½®äº† OPENROUTER_API_KEY æˆ– PERPLEXITY_API_KEY åˆ™å¯é€‰ï¼‰
          apiKey: "sk-or-v1-...",
          // åŸºç¡€ URLï¼ˆå¦‚æžœçœç•¥åˆ™æ ¹æ®å¯†é’¥æ„ŸçŸ¥é»˜è®¤å€¼ï¼‰
          baseUrl: "https://openrouter.ai/api/v1",
          // æ¨¡åž‹ï¼ˆé»˜è®¤ä¸º perplexity/sonar-proï¼‰
          model: "perplexity/sonar-pro",
        },
      },
    },
  },
}
```

**çŽ¯å¢ƒå˜é‡æ›¿ä»£æ–¹æ¡ˆï¼š** åœ¨ Gateway ç½‘å…³çŽ¯å¢ƒä¸­è®¾ç½® `OPENROUTER_API_KEY` æˆ– `PERPLEXITY_API_KEY`ã€‚å¯¹äºŽ Gateway ç½‘å…³å®‰è£…ï¼Œå°†å…¶æ”¾åœ¨ `~/./.env` ä¸­ã€‚

å¦‚æžœæœªè®¾ç½®åŸºç¡€ URLï¼Œ ä¼šæ ¹æ® API å¯†é’¥æ¥æºé€‰æ‹©é»˜è®¤å€¼ï¼š

- `PERPLEXITY_API_KEY` æˆ– `pplx-...` â†’ `https://api.perplexity.ai`
- `OPENROUTER_API_KEY` æˆ– `sk-or-...` â†’ `https://openrouter.ai/api/v1`
- æœªçŸ¥å¯†é’¥æ ¼å¼ â†’ OpenRouterï¼ˆå®‰å…¨å›žé€€ï¼‰

### å¯ç”¨çš„ Perplexity æ¨¡åž‹

| æ¨¡åž‹                             | æè¿°                 | æœ€é€‚åˆ   |
| -------------------------------- | -------------------- | -------- |
| `perplexity/sonar`               | å¸¦ç½‘ç»œæœç´¢çš„å¿«é€Ÿé—®ç­” | å¿«é€ŸæŸ¥è¯¢ |
| `perplexity/sonar-pro`ï¼ˆé»˜è®¤ï¼‰   | å¸¦ç½‘ç»œæœç´¢çš„å¤šæ­¥æŽ¨ç† | å¤æ‚é—®é¢˜ |
| `perplexity/sonar-reasoning-pro` | æ€ç»´é“¾åˆ†æž           | æ·±åº¦ç ”ç©¶ |

## web_search

ä½¿ç”¨é…ç½®çš„æä¾›å•†æœç´¢ç½‘ç»œã€‚

### è¦æ±‚

- `tools.web.search.enabled` ä¸èƒ½ä¸º `false`ï¼ˆé»˜è®¤ï¼šå¯ç”¨ï¼‰
- æ‰€é€‰æä¾›å•†çš„ API å¯†é’¥ï¼š
  - **Brave**ï¼š`BRAVE_API_KEY` æˆ– `tools.web.search.apiKey`
  - **Perplexity**ï¼š`OPENROUTER_API_KEY`ã€`PERPLEXITY_API_KEY` æˆ– `tools.web.search.perplexity.apiKey`

### é…ç½®

```json5
{
  tools: {
    web: {
      search: {
        enabled: true,
        apiKey: "BRAVE_API_KEY_HERE", // å¦‚æžœè®¾ç½®äº† BRAVE_API_KEY åˆ™å¯é€‰
        maxResults: 5,
        timeoutSeconds: 30,
        cacheTtlMinutes: 15,
      },
    },
  },
}
```

### å·¥å…·å‚æ•°

- `query`ï¼ˆå¿…éœ€ï¼‰
- `count`ï¼ˆ1â€“10ï¼›é»˜è®¤æ¥è‡ªé…ç½®ï¼‰
- `country`ï¼ˆå¯é€‰ï¼‰ï¼šç”¨äºŽç‰¹å®šåœ°åŒºç»“æžœçš„ 2 å­—æ¯å›½å®¶ä»£ç ï¼ˆä¾‹å¦‚"DE"ã€"US"ã€"ALL"ï¼‰ã€‚å¦‚æžœçœç•¥ï¼ŒBrave é€‰æ‹©å…¶é»˜è®¤åœ°åŒºã€‚
- `search_lang`ï¼ˆå¯é€‰ï¼‰ï¼šæœç´¢ç»“æžœçš„ ISO è¯­è¨€ä»£ç ï¼ˆä¾‹å¦‚"de"ã€"en"ã€"fr"ï¼‰
- `ui_lang`ï¼ˆå¯é€‰ï¼‰ï¼šUI å…ƒç´ çš„ ISO è¯­è¨€ä»£ç 
- `freshness`ï¼ˆå¯é€‰ï¼Œä»…é™ Braveï¼‰ï¼šæŒ‰å‘çŽ°æ—¶é—´è¿‡æ»¤ï¼ˆ`pd`ã€`pw`ã€`pm`ã€`py` æˆ– `YYYY-MM-DDtoYYYY-MM-DD`ï¼‰

**ç¤ºä¾‹ï¼š**

```javascript
// å¾·å›½ç‰¹å®šæœç´¢
await web_search({
  query: "TV online schauen",
  count: 10,
  country: "DE",
  search_lang: "de",
});

// å¸¦æ³•è¯­ UI çš„æ³•è¯­æœç´¢
await web_search({
  query: "actualitÃ©s",
  country: "FR",
  search_lang: "fr",
  ui_lang: "fr",
});

// æœ€è¿‘ç»“æžœï¼ˆè¿‡åŽ»ä¸€å‘¨ï¼‰
await web_search({
  query: "TMBG interview",
  freshness: "pw",
});
```

## web_fetch

èŽ·å– URL å¹¶æå–å¯è¯»å†…å®¹ã€‚

### è¦æ±‚

- `tools.web.fetch.enabled` ä¸èƒ½ä¸º `false`ï¼ˆé»˜è®¤ï¼šå¯ç”¨ï¼‰
- å¯é€‰çš„ Firecrawl å›žé€€ï¼šè®¾ç½® `tools.web.fetch.firecrawl.apiKey` æˆ– `FIRECRAWL_API_KEY`ã€‚

### é…ç½®

```json5
{
  tools: {
    web: {
      fetch: {
        enabled: true,
        maxChars: 50000,
        timeoutSeconds: 30,
        cacheTtlMinutes: 15,
        maxRedirects: 3,
        userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_7_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        readability: true,
        firecrawl: {
          enabled: true,
          apiKey: "FIRECRAWL_API_KEY_HERE", // å¦‚æžœè®¾ç½®äº† FIRECRAWL_API_KEY åˆ™å¯é€‰
          baseUrl: "https://api.firecrawl.dev",
          onlyMainContent: true,
          maxAgeMs: 86400000, // æ¯«ç§’ï¼ˆ1 å¤©ï¼‰
          timeoutSeconds: 60,
        },
      },
    },
  },
}
```

### å·¥å…·å‚æ•°

- `url`ï¼ˆå¿…éœ€ï¼Œä»…é™ http/httpsï¼‰
- `extractMode`ï¼ˆ`markdown` | `text`ï¼‰
- `maxChars`ï¼ˆæˆªæ–­é•¿é¡µé¢ï¼‰

æ³¨æ„ï¼š

- `web_fetch` é¦–å…ˆä½¿ç”¨ Readabilityï¼ˆä¸»è¦å†…å®¹æå–ï¼‰ï¼Œç„¶åŽä½¿ç”¨ Firecrawlï¼ˆå¦‚æžœå·²é…ç½®ï¼‰ã€‚å¦‚æžœä¸¤è€…éƒ½å¤±è´¥ï¼Œå·¥å…·è¿”å›žé”™è¯¯ã€‚
- Firecrawl è¯·æ±‚ä½¿ç”¨æœºå™¨äººè§„é¿æ¨¡å¼å¹¶é»˜è®¤ç¼“å­˜ç»“æžœã€‚
- `web_fetch` é»˜è®¤å‘é€ç±» Chrome çš„ User-Agent å’Œ `Accept-Language`ï¼›å¦‚éœ€è¦å¯è¦†ç›– `userAgent`ã€‚
- `web_fetch` é˜»æ­¢ç§æœ‰/å†…éƒ¨ä¸»æœºåå¹¶é‡æ–°æ£€æŸ¥é‡å®šå‘ï¼ˆç”¨ `maxRedirects` é™åˆ¶ï¼‰ã€‚
- `web_fetch` æ˜¯å°½åŠ›æå–ï¼›æŸäº›ç½‘ç«™éœ€è¦æµè§ˆå™¨å·¥å…·ã€‚
- å‚è§ [Firecrawl](/tools/firecrawl) äº†è§£å¯†é’¥è®¾ç½®å’ŒæœåŠ¡è¯¦æƒ…ã€‚
- å“åº”ä¼šè¢«ç¼“å­˜ï¼ˆé»˜è®¤ 15 åˆ†é’Ÿï¼‰ä»¥å‡å°‘é‡å¤èŽ·å–ã€‚
- å¦‚æžœä½ ä½¿ç”¨å·¥å…·é…ç½®æ–‡ä»¶/å…è®¸åˆ—è¡¨ï¼Œæ·»åŠ  `web_search`/`web_fetch` æˆ– `group:web`ã€‚
- å¦‚æžœç¼ºå°‘ Brave å¯†é’¥ï¼Œ`web_search` è¿”å›žä¸€ä¸ªç®€çŸ­çš„è®¾ç½®æç¤ºå’Œæ–‡æ¡£é“¾æŽ¥ã€‚


