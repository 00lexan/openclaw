---
read_when:
  - å¼€å‘ Nextcloud Talk æ¸ é“åŠŸèƒ½æ—¶
summary: Nextcloud Talk æ”¯æŒçŠ¶æ€ã€åŠŸèƒ½å’Œé…ç½®
title: Nextcloud Talk
x-i18n:
  generated_at: "2026-02-03T10:04:00Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 21b7b9756c4356a76dc0f14c10e44ed74a284cf3badf87e2df75eb88d8a90c31
  source_path: channels/nextcloud-talk.md
  workflow: 15
---

# Nextcloud Talkï¼ˆæ’ä»¶ï¼‰

çŠ¶æ€ï¼šé€šè¿‡æ’ä»¶æ”¯æŒï¼ˆwebhook æœºå™¨äººï¼‰ã€‚æ”¯æŒç§ä¿¡ã€æˆ¿é—´ã€è¡¨æƒ…å›žåº”å’Œ Markdown æ¶ˆæ¯ã€‚

## éœ€è¦æ’ä»¶

Nextcloud Talk ä»¥æ’ä»¶å½¢å¼æä¾›ï¼Œä¸åŒ…å«åœ¨æ ¸å¿ƒå®‰è£…åŒ…ä¸­ã€‚

é€šè¿‡ CLI å®‰è£…ï¼ˆnpm ä»“åº“ï¼‰ï¼š

```bash
 plugins install @/nextcloud-talk
```

æœ¬åœ°æ£€å‡ºå®‰è£…ï¼ˆä»Ž git ä»“åº“è¿è¡Œæ—¶ï¼‰ï¼š

```bash
 plugins install ./extensions/nextcloud-talk
```

å¦‚æžœä½ åœ¨é…ç½®/æ–°æ‰‹å¼•å¯¼è¿‡ç¨‹ä¸­é€‰æ‹©äº† Nextcloud Talkï¼Œå¹¶ä¸”æ£€æµ‹åˆ° git æ£€å‡ºï¼Œ
 å°†è‡ªåŠ¨æä¾›æœ¬åœ°å®‰è£…è·¯å¾„ã€‚

è¯¦æƒ…ï¼š[æ’ä»¶](/plugin)

## å¿«é€Ÿè®¾ç½®ï¼ˆæ–°æ‰‹ï¼‰

1. å®‰è£… Nextcloud Talk æ’ä»¶ã€‚
2. åœ¨ä½ çš„ Nextcloud æœåŠ¡å™¨ä¸Šåˆ›å»ºæœºå™¨äººï¼š
   ```bash
   ./occ talk:bot:install "" "<shared-secret>" "<webhook-url>" --feature reaction
   ```
3. åœ¨ç›®æ ‡æˆ¿é—´è®¾ç½®ä¸­å¯ç”¨æœºå™¨äººã€‚
4. é…ç½® ï¼š
   - é…ç½®é¡¹ï¼š`channels.nextcloud-talk.baseUrl` + `channels.nextcloud-talk.botSecret`
   - æˆ–çŽ¯å¢ƒå˜é‡ï¼š`NEXTCLOUD_TALK_BOT_SECRET`ï¼ˆä»…é»˜è®¤è´¦æˆ·ï¼‰
5. é‡å¯ Gateway ç½‘å…³ï¼ˆæˆ–å®Œæˆæ–°æ‰‹å¼•å¯¼ï¼‰ã€‚

æœ€å°é…ç½®ï¼š

```json5
{
  channels: {
    "nextcloud-talk": {
      enabled: true,
      baseUrl: "https://cloud.example.com",
      botSecret: "shared-secret",
      dmPolicy: "pairing",
    },
  },
}
```

## æ³¨æ„äº‹é¡¹

