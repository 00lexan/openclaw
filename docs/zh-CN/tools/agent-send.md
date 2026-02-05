---
read_when:
  - æ·»åŠ æˆ–ä¿®æ”¹æ™ºèƒ½ä½“ CLI å…¥å£ç‚¹
summary: ç›´æŽ¥ ` agent` CLI è¿è¡Œï¼ˆå¸¦å¯é€‰æŠ•é€’ï¼‰
title: Agent Send
x-i18n:
  generated_at: "2026-02-03T07:54:52Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: a84d6a304333eebe155da2bf24cf5fc0482022a0a48ab34aa1465cd6e667022d
  source_path: tools/agent-send.md
  workflow: 15
---

# ` agent`ï¼ˆç›´æŽ¥æ™ºèƒ½ä½“è¿è¡Œï¼‰

` agent` è¿è¡Œå•ä¸ªæ™ºèƒ½ä½“å›žåˆï¼Œæ— éœ€å…¥ç«™èŠå¤©æ¶ˆæ¯ã€‚
é»˜è®¤æƒ…å†µä¸‹å®ƒ**é€šè¿‡ Gateway ç½‘å…³**è¿è¡Œï¼›æ·»åŠ  `--local` ä»¥å¼ºåˆ¶åœ¨å½“å‰æœºå™¨ä¸Šä½¿ç”¨åµŒå…¥å¼è¿è¡Œæ—¶ã€‚

## è¡Œä¸º

- å¿…éœ€ï¼š`--message <text>`
- ä¼šè¯é€‰æ‹©ï¼š
  - `--to <dest>` æ´¾ç”Ÿä¼šè¯é”®ï¼ˆç¾¤ç»„/é¢‘é“ç›®æ ‡ä¿æŒéš”ç¦»ï¼›ç›´æŽ¥èŠå¤©æŠ˜å åˆ° `main`ï¼‰ï¼Œ**æˆ–**
  - `--session-id <id>` é€šè¿‡ ID é‡ç”¨çŽ°æœ‰ä¼šè¯ï¼Œ**æˆ–**
  - `--agent <id>` ç›´æŽ¥å®šä½å·²é…ç½®çš„æ™ºèƒ½ä½“ï¼ˆä½¿ç”¨è¯¥æ™ºèƒ½ä½“çš„ `main` ä¼šè¯é”®ï¼‰
- è¿è¡Œä¸Žæ­£å¸¸å…¥ç«™å›žå¤ç›¸åŒçš„åµŒå…¥å¼æ™ºèƒ½ä½“è¿è¡Œæ—¶ã€‚
- æ€è€ƒ/è¯¦ç»†æ ‡å¿—æŒä¹…åŒ–åˆ°ä¼šè¯å­˜å‚¨ä¸­ã€‚
- è¾“å‡ºï¼š
  - é»˜è®¤ï¼šæ‰“å°å›žå¤æ–‡æœ¬ï¼ˆåŠ ä¸Š `MEDIA:<url>` è¡Œï¼‰
  - `--json`ï¼šæ‰“å°ç»“æž„åŒ–è´Ÿè½½ + å…ƒæ•°æ®
- å¯é€‰ä½¿ç”¨ `--deliver` + `--channel` å°†å›žå¤æŠ•é€’å›žæ¸ é“ï¼ˆç›®æ ‡æ ¼å¼ä¸Ž ` message --target` åŒ¹é…ï¼‰ã€‚
- ä½¿ç”¨ `--reply-channel`/`--reply-to`/`--reply-account` è¦†ç›–æŠ•é€’è€Œä¸æ›´æ”¹ä¼šè¯ã€‚

å¦‚æžœ Gateway ç½‘å…³ä¸å¯è¾¾ï¼ŒCLI ä¼š**å›žé€€**åˆ°åµŒå…¥å¼æœ¬åœ°è¿è¡Œã€‚

## ç¤ºä¾‹

```bash
 agent --to +15555550123 --message "status update"
 agent --agent ops --message "Summarize logs"
 agent --session-id 1234 --message "Summarize inbox" --thinking medium
 agent --to +15555550123 --message "Trace logs" --verbose on --json
 agent --to +15555550123 --message "Summon reply" --deliver
 agent --agent ops --message "Generate report" --deliver --reply-channel slack --reply-to "#reports"
```

## æ ‡å¿—

- `--local`ï¼šæœ¬åœ°è¿è¡Œï¼ˆéœ€è¦ä½ çš„ shell ä¸­æœ‰æ¨¡åž‹æä¾›å•† API å¯†é’¥ï¼‰
- `--deliver`ï¼šå°†å›žå¤å‘é€åˆ°æ‰€é€‰æ¸ é“
- `--channel`ï¼šæŠ•é€’æ¸ é“ï¼ˆ`whatsapp|telegram|discord|googlechat|slack|signal|imessage`ï¼Œé»˜è®¤ï¼š`whatsapp`ï¼‰
- `--reply-to`ï¼šæŠ•é€’ç›®æ ‡è¦†ç›–
- `--reply-channel`ï¼šæŠ•é€’æ¸ é“è¦†ç›–
- `--reply-account`ï¼šæŠ•é€’è´¦æˆ· ID è¦†ç›–
- `--thinking <off|minimal|low|medium|high|xhigh>`ï¼šæŒä¹…åŒ–æ€è€ƒçº§åˆ«ï¼ˆä»…é™ GPT-5.2 + Codex æ¨¡åž‹ï¼‰
- `--verbose <on|full|off>`ï¼šæŒä¹…åŒ–è¯¦ç»†çº§åˆ«
- `--timeout <seconds>`ï¼šè¦†ç›–æ™ºèƒ½ä½“è¶…æ—¶
- `--json`ï¼šè¾“å‡ºç»“æž„åŒ– JSON

