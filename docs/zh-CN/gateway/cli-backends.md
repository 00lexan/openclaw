---
read_when:
  - ä½ æƒ³è¦ä¸€ä¸ªåœ¨ API æä¾›å•†å¤±è´¥æ—¶çš„å¯é å›žé€€
  - ä½ æ­£åœ¨è¿è¡Œ Claude Code CLI æˆ–å…¶ä»–æœ¬åœ° AI CLI å¹¶æƒ³è¦å¤ç”¨å®ƒä»¬
  - ä½ éœ€è¦ä¸€ä¸ªçº¯æ–‡æœ¬ã€æ— å·¥å…·çš„è·¯å¾„ï¼Œä½†ä»æ”¯æŒä¼šè¯å’Œå›¾åƒ
summary: CLI åŽç«¯ï¼šé€šè¿‡æœ¬åœ° AI CLI å®žçŽ°çº¯æ–‡æœ¬å›žé€€
title: CLI åŽç«¯
x-i18n:
  generated_at: "2026-02-03T07:47:52Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 56a96e83b16a4f6443cbf4a9da7a660c41a5b178af5e13f35352c9d72e1b08dd
  source_path: gateway/cli-backends.md
  workflow: 15
---

# CLI åŽç«¯ï¼ˆå›žé€€è¿è¡Œæ—¶ï¼‰

å½“ API æä¾›å•†å®•æœºã€è¢«é™æµæˆ–æš‚æ—¶å¼‚å¸¸æ—¶ï¼Œ å¯ä»¥è¿è¡Œ**æœ¬åœ° AI CLI** ä½œä¸º**çº¯æ–‡æœ¬å›žé€€**ã€‚è¿™æ˜¯æœ‰æ„ä¿å®ˆçš„è®¾è®¡ï¼š

- **å·¥å…·è¢«ç¦ç”¨**ï¼ˆæ— å·¥å…·è°ƒç”¨ï¼‰ã€‚
- **æ–‡æœ¬è¾“å…¥ â†’ æ–‡æœ¬è¾“å‡º**ï¼ˆå¯é ï¼‰ã€‚
- **æ”¯æŒä¼šè¯**ï¼ˆå› æ­¤åŽç»­è½®æ¬¡ä¿æŒè¿žè´¯ï¼‰ã€‚
- å¦‚æžœ CLI æŽ¥å—å›¾åƒè·¯å¾„ï¼Œ**å›¾åƒå¯ä»¥ä¼ é€’**ã€‚

è¿™è¢«è®¾è®¡ä¸º**å®‰å…¨ç½‘**è€Œéžä¸»è¦è·¯å¾„ã€‚å½“ä½ æƒ³è¦"å§‹ç»ˆæœ‰æ•ˆ"çš„æ–‡æœ¬å“åº”è€Œä¸ä¾èµ–å¤–éƒ¨ API æ—¶ä½¿ç”¨å®ƒã€‚

## æ–°æ‰‹å‹å¥½å¿«é€Ÿå¼€å§‹

ä½ å¯ä»¥**æ— éœ€ä»»ä½•é…ç½®**ä½¿ç”¨ Claude Code CLIï¼ˆ è‡ªå¸¦å†…ç½®é»˜è®¤å€¼ï¼‰ï¼š

```bash
 agent --message "hi" --model claude-cli/opus-4.5
```

Codex CLI ä¹Ÿå¯ä»¥å¼€ç®±å³ç”¨ï¼š

```bash
 agent --message "hi" --model codex-cli/gpt-5.2-codex
```

å¦‚æžœä½ çš„ Gateway ç½‘å…³åœ¨ launchd/systemd ä¸‹è¿è¡Œä¸” PATH å¾ˆç²¾ç®€ï¼Œåªéœ€æ·»åŠ å‘½ä»¤è·¯å¾„ï¼š

```json5
{
  agents: {
    defaults: {
      cliBackends: {
        "claude-cli": {
          command: "/opt/homebrew/bin/claude",
        },
      },
    },
  },
}
```

