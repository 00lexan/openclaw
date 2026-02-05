---
read_when:
  - ä½ æƒ³åœ¨  ä¸­ä½¿ç”¨ GLM æ¨¡åž‹
  - ä½ éœ€è¦äº†è§£æ¨¡åž‹å‘½åè§„èŒƒå’Œè®¾ç½®æ–¹æ³•
summary: GLM æ¨¡åž‹ç³»åˆ—æ¦‚è¿° + å¦‚ä½•åœ¨  ä¸­ä½¿ç”¨
title: GLM æ¨¡åž‹
x-i18n:
  generated_at: "2026-02-01T21:34:53Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 2d7b457f033f26f28c230a9cd2310151f825fc52c3ee4fb814d08fd2d022d041
  source_path: providers/glm.md
  workflow: 15
---

# GLM æ¨¡åž‹

GLM æ˜¯ä¸€ä¸ª**æ¨¡åž‹ç³»åˆ—**ï¼ˆè€Œéžå…¬å¸ï¼‰ï¼Œé€šè¿‡ Z.AI å¹³å°æä¾›ã€‚åœ¨  ä¸­ï¼ŒGLM æ¨¡åž‹é€šè¿‡ `zai` æä¾›å•†è®¿é—®ï¼Œæ¨¡åž‹ ID æ ¼å¼å¦‚ `zai/glm-4.7`ã€‚

## CLI è®¾ç½®

```bash
 onboard --auth-choice zai-api-key
```

## é…ç½®ç‰‡æ®µ

```json5
{
  env: { ZAI_API_KEY: "sk-..." },
  agents: { defaults: { model: { primary: "zai/glm-4.7" } } },
}
```

## æ³¨æ„äº‹é¡¹

- GLM ç‰ˆæœ¬å’Œå¯ç”¨æ€§å¯èƒ½ä¼šå˜åŒ–ï¼›è¯·æŸ¥é˜… Z.AI çš„æ–‡æ¡£èŽ·å–æœ€æ–°ä¿¡æ¯ã€‚
- ç¤ºä¾‹æ¨¡åž‹ ID åŒ…æ‹¬ `glm-4.7` å’Œ `glm-4.6`ã€‚
- æœ‰å…³æä¾›å•†çš„è¯¦ç»†ä¿¡æ¯ï¼Œè¯·å‚é˜… [/providers/zai](/providers/zai)ã€‚


