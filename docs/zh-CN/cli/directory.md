---
read_when:
  - ä½ æƒ³æŸ¥æ‰¾æŸä¸ªæ¸ é“çš„è”ç³»äºº/ç¾¤ç»„/è‡ªèº« ID
  - ä½ æ­£åœ¨å¼€å‘æ¸ é“ç›®å½•é€‚é…å™¨
summary: "` directory` çš„ CLI å‚è€ƒï¼ˆselfã€peersã€groupsï¼‰"
title: directory
x-i18n:
  generated_at: "2026-02-01T19:58:58Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 7c878d9013aeaa22c8a21563fac30b465a86be85d8c917c5d4591b5c3d4b2025
  source_path: cli/directory.md
  workflow: 14
---

# ` directory`

å¯¹æ”¯æŒç›®å½•åŠŸèƒ½çš„æ¸ é“è¿›è¡ŒæŸ¥æ‰¾ï¼ˆè”ç³»äºº/å¯¹ç­‰æ–¹ã€ç¾¤ç»„å’Œ"æˆ‘"ï¼‰ã€‚

## é€šç”¨å‚æ•°

- `--channel <name>`ï¼šæ¸ é“ ID/åˆ«åï¼ˆé…ç½®äº†å¤šä¸ªæ¸ é“æ—¶ä¸ºå¿…å¡«ï¼›ä»…é…ç½®ä¸€ä¸ªæ¸ é“æ—¶è‡ªåŠ¨é€‰æ‹©ï¼‰
- `--account <id>`ï¼šè´¦å· IDï¼ˆé»˜è®¤ï¼šæ¸ é“é»˜è®¤è´¦å·ï¼‰
- `--json`ï¼šè¾“å‡º JSON æ ¼å¼

## è¯´æ˜Ž

- `directory` ç”¨äºŽå¸®åŠ©ä½ æŸ¥æ‰¾å¯ç²˜è´´åˆ°å…¶ä»–å‘½ä»¤ä¸­çš„ IDï¼ˆç‰¹åˆ«æ˜¯ ` message send --target ...`ï¼‰ã€‚
- å¯¹äºŽè®¸å¤šæ¸ é“ï¼Œç»“æžœæ¥æºäºŽé…ç½®ï¼ˆå…è®¸åˆ—è¡¨/å·²é…ç½®çš„ç¾¤ç»„ï¼‰ï¼Œè€Œéžå®žæ—¶çš„æä¾›å•†ç›®å½•ã€‚
- é»˜è®¤è¾“å‡ºä¸ºä»¥åˆ¶è¡¨ç¬¦åˆ†éš”çš„ `id`ï¼ˆæœ‰æ—¶åŒ…å« `name`ï¼‰ï¼›è„šæœ¬ä¸­è¯·ä½¿ç”¨ `--json`ã€‚

## å°†ç»“æžœç”¨äºŽ `message send`

```bash
 directory peers list --channel slack --query "U0"
 message send --channel slack --target user:U012ABCDEF --message "hello"
```

## ID æ ¼å¼ï¼ˆæŒ‰æ¸ é“ï¼‰

- WhatsAppï¼š`+15551234567`ï¼ˆç§èŠï¼‰ï¼Œ`1234567890-1234567890@g.us`ï¼ˆç¾¤ç»„ï¼‰
- Telegramï¼š`@username` æˆ–æ•°å­—èŠå¤© IDï¼›ç¾¤ç»„ä¸ºæ•°å­— ID
- Slackï¼š`user:Uâ€¦` å’Œ `channel:Câ€¦`
- Discordï¼š`user:<id>` å’Œ `channel:<id>`
- Matrixï¼ˆæ’ä»¶ï¼‰ï¼š`user:@user:server`ã€`room:!roomId:server` æˆ– `#alias:server`
- Microsoft Teamsï¼ˆæ’ä»¶ï¼‰ï¼š`user:<id>` å’Œ `conversation:<id>`
- Zaloï¼ˆæ’ä»¶ï¼‰ï¼šç”¨æˆ· IDï¼ˆBot APIï¼‰
- Zalo Personal / `zalouser`ï¼ˆæ’ä»¶ï¼‰ï¼šæ¥è‡ª `zca` çš„ä¼šè¯ IDï¼ˆç§èŠ/ç¾¤ç»„ï¼‰ï¼ˆ`me`ã€`friend list`ã€`group list`ï¼‰

## Selfï¼ˆ"æˆ‘"ï¼‰

```bash
 directory self --channel zalouser
```

## Peersï¼ˆè”ç³»äºº/ç”¨æˆ·ï¼‰

```bash
 directory peers list --channel zalouser
 directory peers list --channel zalouser --query "name"
 directory peers list --channel zalouser --limit 50
```

## ç¾¤ç»„

```bash
 directory groups list --channel zalouser
 directory groups list --channel zalouser --query "work"
 directory groups members --channel zalouser --group-id <id>
```


