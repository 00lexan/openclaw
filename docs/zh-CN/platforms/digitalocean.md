---
read_when:
  - åœ¨ DigitalOcean ä¸Šè®¾ç½® 
  - å¯»æ‰¾ä¾¿å®œçš„ VPS æ‰˜ç®¡æ¥è¿è¡Œ 
summary: åœ¨ DigitalOcean ä¸Šè¿è¡Œ ï¼ˆç®€å•çš„ä»˜è´¹ VPS é€‰é¡¹ï¼‰
title: DigitalOcean
x-i18n:
  generated_at: "2026-02-03T07:51:55Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: d60559b8751da37413e5364e83c88254b476b2283386a0b07b2ca6b4e16157fc
  source_path: platforms/digitalocean.md
  workflow: 15
---

# åœ¨ DigitalOcean ä¸Šè¿è¡Œ 

## ç›®æ ‡

ä»¥ **$6/æœˆ**ï¼ˆæˆ–ä½¿ç”¨é¢„ç•™å®šä»· $4/æœˆï¼‰åœ¨ DigitalOcean ä¸Šè¿è¡ŒæŒä¹…çš„  Gateway ç½‘å…³ã€‚

å¦‚æžœä½ æƒ³è¦ $0/æœˆçš„é€‰é¡¹ä¸”ä¸ä»‹æ„ ARM + ç‰¹å®šæä¾›å•†çš„è®¾ç½®ï¼Œè¯·å‚é˜… [Oracle Cloud æŒ‡å—](/platforms/oracle)ã€‚

## æˆæœ¬æ¯”è¾ƒï¼ˆ2026ï¼‰

| æä¾›å•†       | æ–¹æ¡ˆ            | é…ç½®                  | ä»·æ ¼/æœˆ     | å¤‡æ³¨                     |
| ------------ | --------------- | --------------------- | ----------- | ------------------------ |
| Oracle Cloud | Always Free ARM | æœ€é«˜ 4 OCPUã€24GB RAM | $0          | ARMï¼Œå®¹é‡æœ‰é™ / æ³¨å†Œæœ‰å‘ |
| Hetzner      | CX22            | 2 vCPUã€4GB RAM       | â‚¬3.79 (~$4) | æœ€ä¾¿å®œçš„ä»˜è´¹é€‰é¡¹         |
| DigitalOcean | Basic           | 1 vCPUã€1GB RAM       | $6          | ç•Œé¢ç®€å•ï¼Œæ–‡æ¡£å®Œå–„       |
| Vultr        | Cloud Compute   | 1 vCPUã€1GB RAM       | $6          | å¤šåœ°åŒºå¯é€‰               |
| Linode       | Nanode          | 1 vCPUã€1GB RAM       | $5          | çŽ°ä¸º Akamai æ——ä¸‹         |

**é€‰æ‹©æä¾›å•†ï¼š**

- DigitalOceanï¼šæœ€ç®€å•çš„ç”¨æˆ·ä½“éªŒ + å¯é¢„æµ‹çš„è®¾ç½®ï¼ˆæœ¬æŒ‡å—ï¼‰
- Hetznerï¼šæ€§ä»·æ¯”é«˜ï¼ˆå‚è§ [Hetzner æŒ‡å—](/platforms/hetzner)ï¼‰
- Oracle Cloudï¼šå¯ä»¥ $0/æœˆï¼Œä½†æ›´éº»çƒ¦ä¸”ä»…é™ ARMï¼ˆå‚è§ [Oracle æŒ‡å—](/platforms/oracle)ï¼‰

---

## å‰ææ¡ä»¶

