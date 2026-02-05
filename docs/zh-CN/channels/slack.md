---
read_when: Setting up Slack or debugging Slack socket/HTTP mode
summary: Slack çš„ socket æˆ– HTTP webhook æ¨¡å¼è®¾ç½®
title: Slack
x-i18n:
  generated_at: "2026-02-03T07:45:49Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 703b4b4333bebfef26b64710ba452bdfc3e7d2115048d4e552e8659425b3609b
  source_path: channels/slack.md
  workflow: 15
---

# Slack

## Socket æ¨¡å¼ï¼ˆé»˜è®¤ï¼‰

### å¿«é€Ÿè®¾ç½®ï¼ˆæ–°æ‰‹ï¼‰

1. åˆ›å»ºä¸€ä¸ª Slack åº”ç”¨å¹¶å¯ç”¨ **Socket Mode**ã€‚
2. åˆ›å»ºä¸€ä¸ª **App Token**ï¼ˆ`xapp-...`ï¼‰å’Œ **Bot Token**ï¼ˆ`xoxb-...`ï¼‰ã€‚
3. ä¸º  è®¾ç½®ä»¤ç‰Œå¹¶å¯åŠ¨ Gateway ç½‘å…³ã€‚

æœ€å°é…ç½®ï¼š

```json5
{
  channels: {
    slack: {
      enabled: true,
      appToken: "xapp-...",
      botToken: "xoxb-...",
    },
  },
}
```

### è®¾ç½®

1. åœ¨ https://api.slack.com/apps åˆ›å»ºä¸€ä¸ª Slack åº”ç”¨ï¼ˆä»Žå¤´å¼€å§‹ï¼‰ã€‚
2. **Socket Mode** â†’ å¼€å¯ã€‚ç„¶åŽå‰å¾€ **Basic Information** â†’ **App-Level Tokens** â†’ **Generate Token and Scopes**ï¼Œæ·»åŠ  `connections:write` æƒé™èŒƒå›´ã€‚å¤åˆ¶ **App Token**ï¼ˆ`xapp-...`ï¼‰ã€‚
3. **OAuth & Permissions** â†’ æ·»åŠ  bot token æƒé™èŒƒå›´ï¼ˆä½¿ç”¨ä¸‹é¢çš„ manifestï¼‰ã€‚ç‚¹å‡» **Install to Workspace**ã€‚å¤åˆ¶ **Bot User OAuth Token**ï¼ˆ`xoxb-...`ï¼‰ã€‚
4. å¯é€‰ï¼š**OAuth & Permissions** â†’ æ·»åŠ  **User Token Scopes**ï¼ˆå‚è§ä¸‹é¢çš„åªè¯»åˆ—è¡¨ï¼‰ã€‚é‡æ–°å®‰è£…åº”ç”¨å¹¶å¤åˆ¶ **User OAuth Token**ï¼ˆ`xoxp-...`ï¼‰ã€‚
5. **Event Subscriptions** â†’ å¯ç”¨äº‹ä»¶å¹¶è®¢é˜…ï¼š
   - `message.*`ï¼ˆåŒ…æ‹¬ç¼–è¾‘/åˆ é™¤/çº¿ç¨‹å¹¿æ’­ï¼‰
   - `app_mention`
   - `reaction_added`ã€`reaction_removed`
   - `member_joined_channel`ã€`member_left_channel`
   - `channel_rename`
   - `pin_added`ã€`pin_removed`
6. é‚€è¯·æœºå™¨äººåŠ å…¥ä½ å¸Œæœ›å®ƒè¯»å–çš„é¢‘é“ã€‚
7. Slash Commands â†’ å¦‚æžœä½ ä½¿ç”¨ `channels.slack.slashCommand`ï¼Œåˆ›å»º `/`ã€‚å¦‚æžœå¯ç”¨åŽŸç”Ÿå‘½ä»¤ï¼Œä¸ºæ¯ä¸ªå†…ç½®å‘½ä»¤æ·»åŠ ä¸€ä¸ªæ–œæ å‘½ä»¤ï¼ˆåç§°ä¸Ž `/help` ç›¸åŒï¼‰ã€‚é™¤éžä½ è®¾ç½® `channels.slack.commands.native: true`ï¼Œå¦åˆ™ Slack é»˜è®¤å…³é—­åŽŸç”Ÿå‘½ä»¤ï¼ˆå…¨å±€ `commands.native` æ˜¯ `"auto"`ï¼Œå¯¹ Slack ä¿æŒå…³é—­ï¼‰ã€‚
8. App Home â†’ å¯ç”¨ **Messages Tab** ä»¥ä¾¿ç”¨æˆ·å¯ä»¥ç§ä¿¡æœºå™¨äººã€‚

ä½¿ç”¨ä¸‹é¢çš„ manifest ä»¥ä¿æŒæƒé™èŒƒå›´å’Œäº‹ä»¶åŒæ­¥ã€‚

