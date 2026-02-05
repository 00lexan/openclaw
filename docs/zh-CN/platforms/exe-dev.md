---
read_when:
  - ä½ æƒ³è¦ä¸€ä¸ªä¾¿å®œçš„å¸¸é©» Linux ä¸»æœºæ¥è¿è¡Œ Gateway ç½‘å…³
  - ä½ æƒ³è¦è¿œç¨‹æŽ§åˆ¶ UI è®¿é—®è€Œæ— éœ€è¿è¡Œè‡ªå·±çš„ VPS
summary: åœ¨ exe.dev ä¸Šè¿è¡Œ  Gateway ç½‘å…³ï¼ˆVM + HTTPS ä»£ç†ï¼‰ä»¥å®žçŽ°è¿œç¨‹è®¿é—®
title: exe.dev
x-i18n:
  generated_at: "2026-02-03T07:51:36Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 8d57ee7dd6029f0b778465c147092b824a0f1b0680af13032aaf116ff3d4d671
  source_path: platforms/exe-dev.md
  workflow: 15
---

# exe.dev

ç›®æ ‡ï¼š Gateway ç½‘å…³è¿è¡Œåœ¨ exe.dev VM ä¸Šï¼Œå¯ä»Žä½ çš„ç¬”è®°æœ¬ç”µè„‘é€šè¿‡ä»¥ä¸‹åœ°å€è®¿é—®ï¼š`https://<vm-name>.exe.xyz`

æœ¬é¡µå‡è®¾ä½¿ç”¨ exe.dev çš„é»˜è®¤ **exeuntu** é•œåƒã€‚å¦‚æžœä½ é€‰æ‹©äº†ä¸åŒçš„å‘è¡Œç‰ˆï¼Œè¯·ç›¸åº”åœ°æ˜ å°„è½¯ä»¶åŒ…ã€‚

## æ–°æ‰‹å¿«é€Ÿè·¯å¾„

1. [https://exe.new/](https://exe.new/)
2. æ ¹æ®éœ€è¦å¡«å†™ä½ çš„è®¤è¯å¯†é’¥/ä»¤ç‰Œ
3. ç‚¹å‡» VM æ—è¾¹çš„"Agent"ï¼Œç„¶åŽç­‰å¾…...
4. ???
5. å®Œæˆ

## ä½ éœ€è¦ä»€ä¹ˆ

- exe.dev è´¦æˆ·
- `ssh exe.dev` è®¿é—® [exe.dev](https://exe.dev) è™šæ‹Ÿæœºï¼ˆå¯é€‰ï¼‰

## ä½¿ç”¨ Shelley è‡ªåŠ¨å®‰è£…

Shelleyï¼Œ[exe.dev](https://exe.dev) çš„æ™ºèƒ½ä½“ï¼Œå¯ä»¥ä½¿ç”¨æˆ‘ä»¬çš„æç¤ºç«‹å³å®‰è£… ã€‚ä½¿ç”¨çš„æç¤ºå¦‚ä¸‹ï¼š

```
Set up  (https://docs..ai/install) on this VM. Use the non-interactive and accept-risk flags for  onboarding. Add the supplied auth or token as needed. Configure nginx to forward from the default port 18789 to the root location on the default enabled site config, making sure to enable Websocket support. Pairing is done by " devices list" and " device approve <request id>". Make sure the dashboard shows that 's health is OK. exe.dev handles forwarding from port 8000 to port 80/443 and HTTPS for us, so the final "reachable" should be <vm-name>.exe.xyz, without port specification.
```

## æ‰‹åŠ¨å®‰è£…

## 1) åˆ›å»º VM

ä»Žä½ çš„è®¾å¤‡ï¼š

```bash
ssh exe.dev new
```

ç„¶åŽè¿žæŽ¥ï¼š

```bash
ssh <vm-name>.exe.xyz
```

æç¤ºï¼šä¿æŒæ­¤ VM **æœ‰çŠ¶æ€**ã€‚ åœ¨ `~/./` å’Œ `~/./workspace/` ä¸‹å­˜å‚¨çŠ¶æ€ã€‚

## 2) å®‰è£…å…ˆå†³æ¡ä»¶ï¼ˆåœ¨ VM ä¸Šï¼‰

```bash
sudo apt-get update
sudo apt-get install -y git curl jq ca-certificates openssl
```

## 3) å®‰è£… 

è¿è¡Œ  å®‰è£…è„šæœ¬ï¼š

```bash
curl -fsSL https://.ai/install.sh | bash
```

## 4) è®¾ç½® nginx å°†  ä»£ç†åˆ°ç«¯å£ 8000

ç¼–è¾‘ `/etc/nginx/sites-enabled/default`ï¼š

```
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    listen 8000;
    listen [::]:8000;

    server_name _;

    location / {
        proxy_pass http://127.0.0.1:18789;
        proxy_http_version 1.1;

        # WebSocket æ”¯æŒ
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        # æ ‡å‡†ä»£ç†å¤´
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # é•¿è¿žæŽ¥è¶…æ—¶è®¾ç½®
        proxy_read_timeout 86400s;
        proxy_send_timeout 86400s;
    }
}
```

## 5) è®¿é—®  å¹¶æŽˆäºˆæƒé™

è®¿é—® `https://<vm-name>.exe.xyz/?token=YOUR-TOKEN-FROM-TERMINAL`ï¼ˆå‚é˜…æ–°æ‰‹å¼•å¯¼ä¸­çš„æŽ§åˆ¶ UI è¾“å‡ºï¼‰ã€‚ä½¿ç”¨ ` devices list` å’Œ ` devices approve <requestId>` æ‰¹å‡†è®¾å¤‡ã€‚å¦‚æœ‰ç–‘é—®ï¼Œä»Žæµè§ˆå™¨ä½¿ç”¨ Shelleyï¼

## è¿œç¨‹è®¿é—®

è¿œç¨‹è®¿é—®ç”± [exe.dev](https://exe.dev) çš„è®¤è¯å¤„ç†ã€‚é»˜è®¤æƒ…å†µä¸‹ï¼Œæ¥è‡ªç«¯å£ 8000 çš„ HTTP æµé‡é€šè¿‡ç”µå­é‚®ä»¶è®¤è¯è½¬å‘åˆ° `https://<vm-name>.exe.xyz`ã€‚

## æ›´æ–°

```bash
npm i -g @latest
 doctor
 gateway restart
 health
```

æŒ‡å—ï¼š[æ›´æ–°](/install/updating)


