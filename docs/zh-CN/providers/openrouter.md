---
read_when:
  - ä½ æƒ³ç”¨ä¸€ä¸ª API å¯†é’¥è®¿é—®å¤šç§ LLM
  - ä½ æƒ³åœ¨  ä¸­é€šè¿‡ OpenRouter è¿è¡Œæ¨¡åž‹
summary: ä½¿ç”¨ OpenRouter çš„ç»Ÿä¸€ API åœ¨  ä¸­è®¿é—®å¤šç§æ¨¡åž‹
title: OpenRouter
x-i18n:
  generated_at: "2026-02-01T21:35:19Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: b7e29fc9c456c64d567dd909a85166e6dea8388ebd22155a31e69c970e081586
  source_path: providers/openrouter.md
  workflow: 15
---

# OpenRouter

OpenRouter æä¾›äº†ä¸€ä¸ª**ç»Ÿä¸€ API**ï¼Œé€šè¿‡å•ä¸€ç«¯ç‚¹å’Œ API å¯†é’¥å°†è¯·æ±‚è·¯ç”±åˆ°å¤šç§æ¨¡åž‹ã€‚å®ƒå…¼å®¹ OpenAIï¼Œå› æ­¤å¤§å¤šæ•° OpenAI SDK åªéœ€åˆ‡æ¢ base URL å³å¯ä½¿ç”¨ã€‚

## CLI è®¾ç½®

```bash
 onboard --auth-choice apiKey --token-provider openrouter --token "$OPENROUTER_API_KEY"
```

## é…ç½®ç‰‡æ®µ

```json5
{
  env: { OPENROUTER_API_KEY: "sk-or-..." },
  agents: {
    defaults: {
      model: { primary: "openrouter/anthropic/claude-sonnet-4-5" },
    },
  },
}
```

## æ³¨æ„äº‹é¡¹

- æ¨¡åž‹å¼•ç”¨æ ¼å¼ä¸º `openrouter/<provider>/<model>`ã€‚
- æ›´å¤šæ¨¡åž‹/æä¾›å•†é€‰é¡¹ï¼Œè¯·å‚é˜…[æ¨¡åž‹æä¾›å•†](/concepts/model-providers)ã€‚
- OpenRouter åº•å±‚ä½¿ç”¨ Bearer ä»¤ç‰Œå’Œä½ çš„ API å¯†é’¥è¿›è¡Œè®¤è¯ã€‚

