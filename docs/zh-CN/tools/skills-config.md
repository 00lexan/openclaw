---
read_when:
  - æ·»åŠ æˆ–ä¿®æ”¹ Skills é…ç½®
  - è°ƒæ•´å†…ç½®ç™½åå•æˆ–å®‰è£…è¡Œä¸º
summary: Skills é…ç½® schema å’Œç¤ºä¾‹
title: Skills é…ç½®
x-i18n:
  generated_at: "2026-02-03T10:10:59Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: e265c93da7856887c11abd92b379349181549e1a02164184d61a8d1f6b2feed5
  source_path: tools/skills-config.md
  workflow: 15
---

# Skills é…ç½®

æ‰€æœ‰ Skills ç›¸å…³é…ç½®éƒ½ä½äºŽ `~/./.json` ä¸­çš„ `skills` ä¸‹ã€‚

```json5
{
  skills: {
    allowBundled: ["gemini", "peekaboo"],
    load: {
      extraDirs: ["~/Projects/agent-scripts/skills", "~/Projects/oss/some-skill-pack/skills"],
      watch: true,
      watchDebounceMs: 250,
    },
    install: {
      preferBrew: true,
      nodeManager: "npm", // npm | pnpm | yarn | bunï¼ˆGateway ç½‘å…³è¿è¡Œæ—¶ä»ä¸º Nodeï¼›ä¸æŽ¨è bunï¼‰
    },
    entries: {
      "nano-banana-pro": {
        enabled: true,
        apiKey: "GEMINI_KEY_HERE",
        env: {
          GEMINI_API_KEY: "GEMINI_KEY_HERE",
        },
      },
      peekaboo: { enabled: true },
      sag: { enabled: false },
    },
  },
}
```

## å­—æ®µ

- `allowBundled`ï¼šå¯é€‰çš„ä»…ç”¨äºŽ**å†…ç½®** Skills çš„ç™½åå•ã€‚è®¾ç½®åŽï¼Œåªæœ‰åˆ—è¡¨ä¸­çš„å†…ç½® Skills æ‰æœ‰èµ„æ ¼ï¼ˆæ‰˜ç®¡/å·¥ä½œåŒº Skills ä¸å—å½±å“ï¼‰ã€‚
- `load.extraDirs`ï¼šè¦æ‰«æçš„é™„åŠ  Skills ç›®å½•ï¼ˆæœ€ä½Žä¼˜å…ˆçº§ï¼‰ã€‚
- `load.watch`ï¼šç›‘è§† Skills æ–‡ä»¶å¤¹å¹¶åˆ·æ–° Skills å¿«ç…§ï¼ˆé»˜è®¤ï¼štrueï¼‰ã€‚
- `load.watchDebounceMs`ï¼šSkills ç›‘è§†å™¨äº‹ä»¶çš„é˜²æŠ–æ—¶é—´ï¼ˆæ¯«ç§’ï¼‰ï¼ˆé»˜è®¤ï¼š250ï¼‰ã€‚
- `install.preferBrew`ï¼šåœ¨å¯ç”¨æ—¶ä¼˜å…ˆä½¿ç”¨ brew å®‰è£…å™¨ï¼ˆé»˜è®¤ï¼štrueï¼‰ã€‚
- `install.nodeManager`ï¼šnode å®‰è£…å™¨åå¥½ï¼ˆ`npm` | `pnpm` | `yarn` | `bun`ï¼Œé»˜è®¤ï¼šnpmï¼‰ã€‚è¿™ä»…å½±å“ **Skills å®‰è£…**ï¼›Gateway ç½‘å…³è¿è¡Œæ—¶åº”ä»ä¸º Nodeï¼ˆä¸æŽ¨è Bun ç”¨äºŽ WhatsApp/Telegramï¼‰ã€‚
- `entries.<skillKey>`ï¼šå• Skills è¦†ç›–ã€‚

å• Skills å­—æ®µï¼š

- `enabled`ï¼šè®¾ç½®ä¸º `false` ä»¥ç¦ç”¨æŸä¸ª Skillsï¼Œå³ä½¿å®ƒæ˜¯å†…ç½®/å·²å®‰è£…çš„ã€‚
- `env`ï¼šä¸ºæ™ºèƒ½ä½“è¿è¡Œæ³¨å…¥çš„çŽ¯å¢ƒå˜é‡ï¼ˆä»…åœ¨å°šæœªè®¾ç½®æ—¶ï¼‰ã€‚
- `apiKey`ï¼šå¯é€‰çš„ä¾¿æ·å­—æ®µï¼Œç”¨äºŽå£°æ˜Žä¸»çŽ¯å¢ƒå˜é‡çš„ Skillsã€‚

## æ³¨æ„äº‹é¡¹

- `entries` ä¸‹çš„é”®é»˜è®¤æ˜ å°„åˆ° Skills åç§°ã€‚å¦‚æžœ Skills å®šä¹‰äº† `metadata..skillKey`ï¼Œåˆ™ä½¿ç”¨è¯¥é”®ã€‚
- å¯ç”¨ç›‘è§†å™¨åŽï¼ŒSkills çš„æ›´æ”¹ä¼šåœ¨ä¸‹ä¸€ä¸ªæ™ºèƒ½ä½“è½®æ¬¡è¢«èŽ·å–ã€‚

### æ²™ç®±éš”ç¦»çš„ Skills + çŽ¯å¢ƒå˜é‡

å½“ä¼šè¯å¤„äºŽ**æ²™ç®±éš”ç¦»**çŠ¶æ€æ—¶ï¼ŒSkills è¿›ç¨‹åœ¨ Docker å†…è¿è¡Œã€‚æ²™ç®±**ä¸ä¼š**ç»§æ‰¿å®¿ä¸»æœºçš„ `process.env`ã€‚

ä½¿ç”¨ä»¥ä¸‹æ–¹å¼ä¹‹ä¸€ï¼š

- `agents.defaults.sandbox.docker.env`ï¼ˆæˆ–å•æ™ºèƒ½ä½“çš„ `agents.list[].sandbox.docker.env`ï¼‰
- å°†çŽ¯å¢ƒå˜é‡çƒ˜ç„™åˆ°ä½ çš„è‡ªå®šä¹‰æ²™ç®±é•œåƒä¸­

å…¨å±€ `env` å’Œ `skills.entries.<skill>.env/apiKey` ä»…é€‚ç”¨äºŽ**å®¿ä¸»æœº**è¿è¡Œã€‚


