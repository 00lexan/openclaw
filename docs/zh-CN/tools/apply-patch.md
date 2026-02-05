---
read_when:
  - ä½ éœ€è¦è·¨å¤šä¸ªæ–‡ä»¶è¿›è¡Œç»“æž„åŒ–ç¼–è¾‘
  - ä½ æƒ³è¦è®°å½•æˆ–è°ƒè¯•åŸºäºŽè¡¥ä¸çš„ç¼–è¾‘
summary: ä½¿ç”¨ apply_patch å·¥å…·åº”ç”¨å¤šæ–‡ä»¶è¡¥ä¸
title: apply_patch å·¥å…·
x-i18n:
  generated_at: "2026-02-01T21:39:24Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 8cec2b4ee3afa9105fc3dd1bc28a338917df129afc634ac83620a3347c46bcec
  source_path: tools/apply-patch.md
  workflow: 15
---

# apply_patch å·¥å…·

ä½¿ç”¨ç»“æž„åŒ–è¡¥ä¸æ ¼å¼åº”ç”¨æ–‡ä»¶æ›´æ”¹ã€‚è¿™éžå¸¸é€‚åˆå¤šæ–‡ä»¶
æˆ–å¤šæ®µç¼–è¾‘ï¼Œåœ¨è¿™äº›åœºæ™¯ä¸‹å•æ¬¡ `edit` è°ƒç”¨ä¼šå¾ˆè„†å¼±ã€‚

è¯¥å·¥å…·æŽ¥å—ä¸€ä¸ª `input` å­—ç¬¦ä¸²ï¼Œå…¶ä¸­åŒ…å«ä¸€ä¸ªæˆ–å¤šä¸ªæ–‡ä»¶æ“ä½œï¼š

```
*** Begin Patch
*** Add File: path/to/file.txt
+line 1
+line 2
*** Update File: src/app.ts
@@
-old line
+new line
*** Delete File: obsolete.txt
*** End Patch
```

## å‚æ•°

- `input`ï¼ˆå¿…éœ€ï¼‰ï¼šå®Œæ•´çš„è¡¥ä¸å†…å®¹ï¼ŒåŒ…æ‹¬ `*** Begin Patch` å’Œ `*** End Patch`ã€‚

## è¯´æ˜Ž

- è·¯å¾„ç›¸å¯¹äºŽå·¥ä½œåŒºæ ¹ç›®å½•è§£æžã€‚
- åœ¨ `*** Update File:` æ®µä¸­ä½¿ç”¨ `*** Move to:` å¯é‡å‘½åæ–‡ä»¶ã€‚
- éœ€è¦æ—¶ä½¿ç”¨ `*** End of File` æ ‡è®°ä»…åœ¨æ–‡ä»¶æœ«å°¾çš„æ’å…¥ã€‚
- å®žéªŒæ€§åŠŸèƒ½ï¼Œé»˜è®¤ç¦ç”¨ã€‚é€šè¿‡ `tools.exec.applyPatch.enabled` å¯ç”¨ã€‚
- ä»…é™ OpenAIï¼ˆåŒ…æ‹¬ OpenAI Codexï¼‰ã€‚å¯é€‰é€šè¿‡
  `tools.exec.applyPatch.allowModels` æŒ‰æ¨¡åž‹è¿›è¡Œé™åˆ¶ã€‚
- é…ç½®ä»…åœ¨ `tools.exec` ä¸‹ã€‚

## ç¤ºä¾‹

```json
{
  "tool": "apply_patch",
  "input": "*** Begin Patch\n*** Update File: src/index.ts\n@@\n-const foo = 1\n+const foo = 2\n*** End Patch"
}
```

