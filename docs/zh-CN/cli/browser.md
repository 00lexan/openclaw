---
read_when:
  - ä½ ä½¿ç”¨ ` browser` å¹¶æƒ³è¦å¸¸è§ä»»åŠ¡çš„ç¤ºä¾‹
  - ä½ æƒ³é€šè¿‡ node host æŽ§åˆ¶åœ¨å¦ä¸€å°æœºå™¨ä¸Šè¿è¡Œçš„æµè§ˆå™¨
  - ä½ æƒ³ä½¿ç”¨ Chrome æ‰©å±•ä¸­ç»§ï¼ˆé€šè¿‡å·¥å…·æ æŒ‰é’®é™„åŠ /åˆ†ç¦»ï¼‰
summary: "` browser` çš„ CLI å‚è€ƒï¼ˆé…ç½®æ–‡ä»¶ã€æ ‡ç­¾é¡µã€æ“ä½œã€æ‰©å±•ä¸­ç»§ï¼‰"
title: browser
x-i18n:
  generated_at: "2026-02-03T07:44:49Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: af35adfd68726fd519c704d046451effd330458c2b8305e713137fb07b2571fd
  source_path: cli/browser.md
  workflow: 15
---

# ` browser`

ç®¡ç†  çš„æµè§ˆå™¨æŽ§åˆ¶æœåŠ¡å™¨å¹¶è¿è¡Œæµè§ˆå™¨æ“ä½œï¼ˆæ ‡ç­¾é¡µã€å¿«ç…§ã€æˆªå›¾ã€å¯¼èˆªã€ç‚¹å‡»ã€è¾“å…¥ï¼‰ã€‚

ç›¸å…³ï¼š

- æµè§ˆå™¨å·¥å…· + APIï¼š[æµè§ˆå™¨å·¥å…·](/tools/browser)
- Chrome æ‰©å±•ä¸­ç»§ï¼š[Chrome æ‰©å±•](/tools/chrome-extension)

## é€šç”¨æ ‡å¿—

- `--url <gatewayWsUrl>`ï¼šGateway ç½‘å…³ WebSocket URLï¼ˆé»˜è®¤ä»Žé…ç½®èŽ·å–ï¼‰ã€‚
- `--token <token>`ï¼šGateway ç½‘å…³ä»¤ç‰Œï¼ˆå¦‚æžœéœ€è¦ï¼‰ã€‚
- `--timeout <ms>`ï¼šè¯·æ±‚è¶…æ—¶ï¼ˆæ¯«ç§’ï¼‰ã€‚
- `--browser-profile <name>`ï¼šé€‰æ‹©æµè§ˆå™¨é…ç½®æ–‡ä»¶ï¼ˆé»˜è®¤ä»Žé…ç½®èŽ·å–ï¼‰ã€‚
- `--json`ï¼šæœºå™¨å¯è¯»è¾“å‡ºï¼ˆåœ¨æ”¯æŒçš„åœ°æ–¹ï¼‰ã€‚

## å¿«é€Ÿå¼€å§‹ï¼ˆæœ¬åœ°ï¼‰

```bash
 browser --browser-profile chrome tabs
 browser --browser-profile  start
 browser --browser-profile  open https://example.com
 browser --browser-profile  snapshot
```

## é…ç½®æ–‡ä»¶

é…ç½®æ–‡ä»¶æ˜¯å‘½åçš„æµè§ˆå™¨è·¯ç”±é…ç½®ã€‚å®žé™…ä¸Šï¼š

- ``ï¼šå¯åŠ¨/é™„åŠ åˆ°ä¸“ç”¨çš„  ç®¡ç†çš„ Chrome å®žä¾‹ï¼ˆéš”ç¦»çš„ç”¨æˆ·æ•°æ®ç›®å½•ï¼‰ã€‚
- `chrome`ï¼šé€šè¿‡ Chrome æ‰©å±•ä¸­ç»§æŽ§åˆ¶ä½ çŽ°æœ‰çš„ Chrome æ ‡ç­¾é¡µã€‚

