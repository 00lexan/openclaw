---
read_when:
  - ä½ æƒ³ä»¥éžäº¤äº’æ–¹å¼è¯»å–æˆ–ç¼–è¾‘é…ç½®
summary: "` config` çš„ CLI å‚è€ƒï¼ˆèŽ·å–/è®¾ç½®/å–æ¶ˆè®¾ç½®é…ç½®å€¼ï¼‰"
title: config
x-i18n:
  generated_at: "2026-02-03T10:04:13Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: d60a35f5330f22bc99a0df090590586109d329ddd2ca294aeed191a22560c1c2
  source_path: cli/config.md
  workflow: 15
---

# ` config`

é…ç½®è¾…åŠ©å‘½ä»¤ï¼šé€šè¿‡è·¯å¾„èŽ·å–/è®¾ç½®/å–æ¶ˆè®¾ç½®å€¼ã€‚ä¸å¸¦å­å‘½ä»¤è¿è¡Œå°†æ‰“å¼€
é…ç½®å‘å¯¼ï¼ˆä¸Ž ` configure` ç›¸åŒï¼‰ã€‚

## ç¤ºä¾‹

```bash
 config get browser.executablePath
 config set browser.executablePath "/usr/bin/google-chrome"
 config set agents.defaults.heartbeat.every "2h"
 config set agents.list[0].tools.exec.node "node-id-or-name"
 config unset tools.web.search.apiKey
```

## è·¯å¾„

è·¯å¾„ä½¿ç”¨ç‚¹å·æˆ–æ‹¬å·è¡¨ç¤ºæ³•ï¼š

```bash
 config get agents.defaults.workspace
 config get agents.list[0].id
```

ä½¿ç”¨æ™ºèƒ½ä½“åˆ—è¡¨ç´¢å¼•æ¥å®šä½ç‰¹å®šæ™ºèƒ½ä½“ï¼š

```bash
 config get agents.list
 config set agents.list[1].tools.exec.node "node-id-or-name"
```

## å€¼

å€¼ä¼šå°½å¯èƒ½è§£æžä¸º JSON5ï¼›å¦åˆ™å°†è¢«è§†ä¸ºå­—ç¬¦ä¸²ã€‚
ä½¿ç”¨ `--json` å¼ºåˆ¶è¦æ±‚ JSON5 è§£æžã€‚

```bash
 config set agents.defaults.heartbeat.every "0m"
 config set gateway.port 19001 --json
 config set channels.whatsapp.groups '["*"]' --json
```

ç¼–è¾‘åŽè¯·é‡å¯ Gateway ç½‘å…³ã€‚


