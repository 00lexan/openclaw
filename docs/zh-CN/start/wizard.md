---
read_when:
  - è¿è¡Œæˆ–é…ç½®æ–°æ‰‹å¼•å¯¼å‘å¯¼
  - è®¾ç½®æ–°æœºå™¨
summary: CLI æ–°æ‰‹å¼•å¯¼å‘å¯¼ï¼šå¼•å¯¼å¼é…ç½® Gateway ç½‘å…³ã€å·¥ä½œåŒºã€æ¸ é“å’Œ Skills
title: æ–°æ‰‹å¼•å¯¼å‘å¯¼
x-i18n:
  generated_at: "2026-02-03T09:20:27Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 45e10d31048d927ee6546e35b050914f0e6e21a4dee298b3b277eebe7c133732
  source_path: start/wizard.md
  workflow: 15
---

# æ–°æ‰‹å¼•å¯¼å‘å¯¼ï¼ˆCLIï¼‰

æ–°æ‰‹å¼•å¯¼å‘å¯¼æ˜¯åœ¨ macOSã€Linux æˆ– Windowsï¼ˆé€šè¿‡ WSL2ï¼›å¼ºçƒˆæŽ¨èï¼‰ä¸Šè®¾ç½®  çš„**æŽ¨è**æ–¹å¼ã€‚
å®ƒå¯ä»¥åœ¨ä¸€ä¸ªå¼•å¯¼å¼æµç¨‹ä¸­é…ç½®æœ¬åœ° Gateway ç½‘å…³æˆ–è¿œç¨‹ Gateway ç½‘å…³è¿žæŽ¥ï¼Œä»¥åŠæ¸ é“ã€Skills å’Œå·¥ä½œåŒºé»˜è®¤å€¼ã€‚

ä¸»è¦å…¥å£ï¼š

```bash
 onboard
```

æœ€å¿«å¼€å§‹èŠå¤©çš„æ–¹å¼ï¼šæ‰“å¼€æŽ§åˆ¶ç•Œé¢ï¼ˆæ— éœ€è®¾ç½®æ¸ é“ï¼‰ã€‚è¿è¡Œ ` dashboard` å¹¶åœ¨æµè§ˆå™¨ä¸­èŠå¤©ã€‚æ–‡æ¡£ï¼š[æŽ§åˆ¶é¢æ¿](/web/dashboard)ã€‚

åŽç»­é‡æ–°é…ç½®ï¼š

```bash
 configure
```

æŽ¨èï¼šè®¾ç½® Brave Search API å¯†é’¥ï¼Œä»¥ä¾¿æ™ºèƒ½ä½“å¯ä»¥ä½¿ç”¨ `web_search`ï¼ˆ`web_fetch` æ— éœ€å¯†é’¥å³å¯ä½¿ç”¨ï¼‰ã€‚æœ€ç®€å•çš„æ–¹å¼ï¼š` configure --section web`ï¼Œå®ƒä¼šå­˜å‚¨ `tools.web.search.apiKey`ã€‚æ–‡æ¡£ï¼š[Web å·¥å…·](/tools/web)ã€‚

## å¿«é€Ÿå¼€å§‹ vs é«˜çº§

å‘å¯¼ä»Ž**å¿«é€Ÿå¼€å§‹**ï¼ˆé»˜è®¤å€¼ï¼‰vs **é«˜çº§**ï¼ˆå®Œå…¨æŽ§åˆ¶ï¼‰å¼€å§‹ã€‚

**å¿«é€Ÿå¼€å§‹**ä¿æŒé»˜è®¤å€¼ï¼š

