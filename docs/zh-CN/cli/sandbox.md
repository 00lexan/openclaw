---
read_when: You are managing sandbox containers or debugging sandbox/tool-policy behavior.
status: active
summary: ç®¡ç†æ²™ç®±å®¹å™¨å¹¶æ£€æŸ¥ç”Ÿæ•ˆçš„æ²™ç®±ç­–ç•¥
title: æ²™ç®± CLI
x-i18n:
  generated_at: "2026-02-03T07:45:18Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 6e1186f26c77e188206ce5e198ab624d6b38bc7bb7c06e4d2281b6935c39e347
  source_path: cli/sandbox.md
  workflow: 15
---

# æ²™ç®± CLI

ç®¡ç†åŸºäºŽ Docker çš„æ²™ç®±å®¹å™¨ï¼Œç”¨äºŽéš”ç¦»æ™ºèƒ½ä½“æ‰§è¡Œã€‚

## æ¦‚è¿°

 å¯ä»¥åœ¨éš”ç¦»çš„ Docker å®¹å™¨ä¸­è¿è¡Œæ™ºèƒ½ä½“ä»¥ç¡®ä¿å®‰å…¨ã€‚`sandbox` å‘½ä»¤å¸®åŠ©ä½ ç®¡ç†è¿™äº›å®¹å™¨ï¼Œç‰¹åˆ«æ˜¯åœ¨æ›´æ–°æˆ–é…ç½®æ›´æ”¹åŽã€‚

## å‘½ä»¤

### ` sandbox explain`

æ£€æŸ¥**ç”Ÿæ•ˆçš„**æ²™ç®±æ¨¡å¼/ä½œç”¨åŸŸ/å·¥ä½œåŒºè®¿é—®æƒé™ã€æ²™ç®±å·¥å…·ç­–ç•¥å’Œææƒé—¨æŽ§ï¼ˆé™„å¸¦ä¿®å¤é…ç½®çš„é”®è·¯å¾„ï¼‰ã€‚

```bash
 sandbox explain
 sandbox explain --session agent:main:main
 sandbox explain --agent work
 sandbox explain --json
```

### ` sandbox list`

åˆ—å‡ºæ‰€æœ‰æ²™ç®±å®¹å™¨åŠå…¶çŠ¶æ€å’Œé…ç½®ã€‚

```bash
 sandbox list
 sandbox list --browser  # List only browser containers
 sandbox list --json     # JSON output
```

**è¾“å‡ºåŒ…æ‹¬ï¼š**

- å®¹å™¨åç§°å’ŒçŠ¶æ€ï¼ˆè¿è¡Œä¸­/å·²åœæ­¢ï¼‰
- Docker é•œåƒåŠå…¶æ˜¯å¦ä¸Žé…ç½®åŒ¹é…
- åˆ›å»ºæ—¶é—´
- ç©ºé—²æ—¶é—´ï¼ˆè‡ªä¸Šæ¬¡ä½¿ç”¨ä»¥æ¥çš„æ—¶é—´ï¼‰
- å…³è”çš„ä¼šè¯/æ™ºèƒ½ä½“

### ` sandbox recreate`

ç§»é™¤æ²™ç®±å®¹å™¨ä»¥å¼ºåˆ¶ä½¿ç”¨æ›´æ–°çš„é•œåƒ/é…ç½®é‡æ–°åˆ›å»ºã€‚

```bash
 sandbox recreate --all                # Recreate all containers
 sandbox recreate --session main       # Specific session
 sandbox recreate --agent mybot        # Specific agent
 sandbox recreate --browser            # Only browser containers
 sandbox recreate --all --force        # Skip confirmation
```

**é€‰é¡¹ï¼š**

- `--all`ï¼šé‡æ–°åˆ›å»ºæ‰€æœ‰æ²™ç®±å®¹å™¨
- `--session <key>`ï¼šé‡æ–°åˆ›å»ºç‰¹å®šä¼šè¯çš„å®¹å™¨
- `--agent <id>`ï¼šé‡æ–°åˆ›å»ºç‰¹å®šæ™ºèƒ½ä½“çš„å®¹å™¨
- `--browser`ï¼šä»…é‡æ–°åˆ›å»ºæµè§ˆå™¨å®¹å™¨
- `--force`ï¼šè·³è¿‡ç¡®è®¤æç¤º

