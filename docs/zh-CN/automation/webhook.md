---
read_when:
  - æ·»åŠ æˆ–æ›´æ”¹ webhook ç«¯ç‚¹
  - å°†å¤–éƒ¨ç³»ç»ŸæŽ¥å…¥ 
summary: ç”¨äºŽå”¤é†’å’Œéš”ç¦»æ™ºèƒ½ä½“è¿è¡Œçš„ Webhook å…¥å£
title: Webhooks
x-i18n:
  generated_at: "2026-02-03T07:43:23Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: f26b88864567be82366b1f66a4772ef2813c7846110c62fce6caf7313568265e
  source_path: automation/webhook.md
  workflow: 15
---

# Webhooks

Gateway ç½‘å…³å¯ä»¥æš´éœ²ä¸€ä¸ªå°åž‹ HTTP webhook ç«¯ç‚¹ç”¨äºŽå¤–éƒ¨è§¦å‘ã€‚

## å¯ç”¨

```json5
{
  hooks: {
    enabled: true,
    token: "shared-secret",
    path: "/hooks",
  },
}
```

æ³¨æ„äº‹é¡¹ï¼š

- å½“ `hooks.enabled=true` æ—¶ï¼Œ`hooks.token` ä¸ºå¿…å¡«é¡¹ã€‚
- `hooks.path` é»˜è®¤ä¸º `/hooks`ã€‚

## è®¤è¯

æ¯ä¸ªè¯·æ±‚å¿…é¡»åŒ…å« hook ä»¤ç‰Œã€‚æŽ¨èä½¿ç”¨è¯·æ±‚å¤´ï¼š

- `Authorization: Bearer <token>`ï¼ˆæŽ¨èï¼‰
- `x--token: <token>`
- `?token=<token>`ï¼ˆå·²å¼ƒç”¨ï¼›ä¼šè®°å½•è­¦å‘Šæ—¥å¿—ï¼Œå°†åœ¨æœªæ¥çš„ä¸»è¦ç‰ˆæœ¬ä¸­ç§»é™¤ï¼‰

## ç«¯ç‚¹

### `POST /hooks/wake`

è¯·æ±‚ä½“ï¼š

```json
{ "text": "System line", "mode": "now" }
```

- `text` **å¿…å¡«**ï¼ˆå­—ç¬¦ä¸²ï¼‰ï¼šäº‹ä»¶æè¿°ï¼ˆä¾‹å¦‚"æ”¶åˆ°æ–°é‚®ä»¶"ï¼‰ã€‚
- `mode` å¯é€‰ï¼ˆ`now` | `next-heartbeat`ï¼‰ï¼šæ˜¯å¦ç«‹å³è§¦å‘å¿ƒè·³ï¼ˆé»˜è®¤ `now`ï¼‰æˆ–ç­‰å¾…ä¸‹ä¸€æ¬¡å®šæœŸæ£€æŸ¥ã€‚

æ•ˆæžœï¼š

- ä¸º**ä¸»**ä¼šè¯åŠ å…¥ä¸€ä¸ªç³»ç»Ÿäº‹ä»¶é˜Ÿåˆ—
- å¦‚æžœ `mode=now`ï¼Œåˆ™ç«‹å³è§¦å‘å¿ƒè·³

### `POST /hooks/agent`

è¯·æ±‚ä½“ï¼š

```json
{
  "message": "Run this",
  "name": "Email",
  "sessionKey": "hook:email:msg-123",
  "wakeMode": "now",
  "deliver": true,
  "channel": "last",
  "to": "+15551234567",
  "model": "openai/gpt-5.2-mini",
  "thinking": "low",
  "timeoutSeconds": 120
}
```

