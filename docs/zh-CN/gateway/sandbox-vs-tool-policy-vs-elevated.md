---
read_when: You hit 'sandbox jail' or see a tool/elevated refusal and want the exact config key to change.
status: active
summary: å·¥å…·è¢«é˜»æ­¢çš„åŽŸå› ï¼šæ²™ç®±è¿è¡Œæ—¶ã€å·¥å…·å…è®¸/æ‹’ç»ç­–ç•¥å’Œææƒ exec é™åˆ¶
title: æ²™ç®± vs å·¥å…·ç­–ç•¥ vs ææƒ
x-i18n:
  generated_at: "2026-02-03T07:48:55Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 863ea5e6d137dfb61f12bd686b9557d6df1fd0c13ba5f15861bf72248bc975f1
  source_path: gateway/sandbox-vs-tool-policy-vs-elevated.md
  workflow: 15
---

# æ²™ç®± vs å·¥å…·ç­–ç•¥ vs ææƒ

 æœ‰ä¸‰ä¸ªç›¸å…³ï¼ˆä½†ä¸åŒï¼‰çš„æŽ§åˆ¶ï¼š

1. **æ²™ç®±**ï¼ˆ`agents.defaults.sandbox.*` / `agents.list[].sandbox.*`ï¼‰å†³å®š**å·¥å…·åœ¨å“ªé‡Œè¿è¡Œ**ï¼ˆDocker vs ä¸»æœºï¼‰ã€‚
2. **å·¥å…·ç­–ç•¥**ï¼ˆ`tools.*`ã€`tools.sandbox.tools.*`ã€`agents.list[].tools.*`ï¼‰å†³å®š**å“ªäº›å·¥å…·å¯ç”¨/å…è®¸**ã€‚
3. **ææƒ**ï¼ˆ`tools.elevated.*`ã€`agents.list[].tools.elevated.*`ï¼‰æ˜¯ä¸€ä¸ª**ä»…é™ exec çš„é€ƒé€¸é€šé“**ï¼Œå…è®¸åœ¨æ²™ç®±éš”ç¦»æ—¶åœ¨ä¸»æœºä¸Šè¿è¡Œã€‚

## å¿«é€Ÿè°ƒè¯•

ä½¿ç”¨æ£€æŸ¥å™¨æŸ¥çœ‹  *å®žé™…*åœ¨åšä»€ä¹ˆï¼š

```bash
 sandbox explain
 sandbox explain --session agent:main:main
 sandbox explain --agent work
 sandbox explain --json
```

å®ƒä¼šæ‰“å°ï¼š

- ç”Ÿæ•ˆçš„æ²™ç®±æ¨¡å¼/èŒƒå›´/å·¥ä½œåŒºè®¿é—®
- ä¼šè¯å½“å‰æ˜¯å¦è¢«æ²™ç®±éš”ç¦»ï¼ˆä¸» vs éžä¸»ï¼‰
- ç”Ÿæ•ˆçš„æ²™ç®±å·¥å…·å…è®¸/æ‹’ç»ï¼ˆä»¥åŠå®ƒæ¥è‡ªæ™ºèƒ½ä½“/å…¨å±€/é»˜è®¤å“ªé‡Œï¼‰
- ææƒé™åˆ¶å’Œä¿®å¤é”®è·¯å¾„

## æ²™ç®±ï¼šå·¥å…·åœ¨å“ªé‡Œè¿è¡Œ

æ²™ç®±éš”ç¦»ç”± `agents.defaults.sandbox.mode` æŽ§åˆ¶ï¼š

- `"off"`ï¼šæ‰€æœ‰å†…å®¹åœ¨ä¸»æœºä¸Šè¿è¡Œã€‚
- `"non-main"`ï¼šä»…éžä¸»ä¼šè¯è¢«æ²™ç®±éš”ç¦»ï¼ˆç¾¤ç»„/æ¸ é“çš„å¸¸è§"æ„å¤–"ï¼‰ã€‚
- `"all"`ï¼šæ‰€æœ‰å†…å®¹éƒ½è¢«æ²™ç®±éš”ç¦»ã€‚

å‚è§[æ²™ç®±éš”ç¦»](/gateway/sandboxing)äº†è§£å®Œæ•´çŸ©é˜µï¼ˆèŒƒå›´ã€å·¥ä½œåŒºæŒ‚è½½ã€é•œåƒï¼‰ã€‚

### ç»‘å®šæŒ‚è½½ï¼ˆå®‰å…¨å¿«é€Ÿæ£€æŸ¥ï¼‰

