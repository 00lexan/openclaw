---
read_when:
  - ä½ æƒ³ä»Žè‡ªå·±çš„ GPU æœºå™¨æä¾›æ¨¡åž‹æœåŠ¡
  - ä½ æ­£åœ¨é…ç½® LM Studio æˆ– OpenAI å…¼å®¹ä»£ç†
  - ä½ éœ€è¦æœ€å®‰å…¨çš„æœ¬åœ°æ¨¡åž‹æŒ‡å—
summary: åœ¨æœ¬åœ° LLM ä¸Šè¿è¡Œ ï¼ˆLM Studioã€vLLMã€LiteLLMã€è‡ªå®šä¹‰ OpenAI ç«¯ç‚¹ï¼‰
title: æœ¬åœ°æ¨¡åž‹
x-i18n:
  generated_at: "2026-02-03T07:48:15Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: f72b424c3d8986319868dc4c552596bcd599cc79fab5a57c14bf4f0695c39690
  source_path: gateway/local-models.md
  workflow: 15
---

# æœ¬åœ°æ¨¡åž‹

æœ¬åœ°è¿è¡Œæ˜¯å¯è¡Œçš„ï¼Œä½†  æœŸæœ›å¤§ä¸Šä¸‹æ–‡ + å¼ºå¤§çš„æç¤ºæ³¨å…¥é˜²å¾¡ã€‚å°æ˜¾å­˜ä¼šæˆªæ–­ä¸Šä¸‹æ–‡å¹¶æ³„éœ²å®‰å…¨æ€§ã€‚ç›®æ ‡è¦é«˜ï¼š**â‰¥2 å°æ»¡é… Mac Studio æˆ–åŒç­‰ GPU é…ç½®ï¼ˆçº¦ $30k+ï¼‰**ã€‚å•å¼  **24 GB** GPU ä»…é€‚ç”¨äºŽè¾ƒè½»çš„æç¤ºï¼Œä¸”å»¶è¿Ÿæ›´é«˜ã€‚ä½¿ç”¨**ä½ èƒ½è¿è¡Œçš„æœ€å¤§/å®Œæ•´å°ºå¯¸æ¨¡åž‹å˜ä½“**ï¼›æ¿€è¿›é‡åŒ–æˆ–"å°åž‹"æ£€æŸ¥ç‚¹ä¼šå¢žåŠ æç¤ºæ³¨å…¥é£Žé™©ï¼ˆå‚è§[å®‰å…¨](/gateway/security)ï¼‰ã€‚

## æŽ¨èï¼šLM Studio + MiniMax M2.1ï¼ˆResponses APIï¼Œå®Œæ•´å°ºå¯¸ï¼‰

å½“å‰æœ€ä½³æœ¬åœ°å †æ ˆã€‚åœ¨ LM Studio ä¸­åŠ è½½ MiniMax M2.1ï¼Œå¯ç”¨æœ¬åœ°æœåŠ¡å™¨ï¼ˆé»˜è®¤ `http://127.0.0.1:1234`ï¼‰ï¼Œå¹¶ä½¿ç”¨ Responses API å°†æŽ¨ç†ä¸Žæœ€ç»ˆæ–‡æœ¬åˆ†å¼€ã€‚

```json5
{
  agents: {
    defaults: {
      model: { primary: "lmstudio/minimax-m2.1-gs32" },
      models: {
        "anthropic/claude-opus-4-5": { alias: "Opus" },
        "lmstudio/minimax-m2.1-gs32": { alias: "Minimax" },
      },
    },
  },
  models: {
    mode: "merge",
    providers: {
      lmstudio: {
        baseUrl: "http://127.0.0.1:1234/v1",
        apiKey: "lmstudio",
        api: "openai-responses",
        models: [
          {
            id: "minimax-m2.1-gs32",
            name: "MiniMax M2.1 GS32",
            reasoning: false,
            input: ["text"],
            cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
            contextWindow: 196608,
            maxTokens: 8192,
          },
        ],
      },
    },
  },
}
```

**è®¾ç½®æ¸…å•**

- å®‰è£… LM Studioï¼šhttps://lmstudio.ai
- åœ¨ LM Studio ä¸­ï¼Œä¸‹è½½**å¯ç”¨çš„æœ€å¤§ MiniMax M2.1 æž„å»º**ï¼ˆé¿å…"å°åž‹"/é‡åº¦é‡åŒ–å˜ä½“ï¼‰ï¼Œå¯åŠ¨æœåŠ¡å™¨ï¼Œç¡®è®¤ `http://127.0.0.1:1234/v1/models` åˆ—å‡ºäº†å®ƒã€‚
- ä¿æŒæ¨¡åž‹åŠ è½½ï¼›å†·åŠ è½½ä¼šå¢žåŠ å¯åŠ¨å»¶è¿Ÿã€‚
- å¦‚æžœä½ çš„ LM Studio æž„å»ºä¸åŒï¼Œè°ƒæ•´ `contextWindow`/`maxTokens`ã€‚
- å¯¹äºŽ WhatsAppï¼ŒåšæŒä½¿ç”¨ Responses APIï¼Œè¿™æ ·åªå‘é€æœ€ç»ˆæ–‡æœ¬ã€‚

å³ä½¿è¿è¡Œæœ¬åœ°æ¨¡åž‹ä¹Ÿè¦ä¿æŒæ‰˜ç®¡æ¨¡åž‹çš„é…ç½®ï¼›ä½¿ç”¨ `models.mode: "merge"` ä»¥ä¾¿å¤‡ç”¨æ–¹æ¡ˆä¿æŒå¯ç”¨ã€‚

