---
read_when:
  - æ›´æ”¹ç¾¤èŠè¡Œä¸ºæˆ–æåŠé™åˆ¶
summary: è·¨å¹³å°çš„ç¾¤èŠè¡Œä¸ºï¼ˆWhatsApp/Telegram/Discord/Slack/Signal/iMessage/Microsoft Teamsï¼‰
title: ç¾¤ç»„
x-i18n:
  generated_at: "2026-02-03T07:47:08Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: b727a053edf51f6e7b5c0c324c2fc9c9789a9796c37f622418bd555e8b5a0ec4
  source_path: concepts/groups.md
  workflow: 15
---

# ç¾¤ç»„

 åœ¨å„å¹³å°ä¸Šç»Ÿä¸€å¤„ç†ç¾¤èŠï¼šWhatsAppã€Telegramã€Discordã€Slackã€Signalã€iMessageã€Microsoft Teamsã€‚

## æ–°æ‰‹å…¥é—¨ï¼ˆ2 åˆ†é’Ÿï¼‰

"è¿è¡Œ"åœ¨ä½ è‡ªå·±çš„æ¶ˆæ¯è´¦æˆ·ä¸Šã€‚æ²¡æœ‰å•ç‹¬çš„ WhatsApp æœºå™¨äººç”¨æˆ·ã€‚å¦‚æžœ**ä½ **åœ¨ä¸€ä¸ªç¾¤ç»„ä¸­ï¼Œ å°±å¯ä»¥çœ‹åˆ°è¯¥ç¾¤ç»„å¹¶åœ¨å…¶ä¸­å›žå¤ã€‚

é»˜è®¤è¡Œä¸ºï¼š

- ç¾¤ç»„å—é™ï¼ˆ`groupPolicy: "allowlist"`ï¼‰ã€‚
- é™¤éžä½ æ˜Žç¡®ç¦ç”¨æåŠé™åˆ¶ï¼Œå¦åˆ™å›žå¤éœ€è¦ @ æåŠã€‚

è§£é‡Šï¼šå…è®¸åˆ—è¡¨ä¸­çš„å‘é€è€…å¯ä»¥é€šè¿‡æåŠæ¥è§¦å‘ ã€‚

> ç®€è€Œè¨€ä¹‹
>
> - **ç§ä¿¡è®¿é—®**ç”± `*.allowFrom` æŽ§åˆ¶ã€‚
> - **ç¾¤ç»„è®¿é—®**ç”± `*.groupPolicy` + å…è®¸åˆ—è¡¨ï¼ˆ`*.groups`ã€`*.groupAllowFrom`ï¼‰æŽ§åˆ¶ã€‚
> - **å›žå¤è§¦å‘**ç”±æåŠé™åˆ¶ï¼ˆ`requireMention`ã€`/activation`ï¼‰æŽ§åˆ¶ã€‚

å¿«é€Ÿæµç¨‹ï¼ˆç¾¤æ¶ˆæ¯ä¼šå‘ç”Ÿä»€ä¹ˆï¼‰ï¼š

```
groupPolicy? disabled -> ä¸¢å¼ƒ
groupPolicy? allowlist -> ç¾¤ç»„å…è®¸? å¦ -> ä¸¢å¼ƒ
requireMention? æ˜¯ -> è¢«æåŠ? å¦ -> ä»…å­˜å‚¨ä¸ºä¸Šä¸‹æ–‡
å¦åˆ™ -> å›žå¤
```

![ç¾¤æ¶ˆæ¯æµç¨‹](/images/groups-flow.svg)

