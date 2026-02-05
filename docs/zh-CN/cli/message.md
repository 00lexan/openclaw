---
read_when:
  - æ·»åŠ æˆ–ä¿®æ”¹æ¶ˆæ¯ CLI æ“ä½œ
  - æ›´æ”¹å‡ºç«™æ¸ é“è¡Œä¸º
summary: "` message`ï¼ˆå‘é€ + æ¸ é“æ“ä½œï¼‰çš„ CLI å‚è€ƒ"
title: message
x-i18n:
  generated_at: "2026-02-01T20:21:30Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 35159baf1ef7136252e3ab1e5e03881ebc4196dd43425e2319a39306ced7f48c
  source_path: cli/message.md
  workflow: 14
---

# ` message`

ç”¨äºŽå‘é€æ¶ˆæ¯å’Œæ¸ é“æ“ä½œçš„å•ä¸€å‡ºç«™å‘½ä»¤
ï¼ˆDiscord/Google Chat/Slack/Mattermostï¼ˆæ’ä»¶ï¼‰/Telegram/WhatsApp/Signal/iMessage/MS Teamsï¼‰ã€‚

## ç”¨æ³•

```
 message <subcommand> [flags]
```

æ¸ é“é€‰æ‹©ï¼š

- å¦‚æžœé…ç½®äº†å¤šä¸ªæ¸ é“ï¼Œåˆ™å¿…é¡»æŒ‡å®š `--channel`ã€‚
- å¦‚æžœåªé…ç½®äº†ä¸€ä¸ªæ¸ é“ï¼Œåˆ™è¯¥æ¸ é“ä¸ºé»˜è®¤å€¼ã€‚
- å¯é€‰å€¼ï¼š`whatsapp|telegram|discord|googlechat|slack|mattermost|signal|imessage|msteams`ï¼ˆMattermost éœ€è¦æ’ä»¶ï¼‰

ç›®æ ‡æ ¼å¼ï¼ˆ`--target`ï¼‰ï¼š

- WhatsAppï¼šE.164 æˆ–ç¾¤ç»„ JID
- Telegramï¼šèŠå¤© ID æˆ– `@username`
- Discordï¼š`channel:<id>` æˆ– `user:<id>`ï¼ˆæˆ– `<@id>` æåŠï¼›çº¯æ•°å­— ID è¢«è§†ä¸ºé¢‘é“ï¼‰
- Google Chatï¼š`spaces/<spaceId>` æˆ– `users/<userId>`
- Slackï¼š`channel:<id>` æˆ– `user:<id>`ï¼ˆæŽ¥å—çº¯é¢‘é“ IDï¼‰
- Mattermostï¼ˆæ’ä»¶ï¼‰ï¼š`channel:<id>`ã€`user:<id>` æˆ– `@username`ï¼ˆçº¯ ID è¢«è§†ä¸ºé¢‘é“ï¼‰
- Signalï¼š`+E.164`ã€`group:<id>`ã€`signal:+E.164`ã€`signal:group:<id>` æˆ– `username:<name>`/`u:<name>`
- iMessageï¼šå¥æŸ„ã€`chat_id:<id>`ã€`chat_guid:<guid>` æˆ– `chat_identifier:<id>`
- MS Teamsï¼šä¼šè¯ IDï¼ˆ`19:...@thread.tacv2`ï¼‰æˆ– `conversation:<id>` æˆ– `user:<aad-object-id>`

åç§°æŸ¥æ‰¾ï¼š

- å¯¹äºŽæ”¯æŒçš„æä¾›å•†ï¼ˆDiscord/Slack ç­‰ï¼‰ï¼Œå¦‚ `Help` æˆ– `#help` ä¹‹ç±»çš„é¢‘é“åç§°ä¼šé€šè¿‡ç›®å½•ç¼“å­˜è¿›è¡Œè§£æžã€‚
- ç¼“å­˜æœªå‘½ä¸­æ—¶ï¼Œå¦‚æžœæä¾›å•†æ”¯æŒï¼Œ å°†å°è¯•å®žæ—¶ç›®å½•æŸ¥æ‰¾ã€‚

## é€šç”¨æ ‡å¿—

- `--channel <name>`
- `--account <id>`
- `--target <dest>`ï¼ˆç”¨äºŽ send/poll/read ç­‰çš„ç›®æ ‡æ¸ é“æˆ–ç”¨æˆ·ï¼‰
- `--targets <name>`ï¼ˆå¯é‡å¤ï¼›ä»…é™å¹¿æ’­ï¼‰
- `--json`
- `--dry-run`
- `--verbose`

## æ“ä½œ

### æ ¸å¿ƒ