- æœºå™¨äººæ— æ³•ä¸»åŠ¨å‘èµ·ç§ä¿¡ã€‚ç”¨æˆ·å¿…é¡»å…ˆå‘æœºå™¨äººå‘é€æ¶ˆæ¯ã€‚
- Webhook URL å¿…é¡»å¯è¢« Gateway ç½‘å…³è®¿é—®ï¼›å¦‚æžœåœ¨ä»£ç†åŽé¢ï¼Œè¯·è®¾ç½® `webhookPublicUrl`ã€‚
- æœºå™¨äºº API ä¸æ”¯æŒåª’ä½“ä¸Šä¼ ï¼›åª’ä½“ä»¥ URL å½¢å¼å‘é€ã€‚
- Webhook è½½è·æ— æ³•åŒºåˆ†ç§ä¿¡å’Œæˆ¿é—´ï¼›è®¾ç½® `apiUser` + `apiPassword` ä»¥å¯ç”¨æˆ¿é—´ç±»åž‹æŸ¥è¯¢ï¼ˆå¦åˆ™ç§ä¿¡å°†è¢«è§†ä¸ºæˆ¿é—´ï¼‰ã€‚

## è®¿é—®æŽ§åˆ¶ï¼ˆç§ä¿¡ï¼‰

- é»˜è®¤ï¼š`channels.nextcloud-talk.dmPolicy = "pairing"`ã€‚æœªçŸ¥å‘é€è€…å°†æ”¶åˆ°é…å¯¹ç ã€‚
- æ‰¹å‡†æ–¹å¼ï¼š
  - ` pairing list nextcloud-talk`
  - ` pairing approve nextcloud-talk <CODE>`
- å…¬å¼€ç§ä¿¡ï¼š`channels.nextcloud-talk.dmPolicy="open"` åŠ ä¸Š `channels.nextcloud-talk.allowFrom=["*"]`ã€‚

## æˆ¿é—´ï¼ˆç¾¤ç»„ï¼‰

- é»˜è®¤ï¼š`channels.nextcloud-talk.groupPolicy = "allowlist"`ï¼ˆéœ€è¦æåŠè§¦å‘ï¼‰ã€‚
- ä½¿ç”¨ `channels.nextcloud-talk.rooms` è®¾ç½®æˆ¿é—´ç™½åå•ï¼š

```json5
{
  channels: {
    "nextcloud-talk": {
      rooms: {
        "room-token": { requireMention: true },
      },
    },
  },
}
```

- å¦‚éœ€ç¦æ­¢æ‰€æœ‰æˆ¿é—´ï¼Œä¿æŒç™½åå•ä¸ºç©ºæˆ–è®¾ç½® `channels.nextcloud-talk.groupPolicy="disabled"`ã€‚

## åŠŸèƒ½æ”¯æŒ

| åŠŸèƒ½     | çŠ¶æ€   |
| -------- | ------ |
| ç§ä¿¡     | æ”¯æŒ   |
| æˆ¿é—´     | æ”¯æŒ   |
| è¯é¢˜     | ä¸æ”¯æŒ |
| åª’ä½“     | ä»… URL |
| è¡¨æƒ…å›žåº” | æ”¯æŒ   |
| åŽŸç”Ÿå‘½ä»¤ | ä¸æ”¯æŒ |

## é…ç½®å‚è€ƒï¼ˆNextcloud Talkï¼‰

å®Œæ•´é…ç½®ï¼š[é…ç½®](/gateway/configuration)

æä¾›å•†é€‰é¡¹ï¼š

