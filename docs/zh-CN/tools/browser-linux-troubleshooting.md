---
read_when: Browser control fails on Linux, especially with snap Chromium
summary: ä¿®å¤ Linux ä¸Š  æµè§ˆå™¨æŽ§åˆ¶çš„ Chrome/Brave/Edge/Chromium CDP å¯åŠ¨é—®é¢˜
title: æµè§ˆå™¨æ•…éšœæŽ’é™¤
x-i18n:
  generated_at: "2026-02-03T07:55:07Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: bac2301022511a0bf8ebe1309606cc03e8a979ff74866c894f89d280ca3e514e
  source_path: tools/browser-linux-troubleshooting.md
  workflow: 15
---

# æµè§ˆå™¨æ•…éšœæŽ’é™¤ï¼ˆLinuxï¼‰

## é—®é¢˜ï¼š"Failed to start Chrome CDP on port 18800"

 çš„æµè§ˆå™¨æŽ§åˆ¶æœåŠ¡å™¨æ— æ³•å¯åŠ¨ Chrome/Brave/Edge/Chromiumï¼Œå‡ºçŽ°ä»¥ä¸‹é”™è¯¯ï¼š

```
{"error":"Error: Failed to start Chrome CDP on port 18800 for profile \"\"."}
```

### æ ¹æœ¬åŽŸå› 

åœ¨ Ubuntuï¼ˆå’Œè®¸å¤š Linux å‘è¡Œç‰ˆï¼‰ä¸Šï¼Œé»˜è®¤çš„ Chromium å®‰è£…æ˜¯ **snap åŒ…**ã€‚Snap çš„ AppArmor é™åˆ¶ä¼šå¹²æ‰°  å¯åŠ¨å’Œç›‘æŽ§æµè§ˆå™¨è¿›ç¨‹çš„æ–¹å¼ã€‚

`apt install chromium` å‘½ä»¤å®‰è£…çš„æ˜¯ä¸€ä¸ªé‡å®šå‘åˆ° snap çš„å­˜æ ¹åŒ…ï¼š

```
Note, selecting 'chromium-browser' instead of 'chromium'
chromium-browser is already the newest version (2:1snap1-0ubuntu2).
```

è¿™ä¸æ˜¯çœŸæ­£çš„æµè§ˆå™¨â€”â€”å®ƒåªæ˜¯ä¸€ä¸ªåŒ…è£…å™¨ã€‚

### è§£å†³æ–¹æ¡ˆ 1ï¼šå®‰è£… Google Chromeï¼ˆæŽ¨èï¼‰

å®‰è£…å®˜æ–¹ Google Chrome `.deb` åŒ…ï¼Œå®ƒä¸å— snap æ²™ç®±é™åˆ¶ï¼š

```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
sudo apt --fix-broken install -y  # if there are dependency errors
```

ç„¶åŽæ›´æ–°ä½ çš„  é…ç½®ï¼ˆ`~/./.json`ï¼‰ï¼š

```json
{
  "browser": {
    "enabled": true,
    "executablePath": "/usr/bin/google-chrome-stable",
    "headless": true,
    "noSandbox": true
  }
}
```

### è§£å†³æ–¹æ¡ˆ 2ï¼šä½¿ç”¨ Snap Chromium çš„ä»…é™„åŠ æ¨¡å¼

å¦‚æžœä½ å¿…é¡»ä½¿ç”¨ snap Chromiumï¼Œé…ç½®  é™„åŠ åˆ°æ‰‹åŠ¨å¯åŠ¨çš„æµè§ˆå™¨ï¼š

1. æ›´æ–°é…ç½®ï¼š

```json
{
  "browser": {
    "enabled": true,
    "attachOnly": true,
    "headless": true,
    "noSandbox": true
  }
}
```

2. æ‰‹åŠ¨å¯åŠ¨ Chromiumï¼š

```bash
chromium-browser --headless --no-sandbox --disable-gpu \
  --remote-debugging-port=18800 \
  --user-data-dir=$HOME/./browser//user-data \
  about:blank &
```

3. å¯é€‰åˆ›å»º systemd ç”¨æˆ·æœåŠ¡ä»¥è‡ªåŠ¨å¯åŠ¨ Chromeï¼š

