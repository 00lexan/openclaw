---
read_when:
  - å¼€å‘ Matrix æ¸ é“åŠŸèƒ½
summary: Matrix æ”¯æŒçŠ¶æ€ã€åŠŸèƒ½å’Œé…ç½®
title: Matrix
x-i18n:
  generated_at: "2026-02-03T07:44:02Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: b276b5263593c766e7be6549abbb27927177e7b51cfd297b4825965372513ee4
  source_path: channels/matrix.md
  workflow: 15
---

# Matrixï¼ˆæ’ä»¶ï¼‰

Matrix æ˜¯ä¸€ä¸ªå¼€æ”¾çš„åŽ»ä¸­å¿ƒåŒ–æ¶ˆæ¯åè®®ã€‚ ä»¥ Matrix **ç”¨æˆ·**èº«ä»½è¿žæŽ¥åˆ°ä»»æ„ä¸»æœåŠ¡å™¨ï¼Œå› æ­¤ä½ éœ€è¦ä¸ºæœºå™¨äººåˆ›å»ºä¸€ä¸ª Matrix è´¦æˆ·ã€‚ç™»å½•åŽï¼Œä½ å¯ä»¥ç›´æŽ¥ç§ä¿¡æœºå™¨äººæˆ–é‚€è¯·å®ƒåŠ å…¥æˆ¿é—´ï¼ˆMatrix"ç¾¤ç»„"ï¼‰ã€‚Beeper ä¹Ÿæ˜¯ä¸€ä¸ªæœ‰æ•ˆçš„å®¢æˆ·ç«¯é€‰é¡¹ï¼Œä½†å®ƒéœ€è¦å¯ç”¨ E2EEã€‚

çŠ¶æ€ï¼šé€šè¿‡æ’ä»¶ï¼ˆ@vector-im/matrix-bot-sdkï¼‰æ”¯æŒã€‚æ”¯æŒç§ä¿¡ã€æˆ¿é—´ã€è¯é¢˜ã€åª’ä½“ã€è¡¨æƒ…å›žåº”ã€æŠ•ç¥¨ï¼ˆå‘é€ + poll-start ä½œä¸ºæ–‡æœ¬ï¼‰ã€ä½ç½®å’Œ E2EEï¼ˆéœ€è¦åŠ å¯†æ”¯æŒï¼‰ã€‚

## éœ€è¦æ’ä»¶

Matrix ä½œä¸ºæ’ä»¶æä¾›ï¼Œä¸åŒ…å«åœ¨æ ¸å¿ƒå®‰è£…ä¸­ã€‚

é€šè¿‡ CLI å®‰è£…ï¼ˆnpm ä»“åº“ï¼‰ï¼š

```bash
 plugins install @/matrix
```

æœ¬åœ°æ£€å‡ºï¼ˆä»Ž git ä»“åº“è¿è¡Œæ—¶ï¼‰ï¼š

```bash
 plugins install ./extensions/matrix
```

å¦‚æžœä½ åœ¨é…ç½®/æ–°æ‰‹å¼•å¯¼æœŸé—´é€‰æ‹© Matrix å¹¶æ£€æµ‹åˆ° git æ£€å‡ºï¼Œ å°†è‡ªåŠ¨æä¾›æœ¬åœ°å®‰è£…è·¯å¾„ã€‚

è¯¦æƒ…ï¼š[æ’ä»¶](/plugin)

## è®¾ç½®

1. å®‰è£… Matrix æ’ä»¶ï¼š
   - ä»Ž npmï¼š` plugins install @/matrix`
   - ä»Žæœ¬åœ°æ£€å‡ºï¼š` plugins install ./extensions/matrix`
