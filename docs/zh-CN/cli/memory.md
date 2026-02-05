---
read_when:
  - ä½ æƒ³è¦ç´¢å¼•æˆ–æœç´¢è¯­ä¹‰è®°å¿†
  - ä½ æ­£åœ¨è°ƒè¯•è®°å¿†å¯ç”¨æ€§æˆ–ç´¢å¼•é—®é¢˜
summary: "` memory`ï¼ˆstatus/index/searchï¼‰çš„ CLI å‚è€ƒ"
title: memory
x-i18n:
  generated_at: "2026-02-01T20:21:11Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 95a9e94306f95be2218a909be59be5bbaa5d31322b71b23564c71a89c3a3941a
  source_path: cli/memory.md
  workflow: 14
---

# ` memory`

ç®¡ç†è¯­ä¹‰è®°å¿†çš„ç´¢å¼•å’Œæœç´¢ã€‚
ç”±æ´»è·ƒçš„è®°å¿†æ’ä»¶æä¾›ï¼ˆé»˜è®¤ï¼š`memory-core`ï¼›è®¾ç½® `plugins.slots.memory = "none"` å¯ç¦ç”¨ï¼‰ã€‚

ç›¸å…³å†…å®¹ï¼š

- è®°å¿†æ¦‚å¿µï¼š[è®°å¿†](/concepts/memory)
- æ’ä»¶ï¼š[æ’ä»¶](/plugins)

## ç¤ºä¾‹

```bash
 memory status
 memory status --deep
 memory status --deep --index
 memory status --deep --index --verbose
 memory index
 memory index --verbose
 memory search "release checklist"
 memory status --agent main
 memory index --agent main --verbose
```

## é€‰é¡¹

é€šç”¨é€‰é¡¹ï¼š

- `--agent <id>`ï¼šé™å®šåˆ°å•ä¸ªæ™ºèƒ½ä½“ï¼ˆé»˜è®¤ï¼šæ‰€æœ‰å·²é…ç½®çš„æ™ºèƒ½ä½“ï¼‰ã€‚
- `--verbose`ï¼šåœ¨æŽ¢æµ‹å’Œç´¢å¼•æœŸé—´è¾“å‡ºè¯¦ç»†æ—¥å¿—ã€‚

è¯´æ˜Žï¼š

- `memory status --deep` æŽ¢æµ‹å‘é‡å­˜å‚¨å’ŒåµŒå…¥æ¨¡åž‹çš„å¯ç”¨æ€§ã€‚
- `memory status --deep --index` åœ¨å­˜å‚¨æœ‰æœªåŒæ­¥å˜æ›´æ—¶è¿è¡Œé‡æ–°ç´¢å¼•ã€‚
- `memory index --verbose` æ‰“å°æ¯ä¸ªé˜¶æ®µçš„è¯¦ç»†ä¿¡æ¯ï¼ˆæä¾›å•†ã€æ¨¡åž‹ã€æ•°æ®æºã€æ‰¹å¤„ç†æ´»åŠ¨ï¼‰ã€‚
- `memory status` åŒ…å«é€šè¿‡ `memorySearch.extraPaths` é…ç½®çš„æ‰€æœ‰é¢å¤–è·¯å¾„ã€‚

