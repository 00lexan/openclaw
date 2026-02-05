---
read_when:
  - åœ¨ Oracle Cloud ä¸Šè®¾ç½® 
  - å¯»æ‰¾  çš„ä½Žæˆæœ¬ VPS æ‰˜ç®¡
  - æƒ³è¦åœ¨å°åž‹æœåŠ¡å™¨ä¸Š 24/7 è¿è¡Œ 
summary: åœ¨ Oracle Cloud ä¸Šè¿è¡Œ ï¼ˆAlways Free ARMï¼‰
title: Oracle Cloud
x-i18n:
  generated_at: "2026-02-03T07:53:25Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: d3cc337b40ea512b5756ac15ec4341fecad417ede75f717fea3035678c7c6697
  source_path: platforms/oracle.md
  workflow: 15
---

# åœ¨ Oracle Cloudï¼ˆOCIï¼‰ä¸Šè¿è¡Œ 

## ç›®æ ‡

åœ¨ Oracle Cloud çš„ **Always Free** ARM å±‚ä¸Šè¿è¡ŒæŒä¹…åŒ–çš„  Gateway ç½‘å…³ã€‚

Oracle çš„å…è´¹å±‚éžå¸¸é€‚åˆ ï¼ˆç‰¹åˆ«æ˜¯å¦‚æžœä½ å·²ç»æœ‰ OCI è´¦æˆ·ï¼‰ï¼Œä½†æœ‰ä¸€äº›æƒè¡¡ï¼š

- ARM æž¶æž„ï¼ˆå¤§å¤šæ•°ä¸œè¥¿éƒ½èƒ½å·¥ä½œï¼Œä½†æŸäº›äºŒè¿›åˆ¶æ–‡ä»¶å¯èƒ½ä»…æ”¯æŒ x86ï¼‰
- å®¹é‡å’Œæ³¨å†Œå¯èƒ½æ¯”è¾ƒéº»çƒ¦

## æˆæœ¬æ¯”è¾ƒï¼ˆ2026ï¼‰

| æä¾›å•†       | æ–¹æ¡ˆ            | é…ç½®                  | ä»·æ ¼/æœˆ | è¯´æ˜Ž                 |
| ------------ | --------------- | --------------------- | ------- | -------------------- |
| Oracle Cloud | Always Free ARM | æœ€å¤š 4 OCPUï¼Œ24GB RAM | $0      | ARMï¼Œå®¹é‡æœ‰é™        |
| Hetzner      | CX22            | 2 vCPUï¼Œ4GB RAM       | ~ $4    | æœ€ä¾¿å®œçš„ä»˜è´¹é€‰é¡¹     |
| DigitalOcean | Basic           | 1 vCPUï¼Œ1GB RAM       | $6      | æ˜“ç”¨çš„ UIï¼Œæ–‡æ¡£å®Œå–„  |
| Vultr        | Cloud Compute   | 1 vCPUï¼Œ1GB RAM       | $6      | å¤šä¸ªåœ°åŒº             |
| Linode       | Nanode          | 1 vCPUï¼Œ1GB RAM       | $5      | çŽ°ä¸º Akamai çš„ä¸€éƒ¨åˆ† |

---

## å…ˆå†³æ¡ä»¶

