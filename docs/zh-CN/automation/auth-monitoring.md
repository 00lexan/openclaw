---
read_when:
  - è®¾ç½®è®¤è¯è¿‡æœŸç›‘æŽ§æˆ–å‘Šè­¦
  - è‡ªåŠ¨åŒ– Claude Code / Codex OAuth åˆ·æ–°æ£€æŸ¥
summary: ç›‘æŽ§æ¨¡åž‹æä¾›å•†çš„ OAuth è¿‡æœŸçŠ¶æ€
title: è®¤è¯ç›‘æŽ§
x-i18n:
  generated_at: "2026-02-03T10:03:53Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: eef179af9545ed7ab881f3ccbef998869437fb50cdb4088de8da7223b614fa2b
  source_path: automation/auth-monitoring.md
  workflow: 15
---

# è®¤è¯ç›‘æŽ§

 é€šè¿‡ ` models status` æä¾› OAuth è¿‡æœŸå¥åº·çŠ¶æ€ã€‚è¯·ä½¿ç”¨è¯¥å‘½ä»¤è¿›è¡Œè‡ªåŠ¨åŒ–å’Œå‘Šè­¦ï¼›è„šæœ¬æ˜¯ä¸ºæ‰‹æœºå·¥ä½œæµç¨‹æä¾›çš„å¯é€‰é™„åŠ åŠŸèƒ½ã€‚

## æŽ¨èæ–¹å¼ï¼šCLI æ£€æŸ¥ï¼ˆå¯ç§»æ¤ï¼‰

```bash
 models status --check
```

é€€å‡ºç ï¼š

- `0`ï¼šæ­£å¸¸
- `1`ï¼šå‡­è¯è¿‡æœŸæˆ–ç¼ºå¤±
- `2`ï¼šå³å°†è¿‡æœŸï¼ˆ24 å°æ—¶å†…ï¼‰

æ­¤æ–¹å¼é€‚ç”¨äºŽ cron/systemdï¼Œæ— éœ€é¢å¤–è„šæœ¬ã€‚

## å¯é€‰è„šæœ¬ï¼ˆè¿ç»´ / æ‰‹æœºå·¥ä½œæµç¨‹ï¼‰

è¿™äº›è„šæœ¬ä½äºŽ `scripts/` ç›®å½•ä¸‹ï¼Œå±žäºŽ**å¯é€‰**å†…å®¹ã€‚å®ƒä»¬å‡å®šä½ å¯ä»¥é€šè¿‡ SSH è®¿é—® Gateway ç½‘å…³ä¸»æœºï¼Œå¹¶é’ˆå¯¹ systemd + Termux è¿›è¡Œäº†è°ƒä¼˜ã€‚

- `scripts/claude-auth-status.sh` çŽ°åœ¨ä½¿ç”¨ ` models status --json` ä½œä¸ºæ•°æ®æ¥æºï¼ˆå¦‚æžœ CLI ä¸å¯ç”¨åˆ™å›žé€€åˆ°ç›´æŽ¥è¯»å–æ–‡ä»¶ï¼‰ï¼Œå› æ­¤è¯·ç¡®ä¿ `` åœ¨å®šæ—¶å™¨çš„ `PATH` ä¸­ã€‚
- `scripts/auth-monitor.sh`ï¼šcron/systemd å®šæ—¶å™¨ç›®æ ‡ï¼›å‘é€å‘Šè­¦ï¼ˆntfy æˆ–æ‰‹æœºï¼‰ã€‚
- `scripts/systemd/-auth-monitor.{service,timer}`ï¼šsystemd ç”¨æˆ·å®šæ—¶å™¨ã€‚
- `scripts/claude-auth-status.sh`ï¼šClaude Code +  è®¤è¯æ£€æŸ¥å™¨ï¼ˆå®Œæ•´/json/ç®€æ´æ¨¡å¼ï¼‰ã€‚
- `scripts/mobile-reauth.sh`ï¼šé€šè¿‡ SSH å¼•å¯¼çš„é‡æ–°è®¤è¯æµç¨‹ã€‚
- `scripts/termux-quick-auth.sh`ï¼šä¸€é”®å°éƒ¨ä»¶çŠ¶æ€æŸ¥çœ‹ + æ‰“å¼€è®¤è¯ URLã€‚
- `scripts/termux-auth-widget.sh`ï¼šå®Œæ•´çš„å¼•å¯¼å¼å°éƒ¨ä»¶æµç¨‹ã€‚
- `scripts/termux-sync-widget.sh`ï¼šåŒæ­¥ Claude Code å‡­è¯ â†’ ã€‚

å¦‚æžœä½ ä¸éœ€è¦æ‰‹æœºè‡ªåŠ¨åŒ–æˆ– systemd å®šæ—¶å™¨ï¼Œå¯ä»¥è·³è¿‡è¿™äº›è„šæœ¬ã€‚


