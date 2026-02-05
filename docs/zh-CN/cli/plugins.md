---
read_when:
  - ä½ æƒ³å®‰è£…æˆ–ç®¡ç†è¿›ç¨‹å†… Gateway ç½‘å…³æ’ä»¶
  - ä½ æƒ³è°ƒè¯•æ’ä»¶åŠ è½½å¤±è´¥é—®é¢˜
summary: "` plugins` çš„ CLI å‚è€ƒï¼ˆåˆ—å‡ºã€å®‰è£…ã€å¯ç”¨/ç¦ç”¨ã€è¯Šæ–­ï¼‰"
title: plugins
x-i18n:
  generated_at: "2026-02-03T07:45:08Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: c6bf76b1e766b912ec30a0101d455151c88f1a778bffa121cdd1d0b4fbe73e1c
  source_path: cli/plugins.md
  workflow: 15
---

# ` plugins`

ç®¡ç† Gateway ç½‘å…³æ’ä»¶/æ‰©å±•ï¼ˆè¿›ç¨‹å†…åŠ è½½ï¼‰ã€‚

ç›¸å…³å†…å®¹ï¼š

- æ’ä»¶ç³»ç»Ÿï¼š[æ’ä»¶](/plugin)
- æ’ä»¶æ¸…å• + æ¨¡å¼ï¼š[æ’ä»¶æ¸…å•](/plugins/manifest)
- å®‰å…¨åŠ å›ºï¼š[å®‰å…¨](/gateway/security)

## å‘½ä»¤

```bash
 plugins list
 plugins info <id>
 plugins enable <id>
 plugins disable <id>
 plugins doctor
 plugins update <id>
 plugins update --all
```

å†…ç½®æ’ä»¶éš  ä¸€èµ·å‘å¸ƒï¼Œä½†é»˜è®¤ç¦ç”¨ã€‚ä½¿ç”¨ `plugins enable` æ¥æ¿€æ´»å®ƒä»¬ã€‚

æ‰€æœ‰æ’ä»¶å¿…é¡»æä¾› `.plugin.json` æ–‡ä»¶ï¼Œå…¶ä¸­åŒ…å«å†…è” JSON Schemaï¼ˆ`configSchema`ï¼Œå³ä½¿ä¸ºç©ºï¼‰ã€‚ç¼ºå°‘æˆ–æ— æ•ˆçš„æ¸…å•æˆ–æ¨¡å¼ä¼šé˜»æ­¢æ’ä»¶åŠ è½½å¹¶å¯¼è‡´é…ç½®éªŒè¯å¤±è´¥ã€‚

### å®‰è£…

```bash
 plugins install <path-or-spec>
```

å®‰å…¨æç¤ºï¼šå°†æ’ä»¶å®‰è£…è§†ä¸ºè¿è¡Œä»£ç ã€‚ä¼˜å…ˆä½¿ç”¨å›ºå®šç‰ˆæœ¬ã€‚

æ”¯æŒçš„å½’æ¡£æ ¼å¼ï¼š`.zip`ã€`.tgz`ã€`.tar.gz`ã€`.tar`ã€‚

ä½¿ç”¨ `--link` é¿å…å¤åˆ¶æœ¬åœ°ç›®å½•ï¼ˆæ·»åŠ åˆ° `plugins.load.paths`ï¼‰ï¼š

```bash
 plugins install -l ./my-plugin
```

### æ›´æ–°

```bash
 plugins update <id>
 plugins update --all
 plugins update <id> --dry-run
```

æ›´æ–°ä»…é€‚ç”¨äºŽä»Ž npm å®‰è£…çš„æ’ä»¶ï¼ˆåœ¨ `plugins.installs` ä¸­è·Ÿè¸ªï¼‰ã€‚