å¦‚æžœä½ æƒ³...
| ç›®æ ‡ | è®¾ç½®ä»€ä¹ˆ |
|------|-------------|
| å…è®¸æ‰€æœ‰ç¾¤ç»„ä½†ä»…åœ¨ @ æåŠæ—¶å›žå¤ | `groups: { "*": { requireMention: true } }` |
| ç¦ç”¨æ‰€æœ‰ç¾¤ç»„å›žå¤ | `groupPolicy: "disabled"` |
| ä»…ç‰¹å®šç¾¤ç»„ | `groups: { "<group-id>": { ... } }`ï¼ˆæ—  `"*"` é”®ï¼‰ |
| ä»…ä½ å¯ä»¥åœ¨ç¾¤ç»„ä¸­è§¦å‘ | `groupPolicy: "allowlist"`ã€`groupAllowFrom: ["+1555..."]` |

## ä¼šè¯é”®

- ç¾¤ç»„ä¼šè¯ä½¿ç”¨ `agent:<agentId>:<channel>:group:<id>` ä¼šè¯é”®ï¼ˆæˆ¿é—´/é¢‘é“ä½¿ç”¨ `agent:<agentId>:<channel>:channel:<id>`ï¼‰ã€‚
- Telegram è®ºå›è¯é¢˜åœ¨ç¾¤ç»„ ID åŽæ·»åŠ  `:topic:<threadId>`ï¼Œå› æ­¤æ¯ä¸ªè¯é¢˜éƒ½æœ‰è‡ªå·±çš„ä¼šè¯ã€‚
- ç§èŠä½¿ç”¨ä¸»ä¼šè¯ï¼ˆæˆ–æŒ‰å‘é€è€…é…ç½®æ—¶ä½¿ç”¨å„è‡ªçš„ä¼šè¯ï¼‰ã€‚
- ç¾¤ç»„ä¼šè¯è·³è¿‡å¿ƒè·³ã€‚

## æ¨¡å¼ï¼šä¸ªäººç§ä¿¡ + å…¬å¼€ç¾¤ç»„ï¼ˆå•æ™ºèƒ½ä½“ï¼‰

æ˜¯çš„â€”â€”å¦‚æžœä½ çš„"ä¸ªäºº"æµé‡æ˜¯**ç§ä¿¡**è€Œ"å…¬å¼€"æµé‡æ˜¯**ç¾¤ç»„**ï¼Œè¿™ç§æ–¹å¼æ•ˆæžœå¾ˆå¥½ã€‚

åŽŸå› ï¼šåœ¨å•æ™ºèƒ½ä½“æ¨¡å¼ä¸‹ï¼Œç§ä¿¡é€šå¸¸è½åœ¨**ä¸»**ä¼šè¯é”®ï¼ˆ`agent:main:main`ï¼‰ä¸­ï¼Œè€Œç¾¤ç»„å§‹ç»ˆä½¿ç”¨**éžä¸»**ä¼šè¯é”®ï¼ˆ`agent:main:<channel>:group:<id>`ï¼‰ã€‚å¦‚æžœä½ å¯ç”¨ `mode: "non-main"` çš„æ²™ç®±éš”ç¦»ï¼Œè¿™äº›ç¾¤ç»„ä¼šè¯åœ¨ Docker ä¸­è¿è¡Œï¼Œè€Œä½ çš„ä¸»ç§ä¿¡ä¼šè¯ä¿æŒåœ¨ä¸»æœºä¸Šã€‚

è¿™ç»™ä½ ä¸€ä¸ªæ™ºèƒ½ä½“"å¤§è„‘"ï¼ˆå…±äº«å·¥ä½œåŒº + è®°å¿†ï¼‰ï¼Œä½†ä¸¤ç§æ‰§è¡Œå§¿æ€ï¼š

- **ç§ä¿¡**ï¼šå®Œæ•´å·¥å…·ï¼ˆä¸»æœºï¼‰
- **ç¾¤ç»„**ï¼šæ²™ç®± + å—é™å·¥å…·ï¼ˆDockerï¼‰

> å¦‚æžœä½ éœ€è¦çœŸæ­£ç‹¬ç«‹çš„å·¥ä½œåŒº/è§’è‰²ï¼ˆ"ä¸ªäºº"å’Œ"å…¬å¼€"ç»ä¸èƒ½æ··åˆï¼‰ï¼Œè¯·ä½¿ç”¨ç¬¬äºŒä¸ªæ™ºèƒ½ä½“ + ç»‘å®šã€‚å‚è§[å¤šæ™ºèƒ½ä½“è·¯ç”±](/concepts/multi-agent)ã€‚

