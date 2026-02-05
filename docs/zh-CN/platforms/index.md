---
read_when:
  - æŸ¥æ‰¾æ“ä½œç³»ç»Ÿæ”¯æŒæˆ–å®‰è£…è·¯å¾„æ—¶
  - å†³å®šåœ¨å“ªé‡Œè¿è¡Œ Gateway ç½‘å…³æ—¶
summary: å¹³å°æ”¯æŒæ¦‚è¿°ï¼ˆGateway ç½‘å…³ + é…å¥—åº”ç”¨ï¼‰
title: å¹³å°
x-i18n:
  generated_at: "2026-02-03T07:52:07Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 254852a5ed1996982a52eed4a72659477609e08d340c625d24ef6d99c21eece6
  source_path: platforms/index.md
  workflow: 15
---

# å¹³å°

 æ ¸å¿ƒä½¿ç”¨ TypeScript ç¼–å†™ã€‚**Node æ˜¯æŽ¨èçš„è¿è¡Œæ—¶**ã€‚
ä¸æŽ¨è Bun ç”¨äºŽ Gateway ç½‘å…³ï¼ˆWhatsApp/Telegram å­˜åœ¨ bugï¼‰ã€‚

é…å¥—åº”ç”¨é€‚ç”¨äºŽ macOSï¼ˆèœå•æ åº”ç”¨ï¼‰å’Œç§»åŠ¨èŠ‚ç‚¹ï¼ˆiOS/Androidï¼‰ã€‚Windows å’Œ
Linux é…å¥—åº”ç”¨å·²åœ¨è®¡åˆ’ä¸­ï¼Œä½† Gateway ç½‘å…³ç›®å‰å·²å®Œå…¨æ”¯æŒã€‚
Windows åŽŸç”Ÿé…å¥—åº”ç”¨ä¹Ÿåœ¨è®¡åˆ’ä¸­ï¼›æŽ¨èé€šè¿‡ WSL2 ä½¿ç”¨ Gateway ç½‘å…³ã€‚

## é€‰æ‹©ä½ çš„æ“ä½œç³»ç»Ÿ

- macOSï¼š[macOS](/platforms/macos)
- iOSï¼š[iOS](/platforms/ios)
- Androidï¼š[Android](/platforms/android)
- Windowsï¼š[Windows](/platforms/windows)
- Linuxï¼š[Linux](/platforms/linux)

## VPS å’Œæ‰˜ç®¡

- VPS ä¸­å¿ƒï¼š[VPS æ‰˜ç®¡](/vps)
- Fly.ioï¼š[Fly.io](/platforms/fly)
- Hetznerï¼ˆDockerï¼‰ï¼š[Hetzner](/platforms/hetzner)
- GCPï¼ˆCompute Engineï¼‰ï¼š[GCP](/platforms/gcp)
- exe.devï¼ˆVM + HTTPS ä»£ç†ï¼‰ï¼š[exe.dev](/platforms/exe-dev)

## å¸¸ç”¨é“¾æŽ¥

- å®‰è£…æŒ‡å—ï¼š[å…¥é—¨æŒ‡å—](/start/getting-started)
- Gateway ç½‘å…³è¿è¡Œæ‰‹å†Œï¼š[Gateway ç½‘å…³](/gateway)
- Gateway ç½‘å…³é…ç½®ï¼š[é…ç½®](/gateway/configuration)
- æœåŠ¡çŠ¶æ€ï¼š` gateway status`

## Gateway ç½‘å…³æœåŠ¡å®‰è£…ï¼ˆCLIï¼‰

ä½¿ç”¨ä»¥ä¸‹ä»»ä¸€æ–¹å¼ï¼ˆå‡æ”¯æŒï¼‰ï¼š

- å‘å¯¼ï¼ˆæŽ¨èï¼‰ï¼š` onboard --install-daemon`
- ç›´æŽ¥å®‰è£…ï¼š` gateway install`
- é…ç½®æµç¨‹ï¼š` configure` â†’ é€‰æ‹© **Gateway service**
- ä¿®å¤/è¿ç§»ï¼š` doctor`ï¼ˆæä¾›å®‰è£…æˆ–ä¿®å¤æœåŠ¡ï¼‰

æœåŠ¡ç›®æ ‡å–å†³äºŽæ“ä½œç³»ç»Ÿï¼š

- macOSï¼šLaunchAgentï¼ˆ`bot.molt.gateway` æˆ– `bot.molt.<profile>`ï¼›æ—§ç‰ˆ `com..*`ï¼‰
- Linux/WSL2ï¼šsystemd ç”¨æˆ·æœåŠ¡ï¼ˆ`-gateway[-<profile>].service`ï¼‰

