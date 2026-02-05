---
read_when:
  - æ·»åŠ æˆ–ä¿®æ”¹æ¨¡åž‹ CLIï¼ˆmodels list/set/scan/aliases/fallbacksï¼‰
  - æ›´æ”¹æ¨¡åž‹å›žé€€è¡Œä¸ºæˆ–é€‰æ‹©ç”¨æˆ·ä½“éªŒ
  - æ›´æ–°æ¨¡åž‹æ‰«ææŽ¢æµ‹ï¼ˆå·¥å…·/å›¾åƒï¼‰
summary: æ¨¡åž‹ CLIï¼šåˆ—è¡¨ã€è®¾ç½®ã€åˆ«åã€å›žé€€ã€æ‰«æã€çŠ¶æ€
title: æ¨¡åž‹ CLI
x-i18n:
  generated_at: "2026-02-03T10:05:42Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: e8b54bb370b4f63a9b917594fb0f6ff48192e168196d30c713b8bbe72b78fef6
  source_path: concepts/models.md
  workflow: 15
---

# æ¨¡åž‹ CLI

å‚è§ [/concepts/model-failover](/concepts/model-failover) äº†è§£è®¤è¯é…ç½®æ–‡ä»¶è½®æ¢ã€å†·å´æ—¶é—´åŠå…¶ä¸Žå›žé€€çš„äº¤äº’ã€‚
å¿«é€Ÿæä¾›å•†æ¦‚è¿° + ç¤ºä¾‹ï¼š[/concepts/model-providers](/concepts/model-providers)ã€‚

## æ¨¡åž‹é€‰æ‹©å·¥ä½œåŽŸç†

 æŒ‰ä»¥ä¸‹é¡ºåºé€‰æ‹©æ¨¡åž‹ï¼š

1. **ä¸»è¦**æ¨¡åž‹ï¼ˆ`agents.defaults.model.primary` æˆ– `agents.defaults.model`ï¼‰ã€‚
2. `agents.defaults.model.fallbacks` ä¸­çš„**å›žé€€**ï¼ˆæŒ‰é¡ºåºï¼‰ã€‚
3. **æä¾›å•†è®¤è¯æ•…éšœè½¬ç§»**åœ¨ç§»åŠ¨åˆ°ä¸‹ä¸€ä¸ªæ¨¡åž‹ä¹‹å‰åœ¨æä¾›å•†å†…éƒ¨å‘ç”Ÿã€‚

ç›¸å…³ï¼š

- `agents.defaults.models` æ˜¯  å¯ä½¿ç”¨çš„æ¨¡åž‹ç™½åå•/ç›®å½•ï¼ˆåŠ ä¸Šåˆ«åï¼‰ã€‚
- `agents.defaults.imageModel` **ä»…åœ¨**ä¸»è¦æ¨¡åž‹æ— æ³•æŽ¥å—å›¾åƒæ—¶ä½¿ç”¨ã€‚
- æ¯ä¸ªæ™ºèƒ½ä½“çš„é»˜è®¤å€¼å¯ä»¥é€šè¿‡ `agents.list[].model` åŠ ç»‘å®šè¦†ç›– `agents.defaults.model`ï¼ˆå‚è§ [/concepts/multi-agent](/concepts/multi-agent)ï¼‰ã€‚

## å¿«é€Ÿæ¨¡åž‹æŽ¨èï¼ˆç»éªŒä¹‹è°ˆï¼‰

- **GLM**ï¼šåœ¨ç¼–ç¨‹/å·¥å…·è°ƒç”¨æ–¹é¢ç¨å¥½ã€‚
- **MiniMax**ï¼šåœ¨å†™ä½œå’Œæ°›å›´æ–¹é¢æ›´å¥½ã€‚

## è®¾ç½®å‘å¯¼ï¼ˆæŽ¨èï¼‰

å¦‚æžœä½ ä¸æƒ³æ‰‹åŠ¨ç¼–è¾‘é…ç½®ï¼Œè¯·è¿è¡Œæ–°æ‰‹å¼•å¯¼å‘å¯¼ï¼š

```bash
 onboard
```

å®ƒå¯ä»¥ä¸ºå¸¸è§æä¾›å•†è®¾ç½®æ¨¡åž‹ + è®¤è¯ï¼ŒåŒ…æ‹¬ **OpenAI Codeï¼ˆCodexï¼‰è®¢é˜…**ï¼ˆOAuthï¼‰å’Œ **Anthropic**ï¼ˆæŽ¨èä½¿ç”¨ API å¯†é’¥ï¼›ä¹Ÿæ”¯æŒ `claude setup-token`ï¼‰ã€‚