- æœ¬åœ° Gateway ç½‘å…³ï¼ˆloopbackï¼‰
- é»˜è®¤å·¥ä½œåŒºï¼ˆæˆ–çŽ°æœ‰å·¥ä½œåŒºï¼‰
- Gateway ç½‘å…³ç«¯å£ **18789**
- Gateway ç½‘å…³è®¤è¯ **Token**ï¼ˆè‡ªåŠ¨ç”Ÿæˆï¼Œå³ä½¿åœ¨ loopback ä¸Šï¼‰
- Tailscale æš´éœ² **å…³é—­**
- Telegram + WhatsApp ç§ä¿¡é»˜è®¤ä½¿ç”¨**å…è®¸åˆ—è¡¨**ï¼ˆç³»ç»Ÿä¼šæç¤ºä½ è¾“å…¥ç”µè¯å·ç ï¼‰

**é«˜çº§**æš´éœ²æ¯ä¸ªæ­¥éª¤ï¼ˆæ¨¡å¼ã€å·¥ä½œåŒºã€Gateway ç½‘å…³ã€æ¸ é“ã€å®ˆæŠ¤è¿›ç¨‹ã€Skillsï¼‰ã€‚

## å‘å¯¼åšäº†ä»€ä¹ˆ

**æœ¬åœ°æ¨¡å¼ï¼ˆé»˜è®¤ï¼‰**å¼•å¯¼ä½ å®Œæˆï¼š

- æ¨¡åž‹/è®¤è¯ï¼ˆOpenAI Code (Codex) è®¢é˜… OAuthã€Anthropic API å¯†é’¥ï¼ˆæŽ¨èï¼‰æˆ– setup-tokenï¼ˆç²˜è´´ï¼‰ï¼Œä»¥åŠ MiniMax/GLM/Moonshot/AI Gateway é€‰é¡¹ï¼‰
- å·¥ä½œåŒºä½ç½® + å¼•å¯¼æ–‡ä»¶
- Gateway ç½‘å…³è®¾ç½®ï¼ˆç«¯å£/ç»‘å®š/è®¤è¯/tailscaleï¼‰
- æä¾›å•†ï¼ˆTelegramã€WhatsAppã€Discordã€Google Chatã€Mattermostï¼ˆæ’ä»¶ï¼‰ã€Signalï¼‰
- å®ˆæŠ¤è¿›ç¨‹å®‰è£…ï¼ˆLaunchAgent / systemd ç”¨æˆ·å•å…ƒï¼‰
- å¥åº·æ£€æŸ¥
- Skillsï¼ˆæŽ¨èï¼‰

**è¿œç¨‹æ¨¡å¼**ä»…é…ç½®æœ¬åœ°å®¢æˆ·ç«¯è¿žæŽ¥åˆ°å…¶ä»–ä½ç½®çš„ Gateway ç½‘å…³ã€‚
å®ƒ**ä¸ä¼š**åœ¨è¿œç¨‹ä¸»æœºä¸Šå®‰è£…æˆ–æ›´æ”¹ä»»ä½•å†…å®¹ã€‚

è¦æ·»åŠ æ›´å¤šéš”ç¦»çš„æ™ºèƒ½ä½“ï¼ˆç‹¬ç«‹çš„å·¥ä½œåŒº + ä¼šè¯ + è®¤è¯ï¼‰ï¼Œä½¿ç”¨ï¼š

```bash
 agents add <name>
```

æç¤ºï¼š`--json` **ä¸**æ„å‘³ç€éžäº¤äº’æ¨¡å¼ã€‚è„šæœ¬ä¸­è¯·ä½¿ç”¨ `--non-interactive`ï¼ˆå’Œ `--workspace`ï¼‰ã€‚

## æµç¨‹è¯¦æƒ…ï¼ˆæœ¬åœ°ï¼‰