- DigitalOcean è´¦æˆ·ï¼ˆ[æ³¨å†Œå¯èŽ· $200 å…è´¹é¢åº¦](https://m.do.co/c/signup)ï¼‰
- SSH å¯†é’¥å¯¹ï¼ˆæˆ–æ„¿æ„ä½¿ç”¨å¯†ç è®¤è¯ï¼‰
- çº¦ 20 åˆ†é’Ÿ

## 1) åˆ›å»º Droplet

1. ç™»å½• [DigitalOcean](https://cloud.digitalocean.com/)
2. ç‚¹å‡» **Create â†’ Droplets**
3. é€‰æ‹©ï¼š
   - **Regionï¼š** ç¦»ä½ ï¼ˆæˆ–ä½ çš„ç”¨æˆ·ï¼‰æœ€è¿‘çš„åœ°åŒº
   - **Imageï¼š** Ubuntu 24.04 LTS
   - **Sizeï¼š** Basic â†’ Regular â†’ **$6/mo**ï¼ˆ1 vCPUã€1GB RAMã€25GB SSDï¼‰
   - **Authenticationï¼š** SSH å¯†é’¥ï¼ˆæŽ¨èï¼‰æˆ–å¯†ç 
4. ç‚¹å‡» **Create Droplet**
5. è®°ä¸‹ IP åœ°å€

## 2) é€šè¿‡ SSH è¿žæŽ¥

```bash
ssh root@YOUR_DROPLET_IP
```

## 3) å®‰è£… 

```bash
# Update system
apt update && apt upgrade -y

# Install Node.js 22
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt install -y nodejs

# Install 
curl -fsSL https://.ai/install.sh | bash

# Verify
 --version
```

## 4) è¿è¡Œæ–°æ‰‹å¼•å¯¼

```bash
 onboard --install-daemon
```

å‘å¯¼å°†å¼•å¯¼ä½ å®Œæˆï¼š

- æ¨¡åž‹è®¤è¯ï¼ˆAPI å¯†é’¥æˆ– OAuthï¼‰
- æ¸ é“è®¾ç½®ï¼ˆTelegramã€WhatsAppã€Discord ç­‰ï¼‰
- Gateway ç½‘å…³ä»¤ç‰Œï¼ˆè‡ªåŠ¨ç”Ÿæˆï¼‰
- å®ˆæŠ¤è¿›ç¨‹å®‰è£…ï¼ˆsystemdï¼‰

## 5) éªŒè¯ Gateway ç½‘å…³

```bash
# Check status
 status

# Check service
systemctl --user status -gateway.service

# View logs
journalctl --user -u -gateway.service -f
```

## 6) è®¿é—®æŽ§åˆ¶é¢æ¿

Gateway ç½‘å…³é»˜è®¤ç»‘å®šåˆ° loopbackã€‚è¦è®¿é—®æŽ§åˆ¶ç•Œé¢ï¼š

**é€‰é¡¹ Aï¼šSSH éš§é“ï¼ˆæŽ¨èï¼‰**

```bash
# From your local machine
ssh -L 18789:localhost:18789 root@YOUR_DROPLET_IP

# Then open: http://localhost:18789
```

**é€‰é¡¹ Bï¼šTailscale Serveï¼ˆHTTPSï¼Œä»… loopbackï¼‰**

```bash
# On the droplet
curl -fsSL https://tailscale.com/install.sh | sh
tailscale up

# Configure Gateway to use Tailscale Serve
 config set gateway.tailscale.mode serve
 gateway restart
```

æ‰“å¼€ï¼š`https://<magicdns>/`

æ³¨æ„äº‹é¡¹ï¼š

- Serve ä¿æŒ Gateway ç½‘å…³ä»… loopback å¹¶é€šè¿‡ Tailscale èº«ä»½å¤´è¿›è¡Œè®¤è¯ã€‚
- è¦æ”¹ä¸ºéœ€è¦ä»¤ç‰Œ/å¯†ç ï¼Œè¯·è®¾ç½® `gateway.auth.allowTailscale: false` æˆ–ä½¿ç”¨ `gateway.auth.mode: "password"`ã€‚

**é€‰é¡¹ Cï¼šTailnet ç»‘å®šï¼ˆä¸ä½¿ç”¨ Serveï¼‰**

```bash
 config set gateway.bind tailnet
 gateway restart
```

æ‰“å¼€ï¼š`http://<tailscale-ip>:18789`ï¼ˆéœ€è¦ä»¤ç‰Œï¼‰ã€‚

## 7) è¿žæŽ¥ä½ çš„æ¸ é“

### Telegram

```bash
 pairing list telegram
 pairing approve telegram <CODE>
```

### WhatsApp

```bash
 channels login whatsapp
# Scan QR code
```

å‚è§[æ¸ é“](/channels)äº†è§£å…¶ä»–æä¾›å•†ã€‚

---

## 1GB RAM çš„ä¼˜åŒ–

$6 çš„ droplet åªæœ‰ 1GB RAMã€‚ä¸ºäº†ä¿æŒè¿è¡Œæµç•…ï¼š

### æ·»åŠ  swapï¼ˆæŽ¨èï¼‰

```bash
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab
```

### ä½¿ç”¨æ›´è½»é‡çš„æ¨¡åž‹

å¦‚æžœé‡åˆ° OOMï¼Œè€ƒè™‘ï¼š

- ä½¿ç”¨åŸºäºŽ API çš„æ¨¡åž‹ï¼ˆClaudeã€GPTï¼‰è€Œä¸æ˜¯æœ¬åœ°æ¨¡åž‹
- å°† `agents.defaults.model.primary` è®¾ç½®ä¸ºæ›´å°çš„æ¨¡åž‹

### ç›‘æŽ§å†…å­˜

```bash
free -h
htop
```

---

## æŒä¹…åŒ–

æ‰€æœ‰çŠ¶æ€å­˜å‚¨åœ¨ï¼š

- `~/./` â€” é…ç½®ã€å‡­è¯ã€ä¼šè¯æ•°æ®
- `~/./workspace/` â€” å·¥ä½œåŒºï¼ˆSOUL.mdã€è®°å¿†ç­‰ï¼‰

è¿™äº›åœ¨é‡å¯åŽä¿ç•™ã€‚å®šæœŸå¤‡ä»½ï¼š

```bash
tar -czvf -backup.tar.gz ~/. ~/./workspace
```

---

## Oracle Cloud å…è´¹æ›¿ä»£æ–¹æ¡ˆ

Oracle Cloud æä¾› **Always Free** ARM å®žä¾‹ï¼Œæ¯”è¿™é‡Œä»»ä½•ä»˜è´¹é€‰é¡¹éƒ½å¼ºå¤§å¾—å¤š â€” æ¯æœˆ $0ã€‚

| ä½ å°†èŽ·å¾—       | é…ç½®             |
| -------------- | ---------------- |
| **4 OCPUs**    | ARM Ampere A1    |
| **24GB RAM**   | ç»°ç»°æœ‰ä½™         |
| **200GB å­˜å‚¨** | å—å­˜å‚¨å·         |
| **æ°¸ä¹…å…è´¹**   | ä¸æ”¶å–ä¿¡ç”¨å¡è´¹ç”¨ |

**æ³¨æ„äº‹é¡¹ï¼š**

- æ³¨å†Œå¯èƒ½æœ‰ç‚¹éº»çƒ¦ï¼ˆå¤±è´¥äº†å°±é‡è¯•ï¼‰
- ARM æž¶æž„ â€” å¤§å¤šæ•°ä¸œè¥¿éƒ½èƒ½å·¥ä½œï¼Œä½†æœ‰äº›äºŒè¿›åˆ¶æ–‡ä»¶éœ€è¦ ARM æž„å»º

å®Œæ•´è®¾ç½®æŒ‡å—è¯·å‚é˜… [Oracle Cloud](/platforms/oracle)ã€‚å…³äºŽæ³¨å†ŒæŠ€å·§å’Œæ³¨å†Œæµç¨‹æ•…éšœæŽ’é™¤ï¼Œè¯·å‚é˜…æ­¤[ç¤¾åŒºæŒ‡å—](https://gist.github.com/rssnyder/51e3cfedd730e7dd5f4a816143b25dbd)ã€‚

---

## æ•…éšœæŽ’é™¤

### Gateway ç½‘å…³æ— æ³•å¯åŠ¨

```bash
 gateway status
 doctor --non-interactive
journalctl -u  --no-pager -n 50
```

### ç«¯å£å·²è¢«ä½¿ç”¨

```bash
lsof -i :18789
kill <PID>
```

### å†…å­˜ä¸è¶³

```bash
# Check memory
free -h

# Add more swap
# Or upgrade to $12/mo droplet (2GB RAM)
```

---

## å¦è¯·å‚é˜…

- [Hetzner æŒ‡å—](/platforms/hetzner) â€” æ›´ä¾¿å®œã€æ›´å¼ºå¤§
- [Docker å®‰è£…](/install/docker) â€” å®¹å™¨åŒ–è®¾ç½®
- [Tailscale](/gateway/tailscale) â€” å®‰å…¨è¿œç¨‹è®¿é—®
- [é…ç½®](/gateway/configuration) â€” å®Œæ•´é…ç½®å‚è€ƒ


