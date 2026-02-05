---
read_when:
  - è®¾ç½® BlueBubbles æ¸ é“
  - æŽ’æŸ¥ webhook é…å¯¹é—®é¢˜
  - åœ¨ macOS ä¸Šé…ç½® iMessage
summary: é€šè¿‡ BlueBubbles macOS æœåŠ¡å™¨ä½¿ç”¨ iMessageï¼ˆREST å‘é€/æŽ¥æ”¶ã€è¾“å…¥çŠ¶æ€ã€å›žåº”ã€é…å¯¹ã€é«˜çº§æ“ä½œï¼‰ã€‚
title: BlueBubbles
x-i18n:
  generated_at: "2026-02-03T10:04:52Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 3aae277a8bec479800a7f6268bfbca912c65a4aadc6e513694057fb873597b69
  source_path: channels/bluebubbles.md
  workflow: 15
---

# BlueBubblesï¼ˆmacOS RESTï¼‰

çŠ¶æ€ï¼šå†…ç½®æ’ä»¶ï¼Œé€šè¿‡ HTTP ä¸Ž BlueBubbles macOS æœåŠ¡å™¨é€šä¿¡ã€‚ç”±äºŽå…¶æ›´ä¸°å¯Œçš„ API å’Œæ›´ç®€ä¾¿çš„è®¾ç½®ï¼Œ**æŽ¨èç”¨äºŽ iMessage é›†æˆ**ï¼Œä¼˜äºŽæ—§ç‰ˆ imsg æ¸ é“ã€‚

## æ¦‚è¿°

