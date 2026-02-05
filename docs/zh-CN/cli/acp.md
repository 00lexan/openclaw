---
read_when:
  - è®¾ç½®åŸºäºŽ ACP çš„ IDE é›†æˆ
  - è°ƒè¯•åˆ° Gateway ç½‘å…³çš„ ACP ä¼šè¯è·¯ç”±
summary: è¿è¡Œç”¨äºŽ IDE é›†æˆçš„ ACP æ¡¥æŽ¥å™¨
title: acp
x-i18n:
  generated_at: "2026-02-03T07:44:38Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 0c09844297da250bc1a558423e7e534d6b6be9045de12d797c07ecd64a0c63ed
  source_path: cli/acp.md
  workflow: 15
---

# acp

è¿è¡Œä¸Ž  Gateway ç½‘å…³é€šä¿¡çš„ ACPï¼ˆAgent Client Protocolï¼‰æ¡¥æŽ¥å™¨ã€‚

æ­¤å‘½ä»¤é€šè¿‡ stdio ä½¿ç”¨ ACP åè®®ä¸Ž IDE é€šä¿¡ï¼Œå¹¶é€šè¿‡ WebSocket å°†æç¤ºè½¬å‘åˆ° Gateway ç½‘å…³ã€‚å®ƒå°† ACP ä¼šè¯æ˜ å°„åˆ° Gateway ç½‘å…³ä¼šè¯é”®ã€‚

## ç”¨æ³•

```bash
 acp

# Remote Gateway
 acp --url wss://gateway-host:18789 --token <token>

# Attach to an existing session key
 acp --session agent:main:main

# Attach by label (must already exist)
 acp --session-label "support inbox"

# Reset the session key before the first prompt
 acp --session agent:main:main --reset-session
```

## ACP å®¢æˆ·ç«¯ï¼ˆè°ƒè¯•ï¼‰

ä½¿ç”¨å†…ç½® ACP å®¢æˆ·ç«¯åœ¨æ²¡æœ‰ IDE çš„æƒ…å†µä¸‹æ£€æŸ¥æ¡¥æŽ¥å™¨çš„å®‰è£…å®Œæ•´æ€§ã€‚
å®ƒä¼šå¯åŠ¨ ACP æ¡¥æŽ¥å™¨å¹¶è®©ä½ äº¤äº’å¼è¾“å…¥æç¤ºã€‚

```bash
 acp client

# Point the spawned bridge at a remote Gateway
 acp client --server-args --url wss://gateway-host:18789 --token <token>

# Override the server command (default: )
 acp client --server "node" --server-args .mjs acp --url ws://127.0.0.1:19001
```

## å¦‚ä½•ä½¿ç”¨

å½“ IDEï¼ˆæˆ–å…¶ä»–å®¢æˆ·ç«¯ï¼‰ä½¿ç”¨ Agent Client Protocol å¹¶ä¸”ä½ å¸Œæœ›å®ƒé©±åŠ¨  Gateway ç½‘å…³ä¼šè¯æ—¶ï¼Œè¯·ä½¿ç”¨ ACPã€‚

1. ç¡®ä¿ Gateway ç½‘å…³æ­£åœ¨è¿è¡Œï¼ˆæœ¬åœ°æˆ–è¿œç¨‹ï¼‰ã€‚
2. é…ç½® Gateway ç½‘å…³ç›®æ ‡ï¼ˆé…ç½®æˆ–æ ‡å¿—ï¼‰ã€‚
3. å°†ä½ çš„ IDE é…ç½®ä¸ºé€šè¿‡ stdio è¿è¡Œ ` acp`ã€‚

ç¤ºä¾‹é…ç½®ï¼ˆæŒä¹…åŒ–ï¼‰ï¼š

```bash
 config set gateway.remote.url wss://gateway-host:18789
 config set gateway.remote.token <token>
```

ç¤ºä¾‹ç›´æŽ¥è¿è¡Œï¼ˆä¸å†™å…¥é…ç½®ï¼‰ï¼š

```bash
 acp --url wss://gateway-host:18789 --token <token>
```

## é€‰æ‹©æ™ºèƒ½ä½“

ACP ä¸ç›´æŽ¥é€‰æ‹©æ™ºèƒ½ä½“ã€‚å®ƒé€šè¿‡ Gateway ç½‘å…³ä¼šè¯é”®è¿›è¡Œè·¯ç”±ã€‚

ä½¿ç”¨æ™ºèƒ½ä½“ä½œç”¨åŸŸçš„ä¼šè¯é”®æ¥å®šä½ç‰¹å®šæ™ºèƒ½ä½“ï¼š

```bash
 acp --session agent:main:main
 acp --session agent:design:main
 acp --session agent:qa:bug-123
```

æ¯ä¸ª ACP ä¼šè¯æ˜ å°„åˆ°å•ä¸ª Gateway ç½‘å…³ä¼šè¯é”®ã€‚ä¸€ä¸ªæ™ºèƒ½ä½“å¯ä»¥æœ‰å¤šä¸ªä¼šè¯ï¼›é™¤éžä½ è¦†ç›–é”®æˆ–æ ‡ç­¾ï¼Œå¦åˆ™ ACP é»˜è®¤ä½¿ç”¨éš”ç¦»çš„ `acp:<uuid>` ä¼šè¯ã€‚

