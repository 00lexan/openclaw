---
read_when:
  - å‘æ–°ç”¨æˆ·ä»‹ç» 
summary:  æ˜¯ä¸€ä¸ªå¤šæ¸ é“ AI æ™ºèƒ½ä½“ Gateway ç½‘å…³ï¼Œå¯åœ¨ä»»ä½•æ“ä½œç³»ç»Ÿä¸Šè¿è¡Œã€‚
title: 
x-i18n:
  generated_at: "2026-02-04T17:53:40Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: fc8babf7885ef91d526795051376d928599c4cf8aff75400138a0d7d9fa3b75f
  source_path: index.md
  workflow: 15
---

#  ðŸ¦ž

<p align="center">
    <img
        src="/assets/-logo-text-dark.png"
        alt=""
        width="500"
        class="dark:hidden"
    />
    <img
        src="/assets/-logo-text.png"
        alt=""
        width="500"
        class="hidden dark:block"
    />
</p>

> _"åŽ»å£³ï¼åŽ»å£³ï¼"_ â€” å¤§æ¦‚æ˜¯ä¸€åªå¤ªç©ºé¾™è™¾è¯´çš„

<p align="center">
  <strong>é€‚ç”¨äºŽä»»ä½•æ“ä½œç³»ç»Ÿçš„ AI æ™ºèƒ½ä½“ Gateway ç½‘å…³ï¼Œæ”¯æŒ WhatsAppã€Telegramã€Discordã€iMessage ç­‰ã€‚</strong><br />
  å‘é€æ¶ˆæ¯ï¼Œéšæ—¶éšåœ°èŽ·å–æ™ºèƒ½ä½“å“åº”ã€‚é€šè¿‡æ’ä»¶å¯æ·»åŠ  Mattermost ç­‰æ›´å¤šæ¸ é“ã€‚
</p>

<Columns>
  <Card title="å…¥é—¨æŒ‡å—" href="/start/getting-started" icon="rocket">
    å®‰è£…  å¹¶åœ¨å‡ åˆ†é’Ÿå†…å¯åŠ¨ Gateway ç½‘å…³ã€‚
  </Card>
  <Card title="è¿è¡Œå‘å¯¼" href="/start/wizard" icon="sparkles">
    é€šè¿‡ ` onboard` å’Œé…å¯¹æµç¨‹è¿›è¡Œå¼•å¯¼å¼è®¾ç½®ã€‚
  </Card>
  <Card title="æ‰“å¼€æŽ§åˆ¶ç•Œé¢" href="/web/control-ui" icon="layout-dashboard">
    å¯åŠ¨æµè§ˆå™¨ä»ªè¡¨æ¿ï¼Œç®¡ç†èŠå¤©ã€é…ç½®å’Œä¼šè¯ã€‚
  </Card>
</Columns>

 é€šè¿‡å•ä¸ª Gateway ç½‘å…³è¿›ç¨‹å°†èŠå¤©åº”ç”¨è¿žæŽ¥åˆ° Pi ç­‰ç¼–ç¨‹æ™ºèƒ½ä½“ã€‚å®ƒä¸º  åŠ©æ‰‹æä¾›æ”¯æŒï¼Œå¹¶æ”¯æŒæœ¬åœ°æˆ–è¿œç¨‹éƒ¨ç½²ã€‚

## å·¥ä½œåŽŸç†

```mermaid
flowchart LR
  A["Chat apps + plugins"] --> B["Gateway"]
  B --> C["Pi agent"]
  B --> D["CLI"]
  B --> E["Web Control UI"]
  B --> F["macOS app"]
  B --> G["iOS and Android nodes"]
```

Gateway ç½‘å…³æ˜¯ä¼šè¯ã€è·¯ç”±å’Œæ¸ é“è¿žæŽ¥çš„å”¯ä¸€äº‹å®žæ¥æºã€‚

## æ ¸å¿ƒåŠŸèƒ½

<Columns>
  <Card title="å¤šæ¸ é“ Gateway ç½‘å…³" icon="network">
    é€šè¿‡å•ä¸ª Gateway ç½‘å…³è¿›ç¨‹è¿žæŽ¥ WhatsAppã€Telegramã€Discord å’Œ iMessageã€‚
  </Card>
  <Card title="æ’ä»¶æ¸ é“" icon="plug">
    é€šè¿‡æ‰©å±•åŒ…æ·»åŠ  Mattermost ç­‰æ›´å¤šæ¸ é“ã€‚
  </Card>
  <Card title="å¤šæ™ºèƒ½ä½“è·¯ç”±" icon="route">
    æŒ‰æ™ºèƒ½ä½“ã€å·¥ä½œåŒºæˆ–å‘é€è€…éš”ç¦»ä¼šè¯ã€‚
  </Card>
  <Card title="åª’ä½“æ”¯æŒ" icon="image">
    å‘é€å’ŒæŽ¥æ”¶å›¾ç‰‡ã€éŸ³é¢‘å’Œæ–‡æ¡£ã€‚
  </Card>
  <Card title="Web æŽ§åˆ¶ç•Œé¢" icon="monitor">
    æµè§ˆå™¨ä»ªè¡¨æ¿ï¼Œç”¨äºŽèŠå¤©ã€é…ç½®ã€ä¼šè¯å’ŒèŠ‚ç‚¹ç®¡ç†ã€‚
  </Card>
  <Card title="ç§»åŠ¨èŠ‚ç‚¹" icon="smartphone">
    é…å¯¹ iOS å’Œ Android èŠ‚ç‚¹ï¼Œæ”¯æŒ Canvasã€‚
  </Card>
</Columns>

