---
read_when:
  - ä½ æƒ³äº†è§£ Moonshot K2ï¼ˆMoonshot å¼€æ”¾å¹³å°ï¼‰ä¸Ž Kimi Coding çš„é…ç½®
  - ä½ éœ€è¦äº†è§£ç‹¬ç«‹çš„ç«¯ç‚¹ã€å¯†é’¥å’Œæ¨¡åž‹å¼•ç”¨
  - ä½ æƒ³èŽ·å–ä»»ä¸€æä¾›å•†çš„å¯å¤åˆ¶ç²˜è´´é…ç½®
summary: é…ç½® Moonshot K2 ä¸Ž Kimi Codingï¼ˆç‹¬ç«‹æä¾›å•†å’Œå¯†é’¥ï¼‰
title: Moonshot AI
x-i18n:
  generated_at: "2026-02-01T21:35:13Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 2de81b1a37a0e6e61e0e142fcd36760ecd00834e107dc9b5e38bbf971b27e18e
  source_path: providers/moonshot.md
  workflow: 15
---

# Moonshot AI (Kimi)

Moonshot æä¾›å…¼å®¹ OpenAI ç«¯ç‚¹çš„ Kimi APIã€‚é…ç½®æä¾›å•†å¹¶å°†é»˜è®¤æ¨¡åž‹è®¾ç½®ä¸º `moonshot/kimi-k2.5`ï¼Œæˆ–ä½¿ç”¨ Kimi Coding çš„ `kimi-coding/k2p5`ã€‚

å½“å‰ Kimi K2 æ¨¡åž‹ IDï¼š
{/_ moonshot-kimi-k2-ids:start _/}

- `kimi-k2.5`
- `kimi-k2-0905-preview`
- `kimi-k2-turbo-preview`
- `kimi-k2-thinking`
- `kimi-k2-thinking-turbo`
  {/_ moonshot-kimi-k2-ids:end _/}

```bash
 onboard --auth-choice moonshot-api-key
```

Kimi Codingï¼š

```bash
 onboard --auth-choice kimi-code-api-key
```

æ³¨æ„ï¼šMoonshot å’Œ Kimi Coding æ˜¯ç‹¬ç«‹çš„æä¾›å•†ã€‚å¯†é’¥ä¸å¯äº’æ¢ï¼Œç«¯ç‚¹ä¸åŒï¼Œæ¨¡åž‹å¼•ç”¨ä¹Ÿä¸åŒï¼ˆMoonshot ä½¿ç”¨ `moonshot/...`ï¼ŒKimi Coding ä½¿ç”¨ `kimi-coding/...`ï¼‰ã€‚

## é…ç½®ç‰‡æ®µï¼ˆMoonshot APIï¼‰

```json5
{
  env: { MOONSHOT_API_KEY: "sk-..." },
  agents: {
    defaults: {
      model: { primary: "moonshot/kimi-k2.5" },
      models: {
        // moonshot-kimi-k2-aliases:start
        "moonshot/kimi-k2.5": { alias: "Kimi K2.5" },
        "moonshot/kimi-k2-0905-preview": { alias: "Kimi K2" },
        "moonshot/kimi-k2-turbo-preview": { alias: "Kimi K2 Turbo" },
        "moonshot/kimi-k2-thinking": { alias: "Kimi K2 Thinking" },
        "moonshot/kimi-k2-thinking-turbo": { alias: "Kimi K2 Thinking Turbo" },
        // moonshot-kimi-k2-aliases:end
      },
    },
  },
  models: {
    mode: "merge",
    providers: {
      moonshot: {
        baseUrl: "https://api.moonshot.ai/v1",
        apiKey: "${MOONSHOT_API_KEY}",
        api: "openai-completions",
        models: [
          // moonshot-kimi-k2-models:start
          {
            id: "kimi-k2.5",
            name: "Kimi K2.5",
            reasoning: false,
            input: ["text"],
            cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
            contextWindow: 256000,
            maxTokens: 8192,
          },
          {
            id: "kimi-k2-0905-preview",
            name: "Kimi K2 0905 Preview",
            reasoning: false,
            input: ["text"],
            cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
            contextWindow: 256000,
            maxTokens: 8192,
          },
          {
            id: "kimi-k2-turbo-preview",
            name: "Kimi K2 Turbo",
            reasoning: false,
            input: ["text"],
            cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
            contextWindow: 256000,
            maxTokens: 8192,
          },
          {
            id: "kimi-k2-thinking",
            name: "Kimi K2 Thinking",
            reasoning: true,
            input: ["text"],
            cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
            contextWindow: 256000,
            maxTokens: 8192,
          },
          {
            id: "kimi-k2-thinking-turbo",
            name: "Kimi K2 Thinking Turbo",
            reasoning: true,
            input: ["text"],
            cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
            contextWindow: 256000,
            maxTokens: 8192,
          },
          // moonshot-kimi-k2-models:end
        ],
      },
    },
  },
}
```

## Kimi Coding

```json5
{
  env: { KIMI_API_KEY: "sk-..." },
  agents: {
    defaults: {
      model: { primary: "kimi-coding/k2p5" },
      models: {
        "kimi-coding/k2p5": { alias: "Kimi K2.5" },
      },
    },
  },
}
```

## æ³¨æ„äº‹é¡¹

- Moonshot æ¨¡åž‹å¼•ç”¨ä½¿ç”¨ `moonshot/<modelId>`ã€‚Kimi Coding æ¨¡åž‹å¼•ç”¨ä½¿ç”¨ `kimi-coding/<modelId>`ã€‚
- å¦‚æœ‰éœ€è¦ï¼Œå¯åœ¨ `models.providers` ä¸­è¦†ç›–å®šä»·å’Œä¸Šä¸‹æ–‡å…ƒæ•°æ®ã€‚
- å¦‚æžœ Moonshot å‘å¸ƒäº†æŸä¸ªæ¨¡åž‹çš„ä¸åŒä¸Šä¸‹æ–‡é™åˆ¶ï¼Œè¯·ç›¸åº”è°ƒæ•´ `contextWindow`ã€‚
- å¦‚éœ€ä½¿ç”¨ä¸­å›½ç«¯ç‚¹ï¼Œè¯·ä½¿ç”¨ `https://api.moonshot.cn/v1`ã€‚