### æ··åˆé…ç½®ï¼šæ‰˜ç®¡ä¸ºä¸»ï¼Œæœ¬åœ°å¤‡ç”¨

```json5
{
  agents: {
    defaults: {
      model: {
        primary: "anthropic/claude-sonnet-4-5",
        fallbacks: ["lmstudio/minimax-m2.1-gs32", "anthropic/claude-opus-4-5"],
      },
      models: {
        "anthropic/claude-sonnet-4-5": { alias: "Sonnet" },
        "lmstudio/minimax-m2.1-gs32": { alias: "MiniMax Local" },
        "anthropic/claude-opus-4-5": { alias: "Opus" },
      },
    },
  },
  models: {
    mode: "merge",
    providers: {
      lmstudio: {
        baseUrl: "http://127.0.0.1:1234/v1",
        apiKey: "lmstudio",
        api: "openai-responses",
        models: [
          {
            id: "minimax-m2.1-gs32",
            name: "MiniMax M2.1 GS32",
            reasoning: false,
            input: ["text"],
            cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
            contextWindow: 196608,
            maxTokens: 8192,
          },
        ],
      },
    },
  },
}
```

### æœ¬åœ°ä¼˜å…ˆï¼Œæ‰˜ç®¡ä½œä¸ºå®‰å…¨ç½‘

äº¤æ¢ä¸»è¦å’Œå¤‡ç”¨çš„é¡ºåºï¼›ä¿æŒç›¸åŒçš„ providers å—å’Œ `models.mode: "merge"`ï¼Œè¿™æ ·å½“æœ¬åœ°æœºå™¨å®•æœºæ—¶å¯ä»¥å›žé€€åˆ° Sonnet æˆ– Opusã€‚

### åŒºåŸŸæ‰˜ç®¡/æ•°æ®è·¯ç”±

- æ‰˜ç®¡çš„ MiniMax/Kimi/GLM å˜ä½“ä¹Ÿå­˜åœ¨äºŽ OpenRouter ä¸Šï¼Œå¸¦æœ‰åŒºåŸŸå›ºå®šç«¯ç‚¹ï¼ˆä¾‹å¦‚ï¼Œç¾Žå›½æ‰˜ç®¡ï¼‰ã€‚åœ¨é‚£é‡Œé€‰æ‹©åŒºåŸŸå˜ä½“ä»¥å°†æµé‡ä¿æŒåœ¨ä½ é€‰æ‹©çš„ç®¡è¾–åŒºå†…ï¼ŒåŒæ—¶ä»ä½¿ç”¨ `models.mode: "merge"` ä½œä¸º Anthropic/OpenAI å¤‡ç”¨ã€‚
- çº¯æœ¬åœ°ä»ç„¶æ˜¯æœ€å¼ºçš„éšç§è·¯å¾„ï¼›å½“ä½ éœ€è¦æä¾›å•†åŠŸèƒ½ä½†åˆæƒ³æŽ§åˆ¶æ•°æ®æµæ—¶ï¼Œæ‰˜ç®¡åŒºåŸŸè·¯ç”±æ˜¯æŠ˜ä¸­æ–¹æ¡ˆã€‚

## å…¶ä»– OpenAI å…¼å®¹æœ¬åœ°ä»£ç†

vLLMã€LiteLLMã€OAI-proxy æˆ–è‡ªå®šä¹‰ç½‘å…³éƒ½å¯ä»¥å·¥ä½œï¼Œåªè¦å®ƒä»¬æš´éœ² OpenAI é£Žæ ¼çš„ `/v1` ç«¯ç‚¹ã€‚ç”¨ä½ çš„ç«¯ç‚¹å’Œæ¨¡åž‹ ID æ›¿æ¢ä¸Šé¢çš„ provider å—ï¼š

```json5
{
  models: {
    mode: "merge",
    providers: {
      local: {
        baseUrl: "http://127.0.0.1:8000/v1",
        apiKey: "sk-local",
        api: "openai-responses",
        models: [
          {
            id: "my-local-model",
            name: "Local Model",
            reasoning: false,
            input: ["text"],
            cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
            contextWindow: 120000,
            maxTokens: 8192,
          },
        ],
      },
    },
  },
}
```

ä¿æŒ `models.mode: "merge"` ä»¥ä¾¿æ‰˜ç®¡æ¨¡åž‹ä½œä¸ºå¤‡ç”¨ä¿æŒå¯ç”¨ã€‚

## æ•…éšœæŽ’é™¤

- Gateway ç½‘å…³èƒ½è®¿é—®ä»£ç†å—ï¼Ÿ`curl http://127.0.0.1:1234/v1/models`ã€‚
- LM Studio æ¨¡åž‹å¸è½½äº†ï¼Ÿé‡æ–°åŠ è½½ï¼›å†·å¯åŠ¨æ˜¯å¸¸è§çš„"å¡ä½"åŽŸå› ã€‚
- ä¸Šä¸‹æ–‡é”™è¯¯ï¼Ÿé™ä½Ž `contextWindow` æˆ–æé«˜æœåŠ¡å™¨é™åˆ¶ã€‚
- å®‰å…¨ï¼šæœ¬åœ°æ¨¡åž‹è·³è¿‡æä¾›å•†ç«¯è¿‡æ»¤å™¨ï¼›ä¿æŒæ™ºèƒ½ä½“èŒƒå›´çª„å¹¶å¼€å¯åŽ‹ç¼©ä»¥é™åˆ¶æç¤ºæ³¨å…¥çš„å½±å“èŒƒå›´ã€‚


