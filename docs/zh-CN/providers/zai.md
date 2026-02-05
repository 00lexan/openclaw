---
read_when:
  - ä½ æƒ³åœ¨  ä¸­ä½¿ç”¨ Z.AI / GLM æ¨¡åž‹
  - ä½ éœ€è¦ç®€å•çš„ ZAI_API_KEY é…ç½®
summary: åœ¨  ä¸­ä½¿ç”¨æ™ºè°± AIï¼ˆGLM æ¨¡åž‹ï¼‰
title: Z.AI
x-i18n:
  generated_at: "2026-02-01T21:36:13Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 2c24bbad86cf86c38675a58e22f9e1b494f78a18fdc3051c1be80d2d9a800711
  source_path: providers/zai.md
  workflow: 15
---

# Z.AI

Z.AI æ˜¯ **GLM** æ¨¡åž‹çš„ API å¹³å°ã€‚å®ƒä¸º GLM æä¾› REST APIï¼Œå¹¶ä½¿ç”¨ API å¯†é’¥è¿›è¡Œèº«ä»½éªŒè¯ã€‚è¯·åœ¨ Z.AI æŽ§åˆ¶å°ä¸­åˆ›å»ºä½ çš„ API å¯†é’¥ã€‚ é€šè¿‡ `zai` æä¾›å•†é…åˆ Z.AI API å¯†é’¥ä½¿ç”¨ã€‚

## CLI è®¾ç½®

```bash
 onboard --auth-choice zai-api-key
# æˆ–éžäº¤äº’å¼
 onboard --zai-api-key "$ZAI_API_KEY"
```

## é…ç½®ç‰‡æ®µ

```json5
{
  env: { ZAI_API_KEY: "sk-..." },
  agents: { defaults: { model: { primary: "zai/glm-4.7" } } },
}
```

## æ³¨æ„äº‹é¡¹

- GLM æ¨¡åž‹ä»¥ `zai/<model>` çš„å½¢å¼æä¾›ï¼ˆä¾‹å¦‚ï¼š`zai/glm-4.7`ï¼‰ã€‚
- å‚é˜… [/providers/glm](/providers/glm) äº†è§£æ¨¡åž‹ç³»åˆ—æ¦‚è§ˆã€‚
- Z.AI ä½¿ç”¨ Bearer è®¤è¯æ–¹å¼é…åˆä½ çš„ API å¯†é’¥ã€‚

