---
read_when:
  - æŸ¥æ‰¾ Linux é…å¥—åº”ç”¨çŠ¶æ€æ—¶
  - è§„åˆ’å¹³å°è¦†ç›–æˆ–è´¡çŒ®æ—¶
summary: Linux æ”¯æŒ + é…å¥—åº”ç”¨çŠ¶æ€
title: Linux åº”ç”¨
x-i18n:
  generated_at: "2026-02-03T07:52:18Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: a9bbbcecf2fd522a2f5ac8f3b9068febbc43658465bfb9276bff6c3e946789d2
  source_path: platforms/linux.md
  workflow: 15
---

# Linux åº”ç”¨

Gateway ç½‘å…³åœ¨ Linux ä¸Šå®Œå…¨æ”¯æŒã€‚**Node æ˜¯æŽ¨èçš„è¿è¡Œæ—¶**ã€‚
ä¸æŽ¨è Bun ç”¨äºŽ Gateway ç½‘å…³ï¼ˆWhatsApp/Telegram å­˜åœ¨ bugï¼‰ã€‚

åŽŸç”Ÿ Linux é…å¥—åº”ç”¨å·²åœ¨è®¡åˆ’ä¸­ã€‚å¦‚æžœä½ æƒ³å¸®åŠ©æž„å»ºï¼Œæ¬¢è¿Žè´¡çŒ®ã€‚

## æ–°æ‰‹å¿«é€Ÿè·¯å¾„ï¼ˆVPSï¼‰

1. å®‰è£… Node 22+
2. `npm i -g @latest`
3. ` onboard --install-daemon`
4. ä»Žä½ çš„ç¬”è®°æœ¬ç”µè„‘ï¼š`ssh -N -L 18789:127.0.0.1:18789 <user>@<host>`
5. æ‰“å¼€ `http://127.0.0.1:18789/` å¹¶ç²˜è´´ä½ çš„ä»¤ç‰Œ

åˆ†æ­¥ VPS æŒ‡å—ï¼š[exe.dev](/platforms/exe-dev)

## å®‰è£…

- [å…¥é—¨æŒ‡å—](/start/getting-started)
- [å®‰è£…ä¸Žæ›´æ–°](/install/updating)
- å¯é€‰æµç¨‹ï¼š[Bunï¼ˆå®žéªŒæ€§ï¼‰](/install/bun)ã€[Nix](/install/nix)ã€[Docker](/install/docker)

## Gateway ç½‘å…³

- [Gateway ç½‘å…³è¿è¡Œæ‰‹å†Œ](/gateway)
- [é…ç½®](/gateway/configuration)

## Gateway ç½‘å…³æœåŠ¡å®‰è£…ï¼ˆCLIï¼‰

ä½¿ç”¨ä»¥ä¸‹ä»»ä¸€æ–¹å¼ï¼š

```
 onboard --install-daemon
```

æˆ–ï¼š

```
 gateway install
```

æˆ–ï¼š

```
 configure
```

å‡ºçŽ°æç¤ºæ—¶é€‰æ‹© **Gateway service**ã€‚

ä¿®å¤/è¿ç§»ï¼š

```
 doctor
```

## ç³»ç»ŸæŽ§åˆ¶ï¼ˆsystemd ç”¨æˆ·å•å…ƒï¼‰

 é»˜è®¤å®‰è£… systemd **ç”¨æˆ·**æœåŠ¡ã€‚å¯¹äºŽå…±äº«æˆ–å¸¸é©»æœåŠ¡å™¨ä½¿ç”¨**ç³»ç»Ÿ**
æœåŠ¡ã€‚å®Œæ•´çš„å•å…ƒç¤ºä¾‹å’ŒæŒ‡å—
åœ¨ [Gateway ç½‘å…³è¿è¡Œæ‰‹å†Œ](/gateway) ä¸­ã€‚

æœ€å°è®¾ç½®ï¼š

åˆ›å»º `~/.config/systemd/user/-gateway[-<profile>].service`ï¼š

```
[Unit]
Description= Gateway (profile: <profile>, v<version>)
After=network-online.target
Wants=network-online.target

[Service]
ExecStart=/usr/local/bin/ gateway --port 18789
Restart=always
RestartSec=5

[Install]
WantedBy=default.target
```

å¯ç”¨å®ƒï¼š

```
systemctl --user enable --now -gateway[-<profile>].service
```


