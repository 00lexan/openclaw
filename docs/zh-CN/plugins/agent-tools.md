---
read_when:
  - ä½ æƒ³åœ¨æ’ä»¶ä¸­æ·»åŠ æ–°çš„æ™ºèƒ½ä½“å·¥å…·
  - ä½ éœ€è¦é€šè¿‡å…è®¸åˆ—è¡¨ä½¿å·¥å…·å¯é€‰å¯ç”¨
summary: åœ¨æ’ä»¶ä¸­ç¼–å†™æ™ºèƒ½ä½“å·¥å…·ï¼ˆæ¨¡å¼ã€å¯é€‰å·¥å…·ã€å…è®¸åˆ—è¡¨ï¼‰
title: æ’ä»¶æ™ºèƒ½ä½“å·¥å…·
x-i18n:
  generated_at: "2026-02-03T07:53:22Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 4479462e9d8b17b664bf6b5f424f2efc8e7bedeaabfdb6a93126e051e635c659
  source_path: plugins/agent-tools.md
  workflow: 15
---

# æ’ä»¶æ™ºèƒ½ä½“å·¥å…·

 æ’ä»¶å¯ä»¥æ³¨å†Œ**æ™ºèƒ½ä½“å·¥å…·**ï¼ˆJSON æ¨¡å¼å‡½æ•°ï¼‰ï¼Œè¿™äº›å·¥å…·åœ¨æ™ºèƒ½ä½“è¿è¡ŒæœŸé—´æš´éœ²ç»™ LLMã€‚å·¥å…·å¯ä»¥æ˜¯**å¿…éœ€çš„**ï¼ˆå§‹ç»ˆå¯ç”¨ï¼‰æˆ–**å¯é€‰çš„**ï¼ˆé€‰æ‹©å¯ç”¨ï¼‰ã€‚

æ™ºèƒ½ä½“å·¥å…·åœ¨ä¸»é…ç½®çš„ `tools` ä¸‹é…ç½®ï¼Œæˆ–åœ¨æ¯ä¸ªæ™ºèƒ½ä½“çš„ `agents.list[].tools` ä¸‹é…ç½®ã€‚å…è®¸åˆ—è¡¨/æ‹’ç»åˆ—è¡¨ç­–ç•¥æŽ§åˆ¶æ™ºèƒ½ä½“å¯ä»¥è°ƒç”¨å“ªäº›å·¥å…·ã€‚

## åŸºæœ¬å·¥å…·

```ts
import { Type } from "@sinclair/typebox";

export default function (api) {
  api.registerTool({
    name: "my_tool",
    description: "Do a thing",
    parameters: Type.Object({
      input: Type.String(),
    }),
    async execute(_id, params) {
      return { content: [{ type: "text", text: params.input }] };
    },
  });
}
```

## å¯é€‰å·¥å…·ï¼ˆé€‰æ‹©å¯ç”¨ï¼‰

å¯é€‰å·¥å…·**æ°¸è¿œä¸ä¼š**è‡ªåŠ¨å¯ç”¨ã€‚ç”¨æˆ·å¿…é¡»å°†å®ƒä»¬æ·»åŠ åˆ°æ™ºèƒ½ä½“å…è®¸åˆ—è¡¨ä¸­ã€‚

```ts
export default function (api) {
  api.registerTool(
    {
      name: "workflow_tool",
      description: "Run a local workflow",
      parameters: {
        type: "object",
        properties: {
          pipeline: { type: "string" },
        },
        required: ["pipeline"],
      },
      async execute(_id, params) {
        return { content: [{ type: "text", text: params.pipeline }] };
      },
    },
    { optional: true },
  );
}
```

åœ¨ `agents.list[].tools.allow`ï¼ˆæˆ–å…¨å±€ `tools.allow`ï¼‰ä¸­å¯ç”¨å¯é€‰å·¥å…·ï¼š

```json5
{
  agents: {
    list: [
      {
        id: "main",
        tools: {
          allow: [
            "workflow_tool", // ç‰¹å®šå·¥å…·åç§°
            "workflow", // æ’ä»¶ idï¼ˆå¯ç”¨è¯¥æ’ä»¶çš„æ‰€æœ‰å·¥å…·ï¼‰
            "group:plugins", // æ‰€æœ‰æ’ä»¶å·¥å…·
          ],
        },
      },
    ],
  },
}
```

å…¶ä»–å½±å“å·¥å…·å¯ç”¨æ€§çš„é…ç½®é€‰é¡¹ï¼š

- ä»…åŒ…å«æ’ä»¶å·¥å…·åç§°çš„å…è®¸åˆ—è¡¨è¢«è§†ä¸ºæ’ä»¶é€‰æ‹©å¯ç”¨ï¼›æ ¸å¿ƒå·¥å…·ä¿æŒå¯ç”¨ï¼Œé™¤éžä½ åœ¨å…è®¸åˆ—è¡¨ä¸­ä¹ŸåŒ…å«æ ¸å¿ƒå·¥å…·æˆ–ç»„ã€‚
- `tools.profile` / `agents.list[].tools.profile`ï¼ˆåŸºç¡€å…è®¸åˆ—è¡¨ï¼‰
- `tools.byProvider` / `agents.list[].tools.byProvider`ï¼ˆç‰¹å®šæä¾›å•†çš„å…è®¸/æ‹’ç»ï¼‰
- `tools.sandbox.tools.*`ï¼ˆæ²™ç®±éš”ç¦»æ—¶çš„æ²™ç®±å·¥å…·ç­–ç•¥ï¼‰

## è§„åˆ™ + æç¤º

- å·¥å…·åç§°**ä¸èƒ½**ä¸Žæ ¸å¿ƒå·¥å…·åç§°å†²çªï¼›å†²çªçš„å·¥å…·ä¼šè¢«è·³è¿‡ã€‚
- å…è®¸åˆ—è¡¨ä¸­ä½¿ç”¨çš„æ’ä»¶ id ä¸èƒ½ä¸Žæ ¸å¿ƒå·¥å…·åç§°å†²çªã€‚
- å¯¹äºŽè§¦å‘å‰¯ä½œç”¨æˆ–éœ€è¦é¢å¤–äºŒè¿›åˆ¶æ–‡ä»¶/å‡­è¯çš„å·¥å…·ï¼Œä¼˜å…ˆä½¿ç”¨ `optional: true`ã€‚

