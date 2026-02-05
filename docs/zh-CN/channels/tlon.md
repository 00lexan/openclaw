---
read_when:
  - å¼€å‘ Tlon/Urbit æ¸ é“åŠŸèƒ½
summary: Tlon/Urbit æ”¯æŒçŠ¶æ€ã€åŠŸèƒ½å’Œé…ç½®
title: Tlon
x-i18n:
  generated_at: "2026-02-03T07:44:17Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 19d7ffe23e82239fd2a2e35913e0d52c809b2c2b939dd39184e6c27a539ed97d
  source_path: channels/tlon.md
  workflow: 15
---

# Tlonï¼ˆæ’ä»¶ï¼‰

Tlon æ˜¯ä¸€ä¸ªåŸºäºŽ Urbit æž„å»ºçš„åŽ»ä¸­å¿ƒåŒ–å³æ—¶é€šè®¯å·¥å…·ã€‚ è¿žæŽ¥åˆ°ä½ çš„ Urbit shipï¼Œå¯ä»¥å“åº”ç§ä¿¡å’Œç¾¤èŠæ¶ˆæ¯ã€‚ç¾¤ç»„å›žå¤é»˜è®¤éœ€è¦ @ æåŠï¼Œå¹¶å¯é€šè¿‡å…è®¸åˆ—è¡¨è¿›ä¸€æ­¥é™åˆ¶ã€‚

çŠ¶æ€ï¼šé€šè¿‡æ’ä»¶æ”¯æŒã€‚æ”¯æŒç§ä¿¡ã€ç¾¤ç»„æåŠã€è¯é¢˜å›žå¤å’Œçº¯æ–‡æœ¬åª’ä½“å›žé€€ï¼ˆURL é™„åŠ åˆ°è¯´æ˜Žæ–‡å­—ï¼‰ã€‚ä¸æ”¯æŒè¡¨æƒ…å›žåº”ã€æŠ•ç¥¨å’ŒåŽŸç”Ÿåª’ä½“ä¸Šä¼ ã€‚

## éœ€è¦æ’ä»¶

Tlon ä½œä¸ºæ’ä»¶æä¾›ï¼Œä¸åŒ…å«åœ¨æ ¸å¿ƒå®‰è£…ä¸­ã€‚

é€šè¿‡ CLI å®‰è£…ï¼ˆnpm ä»“åº“ï¼‰ï¼š

```bash
 plugins install @/tlon
```

æœ¬åœ°æ£€å‡ºï¼ˆä»Ž git ä»“åº“è¿è¡Œæ—¶ï¼‰ï¼š

```bash
 plugins install ./extensions/tlon
```

è¯¦æƒ…ï¼š[æ’ä»¶](/plugin)

## è®¾ç½®

1. å®‰è£… Tlon æ’ä»¶ã€‚
2. èŽ·å–ä½ çš„ ship URL å’Œç™»å½•ä»£ç ã€‚
3. é…ç½® `channels.tlon`ã€‚
4. é‡å¯ Gateway ç½‘å…³ã€‚
5. ç§ä¿¡æœºå™¨äººæˆ–åœ¨ç¾¤ç»„é¢‘é“ä¸­æåŠå®ƒã€‚

æœ€å°é…ç½®ï¼ˆå•è´¦æˆ·ï¼‰ï¼š

```json5
{
  channels: {
    tlon: {
      enabled: true,
      ship: "~sampel-palnet",
      url: "https://your-ship-host",
      code: "lidlut-tabwed-pillex-ridrup",
    },
  },
}
```

## ç¾¤ç»„é¢‘é“

é»˜è®¤å¯ç”¨è‡ªåŠ¨å‘çŽ°ã€‚ä½ ä¹Ÿå¯ä»¥æ‰‹åŠ¨å›ºå®šé¢‘é“ï¼š

```json5
{
  channels: {
    tlon: {
      groupChannels: ["chat/~host-ship/general", "chat/~host-ship/support"],
    },
  },
}
```

ç¦ç”¨è‡ªåŠ¨å‘çŽ°ï¼š

```json5
{
  channels: {
    tlon: {
      autoDiscoverChannels: false,
    },
  },
}
```

## è®¿é—®æŽ§åˆ¶

ç§ä¿¡å…è®¸åˆ—è¡¨ï¼ˆç©º = å…è®¸å…¨éƒ¨ï¼‰ï¼š

```json5
{
  channels: {
    tlon: {
      dmAllowlist: ["~zod", "~nec"],
    },
  },
}
```

ç¾¤ç»„æŽˆæƒï¼ˆé»˜è®¤å—é™ï¼‰ï¼š

```json5
{
  channels: {
    tlon: {
      defaultAuthorizedShips: ["~zod"],
      authorization: {
        channelRules: {
          "chat/~host-ship/general": {
            mode: "restricted",
            allowedShips: ["~zod", "~nec"],
          },
          "chat/~host-ship/announcements": {
            mode: "open",
          },
        },
      },
    },
  },
}
```

## æŠ•é€’ç›®æ ‡ï¼ˆCLI/cronï¼‰

ä¸Ž ` message send` æˆ– cron æŠ•é€’ä¸€èµ·ä½¿ç”¨ï¼š

- ç§ä¿¡ï¼š`~sampel-palnet` æˆ– `dm/~sampel-palnet`
- ç¾¤ç»„ï¼š`chat/~host-ship/channel` æˆ– `group:~host-ship/channel`

## æ³¨æ„äº‹é¡¹

- ç¾¤ç»„å›žå¤éœ€è¦æåŠï¼ˆä¾‹å¦‚ `~your-bot-ship`ï¼‰æ‰èƒ½å“åº”ã€‚
- è¯é¢˜å›žå¤ï¼šå¦‚æžœå…¥ç«™æ¶ˆæ¯åœ¨è¯é¢˜ä¸­ï¼Œ ä¼šåœ¨è¯é¢˜å†…å›žå¤ã€‚
- åª’ä½“ï¼š`sendMedia` å›žé€€ä¸ºæ–‡æœ¬ + URLï¼ˆæ— åŽŸç”Ÿä¸Šä¼ ï¼‰ã€‚

