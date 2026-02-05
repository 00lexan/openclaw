---
read_when:
  - å¼€å‘ Telegram æˆ– grammY ç›¸å…³åŠŸèƒ½æ—¶
summary: é€šè¿‡ grammY é›†æˆ Telegram Bot APIï¼Œé™„è®¾ç½®è¯´æ˜Ž
title: grammY
x-i18n:
  generated_at: "2026-02-03T10:03:55Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: ea7ef23e6d77801f4ef5fc56685ef4470f79f5aecab448d644a72cbab53521b7
  source_path: channels/grammy.md
  workflow: 15
---

# grammY é›†æˆï¼ˆTelegram Bot APIï¼‰

# ä¸ºä»€ä¹ˆé€‰æ‹© grammY

- ä»¥ TS ä¸ºæ ¸å¿ƒçš„ Bot API å®¢æˆ·ç«¯ï¼Œå†…ç½®é•¿è½®è¯¢ + webhook è¾…åŠ©å·¥å…·ã€ä¸­é—´ä»¶ã€é”™è¯¯å¤„ç†å’Œé€ŸçŽ‡é™åˆ¶å™¨ã€‚
- åª’ä½“å¤„ç†è¾…åŠ©å·¥å…·æ¯”æ‰‹åŠ¨ç¼–å†™ fetch + FormData æ›´ç®€æ´ï¼›æ”¯æŒæ‰€æœ‰ Bot API æ–¹æ³•ã€‚
- å¯æ‰©å±•ï¼šé€šè¿‡è‡ªå®šä¹‰ fetch æ”¯æŒä»£ç†ï¼Œå¯é€‰çš„ä¼šè¯ä¸­é—´ä»¶ï¼Œç±»åž‹å®‰å…¨çš„ä¸Šä¸‹æ–‡ã€‚

# æˆ‘ä»¬å‘å¸ƒçš„å†…å®¹

- **å•ä¸€å®¢æˆ·ç«¯è·¯å¾„ï¼š** ç§»é™¤äº†åŸºäºŽ fetch çš„å®žçŽ°ï¼›grammY çŽ°åœ¨æ˜¯å”¯ä¸€çš„ Telegram å®¢æˆ·ç«¯ï¼ˆå‘é€ + Gateway ç½‘å…³ï¼‰ï¼Œé»˜è®¤å¯ç”¨ grammY throttlerã€‚
- **Gateway ç½‘å…³ï¼š** `monitorTelegramProvider` æž„å»º grammY `Bot`ï¼ŒæŽ¥å…¥ mention/allowlist ç½‘å…³æŽ§åˆ¶ï¼Œé€šè¿‡ `getFile`/`download` ä¸‹è½½åª’ä½“ï¼Œå¹¶ä½¿ç”¨ `sendMessage/sendPhoto/sendVideo/sendAudio/sendDocument` å‘é€å›žå¤ã€‚é€šè¿‡ `webhookCallback` æ”¯æŒé•¿è½®è¯¢æˆ– webhookã€‚
- **ä»£ç†ï¼š** å¯é€‰çš„ `channels.telegram.proxy` é€šè¿‡ grammY çš„ `client.baseFetch` ä½¿ç”¨ `undici.ProxyAgent`ã€‚
- **Webhook æ”¯æŒï¼š** `webhook-set.ts` å°è£…äº† `setWebhook/deleteWebhook`ï¼›`webhook.ts` æ‰˜ç®¡å›žè°ƒï¼Œæ”¯æŒå¥åº·æ£€æŸ¥å’Œä¼˜é›…å…³é—­ã€‚å½“è®¾ç½®äº† `channels.telegram.webhookUrl` + `channels.telegram.webhookSecret` æ—¶ï¼ŒGateway ç½‘å…³å¯ç”¨ webhook æ¨¡å¼ï¼ˆå¦åˆ™ä½¿ç”¨é•¿è½®è¯¢ï¼‰ã€‚
- **ä¼šè¯ï¼š** ç§èŠæŠ˜å åˆ°æ™ºèƒ½ä½“ä¸»ä¼šè¯ï¼ˆ`agent:<agentId>:<mainKey>`ï¼‰ï¼›ç¾¤ç»„ä½¿ç”¨ `agent:<agentId>:telegram:group:<chatId>`ï¼›å›žå¤è·¯ç”±å›žåŒä¸€æ¸ é“ã€‚
- **é…ç½®é€‰é¡¹ï¼š** `channels.telegram.botToken`ã€`channels.telegram.dmPolicy`ã€`channels.telegram.groups`ï¼ˆallowlist + mention é»˜è®¤å€¼ï¼‰ã€`channels.telegram.allowFrom`ã€`channels.telegram.groupAllowFrom`ã€`channels.telegram.groupPolicy`ã€`channels.telegram.mediaMaxMb`ã€`channels.telegram.linkPreview`ã€`channels.telegram.proxy`ã€`channels.telegram.webhookSecret`ã€`channels.telegram.webhookUrl`ã€‚
- **è‰ç¨¿æµå¼ä¼ è¾“ï¼š** å¯é€‰çš„ `channels.telegram.streamMode` åœ¨ç§æœ‰è¯é¢˜èŠå¤©ä¸­ä½¿ç”¨ `sendMessageDraft`ï¼ˆBot API 9.3+ï¼‰ã€‚è¿™ä¸Žæ¸ é“åˆ†å—æµå¼ä¼ è¾“æ˜¯åˆ†å¼€çš„ã€‚
- **æµ‹è¯•ï¼š** grammY mock è¦†ç›–äº†ç§ä¿¡ + ç¾¤ç»„ mention ç½‘å…³æŽ§åˆ¶å’Œå‡ºç«™å‘é€ï¼›æ¬¢è¿Žæ·»åŠ æ›´å¤šåª’ä½“/webhook æµ‹è¯•ç”¨ä¾‹ã€‚

å¾…è§£å†³é—®é¢˜

- å¦‚æžœé‡åˆ° Bot API 429 é”™è¯¯ï¼Œè€ƒè™‘ä½¿ç”¨å¯é€‰çš„ grammY æ’ä»¶ï¼ˆthrottlerï¼‰ã€‚
- æ·»åŠ æ›´å¤šç»“æž„åŒ–åª’ä½“æµ‹è¯•ï¼ˆè´´çº¸ã€è¯­éŸ³æ¶ˆæ¯ï¼‰ã€‚
- ä½¿ webhook ç›‘å¬ç«¯å£å¯é…ç½®ï¼ˆç›®å‰å›ºå®šä¸º 8787ï¼Œé™¤éžé€šè¿‡ Gateway ç½‘å…³é…ç½®ï¼‰ã€‚


