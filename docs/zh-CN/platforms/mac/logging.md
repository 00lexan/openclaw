---
read_when:
  - æ•èŽ· macOS æ—¥å¿—æˆ–è°ƒæŸ¥éšç§æ•°æ®æ—¥å¿—è®°å½•
  - è°ƒè¯•è¯­éŸ³å”¤é†’/ä¼šè¯ç”Ÿå‘½å‘¨æœŸé—®é¢˜
summary:  æ—¥å¿—ï¼šæ»šåŠ¨è¯Šæ–­æ–‡ä»¶æ—¥å¿— + ç»Ÿä¸€æ—¥å¿—éšç§æ ‡å¿—
title: macOS æ—¥å¿—
x-i18n:
  generated_at: "2026-02-01T21:32:54Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: c4c201d154915e0eb08bf5e32bac98fa93766f50f2a24bf56ab4424eb7781526
  source_path: platforms/mac/logging.md
  workflow: 15
---

# æ—¥å¿—ï¼ˆmacOSï¼‰

## æ»šåŠ¨è¯Šæ–­æ–‡ä»¶æ—¥å¿—ï¼ˆDebug é¢æ¿ï¼‰

 é€šè¿‡ swift-logï¼ˆé»˜è®¤ä½¿ç”¨ç»Ÿä¸€æ—¥å¿—ï¼‰è·¯ç”± macOS åº”ç”¨æ—¥å¿—ï¼Œå¹¶ä¸”åœ¨éœ€è¦æŒä¹…åŒ–æ•èŽ·æ—¶å¯ä»¥å°†æœ¬åœ°è½®è½¬æ–‡ä»¶æ—¥å¿—å†™å…¥ç£ç›˜ã€‚

- è¯¦ç»†çº§åˆ«ï¼š**Debug é¢æ¿ â†’ Logs â†’ App logging â†’ Verbosity**
- å¯ç”¨ï¼š**Debug é¢æ¿ â†’ Logs â†’ App logging â†’ "Write rolling diagnostics log (JSONL)"**
- ä½ç½®ï¼š`~/Library/Logs//diagnostics.jsonl`ï¼ˆè‡ªåŠ¨è½®è½¬ï¼›æ—§æ–‡ä»¶ä»¥ `.1`ã€`.2`ã€â€¦ ä¸ºåŽç¼€ï¼‰
- æ¸…é™¤ï¼š**Debug é¢æ¿ â†’ Logs â†’ App logging â†’ "Clear"**

æ³¨æ„äº‹é¡¹ï¼š

- æ­¤åŠŸèƒ½**é»˜è®¤å…³é—­**ã€‚ä»…åœ¨ä¸»åŠ¨è°ƒè¯•æ—¶å¯ç”¨ã€‚
- è¯¥æ–‡ä»¶åŒ…å«æ•æ„Ÿä¿¡æ¯ï¼›åˆ†äº«å‰è¯·å…ˆå®¡æŸ¥å†…å®¹ã€‚

## macOS ä¸Šç»Ÿä¸€æ—¥å¿—çš„éšç§æ•°æ®

ç»Ÿä¸€æ—¥å¿—ä¼šå±è”½å¤§éƒ¨åˆ†è´Ÿè½½å†…å®¹ï¼Œé™¤éžå­ç³»ç»Ÿé€‰æ‹©å¯ç”¨ `privacy -off`ã€‚æ ¹æ® Peter å…³äºŽ macOS [æ—¥å¿—éšç§æœºåˆ¶](https://steipete.me/posts/2025/logging-privacy-shenanigans)ï¼ˆ2025ï¼‰çš„æ–‡ç« ï¼Œè¿™é€šè¿‡ `/Library/Preferences/Logging/Subsystems/` ä¸­ä»¥å­ç³»ç»Ÿåç§°ä¸ºé”®çš„ plist æ–‡ä»¶æ¥æŽ§åˆ¶ã€‚åªæœ‰æ–°çš„æ—¥å¿—æ¡ç›®æ‰ä¼šåº”ç”¨è¯¥æ ‡å¿—ï¼Œå› æ­¤è¯·åœ¨å¤çŽ°é—®é¢˜ä¹‹å‰å¯ç”¨å®ƒã€‚

## ä¸º  å¯ç”¨ï¼ˆ`bot.molt`ï¼‰

- å…ˆå°† plist å†™å…¥ä¸´æ—¶æ–‡ä»¶ï¼Œç„¶åŽä»¥ root èº«ä»½åŽŸå­æ€§åœ°å®‰è£…ï¼š

```bash
cat <<'EOF' >/tmp/bot.molt.plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>DEFAULT-OPTIONS</key>
    <dict>
        <key>Enable-Private-Data</key>
        <true/>
    </dict>
</dict>
</plist>
EOF
sudo install -m 644 -o root -g wheel /tmp/bot.molt.plist /Library/Preferences/Logging/Subsystems/bot.molt.plist
```

- æ— éœ€é‡å¯ï¼›logd ä¼šå¾ˆå¿«æ£€æµ‹åˆ°è¯¥æ–‡ä»¶ï¼Œä½†åªæœ‰æ–°çš„æ—¥å¿—è¡Œæ‰ä¼šåŒ…å«éšç§è´Ÿè½½ã€‚
- ä½¿ç”¨çŽ°æœ‰çš„è¾…åŠ©è„šæœ¬æŸ¥çœ‹æ›´ä¸°å¯Œçš„è¾“å‡ºï¼Œä¾‹å¦‚ `./scripts/clawlog.sh --category WebChat --last 5m`ã€‚

## è°ƒè¯•åŽç¦ç”¨

- ç§»é™¤è¦†ç›–é…ç½®ï¼š`sudo rm /Library/Preferences/Logging/Subsystems/bot.molt.plist`ã€‚
- å¯é€‰æ‹©è¿è¡Œ `sudo log config --reload` å¼ºåˆ¶ logd ç«‹å³ä¸¢å¼ƒè¦†ç›–é…ç½®ã€‚
- è¯·æ³¨æ„æ­¤æ•°æ®å¯èƒ½åŒ…å«ç”µè¯å·ç å’Œæ¶ˆæ¯æ­£æ–‡ï¼›ä»…åœ¨ç¡®å®žéœ€è¦é¢å¤–è¯¦ç»†ä¿¡æ¯æ—¶æ‰ä¿ç•™è¯¥ plist æ–‡ä»¶ã€‚