- `send`
  - æ¸ é“ï¼šWhatsApp/Telegram/Discord/Google Chat/Slack/Mattermostï¼ˆæ’ä»¶ï¼‰/Signal/iMessage/MS Teams
  - å¿…éœ€ï¼š`--target`ï¼Œä»¥åŠ `--message` æˆ– `--media`
  - å¯é€‰ï¼š`--media`ã€`--reply-to`ã€`--thread-id`ã€`--gif-playback`
  - ä»…é™ Telegramï¼š`--buttons`ï¼ˆéœ€è¦ `channels.telegram.capabilities.inlineButtons` ä»¥å¯ç”¨ï¼‰
  - ä»…é™ Telegramï¼š`--thread-id`ï¼ˆè®ºå›ä¸»é¢˜ IDï¼‰
  - ä»…é™ Slackï¼š`--thread-id`ï¼ˆçº¿ç¨‹æ—¶é—´æˆ³ï¼›`--reply-to` ä½¿ç”¨ç›¸åŒå­—æ®µï¼‰
  - ä»…é™ WhatsAppï¼š`--gif-playback`

- `poll`
  - æ¸ é“ï¼šWhatsApp/Discord/MS Teams
  - å¿…éœ€ï¼š`--target`ã€`--poll-question`ã€`--poll-option`ï¼ˆå¯é‡å¤ï¼‰
  - å¯é€‰ï¼š`--poll-multi`
  - ä»…é™ Discordï¼š`--poll-duration-hours`ã€`--message`

- `react`
  - æ¸ é“ï¼šDiscord/Google Chat/Slack/Telegram/WhatsApp/Signal
  - å¿…éœ€ï¼š`--message-id`ã€`--target`
  - å¯é€‰ï¼š`--emoji`ã€`--remove`ã€`--participant`ã€`--from-me`ã€`--target-author`ã€`--target-author-uuid`
  - æ³¨æ„ï¼š`--remove` éœ€è¦ `--emoji`ï¼ˆçœç•¥ `--emoji` å¯æ¸…é™¤è‡ªå·±çš„è¡¨æƒ…å›žåº”ï¼ˆå¦‚æžœæ”¯æŒï¼‰ï¼›å‚è§ /tools/reactionsï¼‰
  - ä»…é™ WhatsAppï¼š`--participant`ã€`--from-me`
  - Signal ç¾¤ç»„è¡¨æƒ…å›žåº”ï¼šéœ€è¦ `--target-author` æˆ– `--target-author-uuid`

- `reactions`
  - æ¸ é“ï¼šDiscord/Google Chat/Slack
  - å¿…éœ€ï¼š`--message-id`ã€`--target`
  - å¯é€‰ï¼š`--limit`

- `read`
  - æ¸ é“ï¼šDiscord/Slack
  - å¿…éœ€ï¼š`--target`
  - å¯é€‰ï¼š`--limit`ã€`--before`ã€`--after`
  - ä»…é™ Discordï¼š`--around`

- `edit`
  - æ¸ é“ï¼šDiscord/Slack
  - å¿…éœ€ï¼š`--message-id`ã€`--message`ã€`--target`

- `delete`
  - æ¸ é“ï¼šDiscord/Slack/Telegram
  - å¿…éœ€ï¼š`--message-id`ã€`--target`

- `pin` / `unpin`
  - æ¸ é“ï¼šDiscord/Slack
  - å¿…éœ€ï¼š`--message-id`ã€`--target`

- `pins`ï¼ˆåˆ—è¡¨ï¼‰
  - æ¸ é“ï¼šDiscord/Slack
  - å¿…éœ€ï¼š`--target`

- `permissions`
  - æ¸ é“ï¼šDiscord
  - å¿…éœ€ï¼š`--target`

- `search`
  - æ¸ é“ï¼šDiscord
  - å¿…éœ€ï¼š`--guild-id`ã€`--query`
  - å¯é€‰ï¼š`--channel-id`ã€`--channel-ids`ï¼ˆå¯é‡å¤ï¼‰ã€`--author-id`ã€`--author-ids`ï¼ˆå¯é‡å¤ï¼‰ã€`--limit`

### çº¿ç¨‹

- `thread create`
  - æ¸ é“ï¼šDiscord
  - å¿…éœ€ï¼š`--thread-name`ã€`--target`ï¼ˆé¢‘é“ IDï¼‰
  - å¯é€‰ï¼š`--message-id`ã€`--auto-archive-min`

- `thread list`
  - æ¸ é“ï¼šDiscord
  - å¿…éœ€ï¼š`--guild-id`
  - å¯é€‰ï¼š`--channel-id`ã€`--include-archived`ã€`--before`ã€`--limit`

- `thread reply`
  - æ¸ é“ï¼šDiscord
  - å¿…éœ€ï¼š`--target`ï¼ˆçº¿ç¨‹ IDï¼‰ã€`--message`
  - å¯é€‰ï¼š`--media`ã€`--reply-to`

### è¡¨æƒ…ç¬¦å·

- `emoji list`
  - Discordï¼š`--guild-id`
  - Slackï¼šæ— éœ€é¢å¤–æ ‡å¿—