1. **çŽ°æœ‰é…ç½®æ£€æµ‹**
   - å¦‚æžœ `~/./.json` å­˜åœ¨ï¼Œé€‰æ‹©**ä¿ç•™ / ä¿®æ”¹ / é‡ç½®**ã€‚
   - é‡æ–°è¿è¡Œå‘å¯¼**ä¸ä¼š**æ¸…é™¤ä»»ä½•å†…å®¹ï¼Œé™¤éžä½ æ˜Žç¡®é€‰æ‹©**é‡ç½®**ï¼ˆæˆ–ä¼ é€’ `--reset`ï¼‰ã€‚
   - å¦‚æžœé…ç½®æ— æ•ˆæˆ–åŒ…å«é—ç•™é”®åï¼Œå‘å¯¼ä¼šåœæ­¢å¹¶è¦æ±‚ä½ åœ¨ç»§ç»­ä¹‹å‰è¿è¡Œ ` doctor`ã€‚
   - é‡ç½®ä½¿ç”¨ `trash`ï¼ˆæ°¸ä¸ä½¿ç”¨ `rm`ï¼‰å¹¶æä¾›èŒƒå›´é€‰é¡¹ï¼š
     - ä»…é…ç½®
     - é…ç½® + å‡­è¯ + ä¼šè¯
     - å®Œå…¨é‡ç½®ï¼ˆåŒæ—¶åˆ é™¤å·¥ä½œåŒºï¼‰

2. **æ¨¡åž‹/è®¤è¯**
   - **Anthropic API å¯†é’¥ï¼ˆæŽ¨èï¼‰**ï¼šå¦‚æžœå­˜åœ¨åˆ™ä½¿ç”¨ `ANTHROPIC_API_KEY`ï¼Œå¦åˆ™æç¤ºè¾“å…¥å¯†é’¥ï¼Œç„¶åŽä¿å­˜ä¾›å®ˆæŠ¤è¿›ç¨‹ä½¿ç”¨ã€‚
   - **Anthropic OAuthï¼ˆClaude Code CLIï¼‰**ï¼šåœ¨ macOS ä¸Šï¼Œå‘å¯¼æ£€æŸ¥é’¥åŒ™ä¸²é¡¹ç›®"Claude Code-credentials"ï¼ˆé€‰æ‹©"å§‹ç»ˆå…è®¸"ä»¥ä¾¿ launchd å¯åŠ¨ä¸ä¼šé˜»å¡žï¼‰ï¼›åœ¨ Linux/Windows ä¸Šï¼Œå¦‚æžœå­˜åœ¨åˆ™å¤ç”¨ `~/.claude/.credentials.json`ã€‚
   - **Anthropic ä»¤ç‰Œï¼ˆç²˜è´´ setup-tokenï¼‰**ï¼šåœ¨ä»»ä½•æœºå™¨ä¸Šè¿è¡Œ `claude setup-token`ï¼Œç„¶åŽç²˜è´´ä»¤ç‰Œï¼ˆä½ å¯ä»¥å‘½åå®ƒï¼›ç©ºç™½ = é»˜è®¤ï¼‰ã€‚
   - **OpenAI Code (Codex) è®¢é˜…ï¼ˆCodex CLIï¼‰**ï¼šå¦‚æžœ `~/.codex/auth.json` å­˜åœ¨ï¼Œå‘å¯¼å¯ä»¥å¤ç”¨å®ƒã€‚
   - **OpenAI Code (Codex) è®¢é˜…ï¼ˆOAuthï¼‰**ï¼šæµè§ˆå™¨æµç¨‹ï¼›ç²˜è´´ `code#state`ã€‚
     - å½“æ¨¡åž‹æœªè®¾ç½®æˆ–ä¸º `openai/*` æ—¶ï¼Œå°† `agents.defaults.model` è®¾ç½®ä¸º `openai-codex/gpt-5.2`ã€‚
   - **OpenAI API å¯†é’¥**ï¼šå¦‚æžœå­˜åœ¨åˆ™ä½¿ç”¨ `OPENAI_API_KEY`ï¼Œå¦åˆ™æç¤ºè¾“å…¥å¯†é’¥ï¼Œç„¶åŽä¿å­˜åˆ° `~/./.env` ä»¥ä¾¿ launchd å¯ä»¥è¯»å–ã€‚
   - **OpenCode Zenï¼ˆå¤šæ¨¡åž‹ä»£ç†ï¼‰**ï¼šæç¤ºè¾“å…¥ `OPENCODE_API_KEY`ï¼ˆæˆ– `OPENCODE_ZEN_API_KEY`ï¼Œåœ¨ https://opencode.ai/auth èŽ·å–ï¼‰ã€‚
   - **API å¯†é’¥**ï¼šä¸ºä½ å­˜å‚¨å¯†é’¥ã€‚
   - **Vercel AI Gatewayï¼ˆå¤šæ¨¡åž‹ä»£ç†ï¼‰**ï¼šæç¤ºè¾“å…¥ `AI_GATEWAY_API_KEY`ã€‚
   - æ›´å¤šè¯¦æƒ…ï¼š[Vercel AI Gateway](/providers/vercel-ai-gateway)
   - **MiniMax M2.1**ï¼šè‡ªåŠ¨å†™å…¥é…ç½®ã€‚
   - æ›´å¤šè¯¦æƒ…ï¼š[MiniMax](/providers/minimax)
   - **Syntheticï¼ˆAnthropic å…¼å®¹ï¼‰**ï¼šæç¤ºè¾“å…¥ `SYNTHETIC_API_KEY`ã€‚
   - æ›´å¤šè¯¦æƒ…ï¼š[Synthetic](/providers/synthetic)
   - **Moonshotï¼ˆKimi K2ï¼‰**ï¼šè‡ªåŠ¨å†™å…¥é…ç½®ã€‚
   - **Kimi Coding**ï¼šè‡ªåŠ¨å†™å…¥é…ç½®ã€‚
   - æ›´å¤šè¯¦æƒ…ï¼š[Moonshot AIï¼ˆKimi + Kimi Codingï¼‰](/providers/moonshot)
   - **è·³è¿‡**ï¼šå°šæœªé…ç½®è®¤è¯ã€‚
   - ä»Žæ£€æµ‹åˆ°çš„é€‰é¡¹ä¸­é€‰æ‹©é»˜è®¤æ¨¡åž‹ï¼ˆæˆ–æ‰‹åŠ¨è¾“å…¥æä¾›å•†/æ¨¡åž‹ï¼‰ã€‚
   - å‘å¯¼è¿è¡Œæ¨¡åž‹æ£€æŸ¥ï¼Œå¦‚æžœé…ç½®çš„æ¨¡åž‹æœªçŸ¥æˆ–ç¼ºå°‘è®¤è¯åˆ™å‘å‡ºè­¦å‘Šã€‚