- `message` **å¿…å¡«**ï¼ˆå­—ç¬¦ä¸²ï¼‰ï¼šæ™ºèƒ½ä½“è¦å¤„ç†çš„æç¤ºæˆ–æ¶ˆæ¯ã€‚
- `name` å¯é€‰ï¼ˆå­—ç¬¦ä¸²ï¼‰ï¼šhook çš„å¯è¯»åç§°ï¼ˆä¾‹å¦‚"GitHub"ï¼‰ï¼Œç”¨ä½œä¼šè¯æ‘˜è¦çš„å‰ç¼€ã€‚
- `sessionKey` å¯é€‰ï¼ˆå­—ç¬¦ä¸²ï¼‰ï¼šç”¨äºŽæ ‡è¯†æ™ºèƒ½ä½“ä¼šè¯çš„é”®ã€‚é»˜è®¤ä¸ºéšæœºçš„ `hook:<uuid>`ã€‚ä½¿ç”¨ä¸€è‡´çš„é”®å¯ä»¥åœ¨ hook ä¸Šä¸‹æ–‡ä¸­è¿›è¡Œå¤šè½®å¯¹è¯ã€‚
- `wakeMode` å¯é€‰ï¼ˆ`now` | `next-heartbeat`ï¼‰ï¼šæ˜¯å¦ç«‹å³è§¦å‘å¿ƒè·³ï¼ˆé»˜è®¤ `now`ï¼‰æˆ–ç­‰å¾…ä¸‹ä¸€æ¬¡å®šæœŸæ£€æŸ¥ã€‚
- `deliver` å¯é€‰ï¼ˆå¸ƒå°”å€¼ï¼‰ï¼šå¦‚æžœä¸º `true`ï¼Œæ™ºèƒ½ä½“çš„å“åº”å°†å‘é€åˆ°æ¶ˆæ¯æ¸ é“ã€‚é»˜è®¤ä¸º `true`ã€‚ä»…ä¸ºå¿ƒè·³ç¡®è®¤çš„å“åº”ä¼šè‡ªåŠ¨è·³è¿‡ã€‚
- `channel` å¯é€‰ï¼ˆå­—ç¬¦ä¸²ï¼‰ï¼šç”¨äºŽæŠ•é€’çš„æ¶ˆæ¯æ¸ é“ã€‚å¯é€‰å€¼ï¼š`last`ã€`whatsapp`ã€`telegram`ã€`discord`ã€`slack`ã€`mattermost`ï¼ˆæ’ä»¶ï¼‰ã€`signal`ã€`imessage`ã€`msteams`ã€‚é»˜è®¤ä¸º `last`ã€‚
- `to` å¯é€‰ï¼ˆå­—ç¬¦ä¸²ï¼‰ï¼šæ¸ é“çš„æŽ¥æ”¶è€…æ ‡è¯†ç¬¦ï¼ˆä¾‹å¦‚ WhatsApp/Signal çš„ç”µè¯å·ç ã€Telegram çš„èŠå¤© IDã€Discord/Slack/Mattermostï¼ˆæ’ä»¶ï¼‰çš„é¢‘é“ IDã€MS Teams çš„ä¼šè¯ IDï¼‰ã€‚é»˜è®¤ä¸ºä¸»ä¼šè¯ä¸­çš„æœ€åŽä¸€ä¸ªæŽ¥æ”¶è€…ã€‚
- `model` å¯é€‰ï¼ˆå­—ç¬¦ä¸²ï¼‰ï¼šæ¨¡åž‹è¦†ç›–ï¼ˆä¾‹å¦‚ `anthropic/claude-3-5-sonnet` æˆ–åˆ«åï¼‰ã€‚å¦‚æžœæœ‰é™åˆ¶ï¼Œå¿…é¡»åœ¨å…è®¸çš„æ¨¡åž‹åˆ—è¡¨ä¸­ã€‚
- `thinking` å¯é€‰ï¼ˆå­—ç¬¦ä¸²ï¼‰ï¼šæ€è€ƒçº§åˆ«è¦†ç›–ï¼ˆä¾‹å¦‚ `low`ã€`medium`ã€`high`ï¼‰ã€‚
- `timeoutSeconds` å¯é€‰ï¼ˆæ•°å­—ï¼‰ï¼šæ™ºèƒ½ä½“è¿è¡Œçš„æœ€å¤§æŒç»­æ—¶é—´ï¼ˆç§’ï¼‰ã€‚

æ•ˆæžœï¼š

- è¿è¡Œä¸€ä¸ª**éš”ç¦»çš„**æ™ºèƒ½ä½“å›žåˆï¼ˆç‹¬ç«‹çš„ä¼šè¯é”®ï¼‰
- å§‹ç»ˆåœ¨**ä¸»**ä¼šè¯ä¸­å‘å¸ƒæ‘˜è¦
- å¦‚æžœ `wakeMode=now`ï¼Œåˆ™ç«‹å³è§¦å‘å¿ƒè·³

### `POST /hooks/<name>`ï¼ˆæ˜ å°„ï¼‰

è‡ªå®šä¹‰ hook åç§°é€šè¿‡ `hooks.mappings` è§£æžï¼ˆè§é…ç½®ï¼‰ã€‚æ˜ å°„å¯ä»¥å°†ä»»æ„è¯·æ±‚ä½“è½¬æ¢ä¸º `wake` æˆ– `agent` æ“ä½œï¼Œæ”¯æŒå¯é€‰çš„æ¨¡æ¿æˆ–ä»£ç è½¬æ¢ã€‚

æ˜ å°„é€‰é¡¹ï¼ˆæ‘˜è¦ï¼‰ï¼š

