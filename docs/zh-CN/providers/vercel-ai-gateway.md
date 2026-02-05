---
read_when:
  - ä½ æƒ³å°† Vercel AI Gateway ä¸Ž  é…åˆä½¿ç”¨
  - ä½ éœ€è¦ API å¯†é’¥çŽ¯å¢ƒå˜é‡æˆ– CLI è®¤è¯é€‰æ‹©
summary: Vercel AI Gateway è®¾ç½®ï¼ˆè®¤è¯ + æ¨¡åž‹é€‰æ‹©ï¼‰
title: Vercel AI Gateway
x-i18n:
  generated_at: "2026-02-03T07:53:39Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: c6482f047a31b09c7a691d40babbd1f9fb3aa2042b61cc42956ad9b791da8285
  source_path: providers/vercel-ai-gateway.md
  workflow: 15
---

# Vercel AI Gateway

[Vercel AI Gateway](https://vercel.com/ai-gateway) æä¾›äº†ä¸€ä¸ªç»Ÿä¸€çš„ APIï¼Œé€šè¿‡å•ä¸€ç«¯ç‚¹è®¿é—®æ•°ç™¾ä¸ªæ¨¡åž‹ã€‚

- æä¾›å•†ï¼š`vercel-ai-gateway`
- è®¤è¯ï¼š`AI_GATEWAY_API_KEY`
- APIï¼šå…¼å®¹ Anthropic Messages

## å¿«é€Ÿå¼€å§‹

1. è®¾ç½® API å¯†é’¥ï¼ˆæŽ¨èï¼šä¸º Gateway ç½‘å…³å­˜å‚¨å®ƒï¼‰ï¼š

```bash
 onboard --auth-choice ai-gateway-api-key
```

2. è®¾ç½®é»˜è®¤æ¨¡åž‹ï¼š

```json5
{
  agents: {
    defaults: {
      model: { primary: "vercel-ai-gateway/anthropic/claude-opus-4.5" },
    },
  },
}
```

## éžäº¤äº’å¼ç¤ºä¾‹

```bash
 onboard --non-interactive \
  --mode local \
  --auth-choice ai-gateway-api-key \
  --ai-gateway-api-key "$AI_GATEWAY_API_KEY"
```

## çŽ¯å¢ƒå˜é‡è¯´æ˜Ž

å¦‚æžœ Gateway ç½‘å…³ä½œä¸ºå®ˆæŠ¤è¿›ç¨‹è¿è¡Œï¼ˆlaunchd/systemdï¼‰ï¼Œè¯·ç¡®ä¿ `AI_GATEWAY_API_KEY`
å¯¹è¯¥è¿›ç¨‹å¯ç”¨ï¼ˆä¾‹å¦‚ï¼Œåœ¨ `~/./.env` ä¸­æˆ–é€šè¿‡
`env.shellEnv`ï¼‰ã€‚