- OAuth å‡­è¯å­˜å‚¨åœ¨ `~/./credentials/oauth.json`ï¼›è®¤è¯é…ç½®æ–‡ä»¶å­˜å‚¨åœ¨ `~/./agents/<agentId>/agent/auth-profiles.json`ï¼ˆAPI å¯†é’¥ + OAuthï¼‰ã€‚
- æ›´å¤šè¯¦æƒ…ï¼š[/concepts/oauth](/concepts/oauth)

3. **å·¥ä½œåŒº**
   - é»˜è®¤ `~/./workspace`ï¼ˆå¯é…ç½®ï¼‰ã€‚
   - ä¸ºæ™ºèƒ½ä½“å¼•å¯¼ä»ªå¼æ’­ç§æ‰€éœ€çš„å·¥ä½œåŒºæ–‡ä»¶ã€‚
   - å®Œæ•´çš„å·¥ä½œåŒºå¸ƒå±€ + å¤‡ä»½æŒ‡å—ï¼š[æ™ºèƒ½ä½“å·¥ä½œåŒº](/concepts/agent-workspace)

4. **Gateway ç½‘å…³**
   - ç«¯å£ã€ç»‘å®šã€è®¤è¯æ¨¡å¼ã€tailscale æš´éœ²ã€‚
   - è®¤è¯å»ºè®®ï¼šå³ä½¿å¯¹äºŽ loopback ä¹Ÿä¿æŒ **Token**ï¼Œä»¥ä¾¿æœ¬åœ° WS å®¢æˆ·ç«¯å¿…é¡»è¿›è¡Œè®¤è¯ã€‚
   - ä»…å½“ä½ å®Œå…¨ä¿¡ä»»æ¯ä¸ªæœ¬åœ°è¿›ç¨‹æ—¶æ‰ç¦ç”¨è®¤è¯ã€‚
   - éž loopback ç»‘å®šä»éœ€è¦è®¤è¯ã€‚