å¤šè´¦æˆ·æ”¯æŒï¼šä½¿ç”¨ `channels.slack.accounts` é…ç½®æ¯ä¸ªè´¦æˆ·çš„ä»¤ç‰Œå’Œå¯é€‰çš„ `name`ã€‚å‚è§ [`gateway/configuration`](/gateway/configuration#telegramaccounts--discordaccounts--slackaccounts--signalaccounts--imessageaccounts) äº†è§£å…±äº«æ¨¡å¼ã€‚

###  é…ç½®ï¼ˆæœ€å°ï¼‰

é€šè¿‡çŽ¯å¢ƒå˜é‡è®¾ç½®ä»¤ç‰Œï¼ˆæŽ¨èï¼‰ï¼š

- `SLACK_APP_TOKEN=xapp-...`
- `SLACK_BOT_TOKEN=xoxb-...`

æˆ–é€šè¿‡é…ç½®ï¼š

```json5
{
  channels: {
    slack: {
      enabled: true,
      appToken: "xapp-...",
      botToken: "xoxb-...",
    },
  },
}
```

### ç”¨æˆ·ä»¤ç‰Œï¼ˆå¯é€‰ï¼‰

 å¯ä»¥ä½¿ç”¨ Slack ç”¨æˆ·ä»¤ç‰Œï¼ˆ`xoxp-...`ï¼‰è¿›è¡Œè¯»å–æ“ä½œï¼ˆåŽ†å²è®°å½•ã€ç½®é¡¶ã€è¡¨æƒ…å›žåº”ã€è¡¨æƒ…ç¬¦å·ã€æˆå‘˜ä¿¡æ¯ï¼‰ã€‚é»˜è®¤æƒ…å†µä¸‹ä¿æŒåªè¯»ï¼šå½“å­˜åœ¨ç”¨æˆ·ä»¤ç‰Œæ—¶ï¼Œè¯»å–ä¼˜å…ˆä½¿ç”¨ç”¨æˆ·ä»¤ç‰Œï¼Œè€Œå†™å…¥ä»ç„¶ä½¿ç”¨ bot ä»¤ç‰Œï¼Œé™¤éžä½ æ˜Žç¡®é€‰æ‹©åŠ å…¥ã€‚å³ä½¿è®¾ç½®äº† `userTokenReadOnly: false`ï¼Œå½“ bot ä»¤ç‰Œå¯ç”¨æ—¶ï¼Œå†™å…¥ä»ç„¶ä¼˜å…ˆä½¿ç”¨ bot ä»¤ç‰Œã€‚

ç”¨æˆ·ä»¤ç‰Œåœ¨é…ç½®æ–‡ä»¶ä¸­é…ç½®ï¼ˆä¸æ”¯æŒçŽ¯å¢ƒå˜é‡ï¼‰ã€‚å¯¹äºŽå¤šè´¦æˆ·ï¼Œè®¾ç½® `channels.slack.accounts.<id>.userToken`ã€‚

åŒ…å« bot + app + ç”¨æˆ·ä»¤ç‰Œçš„ç¤ºä¾‹ï¼š

```json5
{
  channels: {
    slack: {
      enabled: true,
      appToken: "xapp-...",
      botToken: "xoxb-...",
      userToken: "xoxp-...",
    },
  },
}
```

æ˜Žç¡®è®¾ç½® userTokenReadOnly çš„ç¤ºä¾‹ï¼ˆå…è®¸ç”¨æˆ·ä»¤ç‰Œå†™å…¥ï¼‰ï¼š

```json5
{
  channels: {
    slack: {
      enabled: true,
      appToken: "xapp-...",
      botToken: "xoxb-...",
      userToken: "xoxp-...",
      userTokenReadOnly: false,
    },
  },
}
```

#### ä»¤ç‰Œä½¿ç”¨

- è¯»å–æ“ä½œï¼ˆåŽ†å²è®°å½•ã€è¡¨æƒ…å›žåº”åˆ—è¡¨ã€ç½®é¡¶åˆ—è¡¨ã€è¡¨æƒ…ç¬¦å·åˆ—è¡¨ã€æˆå‘˜ä¿¡æ¯ã€æœç´¢ï¼‰åœ¨é…ç½®äº†ç”¨æˆ·ä»¤ç‰Œæ—¶ä¼˜å…ˆä½¿ç”¨ç”¨æˆ·ä»¤ç‰Œï¼Œå¦åˆ™ä½¿ç”¨ bot ä»¤ç‰Œã€‚
- å†™å…¥æ“ä½œï¼ˆå‘é€/ç¼–è¾‘/åˆ é™¤æ¶ˆæ¯ã€æ·»åŠ /ç§»é™¤è¡¨æƒ…å›žåº”ã€ç½®é¡¶/å–æ¶ˆç½®é¡¶ã€æ–‡ä»¶ä¸Šä¼ ï¼‰é»˜è®¤ä½¿ç”¨ bot ä»¤ç‰Œã€‚å¦‚æžœ `userTokenReadOnly: false` ä¸”æ²¡æœ‰å¯ç”¨çš„ bot ä»¤ç‰Œï¼Œ ä¼šå›žé€€åˆ°ç”¨æˆ·ä»¤ç‰Œã€‚

### åŽ†å²ä¸Šä¸‹æ–‡

- `channels.slack.historyLimit`ï¼ˆæˆ– `channels.slack.accounts.*.historyLimit`ï¼‰æŽ§åˆ¶å°†å¤šå°‘æ¡æœ€è¿‘çš„é¢‘é“/ç¾¤ç»„æ¶ˆæ¯åŒ…å«åˆ°æç¤ºä¸­ã€‚
- å›žé€€åˆ° `messages.groupChat.historyLimit`ã€‚è®¾ç½®ä¸º `0` ä»¥ç¦ç”¨ï¼ˆé»˜è®¤ 50ï¼‰ã€‚

## HTTP æ¨¡å¼ï¼ˆEvents APIï¼‰

å½“ä½ çš„ Gateway ç½‘å…³å¯ä»¥é€šè¿‡ HTTPS è¢« Slack è®¿é—®æ—¶ï¼ˆæœåŠ¡å™¨éƒ¨ç½²çš„å…¸åž‹æƒ…å†µï¼‰ï¼Œä½¿ç”¨ HTTP webhook æ¨¡å¼ã€‚
HTTP æ¨¡å¼ä½¿ç”¨ Events API + Interactivity + Slash Commandsï¼Œå…±äº«ä¸€ä¸ªè¯·æ±‚ URLã€‚

### è®¾ç½®

1. åˆ›å»ºä¸€ä¸ª Slack åº”ç”¨å¹¶**ç¦ç”¨ Socket Mode**ï¼ˆå¦‚æžœä½ åªä½¿ç”¨ HTTP åˆ™å¯é€‰ï¼‰ã€‚
2. **Basic Information** â†’ å¤åˆ¶ **Signing Secret**ã€‚
3. **OAuth & Permissions** â†’ å®‰è£…åº”ç”¨å¹¶å¤åˆ¶ **Bot User OAuth Token**ï¼ˆ`xoxb-...`ï¼‰ã€‚
4. **Event Subscriptions** â†’ å¯ç”¨äº‹ä»¶å¹¶å°† **Request URL** è®¾ç½®ä¸ºä½ çš„ Gateway ç½‘å…³ webhook è·¯å¾„ï¼ˆé»˜è®¤ `/slack/events`ï¼‰ã€‚
5. **Interactivity & Shortcuts** â†’ å¯ç”¨å¹¶è®¾ç½®ç›¸åŒçš„ **Request URL**ã€‚
6. **Slash Commands** â†’ ä¸ºä½ çš„å‘½ä»¤è®¾ç½®ç›¸åŒçš„ **Request URL**ã€‚

ç¤ºä¾‹è¯·æ±‚ URLï¼š
`https://gateway-host/slack/events`

###  é…ç½®ï¼ˆæœ€å°ï¼‰

```json5
{
  channels: {
    slack: {
      enabled: true,
      mode: "http",
      botToken: "xoxb-...",
      signingSecret: "your-signing-secret",
      webhookPath: "/slack/events",
    },
  },
}
```

å¤šè´¦æˆ· HTTP æ¨¡å¼ï¼šè®¾ç½® `channels.slack.accounts.<id>.mode = "http"` å¹¶ä¸ºæ¯ä¸ªè´¦æˆ·æä¾›å”¯ä¸€çš„ `webhookPath`ï¼Œä»¥ä¾¿æ¯ä¸ª Slack åº”ç”¨å¯ä»¥æŒ‡å‘è‡ªå·±çš„ URLã€‚

### Manifestï¼ˆå¯é€‰ï¼‰

ä½¿ç”¨æ­¤ Slack åº”ç”¨ manifest å¿«é€Ÿåˆ›å»ºåº”ç”¨ï¼ˆå¦‚æžœéœ€è¦å¯ä»¥è°ƒæ•´åç§°/å‘½ä»¤ï¼‰ã€‚å¦‚æžœä½ è®¡åˆ’é…ç½®ç”¨æˆ·ä»¤ç‰Œï¼Œè¯·åŒ…å«ç”¨æˆ·æƒé™èŒƒå›´ã€‚

```json
{
  "display_information": {
    "name": "",
    "description": "Slack connector for "
  },
  "features": {
    "bot_user": {
      "display_name": "",
      "always_online": false
    },
    "app_home": {
      "messages_tab_enabled": true,
      "messages_tab_read_only_enabled": false
    },
    "slash_commands": [
      {
        "command": "/",
        "description": "Send a message to ",
        "should_escape": false
      }
    ]
  },
  "oauth_config": {
    "scopes": {
      "bot": [
        "chat:write",
        "channels:history",
        "channels:read",
        "groups:history",
        "groups:read",
        "groups:write",
        "im:history",
        "im:read",
        "im:write",
        "mpim:history",
        "mpim:read",
        "mpim:write",
        "users:read",
        "app_mentions:read",
        "reactions:read",
        "reactions:write",
        "pins:read",
        "pins:write",
        "emoji:read",
        "commands",
        "files:read",
        "files:write"
      ],
      "user": [
        "channels:history",
        "channels:read",
        "groups:history",
        "groups:read",
        "im:history",
        "im:read",
        "mpim:history",
        "mpim:read",
        "users:read",
        "reactions:read",
        "pins:read",
        "emoji:read",
        "search:read"
      ]
    }
  },
  "settings": {
    "socket_mode_enabled": true,
    "event_subscriptions": {
      "bot_events": [
        "app_mention",
        "message.channels",
        "message.groups",
        "message.im",
        "message.mpim",
        "reaction_added",
        "reaction_removed",
        "member_joined_channel",
        "member_left_channel",
        "channel_rename",
        "pin_added",
        "pin_removed"
      ]
    }
  }
}
```

å¦‚æžœå¯ç”¨åŽŸç”Ÿå‘½ä»¤ï¼Œä¸ºæ¯ä¸ªè¦å…¬å¼€çš„å‘½ä»¤æ·»åŠ ä¸€ä¸ª `slash_commands` æ¡ç›®ï¼ˆä¸Ž `/help` åˆ—è¡¨åŒ¹é…ï¼‰ã€‚ä½¿ç”¨ `channels.slack.commands.native` è¦†ç›–ã€‚

## æƒé™èŒƒå›´ï¼ˆå½“å‰ vs å¯é€‰ï¼‰

Slack çš„ Conversations API æ˜¯æŒ‰ç±»åž‹åŒºåˆ†çš„ï¼šä½ åªéœ€è¦ä½ å®žé™…æŽ¥è§¦çš„ä¼šè¯ç±»åž‹ï¼ˆchannelsã€groupsã€imã€mpimï¼‰çš„æƒé™èŒƒå›´ã€‚æ¦‚è¿°å‚è§ https://docs.slack.dev/apis/web-api/using-the-conversations-api/ã€‚

### Bot ä»¤ç‰Œæƒé™èŒƒå›´ï¼ˆå¿…éœ€ï¼‰

- `chat:write`ï¼ˆé€šè¿‡ `chat.postMessage` å‘é€/æ›´æ–°/åˆ é™¤æ¶ˆæ¯ï¼‰
  https://docs.slack.dev/reference/methods/chat.postMessage
- `im:write`ï¼ˆé€šè¿‡ `conversations.open` æ‰“å¼€ç§ä¿¡ç”¨äºŽç”¨æˆ·ç§ä¿¡ï¼‰
  https://docs.slack.dev/reference/methods/conversations.open
- `channels:history`ã€`groups:history`ã€`im:history`ã€`mpim:history`
  https://docs.slack.dev/reference/methods/conversations.history
- `channels:read`ã€`groups:read`ã€`im:read`ã€`mpim:read`
  https://docs.slack.dev/reference/methods/conversations.info
- `users:read`ï¼ˆç”¨æˆ·æŸ¥è¯¢ï¼‰
  https://docs.slack.dev/reference/methods/users.info
- `reactions:read`ã€`reactions:write`ï¼ˆ`reactions.get` / `reactions.add`ï¼‰
  https://docs.slack.dev/reference/methods/reactions.get
  https://docs.slack.dev/reference/methods/reactions.add
- `pins:read`ã€`pins:write`ï¼ˆ`pins.list` / `pins.add` / `pins.remove`ï¼‰
  https://docs.slack.dev/reference/scopes/pins.read
  https://docs.slack.dev/reference/scopes/pins.write
- `emoji:read`ï¼ˆ`emoji.list`ï¼‰
  https://docs.slack.dev/reference/scopes/emoji.read
- `files:write`ï¼ˆé€šè¿‡ `files.uploadV2` ä¸Šä¼ ï¼‰
  https://docs.slack.dev/messaging/working-with-files/#upload

### ç”¨æˆ·ä»¤ç‰Œæƒé™èŒƒå›´ï¼ˆå¯é€‰ï¼Œé»˜è®¤åªè¯»ï¼‰

å¦‚æžœä½ é…ç½®äº† `channels.slack.userToken`ï¼Œåœ¨ **User Token Scopes** ä¸‹æ·»åŠ è¿™äº›ã€‚

- `channels:history`ã€`groups:history`ã€`im:history`ã€`mpim:history`
- `channels:read`ã€`groups:read`ã€`im:read`ã€`mpim:read`
- `users:read`
- `reactions:read`
- `pins:read`
- `emoji:read`
- `search:read`

### ç›®å‰ä¸éœ€è¦ï¼ˆä½†æœªæ¥å¯èƒ½éœ€è¦ï¼‰

- `mpim:write`ï¼ˆä»…å½“æˆ‘ä»¬æ·»åŠ ç¾¤ç»„ç§ä¿¡æ‰“å¼€/ç§ä¿¡å¯åŠ¨æ—¶é€šè¿‡ `conversations.open`ï¼‰
- `groups:write`ï¼ˆä»…å½“æˆ‘ä»¬æ·»åŠ ç§æœ‰é¢‘é“ç®¡ç†æ—¶ï¼šåˆ›å»º/é‡å‘½å/é‚€è¯·/å½’æ¡£ï¼‰
- `chat:write.public`ï¼ˆä»…å½“æˆ‘ä»¬æƒ³å‘å¸ƒåˆ°æœºå™¨äººæœªåŠ å…¥çš„é¢‘é“æ—¶ï¼‰
  https://docs.slack.dev/reference/scopes/chat.write.public
- `users:read.email`ï¼ˆä»…å½“æˆ‘ä»¬éœ€è¦ä»Ž `users.info` èŽ·å–é‚®ç®±å­—æ®µæ—¶ï¼‰
  https://docs.slack.dev/changelog/2017-04-narrowing-email-access
- `files:read`ï¼ˆä»…å½“æˆ‘ä»¬å¼€å§‹åˆ—å‡º/è¯»å–æ–‡ä»¶å…ƒæ•°æ®æ—¶ï¼‰

## é…ç½®

Slack ä»…ä½¿ç”¨ Socket Modeï¼ˆæ—  HTTP webhook æœåŠ¡å™¨ï¼‰ã€‚æä¾›ä¸¤ä¸ªä»¤ç‰Œï¼š

```json
{
  "slack": {
    "enabled": true,
    "botToken": "xoxb-...",
    "appToken": "xapp-...",
    "groupPolicy": "allowlist",
    "dm": {
      "enabled": true,
      "policy": "pairing",
      "allowFrom": ["U123", "U456", "*"],
      "groupEnabled": false,
      "groupChannels": ["G123"],
      "replyToMode": "all"
    },
    "channels": {
      "C123": { "allow": true, "requireMention": true },
      "#general": {
        "allow": true,
        "requireMention": true,
        "users": ["U123"],
        "skills": ["search", "docs"],
        "systemPrompt": "Keep answers short."
      }
    },
    "reactionNotifications": "own",
    "reactionAllowlist": ["U123"],
    "replyToMode": "off",
    "actions": {
      "reactions": true,
      "messages": true,
      "pins": true,
      "memberInfo": true,
      "emojiList": true
    },
    "slashCommand": {
      "enabled": true,
      "name": "",
      "sessionPrefix": "slack:slash",
      "ephemeral": true
    },
    "textChunkLimit": 4000,
    "mediaMaxMb": 20
  }
}
```

ä»¤ç‰Œä¹Ÿå¯ä»¥é€šè¿‡çŽ¯å¢ƒå˜é‡æä¾›ï¼š

- `SLACK_BOT_TOKEN`
- `SLACK_APP_TOKEN`

ç¡®è®¤è¡¨æƒ…å›žåº”é€šè¿‡ `messages.ackReaction` + `messages.ackReactionScope` å…¨å±€æŽ§åˆ¶ã€‚ä½¿ç”¨ `messages.removeAckAfterReply` åœ¨æœºå™¨äººå›žå¤åŽæ¸…é™¤ç¡®è®¤è¡¨æƒ…å›žåº”ã€‚

## é™åˆ¶

- å‡ºç«™æ–‡æœ¬æŒ‰ `channels.slack.textChunkLimit` åˆ†å—ï¼ˆé»˜è®¤ 4000ï¼‰ã€‚
- å¯é€‰çš„æ¢è¡Œåˆ†å—ï¼šè®¾ç½® `channels.slack.chunkMode="newline"` ä»¥åœ¨é•¿åº¦åˆ†å—ä¹‹å‰æŒ‰ç©ºè¡Œï¼ˆæ®µè½è¾¹ç•Œï¼‰åˆ†å‰²ã€‚
- åª’ä½“ä¸Šä¼ å— `channels.slack.mediaMaxMb` é™åˆ¶ï¼ˆé»˜è®¤ 20ï¼‰ã€‚

## å›žå¤çº¿ç¨‹

é»˜è®¤æƒ…å†µä¸‹ï¼Œ åœ¨ä¸»é¢‘é“å›žå¤ã€‚ä½¿ç”¨ `channels.slack.replyToMode` æŽ§åˆ¶è‡ªåŠ¨çº¿ç¨‹ï¼š

| æ¨¡å¼    | è¡Œä¸º                                                                                         |
| ------- | -------------------------------------------------------------------------------------------- |
| `off`   | **é»˜è®¤ã€‚** åœ¨ä¸»é¢‘é“å›žå¤ã€‚ä»…å½“è§¦å‘æ¶ˆæ¯å·²åœ¨çº¿ç¨‹ä¸­æ—¶æ‰ä½¿ç”¨çº¿ç¨‹ã€‚                                |
| `first` | ç¬¬ä¸€æ¡å›žå¤è¿›å…¥çº¿ç¨‹ï¼ˆåœ¨è§¦å‘æ¶ˆæ¯ä¸‹ï¼‰ï¼ŒåŽç»­å›žå¤è¿›å…¥ä¸»é¢‘é“ã€‚é€‚åˆä¿æŒä¸Šä¸‹æ–‡å¯è§åŒæ—¶é¿å…çº¿ç¨‹æ··ä¹±ã€‚ |
| `all`   | æ‰€æœ‰å›žå¤éƒ½è¿›å…¥çº¿ç¨‹ã€‚ä¿æŒå¯¹è¯é›†ä¸­ä½†å¯èƒ½é™ä½Žå¯è§æ€§ã€‚                                           |

è¯¥æ¨¡å¼é€‚ç”¨äºŽè‡ªåŠ¨å›žå¤å’Œæ™ºèƒ½ä½“å·¥å…·è°ƒç”¨ï¼ˆ`slack sendMessage`ï¼‰ã€‚

### æŒ‰èŠå¤©ç±»åž‹çš„çº¿ç¨‹

ä½ å¯ä»¥é€šè¿‡è®¾ç½® `channels.slack.replyToModeByChatType` ä¸ºæ¯ç§èŠå¤©ç±»åž‹é…ç½®ä¸åŒçš„çº¿ç¨‹è¡Œä¸ºï¼š

```json5
{
  channels: {
    slack: {
      replyToMode: "off", // é¢‘é“çš„é»˜è®¤å€¼
      replyToModeByChatType: {
        direct: "all", // ç§ä¿¡å§‹ç»ˆä½¿ç”¨çº¿ç¨‹
        group: "first", // ç¾¤ç»„ç§ä¿¡/MPIM ç¬¬ä¸€æ¡å›žå¤ä½¿ç”¨çº¿ç¨‹
      },
    },
  },
}
```

æ”¯æŒçš„èŠå¤©ç±»åž‹ï¼š

- `direct`ï¼šä¸€å¯¹ä¸€ç§ä¿¡ï¼ˆSlack `im`ï¼‰
- `group`ï¼šç¾¤ç»„ç§ä¿¡ / MPIMï¼ˆSlack `mpim`ï¼‰
- `channel`ï¼šæ ‡å‡†é¢‘é“ï¼ˆå…¬å¼€/ç§æœ‰ï¼‰

ä¼˜å…ˆçº§ï¼š

1. `replyToModeByChatType.<chatType>`
2. `replyToMode`
3. æä¾›å•†é»˜è®¤å€¼ï¼ˆ`off`ï¼‰

å½“æœªè®¾ç½®èŠå¤©ç±»åž‹è¦†ç›–æ—¶ï¼Œæ—§ç‰ˆ `channels.slack.dm.replyToMode` ä»å¯ä½œä¸º `direct` çš„å›žé€€ã€‚

ç¤ºä¾‹ï¼š

ä»…å¯¹ç§ä¿¡ä½¿ç”¨çº¿ç¨‹ï¼š

```json5
{
  channels: {
    slack: {
      replyToMode: "off",
      replyToModeByChatType: { direct: "all" },
    },
  },
}
```

å¯¹ç¾¤ç»„ç§ä¿¡ä½¿ç”¨çº¿ç¨‹ä½†ä¿æŒé¢‘é“åœ¨æ ¹çº§åˆ«ï¼š

```json5
{
  channels: {
    slack: {
      replyToMode: "off",
      replyToModeByChatType: { group: "first" },
    },
  },
}
```

è®©é¢‘é“ä½¿ç”¨çº¿ç¨‹ï¼Œä¿æŒç§ä¿¡åœ¨æ ¹çº§åˆ«ï¼š

```json5
{
  channels: {
    slack: {
      replyToMode: "first",
      replyToModeByChatType: { direct: "off", group: "off" },
    },
  },
}
```

### æ‰‹åŠ¨çº¿ç¨‹æ ‡ç­¾

å¯¹äºŽç»†ç²’åº¦æŽ§åˆ¶ï¼Œåœ¨æ™ºèƒ½ä½“å“åº”ä¸­ä½¿ç”¨è¿™äº›æ ‡ç­¾ï¼š

- `[[reply_to_current]]` â€” å›žå¤è§¦å‘æ¶ˆæ¯ï¼ˆå¼€å§‹/ç»§ç»­çº¿ç¨‹ï¼‰ã€‚
- `[[reply_to:<id>]]` â€” å›žå¤ç‰¹å®šçš„æ¶ˆæ¯ idã€‚

## ä¼šè¯ + è·¯ç”±

- ç§ä¿¡å…±äº« `main` ä¼šè¯ï¼ˆä¸Ž WhatsApp/Telegram ç›¸åŒï¼‰ã€‚
- é¢‘é“æ˜ å°„åˆ° `agent:<agentId>:slack:channel:<channelId>` ä¼šè¯ã€‚
- æ–œæ å‘½ä»¤ä½¿ç”¨ `agent:<agentId>:slack:slash:<userId>` ä¼šè¯ï¼ˆå‰ç¼€å¯é€šè¿‡ `channels.slack.slashCommand.sessionPrefix` é…ç½®ï¼‰ã€‚
- å¦‚æžœ Slack æœªæä¾› `channel_type`ï¼Œ ä¼šä»Žé¢‘é“ ID å‰ç¼€ï¼ˆ`D`ã€`C`ã€`G`ï¼‰æŽ¨æ–­å¹¶é»˜è®¤ä¸º `channel` ä»¥ä¿æŒä¼šè¯é”®ç¨³å®šã€‚
- åŽŸç”Ÿå‘½ä»¤æ³¨å†Œä½¿ç”¨ `commands.native`ï¼ˆå…¨å±€é»˜è®¤ `"auto"` â†’ Slack å…³é—­ï¼‰ï¼Œå¯ä»¥ä½¿ç”¨ `channels.slack.commands.native` æŒ‰å·¥ä½œç©ºé—´è¦†ç›–ã€‚æ–‡æœ¬å‘½ä»¤éœ€è¦ç‹¬ç«‹çš„ `/...` æ¶ˆæ¯ï¼Œå¯ä»¥ä½¿ç”¨ `commands.text: false` ç¦ç”¨ã€‚Slack æ–œæ å‘½ä»¤åœ¨ Slack åº”ç”¨ä¸­ç®¡ç†ï¼Œä¸ä¼šè‡ªåŠ¨ç§»é™¤ã€‚ä½¿ç”¨ `commands.useAccessGroups: false` ç»•è¿‡å‘½ä»¤çš„è®¿é—®ç»„æ£€æŸ¥ã€‚
- å®Œæ•´å‘½ä»¤åˆ—è¡¨ + é…ç½®ï¼š[æ–œæ å‘½ä»¤](/tools/slash-commands)

## ç§ä¿¡å®‰å…¨ï¼ˆé…å¯¹ï¼‰

- é»˜è®¤ï¼š`channels.slack.dm.policy="pairing"` â€” æœªçŸ¥çš„ç§ä¿¡å‘é€è€…ä¼šæ”¶åˆ°é…å¯¹ç ï¼ˆ1 å°æ—¶åŽè¿‡æœŸï¼‰ã€‚
- é€šè¿‡ä»¥ä¸‹æ–¹å¼æ‰¹å‡†ï¼š` pairing approve slack <code>`ã€‚
- è¦å…è®¸ä»»ä½•äººï¼šè®¾ç½® `channels.slack.dm.policy="open"` å’Œ `channels.slack.dm.allowFrom=["*"]`ã€‚
- `channels.slack.dm.allowFrom` æŽ¥å—ç”¨æˆ· IDã€@ç”¨æˆ·åæˆ–é‚®ç®±ï¼ˆåœ¨ä»¤ç‰Œå…è®¸æ—¶å¯åŠ¨æ—¶è§£æžï¼‰ã€‚å‘å¯¼åœ¨è®¾ç½®æœŸé—´æŽ¥å—ç”¨æˆ·åï¼Œå¹¶åœ¨ä»¤ç‰Œå…è®¸æ—¶å°†å…¶è§£æžä¸º IDã€‚

## ç¾¤ç»„ç­–ç•¥

- `channels.slack.groupPolicy` æŽ§åˆ¶é¢‘é“å¤„ç†ï¼ˆ`open|disabled|allowlist`ï¼‰ã€‚
- `allowlist` è¦æ±‚é¢‘é“åˆ—åœ¨ `channels.slack.channels` ä¸­ã€‚
- å¦‚æžœä½ åªè®¾ç½®äº† `SLACK_BOT_TOKEN`/`SLACK_APP_TOKEN` è€Œä»Žæœªåˆ›å»º `channels.slack` éƒ¨åˆ†ï¼Œè¿è¡Œæ—¶é»˜è®¤å°† `groupPolicy` è®¾ä¸º `open`ã€‚æ·»åŠ  `channels.slack.groupPolicy`ã€`channels.defaults.groupPolicy` æˆ–é¢‘é“ç™½åå•æ¥é”å®šå®ƒã€‚
- é…ç½®å‘å¯¼æŽ¥å— `#channel` åç§°ï¼Œå¹¶åœ¨å¯èƒ½æ—¶ï¼ˆå…¬å¼€ + ç§æœ‰ï¼‰å°†å…¶è§£æžä¸º IDï¼›å¦‚æžœå­˜åœ¨å¤šä¸ªåŒ¹é…ï¼Œå®ƒä¼˜å…ˆé€‰æ‹©æ´»è·ƒçš„é¢‘é“ã€‚
- å¯åŠ¨æ—¶ï¼Œ å°†ç™½åå•ä¸­çš„é¢‘é“/ç”¨æˆ·åè§£æžä¸º IDï¼ˆåœ¨ä»¤ç‰Œå…è®¸æ—¶ï¼‰å¹¶è®°å½•æ˜ å°„ï¼›æœªè§£æžçš„æ¡ç›®æŒ‰åŽŸæ ·ä¿ç•™ã€‚
- è¦**ä¸å…è®¸ä»»ä½•é¢‘é“**ï¼Œè®¾ç½® `channels.slack.groupPolicy: "disabled"`ï¼ˆæˆ–ä¿ç•™ç©ºç™½åå•ï¼‰ã€‚

é¢‘é“é€‰é¡¹ï¼ˆ`channels.slack.channels.<id>` æˆ– `channels.slack.channels.<name>`ï¼‰ï¼š

- `allow`ï¼šå½“ `groupPolicy="allowlist"` æ—¶å…è®¸/æ‹’ç»é¢‘é“ã€‚
- `requireMention`ï¼šé¢‘é“çš„æåŠé—¨æŽ§ã€‚
- `tools`ï¼šå¯é€‰çš„æ¯é¢‘é“å·¥å…·ç­–ç•¥è¦†ç›–ï¼ˆ`allow`/`deny`/`alsoAllow`ï¼‰ã€‚
- `toolsBySender`ï¼šé¢‘é“å†…å¯é€‰çš„æ¯å‘é€è€…å·¥å…·ç­–ç•¥è¦†ç›–ï¼ˆé”®ä¸ºå‘é€è€… id/@ç”¨æˆ·å/é‚®ç®±ï¼›æ”¯æŒ `"*"` é€šé…ç¬¦ï¼‰ã€‚
- `allowBots`ï¼šå…è®¸æ­¤é¢‘é“ä¸­æœºå™¨äººå‘é€çš„æ¶ˆæ¯ï¼ˆé»˜è®¤ï¼šfalseï¼‰ã€‚
- `users`ï¼šå¯é€‰çš„æ¯é¢‘é“ç”¨æˆ·ç™½åå•ã€‚
- `skills`ï¼šSkills è¿‡æ»¤å™¨ï¼ˆçœç•¥ = æ‰€æœ‰ Skillsï¼Œç©º = æ— ï¼‰ã€‚
- `systemPrompt`ï¼šé¢‘é“çš„é¢å¤–ç³»ç»Ÿæç¤ºï¼ˆä¸Žä¸»é¢˜/ç›®çš„ç»„åˆï¼‰ã€‚
- `enabled`ï¼šè®¾ç½®ä¸º `false` ä»¥ç¦ç”¨é¢‘é“ã€‚

## æŠ•é€’ç›®æ ‡

ä¸Ž cron/CLI å‘é€ä¸€èµ·ä½¿ç”¨ï¼š

- `user:<id>` ç”¨äºŽç§ä¿¡
- `channel:<id>` ç”¨äºŽé¢‘é“

## å·¥å…·æ“ä½œ

Slack å·¥å…·æ“ä½œå¯ä»¥é€šè¿‡ `channels.slack.actions.*` è¿›è¡Œé—¨æŽ§ï¼š

| æ“ä½œç»„     | é»˜è®¤   | è¯´æ˜Ž                    |
| ---------- | ------ | ----------------------- |
| reactions  | å·²å¯ç”¨ | è¡¨æƒ…å›žåº” + åˆ—å‡ºè¡¨æƒ…å›žåº” |
| messages   | å·²å¯ç”¨ | è¯»å–/å‘é€/ç¼–è¾‘/åˆ é™¤     |
| pins       | å·²å¯ç”¨ | ç½®é¡¶/å–æ¶ˆç½®é¡¶/åˆ—è¡¨      |
| memberInfo | å·²å¯ç”¨ | æˆå‘˜ä¿¡æ¯                |
| emojiList  | å·²å¯ç”¨ | è‡ªå®šä¹‰è¡¨æƒ…ç¬¦å·åˆ—è¡¨      |

## å®‰å…¨è¯´æ˜Ž

- å†™å…¥é»˜è®¤ä½¿ç”¨ bot ä»¤ç‰Œï¼Œå› æ­¤çŠ¶æ€æ›´æ”¹æ“ä½œä¿æŒåœ¨åº”ç”¨çš„æœºå™¨äººæƒé™å’Œèº«ä»½èŒƒå›´å†…ã€‚
- è®¾ç½® `userTokenReadOnly: false` å…è®¸åœ¨ bot ä»¤ç‰Œä¸å¯ç”¨æ—¶ä½¿ç”¨ç”¨æˆ·ä»¤ç‰Œè¿›è¡Œå†™å…¥æ“ä½œï¼Œè¿™æ„å‘³ç€æ“ä½œä»¥å®‰è£…ç”¨æˆ·çš„è®¿é—®æƒé™è¿è¡Œã€‚å°†ç”¨æˆ·ä»¤ç‰Œè§†ä¸ºé«˜æƒé™ï¼Œå¹¶ä¿æŒæ“ä½œé—¨æŽ§å’Œç™½åå•ä¸¥æ ¼ã€‚
- å¦‚æžœä½ å¯ç”¨ç”¨æˆ·ä»¤ç‰Œå†™å…¥ï¼Œè¯·ç¡®ä¿ç”¨æˆ·ä»¤ç‰ŒåŒ…å«ä½ æœŸæœ›çš„å†™å…¥æƒé™èŒƒå›´ï¼ˆ`chat:write`ã€`reactions:write`ã€`pins:write`ã€`files:write`ï¼‰ï¼Œå¦åˆ™è¿™äº›æ“ä½œå°†å¤±è´¥ã€‚

## è¯´æ˜Ž

- æåŠé—¨æŽ§é€šè¿‡ `channels.slack.channels` æŽ§åˆ¶ï¼ˆå°† `requireMention` è®¾ç½®ä¸º `true`ï¼‰ï¼›`agents.list[].groupChat.mentionPatterns`ï¼ˆæˆ– `messages.groupChat.mentionPatterns`ï¼‰ä¹Ÿç®—ä½œæåŠã€‚
- å¤šæ™ºèƒ½ä½“è¦†ç›–ï¼šåœ¨ `agents.list[].groupChat.mentionPatterns` ä¸Šè®¾ç½®æ¯æ™ºèƒ½ä½“çš„æ¨¡å¼ã€‚
- è¡¨æƒ…å›žåº”é€šçŸ¥éµå¾ª `channels.slack.reactionNotifications`ï¼ˆåœ¨ `allowlist` æ¨¡å¼ä¸‹ä½¿ç”¨ `reactionAllowlist`ï¼‰ã€‚
- é»˜è®¤å¿½ç•¥æœºå™¨äººå‘é€çš„æ¶ˆæ¯ï¼›é€šè¿‡ `channels.slack.allowBots` æˆ– `channels.slack.channels.<id>.allowBots` å¯ç”¨ã€‚
- è­¦å‘Šï¼šå¦‚æžœä½ å…è®¸å›žå¤å…¶ä»–æœºå™¨äººï¼ˆ`channels.slack.allowBots=true` æˆ– `channels.slack.channels.<id>.allowBots=true`ï¼‰ï¼Œè¯·ä½¿ç”¨ `requireMention`ã€`channels.slack.channels.<id>.users` ç™½åå•å’Œ/æˆ–åœ¨ `AGENTS.md` å’Œ `SOUL.md` ä¸­è®¾ç½®æ˜Žç¡®çš„é˜²æŠ¤æŽªæ–½æ¥é˜²æ­¢æœºå™¨äººä¹‹é—´çš„å›žå¤å¾ªçŽ¯ã€‚
- å¯¹äºŽ Slack å·¥å…·ï¼Œè¡¨æƒ…å›žåº”ç§»é™¤è¯­ä¹‰è§ [/tools/reactions](/tools/reactions)ã€‚
- é™„ä»¶åœ¨å…è®¸ä¸”åœ¨å¤§å°é™åˆ¶å†…æ—¶ä¼šä¸‹è½½åˆ°åª’ä½“å­˜å‚¨ã€‚

