---
read_when:
  - è°ƒè¯• macOS WebChat è§†å›¾æˆ– loopback ç«¯å£
summary: macOS åº”ç”¨å¦‚ä½•åµŒå…¥ Gateway ç½‘å…³ WebChat ä»¥åŠå¦‚ä½•è°ƒè¯•
title: WebChat
x-i18n:
  generated_at: "2026-02-03T07:52:46Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 04ff448758e530098e2004625f33e42fc3dbe31137cd3beec2d55590e507de08
  source_path: platforms/mac/webchat.md
  workflow: 15
---

# WebChatï¼ˆmacOS åº”ç”¨ï¼‰

macOS èœå•æ åº”ç”¨å°† WebChat UI åµŒå…¥ä¸ºåŽŸç”Ÿ SwiftUI è§†å›¾ã€‚å®ƒè¿žæŽ¥åˆ° Gateway ç½‘å…³ï¼Œé»˜è®¤ä½¿ç”¨æ‰€é€‰æ™ºèƒ½ä½“çš„**ä¸»ä¼šè¯**ï¼ˆå¸¦æœ‰ä¼šè¯åˆ‡æ¢å™¨ç”¨äºŽå…¶ä»–ä¼šè¯ï¼‰ã€‚

- **æœ¬åœ°æ¨¡å¼**ï¼šç›´æŽ¥è¿žæŽ¥åˆ°æœ¬åœ° Gateway ç½‘å…³ WebSocketã€‚
- **è¿œç¨‹æ¨¡å¼**ï¼šé€šè¿‡ SSH è½¬å‘ Gateway ç½‘å…³æŽ§åˆ¶ç«¯å£ï¼Œå¹¶ä½¿ç”¨è¯¥éš§é“ä½œä¸ºæ•°æ®å¹³é¢ã€‚

## å¯åŠ¨å’Œè°ƒè¯•

- æ‰‹åŠ¨ï¼šLobster èœå• â†’ "Open Chat"ã€‚
- æµ‹è¯•æ—¶è‡ªåŠ¨æ‰“å¼€ï¼š
  ```bash
  dist/.app/Contents/MacOS/ --webchat
  ```
- æ—¥å¿—ï¼š`./scripts/clawlog.sh`ï¼ˆå­ç³»ç»Ÿ `bot.molt`ï¼Œç±»åˆ« `WebChatSwiftUI`ï¼‰ã€‚

## å·¥ä½œåŽŸç†

- æ•°æ®å¹³é¢ï¼šGateway ç½‘å…³ WS æ–¹æ³• `chat.history`ã€`chat.send`ã€`chat.abort`ã€`chat.inject` å’Œäº‹ä»¶ `chat`ã€`agent`ã€`presence`ã€`tick`ã€`health`ã€‚
- ä¼šè¯ï¼šé»˜è®¤ä¸ºä¸»ä¼šè¯ï¼ˆ`main`ï¼Œæˆ–å½“èŒƒå›´ä¸ºå…¨å±€æ—¶ä¸º `global`ï¼‰ã€‚UI å¯ä»¥åœ¨ä¼šè¯ä¹‹é—´åˆ‡æ¢ã€‚
- æ–°æ‰‹å¼•å¯¼ä½¿ç”¨ä¸“ç”¨ä¼šè¯ï¼Œä»¥å°†é¦–æ¬¡è¿è¡Œè®¾ç½®åˆ†å¼€ã€‚

## å®‰å…¨é¢

- è¿œç¨‹æ¨¡å¼ä»…é€šè¿‡ SSH è½¬å‘ Gateway ç½‘å…³ WebSocket æŽ§åˆ¶ç«¯å£ã€‚

## å·²çŸ¥é™åˆ¶

- UI é’ˆå¯¹èŠå¤©ä¼šè¯ä¼˜åŒ–ï¼ˆä¸æ˜¯å®Œæ•´çš„æµè§ˆå™¨æ²™ç®±ï¼‰ã€‚