5. **æ¸ é“**
   - [WhatsApp](/channels/whatsapp)ï¼šå¯é€‰çš„äºŒç»´ç ç™»å½•ã€‚
   - [Telegram](/channels/telegram)ï¼šæœºå™¨äººä»¤ç‰Œã€‚
   - [Discord](/channels/discord)ï¼šæœºå™¨äººä»¤ç‰Œã€‚
   - [Google Chat](/channels/googlechat)ï¼šæœåŠ¡è´¦æˆ· JSON + webhook å—ä¼—ã€‚
   - [Mattermost](/channels/mattermost)ï¼ˆæ’ä»¶ï¼‰ï¼šæœºå™¨äººä»¤ç‰Œ + åŸºç¡€ URLã€‚
   - [Signal](/channels/signal)ï¼šå¯é€‰çš„ `signal-cli` å®‰è£… + è´¦æˆ·é…ç½®ã€‚
   - [iMessage](/channels/imessage)ï¼šæœ¬åœ° `imsg` CLI è·¯å¾„ + æ•°æ®åº“è®¿é—®ã€‚
   - ç§ä¿¡å®‰å…¨ï¼šé»˜è®¤ä¸ºé…å¯¹ã€‚ç¬¬ä¸€æ¡ç§ä¿¡å‘é€éªŒè¯ç ï¼›é€šè¿‡ ` pairing approve <channel> <code>` æ‰¹å‡†æˆ–ä½¿ç”¨å…è®¸åˆ—è¡¨ã€‚

6. **å®ˆæŠ¤è¿›ç¨‹å®‰è£…**
   - macOSï¼šLaunchAgent
     - éœ€è¦å·²ç™»å½•çš„ç”¨æˆ·ä¼šè¯ï¼›å¯¹äºŽæ— å¤´çŽ¯å¢ƒï¼Œä½¿ç”¨è‡ªå®šä¹‰ LaunchDaemonï¼ˆæœªæä¾›ï¼‰ã€‚
   - Linuxï¼ˆå’Œé€šè¿‡ WSL2 çš„ Windowsï¼‰ï¼šsystemd ç”¨æˆ·å•å…ƒ
     - å‘å¯¼å°è¯•é€šè¿‡ `loginctl enable-linger <user>` å¯ç”¨ lingeringï¼Œä»¥ä¾¿ Gateway ç½‘å…³åœ¨æ³¨é”€åŽä¿æŒè¿è¡Œã€‚
     - å¯èƒ½æç¤º sudoï¼ˆå†™å…¥ `/var/lib/systemd/linger`ï¼‰ï¼›å®ƒé¦–å…ˆå°è¯•ä¸ä½¿ç”¨ sudoã€‚
   - **è¿è¡Œæ—¶é€‰æ‹©ï¼š**Nodeï¼ˆæŽ¨èï¼›WhatsApp/Telegram éœ€è¦ï¼‰ã€‚**ä¸æŽ¨è** Bunã€‚

7. **å¥åº·æ£€æŸ¥**
   - å¯åŠ¨ Gateway ç½‘å…³ï¼ˆå¦‚æžœéœ€è¦ï¼‰å¹¶è¿è¡Œ ` health`ã€‚
   - æç¤ºï¼š` status --deep` åœ¨çŠ¶æ€è¾“å‡ºä¸­æ·»åŠ  Gateway ç½‘å…³å¥åº·æŽ¢æµ‹ï¼ˆéœ€è¦å¯è¾¾çš„ Gateway ç½‘å…³ï¼‰ã€‚