å°±è¿™æ ·ã€‚é™¤äº† CLI æœ¬èº«å¤–ï¼Œä¸éœ€è¦å¯†é’¥ï¼Œä¸éœ€è¦é¢å¤–çš„è®¤è¯é…ç½®ã€‚

## ä½œä¸ºå›žé€€ä½¿ç”¨

å°† CLI åŽç«¯æ·»åŠ åˆ°ä½ çš„å›žé€€åˆ—è¡¨ä¸­ï¼Œè¿™æ ·å®ƒåªåœ¨ä¸»è¦æ¨¡åž‹å¤±è´¥æ—¶è¿è¡Œï¼š

```json5
{
  agents: {
    defaults: {
      model: {
        primary: "anthropic/claude-opus-4-5",
        fallbacks: ["claude-cli/opus-4.5"],
      },
      models: {
        "anthropic/claude-opus-4-5": { alias: "Opus" },
        "claude-cli/opus-4.5": {},
      },
    },
  },
}
```

æ³¨æ„äº‹é¡¹ï¼š

- å¦‚æžœä½ ä½¿ç”¨ `agents.defaults.models`ï¼ˆå…è®¸åˆ—è¡¨ï¼‰ï¼Œå¿…é¡»åŒ…å« `claude-cli/...`ã€‚
- å¦‚æžœä¸»è¦æä¾›å•†å¤±è´¥ï¼ˆè®¤è¯ã€é™æµã€è¶…æ—¶ï¼‰ï¼Œ å°†æŽ¥ç€å°è¯• CLI åŽç«¯ã€‚

## é…ç½®æ¦‚è§ˆ

æ‰€æœ‰ CLI åŽç«¯ä½äºŽï¼š

```
agents.defaults.cliBackends
```

æ¯ä¸ªæ¡ç›®ä»¥**æä¾›å•† ID**ï¼ˆä¾‹å¦‚ `claude-cli`ã€`my-cli`ï¼‰ä¸ºé”®ã€‚æä¾›å•† ID æˆä¸ºä½ çš„æ¨¡åž‹å¼•ç”¨çš„å·¦ä¾§éƒ¨åˆ†ï¼š

```
<provider>/<model>
```

### é…ç½®ç¤ºä¾‹

```json5
{
  agents: {
    defaults: {
      cliBackends: {
        "claude-cli": {
          command: "/opt/homebrew/bin/claude",
        },
        "my-cli": {
          command: "my-cli",
          args: ["--json"],
          output: "json",
          input: "arg",
          modelArg: "--model",
          modelAliases: {
            "claude-opus-4-5": "opus",
            "claude-sonnet-4-5": "sonnet",
          },
          sessionArg: "--session",
          sessionMode: "existing",
          sessionIdFields: ["session_id", "conversation_id"],
          systemPromptArg: "--system",
          systemPromptWhen: "first",
          imageArg: "--image",
          imageMode: "repeat",
          serialize: true,
        },
      },
    },
  },
}
```

## å·¥ä½œåŽŸç†

1. **é€‰æ‹©åŽç«¯**åŸºäºŽæä¾›å•†å‰ç¼€ï¼ˆ`claude-cli/...`ï¼‰ã€‚
2. **æž„å»ºç³»ç»Ÿæç¤º**ä½¿ç”¨ç›¸åŒçš„  æç¤º + å·¥ä½œåŒºä¸Šä¸‹æ–‡ã€‚
3. **æ‰§è¡Œ CLI**å¹¶å¸¦æœ‰ä¼šè¯ IDï¼ˆå¦‚æžœæ”¯æŒï¼‰ï¼Œä½¿åŽ†å²è®°å½•ä¿æŒä¸€è‡´ã€‚
4. **è§£æžè¾“å‡º**ï¼ˆJSON æˆ–çº¯æ–‡æœ¬ï¼‰å¹¶è¿”å›žæœ€ç»ˆæ–‡æœ¬ã€‚
5. **æŒä¹…åŒ–ä¼šè¯ ID**æŒ‰åŽç«¯ï¼Œä½¿åŽç»­è¯·æ±‚å¤ç”¨ç›¸åŒçš„ CLI ä¼šè¯ã€‚

