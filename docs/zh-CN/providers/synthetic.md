---
read_when:
  - ä½ æƒ³ä½¿ç”¨ Synthetic ä½œä¸ºæ¨¡åž‹æä¾›å•†
  - ä½ éœ€è¦é…ç½® Synthetic API å¯†é’¥æˆ– base URL
summary: åœ¨  ä¸­ä½¿ç”¨ Synthetic çš„ Anthropic å…¼å®¹ API
title: Synthetic
x-i18n:
  generated_at: "2026-02-01T21:35:34Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: f3f6e3eb864661754cbe2276783c5bc96ae01cb85ee4a19c92bed7863a35a4f7
  source_path: providers/synthetic.md
  workflow: 15
---

# Synthetic

Synthetic æä¾›å…¼å®¹ Anthropic çš„ç«¯ç‚¹ã€‚ å°†å…¶æ³¨å†Œä¸º `synthetic` æä¾›å•†ï¼Œå¹¶ä½¿ç”¨ Anthropic Messages APIã€‚

## å¿«é€Ÿè®¾ç½®

1. è®¾ç½® `SYNTHETIC_API_KEY`ï¼ˆæˆ–è¿è¡Œä»¥ä¸‹å‘å¯¼ï¼‰ã€‚
2. è¿è¡Œæ–°æ‰‹å¼•å¯¼ï¼š

```bash
 onboard --auth-choice synthetic-api-key
```

é»˜è®¤æ¨¡åž‹è®¾ç½®ä¸ºï¼š

```
synthetic/hf:MiniMaxAI/MiniMax-M2.1
```

## é…ç½®ç¤ºä¾‹

```json5
{
  env: { SYNTHETIC_API_KEY: "sk-..." },
  agents: {
    defaults: {
      model: { primary: "synthetic/hf:MiniMaxAI/MiniMax-M2.1" },
      models: { "synthetic/hf:MiniMaxAI/MiniMax-M2.1": { alias: "MiniMax M2.1" } },
    },
  },
  models: {
    mode: "merge",
    providers: {
      synthetic: {
        baseUrl: "https://api.synthetic.new/anthropic",
        apiKey: "${SYNTHETIC_API_KEY}",
        api: "anthropic-messages",
        models: [
          {
            id: "hf:MiniMaxAI/MiniMax-M2.1",
            name: "MiniMax M2.1",
            reasoning: false,
            input: ["text"],
            cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
            contextWindow: 192000,
            maxTokens: 65536,
          },
        ],
      },
    },
  },
}
```

æ³¨æ„ï¼š çš„ Anthropic å®¢æˆ·ç«¯ä¼šè‡ªåŠ¨åœ¨ base URL åŽè¿½åŠ  `/v1`ï¼Œå› æ­¤è¯·ä½¿ç”¨ `https://api.synthetic.new/anthropic`ï¼ˆè€Œéž `/anthropic/v1`ï¼‰ã€‚å¦‚æžœ Synthetic æ›´æ”¹äº†å…¶ base URLï¼Œè¯·è¦†ç›– `models.providers.synthetic.baseUrl`ã€‚

## æ¨¡åž‹ç›®å½•

ä»¥ä¸‹æ‰€æœ‰æ¨¡åž‹çš„è´¹ç”¨å‡ä¸º `0`ï¼ˆè¾“å…¥/è¾“å‡º/ç¼“å­˜ï¼‰ã€‚

| æ¨¡åž‹ ID                                                | ä¸Šä¸‹æ–‡çª—å£ | æœ€å¤§ä»¤ç‰Œæ•° | æŽ¨ç†  | è¾“å…¥         |
| ------------------------------------------------------ | ---------- | ---------- | ----- | ------------ |
| `hf:MiniMaxAI/MiniMax-M2.1`                            | 192000     | 65536      | false | text         |
| `hf:moonshotai/Kimi-K2-Thinking`                       | 256000     | 8192       | true  | text         |
| `hf:zai-org/GLM-4.7`                                   | 198000     | 128000     | false | text         |
| `hf:deepseek-ai/DeepSeek-R1-0528`                      | 128000     | 8192       | false | text         |
| `hf:deepseek-ai/DeepSeek-V3-0324`                      | 128000     | 8192       | false | text         |
| `hf:deepseek-ai/DeepSeek-V3.1`                         | 128000     | 8192       | false | text         |
| `hf:deepseek-ai/DeepSeek-V3.1-Terminus`                | 128000     | 8192       | false | text         |
| `hf:deepseek-ai/DeepSeek-V3.2`                         | 159000     | 8192       | false | text         |
| `hf:meta-llama/Llama-3.3-70B-Instruct`                 | 128000     | 8192       | false | text         |
| `hf:meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8` | 524000     | 8192       | false | text         |
| `hf:moonshotai/Kimi-K2-Instruct-0905`                  | 256000     | 8192       | false | text         |
| `hf:openai/gpt-oss-120b`                               | 128000     | 8192       | false | text         |
| `hf:Qwen/Qwen3-235B-A22B-Instruct-2507`                | 256000     | 8192       | false | text         |
| `hf:Qwen/Qwen3-Coder-480B-A35B-Instruct`               | 256000     | 8192       | false | text         |
| `hf:Qwen/Qwen3-VL-235B-A22B-Instruct`                  | 250000     | 8192       | false | text + image |
| `hf:zai-org/GLM-4.5`                                   | 128000     | 128000     | false | text         |
| `hf:zai-org/GLM-4.6`                                   | 198000     | 128000     | false | text         |
| `hf:deepseek-ai/DeepSeek-V3`                           | 128000     | 8192       | false | text         |
| `hf:Qwen/Qwen3-235B-A22B-Thinking-2507`                | 256000     | 8192       | true  | text         |

## æ³¨æ„äº‹é¡¹

- æ¨¡åž‹å¼•ç”¨æ ¼å¼ä¸º `synthetic/<modelId>`ã€‚
- å¦‚æžœå¯ç”¨äº†æ¨¡åž‹å…è®¸åˆ—è¡¨ï¼ˆ`agents.defaults.models`ï¼‰ï¼Œè¯·æ·»åŠ ä½ è®¡åˆ’ä½¿ç”¨çš„æ‰€æœ‰æ¨¡åž‹ã€‚
- å‚é˜…[æ¨¡åž‹æä¾›å•†](/concepts/model-providers)äº†è§£æä¾›å•†è§„åˆ™ã€‚