- `emoji upload`
  - æ¸ é“ï¼šDiscord
  - å¿…éœ€ï¼š`--guild-id`ã€`--emoji-name`ã€`--media`
  - å¯é€‰ï¼š`--role-ids`ï¼ˆå¯é‡å¤ï¼‰

### è´´çº¸

- `sticker send`
  - æ¸ é“ï¼šDiscord
  - å¿…éœ€ï¼š`--target`ã€`--sticker-id`ï¼ˆå¯é‡å¤ï¼‰
  - å¯é€‰ï¼š`--message`

- `sticker upload`
  - æ¸ é“ï¼šDiscord
  - å¿…éœ€ï¼š`--guild-id`ã€`--sticker-name`ã€`--sticker-desc`ã€`--sticker-tags`ã€`--media`

### è§’è‰² / é¢‘é“ / æˆå‘˜ / è¯­éŸ³

- `role info`ï¼ˆDiscordï¼‰ï¼š`--guild-id`
- `role add` / `role remove`ï¼ˆDiscordï¼‰ï¼š`--guild-id`ã€`--user-id`ã€`--role-id`
- `channel info`ï¼ˆDiscordï¼‰ï¼š`--target`
- `channel list`ï¼ˆDiscordï¼‰ï¼š`--guild-id`
- `member info`ï¼ˆDiscord/Slackï¼‰ï¼š`--user-id`ï¼ˆDiscord è¿˜éœ€è¦ `--guild-id`ï¼‰
- `voice status`ï¼ˆDiscordï¼‰ï¼š`--guild-id`ã€`--user-id`

### äº‹ä»¶

- `event list`ï¼ˆDiscordï¼‰ï¼š`--guild-id`
- `event create`ï¼ˆDiscordï¼‰ï¼š`--guild-id`ã€`--event-name`ã€`--start-time`
  - å¯é€‰ï¼š`--end-time`ã€`--desc`ã€`--channel-id`ã€`--location`ã€`--event-type`

### ç®¡ç†ï¼ˆDiscordï¼‰

- `timeout`ï¼š`--guild-id`ã€`--user-id`ï¼ˆå¯é€‰ `--duration-min` æˆ– `--until`ï¼›ä¸¤è€…éƒ½çœç•¥åˆ™æ¸…é™¤è¶…æ—¶ï¼‰
- `kick`ï¼š`--guild-id`ã€`--user-id`ï¼ˆ+ `--reason`ï¼‰
- `ban`ï¼š`--guild-id`ã€`--user-id`ï¼ˆ+ `--delete-days`ã€`--reason`ï¼‰
  - `timeout` ä¹Ÿæ”¯æŒ `--reason`

### å¹¿æ’­

- `broadcast`
  - æ¸ é“ï¼šä»»ä½•å·²é…ç½®çš„æ¸ é“ï¼›ä½¿ç”¨ `--channel all` å¯é’ˆå¯¹æ‰€æœ‰æä¾›å•†
  - å¿…éœ€ï¼š`--targets`ï¼ˆå¯é‡å¤ï¼‰
  - å¯é€‰ï¼š`--message`ã€`--media`ã€`--dry-run`

## ç¤ºä¾‹

å‘é€ Discord å›žå¤ï¼š

```
 message send --channel discord \
  --target channel:123 --message "hi" --reply-to 456
```

åˆ›å»º Discord æŠ•ç¥¨ï¼š

```
 message poll --channel discord \
  --target channel:123 \
  --poll-question "Snack?" \
  --poll-option Pizza --poll-option Sushi \
  --poll-multi --poll-duration-hours 48
```

å‘é€ Teams ä¸»åŠ¨æ¶ˆæ¯ï¼š

```
 message send --channel msteams \
  --target conversation:19:abc@thread.tacv2 --message "hi"
```

åˆ›å»º Teams æŠ•ç¥¨ï¼š

```
 message poll --channel msteams \
  --target conversation:19:abc@thread.tacv2 \
  --poll-question "Lunch?" \
  --poll-option Pizza --poll-option Sushi
```

åœ¨ Slack ä¸­æ·»åŠ è¡¨æƒ…å›žåº”ï¼š

```
 message react --channel slack \
  --target C123 --message-id 456 --emoji "âœ…"
```

åœ¨ Signal ç¾¤ç»„ä¸­æ·»åŠ è¡¨æƒ…å›žåº”ï¼š

```
 message react --channel signal \
  --target signal:group:abc123 --message-id 1737630212345 \
  --emoji "âœ…" --target-author-uuid 123e4567-e89b-12d3-a456-426614174000
```

å‘é€ Telegram å†…è”æŒ‰é’®ï¼š

```
 message send --channel telegram --target @mychat --message "Choose:" \
  --buttons '[ [{"text":"Yes","callback_data":"cmd:yes"}], [{"text":"No","callback_data":"cmd:no"}] ]'
```