## ä¼šè¯

- å¦‚æžœ CLI æ”¯æŒä¼šè¯ï¼Œè®¾ç½® `sessionArg`ï¼ˆä¾‹å¦‚ `--session-id`ï¼‰æˆ– `sessionArgs`ï¼ˆå ä½ç¬¦ `{sessionId}`ï¼‰å½“ ID éœ€è¦æ’å…¥åˆ°å¤šä¸ªæ ‡å¿—ä¸­æ—¶ã€‚
- å¦‚æžœ CLI ä½¿ç”¨å¸¦æœ‰ä¸åŒæ ‡å¿—çš„**æ¢å¤å­å‘½ä»¤**ï¼Œè®¾ç½® `resumeArgs`ï¼ˆæ¢å¤æ—¶æ›¿æ¢ `args`ï¼‰ä»¥åŠå¯é€‰çš„ `resumeOutput`ï¼ˆç”¨äºŽéž JSON æ¢å¤ï¼‰ã€‚
- `sessionMode`ï¼š
  - `always`ï¼šå§‹ç»ˆå‘é€ä¼šè¯ IDï¼ˆå¦‚æžœæ²¡æœ‰å­˜å‚¨åˆ™ä½¿ç”¨æ–° UUIDï¼‰ã€‚
  - `existing`ï¼šä»…åœ¨ä¹‹å‰å­˜å‚¨äº†ä¼šè¯ ID æ—¶æ‰å‘é€ã€‚
  - `none`ï¼šä»Žä¸å‘é€ä¼šè¯ IDã€‚

## å›¾åƒï¼ˆä¼ é€’ï¼‰

å¦‚æžœä½ çš„ CLI æŽ¥å—å›¾åƒè·¯å¾„ï¼Œè®¾ç½® `imageArg`ï¼š

```json5
imageArg: "--image",
imageMode: "repeat"
```

 ä¼šå°† base64 å›¾åƒå†™å…¥ä¸´æ—¶æ–‡ä»¶ã€‚å¦‚æžœè®¾ç½®äº† `imageArg`ï¼Œè¿™äº›è·¯å¾„ä½œä¸º CLI å‚æ•°ä¼ é€’ã€‚å¦‚æžœç¼ºå°‘ `imageArg`ï¼Œ ä¼šå°†æ–‡ä»¶è·¯å¾„é™„åŠ åˆ°æç¤ºä¸­ï¼ˆè·¯å¾„æ³¨å…¥ï¼‰ï¼Œè¿™å¯¹äºŽä»Žçº¯è·¯å¾„è‡ªåŠ¨åŠ è½½æœ¬åœ°æ–‡ä»¶çš„ CLI æ¥è¯´å·²ç»è¶³å¤Ÿï¼ˆClaude Code CLI è¡Œä¸ºï¼‰ã€‚

## è¾“å…¥ / è¾“å‡º

- `output: "json"`ï¼ˆé»˜è®¤ï¼‰å°è¯•è§£æž JSON å¹¶æå–æ–‡æœ¬ + ä¼šè¯ IDã€‚
- `output: "jsonl"` è§£æž JSONL æµï¼ˆCodex CLI `--json`ï¼‰å¹¶æå–æœ€åŽä¸€æ¡æ™ºèƒ½ä½“æ¶ˆæ¯ä»¥åŠå­˜åœ¨æ—¶çš„ `thread_id`ã€‚
- `output: "text"` å°† stdout è§†ä¸ºæœ€ç»ˆå“åº”ã€‚

è¾“å…¥æ¨¡å¼ï¼š

