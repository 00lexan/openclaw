---
read_when:
  - ä½ æƒ³å°†  è¿žæŽ¥åˆ° LINE
  - ä½ éœ€è¦é…ç½® LINE webhook + å‡­è¯
  - ä½ æƒ³äº†è§£ LINE ç‰¹æœ‰çš„æ¶ˆæ¯é€‰é¡¹
summary: LINE Messaging API æ’ä»¶çš„é…ç½®ã€è®¾ç½®å’Œä½¿ç”¨æ–¹æ³•
title: LINE
x-i18n:
  generated_at: "2026-02-03T07:43:38Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 8fbac126786f95b9454f3cc61906c2798393a8d7914e787d3755c020c7ab2da6
  source_path: channels/line.md
  workflow: 15
---

# LINEï¼ˆæ’ä»¶ï¼‰

LINE é€šè¿‡ LINE Messaging API è¿žæŽ¥åˆ° ã€‚è¯¥æ’ä»¶ä½œä¸º webhook æŽ¥æ”¶å™¨åœ¨ Gateway ç½‘å…³ä¸Šè¿è¡Œï¼Œä½¿ç”¨ä½ çš„ channel access token + channel secret è¿›è¡Œèº«ä»½éªŒè¯ã€‚

çŠ¶æ€ï¼šé€šè¿‡æ’ä»¶æ”¯æŒã€‚æ”¯æŒç§ä¿¡ã€ç¾¤èŠã€åª’ä½“ã€ä½ç½®ã€Flex æ¶ˆæ¯ã€æ¨¡æ¿æ¶ˆæ¯å’Œå¿«æ·å›žå¤ã€‚ä¸æ”¯æŒè¡¨æƒ…å›žåº”å’Œè¯é¢˜å›žå¤ã€‚

## éœ€è¦å®‰è£…æ’ä»¶

å®‰è£… LINE æ’ä»¶ï¼š

```bash
 plugins install @/line
```

æœ¬åœ°æ£€å‡ºï¼ˆä»Ž git ä»“åº“è¿è¡Œæ—¶ï¼‰ï¼š

```bash
 plugins install ./extensions/line
```

## é…ç½®æ­¥éª¤

1. åˆ›å»º LINE Developers è´¦æˆ·å¹¶æ‰“å¼€æŽ§åˆ¶å°ï¼š
   https://developers.line.biz/console/
2. åˆ›å»ºï¼ˆæˆ–é€‰æ‹©ï¼‰ä¸€ä¸ª Provider å¹¶æ·»åŠ  **Messaging API** æ¸ é“ã€‚
3. ä»Žæ¸ é“è®¾ç½®ä¸­å¤åˆ¶ **Channel access token** å’Œ **Channel secret**ã€‚
4. åœ¨ Messaging API è®¾ç½®ä¸­å¯ç”¨ **Use webhook**ã€‚
5. å°† webhook URL è®¾ç½®ä¸ºä½ çš„ Gateway ç½‘å…³ç«¯ç‚¹ï¼ˆå¿…é¡»ä½¿ç”¨ HTTPSï¼‰ï¼š

```
https://gateway-host/line/webhook
```

Gateway ç½‘å…³ä¼šå“åº” LINE çš„ webhook éªŒè¯ï¼ˆGETï¼‰å’Œå…¥ç«™äº‹ä»¶ï¼ˆPOSTï¼‰ã€‚å¦‚æžœä½ éœ€è¦è‡ªå®šä¹‰è·¯å¾„ï¼Œè¯·è®¾ç½® `channels.line.webhookPath` æˆ– `channels.line.accounts.<id>.webhookPath` å¹¶ç›¸åº”æ›´æ–° URLã€‚

## é…ç½®

æœ€å°é…ç½®ï¼š

```json5
{
  channels: {
    line: {
      enabled: true,
      channelAccessToken: "LINE_CHANNEL_ACCESS_TOKEN",
      channelSecret: "LINE_CHANNEL_SECRET",
      dmPolicy: "pairing",
    },
  },
}
```

çŽ¯å¢ƒå˜é‡ï¼ˆä»…é™é»˜è®¤è´¦æˆ·ï¼‰ï¼š

- `LINE_CHANNEL_ACCESS_TOKEN`
- `LINE_CHANNEL_SECRET`

Token/secret æ–‡ä»¶ï¼š

```json5
{
  channels: {
    line: {
      tokenFile: "/path/to/line-token.txt",
      secretFile: "/path/to/line-secret.txt",
    },
  },
}
```

å¤šè´¦æˆ·é…ç½®ï¼š

```json5
{
  channels: {
    line: {
      accounts: {
        marketing: {
          channelAccessToken: "...",
          channelSecret: "...",
          webhookPath: "/line/marketing",
        },
      },
    },
  },
}
```

