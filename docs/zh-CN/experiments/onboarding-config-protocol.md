---
read_when: Changing onboarding wizard steps or config schema endpoints
summary: æ–°æ‰‹å¼•å¯¼å‘å¯¼å’Œé…ç½®æ¨¡å¼çš„ RPC åè®®è¯´æ˜Ž
title: æ–°æ‰‹å¼•å¯¼å’Œé…ç½®åè®®
x-i18n:
  generated_at: "2026-02-03T07:47:10Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 55163b3ee029c02476800cb616a054e5adfe97dae5bb72f2763dce0079851e06
  source_path: experiments/onboarding-config-protocol.md
  workflow: 15
---

# æ–°æ‰‹å¼•å¯¼ + é…ç½®åè®®

ç›®çš„ï¼šCLIã€macOS åº”ç”¨å’Œ Web UI ä¹‹é—´å…±äº«çš„æ–°æ‰‹å¼•å¯¼ + é…ç½®ç•Œé¢ã€‚

## ç»„ä»¶

- å‘å¯¼å¼•æ“Žï¼ˆå…±äº«ä¼šè¯ + æç¤º + æ–°æ‰‹å¼•å¯¼çŠ¶æ€ï¼‰ã€‚
- CLI æ–°æ‰‹å¼•å¯¼ä½¿ç”¨ä¸Ž UI å®¢æˆ·ç«¯ç›¸åŒçš„å‘å¯¼æµç¨‹ã€‚
- Gateway ç½‘å…³ RPC å…¬å¼€å‘å¯¼ + é…ç½®æ¨¡å¼ç«¯ç‚¹ã€‚
- macOS æ–°æ‰‹å¼•å¯¼ä½¿ç”¨å‘å¯¼æ­¥éª¤æ¨¡åž‹ã€‚
- Web UI ä»Ž JSON Schema + UI æç¤ºæ¸²æŸ“é…ç½®è¡¨å•ã€‚

## Gateway ç½‘å…³ RPC

- `wizard.start` å‚æ•°ï¼š`{ mode?: "local"|"remote", workspace?: string }`
- `wizard.next` å‚æ•°ï¼š`{ sessionId, answer?: { stepId, value? } }`
- `wizard.cancel` å‚æ•°ï¼š`{ sessionId }`
- `wizard.status` å‚æ•°ï¼š`{ sessionId }`
- `config.schema` å‚æ•°ï¼š`{}`

å“åº”ï¼ˆç»“æž„ï¼‰

- å‘å¯¼ï¼š`{ sessionId, done, step?, status?, error? }`
- é…ç½®æ¨¡å¼ï¼š`{ schema, uiHints, version, generatedAt }`

## UI æç¤º

- `uiHints` æŒ‰è·¯å¾„é”®å…¥ï¼›å¯é€‰å…ƒæ•°æ®ï¼ˆlabel/help/group/order/advanced/sensitive/placeholderï¼‰ã€‚
- æ•æ„Ÿå­—æ®µæ¸²æŸ“ä¸ºå¯†ç è¾“å…¥ï¼›æ— è„±æ•å±‚ã€‚
- ä¸æ”¯æŒçš„æ¨¡å¼èŠ‚ç‚¹å›žé€€åˆ°åŽŸå§‹ JSON ç¼–è¾‘å™¨ã€‚

## æ³¨æ„

- æœ¬æ–‡æ¡£æ˜¯è·Ÿè¸ªæ–°æ‰‹å¼•å¯¼/é…ç½®åè®®é‡æž„çš„å”¯ä¸€ä½ç½®ã€‚

