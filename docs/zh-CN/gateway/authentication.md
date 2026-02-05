---
read_when:
  - è°ƒè¯•æ¨¡åž‹è®¤è¯æˆ– OAuth è¿‡æœŸ
  - è®°å½•è®¤è¯æˆ–å‡­è¯å­˜å‚¨
summary: æ¨¡åž‹è®¤è¯ï¼šOAuthã€API å¯†é’¥å’Œ setup-token
title: è®¤è¯
x-i18n:
  generated_at: "2026-02-03T07:47:32Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 66fa2c64ff374c9cfcdb4e7a951b0d164d512295e65513eb682f12191b75e557
  source_path: gateway/authentication.md
  workflow: 15
---

# è®¤è¯

 æ”¯æŒæ¨¡åž‹æä¾›å•†çš„ OAuth å’Œ API å¯†é’¥ã€‚å¯¹äºŽ Anthropic è´¦æˆ·ï¼Œæˆ‘ä»¬æŽ¨èä½¿ç”¨ **API å¯†é’¥**ã€‚å¯¹äºŽ Claude è®¢é˜…è®¿é—®ï¼Œä½¿ç”¨ `claude setup-token` åˆ›å»ºçš„é•¿æœŸä»¤ç‰Œã€‚

å‚é˜… [/concepts/oauth](/concepts/oauth) äº†è§£å®Œæ•´çš„ OAuth æµç¨‹å’Œå­˜å‚¨å¸ƒå±€ã€‚

## æŽ¨èçš„ Anthropic è®¾ç½®ï¼ˆAPI å¯†é’¥ï¼‰

å¦‚æžœä½ ç›´æŽ¥ä½¿ç”¨ Anthropicï¼Œè¯·ä½¿ç”¨ API å¯†é’¥ã€‚

1. åœ¨ Anthropic æŽ§åˆ¶å°åˆ›å»º API å¯†é’¥ã€‚
2. å°†å…¶æ”¾åœ¨ **Gateway ç½‘å…³ä¸»æœº**ï¼ˆè¿è¡Œ ` gateway` çš„æœºå™¨ï¼‰ä¸Šã€‚

```bash
export ANTHROPIC_API_KEY="..."
 models status
```

3. å¦‚æžœ Gateway ç½‘å…³åœ¨ systemd/launchd ä¸‹è¿è¡Œï¼Œæœ€å¥½å°†å¯†é’¥æ”¾åœ¨ `~/./.env` ä¸­ä»¥ä¾¿å®ˆæŠ¤è¿›ç¨‹å¯ä»¥è¯»å–ï¼š

```bash
cat >> ~/./.env <<'EOF'
ANTHROPIC_API_KEY=...
EOF
```

ç„¶åŽé‡å¯å®ˆæŠ¤è¿›ç¨‹ï¼ˆæˆ–é‡å¯ä½ çš„ Gateway ç½‘å…³è¿›ç¨‹ï¼‰å¹¶é‡æ–°æ£€æŸ¥ï¼š

```bash
 models status
 doctor
```

å¦‚æžœä½ ä¸æƒ³è‡ªå·±ç®¡ç†çŽ¯å¢ƒå˜é‡ï¼Œæ–°æ‰‹å¼•å¯¼å‘å¯¼å¯ä»¥ä¸ºå®ˆæŠ¤è¿›ç¨‹ä½¿ç”¨å­˜å‚¨ API å¯†é’¥ï¼š` onboard`ã€‚

å‚é˜…[å¸®åŠ©](/help)äº†è§£çŽ¯å¢ƒå˜é‡ç»§æ‰¿çš„è¯¦æƒ…ï¼ˆ`env.shellEnv`ã€`~/./.env`ã€systemd/launchdï¼‰ã€‚

## Anthropicï¼šsetup-tokenï¼ˆè®¢é˜…è®¤è¯ï¼‰

å¯¹äºŽ Anthropicï¼ŒæŽ¨èçš„è·¯å¾„æ˜¯ **API å¯†é’¥**ã€‚å¦‚æžœä½ ä½¿ç”¨ Claude è®¢é˜…ï¼Œä¹Ÿæ”¯æŒ setup-token æµç¨‹ã€‚åœ¨ **Gateway ç½‘å…³ä¸»æœº**ä¸Šè¿è¡Œï¼š

```bash
claude setup-token
```

ç„¶åŽå°†å…¶ç²˜è´´åˆ° ï¼š

```bash
 models auth setup-token --provider anthropic
```

å¦‚æžœä»¤ç‰Œæ˜¯åœ¨å¦ä¸€å°æœºå™¨ä¸Šåˆ›å»ºçš„ï¼Œæ‰‹åŠ¨ç²˜è´´ï¼š

```bash
 models auth paste-token --provider anthropic
```

