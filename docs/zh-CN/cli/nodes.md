---
read_when:
  - ä½ æ­£åœ¨ç®¡ç†å·²é…å¯¹çš„èŠ‚ç‚¹ï¼ˆæ‘„åƒå¤´ã€å±å¹•ã€ç”»å¸ƒï¼‰
  - ä½ éœ€è¦æ‰¹å‡†è¯·æ±‚æˆ–è°ƒç”¨èŠ‚ç‚¹å‘½ä»¤
summary: "` nodes` çš„ CLI å‚è€ƒï¼ˆåˆ—è¡¨/çŠ¶æ€/æ‰¹å‡†/è°ƒç”¨ï¼Œæ‘„åƒå¤´/ç”»å¸ƒ/å±å¹•ï¼‰"
title: nodes
x-i18n:
  generated_at: "2026-02-03T10:04:26Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 23da6efdd659a82dbbc4afd18eb4ab1020a2892f69c28d610f912c8a799f734c
  source_path: cli/nodes.md
  workflow: 15
---

# ` nodes`

ç®¡ç†å·²é…å¯¹çš„èŠ‚ç‚¹ï¼ˆè®¾å¤‡ï¼‰å¹¶è°ƒç”¨èŠ‚ç‚¹åŠŸèƒ½ã€‚

ç›¸å…³å†…å®¹ï¼š

- èŠ‚ç‚¹æ¦‚è¿°ï¼š[èŠ‚ç‚¹](/nodes)
- æ‘„åƒå¤´ï¼š[æ‘„åƒå¤´èŠ‚ç‚¹](/nodes/camera)
- å›¾åƒï¼š[å›¾åƒèŠ‚ç‚¹](/nodes/images)

é€šç”¨é€‰é¡¹ï¼š

- `--url`ã€`--token`ã€`--timeout`ã€`--json`

## å¸¸ç”¨å‘½ä»¤

```bash
 nodes list
 nodes list --connected
 nodes list --last-connected 24h
 nodes pending
 nodes approve <requestId>
 nodes status
 nodes status --connected
 nodes status --last-connected 24h
```

`nodes list` æ‰“å°å¾…å¤„ç†/å·²é…å¯¹è¡¨æ ¼ã€‚å·²é…å¯¹è¡ŒåŒ…å«æœ€è¿‘è¿žæŽ¥æ—¶é•¿ï¼ˆLast Connectï¼‰ã€‚
ä½¿ç”¨ `--connected` ä»…æ˜¾ç¤ºå½“å‰å·²è¿žæŽ¥çš„èŠ‚ç‚¹ã€‚ä½¿ç”¨ `--last-connected <duration>`
ç­›é€‰åœ¨æŒ‡å®šæ—¶é—´æ®µå†…è¿žæŽ¥è¿‡çš„èŠ‚ç‚¹ï¼ˆä¾‹å¦‚ `24h`ã€`7d`ï¼‰ã€‚

## è°ƒç”¨ / è¿è¡Œ

```bash
 nodes invoke --node <id|name|ip> --command <command> --params <json>
 nodes run --node <id|name|ip> <command...>
 nodes run --raw "git status"
 nodes run --agent main --node <id|name|ip> --raw "git status"
```

è°ƒç”¨æ ‡å¿—ï¼š

- `--params <json>`ï¼šJSON å¯¹è±¡å­—ç¬¦ä¸²ï¼ˆé»˜è®¤ `{}`ï¼‰ã€‚
- `--invoke-timeout <ms>`ï¼šèŠ‚ç‚¹è°ƒç”¨è¶…æ—¶ï¼ˆé»˜è®¤ `15000`ï¼‰ã€‚
- `--idempotency-key <key>`ï¼šå¯é€‰çš„å¹‚ç­‰é”®ã€‚

### Exec é£Žæ ¼é»˜è®¤å€¼

`nodes run` ä¸Žæ¨¡åž‹çš„ exec è¡Œä¸ºä¸€è‡´ï¼ˆé»˜è®¤å€¼ + å®¡æ‰¹ï¼‰ï¼š

- è¯»å– `tools.exec.*`ï¼ˆä»¥åŠ `agents.list[].tools.exec.*` è¦†ç›–ï¼‰ã€‚
- åœ¨è°ƒç”¨ `system.run` å‰ä½¿ç”¨ exec å®¡æ‰¹ï¼ˆ`exec.approval.request`ï¼‰ã€‚
- å½“è®¾ç½®äº† `tools.exec.node` æ—¶å¯çœç•¥ `--node`ã€‚
- éœ€è¦æ”¯æŒ `system.run` çš„èŠ‚ç‚¹ï¼ˆmacOS é…å¥—åº”ç”¨æˆ–æ— å¤´èŠ‚ç‚¹ä¸»æœºï¼‰ã€‚

æ ‡å¿—ï¼š

- `--cwd <path>`ï¼šå·¥ä½œç›®å½•ã€‚
- `--env <key=val>`ï¼šçŽ¯å¢ƒå˜é‡è¦†ç›–ï¼ˆå¯é‡å¤ï¼‰ã€‚
- `--command-timeout <ms>`ï¼šå‘½ä»¤è¶…æ—¶ã€‚
- `--invoke-timeout <ms>`ï¼šèŠ‚ç‚¹è°ƒç”¨è¶…æ—¶ï¼ˆé»˜è®¤ `30000`ï¼‰ã€‚
- `--needs-screen-recording`ï¼šè¦æ±‚å±å¹•å½•åˆ¶æƒé™ã€‚
- `--raw <command>`ï¼šè¿è¡Œ shell å­—ç¬¦ä¸²ï¼ˆ`/bin/sh -lc` æˆ– `cmd.exe /c`ï¼‰ã€‚
- `--agent <id>`ï¼šæ™ºèƒ½ä½“èŒƒå›´çš„å®¡æ‰¹/ç™½åå•ï¼ˆé»˜è®¤ä¸ºå·²é…ç½®çš„æ™ºèƒ½ä½“ï¼‰ã€‚
- `--ask <off|on-miss|always>`ã€`--security <deny|allowlist|full>`ï¼šè¦†ç›–é€‰é¡¹ã€‚

