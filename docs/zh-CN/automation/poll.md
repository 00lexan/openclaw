---
read_when:
  - æ·»åŠ æˆ–ä¿®æ”¹æŠ•ç¥¨æ”¯æŒ
  - è°ƒè¯•ä»Ž CLI æˆ– Gateway ç½‘å…³å‘é€çš„æŠ•ç¥¨
summary: é€šè¿‡ Gateway ç½‘å…³ + CLI å‘é€æŠ•ç¥¨
title: æŠ•ç¥¨
x-i18n:
  generated_at: "2026-02-03T07:43:12Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 760339865d27ec40def7996cac1d294d58ab580748ad6b32cc34d285d0314eaf
  source_path: automation/poll.md
  workflow: 15
---

# æŠ•ç¥¨

## æ”¯æŒçš„æ¸ é“

- WhatsAppï¼ˆWeb æ¸ é“ï¼‰
- Discord
- MS Teamsï¼ˆAdaptive Cardsï¼‰

## CLI

```bash
# WhatsApp
 message poll --target +15555550123 \
  --poll-question "Lunch today?" --poll-option "Yes" --poll-option "No" --poll-option "Maybe"
 message poll --target 123456789@g.us \
  --poll-question "Meeting time?" --poll-option "10am" --poll-option "2pm" --poll-option "4pm" --poll-multi

# Discord
 message poll --channel discord --target channel:123456789 \
  --poll-question "Snack?" --poll-option "Pizza" --poll-option "Sushi"
 message poll --channel discord --target channel:123456789 \
  --poll-question "Plan?" --poll-option "A" --poll-option "B" --poll-duration-hours 48

# MS Teams
 message poll --channel msteams --target conversation:19:abc@thread.tacv2 \
  --poll-question "Lunch?" --poll-option "Pizza" --poll-option "Sushi"
```

é€‰é¡¹ï¼š

- `--channel`ï¼š`whatsapp`ï¼ˆé»˜è®¤ï¼‰ã€`discord` æˆ– `msteams`
- `--poll-multi`ï¼šå…è®¸é€‰æ‹©å¤šä¸ªé€‰é¡¹
- `--poll-duration-hours`ï¼šä»…é™ Discordï¼ˆçœç•¥æ—¶é»˜è®¤ä¸º 24ï¼‰

## Gateway ç½‘å…³ RPC

æ–¹æ³•ï¼š`poll`

å‚æ•°ï¼š

- `to`ï¼ˆå­—ç¬¦ä¸²ï¼Œå¿…éœ€ï¼‰
- `question`ï¼ˆå­—ç¬¦ä¸²ï¼Œå¿…éœ€ï¼‰
- `options`ï¼ˆå­—ç¬¦ä¸²æ•°ç»„ï¼Œå¿…éœ€ï¼‰
- `maxSelections`ï¼ˆæ•°å­—ï¼Œå¯é€‰ï¼‰
- `durationHours`ï¼ˆæ•°å­—ï¼Œå¯é€‰ï¼‰
- `channel`ï¼ˆå­—ç¬¦ä¸²ï¼Œå¯é€‰ï¼Œé»˜è®¤ï¼š`whatsapp`ï¼‰
- `idempotencyKey`ï¼ˆå­—ç¬¦ä¸²ï¼Œå¿…éœ€ï¼‰

## æ¸ é“å·®å¼‚

- WhatsAppï¼š2-12 ä¸ªé€‰é¡¹ï¼Œ`maxSelections` å¿…é¡»åœ¨é€‰é¡¹æ•°é‡èŒƒå›´å†…ï¼Œå¿½ç•¥ `durationHours`ã€‚
- Discordï¼š2-10 ä¸ªé€‰é¡¹ï¼Œ`durationHours` é™åˆ¶åœ¨ 1-768 å°æ—¶ä¹‹é—´ï¼ˆé»˜è®¤ 24ï¼‰ã€‚`maxSelections > 1` å¯ç”¨å¤šé€‰ï¼›Discord ä¸æ”¯æŒä¸¥æ ¼çš„é€‰æ‹©æ•°é‡é™åˆ¶ã€‚
- MS Teamsï¼šAdaptive Card æŠ•ç¥¨ï¼ˆç”±  ç®¡ç†ï¼‰ã€‚æ— åŽŸç”ŸæŠ•ç¥¨ APIï¼›`durationHours` è¢«å¿½ç•¥ã€‚

## æ™ºèƒ½ä½“å·¥å…·ï¼ˆMessageï¼‰

ä½¿ç”¨ `message` å·¥å…·çš„ `poll` æ“ä½œï¼ˆ`to`ã€`pollQuestion`ã€`pollOption`ï¼Œå¯é€‰ `pollMulti`ã€`pollDurationHours`ã€`channel`ï¼‰ã€‚

æ³¨æ„ï¼šDiscord æ²¡æœ‰"æ°å¥½é€‰æ‹© N ä¸ª"æ¨¡å¼ï¼›`pollMulti` æ˜ å°„ä¸ºå¤šé€‰ã€‚
Teams æŠ•ç¥¨ä»¥ Adaptive Cards å½¢å¼æ¸²æŸ“ï¼Œéœ€è¦ Gateway ç½‘å…³ä¿æŒåœ¨çº¿
ä»¥å°†æŠ•ç¥¨è®°å½•åˆ° `~/./msteams-polls.json`ã€‚


