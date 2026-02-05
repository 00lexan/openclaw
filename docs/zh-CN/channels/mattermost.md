---
read_when:
  - è®¾ç½® Mattermost
  - è°ƒè¯• Mattermost è·¯ç”±
summary: Mattermost æœºå™¨äººè®¾ç½®å’Œ  é…ç½®
title: Mattermost
x-i18n:
  generated_at: "2026-02-03T07:43:43Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 57fabe5eb0efbcb885f4178b317b2fa99a41daf609e3a471de2b44db9def4ad7
  source_path: channels/mattermost.md
  workflow: 15
---

# Mattermostï¼ˆæ’ä»¶ï¼‰

çŠ¶æ€ï¼šé€šè¿‡æ’ä»¶æ”¯æŒï¼ˆbot token + WebSocket äº‹ä»¶ï¼‰ã€‚æ”¯æŒé¢‘é“ã€ç¾¤ç»„å’Œç§ä¿¡ã€‚
Mattermost æ˜¯ä¸€ä¸ªå¯è‡ªæ‰˜ç®¡çš„å›¢é˜Ÿæ¶ˆæ¯å¹³å°ï¼›æœ‰å…³äº§å“è¯¦æƒ…å’Œä¸‹è½½ï¼Œè¯·è®¿é—®å®˜æ–¹ç½‘ç«™
[mattermost.com](https://mattermost.com)ã€‚

## éœ€è¦æ’ä»¶

Mattermost ä»¥æ’ä»¶å½¢å¼æä¾›ï¼Œä¸åŒ…å«åœ¨æ ¸å¿ƒå®‰è£…ä¸­ã€‚

é€šè¿‡ CLI å®‰è£…ï¼ˆnpm æ³¨å†Œè¡¨ï¼‰ï¼š

```bash
 plugins install @/mattermost
```

æœ¬åœ°æ£€å‡ºï¼ˆä»Ž git ä»“åº“è¿è¡Œæ—¶ï¼‰ï¼š

```bash
 plugins install ./extensions/mattermost
```

å¦‚æžœä½ åœ¨é…ç½®/æ–°æ‰‹å¼•å¯¼æœŸé—´é€‰æ‹© Mattermost å¹¶æ£€æµ‹åˆ° git æ£€å‡ºï¼Œ ä¼šè‡ªåŠ¨æä¾›æœ¬åœ°å®‰è£…è·¯å¾„ã€‚

è¯¦æƒ…ï¼š[æ’ä»¶](/plugin)

## å¿«é€Ÿè®¾ç½®

1. å®‰è£… Mattermost æ’ä»¶ã€‚
2. åˆ›å»º Mattermost bot è´¦æˆ·å¹¶å¤åˆ¶ **bot token**ã€‚
3. å¤åˆ¶ Mattermost **åŸºç¡€ URL**ï¼ˆä¾‹å¦‚ `https://chat.example.com`ï¼‰ã€‚
4. é…ç½®  å¹¶å¯åŠ¨ Gateway ç½‘å…³ã€‚

æœ€å°é…ç½®ï¼š

```json5
{
  channels: {
    mattermost: {
      enabled: true,
      botToken: "mm-token",
      baseUrl: "https://chat.example.com",
      dmPolicy: "pairing",
    },
  },
}
```

## çŽ¯å¢ƒå˜é‡ï¼ˆé»˜è®¤è´¦æˆ·ï¼‰

å¦‚æžœä½ åå¥½ä½¿ç”¨çŽ¯å¢ƒå˜é‡ï¼Œè¯·åœ¨ Gateway ç½‘å…³ä¸»æœºä¸Šè®¾ç½®ï¼š

- `MATTERMOST_BOT_TOKEN=...`
- `MATTERMOST_URL=https://chat.example.com`

çŽ¯å¢ƒå˜é‡ä»…é€‚ç”¨äºŽ**é»˜è®¤**è´¦æˆ·ï¼ˆ`default`ï¼‰ã€‚å…¶ä»–è´¦æˆ·å¿…é¡»ä½¿ç”¨é…ç½®å€¼ã€‚

## èŠå¤©æ¨¡å¼

Mattermost è‡ªåŠ¨å“åº”ç§ä¿¡ã€‚é¢‘é“è¡Œä¸ºç”± `chatmode` æŽ§åˆ¶ï¼š

- `oncall`ï¼ˆé»˜è®¤ï¼‰ï¼šä»…åœ¨é¢‘é“ä¸­è¢« @æåŠæ—¶å“åº”ã€‚
- `onmessage`ï¼šå“åº”æ¯æ¡é¢‘é“æ¶ˆæ¯ã€‚
- `onchar`ï¼šå½“æ¶ˆæ¯ä»¥è§¦å‘å‰ç¼€å¼€å¤´æ—¶å“åº”ã€‚

é…ç½®ç¤ºä¾‹ï¼š

```json5
{
  channels: {
    mattermost: {
      chatmode: "onchar",
      oncharPrefixes: [">", "!"],
    },
  },
}
```

æ³¨æ„äº‹é¡¹ï¼š

- `onchar` ä»ä¼šå“åº”æ˜¾å¼ @æåŠã€‚
- `channels.mattermost.requireMention` å¯¹æ—§é…ç½®ä»ç„¶æœ‰æ•ˆï¼Œä½†æŽ¨èä½¿ç”¨ `chatmode`ã€‚

## è®¿é—®æŽ§åˆ¶ï¼ˆç§ä¿¡ï¼‰

- é»˜è®¤ï¼š`channels.mattermost.dmPolicy = "pairing"`ï¼ˆæœªçŸ¥å‘é€è€…ä¼šæ”¶åˆ°é…å¯¹ç ï¼‰ã€‚
- é€šè¿‡ä»¥ä¸‹æ–¹å¼æ‰¹å‡†ï¼š
  - ` pairing list mattermost`
  - ` pairing approve mattermost <CODE>`
- å…¬å¼€ç§ä¿¡ï¼š`channels.mattermost.dmPolicy="open"` åŠ ä¸Š `channels.mattermost.allowFrom=["*"]`ã€‚

## é¢‘é“ï¼ˆç¾¤ç»„ï¼‰

- é»˜è®¤ï¼š`channels.mattermost.groupPolicy = "allowlist"`ï¼ˆæåŠé™åˆ¶ï¼‰ã€‚
- ä½¿ç”¨ `channels.mattermost.groupAllowFrom` å°†å‘é€è€…åŠ å…¥å…è®¸åˆ—è¡¨ï¼ˆç”¨æˆ· ID æˆ– `@username`ï¼‰ã€‚
- å¼€æ”¾é¢‘é“ï¼š`channels.mattermost.groupPolicy="open"`ï¼ˆæåŠé™åˆ¶ï¼‰ã€‚

## å‡ºç«™æŠ•é€’ç›®æ ‡

åœ¨ ` message send` æˆ– cron/webhooks ä¸­ä½¿ç”¨è¿™äº›ç›®æ ‡æ ¼å¼ï¼š

- `channel:<id>` ç”¨äºŽé¢‘é“
- `user:<id>` ç”¨äºŽç§ä¿¡
- `@username` ç”¨äºŽç§ä¿¡ï¼ˆé€šè¿‡ Mattermost API è§£æžï¼‰

è£¸ ID è¢«è§†ä¸ºé¢‘é“ã€‚

## å¤šè´¦æˆ·

Mattermost æ”¯æŒåœ¨ `channels.mattermost.accounts` ä¸‹é…ç½®å¤šä¸ªè´¦æˆ·ï¼š

```json5
{
  channels: {
    mattermost: {
      accounts: {
        default: { name: "Primary", botToken: "mm-token", baseUrl: "https://chat.example.com" },
        alerts: { name: "Alerts", botToken: "mm-token-2", baseUrl: "https://alerts.example.com" },
      },
    },
  },
}
```

## æ•…éšœæŽ’é™¤

- é¢‘é“ä¸­æ— å›žå¤ï¼šç¡®ä¿ bot åœ¨é¢‘é“ä¸­å¹¶æåŠå®ƒï¼ˆoncallï¼‰ï¼Œä½¿ç”¨è§¦å‘å‰ç¼€ï¼ˆoncharï¼‰ï¼Œæˆ–è®¾ç½® `chatmode: "onmessage"`ã€‚
- è®¤è¯é”™è¯¯ï¼šæ£€æŸ¥ bot tokenã€åŸºç¡€ URL ä»¥åŠè´¦æˆ·æ˜¯å¦å·²å¯ç”¨ã€‚
- å¤šè´¦æˆ·é—®é¢˜ï¼šçŽ¯å¢ƒå˜é‡ä»…é€‚ç”¨äºŽ `default` è´¦æˆ·ã€‚

