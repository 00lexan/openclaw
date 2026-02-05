---
read_when:
  - ä½ éœ€è¦æŒ‰æä¾›å•†åˆ†ç±»çš„æ¨¡åž‹è®¾ç½®å‚è€ƒ
  - ä½ éœ€è¦æ¨¡åž‹æä¾›å•†çš„ç¤ºä¾‹é…ç½®æˆ– CLI æ–°æ‰‹å¼•å¯¼å‘½ä»¤
summary: æ¨¡åž‹æä¾›å•†æ¦‚è¿°ï¼ŒåŒ…å«ç¤ºä¾‹é…ç½®å’Œ CLI æµç¨‹
title: æ¨¡åž‹æä¾›å•†
x-i18n:
  generated_at: "2026-02-03T07:46:28Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 14f73e5a9f9b7c6f017d59a54633942dba95a3eb50f8848b836cfe0b9f6d7719
  source_path: concepts/model-providers.md
  workflow: 15
---

# æ¨¡åž‹æä¾›å•†

æœ¬é¡µä»‹ç» **LLM/æ¨¡åž‹æä¾›å•†**ï¼ˆä¸æ˜¯ WhatsApp/Telegram ç­‰èŠå¤©æ¸ é“ï¼‰ã€‚
å…³äºŽæ¨¡åž‹é€‰æ‹©è§„åˆ™ï¼Œè¯·å‚é˜… [/concepts/models](/concepts/models)ã€‚

## å¿«é€Ÿè§„åˆ™

- æ¨¡åž‹å¼•ç”¨ä½¿ç”¨ `provider/model` æ ¼å¼ï¼ˆä¾‹å¦‚ï¼š`opencode/claude-opus-4-5`ï¼‰ã€‚
- å¦‚æžœè®¾ç½®äº† `agents.defaults.models`ï¼Œå®ƒå°†æˆä¸ºå…è®¸åˆ—è¡¨ã€‚
- CLI è¾…åŠ©å·¥å…·ï¼š` onboard`ã€` models list`ã€` models set <provider/model>`ã€‚

## å†…ç½®æä¾›å•†ï¼ˆpi-ai ç›®å½•ï¼‰

 é™„å¸¦ pi-ai ç›®å½•ã€‚è¿™äº›æä¾›å•†**ä¸éœ€è¦** `models.providers` é…ç½®ï¼›åªéœ€è®¾ç½®è®¤è¯ + é€‰æ‹©æ¨¡åž‹ã€‚

### OpenAI

- æä¾›å•†ï¼š`openai`
- è®¤è¯ï¼š`OPENAI_API_KEY`
- ç¤ºä¾‹æ¨¡åž‹ï¼š`openai/gpt-5.2`
- CLIï¼š` onboard --auth-choice openai-api-key`

```json5
{
  agents: { defaults: { model: { primary: "openai/gpt-5.2" } } },
}
```

### Anthropic

- æä¾›å•†ï¼š`anthropic`
- è®¤è¯ï¼š`ANTHROPIC_API_KEY` æˆ– `claude setup-token`
- ç¤ºä¾‹æ¨¡åž‹ï¼š`anthropic/claude-opus-4-5`
- CLIï¼š` onboard --auth-choice token`ï¼ˆç²˜è´´ setup-tokenï¼‰æˆ– ` models auth paste-token --provider anthropic`

```json5
{
  agents: { defaults: { model: { primary: "anthropic/claude-opus-4-5" } } },
}
```

### OpenAI Code (Codex)

- æä¾›å•†ï¼š`openai-codex`
- è®¤è¯ï¼šOAuth (ChatGPT)
- ç¤ºä¾‹æ¨¡åž‹ï¼š`openai-codex/gpt-5.2`
- CLIï¼š` onboard --auth-choice openai-codex` æˆ– ` models auth login --provider openai-codex`

```json5
{
  agents: { defaults: { model: { primary: "openai-codex/gpt-5.2" } } },
}
```

### OpenCode Zen

- æä¾›å•†ï¼š`opencode`
- è®¤è¯ï¼š`OPENCODE_API_KEY`ï¼ˆæˆ– `OPENCODE_ZEN_API_KEY`ï¼‰
- ç¤ºä¾‹æ¨¡åž‹ï¼š`opencode/claude-opus-4-5`
- CLIï¼š` onboard --auth-choice opencode-zen`

