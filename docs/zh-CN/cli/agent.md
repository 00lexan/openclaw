---
read_when:
  - ä½ æƒ³ä»Žè„šæœ¬è¿è¡Œä¸€ä¸ªæ™ºèƒ½ä½“å›žåˆï¼ˆå¯é€‰å‘é€å›žå¤ï¼‰
summary: "` agent` çš„ CLI å‚è€ƒï¼ˆé€šè¿‡ Gateway ç½‘å…³å‘é€ä¸€ä¸ªæ™ºèƒ½ä½“å›žåˆï¼‰"
title: agent
x-i18n:
  generated_at: "2026-02-03T07:44:38Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: dcf12fb94e207c68645f58235792596d65afecf8216b8f9ab3acb01e03b50a33
  source_path: cli/agent.md
  workflow: 15
---

# ` agent`

é€šè¿‡ Gateway ç½‘å…³è¿è¡Œæ™ºèƒ½ä½“å›žåˆï¼ˆä½¿ç”¨ `--local` è¿›è¡ŒåµŒå…¥å¼è¿è¡Œï¼‰ã€‚ä½¿ç”¨ `--agent <id>` ç›´æŽ¥æŒ‡å®šå·²é…ç½®çš„æ™ºèƒ½ä½“ã€‚

ç›¸å…³å†…å®¹ï¼š

- æ™ºèƒ½ä½“å‘é€å·¥å…·ï¼š[Agent send](/tools/agent-send)

## ç¤ºä¾‹

```bash
 agent --to +15555550123 --message "status update" --deliver
 agent --agent ops --message "Summarize logs"
 agent --session-id 1234 --message "Summarize inbox" --thinking medium
 agent --agent ops --message "Generate report" --deliver --reply-channel slack --reply-to "#reports"
```


