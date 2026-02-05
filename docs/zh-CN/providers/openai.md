---
read_when:
  - ä½ æƒ³åœ¨  ä¸­ä½¿ç”¨ OpenAI æ¨¡åž‹
  - ä½ æƒ³ä½¿ç”¨ Codex è®¢é˜…è®¤è¯è€Œéž API å¯†é’¥
summary: åœ¨  ä¸­é€šè¿‡ API å¯†é’¥æˆ– Codex è®¢é˜…ä½¿ç”¨ OpenAI
title: OpenAI
x-i18n:
  generated_at: "2026-02-01T21:35:10Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: f15365d5d616258f6035b986d80fe6acd1be5836a07e5bb68236688ef2952ef7
  source_path: providers/openai.md
  workflow: 15
---

# OpenAI

OpenAI æä¾› GPT æ¨¡åž‹çš„å¼€å‘è€… APIã€‚Codex æ”¯æŒ**ChatGPT ç™»å½•**è¿›è¡Œè®¢é˜…è®¿é—®ï¼Œæˆ–**API å¯†é’¥**ç™»å½•è¿›è¡ŒæŒ‰é‡è®¡è´¹è®¿é—®ã€‚Codex äº‘ç«¯éœ€è¦ ChatGPT ç™»å½•ã€‚

## æ–¹å¼ Aï¼šOpenAI API å¯†é’¥ï¼ˆOpenAI Platformï¼‰

**é€‚ç”¨äºŽï¼š**ç›´æŽ¥ API è®¿é—®å’ŒæŒ‰é‡è®¡è´¹ã€‚
ä»Ž OpenAI æŽ§åˆ¶å°èŽ·å–ä½ çš„ API å¯†é’¥ã€‚

### CLI è®¾ç½®

```bash
 onboard --auth-choice openai-api-key
# æˆ–éžäº¤äº’å¼
 onboard --openai-api-key "$OPENAI_API_KEY"
```

### é…ç½®ç‰‡æ®µ

```json5
{
  env: { OPENAI_API_KEY: "sk-..." },
  agents: { defaults: { model: { primary: "openai/gpt-5.2" } } },
}
```

## æ–¹å¼ Bï¼šOpenAI Codeï¼ˆCodexï¼‰è®¢é˜…

**é€‚ç”¨äºŽï¼š**ä½¿ç”¨ ChatGPT/Codex è®¢é˜…è®¿é—®è€Œéž API å¯†é’¥ã€‚
Codex äº‘ç«¯éœ€è¦ ChatGPT ç™»å½•ï¼Œè€Œ Codex CLI æ”¯æŒ ChatGPT æˆ– API å¯†é’¥ç™»å½•ã€‚

### CLI è®¾ç½®

```bash
# åœ¨å‘å¯¼ä¸­è¿è¡Œ Codex OAuth
 onboard --auth-choice openai-codex

# æˆ–ç›´æŽ¥è¿è¡Œ OAuth
 models auth login --provider openai-codex
```

### é…ç½®ç‰‡æ®µ

```json5
{
  agents: { defaults: { model: { primary: "openai-codex/gpt-5.2" } } },
}
```

## æ³¨æ„äº‹é¡¹

- æ¨¡åž‹å¼•ç”¨å§‹ç»ˆä½¿ç”¨ `provider/model` æ ¼å¼ï¼ˆå‚è§ [/concepts/models](/concepts/models)ï¼‰ã€‚
- è®¤è¯è¯¦æƒ…å’Œå¤ç”¨è§„åˆ™è¯·å‚é˜… [/concepts/oauth](/concepts/oauth)ã€‚