```json5
{
  agents: { defaults: { model: { primary: "opencode/claude-opus-4-5" } } },
}
```

### Google Geminiï¼ˆAPI å¯†é’¥ï¼‰

- æä¾›å•†ï¼š`google`
- è®¤è¯ï¼š`GEMINI_API_KEY`
- ç¤ºä¾‹æ¨¡åž‹ï¼š`google/gemini-3-pro-preview`
- CLIï¼š` onboard --auth-choice gemini-api-key`

### Google Vertexã€Antigravity å’Œ Gemini CLI

- æä¾›å•†ï¼š`google-vertex`ã€`google-antigravity`ã€`google-gemini-cli`
- è®¤è¯ï¼šVertex ä½¿ç”¨ gcloud ADCï¼›Antigravity/Gemini CLI ä½¿ç”¨å„è‡ªçš„è®¤è¯æµç¨‹
- Antigravity OAuth ä½œä¸ºæ†ç»‘æ’ä»¶æä¾›ï¼ˆ`google-antigravity-auth`ï¼Œé»˜è®¤ç¦ç”¨ï¼‰ã€‚
  - å¯ç”¨ï¼š` plugins enable google-antigravity-auth`
  - ç™»å½•ï¼š` models auth login --provider google-antigravity --set-default`
- Gemini CLI OAuth ä½œä¸ºæ†ç»‘æ’ä»¶æä¾›ï¼ˆ`google-gemini-cli-auth`ï¼Œé»˜è®¤ç¦ç”¨ï¼‰ã€‚
  - å¯ç”¨ï¼š` plugins enable google-gemini-cli-auth`
  - ç™»å½•ï¼š` models auth login --provider google-gemini-cli --set-default`
  - æ³¨æ„ï¼šä½ **ä¸éœ€è¦**å°†å®¢æˆ·ç«¯ ID æˆ–å¯†é’¥ç²˜è´´åˆ° `.json` ä¸­ã€‚CLI ç™»å½•æµç¨‹å°†ä»¤ç‰Œå­˜å‚¨åœ¨ Gateway ç½‘å…³ä¸»æœºçš„è®¤è¯é…ç½®æ–‡ä»¶ä¸­ã€‚

### Z.AI (GLM)

- æä¾›å•†ï¼š`zai`
- è®¤è¯ï¼š`ZAI_API_KEY`
- ç¤ºä¾‹æ¨¡åž‹ï¼š`zai/glm-4.7`
- CLIï¼š` onboard --auth-choice zai-api-key`
  - åˆ«åï¼š`z.ai/*` å’Œ `z-ai/*` è§„èŒƒåŒ–ä¸º `zai/*`

### Vercel AI Gateway

- æä¾›å•†ï¼š`vercel-ai-gateway`
- è®¤è¯ï¼š`AI_GATEWAY_API_KEY`
- ç¤ºä¾‹æ¨¡åž‹ï¼š`vercel-ai-gateway/anthropic/claude-opus-4.5`
- CLIï¼š` onboard --auth-choice ai-gateway-api-key`

### å…¶ä»–å†…ç½®æä¾›å•†

- OpenRouterï¼š`openrouter`ï¼ˆ`OPENROUTER_API_KEY`ï¼‰
- ç¤ºä¾‹æ¨¡åž‹ï¼š`openrouter/anthropic/claude-sonnet-4-5`
- xAIï¼š`xai`ï¼ˆ`XAI_API_KEY`ï¼‰
- Groqï¼š`groq`ï¼ˆ`GROQ_API_KEY`ï¼‰
- Cerebrasï¼š`cerebras`ï¼ˆ`CEREBRAS_API_KEY`ï¼‰
  - Cerebras ä¸Šçš„ GLM æ¨¡åž‹ä½¿ç”¨ ID `zai-glm-4.7` å’Œ `zai-glm-4.6`ã€‚
  - OpenAI å…¼å®¹çš„åŸºç¡€ URLï¼š`https://api.cerebras.ai/v1`ã€‚