2. åœ¨ä¸»æœåŠ¡å™¨ä¸Šåˆ›å»º Matrix è´¦æˆ·ï¼š
   - åœ¨ [https://matrix.org/ecosystem/hosting/](https://matrix.org/ecosystem/hosting/) æµè§ˆæ‰˜ç®¡é€‰é¡¹
   - æˆ–è‡ªè¡Œæ‰˜ç®¡ã€‚
3. èŽ·å–æœºå™¨äººè´¦æˆ·çš„è®¿é—®ä»¤ç‰Œï¼š
   - åœ¨ä½ çš„ä¸»æœåŠ¡å™¨ä¸Šä½¿ç”¨ `curl` è°ƒç”¨ Matrix ç™»å½• APIï¼š

   ```bash
   curl --request POST \
     --url https://matrix.example.org/_matrix/client/v3/login \
     --header 'Content-Type: application/json' \
     --data '{
     "type": "m.login.password",
     "identifier": {
       "type": "m.id.user",
       "user": "your-user-name"
     },
     "password": "your-password"
   }'
   ```

   - å°† `matrix.example.org` æ›¿æ¢ä¸ºä½ çš„ä¸»æœåŠ¡å™¨ URLã€‚
   - æˆ–è®¾ç½® `channels.matrix.userId` + `channels.matrix.password`ï¼š ä¼šè°ƒç”¨ç›¸åŒçš„ç™»å½•ç«¯ç‚¹ï¼Œå°†è®¿é—®ä»¤ç‰Œå­˜å‚¨åœ¨ `~/./credentials/matrix/credentials.json`ï¼Œå¹¶åœ¨ä¸‹æ¬¡å¯åŠ¨æ—¶é‡ç”¨ã€‚

4. é…ç½®å‡­è¯ï¼š
   - çŽ¯å¢ƒå˜é‡ï¼š`MATRIX_HOMESERVER`ã€`MATRIX_ACCESS_TOKEN`ï¼ˆæˆ– `MATRIX_USER_ID` + `MATRIX_PASSWORD`ï¼‰
   - æˆ–é…ç½®ï¼š`channels.matrix.*`
   - å¦‚æžœä¸¤è€…éƒ½è®¾ç½®ï¼Œé…ç½®ä¼˜å…ˆã€‚
   - ä½¿ç”¨è®¿é—®ä»¤ç‰Œæ—¶ï¼šç”¨æˆ· ID é€šè¿‡ `/whoami` è‡ªåŠ¨èŽ·å–ã€‚
   - è®¾ç½®æ—¶ï¼Œ`channels.matrix.userId` åº”ä¸ºå®Œæ•´çš„ Matrix IDï¼ˆç¤ºä¾‹ï¼š`@bot:example.org`ï¼‰ã€‚
5. é‡å¯ Gateway ç½‘å…³ï¼ˆæˆ–å®Œæˆæ–°æ‰‹å¼•å¯¼ï¼‰ã€‚
6. ä»Žä»»ä½• Matrix å®¢æˆ·ç«¯ï¼ˆElementã€Beeper ç­‰ï¼›å‚è§ https://matrix.org/ecosystem/clients/ï¼‰ä¸Žæœºå™¨äººå¼€å§‹ç§ä¿¡æˆ–é‚€è¯·å®ƒåŠ å…¥æˆ¿é—´ã€‚Beeper éœ€è¦ E2EEï¼Œå› æ­¤è¯·è®¾ç½® `channels.matrix.encryption: true` å¹¶éªŒè¯è®¾å¤‡ã€‚

æœ€å°é…ç½®ï¼ˆè®¿é—®ä»¤ç‰Œï¼Œç”¨æˆ· ID è‡ªåŠ¨èŽ·å–ï¼‰ï¼š

```json5
{
  channels: {
    matrix: {
      enabled: true,
      homeserver: "https://matrix.example.org",
      accessToken: "syt_***",
      dm: { policy: "pairing" },
    },
  },
}
```

E2EE é…ç½®ï¼ˆå¯ç”¨ç«¯åˆ°ç«¯åŠ å¯†ï¼‰ï¼š

```json5
{
  channels: {
    matrix: {
      enabled: true,
      homeserver: "https://matrix.example.org",
      accessToken: "syt_***",
      encryption: true,
      dm: { policy: "pairing" },
    },
  },
}
```

## åŠ å¯†ï¼ˆE2EEï¼‰

é€šè¿‡ Rust åŠ å¯† SDK **æ”¯æŒ**ç«¯åˆ°ç«¯åŠ å¯†ã€‚

ä½¿ç”¨ `channels.matrix.encryption: true` å¯ç”¨ï¼š

- å¦‚æžœåŠ å¯†æ¨¡å—åŠ è½½æˆåŠŸï¼ŒåŠ å¯†æˆ¿é—´ä¼šè‡ªåŠ¨è§£å¯†ã€‚
- å‘é€åˆ°åŠ å¯†æˆ¿é—´æ—¶ï¼Œå‡ºç«™åª’ä½“ä¼šè¢«åŠ å¯†ã€‚
- é¦–æ¬¡è¿žæŽ¥æ—¶ï¼Œ ä¼šå‘ä½ çš„å…¶ä»–ä¼šè¯è¯·æ±‚è®¾å¤‡éªŒè¯ã€‚
- åœ¨å¦ä¸€ä¸ª Matrix å®¢æˆ·ç«¯ï¼ˆElement ç­‰ï¼‰ä¸­éªŒè¯è®¾å¤‡ä»¥å¯ç”¨å¯†é’¥å…±äº«ã€‚
- å¦‚æžœæ— æ³•åŠ è½½åŠ å¯†æ¨¡å—ï¼ŒE2EE å°†è¢«ç¦ç”¨ï¼ŒåŠ å¯†æˆ¿é—´å°†æ— æ³•è§£å¯†ï¼› ä¼šè®°å½•è­¦å‘Šã€‚
- å¦‚æžœä½ çœ‹åˆ°ç¼ºå°‘åŠ å¯†æ¨¡å—çš„é”™è¯¯ï¼ˆä¾‹å¦‚ `@matrix-org/matrix-sdk-crypto-nodejs-*`ï¼‰ï¼Œè¯·å…è®¸ `@matrix-org/matrix-sdk-crypto-nodejs` çš„æž„å»ºè„šæœ¬å¹¶è¿è¡Œ `pnpm rebuild @matrix-org/matrix-sdk-crypto-nodejs`ï¼Œæˆ–ä½¿ç”¨ `node node_modules/@matrix-org/matrix-sdk-crypto-nodejs/download-lib.js` èŽ·å–äºŒè¿›åˆ¶æ–‡ä»¶ã€‚

åŠ å¯†çŠ¶æ€æŒ‰è´¦æˆ· + è®¿é—®ä»¤ç‰Œå­˜å‚¨åœ¨ `~/./matrix/accounts/<account>/<homeserver>__<user>/<token-hash>/crypto/`ï¼ˆSQLite æ•°æ®åº“ï¼‰ã€‚åŒæ­¥çŠ¶æ€å­˜å‚¨åœ¨åŒç›®å½•çš„ `bot-storage.json` ä¸­ã€‚å¦‚æžœè®¿é—®ä»¤ç‰Œï¼ˆè®¾å¤‡ï¼‰æ›´æ”¹ï¼Œå°†åˆ›å»ºæ–°çš„å­˜å‚¨ï¼Œæœºå™¨äººå¿…é¡»é‡æ–°éªŒè¯æ‰èƒ½è®¿é—®åŠ å¯†æˆ¿é—´ã€‚

**è®¾å¤‡éªŒè¯ï¼š**
å¯ç”¨ E2EE æ—¶ï¼Œæœºå™¨äººå°†åœ¨å¯åŠ¨æ—¶å‘ä½ çš„å…¶ä»–ä¼šè¯è¯·æ±‚éªŒè¯ã€‚æ‰“å¼€ Elementï¼ˆæˆ–å…¶ä»–å®¢æˆ·ç«¯ï¼‰å¹¶æ‰¹å‡†éªŒè¯è¯·æ±‚ä»¥å»ºç«‹ä¿¡ä»»ã€‚éªŒè¯åŽï¼Œæœºå™¨äººå¯ä»¥è§£å¯†åŠ å¯†æˆ¿é—´ä¸­çš„æ¶ˆæ¯ã€‚

## è·¯ç”±æ¨¡åž‹

- å›žå¤å§‹ç»ˆè¿”å›žåˆ° Matrixã€‚
- ç§ä¿¡å…±äº«æ™ºèƒ½ä½“çš„ä¸»ä¼šè¯ï¼›æˆ¿é—´æ˜ å°„åˆ°ç¾¤ç»„ä¼šè¯ã€‚

## è®¿é—®æŽ§åˆ¶ï¼ˆç§ä¿¡ï¼‰

- é»˜è®¤ï¼š`channels.matrix.dm.policy = "pairing"`ã€‚æœªçŸ¥å‘é€è€…ä¼šæ”¶åˆ°é…å¯¹ç ã€‚
- é€šè¿‡ä»¥ä¸‹æ–¹å¼æ‰¹å‡†ï¼š
  - ` pairing list matrix`
  - ` pairing approve matrix <CODE>`
- å…¬å¼€ç§ä¿¡ï¼š`channels.matrix.dm.policy="open"` åŠ ä¸Š `channels.matrix.dm.allowFrom=["*"]`ã€‚
- `channels.matrix.dm.allowFrom` ä»…æŽ¥å—å®Œæ•´ Matrix ç”¨æˆ· IDï¼ˆä¾‹å¦‚ `@user:server`ï¼‰ã€‚å‘å¯¼ä»…åœ¨ç›®å½•æœç´¢å¾—åˆ°å”¯ä¸€ç²¾ç¡®åŒ¹é…æ—¶å°†æ˜¾ç¤ºåç§°è§£æžä¸ºç”¨æˆ· IDã€‚

## æˆ¿é—´ï¼ˆç¾¤ç»„ï¼‰

- é»˜è®¤ï¼š`channels.matrix.groupPolicy = "allowlist"`ï¼ˆæåŠé—¨æŽ§ï¼‰ã€‚ä½¿ç”¨ `channels.defaults.groupPolicy` åœ¨æœªè®¾ç½®æ—¶è¦†ç›–é»˜è®¤å€¼ã€‚
- ä½¿ç”¨ `channels.matrix.groups` é…ç½®æˆ¿é—´å…è®¸åˆ—è¡¨ï¼ˆæˆ¿é—´ ID æˆ–åˆ«åï¼›åç§°ä»…åœ¨ç›®å½•æœç´¢å¾—åˆ°å”¯ä¸€ç²¾ç¡®åŒ¹é…æ—¶è§£æžä¸º IDï¼‰ï¼š

```json5
{
  channels: {
    matrix: {
      groupPolicy: "allowlist",
      groups: {
        "!roomId:example.org": { allow: true },
        "#alias:example.org": { allow: true },
      },
      groupAllowFrom: ["@owner:example.org"],
    },
  },
}
```

- `requireMention: false` å¯ç”¨è¯¥æˆ¿é—´çš„è‡ªåŠ¨å›žå¤ã€‚
- `groups."*"` å¯ä»¥è®¾ç½®è·¨æˆ¿é—´çš„æåŠé—¨æŽ§é»˜è®¤å€¼ã€‚
- `groupAllowFrom` é™åˆ¶å“ªäº›å‘é€è€…å¯ä»¥åœ¨æˆ¿é—´ä¸­è§¦å‘æœºå™¨äººï¼ˆéœ€å®Œæ•´ Matrix ç”¨æˆ· IDï¼‰ã€‚
- æ¯ä¸ªæˆ¿é—´çš„ `users` å…è®¸åˆ—è¡¨å¯ä»¥è¿›ä¸€æ­¥é™åˆ¶ç‰¹å®šæˆ¿é—´å†…çš„å‘é€è€…ï¼ˆéœ€å®Œæ•´ Matrix ç”¨æˆ· IDï¼‰ã€‚
- é…ç½®å‘å¯¼ä¼šæç¤ºè¾“å…¥æˆ¿é—´å…è®¸åˆ—è¡¨ï¼ˆæˆ¿é—´ IDã€åˆ«åæˆ–åç§°ï¼‰ï¼Œä»…åœ¨ç²¾ç¡®ä¸”å”¯ä¸€åŒ¹é…æ—¶è§£æžåç§°ã€‚
- å¯åŠ¨æ—¶ï¼Œ å°†å…è®¸åˆ—è¡¨ä¸­çš„æˆ¿é—´/ç”¨æˆ·åç§°è§£æžä¸º ID å¹¶è®°å½•æ˜ å°„ï¼›æœªè§£æžçš„æ¡ç›®ä¸ä¼šå‚ä¸Žå…è®¸åˆ—è¡¨åŒ¹é…ã€‚
- é»˜è®¤è‡ªåŠ¨åŠ å…¥é‚€è¯·ï¼›ä½¿ç”¨ `channels.matrix.autoJoin` å’Œ `channels.matrix.autoJoinAllowlist` æŽ§åˆ¶ã€‚
- è¦**ç¦æ­¢æ‰€æœ‰æˆ¿é—´**ï¼Œè®¾ç½® `channels.matrix.groupPolicy: "disabled"`ï¼ˆæˆ–ä¿æŒç©ºçš„å…è®¸åˆ—è¡¨ï¼‰ã€‚
- æ—§ç‰ˆé”®åï¼š`channels.matrix.rooms`ï¼ˆä¸Ž `groups` ç›¸åŒçš„ç»“æž„ï¼‰ã€‚

## è¯é¢˜

- æ”¯æŒå›žå¤è¯é¢˜ã€‚
- `channels.matrix.threadReplies` æŽ§åˆ¶å›žå¤æ˜¯å¦ä¿æŒåœ¨è¯é¢˜ä¸­ï¼š
  - `off`ã€`inbound`ï¼ˆé»˜è®¤ï¼‰ã€`always`
- `channels.matrix.replyToMode` æŽ§åˆ¶ä¸åœ¨è¯é¢˜ä¸­å›žå¤æ—¶çš„ reply-to å…ƒæ•°æ®ï¼š
  - `off`ï¼ˆé»˜è®¤ï¼‰ã€`first`ã€`all`

## åŠŸèƒ½

| åŠŸèƒ½     | çŠ¶æ€                                                   |
| -------- | ------------------------------------------------------ |
| ç§ä¿¡     | âœ… æ”¯æŒ                                                |
| æˆ¿é—´     | âœ… æ”¯æŒ                                                |
| è¯é¢˜     | âœ… æ”¯æŒ                                                |
| åª’ä½“     | âœ… æ”¯æŒ                                                |
| E2EE     | âœ… æ”¯æŒï¼ˆéœ€è¦åŠ å¯†æ¨¡å—ï¼‰                                |
| è¡¨æƒ…å›žåº” | âœ… æ”¯æŒï¼ˆé€šè¿‡å·¥å…·å‘é€/è¯»å–ï¼‰                           |
| æŠ•ç¥¨     | âœ… æ”¯æŒå‘é€ï¼›å…¥ç«™æŠ•ç¥¨å¼€å§‹è½¬æ¢ä¸ºæ–‡æœ¬ï¼ˆå“åº”/ç»“æŸè¢«å¿½ç•¥ï¼‰ |
| ä½ç½®     | âœ… æ”¯æŒï¼ˆgeo URIï¼›å¿½ç•¥æµ·æ‹”ï¼‰                           |
| åŽŸç”Ÿå‘½ä»¤ | âœ… æ”¯æŒ                                                |

## é…ç½®å‚è€ƒï¼ˆMatrixï¼‰

å®Œæ•´é…ç½®ï¼š[é…ç½®](/gateway/configuration)

æä¾›å•†é€‰é¡¹ï¼š

- `channels.matrix.enabled`ï¼šå¯ç”¨/ç¦ç”¨æ¸ é“å¯åŠ¨ã€‚
- `channels.matrix.homeserver`ï¼šä¸»æœåŠ¡å™¨ URLã€‚
- `channels.matrix.userId`ï¼šMatrix ç”¨æˆ· IDï¼ˆä½¿ç”¨è®¿é—®ä»¤ç‰Œæ—¶å¯é€‰ï¼‰ã€‚
- `channels.matrix.accessToken`ï¼šè®¿é—®ä»¤ç‰Œã€‚
- `channels.matrix.password`ï¼šç™»å½•å¯†ç ï¼ˆä»¤ç‰Œä¼šè¢«å­˜å‚¨ï¼‰ã€‚
- `channels.matrix.deviceName`ï¼šè®¾å¤‡æ˜¾ç¤ºåç§°ã€‚
- `channels.matrix.encryption`ï¼šå¯ç”¨ E2EEï¼ˆé»˜è®¤ï¼šfalseï¼‰ã€‚
- `channels.matrix.initialSyncLimit`ï¼šåˆå§‹åŒæ­¥é™åˆ¶ã€‚
- `channels.matrix.threadReplies`ï¼š`off | inbound | always`ï¼ˆé»˜è®¤ï¼šinboundï¼‰ã€‚
- `channels.matrix.textChunkLimit`ï¼šå‡ºç«™æ–‡æœ¬åˆ†å—å¤§å°ï¼ˆå­—ç¬¦ï¼‰ã€‚
- `channels.matrix.chunkMode`ï¼š`length`ï¼ˆé»˜è®¤ï¼‰æˆ– `newline` åœ¨é•¿åº¦åˆ†å—å‰æŒ‰ç©ºè¡Œï¼ˆæ®µè½è¾¹ç•Œï¼‰åˆ†å‰²ã€‚
- `channels.matrix.dm.policy`ï¼š`pairing | allowlist | open | disabled`ï¼ˆé»˜è®¤ï¼špairingï¼‰ã€‚
- `channels.matrix.dm.allowFrom`ï¼šç§ä¿¡å…è®¸åˆ—è¡¨ï¼ˆéœ€å®Œæ•´ Matrix ç”¨æˆ· IDï¼‰ã€‚`open` éœ€è¦ `"*"`ã€‚å‘å¯¼åœ¨å¯èƒ½æ—¶å°†åç§°è§£æžä¸º IDã€‚
- `channels.matrix.groupPolicy`ï¼š`allowlist | open | disabled`ï¼ˆé»˜è®¤ï¼šallowlistï¼‰ã€‚
- `channels.matrix.groupAllowFrom`ï¼šç¾¤ç»„æ¶ˆæ¯çš„å…è®¸å‘é€è€…åˆ—è¡¨ï¼ˆéœ€å®Œæ•´ Matrix ç”¨æˆ· IDï¼‰ã€‚
- `channels.matrix.allowlistOnly`ï¼šå¼ºåˆ¶ç§ä¿¡ + æˆ¿é—´ä½¿ç”¨å…è®¸åˆ—è¡¨è§„åˆ™ã€‚
- `channels.matrix.groups`ï¼šç¾¤ç»„å…è®¸åˆ—è¡¨ + æ¯ä¸ªæˆ¿é—´çš„è®¾ç½®æ˜ å°„ã€‚
- `channels.matrix.rooms`ï¼šæ—§ç‰ˆç¾¤ç»„å…è®¸åˆ—è¡¨/é…ç½®ã€‚
- `channels.matrix.replyToMode`ï¼šè¯é¢˜/æ ‡ç­¾çš„ reply-to æ¨¡å¼ã€‚
- `channels.matrix.mediaMaxMb`ï¼šå…¥ç«™/å‡ºç«™åª’ä½“ä¸Šé™ï¼ˆMBï¼‰ã€‚
- `channels.matrix.autoJoin`ï¼šé‚€è¯·å¤„ç†ï¼ˆ`always | allowlist | off`ï¼Œé»˜è®¤ï¼šalwaysï¼‰ã€‚
- `channels.matrix.autoJoinAllowlist`ï¼šè‡ªåŠ¨åŠ å…¥çš„å…è®¸æˆ¿é—´ ID/åˆ«åã€‚
- `channels.matrix.actions`ï¼šæ¯ä¸ªæ“ä½œçš„å·¥å…·é™åˆ¶ï¼ˆreactions/messages/pins/memberInfo/channelInfoï¼‰ã€‚


