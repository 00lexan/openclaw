---
read_when:
  - ä½ éœ€è¦åœ¨å·¥ä½œæµä¸­æ·»åŠ çº¯ JSON çš„ LLM æ­¥éª¤
  - ä½ éœ€è¦ç»è¿‡ Schema éªŒè¯çš„ LLM è¾“å‡ºç”¨äºŽè‡ªåŠ¨åŒ–
summary: ç”¨äºŽå·¥ä½œæµçš„çº¯ JSON LLM ä»»åŠ¡ï¼ˆå¯é€‰æ’ä»¶å·¥å…·ï¼‰
title: LLM ä»»åŠ¡
x-i18n:
  generated_at: "2026-02-01T21:42:34Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: d81b74fcfd5491a9edb4bfadb47d404067020990b1f6d6d8fed652fbc860f646
  source_path: tools/llm-task.md
  workflow: 15
---

# LLM ä»»åŠ¡

`llm-task` æ˜¯ä¸€ä¸ª**å¯é€‰æ’ä»¶å·¥å…·**ï¼Œç”¨äºŽè¿è¡Œçº¯ JSON çš„ LLM ä»»åŠ¡å¹¶è¿”å›žç»“æž„åŒ–è¾“å‡ºï¼ˆå¯é€‰æ‹©æ ¹æ® JSON Schema è¿›è¡ŒéªŒè¯ï¼‰ã€‚

è¿™éžå¸¸é€‚åˆåƒ Lobster è¿™æ ·çš„å·¥ä½œæµå¼•æ“Žï¼šä½ å¯ä»¥æ·»åŠ å•ä¸ª LLM æ­¥éª¤ï¼Œè€Œæ— éœ€ä¸ºæ¯ä¸ªå·¥ä½œæµç¼–å†™è‡ªå®šä¹‰  ä»£ç ã€‚

## å¯ç”¨æ’ä»¶

1. å¯ç”¨æ’ä»¶ï¼š

```json
{
  "plugins": {
    "entries": {
      "llm-task": { "enabled": true }
    }
  }
}
```

2. å°†å·¥å…·åŠ å…¥å…è®¸åˆ—è¡¨ï¼ˆå®ƒä»¥ `optional: true` æ³¨å†Œï¼‰ï¼š

```json
{
  "agents": {
    "list": [
      {
        "id": "main",
        "tools": { "allow": ["llm-task"] }
      }
    ]
  }
}
```

## é…ç½®ï¼ˆå¯é€‰ï¼‰

```json
{
  "plugins": {
    "entries": {
      "llm-task": {
        "enabled": true,
        "config": {
          "defaultProvider": "openai-codex",
          "defaultModel": "gpt-5.2",
          "defaultAuthProfileId": "main",
          "allowedModels": ["openai-codex/gpt-5.2"],
          "maxTokens": 800,
          "timeoutMs": 30000
        }
      }
    }
  }
}
```

`allowedModels` æ˜¯ `provider/model` å­—ç¬¦ä¸²çš„å…è®¸åˆ—è¡¨ã€‚å¦‚æžœè®¾ç½®äº†è¯¥é¡¹ï¼Œä»»ä½•ä¸åœ¨åˆ—è¡¨ä¸­çš„è¯·æ±‚éƒ½ä¼šè¢«æ‹’ç»ã€‚

## å·¥å…·å‚æ•°

- `prompt`ï¼ˆå­—ç¬¦ä¸²ï¼Œå¿…å¡«ï¼‰
- `input`ï¼ˆä»»æ„ç±»åž‹ï¼Œå¯é€‰ï¼‰
- `schema`ï¼ˆå¯¹è±¡ï¼Œå¯é€‰ JSON Schemaï¼‰
- `provider`ï¼ˆå­—ç¬¦ä¸²ï¼Œå¯é€‰ï¼‰
- `model`ï¼ˆå­—ç¬¦ä¸²ï¼Œå¯é€‰ï¼‰
- `authProfileId`ï¼ˆå­—ç¬¦ä¸²ï¼Œå¯é€‰ï¼‰
- `temperature`ï¼ˆæ•°å­—ï¼Œå¯é€‰ï¼‰
- `maxTokens`ï¼ˆæ•°å­—ï¼Œå¯é€‰ï¼‰
- `timeoutMs`ï¼ˆæ•°å­—ï¼Œå¯é€‰ï¼‰

## è¾“å‡º

è¿”å›ž `details.json`ï¼ŒåŒ…å«è§£æžåŽçš„ JSONï¼ˆå¦‚æžœæä¾›äº† `schema`ï¼Œåˆ™ä¼šè¿›è¡ŒéªŒè¯ï¼‰ã€‚

## ç¤ºä¾‹ï¼šLobster å·¥ä½œæµæ­¥éª¤

```lobster
.invoke --tool llm-task --action json --args-json '{
  "prompt": "Given the input email, return intent and draft.",
  "input": {
    "subject": "Hello",
    "body": "Can you help?"
  },
  "schema": {
    "type": "object",
    "properties": {
      "intent": { "type": "string" },
      "draft": { "type": "string" }
    },
    "required": ["intent", "draft"],
    "additionalProperties": false
  }
}'
```

## å®‰å…¨æ³¨æ„äº‹é¡¹

- è¯¥å·¥å…·ä¸º**çº¯ JSON æ¨¡å¼**ï¼ŒæŒ‡ç¤ºæ¨¡åž‹ä»…è¾“å‡º JSONï¼ˆæ— ä»£ç å›´æ ã€æ— æ³¨é‡Šè¯´æ˜Žï¼‰ã€‚
- æ­¤æ¬¡è¿è¡Œä¸ä¼šå‘æ¨¡åž‹æš´éœ²ä»»ä½•å·¥å…·ã€‚
- é™¤éžä½¿ç”¨ `schema` è¿›è¡ŒéªŒè¯ï¼Œå¦åˆ™åº”å°†è¾“å‡ºè§†ä¸ºä¸å¯ä¿¡ã€‚
- åœ¨ä»»ä½•æœ‰å‰¯ä½œç”¨çš„æ­¥éª¤ï¼ˆå‘é€ã€å‘å¸ƒã€æ‰§è¡Œï¼‰ä¹‹å‰è®¾ç½®å®¡æ‰¹æµç¨‹ã€‚