- `input: "arg"`ï¼ˆé»˜è®¤ï¼‰å°†æç¤ºä½œä¸ºæœ€åŽä¸€ä¸ª CLI å‚æ•°ä¼ é€’ã€‚
- `input: "stdin"` é€šè¿‡ stdin å‘é€æç¤ºã€‚
- å¦‚æžœæç¤ºå¾ˆé•¿ä¸”è®¾ç½®äº† `maxPromptArgChars`ï¼Œåˆ™ä½¿ç”¨ stdinã€‚

## é»˜è®¤å€¼ï¼ˆå†…ç½®ï¼‰

 è‡ªå¸¦ `claude-cli` çš„é»˜è®¤å€¼ï¼š

- `command: "claude"`
- `args: ["-p", "--output-format", "json", "--dangerously-skip-permissions"]`
- `resumeArgs: ["-p", "--output-format", "json", "--dangerously-skip-permissions", "--resume", "{sessionId}"]`
- `modelArg: "--model"`
- `systemPromptArg: "--append-system-prompt"`
- `sessionArg: "--session-id"`
- `systemPromptWhen: "first"`
- `sessionMode: "always"`

 ä¹Ÿè‡ªå¸¦ `codex-cli` çš„é»˜è®¤å€¼ï¼š

- `command: "codex"`
- `args: ["exec","--json","--color","never","--sandbox","read-only","--skip-git-repo-check"]`
- `resumeArgs: ["exec","resume","{sessionId}","--color","never","--sandbox","read-only","--skip-git-repo-check"]`
- `output: "jsonl"`
- `resumeOutput: "text"`
- `modelArg: "--model"`
- `imageArg: "--image"`
- `sessionMode: "existing"`

ä»…åœ¨éœ€è¦æ—¶è¦†ç›–ï¼ˆå¸¸è§ï¼šç»å¯¹ `command` è·¯å¾„ï¼‰ã€‚

## é™åˆ¶

- **æ—   å·¥å…·**ï¼ˆCLI åŽç«¯æ°¸è¿œä¸ä¼šæ”¶åˆ°å·¥å…·è°ƒç”¨ï¼‰ã€‚æŸäº› CLI å¯èƒ½ä»ä¼šè¿è¡Œå®ƒä»¬è‡ªå·±çš„æ™ºèƒ½ä½“å·¥å…·ã€‚
- **æ— æµå¼ä¼ è¾“**ï¼ˆCLI è¾“å‡ºè¢«æ”¶é›†åŽè¿”å›žï¼‰ã€‚
- **ç»“æž„åŒ–è¾“å‡º**å–å†³äºŽ CLI çš„ JSON æ ¼å¼ã€‚
- **Codex CLI ä¼šè¯**é€šè¿‡æ–‡æœ¬è¾“å‡ºæ¢å¤ï¼ˆæ—  JSONLï¼‰ï¼Œè¿™æ¯”åˆå§‹çš„ `--json` è¿è¡Œç»“æž„åŒ–ç¨‹åº¦ä½Žã€‚ ä¼šè¯ä»ç„¶æ­£å¸¸å·¥ä½œã€‚

## æ•…éšœæŽ’é™¤

- **æ‰¾ä¸åˆ° CLI**ï¼šå°† `command` è®¾ç½®ä¸ºå®Œæ•´è·¯å¾„ã€‚
- **æ¨¡åž‹åç§°é”™è¯¯**ï¼šä½¿ç”¨ `modelAliases` å°† `provider/model` æ˜ å°„åˆ° CLI æ¨¡åž‹ã€‚
- **æ— ä¼šè¯è¿žç»­æ€§**ï¼šç¡®ä¿è®¾ç½®äº† `sessionArg` ä¸” `sessionMode` ä¸æ˜¯ `none`ï¼ˆCodex CLI ç›®å‰æ— æ³•ä½¿ç”¨ JSON è¾“å‡ºæ¢å¤ï¼‰ã€‚
- **å›¾åƒè¢«å¿½ç•¥**ï¼šè®¾ç½® `imageArg`ï¼ˆå¹¶éªŒè¯ CLI æ”¯æŒæ–‡ä»¶è·¯å¾„ï¼‰ã€‚

