---
read_when:
  - ç¼–è¾‘ IPC åˆçº¦æˆ–èœå•æ åº”ç”¨ IPC
summary:  åº”ç”¨çš„ macOS IPC æž¶æž„ã€Gateway ç½‘å…³èŠ‚ç‚¹ä¼ è¾“å’Œ PeekabooBridge
title: macOS IPC
x-i18n:
  generated_at: "2026-02-03T07:52:57Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: d0211c334a4a59b71afb29dd7b024778172e529fa618985632d3d11d795ced92
  source_path: platforms/mac/xpc.md
  workflow: 15
---

#  macOS IPC æž¶æž„

**å½“å‰æ¨¡åž‹ï¼š** ä¸€ä¸ªæœ¬åœ° Unix å¥—æŽ¥å­—å°†**èŠ‚ç‚¹ä¸»æœºæœåŠ¡**è¿žæŽ¥åˆ° **macOS åº”ç”¨**ï¼Œç”¨äºŽ exec å®¡æ‰¹ + `system.run`ã€‚å­˜åœ¨ä¸€ä¸ª `-mac` è°ƒè¯• CLI ç”¨äºŽå‘çŽ°/è¿žæŽ¥æ£€æŸ¥ï¼›æ™ºèƒ½ä½“æ“ä½œä»é€šè¿‡ Gateway ç½‘å…³ WebSocket å’Œ `node.invoke` æµè½¬ã€‚UI è‡ªåŠ¨åŒ–ä½¿ç”¨ PeekabooBridgeã€‚

## ç›®æ ‡

- å•ä¸ª GUI åº”ç”¨å®žä¾‹æ‹¥æœ‰æ‰€æœ‰é¢å‘ TCC çš„å·¥ä½œï¼ˆé€šçŸ¥ã€å±å¹•å½•åˆ¶ã€éº¦å…‹é£Žã€è¯­éŸ³ã€AppleScriptï¼‰ã€‚
- å°åž‹è‡ªåŠ¨åŒ–æŽ¥å£ï¼šGateway ç½‘å…³ + èŠ‚ç‚¹å‘½ä»¤ï¼ŒåŠ ä¸Šç”¨äºŽ UI è‡ªåŠ¨åŒ–çš„ PeekabooBridgeã€‚
- å¯é¢„æµ‹çš„æƒé™ï¼šå§‹ç»ˆæ˜¯åŒä¸€ä¸ªç­¾åçš„ bundle IDï¼Œç”± launchd å¯åŠ¨ï¼Œå› æ­¤ TCC æŽˆæƒä¿æŒæœ‰æ•ˆã€‚

## å·¥ä½œåŽŸç†

### Gateway ç½‘å…³ + èŠ‚ç‚¹ä¼ è¾“

- åº”ç”¨è¿è¡Œ Gateway ç½‘å…³ï¼ˆæœ¬åœ°æ¨¡å¼ï¼‰å¹¶ä½œä¸ºèŠ‚ç‚¹è¿žæŽ¥åˆ°å®ƒã€‚
- æ™ºèƒ½ä½“æ“ä½œé€šè¿‡ `node.invoke` æ‰§è¡Œï¼ˆä¾‹å¦‚ `system.run`ã€`system.notify`ã€`canvas.*`ï¼‰ã€‚

### èŠ‚ç‚¹æœåŠ¡ + åº”ç”¨ IPC

- ä¸€ä¸ªæ— å¤´èŠ‚ç‚¹ä¸»æœºæœåŠ¡è¿žæŽ¥åˆ° Gateway ç½‘å…³ WebSocketã€‚
- `system.run` è¯·æ±‚é€šè¿‡æœ¬åœ° Unix å¥—æŽ¥å­—è½¬å‘åˆ° macOS åº”ç”¨ã€‚
- åº”ç”¨åœ¨ UI ä¸Šä¸‹æ–‡ä¸­æ‰§è¡Œ execï¼Œå¿…è¦æ—¶æç¤ºï¼Œå¹¶è¿”å›žè¾“å‡ºã€‚

å›¾ç¤ºï¼ˆSCIï¼‰ï¼š

```
Agent -> Gateway -> Node Service (WS)
                      |  IPC (UDS + token + HMAC + TTL)
                      v
                  Mac App (UI + TCC + system.run)
```

### PeekabooBridgeï¼ˆUI è‡ªåŠ¨åŒ–ï¼‰

- UI è‡ªåŠ¨åŒ–ä½¿ç”¨åä¸º `bridge.sock` çš„å•ç‹¬ UNIX å¥—æŽ¥å­—å’Œ PeekabooBridge JSON åè®®ã€‚
- ä¸»æœºä¼˜å…ˆé¡ºåºï¼ˆå®¢æˆ·ç«¯ä¾§ï¼‰ï¼šPeekaboo.app â†’ Claude.app â†’ .app â†’ æœ¬åœ°æ‰§è¡Œã€‚
- å®‰å…¨æ€§ï¼šæ¡¥æŽ¥ä¸»æœºéœ€è¦å…è®¸çš„ TeamIDï¼›ä»… DEBUG çš„åŒ UID é€ƒé€¸é€šé“ç”± `PEEKABOO_ALLOW_UNSIGNED_SOCKET_CLIENTS=1` ä¿æŠ¤ï¼ˆPeekaboo çº¦å®šï¼‰ã€‚
- å‚è§ï¼š[PeekabooBridge ç”¨æ³•](/platforms/mac/peekaboo)äº†è§£è¯¦æƒ…ã€‚

## æ“ä½œæµç¨‹

- é‡å¯/é‡å»ºï¼š`SIGN_IDENTITY="Apple Development: <Developer Name> (<TEAMID>)" scripts/restart-mac.sh`
  - ç»ˆæ­¢çŽ°æœ‰å®žä¾‹
  - Swift æž„å»º + æ‰“åŒ…
  - å†™å…¥/å¼•å¯¼/å¯åŠ¨ LaunchAgent
- å•å®žä¾‹ï¼šå¦‚æžœå…·æœ‰ç›¸åŒ bundle ID çš„å¦ä¸€ä¸ªå®žä¾‹æ­£åœ¨è¿è¡Œï¼Œåº”ç”¨ä¼šæå‰é€€å‡ºã€‚

## åŠ å›ºæ³¨æ„äº‹é¡¹

- ä¼˜å…ˆè¦æ±‚æ‰€æœ‰ç‰¹æƒæŽ¥å£çš„ TeamID åŒ¹é…ã€‚
- PeekabooBridgeï¼š`PEEKABOO_ALLOW_UNSIGNED_SOCKET_CLIENTS=1`ï¼ˆä»… DEBUGï¼‰å¯èƒ½å…è®¸åŒ UID è°ƒç”¨è€…ç”¨äºŽæœ¬åœ°å¼€å‘ã€‚
- æ‰€æœ‰é€šä¿¡ä»…ä¿æŒæœ¬åœ°ï¼›ä¸æš´éœ²ç½‘ç»œå¥—æŽ¥å­—ã€‚
- TCC æç¤ºä»…æºè‡ª GUI åº”ç”¨åŒ…ï¼›åœ¨é‡å»ºæ—¶ä¿æŒç­¾åçš„ bundle ID ç¨³å®šã€‚
- IPC åŠ å›ºï¼šå¥—æŽ¥å­—æ¨¡å¼ `0600`ã€ä»¤ç‰Œã€å¯¹ç­‰ UID æ£€æŸ¥ã€HMAC è´¨è¯¢/å“åº”ã€çŸ­ TTLã€‚


