---
read_when:
  - ä½ æƒ³è®©  ä¸Žä½ çš„ä¸» macOS çŽ¯å¢ƒéš”ç¦»
  - ä½ æƒ³åœ¨æ²™ç®±ä¸­é›†æˆ iMessageï¼ˆBlueBubblesï¼‰
  - ä½ æƒ³è¦ä¸€ä¸ªå¯é‡ç½®ã€å¯å…‹éš†çš„ macOS çŽ¯å¢ƒ
  - ä½ æƒ³æ¯”è¾ƒæœ¬åœ°ä¸Žæ‰˜ç®¡ macOS VM é€‰é¡¹
summary: åœ¨æ²™ç®±éš”ç¦»çš„ macOS VMï¼ˆæœ¬åœ°æˆ–æ‰˜ç®¡ï¼‰ä¸­è¿è¡Œ ï¼Œå½“ä½ éœ€è¦éš”ç¦»æˆ– iMessage æ—¶
title: macOS è™šæ‹Ÿæœº
x-i18n:
  generated_at: "2026-02-03T07:53:09Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 4d1c85a5e4945f9f0796038cd5960edecb71ec4dffb6f9686be50adb75180716
  source_path: platforms/macos-vm.md
  workflow: 15
---

# åœ¨ macOS è™šæ‹Ÿæœºä¸Šè¿è¡Œ ï¼ˆæ²™ç®±éš”ç¦»ï¼‰

## æŽ¨èé»˜è®¤æ–¹æ¡ˆï¼ˆå¤§å¤šæ•°ç”¨æˆ·ï¼‰

- **å°åž‹ Linux VPS** ç”¨äºŽæ°¸ä¹…åœ¨çº¿çš„ Gateway ç½‘å…³ï¼Œæˆæœ¬ä½Žã€‚å‚è§ [VPS æ‰˜ç®¡](/vps)ã€‚
- **ä¸“ç”¨ç¡¬ä»¶**ï¼ˆMac mini æˆ– Linux æœºå™¨ï¼‰å¦‚æžœä½ æƒ³è¦å®Œå…¨æŽ§åˆ¶å’Œ**ä½å®… IP** ç”¨äºŽæµè§ˆå™¨è‡ªåŠ¨åŒ–ã€‚è®¸å¤šç½‘ç«™ä¼šå±è”½æ•°æ®ä¸­å¿ƒ IPï¼Œæ‰€ä»¥æœ¬åœ°æµè§ˆé€šå¸¸æ•ˆæžœæ›´å¥½ã€‚
- **æ··åˆæ–¹æ¡ˆï¼š** å°† Gateway ç½‘å…³ä¿æŒåœ¨å»‰ä»· VPS ä¸Šï¼Œå½“ä½ éœ€è¦æµè§ˆå™¨/UI è‡ªåŠ¨åŒ–æ—¶ï¼Œå°†ä½ çš„ Mac ä½œä¸º**èŠ‚ç‚¹**è¿žæŽ¥ã€‚å‚è§[èŠ‚ç‚¹](/nodes)å’Œ [Gateway ç½‘å…³è¿œç¨‹](/gateway/remote)ã€‚

å½“ä½ ç‰¹åˆ«éœ€è¦ macOS ç‹¬æœ‰åŠŸèƒ½ï¼ˆiMessage/BlueBubblesï¼‰æˆ–æƒ³è¦ä¸Žæ—¥å¸¸ Mac ä¸¥æ ¼éš”ç¦»æ—¶ï¼Œä½¿ç”¨ macOS VMã€‚

## macOS VM é€‰é¡¹

### åœ¨ä½ çš„ Apple Silicon Mac ä¸Šè¿è¡Œæœ¬åœ° VMï¼ˆLumeï¼‰