- Oracle Cloud è´¦æˆ·ï¼ˆ[æ³¨å†Œ](https://www.oracle.com/cloud/free/)ï¼‰â€”â€”å¦‚æžœé‡åˆ°é—®é¢˜è¯·å‚é˜…[ç¤¾åŒºæ³¨å†ŒæŒ‡å—](https://gist.github.com/rssnyder/51e3cfedd730e7dd5f4a816143b25dbd)
- Tailscale è´¦æˆ·ï¼ˆåœ¨ [tailscale.com](https://tailscale.com) å…è´¹ï¼‰
- çº¦ 30 åˆ†é’Ÿ

## 1) åˆ›å»º OCI å®žä¾‹

1. ç™»å½• [Oracle Cloud Console](https://cloud.oracle.com/)
2. å¯¼èˆªåˆ° **Compute â†’ Instances â†’ Create Instance**
3. é…ç½®ï¼š
   - **Name:** ``
   - **Image:** Ubuntu 24.04 (aarch64)
   - **Shape:** `VM.Standard.A1.Flex`ï¼ˆAmpere ARMï¼‰
   - **OCPUs:** 2ï¼ˆæˆ–æœ€å¤š 4ï¼‰
   - **Memory:** 12 GBï¼ˆæˆ–æœ€å¤š 24 GBï¼‰
   - **Boot volume:** 50 GBï¼ˆæœ€å¤š 200 GB å…è´¹ï¼‰
   - **SSH key:** æ·»åŠ ä½ çš„å…¬é’¥
4. ç‚¹å‡» **Create**
5. è®°å½•å…¬ç½‘ IP åœ°å€

**æç¤ºï¼š** å¦‚æžœå®žä¾‹åˆ›å»ºå¤±è´¥å¹¶æ˜¾ç¤º"Out of capacity"ï¼Œå°è¯•ä¸åŒçš„å¯ç”¨æ€§åŸŸæˆ–ç¨åŽé‡è¯•ã€‚å…è´¹å±‚å®¹é‡æœ‰é™ã€‚

## 2) è¿žæŽ¥å¹¶æ›´æ–°

```bash
# é€šè¿‡å…¬ç½‘ IP è¿žæŽ¥
ssh ubuntu@YOUR_PUBLIC_IP

# æ›´æ–°ç³»ç»Ÿ
sudo apt update && sudo apt upgrade -y
sudo apt install -y build-essential
```

**æ³¨æ„ï¼š** `build-essential` æ˜¯æŸäº›ä¾èµ–é¡¹ ARM ç¼–è¯‘æ‰€å¿…éœ€çš„ã€‚

## 3) é…ç½®ç”¨æˆ·å’Œä¸»æœºå

```bash
# è®¾ç½®ä¸»æœºå
sudo hostnamectl set-hostname 

# ä¸º ubuntu ç”¨æˆ·è®¾ç½®å¯†ç 
sudo passwd ubuntu

# å¯ç”¨ lingeringï¼ˆæ³¨é”€åŽä¿æŒç”¨æˆ·æœåŠ¡è¿è¡Œï¼‰
sudo loginctl enable-linger ubuntu
```

## 4) å®‰è£… Tailscale

```bash
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up --ssh --hostname=
```

è¿™ä¼šå¯ç”¨ Tailscale SSHï¼Œæ‰€ä»¥ä½ å¯ä»¥ä»Ž tailnet ä¸Šçš„ä»»ä½•è®¾å¤‡é€šè¿‡ `ssh ` è¿žæŽ¥â€”â€”ä¸éœ€è¦å…¬ç½‘ IPã€‚

éªŒè¯ï¼š

```bash
tailscale status
```

**ä»ŽçŽ°åœ¨å¼€å§‹ï¼Œé€šè¿‡ Tailscale è¿žæŽ¥ï¼š** `ssh ubuntu@`ï¼ˆæˆ–ä½¿ç”¨ Tailscale IPï¼‰ã€‚

## 5) å®‰è£… 

```bash
curl -fsSL https://.ai/install.sh | bash
source ~/.bashrc
```

å½“æç¤º"How do you want to hatch your bot?"æ—¶ï¼Œé€‰æ‹© **"Do this later"**ã€‚

> æ³¨æ„ï¼šå¦‚æžœä½ é‡åˆ° ARM åŽŸç”Ÿæž„å»ºé—®é¢˜ï¼Œåœ¨ä½¿ç”¨ Homebrew ä¹‹å‰å…ˆä»Žç³»ç»ŸåŒ…å¼€å§‹ï¼ˆä¾‹å¦‚ `sudo apt install -y build-essential`ï¼‰ã€‚

## 6) é…ç½® Gateway ç½‘å…³ï¼ˆloopback + ä»¤ç‰Œè®¤è¯ï¼‰å¹¶å¯ç”¨ Tailscale Serve

ä½¿ç”¨ä»¤ç‰Œè®¤è¯ä½œä¸ºé»˜è®¤å€¼ã€‚å®ƒæ˜¯å¯é¢„æµ‹çš„ï¼Œé¿å…éœ€è¦ä»»ä½•"ä¸å®‰å…¨è®¤è¯"çš„æŽ§åˆ¶ UI æ ‡å¿—ã€‚

```bash
# åœ¨ VM ä¸Šä¿æŒ Gateway ç½‘å…³ç§æœ‰
 config set gateway.bind loopback

# è¦æ±‚ Gateway ç½‘å…³ + æŽ§åˆ¶ UI çš„è®¤è¯
 config set gateway.auth.mode token
 doctor --generate-gateway-token

# é€šè¿‡ Tailscale Serve æš´éœ²ï¼ˆHTTPS + tailnet è®¿é—®ï¼‰
 config set gateway.tailscale.mode serve
 config set gateway.trustedProxies '["127.0.0.1"]'

systemctl --user restart -gateway
```

## 7) éªŒè¯

```bash
# æ£€æŸ¥ç‰ˆæœ¬
 --version

# æ£€æŸ¥å®ˆæŠ¤è¿›ç¨‹çŠ¶æ€
systemctl --user status -gateway

# æ£€æŸ¥ Tailscale Serve
tailscale serve status

# æµ‹è¯•æœ¬åœ°å“åº”
curl http://localhost:18789
```

## 8) é”å®š VCN å®‰å…¨

çŽ°åœ¨ä¸€åˆ‡æ­£å¸¸å·¥ä½œäº†ï¼Œé”å®š VCN ä»¥é˜»æ­¢é™¤ Tailscale ä¹‹å¤–çš„æ‰€æœ‰æµé‡ã€‚OCI çš„è™šæ‹Ÿäº‘ç½‘ç»œå……å½“ç½‘ç»œè¾¹ç¼˜çš„é˜²ç«å¢™â€”â€”æµé‡åœ¨åˆ°è¾¾ä½ çš„å®žä¾‹ä¹‹å‰å°±è¢«é˜»æ­¢ã€‚

1. åœ¨ OCI Console ä¸­è½¬åˆ° **Networking â†’ Virtual Cloud Networks**
2. ç‚¹å‡»ä½ çš„ VCN â†’ **Security Lists** â†’ Default Security List
3. **ç§»é™¤**é™¤ä»¥ä¸‹ä¹‹å¤–çš„æ‰€æœ‰å…¥ç«™è§„åˆ™ï¼š
   - `0.0.0.0/0 UDP 41641`ï¼ˆTailscaleï¼‰
4. ä¿ç•™é»˜è®¤å‡ºç«™è§„åˆ™ï¼ˆå…è®¸æ‰€æœ‰å‡ºç«™ï¼‰

è¿™ä¼šåœ¨ç½‘ç»œè¾¹ç¼˜é˜»æ­¢ç«¯å£ 22 ä¸Šçš„ SSHã€HTTPã€HTTPS å’Œå…¶ä»–æ‰€æœ‰å†…å®¹ã€‚ä»ŽçŽ°åœ¨å¼€å§‹ï¼Œä½ åªèƒ½é€šè¿‡ Tailscale è¿žæŽ¥ã€‚

---

## è®¿é—®æŽ§åˆ¶ UI

ä»Žä½  Tailscale ç½‘ç»œä¸Šçš„ä»»ä½•è®¾å¤‡ï¼š

```
https://.<tailnet-name>.ts.net/
```

å°† `<tailnet-name>` æ›¿æ¢ä¸ºä½ çš„ tailnet åç§°ï¼ˆåœ¨ `tailscale status` ä¸­å¯è§ï¼‰ã€‚

ä¸éœ€è¦ SSH éš§é“ã€‚Tailscale æä¾›ï¼š

- HTTPS åŠ å¯†ï¼ˆè‡ªåŠ¨è¯ä¹¦ï¼‰
- é€šè¿‡ Tailscale èº«ä»½è®¤è¯
- ä»Ž tailnet ä¸Šçš„ä»»ä½•è®¾å¤‡ï¼ˆç¬”è®°æœ¬ç”µè„‘ã€æ‰‹æœºç­‰ï¼‰è®¿é—®

---

## å®‰å…¨ï¼šVCN + Tailscaleï¼ˆæŽ¨èåŸºçº¿ï¼‰

é€šè¿‡é”å®š VCNï¼ˆä»…å¼€æ”¾ UDP 41641ï¼‰å¹¶å°† Gateway ç½‘å…³ç»‘å®šåˆ° loopbackï¼Œä½ èŽ·å¾—äº†å¼ºå¤§çš„çºµæ·±é˜²å¾¡ï¼šå…¬å…±æµé‡åœ¨ç½‘ç»œè¾¹ç¼˜è¢«é˜»æ­¢ï¼Œç®¡ç†è®¿é—®é€šè¿‡ä½ çš„ tailnet è¿›è¡Œã€‚

æ­¤è®¾ç½®é€šå¸¸æ¶ˆé™¤äº†çº¯ç²¹ä¸ºäº†é˜»æ­¢äº’è”ç½‘èŒƒå›´çš„ SSH æš´åŠ›ç ´è§£è€Œéœ€è¦é¢å¤–çš„åŸºäºŽä¸»æœºçš„é˜²ç«å¢™è§„åˆ™çš„*éœ€æ±‚*â€”â€”ä½†ä½ ä»åº”ä¿æŒæ“ä½œç³»ç»Ÿæ›´æ–°ï¼Œè¿è¡Œ ` security audit`ï¼Œå¹¶éªŒè¯ä½ æ²¡æœ‰æ„å¤–åœ°åœ¨å…¬å…±æŽ¥å£ä¸Šç›‘å¬ã€‚

### å·²ç»å—ä¿æŠ¤çš„å†…å®¹

| ä¼ ç»Ÿæ­¥éª¤        | æ˜¯å¦éœ€è¦ï¼Ÿ | åŽŸå›                                              |
| --------------- | ---------- | ------------------------------------------------ |
| UFW é˜²ç«å¢™      | å¦         | VCN åœ¨æµé‡åˆ°è¾¾å®žä¾‹ä¹‹å‰å°±é˜»æ­¢äº†                   |
| fail2ban        | å¦         | å¦‚æžœç«¯å£ 22 åœ¨ VCN è¢«é˜»æ­¢åˆ™æ— æš´åŠ›ç ´è§£            |
| sshd åŠ å›º       | å¦         | Tailscale SSH ä¸ä½¿ç”¨ sshd                        |
| ç¦ç”¨ root ç™»å½•  | å¦         | Tailscale ä½¿ç”¨ Tailscale èº«ä»½ï¼Œè€Œä¸æ˜¯ç³»ç»Ÿç”¨æˆ·    |
| ä»… SSH å¯†é’¥è®¤è¯ | å¦         | Tailscale é€šè¿‡ä½ çš„ tailnet è®¤è¯                  |
| IPv6 åŠ å›º       | é€šå¸¸ä¸éœ€è¦ | å–å†³äºŽä½ çš„ VCN/å­ç½‘è®¾ç½®ï¼›éªŒè¯å®žé™…åˆ†é…/æš´éœ²çš„å†…å®¹ |

### ä»ç„¶æŽ¨è

- **å‡­è¯æƒé™ï¼š** `chmod 700 ~/.`
- **å®‰å…¨å®¡è®¡ï¼š** ` security audit`
- **ç³»ç»Ÿæ›´æ–°ï¼š** å®šæœŸ `sudo apt update && sudo apt upgrade`
- **ç›‘æŽ§ Tailscaleï¼š** åœ¨ [Tailscale ç®¡ç†æŽ§åˆ¶å°](https://login.tailscale.com/admin) ä¸­æŸ¥çœ‹è®¾å¤‡

### éªŒè¯å®‰å…¨æ€åŠ¿

```bash
# ç¡®è®¤æ²¡æœ‰å…¬å…±ç«¯å£åœ¨ç›‘å¬
sudo ss -tlnp | grep -v '127.0.0.1\|::1'

# éªŒè¯ Tailscale SSH å¤„äºŽæ´»åŠ¨çŠ¶æ€
tailscale status | grep -q 'offers: ssh' && echo "Tailscale SSH active"

# å¯é€‰ï¼šå®Œå…¨ç¦ç”¨ sshd
sudo systemctl disable --now ssh
```

---

## å¤‡ç”¨æ–¹æ¡ˆï¼šSSH éš§é“

å¦‚æžœ Tailscale Serve ä¸å·¥ä½œï¼Œä½¿ç”¨ SSH éš§é“ï¼š

```bash
# ä»Žä½ çš„æœ¬åœ°æœºå™¨ï¼ˆé€šè¿‡ Tailscaleï¼‰
ssh -L 18789:127.0.0.1:18789 ubuntu@
```

ç„¶åŽæ‰“å¼€ `http://localhost:18789`ã€‚

---

## æ•…éšœæŽ’é™¤

### å®žä¾‹åˆ›å»ºå¤±è´¥ï¼ˆ"Out of capacity"ï¼‰

å…è´¹å±‚ ARM å®žä¾‹å¾ˆå—æ¬¢è¿Žã€‚å°è¯•ï¼š

- ä¸åŒçš„å¯ç”¨æ€§åŸŸ
- åœ¨éžé«˜å³°æ—¶æ®µï¼ˆæ¸…æ™¨ï¼‰é‡è¯•
- é€‰æ‹© shape æ—¶ä½¿ç”¨"Always Free"è¿‡æ»¤å™¨

### Tailscale æ— æ³•è¿žæŽ¥

```bash
# æ£€æŸ¥çŠ¶æ€
sudo tailscale status

# é‡æ–°è®¤è¯
sudo tailscale up --ssh --hostname= --reset
```

### Gateway ç½‘å…³æ— æ³•å¯åŠ¨

```bash
 gateway status
 doctor --non-interactive
journalctl --user -u -gateway -n 50
```

### æ— æ³•è®¿é—®æŽ§åˆ¶ UI

```bash
# éªŒè¯ Tailscale Serve æ­£åœ¨è¿è¡Œ
tailscale serve status

# æ£€æŸ¥ Gateway ç½‘å…³æ˜¯å¦åœ¨ç›‘å¬
curl http://localhost:18789

# å¦‚éœ€è¦åˆ™é‡å¯
systemctl --user restart -gateway
```

### ARM äºŒè¿›åˆ¶æ–‡ä»¶é—®é¢˜

æŸäº›å·¥å…·å¯èƒ½æ²¡æœ‰ ARM æž„å»ºã€‚æ£€æŸ¥ï¼š

```bash
uname -m  # åº”è¯¥æ˜¾ç¤º aarch64
```

å¤§å¤šæ•° npm åŒ…å·¥ä½œæ­£å¸¸ã€‚å¯¹äºŽäºŒè¿›åˆ¶æ–‡ä»¶ï¼Œå¯»æ‰¾ `linux-arm64` æˆ– `aarch64` ç‰ˆæœ¬ã€‚

---

## æŒä¹…åŒ–

æ‰€æœ‰çŠ¶æ€å­˜å‚¨åœ¨ï¼š

- `~/./` â€” é…ç½®ã€å‡­è¯ã€ä¼šè¯æ•°æ®
- `~/./workspace/` â€” å·¥ä½œåŒºï¼ˆSOUL.mdã€è®°å¿†ã€äº§ç‰©ï¼‰

å®šæœŸå¤‡ä»½ï¼š

```bash
tar -czvf -backup.tar.gz ~/. ~/./workspace
```

---

## å¦è¯·å‚é˜…

- [Gateway ç½‘å…³è¿œç¨‹è®¿é—®](/gateway/remote) â€” å…¶ä»–è¿œç¨‹è®¿é—®æ¨¡å¼
- [Tailscale é›†æˆ](/gateway/tailscale) â€” å®Œæ•´çš„ Tailscale æ–‡æ¡£
- [Gateway ç½‘å…³é…ç½®](/gateway/configuration) â€” æ‰€æœ‰é…ç½®é€‰é¡¹
- [DigitalOcean æŒ‡å—](/platforms/digitalocean) â€” å¦‚æžœä½ æƒ³è¦ä»˜è´¹ + æ›´å®¹æ˜“æ³¨å†Œ
- [Hetzner æŒ‡å—](/platforms/hetzner) â€” åŸºäºŽ Docker çš„æ›¿ä»£æ–¹æ¡ˆ