8. **Skillsï¼ˆæŽ¨èï¼‰**
   - è¯»å–å¯ç”¨çš„ Skills å¹¶æ£€æŸ¥è¦æ±‚ã€‚
   - è®©ä½ é€‰æ‹©èŠ‚ç‚¹ç®¡ç†å™¨ï¼š**npm / pnpm**ï¼ˆä¸æŽ¨è bunï¼‰ã€‚
   - å®‰è£…å¯é€‰ä¾èµ–é¡¹ï¼ˆæŸäº›åœ¨ macOS ä¸Šä½¿ç”¨ Homebrewï¼‰ã€‚

9. **å®Œæˆ**
   - æ€»ç»“ + åŽç»­æ­¥éª¤ï¼ŒåŒ…æ‹¬ç”¨äºŽé¢å¤–åŠŸèƒ½çš„ iOS/Android/macOS åº”ç”¨ã€‚

- å¦‚æžœæœªæ£€æµ‹åˆ° GUIï¼Œå‘å¯¼ä¼šæ‰“å°æŽ§åˆ¶ç•Œé¢çš„ SSH ç«¯å£è½¬å‘è¯´æ˜Žï¼Œè€Œä¸æ˜¯æ‰“å¼€æµè§ˆå™¨ã€‚
- å¦‚æžœæŽ§åˆ¶ç•Œé¢èµ„æºç¼ºå¤±ï¼Œå‘å¯¼ä¼šå°è¯•æž„å»ºå®ƒä»¬ï¼›å›žé€€æ–¹æ¡ˆæ˜¯ `pnpm ui:build`ï¼ˆè‡ªåŠ¨å®‰è£… UI ä¾èµ–ï¼‰ã€‚

## è¿œç¨‹æ¨¡å¼

è¿œç¨‹æ¨¡å¼é…ç½®æœ¬åœ°å®¢æˆ·ç«¯è¿žæŽ¥åˆ°å…¶ä»–ä½ç½®çš„ Gateway ç½‘å…³ã€‚

ä½ å°†è®¾ç½®çš„å†…å®¹ï¼š

- è¿œç¨‹ Gateway ç½‘å…³ URLï¼ˆ`ws://...`ï¼‰
- å¦‚æžœè¿œç¨‹ Gateway ç½‘å…³éœ€è¦è®¤è¯åˆ™éœ€è¦ä»¤ç‰Œï¼ˆæŽ¨èï¼‰

æ³¨æ„äº‹é¡¹ï¼š

- ä¸æ‰§è¡Œè¿œç¨‹å®‰è£…æˆ–å®ˆæŠ¤è¿›ç¨‹æ›´æ”¹ã€‚
- å¦‚æžœ Gateway ç½‘å…³ä»…é™ loopbackï¼Œä½¿ç”¨ SSH éš§é“æˆ– tailnetã€‚
- å‘çŽ°æç¤ºï¼š
  - macOSï¼šBonjourï¼ˆ`dns-sd`ï¼‰
  - Linuxï¼šAvahiï¼ˆ`avahi-browse`ï¼‰

## æ·»åŠ å¦ä¸€ä¸ªæ™ºèƒ½ä½“

ä½¿ç”¨ ` agents add <name>` åˆ›å»ºä¸€ä¸ªå…·æœ‰ç‹¬ç«‹å·¥ä½œåŒºã€ä¼šè¯å’Œè®¤è¯é…ç½®æ–‡ä»¶çš„å•ç‹¬æ™ºèƒ½ä½“ã€‚ä¸å¸¦ `--workspace` è¿è¡Œä¼šå¯åŠ¨å‘å¯¼ã€‚

å®ƒè®¾ç½®çš„å†…å®¹ï¼š

- `agents.list[].name`
- `agents.list[].workspace`
- `agents.list[].agentDir`

æ³¨æ„äº‹é¡¹ï¼š