## å¿«é€Ÿå¼€å§‹

<Steps>
  <Step title="å®‰è£… ">
    ```bash
    npm install -g @latest
    ```
  </Step>
  <Step title="æ–°æ‰‹å¼•å¯¼å¹¶å®‰è£…æœåŠ¡">
    ```bash
     onboard --install-daemon
    ```
  </Step>
  <Step title="é…å¯¹ WhatsApp å¹¶å¯åŠ¨ Gateway ç½‘å…³">
    ```bash
     channels login
     gateway --port 18789
    ```
  </Step>
</Steps>

éœ€è¦å®Œæ•´çš„å®‰è£…å’Œå¼€å‘çŽ¯å¢ƒè®¾ç½®ï¼Ÿè¯·å‚é˜…[å¿«é€Ÿå¼€å§‹](/start/quickstart)ã€‚

## ä»ªè¡¨æ¿

Gateway ç½‘å…³å¯åŠ¨åŽï¼Œæ‰“å¼€æµè§ˆå™¨æŽ§åˆ¶ç•Œé¢ã€‚

- æœ¬åœ°é»˜è®¤åœ°å€ï¼šhttp://127.0.0.1:18789/
- è¿œç¨‹è®¿é—®ï¼š[Web ç•Œé¢](/web)å’Œ [Tailscale](/gateway/tailscale)

<p align="center">
  <img src="whatsapp-.jpg" alt="" width="420" />
</p>

## é…ç½®ï¼ˆå¯é€‰ï¼‰

é…ç½®æ–‡ä»¶ä½äºŽ `~/./.json`ã€‚

- å¦‚æžœä½ **ä¸åšä»»ä½•ä¿®æ”¹**ï¼Œ å°†ä½¿ç”¨å†…ç½®çš„ Pi äºŒè¿›åˆ¶æ–‡ä»¶ä»¥ RPC æ¨¡å¼è¿è¡Œï¼Œå¹¶æŒ‰å‘é€è€…åˆ›å»ºç‹¬ç«‹ä¼šè¯ã€‚
- å¦‚æžœä½ æƒ³è¦é™åˆ¶è®¿é—®ï¼Œå¯ä»¥ä»Ž `channels.whatsapp.allowFrom` å’Œï¼ˆé’ˆå¯¹ç¾¤ç»„çš„ï¼‰æåŠè§„åˆ™å¼€å§‹é…ç½®ã€‚

ç¤ºä¾‹ï¼š

```json5
{
  channels: {
    whatsapp: {
      allowFrom: ["+15555550123"],
      groups: { "*": { requireMention: true } },
    },
  },
  messages: { groupChat: { mentionPatterns: ["@"] } },
}
```

## ä»Žè¿™é‡Œå¼€å§‹

<Columns>
  <Card title="æ–‡æ¡£ä¸­å¿ƒ" href="/start/hubs" icon="book-open">
    æ‰€æœ‰æ–‡æ¡£å’ŒæŒ‡å—ï¼ŒæŒ‰ç”¨ä¾‹åˆ†ç±»ã€‚
  </Card>
  <Card title="é…ç½®" href="/gateway/configuration" icon="settings">
    æ ¸å¿ƒ Gateway ç½‘å…³è®¾ç½®ã€ä»¤ç‰Œå’Œæä¾›å•†é…ç½®ã€‚
  </Card>
  <Card title="è¿œç¨‹è®¿é—®" href="/gateway/remote" icon="globe">
    SSH å’Œ tailnet è®¿é—®æ¨¡å¼ã€‚
  </Card>
  <Card title="æ¸ é“" href="/channels/telegram" icon="message-square">
    WhatsAppã€Telegramã€Discord ç­‰æ¸ é“çš„å…·ä½“è®¾ç½®ã€‚
  </Card>
  <Card title="èŠ‚ç‚¹" href="/nodes" icon="smartphone">
    iOS å’Œ Android èŠ‚ç‚¹çš„é…å¯¹ä¸Ž Canvas åŠŸèƒ½ã€‚
  </Card>
  <Card title="å¸®åŠ©" href="/help" icon="life-buoy">
    å¸¸è§ä¿®å¤æ–¹æ³•å’Œæ•…éšœæŽ’é™¤å…¥å£ã€‚
  </Card>
</Columns>

## äº†è§£æ›´å¤š

<Columns>
  <Card title="å®Œæ•´åŠŸèƒ½åˆ—è¡¨" href="/concepts/features" icon="list">
    å…¨éƒ¨æ¸ é“ã€è·¯ç”±å’Œåª’ä½“åŠŸèƒ½ã€‚
  </Card>
  <Card title="å¤šæ™ºèƒ½ä½“è·¯ç”±" href="/concepts/multi-agent" icon="route">
    å·¥ä½œåŒºéš”ç¦»å’ŒæŒ‰æ™ºèƒ½ä½“çš„ä¼šè¯ç®¡ç†ã€‚
  </Card>
  <Card title="å®‰å…¨" href="/gateway/security" icon="shield">
    ä»¤ç‰Œã€ç™½åå•å’Œå®‰å…¨æŽ§åˆ¶ã€‚
  </Card>
  <Card title="æ•…éšœæŽ’é™¤" href="/gateway/troubleshooting" icon="wrench">
    Gateway ç½‘å…³è¯Šæ–­å’Œå¸¸è§é”™è¯¯ã€‚
  </Card>
  <Card title="å…³äºŽä¸Žè‡´è°¢" href="/reference/credits" icon="info">
    é¡¹ç›®èµ·æºã€è´¡çŒ®è€…å’Œè®¸å¯è¯ã€‚
  </Card>
</Columns>


