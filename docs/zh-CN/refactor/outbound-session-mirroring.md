---
description: Track outbound session mirroring refactor notes, decisions, tests, and open items.
title: å‡ºç«™ä¼šè¯é•œåƒé‡æž„ï¼ˆIssue
x-i18n:
  generated_at: "2026-02-03T07:53:51Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: b88a72f36f7b6d8a71fde9d014c0a87e9a8b8b0d449b67119cf3b6f414fa2b81
  source_path: refactor/outbound-session-mirroring.md
  workflow: 15
---

# å‡ºç«™ä¼šè¯é•œåƒé‡æž„ï¼ˆIssue #1520ï¼‰

## çŠ¶æ€

- è¿›è¡Œä¸­ã€‚
- æ ¸å¿ƒ + æ’ä»¶æ¸ é“è·¯ç”±å·²æ›´æ–°ä»¥æ”¯æŒå‡ºç«™é•œåƒã€‚
- Gateway ç½‘å…³å‘é€çŽ°åœ¨åœ¨çœç•¥ sessionKey æ—¶æ´¾ç”Ÿç›®æ ‡ä¼šè¯ã€‚

## èƒŒæ™¯

å‡ºç«™å‘é€è¢«é•œåƒåˆ°*å½“å‰*æ™ºèƒ½ä½“ä¼šè¯ï¼ˆå·¥å…·ä¼šè¯é”®ï¼‰è€Œä¸æ˜¯ç›®æ ‡æ¸ é“ä¼šè¯ã€‚å…¥ç«™è·¯ç”±ä½¿ç”¨æ¸ é“/å¯¹ç­‰æ–¹ä¼šè¯é”®ï¼Œå› æ­¤å‡ºç«™å“åº”è½åœ¨é”™è¯¯çš„ä¼šè¯ä¸­ï¼Œé¦–æ¬¡è”ç³»çš„ç›®æ ‡é€šå¸¸ç¼ºå°‘ä¼šè¯æ¡ç›®ã€‚

## ç›®æ ‡

- å°†å‡ºç«™æ¶ˆæ¯é•œåƒåˆ°ç›®æ ‡æ¸ é“ä¼šè¯é”®ã€‚
- åœ¨ç¼ºå¤±æ—¶ä¸ºå‡ºç«™åˆ›å»ºä¼šè¯æ¡ç›®ã€‚
- ä¿æŒçº¿ç¨‹/è¯é¢˜ä½œç”¨åŸŸä¸Žå…¥ç«™ä¼šè¯é”®å¯¹é½ã€‚
- æ¶µç›–æ ¸å¿ƒæ¸ é“åŠ å†…ç½®æ‰©å±•ã€‚

## å®žçŽ°æ‘˜è¦

- æ–°çš„å‡ºç«™ä¼šè¯è·¯ç”±è¾…åŠ©å™¨ï¼š
  - `src/infra/outbound/outbound-session.ts`
  - `resolveOutboundSessionRoute` ä½¿ç”¨ `buildAgentSessionKey`ï¼ˆdmScope + identityLinksï¼‰æž„å»ºç›®æ ‡ sessionKeyã€‚
  - `ensureOutboundSessionEntry` é€šè¿‡ `recordSessionMetaFromInbound` å†™å…¥æœ€å°çš„ `MsgContext`ã€‚
- `runMessageAction`ï¼ˆå‘é€ï¼‰æ´¾ç”Ÿç›®æ ‡ sessionKey å¹¶å°†å…¶ä¼ é€’ç»™ `executeSendAction` è¿›è¡Œé•œåƒã€‚
- `message-tool` ä¸å†ç›´æŽ¥é•œåƒï¼›å®ƒåªä»Žå½“å‰ä¼šè¯é”®è§£æž agentIdã€‚
- æ’ä»¶å‘é€è·¯å¾„ä½¿ç”¨æ´¾ç”Ÿçš„ sessionKey é€šè¿‡ `appendAssistantMessageToSessionTranscript` è¿›è¡Œé•œåƒã€‚
- Gateway ç½‘å…³å‘é€åœ¨æœªæä¾›æ—¶æ´¾ç”Ÿç›®æ ‡ä¼šè¯é”®ï¼ˆé»˜è®¤æ™ºèƒ½ä½“ï¼‰ï¼Œå¹¶ç¡®ä¿ä¼šè¯æ¡ç›®ã€‚

## çº¿ç¨‹/è¯é¢˜å¤„ç†

- Slackï¼šreplyTo/threadId -> `resolveThreadSessionKeys`ï¼ˆåŽç¼€ï¼‰ã€‚
- Discordï¼šthreadId/replyTo -> `resolveThreadSessionKeys`ï¼Œ`useSuffix=false` ä»¥åŒ¹é…å…¥ç«™ï¼ˆçº¿ç¨‹é¢‘é“ id å·²ç»ä½œç”¨åŸŸä¼šè¯ï¼‰ã€‚
- Telegramï¼šè¯é¢˜ ID é€šè¿‡ `buildTelegramGroupPeerId` æ˜ å°„åˆ° `chatId:topic:<id>`ã€‚

## æ¶µç›–çš„æ‰©å±•

