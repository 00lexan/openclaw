---
read_when:
  - ä½¿ç”¨è¯­éŸ³é€šè¯æ’ä»¶å¹¶æƒ³äº†è§£ CLI å…¥å£
  - æƒ³è¦ `voicecall call|continue|status|tail|expose` çš„å¿«é€Ÿç¤ºä¾‹
summary: è¯­éŸ³é€šè¯æ’ä»¶å‘½ä»¤çš„ ` voicecall` CLI å‚è€ƒ
title: voicecall
x-i18n:
  generated_at: "2026-02-01T20:21:37Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: d93aaee6f6f5c9ac468d8d2905cb23f0f2db75809408cb305c055505be9936f2
  source_path: cli/voicecall.md
  workflow: 14
---

# ` voicecall`

`voicecall` æ˜¯ä¸€ä¸ªç”±æ’ä»¶æä¾›çš„å‘½ä»¤ã€‚åªæœ‰åœ¨å®‰è£…å¹¶å¯ç”¨äº†è¯­éŸ³é€šè¯æ’ä»¶æ—¶æ‰ä¼šå‡ºçŽ°ã€‚

ä¸»è¦æ–‡æ¡£ï¼š

- è¯­éŸ³é€šè¯æ’ä»¶ï¼š[è¯­éŸ³é€šè¯](/plugins/voice-call)

## å¸¸ç”¨å‘½ä»¤

```bash
 voicecall status --call-id <id>
 voicecall call --to "+15555550123" --message "Hello" --mode notify
 voicecall continue --call-id <id> --message "Any questions?"
 voicecall end --call-id <id>
```

## æš´éœ² Webhookï¼ˆTailscaleï¼‰

```bash
 voicecall expose --mode serve
 voicecall expose --mode funnel
 voicecall unexpose
```

å®‰å…¨æç¤ºï¼šä»…å°† webhook ç«¯ç‚¹æš´éœ²ç»™ä½ ä¿¡ä»»çš„ç½‘ç»œã€‚å°½å¯èƒ½ä¼˜å…ˆä½¿ç”¨ Tailscale Serve è€Œéž Funnelã€‚