ç¤ºä¾‹ï¼ˆç§ä¿¡åœ¨ä¸»æœºä¸Šï¼Œç¾¤ç»„æ²™ç®±éš”ç¦» + ä»…æ¶ˆæ¯å·¥å…·ï¼‰ï¼š

```json5
{
  agents: {
    defaults: {
      sandbox: {
        mode: "non-main", // ç¾¤ç»„/é¢‘é“æ˜¯éžä¸» -> æ²™ç®±éš”ç¦»
        scope: "session", // æœ€å¼ºéš”ç¦»ï¼ˆæ¯ä¸ªç¾¤ç»„/é¢‘é“ä¸€ä¸ªå®¹å™¨ï¼‰
        workspaceAccess: "none",
      },
    },
  },
  tools: {
    sandbox: {
      tools: {
        // å¦‚æžœ allow éžç©ºï¼Œå…¶ä»–æ‰€æœ‰å·¥å…·éƒ½è¢«é˜»æ­¢ï¼ˆdeny ä»ç„¶ä¼˜å…ˆï¼‰ã€‚
        allow: ["group:messaging", "group:sessions"],
        deny: ["group:runtime", "group:fs", "group:ui", "nodes", "cron", "gateway"],
      },
    },
  },
}
```

æƒ³è¦"ç¾¤ç»„åªèƒ½çœ‹åˆ°æ–‡ä»¶å¤¹ X"è€Œä¸æ˜¯"æ— ä¸»æœºè®¿é—®"ï¼Ÿä¿æŒ `workspaceAccess: "none"` å¹¶ä»…å°†å…è®¸çš„è·¯å¾„æŒ‚è½½åˆ°æ²™ç®±ä¸­ï¼š

```json5
{
  agents: {
    defaults: {
      sandbox: {
        mode: "non-main",
        scope: "session",
        workspaceAccess: "none",
        docker: {
          binds: [
            // hostPath:containerPath:mode
            "~/FriendsShared:/data:ro",
          ],
        },
      },
    },
  },
}
```

ç›¸å…³ï¼š