## è®¿é—®æŽ§åˆ¶

ç§ä¿¡é»˜è®¤ä½¿ç”¨é…å¯¹æ¨¡å¼ã€‚æœªçŸ¥å‘é€è€…ä¼šæ”¶åˆ°é…å¯¹ç ï¼Œå…¶æ¶ˆæ¯åœ¨èŽ·å¾—æ‰¹å‡†å‰ä¼šè¢«å¿½ç•¥ã€‚

```bash
 pairing list line
 pairing approve line <CODE>
```

å…è®¸åˆ—è¡¨å’Œç­–ç•¥ï¼š

- `channels.line.dmPolicy`ï¼š`pairing | allowlist | open | disabled`
- `channels.line.allowFrom`ï¼šç§ä¿¡çš„å…è®¸åˆ—è¡¨ LINE ç”¨æˆ· ID
- `channels.line.groupPolicy`ï¼š`allowlist | open | disabled`
- `channels.line.groupAllowFrom`ï¼šç¾¤ç»„çš„å…è®¸åˆ—è¡¨ LINE ç”¨æˆ· ID
- å•ç¾¤ç»„è¦†ç›–ï¼š`channels.line.groups.<groupId>.allowFrom`

LINE ID åŒºåˆ†å¤§å°å†™ã€‚æœ‰æ•ˆ ID æ ¼å¼å¦‚ä¸‹ï¼š

- ç”¨æˆ·ï¼š`U` + 32 ä½åå…­è¿›åˆ¶å­—ç¬¦
- ç¾¤ç»„ï¼š`C` + 32 ä½åå…­è¿›åˆ¶å­—ç¬¦
- æˆ¿é—´ï¼š`R` + 32 ä½åå…­è¿›åˆ¶å­—ç¬¦

## æ¶ˆæ¯è¡Œä¸º

- æ–‡æœ¬æŒ‰ 5000 å­—ç¬¦åˆ†å—ã€‚
- Markdown æ ¼å¼ä¼šè¢«ç§»é™¤ï¼›ä»£ç å—å’Œè¡¨æ ¼ä¼šå°½å¯èƒ½è½¬æ¢ä¸º Flex å¡ç‰‡ã€‚
- æµå¼å“åº”ä¼šè¢«ç¼“å†²ï¼›æ™ºèƒ½ä½“å¤„ç†æ—¶ï¼ŒLINE ä¼šæ”¶åˆ°å®Œæ•´åˆ†å—å¹¶æ˜¾ç¤ºåŠ è½½åŠ¨ç”»ã€‚
- åª’ä½“ä¸‹è½½å— `channels.line.mediaMaxMb` é™åˆ¶ï¼ˆé»˜è®¤ 10ï¼‰ã€‚

## æ¸ é“æ•°æ®ï¼ˆå¯Œæ¶ˆæ¯ï¼‰

ä½¿ç”¨ `channelData.line` å‘é€å¿«æ·å›žå¤ã€ä½ç½®ã€Flex å¡ç‰‡æˆ–æ¨¡æ¿æ¶ˆæ¯ã€‚

```json5
{
  text: "Here you go",
  channelData: {
    line: {
      quickReplies: ["Status", "Help"],
      location: {
        title: "Office",
        address: "123 Main St",
        latitude: 35.681236,
        longitude: 139.767125,
      },
      flexMessage: {
        altText: "Status card",
        contents: {
          /* Flex payload */
        },
      },
      templateMessage: {
        type: "confirm",
        text: "Proceed?",
        confirmLabel: "Yes",
        confirmData: "yes",
        cancelLabel: "No",
        cancelData: "no",
      },
    },
  },
}
```

LINE æ’ä»¶è¿˜æä¾› `/card` å‘½ä»¤ç”¨äºŽ Flex æ¶ˆæ¯é¢„è®¾ï¼š

```
/card info "Welcome" "Thanks for joining!"
```

## æ•…éšœæŽ’é™¤

- **Webhook éªŒè¯å¤±è´¥ï¼š** ç¡®ä¿ webhook URL ä½¿ç”¨ HTTPS ä¸” `channelSecret` ä¸Ž LINE æŽ§åˆ¶å°ä¸­çš„ä¸€è‡´ã€‚
- **æ²¡æœ‰å…¥ç«™äº‹ä»¶ï¼š** ç¡®è®¤ webhook è·¯å¾„ä¸Ž `channels.line.webhookPath` åŒ¹é…ï¼Œä¸” Gateway ç½‘å…³å¯ä»Ž LINE è®¿é—®ã€‚
- **åª’ä½“ä¸‹è½½é”™è¯¯ï¼š** å¦‚æžœåª’ä½“è¶…è¿‡é»˜è®¤é™åˆ¶ï¼Œè¯·æé«˜ `channels.line.mediaMaxMb`ã€‚


