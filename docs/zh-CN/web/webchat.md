---
read_when:
  - è°ƒè¯•æˆ–é…ç½® WebChat è®¿é—®
summary: ç”¨äºŽèŠå¤© UI çš„ loopback WebChat é™æ€ä¸»æœºå’Œ Gateway ç½‘å…³ WS ä½¿ç”¨
title: WebChat
x-i18n:
  generated_at: "2026-02-03T10:13:28Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: b5ee2b462c8c979ac27f80dea0cf12cf62b3c799cf8fd0a7721901e26efeb1a0
  source_path: web/webchat.md
  workflow: 15
---

# WebChatï¼ˆGateway ç½‘å…³ WebSocket UIï¼‰

çŠ¶æ€ï¼šmacOS/iOS SwiftUI èŠå¤© UI ç›´æŽ¥ä¸Ž Gateway ç½‘å…³ WebSocket é€šä¿¡ã€‚

## å®ƒæ˜¯ä»€ä¹ˆ

- Gateway ç½‘å…³çš„åŽŸç”ŸèŠå¤© UIï¼ˆæ— åµŒå…¥å¼æµè§ˆå™¨ï¼Œæ— æœ¬åœ°é™æ€æœåŠ¡å™¨ï¼‰ã€‚
- ä½¿ç”¨ä¸Žå…¶ä»–æ¸ é“ç›¸åŒçš„ä¼šè¯å’Œè·¯ç”±è§„åˆ™ã€‚
- ç¡®å®šæ€§è·¯ç”±ï¼šå›žå¤å§‹ç»ˆè¿”å›žåˆ° WebChatã€‚

## å¿«é€Ÿå¼€å§‹

1. å¯åŠ¨ Gateway ç½‘å…³ã€‚
2. æ‰“å¼€ WebChat UIï¼ˆmacOS/iOS åº”ç”¨ï¼‰æˆ–æŽ§åˆ¶ UI èŠå¤©æ ‡ç­¾é¡µã€‚
3. ç¡®ä¿å·²é…ç½® Gateway ç½‘å…³è®¤è¯ï¼ˆé»˜è®¤éœ€è¦ï¼Œå³ä½¿åœ¨ loopback ä¸Šï¼‰ã€‚

## å·¥ä½œåŽŸç†ï¼ˆè¡Œä¸ºï¼‰

- UI è¿žæŽ¥åˆ° Gateway ç½‘å…³ WebSocket å¹¶ä½¿ç”¨ `chat.history`ã€`chat.send` å’Œ `chat.inject`ã€‚
- `chat.inject` ç›´æŽ¥å°†åŠ©æ‰‹æ³¨é‡Šè¿½åŠ åˆ°è½¬å½•å¹¶å¹¿æ’­åˆ° UIï¼ˆæ— æ™ºèƒ½ä½“è¿è¡Œï¼‰ã€‚
- åŽ†å²è®°å½•å§‹ç»ˆä»Ž Gateway ç½‘å…³èŽ·å–ï¼ˆæ— æœ¬åœ°æ–‡ä»¶ç›‘å¬ï¼‰ã€‚
- å¦‚æžœ Gateway ç½‘å…³ä¸å¯è¾¾ï¼ŒWebChat ä¸ºåªè¯»æ¨¡å¼ã€‚

## è¿œç¨‹ä½¿ç”¨

- è¿œç¨‹æ¨¡å¼é€šè¿‡ SSH/Tailscale éš§é“ä¼ è¾“ Gateway ç½‘å…³ WebSocketã€‚
- ä½ ä¸éœ€è¦è¿è¡Œå•ç‹¬çš„ WebChat æœåŠ¡å™¨ã€‚

## é…ç½®å‚è€ƒï¼ˆWebChatï¼‰

å®Œæ•´é…ç½®ï¼š[é…ç½®](/gateway/configuration)

æ¸ é“é€‰é¡¹ï¼š

- æ²¡æœ‰ä¸“ç”¨çš„ `webchat.*` å—ã€‚WebChat ä½¿ç”¨ä¸‹é¢çš„ Gateway ç½‘å…³ç«¯ç‚¹ + è®¤è¯è®¾ç½®ã€‚

ç›¸å…³çš„å…¨å±€é€‰é¡¹ï¼š

- `gateway.port`ã€`gateway.bind`ï¼šWebSocket ä¸»æœº/ç«¯å£ã€‚
- `gateway.auth.mode`ã€`gateway.auth.token`ã€`gateway.auth.password`ï¼šWebSocket è®¤è¯ã€‚
- `gateway.remote.url`ã€`gateway.remote.token`ã€`gateway.remote.password`ï¼šè¿œç¨‹ Gateway ç½‘å…³ç›®æ ‡ã€‚
- `session.*`ï¼šä¼šè¯å­˜å‚¨å’Œä¸»é”®é»˜è®¤å€¼ã€‚


