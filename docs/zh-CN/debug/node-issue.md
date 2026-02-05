---
read_when:
  - è°ƒè¯•ä»…é™ Node çš„å¼€å‘è„šæœ¬æˆ– watch æ¨¡å¼å¤±è´¥
  - æŽ’æŸ¥  ä¸­ tsx/esbuild åŠ è½½å™¨å´©æºƒé—®é¢˜
summary: Node + tsx "__name is not a function" å´©æºƒè¯´æ˜ŽåŠè§£å†³æ–¹æ³•
title: Node + tsx å´©æºƒ
x-i18n:
  generated_at: "2026-02-01T20:24:52Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: f9e9bd2281508337a0696126b0db2d47a2d0f56de7a11872fbc0ac4689f9ad41
  source_path: debug/node-issue.md
  workflow: 14
---

# Node + tsx "\_\_name is not a function" å´©æºƒ

## æ¦‚è¿°

é€šè¿‡ Node ä½¿ç”¨ `tsx` è¿è¡Œ  æ—¶ï¼Œå¯åŠ¨é˜¶æ®µæŠ¥é”™ï¼š

```
[] Failed to start CLI: TypeError: __name is not a function
    at createSubsystemLogger (.../src/logging/subsystem.ts:203:25)
    at .../src/agents/auth-profiles/constants.ts:25:20
```

æ­¤é—®é¢˜åœ¨å¼€å‘è„šæœ¬ä»Ž Bun åˆ‡æ¢åˆ° `tsx` åŽå‡ºçŽ°ï¼ˆæäº¤ `2871657e`ï¼Œ2026-01-06ï¼‰ã€‚ç›¸åŒçš„è¿è¡Œè·¯å¾„åœ¨ Bun ä¸‹æ­£å¸¸å·¥ä½œã€‚

## çŽ¯å¢ƒ

- Node: v25.xï¼ˆåœ¨ v25.3.0 ä¸Šè§‚å¯Ÿåˆ°ï¼‰
- tsx: 4.21.0
- æ“ä½œç³»ç»Ÿ: macOSï¼ˆå…¶ä»–è¿è¡Œ Node 25 çš„å¹³å°ä¹Ÿå¯èƒ½å¤çŽ°ï¼‰

## å¤çŽ°æ­¥éª¤ï¼ˆä»… Nodeï¼‰

```bash
# åœ¨ä»“åº“æ ¹ç›®å½•
node --version
pnpm install
node --import tsx src/entry.ts status
```

## ä»“åº“å†…æœ€å°å¤çŽ°

```bash
node --import tsx scripts/repro/tsx-name-repro.ts
```

## Node ç‰ˆæœ¬æ£€æŸ¥

- Node 25.3.0ï¼šå¤±è´¥
- Node 22.22.0ï¼ˆHomebrew `node@22`ï¼‰ï¼šå¤±è´¥
- Node 24ï¼šå°šæœªå®‰è£…ï¼Œéœ€è¦éªŒè¯

## è¯´æ˜Ž / å‡è®¾

- `tsx` ä½¿ç”¨ esbuild è½¬æ¢ TS/ESMã€‚esbuild çš„ `keepNames` ä¼šç”Ÿæˆä¸€ä¸ª `__name` è¾…åŠ©å‡½æ•°ï¼Œå¹¶ç”¨ `__name(...)` åŒ…è£¹å‡½æ•°å®šä¹‰ã€‚
- å´©æºƒè¡¨æ˜Ž `__name` å­˜åœ¨ä½†åœ¨è¿è¡Œæ—¶ä¸æ˜¯å‡½æ•°ï¼Œè¿™æ„å‘³ç€åœ¨ Node 25 çš„åŠ è½½å™¨è·¯å¾„ä¸­è¯¥è¾…åŠ©å‡½æ•°ç¼ºå¤±æˆ–è¢«è¦†ç›–ã€‚
- å…¶ä»– esbuild ä½¿ç”¨è€…ä¹ŸæŠ¥å‘Šè¿‡ç±»ä¼¼çš„ `__name` è¾…åŠ©å‡½æ•°ç¼ºå¤±æˆ–è¢«é‡å†™çš„é—®é¢˜ã€‚

## å›žå½’åŽ†å²

- `2871657e`ï¼ˆ2026-01-06ï¼‰ï¼šè„šæœ¬ä»Ž Bun æ”¹ä¸º tsxï¼Œä½¿ Bun æˆä¸ºå¯é€‰é¡¹ã€‚
- åœ¨æ­¤ä¹‹å‰ï¼ˆBun è·¯å¾„ï¼‰ï¼Œ` status` å’Œ `gateway:watch` å‡æ­£å¸¸å·¥ä½œã€‚

## è§£å†³æ–¹æ³•

- å¼€å‘è„šæœ¬ä½¿ç”¨ Bunï¼ˆå½“å‰ä¸´æ—¶å›žé€€æ–¹æ¡ˆï¼‰ã€‚
- ä½¿ç”¨ Node + tsc watchï¼Œç„¶åŽè¿è¡Œç¼–è¯‘äº§ç‰©ï¼š
  ```bash
  pnpm exec tsc --watch --preserveWatchOutput
  node --watch .mjs status
  ```
- å·²åœ¨æœ¬åœ°ç¡®è®¤ï¼š`pnpm exec tsc -p tsconfig.json` + `node .mjs status` åœ¨ Node 25 ä¸Šå¯æ­£å¸¸è¿è¡Œã€‚
- å¦‚æžœå¯èƒ½ï¼Œåœ¨ TS åŠ è½½å™¨ä¸­ç¦ç”¨ esbuild çš„ keepNamesï¼ˆé˜²æ­¢æ’å…¥ `__name` è¾…åŠ©å‡½æ•°ï¼‰ï¼›tsx ç›®å‰ä¸æä¾›æ­¤é…ç½®é¡¹ã€‚
- åœ¨ Node LTSï¼ˆ22/24ï¼‰ä¸Šæµ‹è¯• `tsx`ï¼Œç¡®è®¤è¯¥é—®é¢˜æ˜¯å¦ä¸º Node 25 ç‰¹æœ‰ã€‚

## å‚è€ƒèµ„æ–™

- https://opennext.js.org/cloudflare/howtos/keep_names
- https://esbuild.github.io/api/#keep-names
- https://github.com/evanw/esbuild/issues/1031

## åŽç»­æ­¥éª¤

- åœ¨ Node 22/24 ä¸Šå¤çŽ°ï¼Œç¡®è®¤æ˜¯å¦ä¸º Node 25 å›žå½’é—®é¢˜ã€‚
- æµ‹è¯• `tsx` nightly ç‰ˆæœ¬ï¼Œæˆ–åœ¨å­˜åœ¨å·²çŸ¥å›žå½’æ—¶å›ºå®šåˆ°æ—©æœŸç‰ˆæœ¬ã€‚
- å¦‚æžœåœ¨ Node LTS ä¸Šä¹Ÿèƒ½å¤çŽ°ï¼Œåˆ™å‘ä¸Šæ¸¸æäº¤åŒ…å« `__name` å †æ ˆè·Ÿè¸ªçš„æœ€å°å¤çŽ°ã€‚


