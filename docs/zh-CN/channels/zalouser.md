---
read_when:
  - ä¸º  è®¾ç½® Zalo Personal
  - è°ƒè¯• Zalo Personal ç™»å½•æˆ–æ¶ˆæ¯æµç¨‹
summary: é€šè¿‡ zca-cliï¼ˆQR ç™»å½•ï¼‰æ”¯æŒ Zalo ä¸ªäººè´¦æˆ·ã€åŠŸèƒ½å’Œé…ç½®
title: Zalo Personal
x-i18n:
  generated_at: "2026-02-03T07:44:34Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 2a249728d556e5cc52274627bdaf390fa10e815afa04f4497feb57a2a0cb9261
  source_path: channels/zalouser.md
  workflow: 15
---

# Zalo Personalï¼ˆéžå®˜æ–¹ï¼‰

çŠ¶æ€ï¼šå®žéªŒæ€§ã€‚æ­¤é›†æˆé€šè¿‡ `zca-cli` è‡ªåŠ¨åŒ–**ä¸ªäºº Zalo è´¦æˆ·**ã€‚

> **è­¦å‘Šï¼š**è¿™æ˜¯ä¸€ä¸ªéžå®˜æ–¹é›†æˆï¼Œå¯èƒ½å¯¼è‡´è´¦æˆ·è¢«æš‚åœ/å°ç¦ã€‚ä½¿ç”¨é£Žé™©è‡ªè´Ÿã€‚

## éœ€è¦æ’ä»¶

Zalo Personal ä½œä¸ºæ’ä»¶æä¾›ï¼Œä¸åŒ…å«åœ¨æ ¸å¿ƒå®‰è£…ä¸­ã€‚

- é€šè¿‡ CLI å®‰è£…ï¼š` plugins install @/zalouser`
- æˆ–ä»Žæºç æ£€å‡ºå®‰è£…ï¼š` plugins install ./extensions/zalouser`
- è¯¦æƒ…ï¼š[æ’ä»¶](/plugin)

## å‰ç½®æ¡ä»¶ï¼šzca-cli

Gateway ç½‘å…³æœºå™¨å¿…é¡»åœ¨ `PATH` ä¸­æœ‰å¯ç”¨çš„ `zca` äºŒè¿›åˆ¶æ–‡ä»¶ã€‚

- éªŒè¯ï¼š`zca --version`
- å¦‚æžœç¼ºå¤±ï¼Œè¯·å®‰è£… zca-cliï¼ˆå‚è§ `extensions/zalouser/README.md` æˆ–ä¸Šæ¸¸ zca-cli æ–‡æ¡£ï¼‰ã€‚

## å¿«é€Ÿè®¾ç½®ï¼ˆæ–°æ‰‹ï¼‰

1. å®‰è£…æ’ä»¶ï¼ˆè§ä¸Šæ–‡ï¼‰ã€‚
2. ç™»å½•ï¼ˆQRï¼Œåœ¨ Gateway ç½‘å…³æœºå™¨ä¸Šï¼‰ï¼š
   - ` channels login --channel zalouser`
   - ç”¨ Zalo æ‰‹æœºåº”ç”¨æ‰«æç»ˆç«¯ä¸­çš„äºŒç»´ç ã€‚
3. å¯ç”¨æ¸ é“ï¼š

```json5
{
  channels: {
    zalouser: {
      enabled: true,
      dmPolicy: "pairing",
    },
  },
}
```

4. é‡å¯ Gateway ç½‘å…³ï¼ˆæˆ–å®Œæˆæ–°æ‰‹å¼•å¯¼ï¼‰ã€‚
5. ç§ä¿¡è®¿é—®é»˜è®¤ä¸ºé…å¯¹æ¨¡å¼ï¼›é¦–æ¬¡è”ç³»æ—¶æ‰¹å‡†é…å¯¹ç ã€‚

## è¿™æ˜¯ä»€ä¹ˆ

- ä½¿ç”¨ `zca listen` æŽ¥æ”¶å…¥ç«™æ¶ˆæ¯ã€‚
- ä½¿ç”¨ `zca msg ...` å‘é€å›žå¤ï¼ˆæ–‡æœ¬/åª’ä½“/é“¾æŽ¥ï¼‰ã€‚
- ä¸“ä¸º"ä¸ªäººè´¦æˆ·"ä½¿ç”¨åœºæ™¯è®¾è®¡ï¼Œé€‚ç”¨äºŽ Zalo Bot API ä¸å¯ç”¨çš„æƒ…å†µã€‚

## å‘½å

