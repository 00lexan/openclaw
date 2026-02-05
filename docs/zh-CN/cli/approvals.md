---
read_when:
  - ä½ æƒ³é€šè¿‡ CLI ç¼–è¾‘æ‰§è¡Œå®¡æ‰¹
  - ä½ éœ€è¦ç®¡ç† Gateway ç½‘å…³æˆ–èŠ‚ç‚¹ä¸»æœºä¸Šçš„å…è®¸åˆ—è¡¨
summary: CLI å‚è€ƒï¼š` approvals`ï¼ˆGateway ç½‘å…³æˆ–èŠ‚ç‚¹ä¸»æœºçš„æ‰§è¡Œå®¡æ‰¹ï¼‰
title: approvals
x-i18n:
  generated_at: "2026-02-03T10:04:09Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 4329cdaaec2c5f5d619415b6431196512d4834dc1ccd7363576f03dd9b845130
  source_path: cli/approvals.md
  workflow: 15
---

# ` approvals`

ç®¡ç†**æœ¬åœ°ä¸»æœº**ã€**Gateway ç½‘å…³ä¸»æœº**æˆ–**èŠ‚ç‚¹ä¸»æœº**çš„æ‰§è¡Œå®¡æ‰¹ã€‚
é»˜è®¤æƒ…å†µä¸‹ï¼Œå‘½ä»¤é’ˆå¯¹ç£ç›˜ä¸Šçš„æœ¬åœ°å®¡æ‰¹æ–‡ä»¶ã€‚ä½¿ç”¨ `--gateway` å¯é’ˆå¯¹ Gateway ç½‘å…³ï¼Œä½¿ç”¨ `--node` å¯é’ˆå¯¹ç‰¹å®šèŠ‚ç‚¹ã€‚

ç›¸å…³å†…å®¹ï¼š

- æ‰§è¡Œå®¡æ‰¹ï¼š[æ‰§è¡Œå®¡æ‰¹](/tools/exec-approvals)
- èŠ‚ç‚¹ï¼š[èŠ‚ç‚¹](/nodes)

## å¸¸ç”¨å‘½ä»¤

```bash
 approvals get
 approvals get --node <id|name|ip>
 approvals get --gateway
```

## ä»Žæ–‡ä»¶æ›¿æ¢å®¡æ‰¹

```bash
 approvals set --file ./exec-approvals.json
 approvals set --node <id|name|ip> --file ./exec-approvals.json
 approvals set --gateway --file ./exec-approvals.json
```

## å…è®¸åˆ—è¡¨è¾…åŠ©å‘½ä»¤

```bash
 approvals allowlist add "~/Projects/**/bin/rg"
 approvals allowlist add --agent main --node <id|name|ip> "/usr/bin/uptime"
 approvals allowlist add --agent "*" "/usr/bin/uname"

 approvals allowlist remove "~/Projects/**/bin/rg"
```

## æ³¨æ„äº‹é¡¹

- `--node` ä½¿ç”¨ä¸Ž ` nodes` ç›¸åŒçš„è§£æžå™¨ï¼ˆidã€nameã€ip æˆ– id å‰ç¼€ï¼‰ã€‚
- `--agent` é»˜è®¤ä¸º `"*"`ï¼Œè¡¨ç¤ºé€‚ç”¨äºŽæ‰€æœ‰æ™ºèƒ½ä½“ã€‚
- èŠ‚ç‚¹ä¸»æœºå¿…é¡»å…¬å¼€ `system.execApprovals.get/set`ï¼ˆmacOS åº”ç”¨æˆ–æ— å¤´èŠ‚ç‚¹ä¸»æœºï¼‰ã€‚
- å®¡æ‰¹æ–‡ä»¶æŒ‰ä¸»æœºå­˜å‚¨åœ¨ `~/./exec-approvals.json`ã€‚


