---
read_when:
  - æ·»åŠ æˆ–æ›´æ”¹å¤–éƒ¨ CLI é›†æˆ
  - è°ƒè¯• RPC é€‚é…å™¨ï¼ˆsignal-cliã€imsgï¼‰
summary: å¤–éƒ¨ CLIï¼ˆsignal-cliã€imsgï¼‰çš„ RPC é€‚é…å™¨å’Œ Gateway ç½‘å…³æ¨¡å¼
title: RPC é€‚é…å™¨
x-i18n:
  generated_at: "2026-02-03T07:53:44Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: c04edc952390304a22a3a4763aca00a0311b38d390477ec0be5fe485ec257fa7
  source_path: reference/rpc.md
  workflow: 15
---

# RPC é€‚é…å™¨

 é€šè¿‡ JSON-RPC é›†æˆå¤–éƒ¨ CLIã€‚ç›®å‰ä½¿ç”¨ä¸¤ç§æ¨¡å¼ã€‚

## æ¨¡å¼ Aï¼šHTTP å®ˆæŠ¤è¿›ç¨‹ï¼ˆsignal-cliï¼‰

- `signal-cli` ä½œä¸ºå®ˆæŠ¤è¿›ç¨‹è¿è¡Œï¼Œé€šè¿‡ HTTP ä½¿ç”¨ JSON-RPCã€‚
- äº‹ä»¶æµæ˜¯ SSEï¼ˆ`/api/v1/events`ï¼‰ã€‚
- å¥åº·æŽ¢æµ‹ï¼š`/api/v1/check`ã€‚
- å½“ `channels.signal.autoStart=true` æ—¶ï¼Œ è´Ÿè´£ç”Ÿå‘½å‘¨æœŸç®¡ç†ã€‚

è®¾ç½®å’Œç«¯ç‚¹å‚è§ [Signal](/channels/signal)ã€‚

## æ¨¡å¼ Bï¼šstdio å­è¿›ç¨‹ï¼ˆimsgï¼‰

-  å°† `imsg rpc` ä½œä¸ºå­è¿›ç¨‹ç”Ÿæˆã€‚
- JSON-RPC æ˜¯é€šè¿‡ stdin/stdout çš„è¡Œåˆ†éš”æ ¼å¼ï¼ˆæ¯è¡Œä¸€ä¸ª JSON å¯¹è±¡ï¼‰ã€‚
- æ— éœ€ TCP ç«¯å£ï¼Œæ— éœ€å®ˆæŠ¤è¿›ç¨‹ã€‚

ä½¿ç”¨çš„æ ¸å¿ƒæ–¹æ³•ï¼š

- `watch.subscribe` â†’ é€šçŸ¥ï¼ˆ`method: "message"`ï¼‰
- `watch.unsubscribe`
- `send`
- `chats.list`ï¼ˆæŽ¢æµ‹/è¯Šæ–­ï¼‰

è®¾ç½®å’Œå¯»å€ï¼ˆé¦–é€‰ `chat_id`ï¼‰å‚è§ [iMessage](/channels/imessage)ã€‚

## é€‚é…å™¨æŒ‡å—

- Gateway ç½‘å…³è´Ÿè´£è¿›ç¨‹ï¼ˆå¯åŠ¨/åœæ­¢ä¸Žæä¾›å•†ç”Ÿå‘½å‘¨æœŸç»‘å®šï¼‰ã€‚
- ä¿æŒ RPC å®¢æˆ·ç«¯å¼¹æ€§ï¼šè¶…æ—¶ã€é€€å‡ºæ—¶é‡å¯ã€‚
- ä¼˜å…ˆä½¿ç”¨ç¨³å®š IDï¼ˆä¾‹å¦‚ `chat_id`ï¼‰è€Œéžæ˜¾ç¤ºå­—ç¬¦ä¸²ã€‚