- é€šè¿‡ BlueBubbles è¾…åŠ©åº”ç”¨åœ¨ macOS ä¸Šè¿è¡Œï¼ˆ[bluebubbles.app](https://bluebubbles.app)ï¼‰ã€‚
- æŽ¨è/å·²æµ‹è¯•ç‰ˆæœ¬ï¼šmacOS Sequoia (15)ã€‚macOS Tahoe (26) å¯ç”¨ï¼›ä½†åœ¨ Tahoe ä¸Šç¼–è¾‘åŠŸèƒ½ç›®å‰ä¸å¯ç”¨ï¼Œç¾¤ç»„å›¾æ ‡æ›´æ–°å¯èƒ½æ˜¾ç¤ºæˆåŠŸä½†å®žé™…æœªåŒæ­¥ã€‚
-  é€šè¿‡å…¶ REST API ä¸Žä¹‹é€šä¿¡ï¼ˆ`GET /api/v1/ping`ã€`POST /message/text`ã€`POST /chat/:id/*`ï¼‰ã€‚
- ä¼ å…¥æ¶ˆæ¯é€šè¿‡ webhook åˆ°è¾¾ï¼›å‘å‡ºçš„å›žå¤ã€è¾“å…¥æŒ‡ç¤ºå™¨ã€å·²è¯»å›žæ‰§å’Œ tapback å‡ä¸º REST è°ƒç”¨ã€‚
- é™„ä»¶å’Œè´´çº¸ä½œä¸ºå…¥ç«™åª’ä½“è¢«æŽ¥æ”¶ï¼ˆå¹¶åœ¨å¯èƒ½æ—¶å‘ˆçŽ°ç»™æ™ºèƒ½ä½“ï¼‰ã€‚
- é…å¯¹/ç™½åå•çš„å·¥ä½œæ–¹å¼ä¸Žå…¶ä»–æ¸ é“ç›¸åŒï¼ˆ`/start/pairing` ç­‰ï¼‰ï¼Œä½¿ç”¨ `channels.bluebubbles.allowFrom` + é…å¯¹ç ã€‚
- å›žåº”ä½œä¸ºç³»ç»Ÿäº‹ä»¶å‘ˆçŽ°ï¼Œä¸Ž Slack/Telegram ç±»ä¼¼ï¼Œæ™ºèƒ½ä½“å¯ä»¥åœ¨å›žå¤å‰"æåŠ"å®ƒä»¬ã€‚
- é«˜çº§åŠŸèƒ½ï¼šç¼–è¾‘ã€æ’¤å›žã€å›žå¤çº¿ç¨‹ã€æ¶ˆæ¯æ•ˆæžœã€ç¾¤ç»„ç®¡ç†ã€‚

## å¿«é€Ÿå¼€å§‹

1. åœ¨ä½ çš„ Mac ä¸Šå®‰è£… BlueBubbles æœåŠ¡å™¨ï¼ˆæŒ‰ç…§ [bluebubbles.app/install](https://bluebubbles.app/install) çš„è¯´æ˜Žæ“ä½œï¼‰ã€‚
2. åœ¨ BlueBubbles é…ç½®ä¸­ï¼Œå¯ç”¨ web API å¹¶è®¾ç½®å¯†ç ã€‚
3. è¿è¡Œ ` onboard` å¹¶é€‰æ‹© BlueBubblesï¼Œæˆ–æ‰‹åŠ¨é…ç½®ï¼š
   ```json5
   {
     channels: {
       bluebubbles: {
         enabled: true,
         serverUrl: "http://192.168.1.100:1234",
         password: "example-password",
         webhookPath: "/bluebubbles-webhook",
       },
     },
   }
   ```
4. å°† BlueBubbles webhook æŒ‡å‘ä½ çš„ Gateway ç½‘å…³ï¼ˆç¤ºä¾‹ï¼š`https://your-gateway-host:3000/bluebubbles-webhook?password=<password>`ï¼‰ã€‚
5. å¯åŠ¨ Gateway ç½‘å…³ï¼›å®ƒå°†æ³¨å†Œ webhook å¤„ç†ç¨‹åºå¹¶å¼€å§‹é…å¯¹ã€‚

## æ–°æ‰‹å¼•å¯¼

BlueBubbles å¯åœ¨äº¤äº’å¼è®¾ç½®å‘å¯¼ä¸­ä½¿ç”¨ï¼š

```
 onboard
```

å‘å¯¼ä¼šæç¤ºè¾“å…¥ï¼š

- **æœåŠ¡å™¨ URL**ï¼ˆå¿…å¡«ï¼‰ï¼šBlueBubbles æœåŠ¡å™¨åœ°å€ï¼ˆä¾‹å¦‚ `http://192.168.1.100:1234`ï¼‰
- **å¯†ç **ï¼ˆå¿…å¡«ï¼‰ï¼šæ¥è‡ª BlueBubbles æœåŠ¡å™¨è®¾ç½®çš„ API å¯†ç 
- **Webhook è·¯å¾„**ï¼ˆå¯é€‰ï¼‰ï¼šé»˜è®¤ä¸º `/bluebubbles-webhook`
- **ç§ä¿¡ç­–ç•¥**ï¼šé…å¯¹ã€ç™½åå•ã€å¼€æ”¾æˆ–ç¦ç”¨
- **ç™½åå•**ï¼šç”µè¯å·ç ã€ç”µå­é‚®ä»¶æˆ–èŠå¤©ç›®æ ‡

ä½ ä¹Ÿå¯ä»¥é€šè¿‡ CLI æ·»åŠ  BlueBubblesï¼š

```
 channels add bluebubbles --http-url http://192.168.1.100:1234 --password <password>
```

## è®¿é—®æŽ§åˆ¶ï¼ˆç§ä¿¡ + ç¾¤ç»„ï¼‰

ç§ä¿¡ï¼š

- é»˜è®¤ï¼š`channels.bluebubbles.dmPolicy = "pairing"`ã€‚
- æœªçŸ¥å‘é€è€…ä¼šæ”¶åˆ°é…å¯¹ç ï¼›åœ¨æ‰¹å‡†ä¹‹å‰æ¶ˆæ¯ä¼šè¢«å¿½ç•¥ï¼ˆé…å¯¹ç  1 å°æ—¶åŽè¿‡æœŸï¼‰ã€‚
- æ‰¹å‡†æ–¹å¼ï¼š
  - ` pairing list bluebubbles`
  - ` pairing approve bluebubbles <CODE>`
- é…å¯¹æ˜¯é»˜è®¤çš„ä»¤ç‰Œäº¤æ¢æ–¹å¼ã€‚è¯¦æƒ…ï¼š[é…å¯¹](/start/pairing)

ç¾¤ç»„ï¼š

- `channels.bluebubbles.groupPolicy = open | allowlist | disabled`ï¼ˆé»˜è®¤ï¼š`allowlist`ï¼‰ã€‚
- å½“è®¾ç½®ä¸º `allowlist` æ—¶ï¼Œ`channels.bluebubbles.groupAllowFrom` æŽ§åˆ¶è°å¯ä»¥åœ¨ç¾¤ç»„ä¸­è§¦å‘ã€‚

### æåŠé—¨æŽ§ï¼ˆç¾¤ç»„ï¼‰

BlueBubbles æ”¯æŒç¾¤èŠçš„æåŠé—¨æŽ§ï¼Œä¸Ž iMessage/WhatsApp è¡Œä¸ºä¸€è‡´ï¼š

- ä½¿ç”¨ `agents.list[].groupChat.mentionPatterns`ï¼ˆæˆ– `messages.groupChat.mentionPatterns`ï¼‰æ£€æµ‹æåŠã€‚
- å½“ç¾¤ç»„å¯ç”¨ `requireMention` æ—¶ï¼Œæ™ºèƒ½ä½“ä»…åœ¨è¢«æåŠæ—¶å“åº”ã€‚
- æ¥è‡ªæŽˆæƒå‘é€è€…çš„æŽ§åˆ¶å‘½ä»¤ä¼šç»•è¿‡æåŠé—¨æŽ§ã€‚

å•ç¾¤ç»„é…ç½®ï¼š

```json5
{
  channels: {
    bluebubbles: {
      groupPolicy: "allowlist",
      groupAllowFrom: ["+15555550123"],
      groups: {
        "*": { requireMention: true }, // æ‰€æœ‰ç¾¤ç»„çš„é»˜è®¤è®¾ç½®
        "iMessage;-;chat123": { requireMention: false }, // ç‰¹å®šç¾¤ç»„çš„è¦†ç›–è®¾ç½®
      },
    },
  },
}
```

### å‘½ä»¤é—¨æŽ§

- æŽ§åˆ¶å‘½ä»¤ï¼ˆä¾‹å¦‚ `/config`ã€`/model`ï¼‰éœ€è¦æŽˆæƒã€‚
- ä½¿ç”¨ `allowFrom` å’Œ `groupAllowFrom` ç¡®å®šå‘½ä»¤æŽˆæƒã€‚
- æŽˆæƒå‘é€è€…å³ä½¿åœ¨ç¾¤ç»„ä¸­æœªè¢«æåŠä¹Ÿå¯ä»¥è¿è¡ŒæŽ§åˆ¶å‘½ä»¤ã€‚

## è¾“å…¥çŠ¶æ€ + å·²è¯»å›žæ‰§

- **è¾“å…¥æŒ‡ç¤ºå™¨**ï¼šåœ¨å“åº”ç”Ÿæˆå‰å’Œç”ŸæˆæœŸé—´è‡ªåŠ¨å‘é€ã€‚
- **å·²è¯»å›žæ‰§**ï¼šç”± `channels.bluebubbles.sendReadReceipts` æŽ§åˆ¶ï¼ˆé»˜è®¤ï¼š`true`ï¼‰ã€‚
- **è¾“å…¥æŒ‡ç¤ºå™¨**ï¼š å‘é€è¾“å…¥å¼€å§‹äº‹ä»¶ï¼›BlueBubbles åœ¨å‘é€æˆ–è¶…æ—¶æ—¶è‡ªåŠ¨æ¸…é™¤è¾“å…¥çŠ¶æ€ï¼ˆé€šè¿‡ DELETE æ‰‹åŠ¨åœæ­¢ä¸å¯é ï¼‰ã€‚

```json5
{
  channels: {
    bluebubbles: {
      sendReadReceipts: false, // ç¦ç”¨å·²è¯»å›žæ‰§
    },
  },
}
```

## é«˜çº§æ“ä½œ

BlueBubbles åœ¨é…ç½®ä¸­å¯ç”¨æ—¶æ”¯æŒé«˜çº§æ¶ˆæ¯æ“ä½œï¼š

```json5
{
  channels: {
    bluebubbles: {
      actions: {
        reactions: true, // tapbackï¼ˆé»˜è®¤ï¼štrueï¼‰
        edit: true, // ç¼–è¾‘å·²å‘é€æ¶ˆæ¯ï¼ˆmacOS 13+ï¼Œåœ¨ macOS 26 Tahoe ä¸Šä¸å¯ç”¨ï¼‰
        unsend: true, // æ’¤å›žæ¶ˆæ¯ï¼ˆmacOS 13+ï¼‰
        reply: true, // é€šè¿‡æ¶ˆæ¯ GUID è¿›è¡Œå›žå¤çº¿ç¨‹
        sendWithEffect: true, // æ¶ˆæ¯æ•ˆæžœï¼ˆslamã€loud ç­‰ï¼‰
        renameGroup: true, // é‡å‘½åç¾¤èŠ
        setGroupIcon: true, // è®¾ç½®ç¾¤èŠå›¾æ ‡/ç…§ç‰‡ï¼ˆåœ¨ macOS 26 Tahoe ä¸Šä¸ç¨³å®šï¼‰
        addParticipant: true, // å°†å‚ä¸Žè€…æ·»åŠ åˆ°ç¾¤ç»„
        removeParticipant: true, // ä»Žç¾¤ç»„ç§»é™¤å‚ä¸Žè€…
        leaveGroup: true, // ç¦»å¼€ç¾¤èŠ
        sendAttachment: true, // å‘é€é™„ä»¶/åª’ä½“
      },
    },
  },
}
```

å¯ç”¨æ“ä½œï¼š

- **react**ï¼šæ·»åŠ /ç§»é™¤ tapback å›žåº”ï¼ˆ`messageId`ã€`emoji`ã€`remove`ï¼‰
- **edit**ï¼šç¼–è¾‘å·²å‘é€çš„æ¶ˆæ¯ï¼ˆ`messageId`ã€`text`ï¼‰
- **unsend**ï¼šæ’¤å›žæ¶ˆæ¯ï¼ˆ`messageId`ï¼‰
- **reply**ï¼šå›žå¤ç‰¹å®šæ¶ˆæ¯ï¼ˆ`messageId`ã€`text`ã€`to`ï¼‰
- **sendWithEffect**ï¼šå¸¦ iMessage æ•ˆæžœå‘é€ï¼ˆ`text`ã€`to`ã€`effectId`ï¼‰
- **renameGroup**ï¼šé‡å‘½åç¾¤èŠï¼ˆ`chatGuid`ã€`displayName`ï¼‰
- **setGroupIcon**ï¼šè®¾ç½®ç¾¤èŠå›¾æ ‡/ç…§ç‰‡ï¼ˆ`chatGuid`ã€`media`ï¼‰â€” åœ¨ macOS 26 Tahoe ä¸Šä¸ç¨³å®šï¼ˆAPI å¯èƒ½è¿”å›žæˆåŠŸä½†å›¾æ ‡æœªåŒæ­¥ï¼‰ã€‚
- **addParticipant**ï¼šå°†æŸäººæ·»åŠ åˆ°ç¾¤ç»„ï¼ˆ`chatGuid`ã€`address`ï¼‰
- **removeParticipant**ï¼šå°†æŸäººä»Žç¾¤ç»„ç§»é™¤ï¼ˆ`chatGuid`ã€`address`ï¼‰
- **leaveGroup**ï¼šç¦»å¼€ç¾¤èŠï¼ˆ`chatGuid`ï¼‰
- **sendAttachment**ï¼šå‘é€åª’ä½“/æ–‡ä»¶ï¼ˆ`to`ã€`buffer`ã€`filename`ã€`asVoice`ï¼‰
  - è¯­éŸ³å¤‡å¿˜å½•ï¼šå°† `asVoice: true` ä¸Ž **MP3** æˆ– **CAF** éŸ³é¢‘ä¸€èµ·è®¾ç½®ï¼Œä»¥ iMessage è¯­éŸ³æ¶ˆæ¯å½¢å¼å‘é€ã€‚BlueBubbles åœ¨å‘é€è¯­éŸ³å¤‡å¿˜å½•æ—¶ä¼šå°† MP3 è½¬æ¢ä¸º CAFã€‚

### æ¶ˆæ¯ IDï¼ˆçŸ­æ ¼å¼ vs å®Œæ•´æ ¼å¼ï¼‰

 å¯èƒ½ä¼šæ˜¾ç¤º*çŸ­*æ¶ˆæ¯ IDï¼ˆä¾‹å¦‚ `1`ã€`2`ï¼‰ä»¥èŠ‚çœ tokenã€‚

- `MessageSid` / `ReplyToId` å¯ä»¥æ˜¯çŸ­ IDã€‚
- `MessageSidFull` / `ReplyToIdFull` åŒ…å«æä¾›å•†çš„å®Œæ•´ IDã€‚
- çŸ­ ID å­˜å‚¨åœ¨å†…å­˜ä¸­ï¼›å®ƒä»¬å¯èƒ½åœ¨é‡å¯æˆ–ç¼“å­˜æ¸…é™¤åŽè¿‡æœŸã€‚
- æ“ä½œæŽ¥å—çŸ­æˆ–å®Œæ•´çš„ `messageId`ï¼Œä½†å¦‚æžœçŸ­ ID ä¸å†å¯ç”¨å°†ä¼šæŠ¥é”™ã€‚

å¯¹äºŽæŒä¹…åŒ–è‡ªåŠ¨åŒ–å’Œå­˜å‚¨ï¼Œè¯·ä½¿ç”¨å®Œæ•´ IDï¼š

- æ¨¡æ¿ï¼š`{{MessageSidFull}}`ã€`{{ReplyToIdFull}}`
- ä¸Šä¸‹æ–‡ï¼šå…¥ç«™è´Ÿè½½ä¸­çš„ `MessageSidFull` / `ReplyToIdFull`

å‚è§[é…ç½®](/gateway/configuration)äº†è§£æ¨¡æ¿å˜é‡ã€‚

## åˆ†å—æµå¼ä¼ è¾“

æŽ§åˆ¶å“åº”æ˜¯ä½œä¸ºå•æ¡æ¶ˆæ¯å‘é€è¿˜æ˜¯åˆ†å—æµå¼ä¼ è¾“ï¼š

```json5
{
  channels: {
    bluebubbles: {
      blockStreaming: true, // å¯ç”¨åˆ†å—æµå¼ä¼ è¾“ï¼ˆé»˜è®¤å…³é—­ï¼‰
    },
  },
}
```

## åª’ä½“ + é™åˆ¶

- å…¥ç«™é™„ä»¶ä¼šè¢«ä¸‹è½½å¹¶å­˜å‚¨åœ¨åª’ä½“ç¼“å­˜ä¸­ã€‚
- åª’ä½“ä¸Šé™é€šè¿‡ `channels.bluebubbles.mediaMaxMb` è®¾ç½®ï¼ˆé»˜è®¤ï¼š8 MBï¼‰ã€‚
- å‡ºç«™æ–‡æœ¬æŒ‰ `channels.bluebubbles.textChunkLimit` åˆ†å—ï¼ˆé»˜è®¤ï¼š4000 å­—ç¬¦ï¼‰ã€‚

## é…ç½®å‚è€ƒ

å®Œæ•´é…ç½®ï¼š[é…ç½®](/gateway/configuration)

æä¾›å•†é€‰é¡¹ï¼š

- `channels.bluebubbles.enabled`ï¼šå¯ç”¨/ç¦ç”¨æ¸ é“ã€‚
- `channels.bluebubbles.serverUrl`ï¼šBlueBubbles REST API åŸºç¡€ URLã€‚
- `channels.bluebubbles.password`ï¼šAPI å¯†ç ã€‚
- `channels.bluebubbles.webhookPath`ï¼šWebhook ç«¯ç‚¹è·¯å¾„ï¼ˆé»˜è®¤ï¼š`/bluebubbles-webhook`ï¼‰ã€‚
- `channels.bluebubbles.dmPolicy`ï¼š`pairing | allowlist | open | disabled`ï¼ˆé»˜è®¤ï¼š`pairing`ï¼‰ã€‚
- `channels.bluebubbles.allowFrom`ï¼šç§ä¿¡ç™½åå•ï¼ˆå¥æŸ„ã€ç”µå­é‚®ä»¶ã€E.164 å·ç ã€`chat_id:*`ã€`chat_guid:*`ï¼‰ã€‚
- `channels.bluebubbles.groupPolicy`ï¼š`open | allowlist | disabled`ï¼ˆé»˜è®¤ï¼š`allowlist`ï¼‰ã€‚
- `channels.bluebubbles.groupAllowFrom`ï¼šç¾¤ç»„å‘é€è€…ç™½åå•ã€‚
- `channels.bluebubbles.groups`ï¼šå•ç¾¤ç»„é…ç½®ï¼ˆ`requireMention` ç­‰ï¼‰ã€‚
- `channels.bluebubbles.sendReadReceipts`ï¼šå‘é€å·²è¯»å›žæ‰§ï¼ˆé»˜è®¤ï¼š`true`ï¼‰ã€‚
- `channels.bluebubbles.blockStreaming`ï¼šå¯ç”¨åˆ†å—æµå¼ä¼ è¾“ï¼ˆé»˜è®¤ï¼š`false`ï¼›æµå¼å›žå¤å¿…éœ€ï¼‰ã€‚
- `channels.bluebubbles.textChunkLimit`ï¼šå‡ºç«™åˆ†å—å¤§å°ï¼ˆå­—ç¬¦ï¼‰ï¼ˆé»˜è®¤ï¼š4000ï¼‰ã€‚
- `channels.bluebubbles.chunkMode`ï¼š`length`ï¼ˆé»˜è®¤ï¼‰ä»…åœ¨è¶…è¿‡ `textChunkLimit` æ—¶åˆ†å‰²ï¼›`newline` åœ¨é•¿åº¦åˆ†å—å‰å…ˆæŒ‰ç©ºè¡Œï¼ˆæ®µè½è¾¹ç•Œï¼‰åˆ†å‰²ã€‚
- `channels.bluebubbles.mediaMaxMb`ï¼šå…¥ç«™åª’ä½“ä¸Šé™ï¼ˆMBï¼‰ï¼ˆé»˜è®¤ï¼š8ï¼‰ã€‚
- `channels.bluebubbles.historyLimit`ï¼šä¸Šä¸‹æ–‡çš„æœ€å¤§ç¾¤ç»„æ¶ˆæ¯æ•°ï¼ˆ0 è¡¨ç¤ºç¦ç”¨ï¼‰ã€‚
- `channels.bluebubbles.dmHistoryLimit`ï¼šç§ä¿¡åŽ†å²é™åˆ¶ã€‚
- `channels.bluebubbles.actions`ï¼šå¯ç”¨/ç¦ç”¨ç‰¹å®šæ“ä½œã€‚
- `channels.bluebubbles.accounts`ï¼šå¤šè´¦æˆ·é…ç½®ã€‚

ç›¸å…³å…¨å±€é€‰é¡¹ï¼š

- `agents.list[].groupChat.mentionPatterns`ï¼ˆæˆ– `messages.groupChat.mentionPatterns`ï¼‰ã€‚
- `messages.responsePrefix`ã€‚

## åœ°å€ / æŠ•é€’ç›®æ ‡

ä¼˜å…ˆä½¿ç”¨ `chat_guid` ä»¥èŽ·å¾—ç¨³å®šçš„è·¯ç”±ï¼š

- `chat_guid:iMessage;-;+15555550123`ï¼ˆç¾¤ç»„æŽ¨èï¼‰
- `chat_id:123`
- `chat_identifier:...`
- ç›´æŽ¥å¥æŸ„ï¼š`+15555550123`ã€`user@example.com`
  - å¦‚æžœç›´æŽ¥å¥æŸ„æ²¡æœ‰çŽ°æœ‰çš„ç§ä¿¡èŠå¤©ï¼Œ å°†é€šè¿‡ `POST /api/v1/chat/new` åˆ›å»ºä¸€ä¸ªã€‚è¿™éœ€è¦å¯ç”¨ BlueBubbles Private APIã€‚

## å®‰å…¨æ€§

- Webhook è¯·æ±‚é€šè¿‡æ¯”è¾ƒ `guid`/`password` æŸ¥è¯¢å‚æ•°æˆ–å¤´éƒ¨ä¸Ž `channels.bluebubbles.password` è¿›è¡Œèº«ä»½éªŒè¯ã€‚æ¥è‡ª `localhost` çš„è¯·æ±‚ä¹Ÿä¼šè¢«æŽ¥å—ã€‚
- ä¿æŒ API å¯†ç å’Œ webhook ç«¯ç‚¹çš„æœºå¯†æ€§ï¼ˆå°†å®ƒä»¬è§†ä¸ºå‡­è¯ï¼‰ã€‚
- localhost ä¿¡ä»»æ„å‘³ç€åŒä¸»æœºçš„åå‘ä»£ç†å¯èƒ½æ— æ„ä¸­ç»•è¿‡å¯†ç éªŒè¯ã€‚å¦‚æžœä½ ä½¿ç”¨ä»£ç† Gateway ç½‘å…³ï¼Œè¯·åœ¨ä»£ç†å¤„è¦æ±‚èº«ä»½éªŒè¯å¹¶é…ç½® `gateway.trustedProxies`ã€‚å‚è§ [Gateway ç½‘å…³å®‰å…¨æ€§](/gateway/security#reverse-proxy-configuration)ã€‚
- å¦‚æžœå°† BlueBubbles æœåŠ¡å™¨æš´éœ²åœ¨å±€åŸŸç½‘ä¹‹å¤–ï¼Œè¯·å¯ç”¨ HTTPS + é˜²ç«å¢™è§„åˆ™ã€‚

## æ•…éšœæŽ’é™¤

- å¦‚æžœè¾“å…¥/å·²è¯»äº‹ä»¶åœæ­¢å·¥ä½œï¼Œè¯·æ£€æŸ¥ BlueBubbles webhook æ—¥å¿—å¹¶éªŒè¯ Gateway ç½‘å…³è·¯å¾„æ˜¯å¦ä¸Ž `channels.bluebubbles.webhookPath` åŒ¹é…ã€‚
- é…å¯¹ç åœ¨ä¸€å°æ—¶åŽè¿‡æœŸï¼›ä½¿ç”¨ ` pairing list bluebubbles` å’Œ ` pairing approve bluebubbles <code>`ã€‚
- å›žåº”éœ€è¦ BlueBubbles private APIï¼ˆ`POST /api/v1/message/react`ï¼‰ï¼›ç¡®ä¿æœåŠ¡å™¨ç‰ˆæœ¬æ”¯æŒå®ƒã€‚
- ç¼–è¾‘/æ’¤å›žéœ€è¦ macOS 13+ å’Œå…¼å®¹çš„ BlueBubbles æœåŠ¡å™¨ç‰ˆæœ¬ã€‚åœ¨ macOS 26ï¼ˆTahoeï¼‰ä¸Šï¼Œç”±äºŽ private API å˜æ›´ï¼Œç¼–è¾‘åŠŸèƒ½ç›®å‰ä¸å¯ç”¨ã€‚
- åœ¨ macOS 26ï¼ˆTahoeï¼‰ä¸Šç¾¤ç»„å›¾æ ‡æ›´æ–°å¯èƒ½ä¸ç¨³å®šï¼šAPI å¯èƒ½è¿”å›žæˆåŠŸä½†æ–°å›¾æ ‡æœªåŒæ­¥ã€‚
-  ä¼šæ ¹æ® BlueBubbles æœåŠ¡å™¨çš„ macOS ç‰ˆæœ¬è‡ªåŠ¨éšè—å·²çŸ¥ä¸å¯ç”¨çš„æ“ä½œã€‚å¦‚æžœåœ¨ macOS 26ï¼ˆTahoeï¼‰ä¸Šç¼–è¾‘ä»ç„¶æ˜¾ç¤ºï¼Œè¯·ä½¿ç”¨ `channels.bluebubbles.actions.edit=false` æ‰‹åŠ¨ç¦ç”¨ã€‚
- æŸ¥çœ‹çŠ¶æ€/å¥åº·ä¿¡æ¯ï¼š` status --all` æˆ– ` status --deep`ã€‚

æœ‰å…³é€šç”¨æ¸ é“å·¥ä½œæµå‚è€ƒï¼Œè¯·å‚é˜…[æ¸ é“](/channels)å’Œ[æ’ä»¶](/plugins)æŒ‡å—ã€‚