ä½¿ç”¨ [Lume](https://cua.ai/docs/lume) åœ¨ä½ çŽ°æœ‰çš„ Apple Silicon Mac ä¸Šçš„æ²™ç®± macOS VM ä¸­è¿è¡Œ ã€‚

è¿™ä¸ºä½ æä¾›ï¼š

- éš”ç¦»çš„å®Œæ•´ macOS çŽ¯å¢ƒï¼ˆä½ çš„ä¸»æœºä¿æŒå¹²å‡€ï¼‰
- é€šè¿‡ BlueBubbles æ”¯æŒ iMessageï¼ˆåœ¨ Linux/Windows ä¸Šä¸å¯èƒ½ï¼‰
- é€šè¿‡å…‹éš† VM å³æ—¶é‡ç½®
- æ— éœ€é¢å¤–ç¡¬ä»¶æˆ–äº‘æˆæœ¬

### æ‰˜ç®¡ Mac æä¾›å•†ï¼ˆäº‘ï¼‰

å¦‚æžœä½ æƒ³è¦äº‘ç«¯çš„ macOSï¼Œæ‰˜ç®¡ Mac æä¾›å•†ä¹Ÿå¯ä»¥ï¼š

- [MacStadium](https://www.macstadium.com/)ï¼ˆæ‰˜ç®¡ Macï¼‰
- å…¶ä»–æ‰˜ç®¡ Mac ä¾›åº”å•†ä¹Ÿå¯ä»¥ï¼›æŒ‰ç…§ä»–ä»¬çš„ VM + SSH æ–‡æ¡£æ“ä½œ

ä¸€æ—¦ä½ æœ‰äº† macOS VM çš„ SSH è®¿é—®æƒé™ï¼Œç»§ç»­ä¸‹é¢çš„æ­¥éª¤ 6ã€‚

---

## å¿«é€Ÿè·¯å¾„ï¼ˆLumeï¼Œæœ‰ç»éªŒçš„ç”¨æˆ·ï¼‰

1. å®‰è£… Lume
2. `lume create  --os macos --ipsw latest`
3. å®Œæˆè®¾ç½®åŠ©æ‰‹ï¼Œå¯ç”¨è¿œç¨‹ç™»å½•ï¼ˆSSHï¼‰
4. `lume run  --no-display`
5. SSH è¿›å…¥ï¼Œå®‰è£… ï¼Œé…ç½®æ¸ é“
6. å®Œæˆ

---

## ä½ éœ€è¦ä»€ä¹ˆï¼ˆLumeï¼‰

- Apple Silicon Macï¼ˆM1/M2/M3/M4ï¼‰
- ä¸»æœºä¸Šå®‰è£… macOS Sequoia æˆ–æ›´é«˜ç‰ˆæœ¬
- æ¯ä¸ª VM çº¦ 60 GB å¯ç”¨ç£ç›˜ç©ºé—´
- çº¦ 20 åˆ†é’Ÿ

---

## 1) å®‰è£… Lume

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/trycua/cua/main/libs/lume/scripts/install.sh)"
```

å¦‚æžœ `~/.local/bin` ä¸åœ¨ä½ çš„ PATH ä¸­ï¼š

```bash
echo 'export PATH="$PATH:$HOME/.local/bin"' >> ~/.zshrc && source ~/.zshrc
```

éªŒè¯ï¼š

```bash
lume --version
```

æ–‡æ¡£ï¼š[Lume å®‰è£…](https://cua.ai/docs/lume/guide/getting-started/installation)

---

## 2) åˆ›å»º macOS VM

```bash
lume create  --os macos --ipsw latest
```

è¿™ä¼šä¸‹è½½ macOS å¹¶åˆ›å»º VMã€‚VNC çª—å£ä¼šè‡ªåŠ¨æ‰“å¼€ã€‚

æ³¨æ„ï¼šä¸‹è½½å¯èƒ½éœ€è¦ä¸€æ®µæ—¶é—´ï¼Œå–å†³äºŽä½ çš„ç½‘ç»œè¿žæŽ¥ã€‚

---

## 3) å®Œæˆè®¾ç½®åŠ©æ‰‹

åœ¨ VNC çª—å£ä¸­ï¼š

1. é€‰æ‹©è¯­è¨€å’Œåœ°åŒº
2. è·³è¿‡ Apple IDï¼ˆæˆ–è€…å¦‚æžœä½ ä»¥åŽæƒ³è¦ iMessage å°±ç™»å½•ï¼‰
3. åˆ›å»ºç”¨æˆ·è´¦æˆ·ï¼ˆè®°ä½ç”¨æˆ·åå’Œå¯†ç ï¼‰
4. è·³è¿‡æ‰€æœ‰å¯é€‰åŠŸèƒ½

è®¾ç½®å®ŒæˆåŽï¼Œå¯ç”¨ SSHï¼š

1. æ‰“å¼€ç³»ç»Ÿè®¾ç½® â†’ é€šç”¨ â†’ å…±äº«
2. å¯ç”¨"è¿œç¨‹ç™»å½•"

---

## 4) èŽ·å– VM çš„ IP åœ°å€

```bash
lume get 
```

æŸ¥æ‰¾ IP åœ°å€ï¼ˆé€šå¸¸æ˜¯ `192.168.64.x`ï¼‰ã€‚

---

## 5) SSH è¿›å…¥ VM

```bash
ssh youruser@192.168.64.X
```

å°† `youruser` æ›¿æ¢ä¸ºä½ åˆ›å»ºçš„è´¦æˆ·ï¼ŒIP æ›¿æ¢ä¸ºä½  VM çš„ IPã€‚

---

## 6) å®‰è£… 

åœ¨ VM å†…ï¼š

```bash
npm install -g @latest
 onboard --install-daemon
```

æŒ‰ç…§æ–°æ‰‹å¼•å¯¼æç¤ºè®¾ç½®ä½ çš„æ¨¡åž‹æä¾›å•†ï¼ˆAnthropicã€OpenAI ç­‰ï¼‰ã€‚

---

## 7) é…ç½®æ¸ é“

ç¼–è¾‘é…ç½®æ–‡ä»¶ï¼š

```bash
nano ~/./.json
```

æ·»åŠ ä½ çš„æ¸ é“ï¼š

```json
{
  "channels": {
    "whatsapp": {
      "dmPolicy": "allowlist",
      "allowFrom": ["+15551234567"]
    },
    "telegram": {
      "botToken": "YOUR_BOT_TOKEN"
    }
  }
}
```

ç„¶åŽç™»å½• WhatsAppï¼ˆæ‰«æäºŒç»´ç ï¼‰ï¼š

```bash
 channels login
```

---

## 8) æ— å¤´è¿è¡Œ VM

åœæ­¢ VM å¹¶åœ¨æ— æ˜¾ç¤ºå™¨æ¨¡å¼ä¸‹é‡å¯ï¼š

```bash
lume stop 
lume run  --no-display
```

VM åœ¨åŽå°è¿è¡Œã€‚ çš„å®ˆæŠ¤è¿›ç¨‹ä¿æŒ Gateway ç½‘å…³è¿è¡Œã€‚

æ£€æŸ¥çŠ¶æ€ï¼š

```bash
ssh youruser@192.168.64.X " status"
```

---

## é¢å¤–ï¼šiMessage é›†æˆ

è¿™æ˜¯åœ¨ macOS ä¸Šè¿è¡Œçš„æ€æ‰‹çº§åŠŸèƒ½ã€‚ä½¿ç”¨ [BlueBubbles](https://bluebubbles.app) å°† iMessage æ·»åŠ åˆ° ã€‚

åœ¨ VM å†…ï¼š

1. ä»Ž bluebubbles.app ä¸‹è½½ BlueBubbles
2. ç”¨ä½ çš„ Apple ID ç™»å½•
3. å¯ç”¨ Web API å¹¶è®¾ç½®å¯†ç 
4. å°† BlueBubbles webhooks æŒ‡å‘ä½ çš„ Gateway ç½‘å…³ï¼ˆç¤ºä¾‹ï¼š`https://your-gateway-host:3000/bluebubbles-webhook?password=<password>`ï¼‰

æ·»åŠ åˆ°ä½ çš„  é…ç½®ï¼š

```json
{
  "channels": {
    "bluebubbles": {
      "serverUrl": "http://localhost:1234",
      "password": "your-api-password",
      "webhookPath": "/bluebubbles-webhook"
    }
  }
}
```

é‡å¯ Gateway ç½‘å…³ã€‚çŽ°åœ¨ä½ çš„æ™ºèƒ½ä½“å¯ä»¥å‘é€å’ŒæŽ¥æ”¶ iMessage äº†ã€‚

å®Œæ•´è®¾ç½®è¯¦æƒ…ï¼š[BlueBubbles æ¸ é“](/channels/bluebubbles)

---

## ä¿å­˜é»„é‡‘é•œåƒ

åœ¨è¿›ä¸€æ­¥è‡ªå®šä¹‰ä¹‹å‰ï¼Œå¿«ç…§ä½ çš„å¹²å‡€çŠ¶æ€ï¼š

```bash
lume stop 
lume clone  -golden
```

éšæ—¶é‡ç½®ï¼š

```bash
lume stop  && lume delete 
lume clone -golden 
lume run  --no-display
```

---

## 24/7 è¿è¡Œ

é€šè¿‡ä»¥ä¸‹æ–¹å¼ä¿æŒ VM è¿è¡Œï¼š

- ä¿æŒä½ çš„ Mac æ’ç”µ
- åœ¨ç³»ç»Ÿè®¾ç½® â†’ èŠ‚èƒ½ä¸­ç¦ç”¨ç¡çœ 
- å¦‚éœ€è¦ä½¿ç”¨ `caffeinate`

å¯¹äºŽçœŸæ­£çš„æ°¸ä¹…åœ¨çº¿ï¼Œè€ƒè™‘ä¸“ç”¨ Mac mini æˆ–å°åž‹ VPSã€‚å‚è§ [VPS æ‰˜ç®¡](/vps)ã€‚

---

## æ•…éšœæŽ’é™¤

| é—®é¢˜                    | è§£å†³æ–¹æ¡ˆ                                                         |
| ----------------------- | ---------------------------------------------------------------- |
| æ— æ³• SSH è¿›å…¥ VM        | æ£€æŸ¥ VM çš„ç³»ç»Ÿè®¾ç½®ä¸­æ˜¯å¦å¯ç”¨äº†"è¿œç¨‹ç™»å½•"                         |
| VM IP æœªæ˜¾ç¤º            | ç­‰å¾… VM å®Œå…¨å¯åŠ¨ï¼Œå†æ¬¡è¿è¡Œ `lume get `                   |
| æ‰¾ä¸åˆ° Lume å‘½ä»¤        | å°† `~/.local/bin` æ·»åŠ åˆ°ä½ çš„ PATH                                |
| WhatsApp äºŒç»´ç æ‰«æå¤±è´¥ | ç¡®ä¿è¿è¡Œ ` channels login` æ—¶ä½ æ˜¯ç™»å½•åˆ° VMï¼ˆè€Œä¸æ˜¯ä¸»æœºï¼‰ |

---

## ç›¸å…³æ–‡æ¡£

- [VPS æ‰˜ç®¡](/vps)
- [èŠ‚ç‚¹](/nodes)
- [Gateway ç½‘å…³è¿œç¨‹](/gateway/remote)
- [BlueBubbles æ¸ é“](/channels/bluebubbles)
- [Lume å¿«é€Ÿå…¥é—¨](https://cua.ai/docs/lume/guide/getting-started/quickstart)
- [Lume CLI å‚è€ƒ](https://cua.ai/docs/lume/reference/cli-reference)
- [æ— äººå€¼å®ˆ VM è®¾ç½®](https://cua.ai/docs/lume/guide/fundamentals/unattended-setup)ï¼ˆé«˜çº§ï¼‰
- [Docker æ²™ç®±éš”ç¦»](/install/docker)ï¼ˆæ›¿ä»£éš”ç¦»æ–¹æ¡ˆï¼‰

