---
read_when:
  - ä½ æƒ³åœ¨  ä¸­ä½¿ç”¨ Anthropic æ¨¡åž‹
  - ä½ æƒ³ä½¿ç”¨ setup-token è€Œä¸æ˜¯ API å¯†é’¥
summary: åœ¨  ä¸­é€šè¿‡ API å¯†é’¥æˆ– setup-token ä½¿ç”¨ Anthropic Claude
title: Anthropic
x-i18n:
  generated_at: "2026-02-03T10:08:33Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: a78ccd855810a93e71d7138af4d3fc7d66e877349815c4a3207cf2214b0150b3
  source_path: providers/anthropic.md
  workflow: 15
---

# Anthropicï¼ˆClaudeï¼‰

Anthropic æž„å»ºäº† **Claude** æ¨¡åž‹ç³»åˆ—ï¼Œå¹¶é€šè¿‡ API æä¾›è®¿é—®ã€‚
åœ¨  ä¸­ï¼Œä½ å¯ä»¥ä½¿ç”¨ API å¯†é’¥æˆ– **setup-token** è¿›è¡Œè®¤è¯ã€‚

## é€‰é¡¹ Aï¼šAnthropic API å¯†é’¥

**é€‚ç”¨äºŽï¼š** æ ‡å‡† API è®¿é—®å’ŒæŒ‰ç”¨é‡è®¡è´¹ã€‚
åœ¨ Anthropic Console ä¸­åˆ›å»ºä½ çš„ API å¯†é’¥ã€‚

### CLI è®¾ç½®

```bash
 onboard
# é€‰æ‹©ï¼šAnthropic API key

# æˆ–éžäº¤äº’å¼
 onboard --anthropic-api-key "$ANTHROPIC_API_KEY"
```

### é…ç½®ç‰‡æ®µ

```json5
{
  env: { ANTHROPIC_API_KEY: "sk-ant-..." },
  agents: { defaults: { model: { primary: "anthropic/claude-opus-4-5" } } },
}
```

## æç¤ºç¼“å­˜ï¼ˆAnthropic APIï¼‰

 æ”¯æŒ Anthropic çš„æç¤ºç¼“å­˜åŠŸèƒ½ã€‚è¿™æ˜¯**ä»…é™ API**ï¼›è®¢é˜…è®¤è¯ä¸æ”¯æŒç¼“å­˜è®¾ç½®ã€‚

### é…ç½®

åœ¨æ¨¡åž‹é…ç½®ä¸­ä½¿ç”¨ `cacheRetention` å‚æ•°ï¼š

| å€¼      | ç¼“å­˜æ—¶é•¿ | æè¿°                       |
| ------- | -------- | -------------------------- |
| `none`  | æ— ç¼“å­˜   | ç¦ç”¨æç¤ºç¼“å­˜               |
| `short` | 5 åˆ†é’Ÿ   | API å¯†é’¥è®¤è¯çš„é»˜è®¤å€¼       |
| `long`  | 1 å°æ—¶   | æ‰©å±•ç¼“å­˜ï¼ˆéœ€è¦ beta æ ‡å¿—ï¼‰ |

```json5
{
  agents: {
    defaults: {
      models: {
        "anthropic/claude-opus-4-5": {
          params: { cacheRetention: "long" },
        },
      },
    },
  },
}
```

### é»˜è®¤å€¼

ä½¿ç”¨ Anthropic API å¯†é’¥è®¤è¯æ—¶ï¼Œ ä¼šè‡ªåŠ¨ä¸ºæ‰€æœ‰ Anthropic æ¨¡åž‹åº”ç”¨ `cacheRetention: "short"`ï¼ˆ5 åˆ†é’Ÿç¼“å­˜ï¼‰ã€‚ä½ å¯ä»¥é€šè¿‡åœ¨é…ç½®ä¸­æ˜¾å¼è®¾ç½® `cacheRetention` æ¥è¦†ç›–æ­¤è®¾ç½®ã€‚

### æ—§ç‰ˆå‚æ•°

ä¸ºäº†å‘åŽå…¼å®¹ï¼Œä»æ”¯æŒæ—§ç‰ˆ `cacheControlTtl` å‚æ•°ï¼š

- `"5m"` æ˜ å°„åˆ° `short`
- `"1h"` æ˜ å°„åˆ° `long`

æˆ‘ä»¬å»ºè®®è¿ç§»åˆ°æ–°çš„ `cacheRetention` å‚æ•°ã€‚

 åœ¨ Anthropic API è¯·æ±‚ä¸­åŒ…å« `extended-cache-ttl-2025-04-11` beta æ ‡å¿—ï¼›
å¦‚æžœä½ è¦†ç›–æä¾›å•†å¤´ä¿¡æ¯ï¼Œè¯·ä¿ç•™å®ƒï¼ˆå‚è§ [/gateway/configuration](/gateway/configuration)ï¼‰ã€‚

## é€‰é¡¹ Bï¼šClaude setup-token

**é€‚ç”¨äºŽï¼š** ä½¿ç”¨ä½ çš„ Claude è®¢é˜…ã€‚

