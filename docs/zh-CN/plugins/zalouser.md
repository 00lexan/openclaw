---
read_when:
  - ä½ æƒ³åœ¨  ä¸­æ”¯æŒ Zalo Personalï¼ˆéžå®˜æ–¹ï¼‰
  - ä½ æ­£åœ¨é…ç½®æˆ–å¼€å‘ zalouser æ’ä»¶
summary: Zalo Personal æ’ä»¶ï¼šé€šè¿‡ zca-cli è¿›è¡Œ QR ç™»å½• + æ¶ˆæ¯ï¼ˆæ’ä»¶å®‰è£… + æ¸ é“é…ç½® + CLI + å·¥å…·ï¼‰
title: Zalo Personal æ’ä»¶
x-i18n:
  generated_at: "2026-02-03T07:53:33Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: b29b788b023cd50720e24fe6719f02e9f86c8bca9c73b3638fb53c2316718672
  source_path: plugins/zalouser.md
  workflow: 15
---

# Zalo Personalï¼ˆæ’ä»¶ï¼‰

é€šè¿‡æ’ä»¶ä¸º  æä¾› Zalo Personal æ”¯æŒï¼Œä½¿ç”¨ `zca-cli` è‡ªåŠ¨åŒ–æ™®é€š Zalo ç”¨æˆ·è´¦æˆ·ã€‚

> **è­¦å‘Šï¼š** éžå®˜æ–¹è‡ªåŠ¨åŒ–å¯èƒ½å¯¼è‡´è´¦æˆ·è¢«æš‚åœ/å°ç¦ã€‚ä½¿ç”¨é£Žé™©è‡ªè´Ÿã€‚

## å‘½å

æ¸ é“ id æ˜¯ `zalouser`ï¼Œä»¥æ˜Žç¡®è¡¨ç¤ºè¿™æ˜¯è‡ªåŠ¨åŒ–**ä¸ªäºº Zalo ç”¨æˆ·è´¦æˆ·**ï¼ˆéžå®˜æ–¹ï¼‰ã€‚æˆ‘ä»¬ä¿ç•™ `zalo` ç”¨äºŽæ½œåœ¨çš„æœªæ¥å®˜æ–¹ Zalo API é›†æˆã€‚

## è¿è¡Œä½ç½®

æ­¤æ’ä»¶**åœ¨ Gateway ç½‘å…³è¿›ç¨‹å†…**è¿è¡Œã€‚

å¦‚æžœä½ ä½¿ç”¨è¿œç¨‹ Gateway ç½‘å…³ï¼Œè¯·åœ¨**è¿è¡Œ Gateway ç½‘å…³çš„æœºå™¨**ä¸Šå®‰è£…/é…ç½®å®ƒï¼Œç„¶åŽé‡å¯ Gateway ç½‘å…³ã€‚

## å®‰è£…

### é€‰é¡¹ Aï¼šä»Ž npm å®‰è£…

```bash
 plugins install @/zalouser
```

ä¹‹åŽé‡å¯ Gateway ç½‘å…³ã€‚

### é€‰é¡¹ Bï¼šä»Žæœ¬åœ°æ–‡ä»¶å¤¹å®‰è£…ï¼ˆå¼€å‘ï¼‰

```bash
 plugins install ./extensions/zalouser
cd ./extensions/zalouser && pnpm install
```

ä¹‹åŽé‡å¯ Gateway ç½‘å…³ã€‚

## å‰ç½®æ¡ä»¶ï¼šzca-cli

Gateway ç½‘å…³æœºå™¨å¿…é¡»åœ¨ `PATH` ä¸­æœ‰ `zca`ï¼š

```bash
zca --version
```

## é…ç½®

æ¸ é“é…ç½®ä½äºŽ `channels.zalouser` ä¸‹ï¼ˆä¸æ˜¯ `plugins.entries.*`ï¼‰ï¼š

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

## CLI

```bash
 channels login --channel zalouser
 channels logout --channel zalouser
 channels status --probe
 message send --channel zalouser --target <threadId> --message "Hello from "
 directory peers list --channel zalouser --query "name"
```

## æ™ºèƒ½ä½“å·¥å…·

å·¥å…·åç§°ï¼š`zalouser`

æ“ä½œï¼š`send`ã€`image`ã€`link`ã€`friends`ã€`groups`ã€`me`ã€`status`

