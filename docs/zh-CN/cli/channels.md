---
read_when:
  - ä½ æƒ³æ·»åŠ /åˆ é™¤æ¸ é“è´¦æˆ·ï¼ˆWhatsApp/Telegram/Discord/Google Chat/Slack/Mattermostï¼ˆæ’ä»¶ï¼‰/Signal/iMessageï¼‰
  - ä½ æƒ³æ£€æŸ¥æ¸ é“çŠ¶æ€æˆ–è·Ÿè¸ªæ¸ é“æ—¥å¿—
summary: "` channels` çš„ CLI å‚è€ƒï¼ˆè´¦æˆ·ã€çŠ¶æ€ã€ç™»å½•/ç™»å‡ºã€æ—¥å¿—ï¼‰"
title: channels
x-i18n:
  generated_at: "2026-02-03T07:44:51Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 16ab1642f247bfa96e8e08dfeb1eedfccb148f40d91099f5423f971df2b54e20
  source_path: cli/channels.md
  workflow: 15
---

# ` channels`

ç®¡ç† Gateway ç½‘å…³ä¸Šçš„èŠå¤©æ¸ é“è´¦æˆ·åŠå…¶è¿è¡Œæ—¶çŠ¶æ€ã€‚

ç›¸å…³æ–‡æ¡£ï¼š

- æ¸ é“æŒ‡å—ï¼š[æ¸ é“](/channels/index)
- Gateway ç½‘å…³é…ç½®ï¼š[é…ç½®](/gateway/configuration)

## å¸¸ç”¨å‘½ä»¤

```bash
 channels list
 channels status
 channels capabilities
 channels capabilities --channel discord --target channel:123
 channels resolve --channel slack "#general" "@jane"
 channels logs --channel all
```

## æ·»åŠ /åˆ é™¤è´¦æˆ·

```bash
 channels add --channel telegram --token <bot-token>
 channels remove --channel telegram --delete
```

æç¤ºï¼š` channels add --help` æ˜¾ç¤ºæ¯ä¸ªæ¸ é“çš„æ ‡å¿—ï¼ˆtokenã€app tokenã€signal-cli è·¯å¾„ç­‰ï¼‰ã€‚

## ç™»å½•/ç™»å‡ºï¼ˆäº¤äº’å¼ï¼‰

```bash
 channels login --channel whatsapp
 channels logout --channel whatsapp
```

## æ•…éšœæŽ’é™¤

- è¿è¡Œ ` status --deep` è¿›è¡Œå…¨é¢æŽ¢æµ‹ã€‚
- ä½¿ç”¨ ` doctor` èŽ·å–å¼•å¯¼å¼ä¿®å¤ã€‚
- ` channels list` è¾“å‡º `Claude: HTTP 403 ... user:profile` â†’ ç”¨é‡å¿«ç…§éœ€è¦ `user:profile` æƒé™èŒƒå›´ã€‚ä½¿ç”¨ `--no-usage`ï¼Œæˆ–æä¾› claude.ai ä¼šè¯å¯†é’¥ï¼ˆ`CLAUDE_WEB_SESSION_KEY` / `CLAUDE_WEB_COOKIE`ï¼‰ï¼Œæˆ–é€šè¿‡ Claude Code CLI é‡æ–°æŽˆæƒã€‚

## èƒ½åŠ›æŽ¢æµ‹

èŽ·å–æä¾›å•†èƒ½åŠ›æç¤ºï¼ˆå¯ç”¨çš„ intents/scopesï¼‰ä»¥åŠé™æ€åŠŸèƒ½æ”¯æŒï¼š

```bash
 channels capabilities
 channels capabilities --channel discord --target channel:123
```

è¯´æ˜Žï¼š

- `--channel` æ˜¯å¯é€‰çš„ï¼›çœç•¥å®ƒå¯åˆ—å‡ºæ‰€æœ‰æ¸ é“ï¼ˆåŒ…æ‹¬æ‰©å±•ï¼‰ã€‚
- `--target` æŽ¥å— `channel:<id>` æˆ–åŽŸå§‹æ•°å­—é¢‘é“ idï¼Œä»…é€‚ç”¨äºŽ Discordã€‚
- æŽ¢æµ‹æ˜¯ç‰¹å®šäºŽæä¾›å•†çš„ï¼šDiscord intents + å¯é€‰çš„é¢‘é“æƒé™ï¼›Slack bot + user scopesï¼›Telegram bot æ ‡å¿— + webhookï¼›Signal daemon ç‰ˆæœ¬ï¼›MS Teams app token + Graph roles/scopesï¼ˆåœ¨å·²çŸ¥å¤„æ ‡æ³¨ï¼‰ã€‚æ²¡æœ‰æŽ¢æµ‹åŠŸèƒ½çš„æ¸ é“æŠ¥å‘Š `Probe: unavailable`ã€‚

## è§£æžåç§°ä¸º ID

ä½¿ç”¨æä¾›å•†ç›®å½•å°†æ¸ é“/ç”¨æˆ·åç§°è§£æžä¸º IDï¼š

```bash
 channels resolve --channel slack "#general" "@jane"
 channels resolve --channel discord "My Server/#support" "@someone"
 channels resolve --channel matrix "Project Room"
```

è¯´æ˜Žï¼š

- ä½¿ç”¨ `--kind user|group|auto` å¼ºåˆ¶æŒ‡å®šç›®æ ‡ç±»åž‹ã€‚
- å½“å¤šä¸ªæ¡ç›®å…±äº«ç›¸åŒåç§°æ—¶ï¼Œè§£æžä¼˜å…ˆé€‰æ‹©æ´»è·ƒçš„åŒ¹é…é¡¹ã€‚

