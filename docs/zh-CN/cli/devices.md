---
read_when:
  - ä½ æ­£åœ¨æ‰¹å‡†è®¾å¤‡é…å¯¹è¯·æ±‚
  - ä½ éœ€è¦è½®æ¢æˆ–æ’¤é”€è®¾å¤‡ token
summary: "` devices` çš„ CLI å‚è€ƒï¼ˆè®¾å¤‡é…å¯¹ + token è½®æ¢/æ’¤é”€ï¼‰"
title: devices
x-i18n:
  generated_at: "2026-02-03T07:44:52Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 52f903817d2886c1dc29b85d30168d1edff7944bd120a1e139159c9d99a1f517
  source_path: cli/devices.md
  workflow: 15
---

# ` devices`

ç®¡ç†è®¾å¤‡é…å¯¹è¯·æ±‚å’Œè®¾å¤‡èŒƒå›´çš„ tokenã€‚

## å‘½ä»¤

### ` devices list`

åˆ—å‡ºå¾…å¤„ç†çš„é…å¯¹è¯·æ±‚å’Œå·²é…å¯¹çš„è®¾å¤‡ã€‚

```
 devices list
 devices list --json
```

### ` devices approve <requestId>`

æ‰¹å‡†å¾…å¤„ç†çš„è®¾å¤‡é…å¯¹è¯·æ±‚ã€‚

```
 devices approve <requestId>
```

### ` devices reject <requestId>`

æ‹’ç»å¾…å¤„ç†çš„è®¾å¤‡é…å¯¹è¯·æ±‚ã€‚

```
 devices reject <requestId>
```

### ` devices rotate --device <id> --role <role> [--scope <scope...>]`

ä¸ºç‰¹å®šè§’è‰²è½®æ¢è®¾å¤‡ tokenï¼ˆå¯é€‰æ›´æ–° scopeï¼‰ã€‚

```
 devices rotate --device <deviceId> --role operator --scope operator.read --scope operator.write
```

### ` devices revoke --device <id> --role <role>`

ä¸ºç‰¹å®šè§’è‰²æ’¤é”€è®¾å¤‡ tokenã€‚

```
 devices revoke --device <deviceId> --role node
```

## é€šç”¨é€‰é¡¹

- `--url <url>`ï¼šGateway ç½‘å…³ WebSocket URLï¼ˆé…ç½®åŽé»˜è®¤ä½¿ç”¨ `gateway.remote.url`ï¼‰ã€‚
- `--token <token>`ï¼šGateway ç½‘å…³ tokenï¼ˆå¦‚éœ€è¦ï¼‰ã€‚
- `--password <password>`ï¼šGateway ç½‘å…³å¯†ç ï¼ˆå¯†ç è®¤è¯ï¼‰ã€‚
- `--timeout <ms>`ï¼šRPC è¶…æ—¶ã€‚
- `--json`ï¼šJSON è¾“å‡ºï¼ˆæŽ¨èç”¨äºŽè„šæœ¬ï¼‰ã€‚

## æ³¨æ„äº‹é¡¹

- Token è½®æ¢ä¼šè¿”å›žæ–° tokenï¼ˆæ•æ„Ÿä¿¡æ¯ï¼‰ã€‚è¯·åƒå¯¹å¾…å¯†é’¥ä¸€æ ·å¯¹å¾…å®ƒã€‚
- è¿™äº›å‘½ä»¤éœ€è¦ `operator.pairing`ï¼ˆæˆ– `operator.admin`ï¼‰scopeã€‚