- é…ç½®é”®å’Œé»˜è®¤å€¼ï¼š[Gateway ç½‘å…³é…ç½®](/gateway/configuration#agentsdefaultssandbox)
- è°ƒè¯•ä¸ºä»€ä¹ˆå·¥å…·è¢«é˜»æ­¢ï¼š[æ²™ç®± vs å·¥å…·ç­–ç•¥ vs ææƒ](/gateway/sandbox-vs-tool-policy-vs-elevated)
- ç»‘å®šæŒ‚è½½è¯¦æƒ…ï¼š[æ²™ç®±éš”ç¦»](/gateway/sandboxing#custom-bind-mounts)

## æ˜¾ç¤ºæ ‡ç­¾

- UI æ ‡ç­¾åœ¨å¯ç”¨æ—¶ä½¿ç”¨ `displayName`ï¼Œæ ¼å¼ä¸º `<channel>:<token>`ã€‚
- `#room` ä¿ç•™ç”¨äºŽæˆ¿é—´/é¢‘é“ï¼›ç¾¤èŠä½¿ç”¨ `g-<slug>`ï¼ˆå°å†™ï¼Œç©ºæ ¼ -> `-`ï¼Œä¿ç•™ `#@+._-`ï¼‰ã€‚

## ç¾¤ç»„ç­–ç•¥

æŽ§åˆ¶æ¯ä¸ªæ¸ é“å¦‚ä½•å¤„ç†ç¾¤ç»„/æˆ¿é—´æ¶ˆæ¯ï¼š

```json5
{
  channels: {
    whatsapp: {
      groupPolicy: "disabled", // "open" | "disabled" | "allowlist"
      groupAllowFrom: ["+15551234567"],
    },
    telegram: {
      groupPolicy: "disabled",
      groupAllowFrom: ["123456789", "@username"],
    },
    signal: {
      groupPolicy: "disabled",
      groupAllowFrom: ["+15551234567"],
    },
    imessage: {
      groupPolicy: "disabled",
      groupAllowFrom: ["chat_id:123"],
    },
    msteams: {
      groupPolicy: "disabled",
      groupAllowFrom: ["user@org.com"],
    },
    discord: {
      groupPolicy: "allowlist",
      guilds: {
        GUILD_ID: { channels: { help: { allow: true } } },
      },
    },
    slack: {
      groupPolicy: "allowlist",
      channels: { "#general": { allow: true } },
    },
    matrix: {
      groupPolicy: "allowlist",
      groupAllowFrom: ["@owner:example.org"],
      groups: {
        "!roomId:example.org": { allow: true },
        "#alias:example.org": { allow: true },
      },
    },
  },
}
```

| ç­–ç•¥          | è¡Œä¸º                                    |
| ------------- | --------------------------------------- |
| `"open"`      | ç¾¤ç»„ç»•è¿‡å…è®¸åˆ—è¡¨ï¼›æåŠé™åˆ¶ä»ç„¶é€‚ç”¨ã€‚    |
| `"disabled"`  | å®Œå…¨é˜»æ­¢æ‰€æœ‰ç¾¤ç»„æ¶ˆæ¯ã€‚                  |
| `"allowlist"` | ä»…å…è®¸ä¸Žé…ç½®çš„å…è®¸åˆ—è¡¨åŒ¹é…çš„ç¾¤ç»„/æˆ¿é—´ã€‚ |

æ³¨æ„äº‹é¡¹ï¼š

- `groupPolicy` ä¸ŽæåŠé™åˆ¶ï¼ˆéœ€è¦ @ æåŠï¼‰æ˜¯åˆ†å¼€çš„ã€‚
- WhatsApp/Telegram/Signal/iMessage/Microsoft Teamsï¼šä½¿ç”¨ `groupAllowFrom`ï¼ˆå›žé€€ï¼šæ˜¾å¼ `allowFrom`ï¼‰ã€‚
- Discordï¼šå…è®¸åˆ—è¡¨ä½¿ç”¨ `channels.discord.guilds.<id>.channels`ã€‚
- Slackï¼šå…è®¸åˆ—è¡¨ä½¿ç”¨ `channels.slack.channels`ã€‚
- Matrixï¼šå…è®¸åˆ—è¡¨ä½¿ç”¨ `channels.matrix.groups`ï¼ˆæˆ¿é—´ IDã€åˆ«åæˆ–åç§°ï¼‰ã€‚ä½¿ç”¨ `channels.matrix.groupAllowFrom` é™åˆ¶å‘é€è€…ï¼›ä¹Ÿæ”¯æŒæ¯ä¸ªæˆ¿é—´çš„ `users` å…è®¸åˆ—è¡¨ã€‚
- ç¾¤ç»„ç§ä¿¡å•ç‹¬æŽ§åˆ¶ï¼ˆ`channels.discord.dm.*`ã€`channels.slack.dm.*`ï¼‰ã€‚
- Telegram å…è®¸åˆ—è¡¨å¯ä»¥åŒ¹é…ç”¨æˆ· IDï¼ˆ`"123456789"`ã€`"telegram:123456789"`ã€`"tg:123456789"`ï¼‰æˆ–ç”¨æˆ·åï¼ˆ`"@alice"` æˆ– `"alice"`ï¼‰ï¼›å‰ç¼€ä¸åŒºåˆ†å¤§å°å†™ã€‚
- é»˜è®¤ä¸º `groupPolicy: "allowlist"`ï¼›å¦‚æžœä½ çš„ç¾¤ç»„å…è®¸åˆ—è¡¨ä¸ºç©ºï¼Œç¾¤ç»„æ¶ˆæ¯å°†è¢«é˜»æ­¢ã€‚

å¿«é€Ÿå¿ƒæ™ºæ¨¡åž‹ï¼ˆç¾¤ç»„æ¶ˆæ¯çš„è¯„ä¼°é¡ºåºï¼‰ï¼š

1. `groupPolicy`ï¼ˆopen/disabled/allowlistï¼‰
2. ç¾¤ç»„å…è®¸åˆ—è¡¨ï¼ˆ`*.groups`ã€`*.groupAllowFrom`ã€æ¸ é“ç‰¹å®šå…è®¸åˆ—è¡¨ï¼‰
3. æåŠé™åˆ¶ï¼ˆ`requireMention`ã€`/activation`ï¼‰

## æåŠé™åˆ¶ï¼ˆé»˜è®¤ï¼‰

ç¾¤ç»„æ¶ˆæ¯éœ€è¦æåŠï¼Œé™¤éžæŒ‰ç¾¤ç»„è¦†ç›–ã€‚é»˜è®¤å€¼ä½äºŽ `*.groups."*"` ä¸‹çš„æ¯ä¸ªå­ç³»ç»Ÿä¸­ã€‚

å›žå¤æœºå™¨äººæ¶ˆæ¯è¢«è§†ä¸ºéšå¼æåŠï¼ˆå½“æ¸ é“æ”¯æŒå›žå¤å…ƒæ•°æ®æ—¶ï¼‰ã€‚è¿™é€‚ç”¨äºŽ Telegramã€WhatsAppã€Slackã€Discord å’Œ Microsoft Teamsã€‚

```json5
{
  channels: {
    whatsapp: {
      groups: {
        "*": { requireMention: true },
        "123@g.us": { requireMention: false },
      },
    },
    telegram: {
      groups: {
        "*": { requireMention: true },
        "123456789": { requireMention: false },
      },
    },
    imessage: {
      groups: {
        "*": { requireMention: true },
        "123": { requireMention: false },
      },
    },
  },
  agents: {
    list: [
      {
        id: "main",
        groupChat: {
          mentionPatterns: ["@", "", "\\+15555550123"],
          historyLimit: 50,
        },
      },
    ],
  },
}
```

æ³¨æ„äº‹é¡¹ï¼š

- `mentionPatterns` æ˜¯ä¸åŒºåˆ†å¤§å°å†™çš„æ­£åˆ™è¡¨è¾¾å¼ã€‚
- æä¾›æ˜¾å¼æåŠçš„å¹³å°ä»ç„¶é€šè¿‡ï¼›æ¨¡å¼æ˜¯å›žé€€ã€‚
- æ¯ä¸ªæ™ºèƒ½ä½“è¦†ç›–ï¼š`agents.list[].groupChat.mentionPatterns`ï¼ˆå½“å¤šä¸ªæ™ºèƒ½ä½“å…±äº«ä¸€ä¸ªç¾¤ç»„æ—¶æœ‰ç”¨ï¼‰ã€‚
- æåŠé™åˆ¶ä»…åœ¨æåŠæ£€æµ‹å¯è¡Œæ—¶å¼ºåˆ¶æ‰§è¡Œï¼ˆåŽŸç”ŸæåŠæˆ– `mentionPatterns` å·²é…ç½®ï¼‰ã€‚
- Discord é»˜è®¤å€¼ä½äºŽ `channels.discord.guilds."*"`ï¼ˆå¯æŒ‰æœåŠ¡å™¨/é¢‘é“è¦†ç›–ï¼‰ã€‚
- ç¾¤ç»„åŽ†å²ä¸Šä¸‹æ–‡åœ¨æ¸ é“é—´ç»Ÿä¸€åŒ…è£…ï¼Œå¹¶ä¸”æ˜¯**ä»…å¾…å¤„ç†**ï¼ˆç”±äºŽæåŠé™åˆ¶è€Œè·³è¿‡çš„æ¶ˆæ¯ï¼‰ï¼›ä½¿ç”¨ `messages.groupChat.historyLimit` ä½œä¸ºå…¨å±€é»˜è®¤å€¼ï¼Œä½¿ç”¨ `channels.<channel>.historyLimit`ï¼ˆæˆ– `channels.<channel>.accounts.*.historyLimit`ï¼‰è¿›è¡Œè¦†ç›–ã€‚è®¾ç½® `0` ä»¥ç¦ç”¨ã€‚

## ç¾¤ç»„/é¢‘é“å·¥å…·é™åˆ¶ï¼ˆå¯é€‰ï¼‰

æŸäº›æ¸ é“é…ç½®æ”¯æŒé™åˆ¶**ç‰¹å®šç¾¤ç»„/æˆ¿é—´/é¢‘é“å†…**å¯ç”¨çš„å·¥å…·ã€‚

- `tools`ï¼šä¸ºæ•´ä¸ªç¾¤ç»„å…è®¸/æ‹’ç»å·¥å…·ã€‚
- `toolsBySender`ï¼šç¾¤ç»„å†…çš„æŒ‰å‘é€è€…è¦†ç›–ï¼ˆé”®æ˜¯å‘é€è€… ID/ç”¨æˆ·å/é‚®ç®±/ç”µè¯å·ç ï¼Œå–å†³äºŽæ¸ é“ï¼‰ã€‚ä½¿ç”¨ `"*"` ä½œä¸ºé€šé…ç¬¦ã€‚

è§£æžé¡ºåºï¼ˆæœ€å…·ä½“çš„ä¼˜å…ˆï¼‰ï¼š

1. ç¾¤ç»„/é¢‘é“ `toolsBySender` åŒ¹é…
2. ç¾¤ç»„/é¢‘é“ `tools`
3. é»˜è®¤ï¼ˆ`"*"`ï¼‰`toolsBySender` åŒ¹é…
4. é»˜è®¤ï¼ˆ`"*"`ï¼‰`tools`

ç¤ºä¾‹ï¼ˆTelegramï¼‰ï¼š

```json5
{
  channels: {
    telegram: {
      groups: {
        "*": { tools: { deny: ["exec"] } },
        "-1001234567890": {
          tools: { deny: ["exec", "read", "write"] },
          toolsBySender: {
            "123456789": { alsoAllow: ["exec"] },
          },
        },
      },
    },
  },
}
```

æ³¨æ„äº‹é¡¹ï¼š

- ç¾¤ç»„/é¢‘é“å·¥å…·é™åˆ¶åœ¨å…¨å±€/æ™ºèƒ½ä½“å·¥å…·ç­–ç•¥ä¹‹å¤–é¢å¤–åº”ç”¨ï¼ˆdeny ä»ç„¶ä¼˜å…ˆï¼‰ã€‚
- æŸäº›æ¸ é“å¯¹æˆ¿é—´/é¢‘é“ä½¿ç”¨ä¸åŒçš„åµŒå¥—ç»“æž„ï¼ˆä¾‹å¦‚ï¼ŒDiscord `guilds.*.channels.*`ã€Slack `channels.*`ã€MS Teams `teams.*.channels.*`ï¼‰ã€‚

## ç¾¤ç»„å…è®¸åˆ—è¡¨

å½“é…ç½®äº† `channels.whatsapp.groups`ã€`channels.telegram.groups` æˆ– `channels.imessage.groups` æ—¶ï¼Œé”®ä½œä¸ºç¾¤ç»„å…è®¸åˆ—è¡¨ã€‚ä½¿ç”¨ `"*"` å…è®¸æ‰€æœ‰ç¾¤ç»„ï¼ŒåŒæ—¶ä»è®¾ç½®é»˜è®¤æåŠè¡Œä¸ºã€‚

å¸¸è§æ„å›¾ï¼ˆå¤åˆ¶/ç²˜è´´ï¼‰ï¼š

1. ç¦ç”¨æ‰€æœ‰ç¾¤ç»„å›žå¤

```json5
{
  channels: { whatsapp: { groupPolicy: "disabled" } },
}
```

2. ä»…å…è®¸ç‰¹å®šç¾¤ç»„ï¼ˆWhatsAppï¼‰

```json5
{
  channels: {
    whatsapp: {
      groups: {
        "123@g.us": { requireMention: true },
        "456@g.us": { requireMention: false },
      },
    },
  },
}
```

3. å…è®¸æ‰€æœ‰ç¾¤ç»„ä½†éœ€è¦æåŠï¼ˆæ˜¾å¼ï¼‰

```json5
{
  channels: {
    whatsapp: {
      groups: { "*": { requireMention: true } },
    },
  },
}
```

4. ä»…æ‰€æœ‰è€…å¯ä»¥åœ¨ç¾¤ç»„ä¸­è§¦å‘ï¼ˆWhatsAppï¼‰

```json5
{
  channels: {
    whatsapp: {
      groupPolicy: "allowlist",
      groupAllowFrom: ["+15551234567"],
      groups: { "*": { requireMention: true } },
    },
  },
}
```

## æ¿€æ´»ï¼ˆä»…æ‰€æœ‰è€…ï¼‰

ç¾¤ç»„æ‰€æœ‰è€…å¯ä»¥åˆ‡æ¢æ¯ä¸ªç¾¤ç»„çš„æ¿€æ´»çŠ¶æ€ï¼š

- `/activation mention`
- `/activation always`

æ‰€æœ‰è€…ç”± `channels.whatsapp.allowFrom` ç¡®å®šï¼ˆæœªè®¾ç½®æ—¶ä¸ºæœºå™¨äººè‡ªèº«çš„ E.164ï¼‰ã€‚å°†å‘½ä»¤ä½œä¸ºç‹¬ç«‹æ¶ˆæ¯å‘é€ã€‚å…¶ä»–å¹³å°ç›®å‰å¿½ç•¥ `/activation`ã€‚

## ä¸Šä¸‹æ–‡å­—æ®µ

ç¾¤ç»„å…¥ç«™è´Ÿè½½è®¾ç½®ï¼š

- `ChatType=group`
- `GroupSubject`ï¼ˆå¦‚æžœå·²çŸ¥ï¼‰
- `GroupMembers`ï¼ˆå¦‚æžœå·²çŸ¥ï¼‰
- `WasMentioned`ï¼ˆæåŠé™åˆ¶ç»“æžœï¼‰
- Telegram è®ºå›è¯é¢˜è¿˜åŒ…æ‹¬ `MessageThreadId` å’Œ `IsForum`ã€‚

æ™ºèƒ½ä½“ç³»ç»Ÿæç¤ºåœ¨æ–°ç¾¤ç»„ä¼šè¯çš„ç¬¬ä¸€è½®åŒ…å«ç¾¤ç»„ä»‹ç»ã€‚å®ƒæé†’æ¨¡åž‹åƒäººç±»ä¸€æ ·å›žå¤ï¼Œé¿å… Markdown è¡¨æ ¼ï¼Œé¿å…è¾“å…¥å­—é¢é‡ `\n` åºåˆ—ã€‚

## iMessage ç‰¹å®šå†…å®¹

- è·¯ç”±æˆ–å…è®¸åˆ—è¡¨æ—¶ä¼˜å…ˆä½¿ç”¨ `chat_id:<id>`ã€‚
- åˆ—å‡ºèŠå¤©ï¼š`imsg chats --limit 20`ã€‚
- ç¾¤ç»„å›žå¤å§‹ç»ˆè¿”å›žåˆ°ç›¸åŒçš„ `chat_id`ã€‚

## WhatsApp ç‰¹å®šå†…å®¹

å‚è§[ç¾¤æ¶ˆæ¯](/concepts/group-messages)äº†è§£ WhatsApp ä¸“æœ‰è¡Œä¸ºï¼ˆåŽ†å²æ³¨å…¥ã€æåŠå¤„ç†è¯¦æƒ…ï¼‰ã€‚