- Mistralï¼š`mistral`ï¼ˆ`MISTRAL_API_KEY`ï¼‰
- GitHub Copilotï¼š`github-copilot`ï¼ˆ`COPILOT_GITHUB_TOKEN` / `GH_TOKEN` / `GITHUB_TOKEN`ï¼‰

## é€šè¿‡ `models.providers` é…ç½®çš„æä¾›å•†ï¼ˆè‡ªå®šä¹‰/åŸºç¡€ URLï¼‰

ä½¿ç”¨ `models.providers`ï¼ˆæˆ– `models.json`ï¼‰æ·»åŠ **è‡ªå®šä¹‰**æä¾›å•†æˆ– OpenAI/Anthropic å…¼å®¹çš„ä»£ç†ã€‚

### Moonshot AI (Kimi)

Moonshot ä½¿ç”¨ OpenAI å…¼å®¹ç«¯ç‚¹ï¼Œå› æ­¤å°†å…¶é…ç½®ä¸ºè‡ªå®šä¹‰æä¾›å•†ï¼š

- æä¾›å•†ï¼š`moonshot`
- è®¤è¯ï¼š`MOONSHOT_API_KEY`
- ç¤ºä¾‹æ¨¡åž‹ï¼š`moonshot/kimi-k2.5`

Kimi K2 æ¨¡åž‹ IDï¼š

{/_ moonshot-kimi-k2-model-refs:start _/ && null}

- `moonshot/kimi-k2.5`
- `moonshot/kimi-k2-0905-preview`
- `moonshot/kimi-k2-turbo-preview`
- `moonshot/kimi-k2-thinking`
- `moonshot/kimi-k2-thinking-turbo`
  {/_ moonshot-kimi-k2-model-refs:end _/ && null}

```json5
{
  agents: {
    defaults: { model: { primary: "moonshot/kimi-k2.5" } },
  },
  models: {
    mode: "merge",
    providers: {
      moonshot: {
        baseUrl: "https://api.moonshot.ai/v1",
        apiKey: "${MOONSHOT_API_KEY}",
        api: "openai-completions",
        models: [{ id: "kimi-k2.5", name: "Kimi K2.5" }],
      },
    },
  },
}
```

### Kimi Coding

Kimi Coding ä½¿ç”¨ Moonshot AI çš„ Anthropic å…¼å®¹ç«¯ç‚¹ï¼š

- æä¾›å•†ï¼š`kimi-coding`
- è®¤è¯ï¼š`KIMI_API_KEY`
- ç¤ºä¾‹æ¨¡åž‹ï¼š`kimi-coding/k2p5`

```json5
{
  env: { KIMI_API_KEY: "sk-..." },
  agents: {
    defaults: { model: { primary: "kimi-coding/k2p5" } },
  },
}
```

### Qwen OAuthï¼ˆå…è´¹å±‚çº§ï¼‰

Qwen é€šè¿‡è®¾å¤‡ç æµç¨‹æä¾›å¯¹ Qwen Coder + Vision çš„ OAuth è®¿é—®ã€‚
å¯ç”¨æ†ç»‘æ’ä»¶ï¼Œç„¶åŽç™»å½•ï¼š

```bash
 plugins enable qwen-portal-auth
 models auth login --provider qwen-portal --set-default
```

æ¨¡åž‹å¼•ç”¨ï¼š

- `qwen-portal/coder-model`
- `qwen-portal/vision-model`

å‚è§ [/providers/qwen](/providers/qwen) äº†è§£è®¾ç½®è¯¦æƒ…å’Œæ³¨æ„äº‹é¡¹ã€‚

### Synthetic

Synthetic é€šè¿‡ `synthetic` æä¾›å•†æä¾› Anthropic å…¼å®¹æ¨¡åž‹ï¼š

- æä¾›å•†ï¼š`synthetic`
- è®¤è¯ï¼š`SYNTHETIC_API_KEY`
- ç¤ºä¾‹æ¨¡åž‹ï¼š`synthetic/hf:MiniMaxAI/MiniMax-M2.1`
- CLIï¼š` onboard --auth-choice synthetic-api-key`

