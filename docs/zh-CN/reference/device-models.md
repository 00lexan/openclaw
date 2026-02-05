---
read_when:
  - æ›´æ–°è®¾å¤‡åž‹å·æ ‡è¯†ç¬¦æ˜ å°„æˆ– NOTICE/è®¸å¯è¯æ–‡ä»¶
  - æ›´æ”¹å®žä¾‹ UI ä¸­è®¾å¤‡åç§°çš„æ˜¾ç¤ºæ–¹å¼
summary:  å¦‚ä½•å†…ç½® Apple è®¾å¤‡åž‹å·æ ‡è¯†ç¬¦ä»¥åœ¨ macOS åº”ç”¨ä¸­æ˜¾ç¤ºå‹å¥½åç§°ã€‚
title: è®¾å¤‡åž‹å·æ•°æ®åº“
x-i18n:
  generated_at: "2026-02-01T21:37:07Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 1d99c2538a0d8fdd80fa468fa402f63479ef2522e83745a0a46527a86238aeb2
  source_path: reference/device-models.md
  workflow: 15
---

# è®¾å¤‡åž‹å·æ•°æ®åº“ï¼ˆå‹å¥½åç§°ï¼‰

macOS é…å¥—åº”ç”¨é€šè¿‡å°† Apple åž‹å·æ ‡è¯†ç¬¦ï¼ˆä¾‹å¦‚ `iPad16,6`ã€`Mac16,6`ï¼‰æ˜ å°„ä¸ºäººç±»å¯è¯»çš„åç§°ï¼Œåœ¨**å®žä¾‹** UI ä¸­æ˜¾ç¤ºå‹å¥½çš„ Apple è®¾å¤‡åž‹å·åç§°ã€‚

è¯¥æ˜ å°„ä»¥ JSON å½¢å¼å†…ç½®äºŽï¼š

- `apps/macos/Sources//Resources/DeviceModels/`

## æ•°æ®æ¥æº

æˆ‘ä»¬ç›®å‰å†…ç½®çš„æ˜ å°„æ¥è‡ª MIT è®¸å¯çš„ä»“åº“ï¼š

- `kyle-seongwoo-jun/apple-device-identifiers`

ä¸ºä¿æŒæž„å»ºçš„ç¡®å®šæ€§ï¼ŒJSON æ–‡ä»¶å›ºå®šåˆ°ç‰¹å®šçš„ä¸Šæ¸¸æäº¤ï¼ˆè®°å½•åœ¨ `apps/macos/Sources//Resources/DeviceModels/NOTICE.md` ä¸­ï¼‰ã€‚

## æ›´æ–°æ•°æ®åº“

1. é€‰æ‹©è¦å›ºå®šçš„ä¸Šæ¸¸æäº¤ï¼ˆiOS å’Œ macOS å„ä¸€ä¸ªï¼‰ã€‚
2. æ›´æ–° `apps/macos/Sources//Resources/DeviceModels/NOTICE.md` ä¸­çš„æäº¤å“ˆå¸Œã€‚
3. é‡æ–°ä¸‹è½½å›ºå®šåˆ°è¿™äº›æäº¤çš„ JSON æ–‡ä»¶ï¼š

```bash
IOS_COMMIT="<commit sha for ios-device-identifiers.json>"
MAC_COMMIT="<commit sha for mac-device-identifiers.json>"

curl -fsSL "https://raw.githubusercontent.com/kyle-seongwoo-jun/apple-device-identifiers/${IOS_COMMIT}/ios-device-identifiers.json" \
  -o apps/macos/Sources//Resources/DeviceModels/ios-device-identifiers.json

curl -fsSL "https://raw.githubusercontent.com/kyle-seongwoo-jun/apple-device-identifiers/${MAC_COMMIT}/mac-device-identifiers.json" \
  -o apps/macos/Sources//Resources/DeviceModels/mac-device-identifiers.json
```

4. ç¡®ä¿ `apps/macos/Sources//Resources/DeviceModels/LICENSE.apple-device-identifiers.txt` ä»ä¸Žä¸Šæ¸¸ä¸€è‡´ï¼ˆå¦‚æžœä¸Šæ¸¸è®¸å¯è¯å‘ç”Ÿå˜æ›´ï¼Œè¯·æ›¿æ¢è¯¥æ–‡ä»¶ï¼‰ã€‚
5. éªŒè¯ macOS åº”ç”¨èƒ½å¤Ÿæ­£å¸¸æž„å»ºï¼ˆæ— è­¦å‘Šï¼‰ï¼š

```bash
swift build --package-path apps/macos
```