- Matrixã€MS Teamsã€Mattermostã€BlueBubblesã€Nextcloud Talkã€Zaloã€Zalo Personalã€Nostrã€Tlonã€‚
- æ³¨æ„ï¼š
  - Mattermost ç›®æ ‡çŽ°åœ¨ä¸ºç§ä¿¡ä¼šè¯é”®è·¯ç”±åŽ»é™¤ `@`ã€‚
  - Zalo Personal å¯¹ 1:1 ç›®æ ‡ä½¿ç”¨ç§ä¿¡å¯¹ç­‰æ–¹ç±»åž‹ï¼ˆä»…å½“å­˜åœ¨ `group:` æ—¶æ‰ä½¿ç”¨ç¾¤ç»„ï¼‰ã€‚
  - BlueBubbles ç¾¤ç»„ç›®æ ‡åŽ»é™¤ `chat_*` å‰ç¼€ä»¥åŒ¹é…å…¥ç«™ä¼šè¯é”®ã€‚
  - Slack è‡ªåŠ¨çº¿ç¨‹é•œåƒä¸åŒºåˆ†å¤§å°å†™åœ°åŒ¹é…é¢‘é“ idã€‚
  - Gateway ç½‘å…³å‘é€åœ¨é•œåƒå‰å°†æä¾›çš„ä¼šè¯é”®è½¬æ¢ä¸ºå°å†™ã€‚

## å†³ç­–

- **Gateway ç½‘å…³å‘é€ä¼šè¯æ´¾ç”Ÿ**ï¼šå¦‚æžœæä¾›äº† `sessionKey`ï¼Œåˆ™ä½¿ç”¨å®ƒã€‚å¦‚æžœçœç•¥ï¼Œä»Žç›®æ ‡ + é»˜è®¤æ™ºèƒ½ä½“æ´¾ç”Ÿ sessionKey å¹¶é•œåƒåˆ°é‚£é‡Œã€‚
- **ä¼šè¯æ¡ç›®åˆ›å»º**ï¼šå§‹ç»ˆä½¿ç”¨ `recordSessionMetaFromInbound`ï¼Œ`Provider/From/To/ChatType/AccountId/Originating*` ä¸Žå…¥ç«™æ ¼å¼å¯¹é½ã€‚
- **ç›®æ ‡è§„èŒƒåŒ–**ï¼šå‡ºç«™è·¯ç”±åœ¨å¯ç”¨æ—¶ä½¿ç”¨è§£æžåŽçš„ç›®æ ‡ï¼ˆ`resolveChannelTarget` ä¹‹åŽï¼‰ã€‚
- **ä¼šè¯é”®å¤§å°å†™**ï¼šåœ¨å†™å…¥å’Œè¿ç§»æœŸé—´å°†ä¼šè¯é”®è§„èŒƒåŒ–ä¸ºå°å†™ã€‚

## æ·»åŠ /æ›´æ–°çš„æµ‹è¯•

- `src/infra/outbound/outbound-session.test.ts`
  - Slack çº¿ç¨‹ä¼šè¯é”®ã€‚
  - Telegram è¯é¢˜ä¼šè¯é”®ã€‚
  - dmScope identityLinks ä¸Ž Discordã€‚
- `src/agents/tools/message-tool.test.ts`
  - ä»Žä¼šè¯é”®æ´¾ç”Ÿ agentIdï¼ˆä¸ä¼ é€’ sessionKeyï¼‰ã€‚
- `src/gateway/server-methods/send.test.ts`
  - åœ¨çœç•¥æ—¶æ´¾ç”Ÿä¼šè¯é”®å¹¶åˆ›å»ºä¼šè¯æ¡ç›®ã€‚

## å¾…å¤„ç†é¡¹ç›® / åŽç»­è·Ÿè¿›

- è¯­éŸ³é€šè¯æ’ä»¶ä½¿ç”¨è‡ªå®šä¹‰çš„ `voice:<phone>` ä¼šè¯é”®ã€‚å‡ºç«™æ˜ å°„åœ¨è¿™é‡Œæ²¡æœ‰æ ‡å‡†åŒ–ï¼›å¦‚æžœ message-tool åº”è¯¥æ”¯æŒè¯­éŸ³é€šè¯å‘é€ï¼Œè¯·æ·»åŠ æ˜¾å¼æ˜ å°„ã€‚
- ç¡®è®¤æ˜¯å¦æœ‰ä»»ä½•å¤–éƒ¨æ’ä»¶ä½¿ç”¨å†…ç½®é›†ä¹‹å¤–çš„éžæ ‡å‡† `From/To` æ ¼å¼ã€‚

## æ¶‰åŠçš„æ–‡ä»¶

- `src/infra/outbound/outbound-session.ts`
- `src/infra/outbound/outbound-send-service.ts`
- `src/infra/outbound/message-action-runner.ts`
- `src/agents/tools/message-tool.ts`
- `src/gateway/server-methods/send.ts`
- æµ‹è¯•ï¼š
  - `src/infra/outbound/outbound-session.test.ts`
  - `src/agents/tools/message-tool.test.ts`
  - `src/gateway/server-methods/send.test.ts`


