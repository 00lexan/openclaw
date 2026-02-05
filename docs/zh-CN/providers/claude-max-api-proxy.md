---
read_when:
  - ä½ æƒ³å°† Claude Max è®¢é˜…ä¸Ž OpenAI å…¼å®¹å·¥å…·é…åˆä½¿ç”¨
  - ä½ æƒ³è¦ä¸€ä¸ªå°è£… Claude Code CLI çš„æœ¬åœ° API æœåŠ¡å™¨
  - ä½ æƒ³é€šè¿‡ä½¿ç”¨è®¢é˜…è€Œéž API å¯†é’¥æ¥èŠ‚çœè´¹ç”¨
summary: å°† Claude Max/Pro è®¢é˜…ç”¨ä½œ OpenAI å…¼å®¹çš„ API ç«¯ç‚¹
title: Claude Max API ä»£ç†
x-i18n:
  generated_at: "2026-02-01T21:34:52Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 63b61096b96b720c6d0c317520852db65d72ca8279b3868f35e8387fe3b6ce41
  source_path: providers/claude-max-api-proxy.md
  workflow: 15
---

# Claude Max API ä»£ç†

**claude-max-api-proxy** æ˜¯ä¸€ä¸ªç¤¾åŒºå·¥å…·ï¼Œå°†ä½ çš„ Claude Max/Pro è®¢é˜…æš´éœ²ä¸º OpenAI å…¼å®¹çš„ API ç«¯ç‚¹ã€‚è¿™ä½¿ä½ å¯ä»¥å°†è®¢é˜…ä¸Žä»»ä½•æ”¯æŒ OpenAI API æ ¼å¼çš„å·¥å…·é…åˆä½¿ç”¨ã€‚

## ä¸ºä»€ä¹ˆä½¿ç”¨å®ƒï¼Ÿ

| æ–¹å¼            | è´¹ç”¨                                            | é€‚ç”¨åœºæ™¯                 |
| --------------- | ----------------------------------------------- | ------------------------ |
| Anthropic API   | æŒ‰ token è®¡è´¹ï¼ˆOpus çº¦ $15/M è¾“å…¥ï¼Œ$75/M è¾“å‡ºï¼‰ | ç”Ÿäº§åº”ç”¨ã€é«˜æµé‡åœºæ™¯     |
| Claude Max è®¢é˜… | æ¯æœˆå›ºå®š $200                                   | ä¸ªäººä½¿ç”¨ã€å¼€å‘ã€æ— é™ç”¨é‡ |

å¦‚æžœä½ æœ‰ Claude Max è®¢é˜…å¹¶å¸Œæœ›ä¸Ž OpenAI å…¼å®¹å·¥å…·é…åˆä½¿ç”¨ï¼Œè¿™ä¸ªä»£ç†å¯ä»¥å¸®ä½ èŠ‚çœå¤§é‡è´¹ç”¨ã€‚

## å·¥ä½œåŽŸç†

```
ä½ çš„åº”ç”¨ â†’ claude-max-api-proxy â†’ Claude Code CLI â†’ Anthropicï¼ˆé€šè¿‡è®¢é˜…ï¼‰
     ï¼ˆOpenAI æ ¼å¼ï¼‰              ï¼ˆè½¬æ¢æ ¼å¼ï¼‰           ï¼ˆä½¿ç”¨ä½ çš„ç™»å½•å‡­æ®ï¼‰
```

è¯¥ä»£ç†ï¼š

1. åœ¨ `http://localhost:3456/v1/chat/completions` æŽ¥å— OpenAI æ ¼å¼çš„è¯·æ±‚
2. å°†å…¶è½¬æ¢ä¸º Claude Code CLI å‘½ä»¤
3. ä»¥ OpenAI æ ¼å¼è¿”å›žå“åº”ï¼ˆæ”¯æŒæµå¼ä¼ è¾“ï¼‰

## å®‰è£…