```bash
 browser profiles
 browser create-profile --name work --color "#FF5A36"
 browser delete-profile --name work
```

ä½¿ç”¨ç‰¹å®šé…ç½®æ–‡ä»¶ï¼š

```bash
 browser --browser-profile work tabs
```

## æ ‡ç­¾é¡µ

```bash
 browser tabs
 browser open https://docs..ai
 browser focus <targetId>
 browser close <targetId>
```

## å¿«ç…§ / æˆªå›¾ / æ“ä½œ

å¿«ç…§ï¼š

```bash
 browser snapshot
```

æˆªå›¾ï¼š

```bash
 browser screenshot
```

å¯¼èˆª/ç‚¹å‡»/è¾“å…¥ï¼ˆåŸºäºŽ ref çš„ UI è‡ªåŠ¨åŒ–ï¼‰ï¼š

```bash
 browser navigate https://example.com
 browser click <ref>
 browser type <ref> "hello"
```

## Chrome æ‰©å±•ä¸­ç»§ï¼ˆé€šè¿‡å·¥å…·æ æŒ‰é’®é™„åŠ ï¼‰

æ­¤æ¨¡å¼è®©æ™ºèƒ½ä½“æŽ§åˆ¶ä½ æ‰‹åŠ¨é™„åŠ çš„çŽ°æœ‰ Chrome æ ‡ç­¾é¡µï¼ˆä¸ä¼šè‡ªåŠ¨é™„åŠ ï¼‰ã€‚

å°†æœªæ‰“åŒ…çš„æ‰©å±•å®‰è£…åˆ°ç¨³å®šè·¯å¾„ï¼š

```bash
 browser extension install
 browser extension path
```

ç„¶åŽ Chrome â†’ `chrome://extensions` â†’ å¯ç”¨"å¼€å‘è€…æ¨¡å¼" â†’ "åŠ è½½å·²è§£åŽ‹çš„æ‰©å±•ç¨‹åº" â†’ é€‰æ‹©æ‰“å°çš„æ–‡ä»¶å¤¹ã€‚

å®Œæ•´æŒ‡å—ï¼š[Chrome æ‰©å±•](/tools/chrome-extension)

## è¿œç¨‹æµè§ˆå™¨æŽ§åˆ¶ï¼ˆnode host ä»£ç†ï¼‰

å¦‚æžœ Gateway ç½‘å…³ä¸Žæµè§ˆå™¨è¿è¡Œåœ¨ä¸åŒçš„æœºå™¨ä¸Šï¼Œåœ¨æœ‰ Chrome/Brave/Edge/Chromium çš„æœºå™¨ä¸Šè¿è¡Œ **node host**ã€‚Gateway ç½‘å…³ä¼šå°†æµè§ˆå™¨æ“ä½œä»£ç†åˆ°è¯¥èŠ‚ç‚¹ï¼ˆæ— éœ€å•ç‹¬çš„æµè§ˆå™¨æŽ§åˆ¶æœåŠ¡å™¨ï¼‰ã€‚

ä½¿ç”¨ `gateway.nodes.browser.mode` æŽ§åˆ¶è‡ªåŠ¨è·¯ç”±ï¼Œä½¿ç”¨ `gateway.nodes.browser.node` åœ¨è¿žæŽ¥å¤šä¸ªèŠ‚ç‚¹æ—¶å›ºå®šç‰¹å®šèŠ‚ç‚¹ã€‚

å®‰å…¨ + è¿œç¨‹è®¾ç½®ï¼š[æµè§ˆå™¨å·¥å…·](/tools/browser)ã€[è¿œç¨‹è®¿é—®](/gateway/remote)ã€[Tailscale](/gateway/tailscale)ã€[å®‰å…¨](/gateway/security)