- é»˜è®¤å·¥ä½œåŒºéµå¾ª `~/./workspace-<agentId>`ã€‚
- æ·»åŠ  `bindings` ä»¥è·¯ç”±å…¥ç«™æ¶ˆæ¯ï¼ˆå‘å¯¼å¯ä»¥æ‰§è¡Œæ­¤æ“ä½œï¼‰ã€‚
- éžäº¤äº’æ ‡å¿—ï¼š`--model`ã€`--agent-dir`ã€`--bind`ã€`--non-interactive`ã€‚

## éžäº¤äº’æ¨¡å¼

ä½¿ç”¨ `--non-interactive` è‡ªåŠ¨åŒ–æˆ–è„šæœ¬åŒ–æ–°æ‰‹å¼•å¯¼ï¼š

```bash
 onboard --non-interactive \
  --mode local \
  --auth-choice apiKey \
  --anthropic-api-key "$ANTHROPIC_API_KEY" \
  --gateway-port 18789 \
  --gateway-bind loopback \
  --install-daemon \
  --daemon-runtime node \
  --skip-skills
```

æ·»åŠ  `--json` ä»¥èŽ·å–æœºå™¨å¯è¯»çš„æ‘˜è¦ã€‚

Gemini ç¤ºä¾‹ï¼š

```bash
 onboard --non-interactive \
  --mode local \
  --auth-choice gemini-api-key \
  --gemini-api-key "$GEMINI_API_KEY" \
  --gateway-port 18789 \
  --gateway-bind loopback
```

Z.AI ç¤ºä¾‹ï¼š

```bash
 onboard --non-interactive \
  --mode local \
  --auth-choice zai-api-key \
  --zai-api-key "$ZAI_API_KEY" \
  --gateway-port 18789 \
  --gateway-bind loopback
```

Vercel AI Gateway ç¤ºä¾‹ï¼š

```bash
 onboard --non-interactive \
  --mode local \
  --auth-choice ai-gateway-api-key \
  --ai-gateway-api-key "$AI_GATEWAY_API_KEY" \
  --gateway-port 18789 \
  --gateway-bind loopback
```

Moonshot ç¤ºä¾‹ï¼š

```bash
 onboard --non-interactive \
  --mode local \
  --auth-choice moonshot-api-key \
  --moonshot-api-key "$MOONSHOT_API_KEY" \
  --gateway-port 18789 \
  --gateway-bind loopback
```

Synthetic ç¤ºä¾‹ï¼š

```bash
 onboard --non-interactive \
  --mode local \
  --auth-choice synthetic-api-key \
  --synthetic-api-key "$SYNTHETIC_API_KEY" \
  --gateway-port 18789 \
  --gateway-bind loopback
```

OpenCode Zen ç¤ºä¾‹ï¼š

```bash
 onboard --non-interactive \
  --mode local \
  --auth-choice opencode-zen \
  --opencode-zen-api-key "$OPENCODE_API_KEY" \
  --gateway-port 18789 \
  --gateway-bind loopback
```

æ·»åŠ æ™ºèƒ½ä½“ï¼ˆéžäº¤äº’ï¼‰ç¤ºä¾‹ï¼š

```bash
 agents add work \
  --workspace ~/./workspace-work \
  --model openai/gpt-5.2 \
  --bind whatsapp:biz \
  --non-interactive \
  --json
```

## Gateway ç½‘å…³å‘å¯¼ RPC

Gateway ç½‘å…³é€šè¿‡ RPC æš´éœ²å‘å¯¼æµç¨‹ï¼ˆ`wizard.start`ã€`wizard.next`ã€`wizard.cancel`ã€`wizard.status`ï¼‰ã€‚
å®¢æˆ·ç«¯ï¼ˆmacOS åº”ç”¨ã€æŽ§åˆ¶ç•Œé¢ï¼‰å¯ä»¥æ¸²æŸ“æ­¥éª¤è€Œæ— éœ€é‡æ–°å®žçŽ°æ–°æ‰‹å¼•å¯¼é€»è¾‘ã€‚