å¦‚æžœä½ çœ‹åˆ°ç±»ä¼¼è¿™æ ·çš„ Anthropic é”™è¯¯ï¼š

```
This credential is only authorized for use with Claude Code and cannot be used for other API requests.
```

â€¦è¯·æ”¹ç”¨ Anthropic API å¯†é’¥ã€‚

æ‰‹åŠ¨ä»¤ç‰Œè¾“å…¥ï¼ˆä»»ä½•æä¾›å•†ï¼›å†™å…¥ `auth-profiles.json` + æ›´æ–°é…ç½®ï¼‰ï¼š

```bash
 models auth paste-token --provider anthropic
 models auth paste-token --provider openrouter
```

è‡ªåŠ¨åŒ–å‹å¥½æ£€æŸ¥ï¼ˆè¿‡æœŸ/ç¼ºå¤±æ—¶é€€å‡º `1`ï¼Œå³å°†è¿‡æœŸæ—¶é€€å‡º `2`ï¼‰ï¼š

```bash
 models status --check
```

å¯é€‰çš„è¿ç»´è„šæœ¬ï¼ˆsystemd/Termuxï¼‰åœ¨æ­¤å¤„è®°å½•ï¼š[/automation/auth-monitoring](/automation/auth-monitoring)

> `claude setup-token` éœ€è¦äº¤äº’å¼ TTYã€‚

## æ£€æŸ¥æ¨¡åž‹è®¤è¯çŠ¶æ€

```bash
 models status
 doctor
```

## æŽ§åˆ¶ä½¿ç”¨å“ªä¸ªå‡­è¯

### æ¯ä¼šè¯ï¼ˆèŠå¤©å‘½ä»¤ï¼‰

ä½¿ç”¨ `/model <alias-or-id>@<profileId>` ä¸ºå½“å‰ä¼šè¯å›ºå®šç‰¹å®šçš„æä¾›å•†å‡­è¯ï¼ˆç¤ºä¾‹é…ç½®æ–‡ä»¶ IDï¼š`anthropic:default`ã€`anthropic:work`ï¼‰ã€‚

ä½¿ç”¨ `/model`ï¼ˆæˆ– `/model list`ï¼‰èŽ·å–ç´§å‡‘çš„é€‰æ‹©å™¨ï¼›ä½¿ç”¨ `/model status` èŽ·å–å®Œæ•´è§†å›¾ï¼ˆå€™é€‰é¡¹ + ä¸‹ä¸€ä¸ªè®¤è¯é…ç½®æ–‡ä»¶ï¼Œä»¥åŠé…ç½®æ—¶çš„æä¾›å•†ç«¯ç‚¹è¯¦æƒ…ï¼‰ã€‚

### æ¯æ™ºèƒ½ä½“ï¼ˆCLI è¦†ç›–ï¼‰

ä¸ºæ™ºèƒ½ä½“è®¾ç½®æ˜¾å¼çš„è®¤è¯é…ç½®æ–‡ä»¶é¡ºåºè¦†ç›–ï¼ˆå­˜å‚¨åœ¨è¯¥æ™ºèƒ½ä½“çš„ `auth-profiles.json` ä¸­ï¼‰ï¼š

```bash
 models auth order get --provider anthropic
 models auth order set --provider anthropic anthropic:default
 models auth order clear --provider anthropic
```

ä½¿ç”¨ `--agent <id>` æŒ‡å®šç‰¹å®šæ™ºèƒ½ä½“ï¼›çœç•¥å®ƒåˆ™ä½¿ç”¨é…ç½®çš„é»˜è®¤æ™ºèƒ½ä½“ã€‚

## æ•…éšœæŽ’é™¤

### "No credentials found"

å¦‚æžœ Anthropic ä»¤ç‰Œé…ç½®æ–‡ä»¶ç¼ºå¤±ï¼Œåœ¨ **Gateway ç½‘å…³ä¸»æœº**ä¸Šè¿è¡Œ `claude setup-token`ï¼Œç„¶åŽé‡æ–°æ£€æŸ¥ï¼š

```bash
 models status
```

### ä»¤ç‰Œå³å°†è¿‡æœŸ/å·²è¿‡æœŸ

è¿è¡Œ ` models status` ç¡®è®¤å“ªä¸ªé…ç½®æ–‡ä»¶å³å°†è¿‡æœŸã€‚å¦‚æžœé…ç½®æ–‡ä»¶ç¼ºå¤±ï¼Œé‡æ–°è¿è¡Œ `claude setup-token` å¹¶å†æ¬¡ç²˜è´´ä»¤ç‰Œã€‚

## è¦æ±‚

- Claude Max æˆ– Pro è®¢é˜…ï¼ˆç”¨äºŽ `claude setup-token`ï¼‰
- å·²å®‰è£… Claude Code CLIï¼ˆ`claude` å‘½ä»¤å¯ç”¨ï¼‰

