---
read_when:
  - ä½ æƒ³åœ¨  ä¸­ä½¿ç”¨ Qwen
  - ä½ æƒ³è¦å…è´¹å±‚ OAuth è®¿é—® Qwen Coder
summary: åœ¨  ä¸­ä½¿ç”¨ Qwen OAuthï¼ˆå…è´¹å±‚ï¼‰
title: Qwen
x-i18n:
  generated_at: "2026-02-03T07:53:34Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 88b88e224e2fecbb1ca26e24fbccdbe25609be40b38335d0451343a5da53fdd4
  source_path: providers/qwen.md
  workflow: 15
---

# Qwen

Qwen ä¸º Qwen Coder å’Œ Qwen Vision æ¨¡åž‹æä¾›å…è´¹å±‚ OAuth æµç¨‹ï¼ˆæ¯å¤© 2,000 æ¬¡è¯·æ±‚ï¼Œå— Qwen é€ŸçŽ‡é™åˆ¶çº¦æŸï¼‰ã€‚

## å¯ç”¨æ’ä»¶

```bash
 plugins enable qwen-portal-auth
```

å¯ç”¨åŽé‡å¯ Gateway ç½‘å…³ã€‚

## è®¤è¯

```bash
 models auth login --provider qwen-portal --set-default
```

è¿™ä¼šè¿è¡Œ Qwen è®¾å¤‡ç  OAuth æµç¨‹å¹¶å°†æä¾›å•†æ¡ç›®å†™å…¥ä½ çš„ `models.json`ï¼ˆåŠ ä¸Šä¸€ä¸ª `qwen` åˆ«åä»¥ä¾¿å¿«é€Ÿåˆ‡æ¢ï¼‰ã€‚

## æ¨¡åž‹ ID

- `qwen-portal/coder-model`
- `qwen-portal/vision-model`

åˆ‡æ¢æ¨¡åž‹ï¼š

```bash
 models set qwen-portal/coder-model
```

## å¤ç”¨ Qwen Code CLI ç™»å½•

å¦‚æžœä½ å·²ç»ä½¿ç”¨ Qwen Code CLI ç™»å½•ï¼Œ ä¼šåœ¨åŠ è½½è®¤è¯å­˜å‚¨æ—¶ä»Ž `~/.qwen/oauth_creds.json` åŒæ­¥å‡­è¯ã€‚ä½ ä»ç„¶éœ€è¦ä¸€ä¸ª `models.providers.qwen-portal` æ¡ç›®ï¼ˆä½¿ç”¨ä¸Šé¢çš„ç™»å½•å‘½ä»¤åˆ›å»ºä¸€ä¸ªï¼‰ã€‚

## æ³¨æ„

- ä»¤ç‰Œè‡ªåŠ¨åˆ·æ–°ï¼›å¦‚æžœåˆ·æ–°å¤±è´¥æˆ–è®¿é—®è¢«æ’¤é”€ï¼Œè¯·é‡æ–°è¿è¡Œç™»å½•å‘½ä»¤ã€‚
- é»˜è®¤åŸºç¡€ URLï¼š`https://portal.qwen.ai/v1`ï¼ˆå¦‚æžœ Qwen æä¾›ä¸åŒçš„ç«¯ç‚¹ï¼Œä½¿ç”¨ `models.providers.qwen-portal.baseUrl` è¦†ç›–ï¼‰ã€‚
- å‚é˜…[æ¨¡åž‹æä¾›å•†](/concepts/model-providers)äº†è§£æä¾›å•†çº§åˆ«çš„è§„åˆ™ã€‚