æ¸ é“ ID ä¸º `zalouser`ï¼Œä»¥æ˜Žç¡®è¡¨ç¤ºè¿™æ˜¯è‡ªåŠ¨åŒ–**ä¸ªäºº Zalo ç”¨æˆ·è´¦æˆ·**ï¼ˆéžå®˜æ–¹ï¼‰ã€‚æˆ‘ä»¬ä¿ç•™ `zalo` ç”¨äºŽæœªæ¥å¯èƒ½çš„å®˜æ–¹ Zalo API é›†æˆã€‚

## æŸ¥æ‰¾ IDï¼ˆç›®å½•ï¼‰

ä½¿ç”¨ç›®å½• CLI å‘çŽ°è”ç³»äºº/ç¾¤ç»„åŠå…¶ IDï¼š

```bash
 directory self --channel zalouser
 directory peers list --channel zalouser --query "name"
 directory groups list --channel zalouser --query "work"
```

## é™åˆ¶

- å‡ºç«™æ–‡æœ¬åˆ†å—ä¸ºçº¦ 2000 å­—ç¬¦ï¼ˆZalo å®¢æˆ·ç«¯é™åˆ¶ï¼‰ã€‚
- é»˜è®¤é˜»æ­¢æµå¼ä¼ è¾“ã€‚

## è®¿é—®æŽ§åˆ¶ï¼ˆç§ä¿¡ï¼‰

`channels.zalouser.dmPolicy` æ”¯æŒï¼š`pairing | allowlist | open | disabled`ï¼ˆé»˜è®¤ï¼š`pairing`ï¼‰ã€‚
`channels.zalouser.allowFrom` æŽ¥å—ç”¨æˆ· ID æˆ–åç§°ã€‚å‘å¯¼ä¼šåœ¨å¯ç”¨æ—¶é€šè¿‡ `zca friend find` å°†åç§°è§£æžä¸º IDã€‚

é€šè¿‡ä»¥ä¸‹æ–¹å¼æ‰¹å‡†ï¼š

- ` pairing list zalouser`
- ` pairing approve zalouser <code>`

## ç¾¤ç»„è®¿é—®ï¼ˆå¯é€‰ï¼‰

- é»˜è®¤ï¼š`channels.zalouser.groupPolicy = "open"`ï¼ˆå…è®¸ç¾¤ç»„ï¼‰ã€‚ä½¿ç”¨ `channels.defaults.groupPolicy` åœ¨æœªè®¾ç½®æ—¶è¦†ç›–é»˜è®¤å€¼ã€‚
- é€šè¿‡ä»¥ä¸‹æ–¹å¼é™åˆ¶ä¸ºå…è®¸åˆ—è¡¨ï¼š
  - `channels.zalouser.groupPolicy = "allowlist"`
  - `channels.zalouser.groups`ï¼ˆé”®ä¸ºç¾¤ç»„ ID æˆ–åç§°ï¼‰
- é˜»æ­¢æ‰€æœ‰ç¾¤ç»„ï¼š`channels.zalouser.groupPolicy = "disabled"`ã€‚
- é…ç½®å‘å¯¼å¯ä»¥æç¤ºè¾“å…¥ç¾¤ç»„å…è®¸åˆ—è¡¨ã€‚
- å¯åŠ¨æ—¶ï¼Œ å°†å…è®¸åˆ—è¡¨ä¸­çš„ç¾¤ç»„/ç”¨æˆ·åç§°è§£æžä¸º ID å¹¶è®°å½•æ˜ å°„ï¼›æœªè§£æžçš„æ¡ç›®ä¿æŒåŽŸæ ·ã€‚

ç¤ºä¾‹ï¼š

```json5
{
  channels: {
    zalouser: {
      groupPolicy: "allowlist",
      groups: {
        "123456789": { allow: true },
        "Work Chat": { allow: true },
      },
    },
  },
}
```

## å¤šè´¦æˆ·

è´¦æˆ·æ˜ å°„åˆ° zca é…ç½®æ–‡ä»¶ã€‚ç¤ºä¾‹ï¼š

```json5
{
  channels: {
    zalouser: {
      enabled: true,
      defaultAccount: "default",
      accounts: {
        work: { enabled: true, profile: "work" },
      },
    },
  },
}
```

## æ•…éšœæŽ’é™¤

**æ‰¾ä¸åˆ° `zca`ï¼š**

- å®‰è£… zca-cli å¹¶ç¡®ä¿å®ƒåœ¨ Gateway ç½‘å…³è¿›ç¨‹çš„ `PATH` ä¸­ã€‚

**ç™»å½•ä¸ä¿æŒï¼š**

- ` channels status --probe`
- é‡æ–°ç™»å½•ï¼š` channels logout --channel zalouser &&  channels login --channel zalouser`