- `docker.binds` *ç©¿é€*æ²™ç®±æ–‡ä»¶ç³»ç»Ÿï¼šä½ æŒ‚è½½çš„ä»»ä½•å†…å®¹åœ¨å®¹å™¨å†…ä»¥ä½ è®¾ç½®çš„æ¨¡å¼ï¼ˆ`:ro` æˆ– `:rw`ï¼‰å¯è§ã€‚
- å¦‚æžœçœç•¥æ¨¡å¼ï¼Œé»˜è®¤ä¸ºè¯»å†™ï¼›å¯¹äºŽæºä»£ç /å¯†é’¥ä¼˜å…ˆä½¿ç”¨ `:ro`ã€‚
- `scope: "shared"` å¿½ç•¥æ¯ä¸ªæ™ºèƒ½ä½“çš„ç»‘å®šï¼ˆä»…å…¨å±€ç»‘å®šé€‚ç”¨ï¼‰ã€‚
- ç»‘å®š `/var/run/docker.sock` å®žé™…ä¸Šå°†ä¸»æœºæŽ§åˆ¶æƒäº¤ç»™æ²™ç®±ï¼›åªæœ‰åœ¨æœ‰æ„ä¸ºä¹‹æ—¶æ‰è¿™æ ·åšã€‚
- å·¥ä½œåŒºè®¿é—®ï¼ˆ`workspaceAccess: "ro"`/`"rw"`ï¼‰ç‹¬ç«‹äºŽç»‘å®šæ¨¡å¼ã€‚

## å·¥å…·ç­–ç•¥ï¼šå“ªäº›å·¥å…·å­˜åœ¨/å¯è°ƒç”¨

ä¸¤ä¸ªå±‚æ¬¡å¾ˆé‡è¦ï¼š

- **å·¥å…·é…ç½®æ–‡ä»¶**ï¼š`tools.profile` å’Œ `agents.list[].tools.profile`ï¼ˆåŸºç¡€å…è®¸åˆ—è¡¨ï¼‰
- **æä¾›å•†å·¥å…·é…ç½®æ–‡ä»¶**ï¼š`tools.byProvider[provider].profile` å’Œ `agents.list[].tools.byProvider[provider].profile`
- **å…¨å±€/æ¯ä¸ªæ™ºèƒ½ä½“å·¥å…·ç­–ç•¥**ï¼š`tools.allow`/`tools.deny` å’Œ `agents.list[].tools.allow`/`agents.list[].tools.deny`
- **æä¾›å•†å·¥å…·ç­–ç•¥**ï¼š`tools.byProvider[provider].allow/deny` å’Œ `agents.list[].tools.byProvider[provider].allow/deny`
- **æ²™ç®±å·¥å…·ç­–ç•¥**ï¼ˆä»…åœ¨æ²™ç®±éš”ç¦»æ—¶é€‚ç”¨ï¼‰ï¼š`tools.sandbox.tools.allow`/`tools.sandbox.tools.deny` å’Œ `agents.list[].tools.sandbox.tools.*`

ç»éªŒæ³•åˆ™ï¼š

- `deny` å§‹ç»ˆä¼˜å…ˆã€‚
- å¦‚æžœ `allow` éžç©ºï¼Œå…¶ä»–æ‰€æœ‰å†…å®¹éƒ½è¢«è§†ä¸ºé˜»æ­¢ã€‚
- å·¥å…·ç­–ç•¥æ˜¯ç¡¬æ€§åœæ­¢ï¼š`/exec` æ— æ³•è¦†ç›–è¢«æ‹’ç»çš„ `exec` å·¥å…·ã€‚
- `/exec` ä»…ä¸ºæŽˆæƒå‘é€è€…æ›´æ”¹ä¼šè¯é»˜è®¤å€¼ï¼›å®ƒä¸æŽˆäºˆå·¥å…·è®¿é—®æƒé™ã€‚
  æä¾›å•†å·¥å…·é”®æŽ¥å— `provider`ï¼ˆä¾‹å¦‚ `google-antigravity`ï¼‰æˆ– `provider/model`ï¼ˆä¾‹å¦‚ `openai/gpt-5.2`ï¼‰ã€‚

### å·¥å…·ç»„ï¼ˆç®€å†™ï¼‰

å·¥å…·ç­–ç•¥ï¼ˆå…¨å±€ã€æ™ºèƒ½ä½“ã€æ²™ç®±ï¼‰æ”¯æŒ `group:*` æ¡ç›®ï¼Œå®ƒä»¬ä¼šå±•å¼€ä¸ºå¤šä¸ªå·¥å…·ï¼š

```json5
{
  tools: {
    sandbox: {
      tools: {
        allow: ["group:runtime", "group:fs", "group:sessions", "group:memory"],
      },
    },
  },
}
```

å¯ç”¨çš„ç»„ï¼š