- `channels.nextcloud-talk.enabled`ï¼šå¯ç”¨/ç¦ç”¨æ¸ é“å¯åŠ¨ã€‚
- `channels.nextcloud-talk.baseUrl`ï¼šNextcloud å®žä¾‹ URLã€‚
- `channels.nextcloud-talk.botSecret`ï¼šæœºå™¨äººå…±äº«å¯†é’¥ã€‚
- `channels.nextcloud-talk.botSecretFile`ï¼šå¯†é’¥æ–‡ä»¶è·¯å¾„ã€‚
- `channels.nextcloud-talk.apiUser`ï¼šç”¨äºŽæˆ¿é—´æŸ¥è¯¢çš„ API ç”¨æˆ·ï¼ˆç§ä¿¡æ£€æµ‹ï¼‰ã€‚
- `channels.nextcloud-talk.apiPassword`ï¼šç”¨äºŽæˆ¿é—´æŸ¥è¯¢çš„ API/åº”ç”¨å¯†ç ã€‚
- `channels.nextcloud-talk.apiPasswordFile`ï¼šAPI å¯†ç æ–‡ä»¶è·¯å¾„ã€‚
- `channels.nextcloud-talk.webhookPort`ï¼šwebhook ç›‘å¬ç«¯å£ï¼ˆé»˜è®¤ï¼š8788ï¼‰ã€‚
- `channels.nextcloud-talk.webhookHost`ï¼šwebhook ä¸»æœºï¼ˆé»˜è®¤ï¼š0.0.0.0ï¼‰ã€‚
- `channels.nextcloud-talk.webhookPath`ï¼šwebhook è·¯å¾„ï¼ˆé»˜è®¤ï¼š/nextcloud-talk-webhookï¼‰ã€‚
- `channels.nextcloud-talk.webhookPublicUrl`ï¼šå¤–éƒ¨å¯è¾¾çš„ webhook URLã€‚
- `channels.nextcloud-talk.dmPolicy`ï¼š`pairing | allowlist | open | disabled`ã€‚
- `channels.nextcloud-talk.allowFrom`ï¼šç§ä¿¡ç™½åå•ï¼ˆç”¨æˆ· IDï¼‰ã€‚`open` éœ€è¦ `"*"`ã€‚
- `channels.nextcloud-talk.groupPolicy`ï¼š`allowlist | open | disabled`ã€‚
- `channels.nextcloud-talk.groupAllowFrom`ï¼šç¾¤ç»„ç™½åå•ï¼ˆç”¨æˆ· IDï¼‰ã€‚
- `channels.nextcloud-talk.rooms`ï¼šæ¯ä¸ªæˆ¿é—´çš„è®¾ç½®å’Œç™½åå•ã€‚
- `channels.nextcloud-talk.historyLimit`ï¼šç¾¤ç»„åŽ†å²è®°å½•é™åˆ¶ï¼ˆ0 è¡¨ç¤ºç¦ç”¨ï¼‰ã€‚
- `channels.nextcloud-talk.dmHistoryLimit`ï¼šç§ä¿¡åŽ†å²è®°å½•é™åˆ¶ï¼ˆ0 è¡¨ç¤ºç¦ç”¨ï¼‰ã€‚
- `channels.nextcloud-talk.dms`ï¼šæ¯ä¸ªç§ä¿¡çš„è¦†ç›–è®¾ç½®ï¼ˆhistoryLimitï¼‰ã€‚
- `channels.nextcloud-talk.textChunkLimit`ï¼šå‡ºç«™æ–‡æœ¬åˆ†å—å¤§å°ï¼ˆå­—ç¬¦æ•°ï¼‰ã€‚
- `channels.nextcloud-talk.chunkMode`ï¼š`length`ï¼ˆé»˜è®¤ï¼‰æˆ– `newline`ï¼Œåœ¨é•¿åº¦åˆ†å—å‰æŒ‰ç©ºè¡Œï¼ˆæ®µè½è¾¹ç•Œï¼‰åˆ†å‰²ã€‚
- `channels.nextcloud-talk.blockStreaming`ï¼šç¦ç”¨æ­¤æ¸ é“çš„åˆ†å—æµå¼ä¼ è¾“ã€‚
- `channels.nextcloud-talk.blockStreamingCoalesce`ï¼šåˆ†å—æµå¼ä¼ è¾“åˆå¹¶è°ƒä¼˜ã€‚
- `channels.nextcloud-talk.mediaMaxMb`ï¼šå…¥ç«™åª’ä½“å¤§å°ä¸Šé™ï¼ˆMBï¼‰ã€‚