## é…ç½®é”®ï¼ˆæ¦‚è¿°ï¼‰

- `agents.defaults.model.primary` å’Œ `agents.defaults.model.fallbacks`
- `agents.defaults.imageModel.primary` å’Œ `agents.defaults.imageModel.fallbacks`
- `agents.defaults.models`ï¼ˆç™½åå• + åˆ«å + æä¾›å•†å‚æ•°ï¼‰
- `models.providers`ï¼ˆå†™å…¥ `models.json` çš„è‡ªå®šä¹‰æä¾›å•†ï¼‰

æ¨¡åž‹å¼•ç”¨ä¼šè§„èŒƒåŒ–ä¸ºå°å†™ã€‚æä¾›å•†åˆ«åå¦‚ `z.ai/*` ä¼šè§„èŒƒåŒ–ä¸º `zai/*`ã€‚

æä¾›å•†é…ç½®ç¤ºä¾‹ï¼ˆåŒ…æ‹¬ OpenCode Zenï¼‰åœ¨ [/gateway/configuration](/gateway/configuration#opencode-zen-multi-model-proxy)ã€‚

## "Model is not allowed"ï¼ˆä»¥åŠä¸ºä»€ä¹ˆå›žå¤åœæ­¢ï¼‰

å¦‚æžœè®¾ç½®äº† `agents.defaults.models`ï¼Œå®ƒå°†æˆä¸º `/model` å’Œä¼šè¯è¦†ç›–çš„**ç™½åå•**ã€‚å½“ç”¨æˆ·é€‰æ‹©ä¸åœ¨è¯¥ç™½åå•ä¸­çš„æ¨¡åž‹æ—¶ï¼Œ è¿”å›žï¼š

```
Model "provider/model" is not allowed. Use /model to list available models.
```

è¿™å‘ç”Ÿåœ¨æ­£å¸¸å›žå¤ç”Ÿæˆ**ä¹‹å‰**ï¼Œæ‰€ä»¥æ¶ˆæ¯å¯èƒ½æ„Ÿè§‰åƒ"æ²¡æœ‰å“åº”"ã€‚ä¿®å¤æ–¹æ³•æ˜¯ï¼š

- å°†æ¨¡åž‹æ·»åŠ åˆ° `agents.defaults.models`ï¼Œæˆ–
- æ¸…é™¤ç™½åå•ï¼ˆåˆ é™¤ `agents.defaults.models`ï¼‰ï¼Œæˆ–
- ä»Ž `/model list` ä¸­é€‰æ‹©ä¸€ä¸ªæ¨¡åž‹ã€‚

ç™½åå•é…ç½®ç¤ºä¾‹ï¼š

```json5
{
  agent: {
    model: { primary: "anthropic/claude-sonnet-4-5" },
    models: {
      "anthropic/claude-sonnet-4-5": { alias: "Sonnet" },
      "anthropic/claude-opus-4-5": { alias: "Opus" },
    },
  },
}
```

## åœ¨èŠå¤©ä¸­åˆ‡æ¢æ¨¡åž‹ï¼ˆ`/model`ï¼‰

ä½ å¯ä»¥åœ¨ä¸é‡å¯çš„æƒ…å†µä¸‹åˆ‡æ¢å½“å‰ä¼šè¯çš„æ¨¡åž‹ï¼š

```
/model
/model list
/model 3
/model openai/gpt-5.2
/model status
```

æ³¨æ„äº‹é¡¹ï¼š

- `/model`ï¼ˆå’Œ `/model list`ï¼‰æ˜¯ç´§å‡‘çš„ç¼–å·é€‰æ‹©å™¨ï¼ˆæ¨¡åž‹ç³»åˆ— + å¯ç”¨æä¾›å•†ï¼‰ã€‚
- `/model <#>` ä»Žè¯¥é€‰æ‹©å™¨ä¸­é€‰æ‹©ã€‚
- `/model status` æ˜¯è¯¦ç»†è§†å›¾ï¼ˆè®¤è¯å€™é€‰é¡¹ï¼Œä»¥åŠé…ç½®æ—¶çš„æä¾›å•†ç«¯ç‚¹ `baseUrl` + `api` æ¨¡å¼ï¼‰ã€‚
- æ¨¡åž‹å¼•ç”¨é€šè¿‡åœ¨**ç¬¬ä¸€ä¸ª** `/` å¤„åˆ†å‰²æ¥è§£æžã€‚è¾“å…¥ `/model <ref>` æ—¶ä½¿ç”¨ `provider/model`ã€‚
- å¦‚æžœæ¨¡åž‹ ID æœ¬èº«åŒ…å« `/`ï¼ˆOpenRouter é£Žæ ¼ï¼‰ï¼Œä½ å¿…é¡»åŒ…å«æä¾›å•†å‰ç¼€ï¼ˆä¾‹å¦‚ï¼š`/model openrouter/moonshotai/kimi-k2`ï¼‰ã€‚
- å¦‚æžœçœç•¥æä¾›å•†ï¼Œ å°†è¾“å…¥è§†ä¸ºåˆ«åæˆ–**é»˜è®¤æä¾›å•†**çš„æ¨¡åž‹ï¼ˆä»…åœ¨æ¨¡åž‹ ID ä¸­æ²¡æœ‰ `/` æ—¶æœ‰æ•ˆï¼‰ã€‚

å®Œæ•´å‘½ä»¤è¡Œä¸º/é…ç½®ï¼š[æ–œæ å‘½ä»¤](/tools/slash-commands)ã€‚

## CLI å‘½ä»¤

```bash
 models list
 models status
 models set <provider/model>
 models set-image <provider/model>

 models aliases list
 models aliases add <alias> <provider/model>
 models aliases remove <alias>

 models fallbacks list
 models fallbacks add <provider/model>
 models fallbacks remove <provider/model>
 models fallbacks clear

 models image-fallbacks list
 models image-fallbacks add <provider/model>
 models image-fallbacks remove <provider/model>
 models image-fallbacks clear
```

` models`ï¼ˆæ— å­å‘½ä»¤ï¼‰æ˜¯ `models status` çš„å¿«æ·æ–¹å¼ã€‚

### `models list`

é»˜è®¤æ˜¾ç¤ºå·²é…ç½®çš„æ¨¡åž‹ã€‚æœ‰ç”¨çš„æ ‡å¿—ï¼š

- `--all`ï¼šå®Œæ•´ç›®å½•
- `--local`ï¼šä»…æœ¬åœ°æä¾›å•†
- `--provider <name>`ï¼šæŒ‰æä¾›å•†ç­›é€‰
- `--plain`ï¼šæ¯è¡Œä¸€ä¸ªæ¨¡åž‹
- `--json`ï¼šæœºå™¨å¯è¯»è¾“å‡º

### `models status`

æ˜¾ç¤ºå·²è§£æžçš„ä¸»è¦æ¨¡åž‹ã€å›žé€€ã€å›¾åƒæ¨¡åž‹ï¼Œä»¥åŠå·²é…ç½®æä¾›å•†çš„è®¤è¯æ¦‚è¿°ã€‚å®ƒè¿˜æ˜¾ç¤ºè®¤è¯å­˜å‚¨ä¸­æ‰¾åˆ°çš„é…ç½®æ–‡ä»¶çš„ OAuth è¿‡æœŸçŠ¶æ€ï¼ˆé»˜è®¤åœ¨ 24 å°æ—¶å†…è­¦å‘Šï¼‰ã€‚`--plain` ä»…æ‰“å°å·²è§£æžçš„ä¸»è¦æ¨¡åž‹ã€‚
OAuth çŠ¶æ€å§‹ç»ˆæ˜¾ç¤ºï¼ˆå¹¶åŒ…å«åœ¨ `--json` è¾“å‡ºä¸­ï¼‰ã€‚å¦‚æžœå·²é…ç½®çš„æä¾›å•†æ²¡æœ‰å‡­è¯ï¼Œ`models status` ä¼šæ‰“å° **Missing auth** éƒ¨åˆ†ã€‚
JSON åŒ…æ‹¬ `auth.oauth`ï¼ˆè­¦å‘Šçª—å£ + é…ç½®æ–‡ä»¶ï¼‰å’Œ `auth.providers`ï¼ˆæ¯ä¸ªæä¾›å•†çš„æœ‰æ•ˆè®¤è¯ï¼‰ã€‚
ä½¿ç”¨ `--check` è¿›è¡Œè‡ªåŠ¨åŒ–ï¼ˆç¼ºå¤±/è¿‡æœŸæ—¶é€€å‡º `1`ï¼Œå³å°†è¿‡æœŸæ—¶é€€å‡º `2`ï¼‰ã€‚

é¦–é€‰çš„ Anthropic è®¤è¯æ˜¯ Claude Code CLI setup-tokenï¼ˆåœ¨ä»»ä½•åœ°æ–¹è¿è¡Œï¼›å¦‚éœ€è¦åœ¨ Gateway ç½‘å…³ä¸»æœºä¸Šç²˜è´´ï¼‰ï¼š

```bash
claude setup-token
 models status
```

## æ‰«æï¼ˆOpenRouter å…è´¹æ¨¡åž‹ï¼‰

` models scan` æ£€æŸ¥ OpenRouter çš„**å…è´¹æ¨¡åž‹ç›®å½•**ï¼Œå¹¶å¯é€‰æ‹©æ€§åœ°æŽ¢æµ‹æ¨¡åž‹çš„å·¥å…·å’Œå›¾åƒæ”¯æŒã€‚

å…³é”®æ ‡å¿—ï¼š

- `--no-probe`ï¼šè·³è¿‡å®žæ—¶æŽ¢æµ‹ï¼ˆä»…å…ƒæ•°æ®ï¼‰
- `--min-params <b>`ï¼šæœ€å°å‚æ•°é‡ï¼ˆåäº¿ï¼‰
- `--max-age-days <days>`ï¼šè·³è¿‡è¾ƒæ—§çš„æ¨¡åž‹
- `--provider <name>`ï¼šæä¾›å•†å‰ç¼€ç­›é€‰
- `--max-candidates <n>`ï¼šå›žé€€åˆ—è¡¨å¤§å°
- `--set-default`ï¼šå°† `agents.defaults.model.primary` è®¾ç½®ä¸ºç¬¬ä¸€ä¸ªé€‰æ‹©
- `--set-image`ï¼šå°† `agents.defaults.imageModel.primary` è®¾ç½®ä¸ºç¬¬ä¸€ä¸ªå›¾åƒé€‰æ‹©

æŽ¢æµ‹éœ€è¦ OpenRouter API å¯†é’¥ï¼ˆæ¥è‡ªè®¤è¯é…ç½®æ–‡ä»¶æˆ– `OPENROUTER_API_KEY`ï¼‰ã€‚æ²¡æœ‰å¯†é’¥æ—¶ï¼Œä½¿ç”¨ `--no-probe` ä»…åˆ—å‡ºå€™é€‰é¡¹ã€‚

æ‰«æç»“æžœæŒ‰ä»¥ä¸‹é¡ºåºæŽ’åï¼š

1. å›¾åƒæ”¯æŒ
2. å·¥å…·å»¶è¿Ÿ
3. ä¸Šä¸‹æ–‡å¤§å°
4. å‚æ•°æ•°é‡

è¾“å…¥

- OpenRouter `/models` åˆ—è¡¨ï¼ˆç­›é€‰ `:free`ï¼‰
- éœ€è¦æ¥è‡ªè®¤è¯é…ç½®æ–‡ä»¶æˆ– `OPENROUTER_API_KEY` çš„ OpenRouter API å¯†é’¥ï¼ˆå‚è§ [/environment](/environment)ï¼‰
- å¯é€‰ç­›é€‰å™¨ï¼š`--max-age-days`ã€`--min-params`ã€`--provider`ã€`--max-candidates`
- æŽ¢æµ‹æŽ§åˆ¶ï¼š`--timeout`ã€`--concurrency`

åœ¨ TTY ä¸­è¿è¡Œæ—¶ï¼Œä½ å¯ä»¥äº¤äº’å¼é€‰æ‹©å›žé€€ã€‚åœ¨éžäº¤äº’æ¨¡å¼ä¸‹ï¼Œä¼ é€’ `--yes` æŽ¥å—é»˜è®¤å€¼ã€‚

## æ¨¡åž‹æ³¨å†Œè¡¨ï¼ˆ`models.json`ï¼‰

`models.providers` ä¸­çš„è‡ªå®šä¹‰æä¾›å•†ä¼šå†™å…¥æ™ºèƒ½ä½“ç›®å½•ä¸‹çš„ `models.json`ï¼ˆé»˜è®¤ `~/./agents/<agentId>/models.json`ï¼‰ã€‚é™¤éž `models.mode` è®¾ç½®ä¸º `replace`ï¼Œå¦åˆ™æ­¤æ–‡ä»¶é»˜è®¤ä¼šè¢«åˆå¹¶ã€‚