- `group:runtime`ï¼š`exec`ã€`bash`ã€`process`
- `group:fs`ï¼š`read`ã€`write`ã€`edit`ã€`apply_patch`
- `group:sessions`ï¼š`sessions_list`ã€`sessions_history`ã€`sessions_send`ã€`sessions_spawn`ã€`session_status`
- `group:memory`ï¼š`memory_search`ã€`memory_get`
- `group:ui`ï¼š`browser`ã€`canvas`
- `group:automation`ï¼š`cron`ã€`gateway`
- `group:messaging`ï¼š`message`
- `group:nodes`ï¼š`nodes`
- `group:`ï¼šæ‰€æœ‰å†…ç½®  å·¥å…·ï¼ˆä¸åŒ…æ‹¬æä¾›å•†æ’ä»¶ï¼‰

## ææƒï¼šä»…é™ exec çš„"åœ¨ä¸»æœºä¸Šè¿è¡Œ"

ææƒ**ä¸ä¼š**æŽˆäºˆé¢å¤–å·¥å…·ï¼›å®ƒä»…å½±å“ `exec`ã€‚

- å¦‚æžœä½ è¢«æ²™ç®±éš”ç¦»ï¼Œ`/elevated on`ï¼ˆæˆ–å¸¦ `elevated: true` çš„ `exec`ï¼‰åœ¨ä¸»æœºä¸Šè¿è¡Œï¼ˆå®¡æ‰¹å¯èƒ½ä»ç„¶é€‚ç”¨ï¼‰ã€‚
- ä½¿ç”¨ `/elevated full` è·³è¿‡è¯¥ä¼šè¯çš„ exec å®¡æ‰¹ã€‚
- å¦‚æžœä½ å·²ç»ç›´æŽ¥è¿è¡Œï¼Œææƒå®žé™…ä¸Šæ˜¯ç©ºæ“ä½œï¼ˆä»ç„¶å—é™ï¼‰ã€‚
- ææƒ**ä¸æ˜¯** skill èŒƒå›´çš„ï¼Œ**ä¸ä¼š**è¦†ç›–å·¥å…·å…è®¸/æ‹’ç»ã€‚
- `/exec` ä¸Žææƒæ˜¯åˆ†å¼€çš„ã€‚å®ƒä»…ä¸ºæŽˆæƒå‘é€è€…è°ƒæ•´æ¯ä¸ªä¼šè¯çš„ exec é»˜è®¤å€¼ã€‚

é™åˆ¶ï¼š

- å¯ç”¨ï¼š`tools.elevated.enabled`ï¼ˆä»¥åŠå¯é€‰çš„ `agents.list[].tools.elevated.enabled`ï¼‰
- å‘é€è€…å…è®¸åˆ—è¡¨ï¼š`tools.elevated.allowFrom.<provider>`ï¼ˆä»¥åŠå¯é€‰çš„ `agents.list[].tools.elevated.allowFrom.<provider>`ï¼‰

å‚è§[ææƒæ¨¡å¼](/tools/elevated)ã€‚

## å¸¸è§"æ²™ç®±å›°å¢ƒ"ä¿®å¤

### "å·¥å…· X è¢«æ²™ç®±å·¥å…·ç­–ç•¥é˜»æ­¢"

ä¿®å¤é”®ï¼ˆé€‰ä¸€ä¸ªï¼‰ï¼š

- ç¦ç”¨æ²™ç®±ï¼š`agents.defaults.sandbox.mode=off`ï¼ˆæˆ–æ¯ä¸ªæ™ºèƒ½ä½“ `agents.list[].sandbox.mode=off`ï¼‰
- åœ¨æ²™ç®±å†…å…è®¸è¯¥å·¥å…·ï¼š
  - ä»Ž `tools.sandbox.tools.deny` ä¸­ç§»é™¤å®ƒï¼ˆæˆ–æ¯ä¸ªæ™ºèƒ½ä½“ `agents.list[].tools.sandbox.tools.deny`ï¼‰
  - æˆ–å°†å®ƒæ·»åŠ åˆ° `tools.sandbox.tools.allow`ï¼ˆæˆ–æ¯ä¸ªæ™ºèƒ½ä½“ allowï¼‰

### "æˆ‘ä»¥ä¸ºè¿™æ˜¯ä¸»ä¼šè¯ï¼Œä¸ºä»€ä¹ˆè¢«æ²™ç®±éš”ç¦»äº†ï¼Ÿ"

åœ¨ `"non-main"` æ¨¡å¼ä¸‹ï¼Œç¾¤ç»„/æ¸ é“é”®*ä¸æ˜¯*ä¸»ä¼šè¯ã€‚ä½¿ç”¨ä¸»ä¼šè¯é”®ï¼ˆç”± `sandbox explain` æ˜¾ç¤ºï¼‰æˆ–å°†æ¨¡å¼åˆ‡æ¢ä¸º `"off"`ã€‚