## Zed ç¼–è¾‘å™¨è®¾ç½®

åœ¨ `~/.config/zed/settings.json` ä¸­æ·»åŠ è‡ªå®šä¹‰ ACP æ™ºèƒ½ä½“ï¼ˆæˆ–ä½¿ç”¨ Zed çš„è®¾ç½®ç•Œé¢ï¼‰ï¼š

```json
{
  "agent_servers": {
    " ACP": {
      "type": "custom",
      "command": "",
      "args": ["acp"],
      "env": {}
    }
  }
}
```

è¦å®šä½ç‰¹å®šçš„ Gateway ç½‘å…³æˆ–æ™ºèƒ½ä½“ï¼š

```json
{
  "agent_servers": {
    " ACP": {
      "type": "custom",
      "command": "",
      "args": [
        "acp",
        "--url",
        "wss://gateway-host:18789",
        "--token",
        "<token>",
        "--session",
        "agent:design:main"
      ],
      "env": {}
    }
  }
}
```

åœ¨ Zed ä¸­ï¼Œæ‰“å¼€ Agent é¢æ¿å¹¶é€‰æ‹©" ACP"æ¥å¼€å§‹ä¸€ä¸ªä¼šè¯ã€‚

## ä¼šè¯æ˜ å°„

é»˜è®¤æƒ…å†µä¸‹ï¼ŒACP ä¼šè¯èŽ·å¾—ä¸€ä¸ªå¸¦æœ‰ `acp:` å‰ç¼€çš„éš”ç¦» Gateway ç½‘å…³ä¼šè¯é”®ã€‚
è¦é‡ç”¨å·²çŸ¥ä¼šè¯ï¼Œè¯·ä¼ é€’ä¼šè¯é”®æˆ–æ ‡ç­¾ï¼š

- `--session <key>`ï¼šä½¿ç”¨ç‰¹å®šçš„ Gateway ç½‘å…³ä¼šè¯é”®ã€‚
- `--session-label <label>`ï¼šé€šè¿‡æ ‡ç­¾è§£æžçŽ°æœ‰ä¼šè¯ã€‚
- `--reset-session`ï¼šä¸ºè¯¥é”®ç”Ÿæˆæ–°çš„ä¼šè¯ IDï¼ˆç›¸åŒé”®ï¼Œæ–°å¯¹è¯è®°å½•ï¼‰ã€‚

å¦‚æžœä½ çš„ ACP å®¢æˆ·ç«¯æ”¯æŒå…ƒæ•°æ®ï¼Œä½ å¯ä»¥æŒ‰ä¼šè¯è¦†ç›–ï¼š

```json
{
  "_meta": {
    "sessionKey": "agent:main:main",
    "sessionLabel": "support inbox",
    "resetSession": true
  }
}
```

åœ¨ [/concepts/session](/concepts/session) äº†è§£æ›´å¤šå…³äºŽä¼šè¯é”®çš„ä¿¡æ¯ã€‚

## é€‰é¡¹

- `--url <url>`ï¼šGateway ç½‘å…³ WebSocket URLï¼ˆé…ç½®åŽé»˜è®¤ä¸º gateway.remote.urlï¼‰ã€‚
- `--token <token>`ï¼šGateway ç½‘å…³è®¤è¯ä»¤ç‰Œã€‚
- `--password <password>`ï¼šGateway ç½‘å…³è®¤è¯å¯†ç ã€‚
- `--session <key>`ï¼šé»˜è®¤ä¼šè¯é”®ã€‚
- `--session-label <label>`ï¼šè¦è§£æžçš„é»˜è®¤ä¼šè¯æ ‡ç­¾ã€‚
- `--require-existing`ï¼šå¦‚æžœä¼šè¯é”®/æ ‡ç­¾ä¸å­˜åœ¨åˆ™å¤±è´¥ã€‚
- `--reset-session`ï¼šåœ¨é¦–æ¬¡ä½¿ç”¨å‰é‡ç½®ä¼šè¯é”®ã€‚
- `--no-prefix-cwd`ï¼šä¸åœ¨æç¤ºå‰æ·»åŠ å·¥ä½œç›®å½•å‰ç¼€ã€‚
- `--verbose, -v`ï¼šå‘ stderr è¾“å‡ºè¯¦ç»†æ—¥å¿—ã€‚

### `acp client` é€‰é¡¹

- `--cwd <dir>`ï¼šACP ä¼šè¯çš„å·¥ä½œç›®å½•ã€‚
- `--server <command>`ï¼šACP æœåŠ¡å™¨å‘½ä»¤ï¼ˆé»˜è®¤ï¼š``ï¼‰ã€‚
- `--server-args <args...>`ï¼šä¼ é€’ç»™ ACP æœåŠ¡å™¨çš„é¢å¤–å‚æ•°ã€‚
- `--server-verbose`ï¼šå¯ç”¨ ACP æœåŠ¡å™¨çš„è¯¦ç»†æ—¥å¿—ã€‚
- `--verbose, -v`ï¼šè¯¦ç»†å®¢æˆ·ç«¯æ—¥å¿—ã€‚