## Signal è®¾ç½®ï¼ˆsignal-cliï¼‰

å‘å¯¼å¯ä»¥ä»Ž GitHub releases å®‰è£… `signal-cli`ï¼š

- ä¸‹è½½é€‚å½“çš„å‘å¸ƒèµ„æºã€‚
- å­˜å‚¨åœ¨ `~/./tools/signal-cli/<version>/` ä¸‹ã€‚
- å°† `channels.signal.cliPath` å†™å…¥ä½ çš„é…ç½®ã€‚

æ³¨æ„äº‹é¡¹ï¼š

- JVM æž„å»ºéœ€è¦ **Java 21**ã€‚
- å¯ç”¨æ—¶ä½¿ç”¨åŽŸç”Ÿæž„å»ºã€‚
- Windows ä½¿ç”¨ WSL2ï¼›signal-cli å®‰è£…åœ¨ WSL å†…éµå¾ª Linux æµç¨‹ã€‚

## å‘å¯¼å†™å…¥çš„å†…å®¹

`~/./.json` ä¸­çš„å…¸åž‹å­—æ®µï¼š

- `agents.defaults.workspace`
- `agents.defaults.model` / `models.providers`ï¼ˆå¦‚æžœé€‰æ‹©äº† Minimaxï¼‰
- `gateway.*`ï¼ˆæ¨¡å¼ã€ç»‘å®šã€è®¤è¯ã€tailscaleï¼‰
- `channels.telegram.botToken`ã€`channels.discord.token`ã€`channels.signal.*`ã€`channels.imessage.*`
- å½“ä½ åœ¨æç¤ºä¸­é€‰æ‹©åŠ å…¥æ—¶çš„æ¸ é“å…è®¸åˆ—è¡¨ï¼ˆSlack/Discord/Matrix/Microsoft Teamsï¼‰ï¼ˆåç§°åœ¨å¯èƒ½æ—¶è§£æžä¸º IDï¼‰ã€‚
- `skills.install.nodeManager`
- `wizard.lastRunAt`
- `wizard.lastRunVersion`
- `wizard.lastRunCommit`
- `wizard.lastRunCommand`
- `wizard.lastRunMode`

` agents add` å†™å…¥ `agents.list[]` å’Œå¯é€‰çš„ `bindings`ã€‚

WhatsApp å‡­è¯å­˜å‚¨åœ¨ `~/./credentials/whatsapp/<accountId>/` ä¸‹ã€‚
ä¼šè¯å­˜å‚¨åœ¨ `~/./agents/<agentId>/sessions/` ä¸‹ã€‚

æŸäº›æ¸ é“ä»¥æ’ä»¶å½¢å¼æä¾›ã€‚å½“ä½ åœ¨æ–°æ‰‹å¼•å¯¼æœŸé—´é€‰æ‹©ä¸€ä¸ªæ—¶ï¼Œå‘å¯¼ä¼šåœ¨é…ç½®ä¹‹å‰æç¤ºå®‰è£…å®ƒï¼ˆnpm æˆ–æœ¬åœ°è·¯å¾„ï¼‰ã€‚

## ç›¸å…³æ–‡æ¡£

- macOS åº”ç”¨æ–°æ‰‹å¼•å¯¼ï¼š[æ–°æ‰‹å¼•å¯¼](/start/onboarding)
- é…ç½®å‚è€ƒï¼š[Gateway ç½‘å…³é…ç½®](/gateway/configuration)
- æä¾›å•†ï¼š[WhatsApp](/channels/whatsapp)ã€[Telegram](/channels/telegram)ã€[Discord](/channels/discord)ã€[Google Chat](/channels/googlechat)ã€[Signal](/channels/signal)ã€[iMessage](/channels/imessage)
- Skillsï¼š[Skills](/tools/skills)ã€[Skills é…ç½®](/tools/skills-config)

