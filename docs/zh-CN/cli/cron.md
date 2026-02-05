---
read_when:
  - ä½ éœ€è¦å®šæ—¶ä½œä¸šå’Œå”¤é†’åŠŸèƒ½
  - ä½ æ­£åœ¨è°ƒè¯• cron æ‰§è¡Œå’Œæ—¥å¿—
summary: "` cron` çš„ CLI å‚è€ƒï¼ˆè°ƒåº¦å’Œè¿è¡ŒåŽå°ä½œä¸šï¼‰"
title: cron
x-i18n:
  generated_at: "2026-02-03T07:44:47Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: bc9317c824f3b6339df657cc269961d9b5f121da65ec2b23a07d454e6d611135
  source_path: cli/cron.md
  workflow: 15
---

# ` cron`

ç®¡ç† Gateway ç½‘å…³è°ƒåº¦å™¨çš„ cron ä½œä¸šã€‚

ç›¸å…³å†…å®¹ï¼š

- Cron ä½œä¸šï¼š[Cron ä½œä¸š](/automation/cron-jobs)

æç¤ºï¼šè¿è¡Œ ` cron --help` æŸ¥çœ‹å®Œæ•´çš„å‘½ä»¤é›†ã€‚

è¯´æ˜Žï¼šéš”ç¦»å¼ `cron add` ä»»åŠ¡é»˜è®¤ä½¿ç”¨ `--announce` æŠ•é€’æ‘˜è¦ã€‚ä½¿ç”¨ `--no-deliver` ä»…å†…éƒ¨è¿è¡Œã€‚
`--deliver` ä»ä½œä¸º `--announce` çš„å¼ƒç”¨åˆ«åä¿ç•™ã€‚

è¯´æ˜Žï¼šä¸€æ¬¡æ€§ï¼ˆ`--at`ï¼‰ä»»åŠ¡æˆåŠŸåŽé»˜è®¤åˆ é™¤ã€‚ä½¿ç”¨ `--keep-after-run` ä¿ç•™ã€‚

## å¸¸è§ç¼–è¾‘

æ›´æ–°æŠ•é€’è®¾ç½®è€Œä¸æ›´æ”¹æ¶ˆæ¯ï¼š

```bash
 cron edit <job-id> --announce --channel telegram --to "123456789"
```

ä¸ºéš”ç¦»çš„ä½œä¸šç¦ç”¨æŠ•é€’ï¼š

```bash
 cron edit <job-id> --no-deliver
```