```json5
{
  agents: {
    defaults: { model: { primary: "synthetic/hf:MiniMaxAI/MiniMax-M2.1" } },
  },
  models: {
    mode: "merge",
    providers: {
      synthetic: {
        baseUrl: "https://api.synthetic.new/anthropic",
        apiKey: "${SYNTHETIC_API_KEY}",
        api: "anthropic-messages",
        models: [{ id: "hf:MiniMaxAI/MiniMax-M2.1", name: "MiniMax M2.1" }],
      },
    },
  },
}
```

### MiniMax

MiniMax é€šè¿‡ `models.providers` é…ç½®ï¼Œå› ä¸ºå®ƒä½¿ç”¨è‡ªå®šä¹‰ç«¯ç‚¹ï¼š

- MiniMaxï¼ˆAnthropic å…¼å®¹ï¼‰ï¼š`--auth-choice minimax-api`
- è®¤è¯ï¼š`MINIMAX_API_KEY`

å‚è§ [/providers/minimax](/providers/minimax) äº†è§£è®¾ç½®è¯¦æƒ…ã€æ¨¡åž‹é€‰é¡¹å’Œé…ç½®ç‰‡æ®µã€‚

### Ollama

Ollama æ˜¯æä¾› OpenAI å…¼å®¹ API çš„æœ¬åœ° LLM è¿è¡Œæ—¶ï¼š

- æä¾›å•†ï¼š`ollama`
- è®¤è¯ï¼šæ— éœ€ï¼ˆæœ¬åœ°æœåŠ¡å™¨ï¼‰
- ç¤ºä¾‹æ¨¡åž‹ï¼š`ollama/llama3.3`
- å®‰è£…ï¼šhttps://ollama.ai

```bash
# Install Ollama, then pull a model:
ollama pull llama3.3
```

```json5
{
  agents: {
    defaults: { model: { primary: "ollama/llama3.3" } },
  },
}
```

å½“ Ollama åœ¨æœ¬åœ° `http://127.0.0.1:11434/v1` è¿è¡Œæ—¶ä¼šè‡ªåŠ¨æ£€æµ‹ã€‚å‚è§ [/providers/ollama](/providers/ollama) äº†è§£æ¨¡åž‹æŽ¨èå’Œè‡ªå®šä¹‰é…ç½®ã€‚

### æœ¬åœ°ä»£ç†ï¼ˆLM Studioã€vLLMã€LiteLLM ç­‰ï¼‰

ç¤ºä¾‹ï¼ˆOpenAI å…¼å®¹ï¼‰ï¼š

```json5
{
  agents: {
    defaults: {
      model: { primary: "lmstudio/minimax-m2.1-gs32" },
      models: { "lmstudio/minimax-m2.1-gs32": { alias: "Minimax" } },
    },
  },
  models: {
    providers: {
      lmstudio: {
        baseUrl: "http://localhost:1234/v1",
        apiKey: "LMSTUDIO_KEY",
        api: "openai-completions",
        models: [
          {
            id: "minimax-m2.1-gs32",
            name: "MiniMax M2.1",
            reasoning: false,
            input: ["text"],
            cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
            contextWindow: 200000,
            maxTokens: 8192,
          },
        ],
      },
    },
  },
}
```

æ³¨æ„äº‹é¡¹ï¼š

- å¯¹äºŽè‡ªå®šä¹‰æä¾›å•†ï¼Œ`reasoning`ã€`input`ã€`cost`ã€`contextWindow` å’Œ `maxTokens` æ˜¯å¯é€‰çš„ã€‚
  çœç•¥æ—¶ï¼Œ é»˜è®¤ä¸ºï¼š
  - `reasoning: false`
  - `input: ["text"]`
  - `cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 }`
  - `contextWindow: 200000`
  - `maxTokens: 8192`
- å»ºè®®ï¼šè®¾ç½®ä¸Žä½ çš„ä»£ç†/æ¨¡åž‹é™åˆ¶åŒ¹é…çš„æ˜¾å¼å€¼ã€‚

## CLI ç¤ºä¾‹

```bash
 onboard --auth-choice opencode-zen
 models set opencode/claude-opus-4-5
 models list
```

å¦è¯·å‚é˜…ï¼š[/gateway/configuration](/gateway/configuration) äº†è§£å®Œæ•´é…ç½®ç¤ºä¾‹ã€‚