```bash
# éœ€è¦ Node.js 20+ å’Œ Claude Code CLI
npm install -g claude-max-api-proxy

# éªŒè¯ Claude CLI å·²è®¤è¯
claude --version
```

## ä½¿ç”¨æ–¹æ³•

### å¯åŠ¨æœåŠ¡å™¨

```bash
claude-max-api
# æœåŠ¡å™¨è¿è¡Œåœ¨ http://localhost:3456
```

### æµ‹è¯•

```bash
# å¥åº·æ£€æŸ¥
curl http://localhost:3456/health

# åˆ—å‡ºæ¨¡åž‹
curl http://localhost:3456/v1/models

# èŠå¤©è¡¥å…¨
curl http://localhost:3456/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "claude-opus-4",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

### ä¸Ž  é…åˆä½¿ç”¨

ä½ å¯ä»¥å°†  æŒ‡å‘è¯¥ä»£ç†ä½œä¸ºè‡ªå®šä¹‰ OpenAI å…¼å®¹ç«¯ç‚¹ï¼š

```json5
{
  env: {
    OPENAI_API_KEY: "not-needed",
    OPENAI_BASE_URL: "http://localhost:3456/v1",
  },
  agents: {
    defaults: {
      model: { primary: "openai/claude-opus-4" },
    },
  },
}
```

## å¯ç”¨æ¨¡åž‹

| æ¨¡åž‹ ID           | å¯¹åº”æ¨¡åž‹        |
| ----------------- | --------------- |
| `claude-opus-4`   | Claude Opus 4   |
| `claude-sonnet-4` | Claude Sonnet 4 |
| `claude-haiku-4`  | Claude Haiku 4  |

## macOS è‡ªåŠ¨å¯åŠ¨

åˆ›å»º LaunchAgent ä»¥è‡ªåŠ¨è¿è¡Œä»£ç†ï¼š

```bash
cat > ~/Library/LaunchAgents/com.claude-max-api.plist << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.claude-max-api</string>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
  <key>ProgramArguments</key>
  <array>
    <string>/usr/local/bin/node</string>
    <string>/usr/local/lib/node_modules/claude-max-api-proxy/dist/server/standalone.js</string>
  </array>
  <key>EnvironmentVariables</key>
  <dict>
    <key>PATH</key>
    <string>/usr/local/bin:/opt/homebrew/bin:~/.local/bin:/usr/bin:/bin</string>
  </dict>
</dict>
</plist>
EOF

launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.claude-max-api.plist
```

## é“¾æŽ¥

- **npm:** https://www.npmjs.com/package/claude-max-api-proxy
- **GitHub:** https://github.com/atalovesyou/claude-max-api-proxy
- **Issues:** https://github.com/atalovesyou/claude-max-api-proxy/issues

## æ³¨æ„äº‹é¡¹

- è¿™æ˜¯ä¸€ä¸ª**ç¤¾åŒºå·¥å…·**ï¼Œå¹¶éžç”± Anthropic æˆ–  å®˜æ–¹æ”¯æŒ
- éœ€è¦æœ‰æ•ˆçš„ Claude Max/Pro è®¢é˜…å¹¶å·²è®¤è¯ Claude Code CLI
- ä»£ç†åœ¨æœ¬åœ°è¿è¡Œï¼Œä¸ä¼šå°†æ•°æ®å‘é€åˆ°ä»»ä½•ç¬¬ä¸‰æ–¹æœåŠ¡å™¨
- å®Œå…¨æ”¯æŒæµå¼å“åº”

## å¦è¯·å‚é˜…

- [Anthropic æä¾›å•†](/providers/anthropic) -  ä¸Ž Claude çš„åŽŸç”Ÿé›†æˆï¼Œä½¿ç”¨ setup-token æˆ– API å¯†é’¥
- [OpenAI æä¾›å•†](/providers/openai) - é€‚ç”¨äºŽ OpenAI/Codex è®¢é˜…


