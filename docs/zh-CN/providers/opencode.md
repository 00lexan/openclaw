---
read_when:
  - ä½ æƒ³é€šè¿‡ OpenCode Zen è®¿é—®æ¨¡åž‹
  - ä½ æƒ³è¦ä¸€ä¸ªé€‚åˆç¼–ç¨‹çš„ç²¾é€‰æ¨¡åž‹åˆ—è¡¨
summary: åœ¨  ä¸­ä½¿ç”¨ OpenCode Zenï¼ˆç²¾é€‰æ¨¡åž‹ï¼‰
title: OpenCode Zen
x-i18n:
  generated_at: "2026-02-01T21:35:16Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 1390f9803a3cac48cb40694dd69267e3ddccd203a4ce8babda3198b926b5f6a3
  source_path: providers/opencode.md
  workflow: 15
---

# OpenCode Zen

OpenCode Zen æ˜¯ç”± OpenCode å›¢é˜ŸæŽ¨èçš„ä¸€ç»„**ç²¾é€‰æ¨¡åž‹åˆ—è¡¨**ï¼Œé€‚ç”¨äºŽç¼–ç¨‹æ™ºèƒ½ä½“ã€‚å®ƒæ˜¯ä¸€ä¸ªå¯é€‰çš„æ‰˜ç®¡æ¨¡åž‹è®¿é—®è·¯å¾„ï¼Œä½¿ç”¨ API å¯†é’¥å’Œ `opencode` æä¾›å•†ã€‚Zen ç›®å‰å¤„äºŽæµ‹è¯•é˜¶æ®µã€‚

## CLI è®¾ç½®

```bash
 onboard --auth-choice opencode-zen
# æˆ–éžäº¤äº’å¼
 onboard --opencode-zen-api-key "$OPENCODE_API_KEY"
```

## é…ç½®ç‰‡æ®µ

```json5
{
  env: { OPENCODE_API_KEY: "sk-..." },
  agents: { defaults: { model: { primary: "opencode/claude-opus-4-5" } } },
}
```

## æ³¨æ„äº‹é¡¹

- ä¹Ÿæ”¯æŒ `OPENCODE_ZEN_API_KEY`ã€‚
- ä½ éœ€è¦ç™»å½• Zenï¼Œæ·»åŠ è´¦å•ä¿¡æ¯ï¼Œç„¶åŽå¤åˆ¶ä½ çš„ API å¯†é’¥ã€‚
- OpenCode Zen æŒ‰è¯·æ±‚è®¡è´¹ï¼›è¯¦æƒ…è¯·æŸ¥çœ‹ OpenCode æŽ§åˆ¶å°ã€‚