**é‡è¦ï¼š** å®¹å™¨ä¼šåœ¨æ™ºèƒ½ä½“ä¸‹æ¬¡ä½¿ç”¨æ—¶è‡ªåŠ¨é‡æ–°åˆ›å»ºã€‚

## ä½¿ç”¨åœºæ™¯

### æ›´æ–° Docker é•œåƒåŽ

```bash
# Pull new image
docker pull -sandbox:latest
docker tag -sandbox:latest -sandbox:bookworm-slim

# Update config to use new image
# Edit config: agents.defaults.sandbox.docker.image (or agents.list[].sandbox.docker.image)

# Recreate containers
 sandbox recreate --all
```

### æ›´æ”¹æ²™ç®±é…ç½®åŽ

```bash
# Edit config: agents.defaults.sandbox.* (or agents.list[].sandbox.*)

# Recreate to apply new config
 sandbox recreate --all
```

### æ›´æ”¹ setupCommand åŽ

```bash
 sandbox recreate --all
# or just one agent:
 sandbox recreate --agent family
```

### ä»…é’ˆå¯¹ç‰¹å®šæ™ºèƒ½ä½“

```bash
# Update only one agent's containers
 sandbox recreate --agent alfred
```

## ä¸ºä»€ä¹ˆéœ€è¦è¿™ä¸ªï¼Ÿ

**é—®é¢˜ï¼š** å½“ä½ æ›´æ–°æ²™ç®± Docker é•œåƒæˆ–é…ç½®æ—¶ï¼š

- çŽ°æœ‰å®¹å™¨ç»§ç»­ä½¿ç”¨æ—§è®¾ç½®è¿è¡Œ
- å®¹å™¨ä»…åœ¨ç©ºé—² 24 å°æ—¶åŽæ‰è¢«æ¸…ç†
- ç»å¸¸ä½¿ç”¨çš„æ™ºèƒ½ä½“ä¼šæ— é™æœŸä¿æŒæ—§å®¹å™¨è¿è¡Œ

**è§£å†³æ–¹æ¡ˆï¼š** ä½¿ç”¨ ` sandbox recreate` å¼ºåˆ¶ç§»é™¤æ—§å®¹å™¨ã€‚å®ƒä»¬ä¼šåœ¨ä¸‹æ¬¡éœ€è¦æ—¶è‡ªåŠ¨ä½¿ç”¨å½“å‰è®¾ç½®é‡æ–°åˆ›å»ºã€‚

æç¤ºï¼šä¼˜å…ˆä½¿ç”¨ ` sandbox recreate` è€Œä¸æ˜¯æ‰‹åŠ¨ `docker rm`ã€‚å®ƒä½¿ç”¨ Gateway ç½‘å…³çš„å®¹å™¨å‘½åè§„åˆ™ï¼Œé¿å…åœ¨ä½œç”¨åŸŸ/ä¼šè¯é”®æ›´æ”¹æ—¶å‡ºçŽ°ä¸åŒ¹é…ã€‚

## é…ç½®

æ²™ç®±è®¾ç½®ä½äºŽ `~/./.json` çš„ `agents.defaults.sandbox` ä¸‹ï¼ˆæ¯ä¸ªæ™ºèƒ½ä½“çš„è¦†ç›–è®¾ç½®åœ¨ `agents.list[].sandbox` ä¸­ï¼‰ï¼š

```jsonc
{
  "agents": {
    "defaults": {
      "sandbox": {
        "mode": "all", // off, non-main, all
        "scope": "agent", // session, agent, shared
        "docker": {
          "image": "-sandbox:bookworm-slim",
          "containerPrefix": "-sbx-",
          // ... more Docker options
        },
        "prune": {
          "idleHours": 24, // Auto-prune after 24h idle
          "maxAgeDays": 7, // Auto-prune after 7 days
        },
      },
    },
  },
}
```

## å¦è¯·å‚é˜…

- [æ²™ç®±æ–‡æ¡£](/gateway/sandboxing)
- [æ™ºèƒ½ä½“é…ç½®](/concepts/agent-workspace)
- [Doctor å‘½ä»¤](/gateway/doctor) - æ£€æŸ¥æ²™ç®±è®¾ç½®


