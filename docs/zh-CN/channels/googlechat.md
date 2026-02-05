---
read_when:
  - å¼€å‘ Google Chat æ¸ é“åŠŸèƒ½æ—¶
summary: Google Chat åº”ç”¨æ”¯æŒçŠ¶æ€ã€åŠŸèƒ½å’Œé…ç½®
title: Google Chat
x-i18n:
  generated_at: "2026-02-03T07:43:39Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 3b2bb116cdd12614c3d5afddd0879e9deb05c3606e3a2385cbc07f23552b357e
  source_path: channels/googlechat.md
  workflow: 15
---

# Google Chatï¼ˆChat APIï¼‰

çŠ¶æ€ï¼šå·²æ”¯æŒé€šè¿‡ Google Chat API webhooksï¼ˆä»… HTTPï¼‰ä½¿ç”¨ç§ä¿¡å’Œç©ºé—´ã€‚

## å¿«é€Ÿè®¾ç½®ï¼ˆæ–°æ‰‹ï¼‰

1. åˆ›å»ºä¸€ä¸ª Google Cloud é¡¹ç›®å¹¶å¯ç”¨ **Google Chat API**ã€‚
   - å‰å¾€ï¼š[Google Chat API Credentials](https://console.cloud.google.com/apis/api/chat.googleapis.com/credentials)
   - å¦‚æžœ API å°šæœªå¯ç”¨ï¼Œè¯·å¯ç”¨å®ƒã€‚
2. åˆ›å»ºä¸€ä¸ª**æœåŠ¡è´¦å·**ï¼š
   - ç‚¹å‡» **Create Credentials** > **Service Account**ã€‚
   - éšæ„å‘½åï¼ˆä¾‹å¦‚ `-chat`ï¼‰ã€‚
   - æƒé™ç•™ç©ºï¼ˆç‚¹å‡» **Continue**ï¼‰ã€‚
   - æœ‰è®¿é—®æƒé™çš„ä¸»è´¦å·ç•™ç©ºï¼ˆç‚¹å‡» **Done**ï¼‰ã€‚
3. åˆ›å»ºå¹¶ä¸‹è½½ **JSON å¯†é’¥**ï¼š
   - åœ¨æœåŠ¡è´¦å·åˆ—è¡¨ä¸­ï¼Œç‚¹å‡»åˆšåˆšåˆ›å»ºçš„è´¦å·ã€‚
   - å‰å¾€ **Keys** æ ‡ç­¾é¡µã€‚
   - ç‚¹å‡» **Add Key** > **Create new key**ã€‚
   - é€‰æ‹© **JSON** å¹¶ç‚¹å‡» **Create**ã€‚
4. å°†ä¸‹è½½çš„ JSON æ–‡ä»¶å­˜å‚¨åœ¨ Gateway ç½‘å…³ä¸»æœºä¸Šï¼ˆä¾‹å¦‚ `~/./googlechat-service-account.json`ï¼‰ã€‚
5. åœ¨ [Google Cloud Console Chat Configuration](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat) ä¸­åˆ›å»ºä¸€ä¸ª Google Chat åº”ç”¨ï¼š
   - å¡«å†™ **Application info**ï¼š
     - **App name**ï¼šï¼ˆä¾‹å¦‚ ``ï¼‰
     - **Avatar URL**ï¼šï¼ˆä¾‹å¦‚ `https://.ai/logo.png`ï¼‰
     - **Description**ï¼šï¼ˆä¾‹å¦‚ `Personal AI Assistant`ï¼‰
   - å¯ç”¨ **Interactive features**ã€‚
   - åœ¨ **Functionality** ä¸‹ï¼Œå‹¾é€‰ **Join spaces and group conversations**ã€‚
   - åœ¨ **Connection settings** ä¸‹ï¼Œé€‰æ‹© **HTTP endpoint URL**ã€‚
   - åœ¨ **Triggers** ä¸‹ï¼Œé€‰æ‹© **Use a common HTTP endpoint URL for all triggers** å¹¶å°†å…¶è®¾ç½®ä¸ºä½ çš„ Gateway ç½‘å…³å…¬ç½‘ URL åŽåŠ  `/googlechat`ã€‚
     - _æç¤ºï¼šè¿è¡Œ ` status` æŸ¥çœ‹ä½ çš„ Gateway ç½‘å…³å…¬ç½‘ URLã€‚_
   - åœ¨ **Visibility** ä¸‹ï¼Œå‹¾é€‰ **Make this Chat app available to specific people and groups in &lt;Your Domain&gt;**ã€‚
   - åœ¨æ–‡æœ¬æ¡†ä¸­è¾“å…¥ä½ çš„é‚®ç®±åœ°å€ï¼ˆä¾‹å¦‚ `user@example.com`ï¼‰ã€‚
   - ç‚¹å‡»åº•éƒ¨çš„ **Save**ã€‚
6. **å¯ç”¨åº”ç”¨çŠ¶æ€**ï¼š
   - ä¿å­˜åŽï¼Œ**åˆ·æ–°é¡µé¢**ã€‚
   - æ‰¾åˆ° **App status** éƒ¨åˆ†ï¼ˆé€šå¸¸åœ¨ä¿å­˜åŽä½äºŽé¡¶éƒ¨æˆ–åº•éƒ¨é™„è¿‘ï¼‰ã€‚
   - å°†çŠ¶æ€æ›´æ”¹ä¸º **Live - available to users**ã€‚
   - å†æ¬¡ç‚¹å‡» **Save**ã€‚
7. ä½¿ç”¨æœåŠ¡è´¦å·è·¯å¾„å’Œ webhook audience é…ç½® ï¼š
   - çŽ¯å¢ƒå˜é‡ï¼š`GOOGLE_CHAT_SERVICE_ACCOUNT_FILE=/path/to/service-account.json`
   - æˆ–é…ç½®ï¼š`channels.googlechat.serviceAccountFile: "/path/to/service-account.json"`ã€‚
8. è®¾ç½® webhook audience ç±»åž‹å’Œå€¼ï¼ˆä¸Žä½ çš„ Chat åº”ç”¨é…ç½®åŒ¹é…ï¼‰ã€‚
9. å¯åŠ¨ Gateway ç½‘å…³ã€‚Google Chat å°†å‘ä½ çš„ webhook è·¯å¾„å‘é€ POST è¯·æ±‚ã€‚

## æ·»åŠ åˆ° Google Chat

Gateway ç½‘å…³è¿è¡ŒåŽï¼Œä¸”ä½ çš„é‚®ç®±å·²æ·»åŠ åˆ°å¯è§æ€§åˆ—è¡¨ä¸­ï¼š

1. å‰å¾€ [Google Chat](https://chat.google.com/)ã€‚
2. ç‚¹å‡» **Direct Messages** æ—è¾¹çš„ **+**ï¼ˆåŠ å·ï¼‰å›¾æ ‡ã€‚
3. åœ¨æœç´¢æ ï¼ˆé€šå¸¸ç”¨äºŽæ·»åŠ è”ç³»äººçš„ä½ç½®ï¼‰ä¸­ï¼Œè¾“å…¥ä½ åœ¨ Google Cloud Console ä¸­é…ç½®çš„ **App name**ã€‚
   - **æ³¨æ„**ï¼šè¯¥æœºå™¨äºº*ä¸ä¼š*å‡ºçŽ°åœ¨"Marketplace"æµè§ˆåˆ—è¡¨ä¸­ï¼Œå› ä¸ºå®ƒæ˜¯ç§æœ‰åº”ç”¨ã€‚ä½ å¿…é¡»æŒ‰åç§°æœç´¢ã€‚
4. ä»Žç»“æžœä¸­é€‰æ‹©ä½ çš„æœºå™¨äººã€‚
5. ç‚¹å‡» **Add** æˆ– **Chat** å¼€å§‹ä¸€å¯¹ä¸€å¯¹è¯ã€‚
6. å‘é€"Hello"æ¥è§¦å‘åŠ©æ‰‹ï¼

## å…¬ç½‘ URLï¼ˆä»… Webhookï¼‰

Google Chat webhooks éœ€è¦ä¸€ä¸ªå…¬ç½‘ HTTPS ç«¯ç‚¹ã€‚ä¸ºäº†å®‰å…¨èµ·è§ï¼Œ**åªå°† `/googlechat` è·¯å¾„æš´éœ²åˆ°äº’è”ç½‘**ã€‚å°†  ä»ªè¡¨æ¿å’Œå…¶ä»–æ•æ„Ÿç«¯ç‚¹ä¿ç•™åœ¨ä½ çš„ç§æœ‰ç½‘ç»œä¸Šã€‚

### æ–¹æ¡ˆ Aï¼šTailscale Funnelï¼ˆæŽ¨èï¼‰

ä½¿ç”¨ Tailscale Serve æä¾›ç§æœ‰ä»ªè¡¨æ¿ï¼Œä½¿ç”¨ Funnel æä¾›å…¬ç½‘ webhook è·¯å¾„ã€‚è¿™æ ·å¯ä»¥ä¿æŒ `/` ç§æœ‰ï¼ŒåŒæ—¶åªæš´éœ² `/googlechat`ã€‚

1. **æ£€æŸ¥ä½ çš„ Gateway ç½‘å…³ç»‘å®šçš„åœ°å€ï¼š**

   ```bash
   ss -tlnp | grep 18789
   ```

   è®°ä¸‹ IP åœ°å€ï¼ˆä¾‹å¦‚ `127.0.0.1`ã€`0.0.0.0` æˆ–ä½ çš„ Tailscale IP å¦‚ `100.x.x.x`ï¼‰ã€‚

2. **ä»…å°†ä»ªè¡¨æ¿æš´éœ²ç»™ tailnetï¼ˆç«¯å£ 8443ï¼‰ï¼š**

   ```bash
   # å¦‚æžœç»‘å®šåˆ° localhostï¼ˆ127.0.0.1 æˆ– 0.0.0.0ï¼‰ï¼š
   tailscale serve --bg --https 8443 http://127.0.0.1:18789

   # å¦‚æžœä»…ç»‘å®šåˆ° Tailscale IPï¼ˆä¾‹å¦‚ 100.106.161.80ï¼‰ï¼š
   tailscale serve --bg --https 8443 http://100.106.161.80:18789
   ```

3. **ä»…å…¬å¼€æš´éœ² webhook è·¯å¾„ï¼š**

   ```bash
   # å¦‚æžœç»‘å®šåˆ° localhostï¼ˆ127.0.0.1 æˆ– 0.0.0.0ï¼‰ï¼š
   tailscale funnel --bg --set-path /googlechat http://127.0.0.1:18789/googlechat

   # å¦‚æžœä»…ç»‘å®šåˆ° Tailscale IPï¼ˆä¾‹å¦‚ 100.106.161.80ï¼‰ï¼š
   tailscale funnel --bg --set-path /googlechat http://100.106.161.80:18789/googlechat
   ```

4. **æŽˆæƒèŠ‚ç‚¹è®¿é—® Funnelï¼š**
   å¦‚æžœå‡ºçŽ°æç¤ºï¼Œè¯·è®¿é—®è¾“å‡ºä¸­æ˜¾ç¤ºçš„æŽˆæƒ URLï¼Œä»¥åœ¨ä½ çš„ tailnet ç­–ç•¥ä¸­ä¸ºæ­¤èŠ‚ç‚¹å¯ç”¨ Funnelã€‚

5. **éªŒè¯é…ç½®ï¼š**
   ```bash
   tailscale serve status
   tailscale funnel status
   ```

ä½ çš„å…¬ç½‘ webhook URL å°†æ˜¯ï¼š
`https://<node-name>.<tailnet>.ts.net/googlechat`

ä½ çš„ç§æœ‰ä»ªè¡¨æ¿ä»…é™ tailnet è®¿é—®ï¼š
`https://<node-name>.<tailnet>.ts.net:8443/`

åœ¨ Google Chat åº”ç”¨é…ç½®ä¸­ä½¿ç”¨å…¬ç½‘ URLï¼ˆä¸å¸¦ `:8443`ï¼‰ã€‚

> æ³¨æ„ï¼šæ­¤é…ç½®åœ¨é‡å¯åŽä¼šä¿ç•™ã€‚å¦‚éœ€ç¨åŽç§»é™¤ï¼Œè¯·è¿è¡Œ `tailscale funnel reset` å’Œ `tailscale serve reset`ã€‚

### æ–¹æ¡ˆ Bï¼šåå‘ä»£ç†ï¼ˆCaddyï¼‰

å¦‚æžœä½ ä½¿ç”¨åƒ Caddy è¿™æ ·çš„åå‘ä»£ç†ï¼Œåªä»£ç†ç‰¹å®šè·¯å¾„ï¼š

```caddy
your-domain.com {
    reverse_proxy /googlechat* localhost:18789
}
```

ä½¿ç”¨æ­¤é…ç½®ï¼Œä»»ä½•å‘å¾€ `your-domain.com/` çš„è¯·æ±‚å°†è¢«å¿½ç•¥æˆ–è¿”å›ž 404ï¼Œè€Œ `your-domain.com/googlechat` ä¼šå®‰å…¨åœ°è·¯ç”±åˆ° ã€‚

### æ–¹æ¡ˆ Cï¼šCloudflare Tunnel

é…ç½®ä½ çš„éš§é“å…¥å£è§„åˆ™ï¼Œåªè·¯ç”± webhook è·¯å¾„ï¼š

- **è·¯å¾„**ï¼š`/googlechat` -> `http://localhost:18789/googlechat`
- **é»˜è®¤è§„åˆ™**ï¼šHTTP 404ï¼ˆæœªæ‰¾åˆ°ï¼‰

## å·¥ä½œåŽŸç†

1. Google Chat å‘ Gateway ç½‘å…³å‘é€ webhook POST è¯·æ±‚ã€‚æ¯ä¸ªè¯·æ±‚éƒ½åŒ…å«ä¸€ä¸ª `Authorization: Bearer <token>` å¤´ã€‚
2.  æ ¹æ®é…ç½®çš„ `audienceType` + `audience` éªŒè¯ä»¤ç‰Œï¼š
   - `audienceType: "app-url"` â†’ audience æ˜¯ä½ çš„ HTTPS webhook URLã€‚
   - `audienceType: "project-number"` â†’ audience æ˜¯ Cloud é¡¹ç›®ç¼–å·ã€‚
3. æ¶ˆæ¯æŒ‰ç©ºé—´è·¯ç”±ï¼š
   - ç§ä¿¡ä½¿ç”¨ä¼šè¯é”® `agent:<agentId>:googlechat:dm:<spaceId>`ã€‚
   - ç©ºé—´ä½¿ç”¨ä¼šè¯é”® `agent:<agentId>:googlechat:group:<spaceId>`ã€‚
4. ç§ä¿¡è®¿é—®é»˜è®¤ä¸ºé…å¯¹æ¨¡å¼ã€‚æœªçŸ¥å‘é€è€…ä¼šæ”¶åˆ°é…å¯¹ç ï¼›ä½¿ç”¨ä»¥ä¸‹å‘½ä»¤æ‰¹å‡†ï¼š
   - ` pairing approve googlechat <code>`
5. ç¾¤ç»„ç©ºé—´é»˜è®¤éœ€è¦ @æåŠã€‚å¦‚æžœæåŠæ£€æµ‹éœ€è¦åº”ç”¨çš„ç”¨æˆ·åï¼Œè¯·ä½¿ç”¨ `botUser`ã€‚

## ç›®æ ‡æ ‡è¯†ç¬¦

ä½¿ç”¨è¿™äº›æ ‡è¯†ç¬¦è¿›è¡Œæ¶ˆæ¯æŠ•é€’å’Œå…è®¸åˆ—è¡¨ï¼š

- ç§ä¿¡ï¼š`users/<userId>` æˆ– `users/<email>`ï¼ˆæŽ¥å—é‚®ç®±åœ°å€ï¼‰ã€‚
- ç©ºé—´ï¼š`spaces/<spaceId>`ã€‚

## é…ç½®è¦ç‚¹

```json5
{
  channels: {
    googlechat: {
      enabled: true,
      serviceAccountFile: "/path/to/service-account.json",
      audienceType: "app-url",
      audience: "https://gateway.example.com/googlechat",
      webhookPath: "/googlechat",
      botUser: "users/1234567890", // å¯é€‰ï¼›å¸®åŠ©æåŠæ£€æµ‹
      dm: {
        policy: "pairing",
        allowFrom: ["users/1234567890", "name@example.com"],
      },
      groupPolicy: "allowlist",
      groups: {
        "spaces/AAAA": {
          allow: true,
          requireMention: true,
          users: ["users/1234567890"],
          systemPrompt: "Short answers only.",
        },
      },
      actions: { reactions: true },
      typingIndicator: "message",
      mediaMaxMb: 20,
    },
  },
}
```

æ³¨æ„äº‹é¡¹ï¼š

- æœåŠ¡è´¦å·å‡­è¯ä¹Ÿå¯ä»¥é€šè¿‡ `serviceAccount`ï¼ˆJSON å­—ç¬¦ä¸²ï¼‰å†…è”ä¼ é€’ã€‚
- å¦‚æžœæœªè®¾ç½® `webhookPath`ï¼Œé»˜è®¤ webhook è·¯å¾„ä¸º `/googlechat`ã€‚
- å½“ `actions.reactions` å¯ç”¨æ—¶ï¼Œå¯é€šè¿‡ `reactions` å·¥å…·å’Œ `channels action` ä½¿ç”¨è¡¨æƒ…å›žåº”ã€‚
- `typingIndicator` æ”¯æŒ `none`ã€`message`ï¼ˆé»˜è®¤ï¼‰å’Œ `reaction`ï¼ˆreaction éœ€è¦ç”¨æˆ· OAuthï¼‰ã€‚
- é™„ä»¶é€šè¿‡ Chat API ä¸‹è½½å¹¶å­˜å‚¨åœ¨åª’ä½“ç®¡é“ä¸­ï¼ˆå¤§å°å— `mediaMaxMb` é™åˆ¶ï¼‰ã€‚

## æ•…éšœæŽ’é™¤

### 405 Method Not Allowed

å¦‚æžœ Google Cloud Logs Explorer æ˜¾ç¤ºå¦‚ä¸‹é”™è¯¯ï¼š

```
status code: 405, reason phrase: HTTP error response: HTTP/1.1 405 Method Not Allowed
```

è¿™æ„å‘³ç€ webhook å¤„ç†ç¨‹åºæœªæ³¨å†Œã€‚å¸¸è§åŽŸå› ï¼š

1. **æ¸ é“æœªé…ç½®**ï¼šé…ç½®ä¸­ç¼ºå°‘ `channels.googlechat` éƒ¨åˆ†ã€‚ä½¿ç”¨ä»¥ä¸‹å‘½ä»¤éªŒè¯ï¼š

   ```bash
    config get channels.googlechat
   ```

   å¦‚æžœè¿”å›ž"Config path not found"ï¼Œè¯·æ·»åŠ é…ç½®ï¼ˆå‚è§[é…ç½®è¦ç‚¹](#é…ç½®è¦ç‚¹)ï¼‰ã€‚

2. **æ’ä»¶æœªå¯ç”¨**ï¼šæ£€æŸ¥æ’ä»¶çŠ¶æ€ï¼š

   ```bash
    plugins list | grep googlechat
   ```

   å¦‚æžœæ˜¾ç¤º"disabled"ï¼Œè¯·åœ¨é…ç½®ä¸­æ·»åŠ  `plugins.entries.googlechat.enabled: true`ã€‚

3. **Gateway ç½‘å…³æœªé‡å¯**ï¼šæ·»åŠ é…ç½®åŽï¼Œé‡å¯ Gateway ç½‘å…³ï¼š
   ```bash
    gateway restart
   ```

éªŒè¯æ¸ é“æ˜¯å¦æ­£åœ¨è¿è¡Œï¼š

```bash
 channels status
# åº”æ˜¾ç¤ºï¼šGoogle Chat default: enabled, configured, ...
```

### å…¶ä»–é—®é¢˜

- æ£€æŸ¥ ` channels status --probe` ä»¥æŸ¥çœ‹è®¤è¯é”™è¯¯æˆ–ç¼ºå°‘ audience é…ç½®ã€‚
- å¦‚æžœæ²¡æœ‰æ”¶åˆ°æ¶ˆæ¯ï¼Œè¯·ç¡®è®¤ Chat åº”ç”¨çš„ webhook URL å’Œäº‹ä»¶è®¢é˜…ã€‚
- å¦‚æžœæåŠé—¨æŽ§é˜»æ­¢äº†å›žå¤ï¼Œè¯·å°† `botUser` è®¾ç½®ä¸ºåº”ç”¨çš„ç”¨æˆ·èµ„æºåç§°å¹¶éªŒè¯ `requireMention`ã€‚
- åœ¨å‘é€æµ‹è¯•æ¶ˆæ¯æ—¶ä½¿ç”¨ ` logs --follow` æŸ¥çœ‹è¯·æ±‚æ˜¯å¦åˆ°è¾¾ Gateway ç½‘å…³ã€‚

ç›¸å…³æ–‡æ¡£ï¼š

- [Gateway ç½‘å…³é…ç½®](/gateway/configuration)
- [å®‰å…¨](/gateway/security)
- [è¡¨æƒ…å›žåº”](/tools/reactions)