```ini
# ~/.config/systemd/user/-browser.service
[Unit]
Description= Browser (Chrome CDP)
After=network.target

[Service]
ExecStart=/snap/bin/chromium --headless --no-sandbox --disable-gpu --remote-debugging-port=18800 --user-data-dir=%h/./browser//user-data about:blank
Restart=on-failure
RestartSec=5

[Install]
WantedBy=default.target
```

å¯ç”¨ï¼š`systemctl --user enable --now -browser.service`

### éªŒè¯æµè§ˆå™¨æ˜¯å¦å·¥ä½œ

æ£€æŸ¥çŠ¶æ€ï¼š

```bash
curl -s http://127.0.0.1:18791/ | jq '{running, pid, chosenBrowser}'
```

æµ‹è¯•æµè§ˆï¼š

```bash
curl -s -X POST http://127.0.0.1:18791/start
curl -s http://127.0.0.1:18791/tabs
```

### é…ç½®å‚è€ƒ

| é€‰é¡¹                     | æè¿°                                                          | é»˜è®¤å€¼                                           |
| ------------------------ | ------------------------------------------------------------- | ------------------------------------------------ |
| `browser.enabled`        | å¯ç”¨æµè§ˆå™¨æŽ§åˆ¶                                                | `true`                                           |
| `browser.executablePath` | Chromium ç³»æµè§ˆå™¨äºŒè¿›åˆ¶æ–‡ä»¶è·¯å¾„ï¼ˆChrome/Brave/Edge/Chromiumï¼‰ | è‡ªåŠ¨æ£€æµ‹ï¼ˆå½“é»˜è®¤æµè§ˆå™¨æ˜¯ Chromium ç³»æ—¶ä¼˜å…ˆä½¿ç”¨ï¼‰ |
| `browser.headless`       | æ—  GUI è¿è¡Œ                                                   | `false`                                          |
| `browser.noSandbox`      | æ·»åŠ  `--no-sandbox` æ ‡å¿—ï¼ˆæŸäº› Linux è®¾ç½®éœ€è¦ï¼‰               | `false`                                          |
| `browser.attachOnly`     | ä¸å¯åŠ¨æµè§ˆå™¨ï¼Œä»…é™„åŠ åˆ°çŽ°æœ‰æµè§ˆå™¨                              | `false`                                          |
| `browser.cdpPort`        | Chrome DevTools Protocol ç«¯å£                                 | `18800`                                          |

### é—®é¢˜ï¼š"Chrome extension relay is running, but no tab is connected"

ä½ æ­£åœ¨ä½¿ç”¨ `chrome` é…ç½®æ–‡ä»¶ï¼ˆæ‰©å±•ä¸­ç»§ï¼‰ã€‚å®ƒæœŸæœ›  æµè§ˆå™¨æ‰©å±•é™„åŠ åˆ°ä¸€ä¸ªæ´»åŠ¨æ ‡ç­¾é¡µã€‚

ä¿®å¤é€‰é¡¹ï¼š

1. **ä½¿ç”¨æ‰˜ç®¡æµè§ˆå™¨ï¼š** ` browser start --browser-profile `
   ï¼ˆæˆ–è®¾ç½® `browser.defaultProfile: ""`ï¼‰ã€‚
2. **ä½¿ç”¨æ‰©å±•ä¸­ç»§ï¼š** å®‰è£…æ‰©å±•ï¼Œæ‰“å¼€ä¸€ä¸ªæ ‡ç­¾é¡µï¼Œç„¶åŽç‚¹å‡»  æ‰©å±•å›¾æ ‡æ¥é™„åŠ å®ƒã€‚

æ³¨æ„äº‹é¡¹ï¼š

- `chrome` é…ç½®æ–‡ä»¶åœ¨å¯èƒ½æ—¶ä½¿ç”¨ä½ çš„**ç³»ç»Ÿé»˜è®¤ Chromium æµè§ˆå™¨**ã€‚
- æœ¬åœ° `` é…ç½®æ–‡ä»¶è‡ªåŠ¨åˆ†é… `cdpPort`/`cdpUrl`ï¼›ä»…ä¸ºè¿œç¨‹ CDP è®¾ç½®è¿™äº›ã€‚

