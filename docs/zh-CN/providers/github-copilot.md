---
read_when:
  - ä½ æƒ³ä½¿ç”¨ GitHub Copilot ä½œä¸ºæ¨¡åž‹æä¾›å•†
  - ä½ éœ€è¦äº†è§£ ` models auth login-github-copilot` æµç¨‹
summary: ä½¿ç”¨è®¾å¤‡æµä»Ž  ç™»å½• GitHub Copilot
title: GitHub Copilot
x-i18n:
  generated_at: "2026-02-01T21:34:57Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 503e0496d92c921e2f7111b1b4ba16374f5b781643bfbc6cb69cea97d9395c25
  source_path: providers/github-copilot.md
  workflow: 15
---

# GitHub Copilot

## ä»€ä¹ˆæ˜¯ GitHub Copilotï¼Ÿ

GitHub Copilot æ˜¯ GitHub çš„ AI ç¼–ç¨‹åŠ©æ‰‹ã€‚å®ƒä¸ºä½ çš„ GitHub è´¦æˆ·å’Œè®¢é˜…è®¡åˆ’æä¾› Copilot æ¨¡åž‹çš„è®¿é—®æƒé™ã€‚ å¯ä»¥é€šè¿‡ä¸¤ç§ä¸åŒçš„æ–¹å¼å°† Copilot ç”¨ä½œæ¨¡åž‹æä¾›å•†ã€‚

## åœ¨  ä¸­ä½¿ç”¨ Copilot çš„ä¸¤ç§æ–¹å¼

### 1ï¼‰å†…ç½® GitHub Copilot æä¾›å•†ï¼ˆ`github-copilot`ï¼‰

ä½¿ç”¨åŽŸç”Ÿè®¾å¤‡ç™»å½•æµç¨‹èŽ·å– GitHub ä»¤ç‰Œï¼Œç„¶åŽåœ¨  è¿è¡Œæ—¶å°†å…¶å…‘æ¢ä¸º Copilot API ä»¤ç‰Œã€‚è¿™æ˜¯**é»˜è®¤**ä¸”æœ€ç®€å•çš„æ–¹å¼ï¼Œå› ä¸ºå®ƒä¸éœ€è¦ VS Codeã€‚

### 2ï¼‰Copilot Proxy æ’ä»¶ï¼ˆ`copilot-proxy`ï¼‰

ä½¿ç”¨ **Copilot Proxy** VS Code æ‰©å±•ä½œä¸ºæœ¬åœ°æ¡¥æŽ¥ã€‚ ä¸Žä»£ç†çš„ `/v1` ç«¯ç‚¹é€šä¿¡ï¼Œå¹¶ä½¿ç”¨ä½ åœ¨å…¶ä¸­é…ç½®çš„æ¨¡åž‹åˆ—è¡¨ã€‚å½“ä½ å·²ç»åœ¨ VS Code ä¸­è¿è¡Œ Copilot Proxy æˆ–éœ€è¦é€šè¿‡å®ƒè¿›è¡Œè·¯ç”±æ—¶ï¼Œé€‰æ‹©æ­¤æ–¹å¼ã€‚ä½ å¿…é¡»å¯ç”¨è¯¥æ’ä»¶å¹¶ä¿æŒ VS Code æ‰©å±•è¿è¡Œã€‚

ä½¿ç”¨ GitHub Copilot ä½œä¸ºæ¨¡åž‹æä¾›å•†ï¼ˆ`github-copilot`ï¼‰ã€‚ç™»å½•å‘½ä»¤è¿è¡Œ GitHub è®¾å¤‡æµç¨‹ï¼Œä¿å­˜è®¤è¯é…ç½®æ–‡ä»¶ï¼Œå¹¶æ›´æ–°ä½ çš„é…ç½®ä»¥ä½¿ç”¨è¯¥é…ç½®æ–‡ä»¶ã€‚

## CLI è®¾ç½®

```bash
 models auth login-github-copilot
```

ç³»ç»Ÿä¼šæç¤ºä½ è®¿é—®ä¸€ä¸ª URL å¹¶è¾“å…¥ä¸€æ¬¡æ€§ä»£ç ã€‚è¯·ä¿æŒç»ˆç«¯æ‰“å¼€ç›´åˆ°æµç¨‹å®Œæˆã€‚

### å¯é€‰å‚æ•°

```bash
 models auth login-github-copilot --profile-id github-copilot:work
 models auth login-github-copilot --yes
```

## è®¾ç½®é»˜è®¤æ¨¡åž‹

```bash
 models set github-copilot/gpt-4o
```

### é…ç½®ç‰‡æ®µ

```json5
{
  agents: { defaults: { model: { primary: "github-copilot/gpt-4o" } } },
}
```

## æ³¨æ„äº‹é¡¹

- éœ€è¦äº¤äº’å¼ TTYï¼›è¯·ç›´æŽ¥åœ¨ç»ˆç«¯ä¸­è¿è¡Œã€‚
- Copilot æ¨¡åž‹çš„å¯ç”¨æ€§å–å†³äºŽä½ çš„è®¢é˜…è®¡åˆ’ï¼›å¦‚æžœæŸä¸ªæ¨¡åž‹è¢«æ‹’ç»ï¼Œè¯·å°è¯•å…¶ä»– IDï¼ˆä¾‹å¦‚ `github-copilot/gpt-4.1`ï¼‰ã€‚
- ç™»å½•ä¼šå°† GitHub ä»¤ç‰Œå­˜å‚¨åœ¨è®¤è¯é…ç½®æ–‡ä»¶ä¸­ï¼Œå¹¶åœ¨  è¿è¡Œæ—¶å°†å…¶å…‘æ¢ä¸º Copilot API ä»¤ç‰Œã€‚

