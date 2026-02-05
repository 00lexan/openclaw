---
read_when:
  - ä½ æƒ³é€‰æ‹©ä¸€ä¸ªæ¨¡åž‹æä¾›å•†
  - ä½ éœ€è¦å¿«é€Ÿäº†è§£æ”¯æŒçš„ LLM åŽç«¯
summary:  æ”¯æŒçš„æ¨¡åž‹æä¾›å•†ï¼ˆLLMï¼‰
title: æ¨¡åž‹æä¾›å•†
x-i18n:
  generated_at: "2026-02-03T07:53:32Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: eb4a97438adcf610499253afcf8b2af6624f4be098df389a6c3746f14c4a901b
  source_path: providers/index.md
  workflow: 15
---

# æ¨¡åž‹æä¾›å•†

 å¯ä»¥ä½¿ç”¨è®¸å¤š LLM æä¾›å•†ã€‚é€‰æ‹©ä¸€ä¸ªæä¾›å•†ï¼Œè¿›è¡Œè®¤è¯ï¼Œç„¶åŽå°†é»˜è®¤æ¨¡åž‹è®¾ç½®ä¸º `provider/model`ã€‚

æ­£åœ¨å¯»æ‰¾èŠå¤©æ¸ é“æ–‡æ¡£ï¼ˆWhatsApp/Telegram/Discord/Slack/Mattermostï¼ˆæ’ä»¶ï¼‰ç­‰ï¼‰ï¼Ÿå‚è§[æ¸ é“](/channels)ã€‚

## äº®ç‚¹ï¼šVeniceï¼ˆVenice AIï¼‰

Venice æ˜¯æˆ‘ä»¬æŽ¨èçš„ Venice AI è®¾ç½®ï¼Œç”¨äºŽéšç§ä¼˜å…ˆçš„æŽ¨ç†ï¼Œå¹¶å¯é€‰æ‹©ä½¿ç”¨ Opus å¤„ç†å›°éš¾ä»»åŠ¡ã€‚

- é»˜è®¤ï¼š`venice/llama-3.3-70b`
- æœ€ä½³ç»¼åˆï¼š`venice/claude-opus-45`ï¼ˆOpus ä»ç„¶æ˜¯æœ€å¼ºçš„ï¼‰

å‚è§ [Venice AI](/providers/venice)ã€‚

## å¿«é€Ÿå¼€å§‹

1. ä¸Žæä¾›å•†è¿›è¡Œè®¤è¯ï¼ˆé€šå¸¸é€šè¿‡ ` onboard`ï¼‰ã€‚
2. è®¾ç½®é»˜è®¤æ¨¡åž‹ï¼š

```json5
{
  agents: { defaults: { model: { primary: "anthropic/claude-opus-4-5" } } },
}
```

## æä¾›å•†æ–‡æ¡£

- [OpenAIï¼ˆAPI + Codexï¼‰](/providers/openai)
- [Anthropicï¼ˆAPI + Claude Code CLIï¼‰](/providers/anthropic)
- [Qwenï¼ˆOAuthï¼‰](/providers/qwen)
- [OpenRouter](/providers/openrouter)
- [Vercel AI Gateway](/providers/vercel-ai-gateway)
- [Moonshot AIï¼ˆKimi + Kimi Codingï¼‰](/providers/moonshot)
- [OpenCode Zen](/providers/opencode)
- [Amazon Bedrock](/bedrock)
- [Z.AI](/providers/zai)
- [Xiaomi](/providers/xiaomi)
- [GLM æ¨¡åž‹](/providers/glm)
- [MiniMax](/providers/minimax)
- [Veniceï¼ˆVenice AIï¼Œæ³¨é‡éšç§ï¼‰](/providers/venice)
- [Ollamaï¼ˆæœ¬åœ°æ¨¡åž‹ï¼‰](/providers/ollama)

## è½¬å½•æä¾›å•†

- [Deepgramï¼ˆéŸ³é¢‘è½¬å½•ï¼‰](/providers/deepgram)

## ç¤¾åŒºå·¥å…·

- [Claude Max API Proxy](/providers/claude-max-api-proxy) - å°† Claude Max/Pro è®¢é˜…ä½œä¸º OpenAI å…¼å®¹çš„ API ç«¯ç‚¹ä½¿ç”¨

æœ‰å…³å®Œæ•´çš„æä¾›å•†ç›®å½•ï¼ˆxAIã€Groqã€Mistral ç­‰ï¼‰å’Œé«˜çº§é…ç½®ï¼Œ
å‚è§[æ¨¡åž‹æä¾›å•†](/concepts/model-providers)ã€‚


