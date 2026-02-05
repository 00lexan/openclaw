---
read_when:
  - ä½ æƒ³é€‰æ‹©ä¸€ä¸ªæ¨¡åž‹æä¾›å•†
  - ä½ æƒ³è¦ LLM è®¤è¯ + æ¨¡åž‹é€‰æ‹©çš„å¿«é€Ÿè®¾ç½®ç¤ºä¾‹
summary:  æ”¯æŒçš„æ¨¡åž‹æä¾›å•†ï¼ˆLLMï¼‰
title: æ¨¡åž‹æä¾›å•†å¿«é€Ÿå…¥é—¨
x-i18n:
  generated_at: "2026-02-03T07:53:35Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 2f5b99207dc7860e0a7b541b61e984791f5d7ab1953b3e917365a248a09b025b
  source_path: providers/models.md
  workflow: 15
---

# æ¨¡åž‹æä¾›å•†

 å¯ä»¥ä½¿ç”¨è®¸å¤š LLM æä¾›å•†ã€‚é€‰æ‹©ä¸€ä¸ªï¼Œè¿›è¡Œè®¤è¯ï¼Œç„¶åŽå°†é»˜è®¤æ¨¡åž‹è®¾ç½®ä¸º `provider/model`ã€‚

## æŽ¨èï¼šVeniceï¼ˆVenice AIï¼‰

Venice æ˜¯æˆ‘ä»¬æŽ¨èçš„ Venice AI è®¾ç½®ï¼Œç”¨äºŽéšç§ä¼˜å…ˆçš„æŽ¨ç†ï¼Œå¹¶å¯é€‰æ‹©ä½¿ç”¨ Opus å¤„ç†æœ€å›°éš¾çš„ä»»åŠ¡ã€‚

- é»˜è®¤ï¼š`venice/llama-3.3-70b`
- æœ€ä½³ç»¼åˆï¼š`venice/claude-opus-45`ï¼ˆOpus ä»ç„¶æ˜¯æœ€å¼ºçš„ï¼‰

å‚è§ [Venice AI](/providers/venice)ã€‚

## å¿«é€Ÿå¼€å§‹ï¼ˆä¸¤ä¸ªæ­¥éª¤ï¼‰

1. ä¸Žæä¾›å•†è®¤è¯ï¼ˆé€šå¸¸é€šè¿‡ ` onboard`ï¼‰ã€‚
2. è®¾ç½®é»˜è®¤æ¨¡åž‹ï¼š

```json5
{
  agents: { defaults: { model: { primary: "anthropic/claude-opus-4-5" } } },
}
```

## æ”¯æŒçš„æä¾›å•†ï¼ˆå…¥é—¨é›†ï¼‰

- [OpenAIï¼ˆAPI + Codexï¼‰](/providers/openai)
- [Anthropicï¼ˆAPI + Claude Code CLIï¼‰](/providers/anthropic)
- [OpenRouter](/providers/openrouter)
- [Vercel AI Gateway](/providers/vercel-ai-gateway)
- [Moonshot AIï¼ˆKimi + Kimi Codingï¼‰](/providers/moonshot)
- [Synthetic](/providers/synthetic)
- [OpenCode Zen](/providers/opencode)
- [Z.AI](/providers/zai)
- [GLM æ¨¡åž‹](/providers/glm)
- [MiniMax](/providers/minimax)
- [Veniceï¼ˆVenice AIï¼‰](/providers/venice)
- [Amazon Bedrock](/bedrock)

æœ‰å…³å®Œæ•´çš„æä¾›å•†ç›®å½•ï¼ˆxAIã€Groqã€Mistral ç­‰ï¼‰å’Œé«˜çº§é…ç½®ï¼Œè¯·å‚é˜…[æ¨¡åž‹æä¾›å•†](/concepts/model-providers)ã€‚