- `hooks.presets: ["gmail"]` å¯ç”¨å†…ç½®çš„ Gmail æ˜ å°„ã€‚
- `hooks.mappings` å…è®¸ä½ åœ¨é…ç½®ä¸­å®šä¹‰ `match`ã€`action` å’Œæ¨¡æ¿ã€‚
- `hooks.transformsDir` + `transform.module` åŠ è½½ JS/TS æ¨¡å—ç”¨äºŽè‡ªå®šä¹‰é€»è¾‘ã€‚
- ä½¿ç”¨ `match.source` ä¿æŒé€šç”¨çš„æŽ¥æ”¶ç«¯ç‚¹ï¼ˆåŸºäºŽè¯·æ±‚ä½“çš„è·¯ç”±ï¼‰ã€‚
- TS è½¬æ¢éœ€è¦ TS åŠ è½½å™¨ï¼ˆä¾‹å¦‚ `bun` æˆ– `tsx`ï¼‰æˆ–è¿è¡Œæ—¶é¢„ç¼–è¯‘çš„ `.js`ã€‚
- åœ¨æ˜ å°„ä¸Šè®¾ç½® `deliver: true` + `channel`/`to` å¯å°†å›žå¤è·¯ç”±åˆ°èŠå¤©ç•Œé¢ï¼ˆ`channel` é»˜è®¤ä¸º `last`ï¼Œå›žé€€åˆ° WhatsAppï¼‰ã€‚
- `allowUnsafeExternalContent: true` ç¦ç”¨è¯¥ hook çš„å¤–éƒ¨å†…å®¹å®‰å…¨åŒ…è£…ï¼ˆå±é™©ï¼›ä»…ç”¨äºŽå—ä¿¡ä»»çš„å†…éƒ¨æ¥æºï¼‰ã€‚
- ` webhooks gmail setup` ä¸º ` webhooks gmail run` å†™å…¥ `hooks.gmail` é…ç½®ã€‚å®Œæ•´çš„ Gmail ç›‘å¬æµç¨‹è¯·å‚é˜… [Gmail Pub/Sub](/automation/gmail-pubsub)ã€‚

## å“åº”

- `200` ç”¨äºŽ `/hooks/wake`
- `202` ç”¨äºŽ `/hooks/agent`ï¼ˆå¼‚æ­¥è¿è¡Œå·²å¯åŠ¨ï¼‰
- `401` è®¤è¯å¤±è´¥
- `400` è¯·æ±‚ä½“æ— æ•ˆ
- `413` è¯·æ±‚ä½“è¿‡å¤§

## ç¤ºä¾‹

```bash
curl -X POST http://127.0.0.1:18789/hooks/wake \
  -H 'Authorization: Bearer SECRET' \
  -H 'Content-Type: application/json' \
  -d '{"text":"New email received","mode":"now"}'
```

```bash
curl -X POST http://127.0.0.1:18789/hooks/agent \
  -H 'x--token: SECRET' \
  -H 'Content-Type: application/json' \
  -d '{"message":"Summarize inbox","name":"Email","wakeMode":"next-heartbeat"}'
```

### ä½¿ç”¨ä¸åŒçš„æ¨¡åž‹

åœ¨æ™ºèƒ½ä½“è¯·æ±‚ä½“ï¼ˆæˆ–æ˜ å°„ï¼‰ä¸­æ·»åŠ  `model` ä»¥è¦†ç›–è¯¥æ¬¡è¿è¡Œçš„æ¨¡åž‹ï¼š

```bash
curl -X POST http://127.0.0.1:18789/hooks/agent \
  -H 'x--token: SECRET' \
  -H 'Content-Type: application/json' \
  -d '{"message":"Summarize inbox","name":"Email","model":"openai/gpt-5.2-mini"}'
```

å¦‚æžœä½ å¯ç”¨äº† `agents.defaults.models` é™åˆ¶ï¼Œè¯·ç¡®ä¿è¦†ç›–çš„æ¨¡åž‹åŒ…å«åœ¨å…¶ä¸­ã€‚

```bash
curl -X POST http://127.0.0.1:18789/hooks/gmail \
  -H 'Authorization: Bearer SECRET' \
  -H 'Content-Type: application/json' \
  -d '{"source":"gmail","messages":[{"from":"Ada","subject":"Hello","snippet":"Hi"}]}'
```

## å®‰å…¨

- å°† hook ç«¯ç‚¹ä¿æŒåœ¨ loopbackã€tailnet æˆ–å—ä¿¡ä»»çš„åå‘ä»£ç†ä¹‹åŽã€‚
- ä½¿ç”¨ä¸“ç”¨çš„ hook ä»¤ç‰Œï¼›ä¸è¦å¤ç”¨ Gateway ç½‘å…³è®¤è¯ä»¤ç‰Œã€‚
- é¿å…åœ¨ webhook æ—¥å¿—ä¸­åŒ…å«æ•æ„Ÿçš„åŽŸå§‹è¯·æ±‚ä½“ã€‚
- Hook è¯·æ±‚ä½“é»˜è®¤è¢«è§†ä¸ºä¸å—ä¿¡ä»»å¹¶ä½¿ç”¨å®‰å…¨è¾¹ç•ŒåŒ…è£…ã€‚å¦‚æžœä½ å¿…é¡»ä¸ºç‰¹å®š hook ç¦ç”¨æ­¤åŠŸèƒ½ï¼Œè¯·åœ¨è¯¥ hook çš„æ˜ å°„ä¸­è®¾ç½® `allowUnsafeExternalContent: true`ï¼ˆå±é™©ï¼‰ã€‚