### åœ¨å“ªé‡ŒèŽ·å– setup-token

setup-token ç”± **Claude Code CLI** åˆ›å»ºï¼Œè€Œä¸æ˜¯ Anthropic Consoleã€‚ä½ å¯ä»¥åœ¨**ä»»ä½•æœºå™¨**ä¸Šè¿è¡Œï¼š

```bash
claude setup-token
```

å°†ä»¤ç‰Œç²˜è´´åˆ° ï¼ˆå‘å¯¼ï¼š**Anthropic token (paste setup-token)**ï¼‰ï¼Œæˆ–åœ¨ Gateway ç½‘å…³ä¸»æœºä¸Šè¿è¡Œï¼š

```bash
 models auth setup-token --provider anthropic
```

å¦‚æžœä½ åœ¨ä¸åŒçš„æœºå™¨ä¸Šç”Ÿæˆäº†ä»¤ç‰Œï¼Œè¯·ç²˜è´´å®ƒï¼š

```bash
 models auth paste-token --provider anthropic
```

### CLI è®¾ç½®

```bash
# åœ¨æ–°æ‰‹å¼•å¯¼æœŸé—´ç²˜è´´ setup-token
 onboard --auth-choice setup-token
```

### é…ç½®ç‰‡æ®µ

```json5
{
  agents: { defaults: { model: { primary: "anthropic/claude-opus-4-5" } } },
}
```

## æ³¨æ„äº‹é¡¹

- ä½¿ç”¨ `claude setup-token` ç”Ÿæˆ setup-token å¹¶ç²˜è´´ï¼Œæˆ–åœ¨ Gateway ç½‘å…³ä¸»æœºä¸Šè¿è¡Œ ` models auth setup-token`ã€‚
- å¦‚æžœä½ åœ¨ Claude è®¢é˜…ä¸Šçœ‹åˆ°"OAuth token refresh failed â€¦"ï¼Œè¯·ä½¿ç”¨ setup-token é‡æ–°è®¤è¯ã€‚å‚è§ [/gateway/troubleshooting#oauth-token-refresh-failed-anthropic-claude-subscription](/gateway/troubleshooting#oauth-token-refresh-failed-anthropic-claude-subscription)ã€‚
- è®¤è¯è¯¦æƒ… + é‡ç”¨è§„åˆ™åœ¨ [/concepts/oauth](/concepts/oauth)ã€‚

## æ•…éšœæŽ’é™¤

**401 é”™è¯¯/ä»¤ç‰Œçªç„¶å¤±æ•ˆ**

- Claude è®¢é˜…è®¤è¯å¯èƒ½è¿‡æœŸæˆ–è¢«æ’¤é”€ã€‚é‡æ–°è¿è¡Œ `claude setup-token`
  å¹¶å°†å…¶ç²˜è´´åˆ° **Gateway ç½‘å…³ä¸»æœº**ã€‚
- å¦‚æžœ Claude CLI ç™»å½•åœ¨ä¸åŒçš„æœºå™¨ä¸Šï¼Œåœ¨ Gateway ç½‘å…³ä¸»æœºä¸Šä½¿ç”¨
  ` models auth paste-token --provider anthropic`ã€‚

**No API key found for provider "anthropic"**

- è®¤è¯æ˜¯**æŒ‰æ™ºèƒ½ä½“**çš„ã€‚æ–°æ™ºèƒ½ä½“ä¸ä¼šç»§æ‰¿ä¸»æ™ºèƒ½ä½“çš„å¯†é’¥ã€‚
- ä¸ºè¯¥æ™ºèƒ½ä½“é‡æ–°è¿è¡Œæ–°æ‰‹å¼•å¯¼ï¼Œæˆ–åœ¨ Gateway ç½‘å…³ä¸»æœºä¸Šç²˜è´´ setup-token / API å¯†é’¥ï¼Œ
  ç„¶åŽä½¿ç”¨ ` models status` éªŒè¯ã€‚

**No credentials found for profile `anthropic:default`**

- è¿è¡Œ ` models status` æŸ¥çœ‹å“ªä¸ªè®¤è¯é…ç½®æ–‡ä»¶å¤„äºŽæ´»åŠ¨çŠ¶æ€ã€‚
- é‡æ–°è¿è¡Œæ–°æ‰‹å¼•å¯¼ï¼Œæˆ–ä¸ºè¯¥é…ç½®æ–‡ä»¶ç²˜è´´ setup-token / API å¯†é’¥ã€‚

**No available auth profile (all in cooldown/unavailable)**

- æ£€æŸ¥ ` models status --json` ä¸­çš„ `auth.unusableProfiles`ã€‚
- æ·»åŠ å¦ä¸€ä¸ª Anthropic é…ç½®æ–‡ä»¶æˆ–ç­‰å¾…å†·å´æœŸç»“æŸã€‚

æ›´å¤šä¿¡æ¯ï¼š[/gateway/troubleshooting](/gateway/troubleshooting) å’Œ [/help/faq](/help/faq)ã€‚

