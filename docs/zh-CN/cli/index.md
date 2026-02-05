---
read_when:
  - æ·»åŠ æˆ–ä¿®æ”¹ CLI å‘½ä»¤æˆ–é€‰é¡¹
  - ä¸ºæ–°å‘½ä»¤ç•Œé¢ç¼–å†™æ–‡æ¡£
summary:  `` å‘½ä»¤ã€å­å‘½ä»¤å’Œé€‰é¡¹çš„ CLI å‚è€ƒ
title: CLI å‚è€ƒ
x-i18n:
  generated_at: "2026-02-03T07:47:54Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: a73923763d7b89d4b183f569d543927ffbfd1f3e02f9e66639913f6daf226850
  source_path: cli/index.md
  workflow: 15
---

# CLI å‚è€ƒ

æœ¬é¡µæè¿°å½“å‰çš„ CLI è¡Œä¸ºã€‚å¦‚æžœå‘½ä»¤å‘ç”Ÿå˜åŒ–ï¼Œè¯·æ›´æ–°æ­¤æ–‡æ¡£ã€‚

## å‘½ä»¤é¡µé¢

- [`setup`](/cli/setup)
- [`onboard`](/cli/onboard)
- [`configure`](/cli/configure)
- [`config`](/cli/config)
- [`doctor`](/cli/doctor)
- [`dashboard`](/cli/dashboard)
- [`reset`](/cli/reset)
- [`uninstall`](/cli/uninstall)
- [`update`](/cli/update)
- [`message`](/cli/message)
- [`agent`](/cli/agent)
- [`agents`](/cli/agents)
- [`acp`](/cli/acp)
- [`status`](/cli/status)
- [`health`](/cli/health)
- [`sessions`](/cli/sessions)
- [`gateway`](/cli/gateway)
- [`logs`](/cli/logs)
- [`system`](/cli/system)
- [`models`](/cli/models)
- [`memory`](/cli/memory)
- [`nodes`](/cli/nodes)
- [`devices`](/cli/devices)
- [`node`](/cli/node)
- [`approvals`](/cli/approvals)
- [`sandbox`](/cli/sandbox)
- [`tui`](/cli/tui)
- [`browser`](/cli/browser)
- [`cron`](/cli/cron)
- [`dns`](/cli/dns)
- [`docs`](/cli/docs)
- [`hooks`](/cli/hooks)
- [`webhooks`](/cli/webhooks)
- [`pairing`](/cli/pairing)
- [`plugins`](/cli/plugins)ï¼ˆæ’ä»¶å‘½ä»¤ï¼‰
- [`channels`](/cli/channels)
- [`security`](/cli/security)
- [`skills`](/cli/skills)
- [`voicecall`](/cli/voicecall)ï¼ˆæ’ä»¶ï¼›å¦‚å·²å®‰è£…ï¼‰

## å…¨å±€æ ‡å¿—

- `--dev`ï¼šå°†çŠ¶æ€éš”ç¦»åˆ° `~/.-dev` ä¸‹å¹¶è°ƒæ•´é»˜è®¤ç«¯å£ã€‚
- `--profile <name>`ï¼šå°†çŠ¶æ€éš”ç¦»åˆ° `~/.-<name>` ä¸‹ã€‚
- `--no-color`ï¼šç¦ç”¨ ANSI é¢œè‰²ã€‚
- `--update`ï¼š` update` çš„ç®€å†™ï¼ˆä»…é™æºç å®‰è£…ï¼‰ã€‚
- `-V`ã€`--version`ã€`-v`ï¼šæ‰“å°ç‰ˆæœ¬å¹¶é€€å‡ºã€‚

## è¾“å‡ºæ ·å¼

- ANSI é¢œè‰²å’Œè¿›åº¦æŒ‡ç¤ºå™¨ä»…åœ¨ TTY ä¼šè¯ä¸­æ¸²æŸ“ã€‚
- OSC-8 è¶…é“¾æŽ¥åœ¨æ”¯æŒçš„ç»ˆç«¯ä¸­æ¸²æŸ“ä¸ºå¯ç‚¹å‡»é“¾æŽ¥ï¼›å¦åˆ™å›žé€€åˆ°çº¯ URLã€‚
- `--json`ï¼ˆä»¥åŠæ”¯æŒçš„åœ°æ–¹ä½¿ç”¨ `--plain`ï¼‰ç¦ç”¨æ ·å¼ä»¥èŽ·å¾—å¹²å‡€è¾“å‡ºã€‚
- `--no-color` ç¦ç”¨ ANSI æ ·å¼ï¼›ä¹Ÿæ”¯æŒ `NO_COLOR=1`ã€‚
- é•¿æ—¶é—´è¿è¡Œçš„å‘½ä»¤æ˜¾ç¤ºè¿›åº¦æŒ‡ç¤ºå™¨ï¼ˆæ”¯æŒæ—¶ä½¿ç”¨ OSC 9;4ï¼‰ã€‚

## é¢œè‰²è°ƒè‰²æ¿

 åœ¨ CLI è¾“å‡ºä¸­ä½¿ç”¨é¾™è™¾è°ƒè‰²æ¿ã€‚

- `accent`ï¼ˆ#FF5A2Dï¼‰ï¼šæ ‡é¢˜ã€æ ‡ç­¾ã€ä¸»è¦é«˜äº®ã€‚
- `accentBright`ï¼ˆ#FF7A3Dï¼‰ï¼šå‘½ä»¤åç§°ã€å¼ºè°ƒã€‚
- `accentDim`ï¼ˆ#D14A22ï¼‰ï¼šæ¬¡è¦é«˜äº®æ–‡æœ¬ã€‚
- `info`ï¼ˆ#FF8A5Bï¼‰ï¼šä¿¡æ¯æ€§å€¼ã€‚
- `success`ï¼ˆ#2FBF71ï¼‰ï¼šæˆåŠŸçŠ¶æ€ã€‚
- `warn`ï¼ˆ#FFB020ï¼‰ï¼šè­¦å‘Šã€å›žé€€ã€æ³¨æ„ã€‚
- `error`ï¼ˆ#E23D2Dï¼‰ï¼šé”™è¯¯ã€å¤±è´¥ã€‚
- `muted`ï¼ˆ#8B7F77ï¼‰ï¼šå¼±åŒ–ã€å…ƒæ•°æ®ã€‚

è°ƒè‰²æ¿æƒå¨æ¥æºï¼š`src/terminal/palette.ts`ï¼ˆåˆå"lobster seam"ï¼‰ã€‚

## å‘½ä»¤æ ‘

```
 [--dev] [--profile <name>] <command>
  setup
  onboard
  configure
  config
    get
    set
    unset
  doctor
  security
    audit
  reset
  uninstall
  update
  channels
    list
    status
    logs
    add
    remove
    login
    logout
  skills
    list
    info
    check
  plugins
    list
    info
    install
    enable
    disable
    doctor
  memory
    status
    index
    search
  message
  agent
  agents
    list
    add
    delete
  acp
  status
  health
  sessions
  gateway
    call
    health
    status
    probe
    discover
    install
    uninstall
    start
    stop
    restart
    run
  logs
  system
    event
    heartbeat last|enable|disable
    presence
  models
    list
    status
    set
    set-image
    aliases list|add|remove
    fallbacks list|add|remove|clear
    image-fallbacks list|add|remove|clear
    scan
    auth add|setup-token|paste-token
    auth order get|set|clear
  sandbox
    list
    recreate
    explain
  cron
    status
    list
    add
    edit
    rm
    enable
    disable
    runs
    run
  nodes
  devices
  node
    run
    status
    install
    uninstall
    start
    stop
    restart
  approvals
    get
    set
    allowlist add|remove
  browser
    status
    start
    stop
    reset-profile
    tabs
    open
    focus
    close
    profiles
    create-profile
    delete-profile
    screenshot
    snapshot
    navigate
    resize
    click
    type
    press
    hover
    drag
    select
    upload
    fill
    dialog
    wait
    evaluate
    console
    pdf
  hooks
    list
    info
    check
    enable
    disable
    install
    update
  webhooks
    gmail setup|run
  pairing
    list
    approve
  docs
  dns
    setup
  tui
```

æ³¨æ„ï¼šæ’ä»¶å¯ä»¥æ·»åŠ é¢å¤–çš„é¡¶çº§å‘½ä»¤ï¼ˆä¾‹å¦‚ ` voicecall`ï¼‰ã€‚

## å®‰å…¨

- ` security audit` â€” å®¡è®¡é…ç½® + æœ¬åœ°çŠ¶æ€ä¸­å¸¸è§çš„å®‰å…¨éšæ‚£ã€‚
- ` security audit --deep` â€” å°½åŠ›è¿›è¡Œå®žæ—¶ Gateway ç½‘å…³æŽ¢æµ‹ã€‚
- ` security audit --fix` â€” æ”¶ç´§å®‰å…¨é»˜è®¤å€¼å¹¶ chmod çŠ¶æ€/é…ç½®ã€‚

## æ’ä»¶

ç®¡ç†æ‰©å±•åŠå…¶é…ç½®ï¼š

- ` plugins list` â€” å‘çŽ°æ’ä»¶ï¼ˆä½¿ç”¨ `--json` èŽ·å–æœºå™¨å¯è¯»è¾“å‡ºï¼‰ã€‚
- ` plugins info <id>` â€” æ˜¾ç¤ºæ’ä»¶è¯¦æƒ…ã€‚
- ` plugins install <path|.tgz|npm-spec>` â€” å®‰è£…æ’ä»¶ï¼ˆæˆ–å°†æ’ä»¶è·¯å¾„æ·»åŠ åˆ° `plugins.load.paths`ï¼‰ã€‚
- ` plugins enable <id>` / `disable <id>` â€” åˆ‡æ¢ `plugins.entries.<id>.enabled`ã€‚
- ` plugins doctor` â€” æŠ¥å‘Šæ’ä»¶åŠ è½½é”™è¯¯ã€‚

å¤§å¤šæ•°æ’ä»¶æ›´æ”¹éœ€è¦é‡å¯ Gateway ç½‘å…³ã€‚å‚è§ [/plugin](/plugin)ã€‚

## è®°å¿†

å¯¹ `MEMORY.md` + `memory/*.md` è¿›è¡Œå‘é‡æœç´¢ï¼š

- ` memory status` â€” æ˜¾ç¤ºç´¢å¼•ç»Ÿè®¡ã€‚
- ` memory index` â€” é‡æ–°ç´¢å¼•è®°å¿†æ–‡ä»¶ã€‚
- ` memory search "<query>"` â€” å¯¹è®°å¿†è¿›è¡Œè¯­ä¹‰æœç´¢ã€‚

## èŠå¤©æ–œæ å‘½ä»¤

èŠå¤©æ¶ˆæ¯æ”¯æŒ `/...` å‘½ä»¤ï¼ˆæ–‡æœ¬å’ŒåŽŸç”Ÿï¼‰ã€‚å‚è§ [/tools/slash-commands](/tools/slash-commands)ã€‚

äº®ç‚¹ï¼š

- `/status` ç”¨äºŽå¿«é€Ÿè¯Šæ–­ã€‚
- `/config` ç”¨äºŽæŒä¹…åŒ–é…ç½®æ›´æ”¹ã€‚
- `/debug` ç”¨äºŽä»…è¿è¡Œæ—¶çš„é…ç½®è¦†ç›–ï¼ˆå†…å­˜ä¸­ï¼Œä¸å†™å…¥ç£ç›˜ï¼›éœ€è¦ `commands.debug: true`ï¼‰ã€‚

## è®¾ç½® + æ–°æ‰‹å¼•å¯¼

### `setup`

åˆå§‹åŒ–é…ç½® + å·¥ä½œåŒºã€‚

é€‰é¡¹ï¼š

- `--workspace <dir>`ï¼šæ™ºèƒ½ä½“å·¥ä½œåŒºè·¯å¾„ï¼ˆé»˜è®¤ `~/./workspace`ï¼‰ã€‚
- `--wizard`ï¼šè¿è¡Œæ–°æ‰‹å¼•å¯¼å‘å¯¼ã€‚
- `--non-interactive`ï¼šæ— æç¤ºè¿è¡Œå‘å¯¼ã€‚
- `--mode <local|remote>`ï¼šå‘å¯¼æ¨¡å¼ã€‚
- `--remote-url <url>`ï¼šè¿œç¨‹ Gateway ç½‘å…³ URLã€‚
- `--remote-token <token>`ï¼šè¿œç¨‹ Gateway ç½‘å…³ä»¤ç‰Œã€‚

å½“å­˜åœ¨ä»»ä½•å‘å¯¼æ ‡å¿—ï¼ˆ`--non-interactive`ã€`--mode`ã€`--remote-url`ã€`--remote-token`ï¼‰æ—¶ï¼Œå‘å¯¼è‡ªåŠ¨è¿è¡Œã€‚

### `onboard`

äº¤äº’å¼å‘å¯¼ï¼Œç”¨äºŽè®¾ç½® Gateway ç½‘å…³ã€å·¥ä½œåŒºå’Œ Skillsã€‚

é€‰é¡¹ï¼š

- `--workspace <dir>`
- `--reset`ï¼ˆåœ¨å‘å¯¼ä¹‹å‰é‡ç½®é…ç½® + å‡­è¯ + ä¼šè¯ + å·¥ä½œåŒºï¼‰
- `--non-interactive`
- `--mode <local|remote>`
- `--flow <quickstart|advanced|manual>`ï¼ˆmanual æ˜¯ advanced çš„åˆ«åï¼‰
- `--auth-choice <setup-token|token|chutes|openai-codex|openai-api-key|openrouter-api-key|ai-gateway-api-key|moonshot-api-key|kimi-code-api-key|synthetic-api-key|venice-api-key|gemini-api-key|zai-api-key|apiKey|minimax-api|minimax-api-lightning|opencode-zen|skip>`
- `--token-provider <id>`ï¼ˆéžäº¤äº’å¼ï¼›ä¸Ž `--auth-choice token` é…åˆä½¿ç”¨ï¼‰
- `--token <token>`ï¼ˆéžäº¤äº’å¼ï¼›ä¸Ž `--auth-choice token` é…åˆä½¿ç”¨ï¼‰
- `--token-profile-id <id>`ï¼ˆéžäº¤äº’å¼ï¼›é»˜è®¤ï¼š`<provider>:manual`ï¼‰
- `--token-expires-in <duration>`ï¼ˆéžäº¤äº’å¼ï¼›ä¾‹å¦‚ `365d`ã€`12h`ï¼‰
- `--anthropic-api-key <key>`
- `--openai-api-key <key>`
- `--openrouter-api-key <key>`
- `--ai-gateway-api-key <key>`
- `--moonshot-api-key <key>`
- `--kimi-code-api-key <key>`
- `--gemini-api-key <key>`
- `--zai-api-key <key>`
- `--minimax-api-key <key>`
- `--opencode-zen-api-key <key>`
- `--gateway-port <port>`
- `--gateway-bind <loopback|lan|tailnet|auto|custom>`
- `--gateway-auth <token|password>`
- `--gateway-token <token>`
- `--gateway-password <password>`
- `--remote-url <url>`
- `--remote-token <token>`
- `--tailscale <off|serve|funnel>`
- `--tailscale-reset-on-exit`
- `--install-daemon`
- `--no-install-daemon`ï¼ˆåˆ«åï¼š`--skip-daemon`ï¼‰
- `--daemon-runtime <node|bun>`
- `--skip-channels`
- `--skip-skills`
- `--skip-health`
- `--skip-ui`
- `--node-manager <npm|pnpm|bun>`ï¼ˆæŽ¨è pnpmï¼›ä¸å»ºè®®å°† bun ç”¨äºŽ Gateway ç½‘å…³è¿è¡Œæ—¶ï¼‰
- `--json`

### `configure`

äº¤äº’å¼é…ç½®å‘å¯¼ï¼ˆæ¨¡åž‹ã€æ¸ é“ã€Skillsã€Gateway ç½‘å…³ï¼‰ã€‚

### `config`

éžäº¤äº’å¼é…ç½®è¾…åŠ©å·¥å…·ï¼ˆget/set/unsetï¼‰ã€‚ä¸å¸¦å­å‘½ä»¤è¿è¡Œ ` config` ä¼šå¯åŠ¨å‘å¯¼ã€‚

å­å‘½ä»¤ï¼š

- `config get <path>`ï¼šæ‰“å°é…ç½®å€¼ï¼ˆç‚¹/æ‹¬å·è·¯å¾„ï¼‰ã€‚
- `config set <path> <value>`ï¼šè®¾ç½®å€¼ï¼ˆJSON5 æˆ–åŽŸå§‹å­—ç¬¦ä¸²ï¼‰ã€‚
- `config unset <path>`ï¼šåˆ é™¤å€¼ã€‚

### `doctor`

å¥åº·æ£€æŸ¥ + å¿«é€Ÿä¿®å¤ï¼ˆé…ç½® + Gateway ç½‘å…³ + æ—§ç‰ˆæœåŠ¡ï¼‰ã€‚

é€‰é¡¹ï¼š

- `--no-workspace-suggestions`ï¼šç¦ç”¨å·¥ä½œåŒºè®°å¿†æç¤ºã€‚
- `--yes`ï¼šæ— æç¤ºæŽ¥å—é»˜è®¤å€¼ï¼ˆæ— å¤´æ¨¡å¼ï¼‰ã€‚
- `--non-interactive`ï¼šè·³è¿‡æç¤ºï¼›ä»…åº”ç”¨å®‰å…¨è¿ç§»ã€‚
- `--deep`ï¼šæ‰«æç³»ç»ŸæœåŠ¡ä»¥æŸ¥æ‰¾é¢å¤–çš„ Gateway ç½‘å…³å®‰è£…ã€‚

## æ¸ é“è¾…åŠ©å·¥å…·

### `channels`

ç®¡ç†èŠå¤©æ¸ é“è´¦æˆ·ï¼ˆWhatsApp/Telegram/Discord/Google Chat/Slack/Mattermostï¼ˆæ’ä»¶ï¼‰/Signal/iMessage/MS Teamsï¼‰ã€‚

å­å‘½ä»¤ï¼š

- `channels list`ï¼šæ˜¾ç¤ºå·²é…ç½®çš„æ¸ é“å’Œè®¤è¯é…ç½®æ–‡ä»¶ã€‚
- `channels status`ï¼šæ£€æŸ¥ Gateway ç½‘å…³å¯è¾¾æ€§å’Œæ¸ é“å¥åº·çŠ¶å†µï¼ˆ`--probe` è¿è¡Œé¢å¤–æ£€æŸ¥ï¼›ä½¿ç”¨ ` health` æˆ– ` status --deep` è¿›è¡Œ Gateway ç½‘å…³å¥åº·æŽ¢æµ‹ï¼‰ã€‚
- æç¤ºï¼š`channels status` åœ¨æ£€æµ‹åˆ°å¸¸è§é…ç½®é”™è¯¯æ—¶ä¼šæ‰“å°å¸¦æœ‰å»ºè®®ä¿®å¤çš„è­¦å‘Šï¼ˆç„¶åŽæŒ‡å‘ ` doctor`ï¼‰ã€‚
- `channels logs`ï¼šæ˜¾ç¤º Gateway ç½‘å…³æ—¥å¿—æ–‡ä»¶ä¸­æœ€è¿‘çš„æ¸ é“æ—¥å¿—ã€‚
- `channels add`ï¼šä¸ä¼ æ ‡å¿—æ—¶ä½¿ç”¨å‘å¯¼å¼è®¾ç½®ï¼›æ ‡å¿—åˆ‡æ¢åˆ°éžäº¤äº’æ¨¡å¼ã€‚
- `channels remove`ï¼šé»˜è®¤ç¦ç”¨ï¼›ä¼  `--delete` å¯æ— æç¤ºåˆ é™¤é…ç½®æ¡ç›®ã€‚
- `channels login`ï¼šäº¤äº’å¼æ¸ é“ç™»å½•ï¼ˆä»…é™ WhatsApp Webï¼‰ã€‚
- `channels logout`ï¼šç™»å‡ºæ¸ é“ä¼šè¯ï¼ˆå¦‚æ”¯æŒï¼‰ã€‚

é€šç”¨é€‰é¡¹ï¼š

- `--channel <name>`ï¼š`whatsapp|telegram|discord|googlechat|slack|mattermost|signal|imessage|msteams`
- `--account <id>`ï¼šæ¸ é“è´¦æˆ· idï¼ˆé»˜è®¤ `default`ï¼‰
- `--name <label>`ï¼šè´¦æˆ·çš„æ˜¾ç¤ºåç§°

`channels login` é€‰é¡¹ï¼š

- `--channel <channel>`ï¼ˆé»˜è®¤ `whatsapp`ï¼›æ”¯æŒ `whatsapp`/`web`ï¼‰
- `--account <id>`
- `--verbose`

`channels logout` é€‰é¡¹ï¼š

- `--channel <channel>`ï¼ˆé»˜è®¤ `whatsapp`ï¼‰
- `--account <id>`

`channels list` é€‰é¡¹ï¼š

- `--no-usage`ï¼šè·³è¿‡æ¨¡åž‹æä¾›å•†ç”¨é‡/é…é¢å¿«ç…§ï¼ˆä»…é™ OAuth/API æ”¯æŒçš„ï¼‰ã€‚
- `--json`ï¼šè¾“å‡º JSONï¼ˆé™¤éžè®¾ç½® `--no-usage`ï¼Œå¦åˆ™åŒ…å«ç”¨é‡ï¼‰ã€‚

`channels logs` é€‰é¡¹ï¼š

- `--channel <name|all>`ï¼ˆé»˜è®¤ `all`ï¼‰
- `--lines <n>`ï¼ˆé»˜è®¤ `200`ï¼‰
- `--json`

æ›´å¤šè¯¦æƒ…ï¼š[/concepts/oauth](/concepts/oauth)

ç¤ºä¾‹ï¼š

```bash
 channels add --channel telegram --account alerts --name "Alerts Bot" --token $TELEGRAM_BOT_TOKEN
 channels add --channel discord --account work --name "Work Bot" --token $DISCORD_BOT_TOKEN
 channels remove --channel discord --account work --delete
 channels status --probe
 status --deep
```

### `skills`

åˆ—å‡ºå’Œæ£€æŸ¥å¯ç”¨çš„ Skills åŠå°±ç»ªä¿¡æ¯ã€‚

å­å‘½ä»¤ï¼š

- `skills list`ï¼šåˆ—å‡º Skillsï¼ˆæ— å­å‘½ä»¤æ—¶çš„é»˜è®¤è¡Œä¸ºï¼‰ã€‚
- `skills info <name>`ï¼šæ˜¾ç¤ºå•ä¸ª Skill çš„è¯¦æƒ…ã€‚
- `skills check`ï¼šå°±ç»ªä¸Žç¼ºå¤±éœ€æ±‚çš„æ‘˜è¦ã€‚

é€‰é¡¹ï¼š

- `--eligible`ï¼šä»…æ˜¾ç¤ºå°±ç»ªçš„ Skillsã€‚
- `--json`ï¼šè¾“å‡º JSONï¼ˆæ— æ ·å¼ï¼‰ã€‚
- `-v`ã€`--verbose`ï¼šåŒ…å«ç¼ºå¤±éœ€æ±‚è¯¦æƒ…ã€‚

æç¤ºï¼šä½¿ç”¨ `npx clawhub` æœç´¢ã€å®‰è£…å’ŒåŒæ­¥ Skillsã€‚

### `pairing`

æ‰¹å‡†è·¨æ¸ é“çš„ç§ä¿¡é…å¯¹è¯·æ±‚ã€‚

å­å‘½ä»¤ï¼š

- `pairing list <channel> [--json]`
- `pairing approve <channel> <code> [--notify]`

### `webhooks gmail`

Gmail Pub/Sub é’©å­è®¾ç½® + è¿è¡Œå™¨ã€‚å‚è§ [/automation/gmail-pubsub](/automation/gmail-pubsub)ã€‚

å­å‘½ä»¤ï¼š

- `webhooks gmail setup`ï¼ˆéœ€è¦ `--account <email>`ï¼›æ”¯æŒ `--project`ã€`--topic`ã€`--subscription`ã€`--label`ã€`--hook-url`ã€`--hook-token`ã€`--push-token`ã€`--bind`ã€`--port`ã€`--path`ã€`--include-body`ã€`--max-bytes`ã€`--renew-minutes`ã€`--tailscale`ã€`--tailscale-path`ã€`--tailscale-target`ã€`--push-endpoint`ã€`--json`ï¼‰
- `webhooks gmail run`ï¼ˆç›¸åŒæ ‡å¿—çš„è¿è¡Œæ—¶è¦†ç›–ï¼‰

### `dns setup`

å¹¿åŸŸå‘çŽ° DNS è¾…åŠ©å·¥å…·ï¼ˆCoreDNS + Tailscaleï¼‰ã€‚å‚è§ [/gateway/discovery](/gateway/discovery)ã€‚

é€‰é¡¹ï¼š

- `--apply`ï¼šå®‰è£…/æ›´æ–° CoreDNS é…ç½®ï¼ˆéœ€è¦ sudoï¼›ä»…é™ macOSï¼‰ã€‚

## æ¶ˆæ¯ + æ™ºèƒ½ä½“

### `message`

ç»Ÿä¸€çš„å‡ºç«™æ¶ˆæ¯ + æ¸ é“æ“ä½œã€‚

å‚è§ï¼š[/cli/message](/cli/message)

å­å‘½ä»¤ï¼š

- `message send|poll|react|reactions|read|edit|delete|pin|unpin|pins|permissions|search|timeout|kick|ban`
- `message thread <create|list|reply>`
- `message emoji <list|upload>`
- `message sticker <send|upload>`
- `message role <info|add|remove>`
- `message channel <info|list>`
- `message member info`
- `message voice status`
- `message event <list|create>`

ç¤ºä¾‹ï¼š

- ` message send --target +15555550123 --message "Hi"`
- ` message poll --channel discord --target channel:123 --poll-question "Snack?" --poll-option Pizza --poll-option Sushi`

### `agent`

é€šè¿‡ Gateway ç½‘å…³è¿è¡Œä¸€ä¸ªæ™ºèƒ½ä½“å›žåˆï¼ˆæˆ–ä½¿ç”¨ `--local` åµŒå…¥å¼è¿è¡Œï¼‰ã€‚

å¿…éœ€ï¼š

- `--message <text>`

é€‰é¡¹ï¼š

- `--to <dest>`ï¼ˆç”¨äºŽä¼šè¯é”®å’Œå¯é€‰å‘é€ï¼‰
- `--session-id <id>`
- `--thinking <off|minimal|low|medium|high|xhigh>`ï¼ˆä»…é™ GPT-5.2 + Codex æ¨¡åž‹ï¼‰
- `--verbose <on|full|off>`
- `--channel <whatsapp|telegram|discord|slack|mattermost|signal|imessage|msteams>`
- `--local`
- `--deliver`
- `--json`
- `--timeout <seconds>`

### `agents`

ç®¡ç†éš”ç¦»çš„æ™ºèƒ½ä½“ï¼ˆå·¥ä½œåŒº + è®¤è¯ + è·¯ç”±ï¼‰ã€‚

#### `agents list`

åˆ—å‡ºå·²é…ç½®çš„æ™ºèƒ½ä½“ã€‚

é€‰é¡¹ï¼š

- `--json`
- `--bindings`

#### `agents add [name]`

æ·»åŠ æ–°çš„éš”ç¦»æ™ºèƒ½ä½“ã€‚é™¤éžä¼ å…¥æ ‡å¿—ï¼ˆæˆ– `--non-interactive`ï¼‰ï¼Œå¦åˆ™è¿è¡Œå¼•å¯¼å‘å¯¼ï¼›éžäº¤äº’æ¨¡å¼ä¸‹ `--workspace` æ˜¯å¿…éœ€çš„ã€‚

é€‰é¡¹ï¼š

- `--workspace <dir>`
- `--model <id>`
- `--agent-dir <dir>`
- `--bind <channel[:accountId]>`ï¼ˆå¯é‡å¤ï¼‰
- `--non-interactive`
- `--json`

ç»‘å®šè§„èŒƒä½¿ç”¨ `channel[:accountId]`ã€‚å¯¹äºŽ WhatsAppï¼Œçœç•¥ `accountId` æ—¶ä½¿ç”¨é»˜è®¤è´¦æˆ· idã€‚

#### `agents delete <id>`

åˆ é™¤æ™ºèƒ½ä½“å¹¶æ¸…ç†å…¶å·¥ä½œåŒº + çŠ¶æ€ã€‚

é€‰é¡¹ï¼š

- `--force`
- `--json`

### `acp`

è¿è¡Œè¿žæŽ¥ IDE åˆ° Gateway ç½‘å…³çš„ ACP æ¡¥æŽ¥ã€‚

å®Œæ•´é€‰é¡¹å’Œç¤ºä¾‹å‚è§ [`acp`](/cli/acp)ã€‚

### `status`

æ˜¾ç¤ºå…³è”ä¼šè¯å¥åº·çŠ¶å†µå’Œæœ€è¿‘çš„æ”¶ä»¶äººã€‚

é€‰é¡¹ï¼š

- `--json`
- `--all`ï¼ˆå®Œæ•´è¯Šæ–­ï¼›åªè¯»ï¼Œå¯ç²˜è´´ï¼‰
- `--deep`ï¼ˆæŽ¢æµ‹æ¸ é“ï¼‰
- `--usage`ï¼ˆæ˜¾ç¤ºæ¨¡åž‹æä¾›å•†ç”¨é‡/é…é¢ï¼‰
- `--timeout <ms>`
- `--verbose`
- `--debug`ï¼ˆ`--verbose` çš„åˆ«åï¼‰

è¯´æ˜Žï¼š

- æ¦‚è§ˆåŒ…å« Gateway ç½‘å…³ + èŠ‚ç‚¹ä¸»æœºæœåŠ¡çŠ¶æ€ï¼ˆå¦‚å¯ç”¨ï¼‰ã€‚

### ç”¨é‡è·Ÿè¸ª

å½“ OAuth/API å‡­è¯å¯ç”¨æ—¶ï¼Œ å¯ä»¥æ˜¾ç¤ºæä¾›å•†ç”¨é‡/é…é¢ã€‚

æ˜¾ç¤ºä½ç½®ï¼š

- `/status`ï¼ˆå¯ç”¨æ—¶æ·»åŠ ç®€çŸ­çš„æä¾›å•†ç”¨é‡è¡Œï¼‰
- ` status --usage`ï¼ˆæ‰“å°å®Œæ•´çš„æä¾›å•†æ˜Žç»†ï¼‰
- macOS èœå•æ ï¼ˆä¸Šä¸‹æ–‡ä¸‹çš„ç”¨é‡éƒ¨åˆ†ï¼‰

è¯´æ˜Žï¼š

- æ•°æ®ç›´æŽ¥æ¥è‡ªæä¾›å•†ç”¨é‡ç«¯ç‚¹ï¼ˆéžä¼°ç®—ï¼‰ã€‚
- æä¾›å•†ï¼šAnthropicã€GitHub Copilotã€OpenAI Codex OAuthï¼Œä»¥åŠå¯ç”¨è¿™äº›æä¾›å•†æ’ä»¶æ—¶çš„ Gemini CLI/Antigravityã€‚
- å¦‚æžœæ²¡æœ‰åŒ¹é…çš„å‡­è¯ï¼Œç”¨é‡ä¼šè¢«éšè—ã€‚
- è¯¦æƒ…ï¼šå‚è§[ç”¨é‡è·Ÿè¸ª](/concepts/usage-tracking)ã€‚

### `health`

ä»Žè¿è¡Œä¸­çš„ Gateway ç½‘å…³èŽ·å–å¥åº·çŠ¶æ€ã€‚

é€‰é¡¹ï¼š

- `--json`
- `--timeout <ms>`
- `--verbose`

### `sessions`

åˆ—å‡ºå­˜å‚¨çš„å¯¹è¯ä¼šè¯ã€‚

é€‰é¡¹ï¼š

- `--json`
- `--verbose`
- `--store <path>`
- `--active <minutes>`

## é‡ç½®/å¸è½½

### `reset`

é‡ç½®æœ¬åœ°é…ç½®/çŠ¶æ€ï¼ˆä¿ç•™ CLI å®‰è£…ï¼‰ã€‚

é€‰é¡¹ï¼š

- `--scope <config|config+creds+sessions|full>`
- `--yes`
- `--non-interactive`
- `--dry-run`

è¯´æ˜Žï¼š

- `--non-interactive` éœ€è¦ `--scope` å’Œ `--yes`ã€‚

### `uninstall`

å¸è½½ Gateway ç½‘å…³æœåŠ¡ + æœ¬åœ°æ•°æ®ï¼ˆCLI ä¿ç•™ï¼‰ã€‚

é€‰é¡¹ï¼š

- `--service`
- `--state`
- `--workspace`
- `--app`
- `--all`
- `--yes`
- `--non-interactive`
- `--dry-run`

è¯´æ˜Žï¼š

- `--non-interactive` éœ€è¦ `--yes` å’Œæ˜Žç¡®çš„èŒƒå›´ï¼ˆæˆ– `--all`ï¼‰ã€‚

## Gateway ç½‘å…³

### `gateway`

è¿è¡Œ WebSocket Gateway ç½‘å…³ã€‚

é€‰é¡¹ï¼š

- `--port <port>`
- `--bind <loopback|tailnet|lan|auto|custom>`
- `--token <token>`
- `--auth <token|password>`
- `--password <password>`
- `--tailscale <off|serve|funnel>`
- `--tailscale-reset-on-exit`
- `--allow-unconfigured`
- `--dev`
- `--reset`ï¼ˆé‡ç½® dev é…ç½® + å‡­è¯ + ä¼šè¯ + å·¥ä½œåŒºï¼‰
- `--force`ï¼ˆç»ˆæ­¢ç«¯å£ä¸Šçš„çŽ°æœ‰ç›‘å¬å™¨ï¼‰
- `--verbose`
- `--claude-cli-logs`
- `--ws-log <auto|full|compact>`
- `--compact`ï¼ˆ`--ws-log compact` çš„åˆ«åï¼‰
- `--raw-stream`
- `--raw-stream-path <path>`

### `gateway service`

ç®¡ç† Gateway ç½‘å…³æœåŠ¡ï¼ˆlaunchd/systemd/schtasksï¼‰ã€‚

å­å‘½ä»¤ï¼š

- `gateway status`ï¼ˆé»˜è®¤æŽ¢æµ‹ Gateway ç½‘å…³ RPCï¼‰
- `gateway install`ï¼ˆæœåŠ¡å®‰è£…ï¼‰
- `gateway uninstall`
- `gateway start`
- `gateway stop`
- `gateway restart`

è¯´æ˜Žï¼š

- `gateway status` é»˜è®¤ä½¿ç”¨æœåŠ¡è§£æžçš„ç«¯å£/é…ç½®æŽ¢æµ‹ Gateway ç½‘å…³ RPCï¼ˆä½¿ç”¨ `--url/--token/--password` è¦†ç›–ï¼‰ã€‚
- `gateway status` æ”¯æŒ `--no-probe`ã€`--deep` å’Œ `--json` ç”¨äºŽè„šæœ¬åŒ–ã€‚
- `gateway status` åœ¨æ£€æµ‹åˆ°æ—§ç‰ˆæˆ–é¢å¤–çš„ Gateway ç½‘å…³æœåŠ¡æ—¶ä¹Ÿä¼šæ˜¾ç¤ºï¼ˆ`--deep` æ·»åŠ ç³»ç»Ÿçº§æ‰«æï¼‰ã€‚é…ç½®æ–‡ä»¶å‘½åçš„  æœåŠ¡è¢«è§†ä¸ºä¸€ç­‰å…¬æ°‘ï¼Œä¸ä¼šè¢«æ ‡è®°ä¸º"é¢å¤–"ã€‚
- `gateway status` æ‰“å° CLI ä½¿ç”¨çš„é…ç½®è·¯å¾„ä¸ŽæœåŠ¡å¯èƒ½ä½¿ç”¨çš„é…ç½®ï¼ˆæœåŠ¡çŽ¯å¢ƒï¼‰ï¼Œä»¥åŠè§£æžçš„æŽ¢æµ‹ç›®æ ‡ URLã€‚
- `gateway install|uninstall|start|stop|restart` æ”¯æŒ `--json` ç”¨äºŽè„šæœ¬åŒ–ï¼ˆé»˜è®¤è¾“å‡ºä¿æŒäººç±»å‹å¥½ï¼‰ã€‚
- `gateway install` é»˜è®¤ä½¿ç”¨ Node è¿è¡Œæ—¶ï¼›**ä¸å»ºè®®**ä½¿ç”¨ bunï¼ˆWhatsApp/Telegram bugï¼‰ã€‚
- `gateway install` é€‰é¡¹ï¼š`--port`ã€`--runtime`ã€`--token`ã€`--force`ã€`--json`ã€‚

### `logs`

é€šè¿‡ RPC è·Ÿè¸ª Gateway ç½‘å…³æ–‡ä»¶æ—¥å¿—ã€‚

è¯´æ˜Žï¼š

- TTY ä¼šè¯æ¸²æŸ“å½©è‰²ã€ç»“æž„åŒ–è§†å›¾ï¼›éž TTY å›žé€€åˆ°çº¯æ–‡æœ¬ã€‚
- `--json` è¾“å‡ºè¡Œåˆ†éš”çš„ JSONï¼ˆæ¯è¡Œä¸€ä¸ªæ—¥å¿—äº‹ä»¶ï¼‰ã€‚

ç¤ºä¾‹ï¼š

```bash
 logs --follow
 logs --limit 200
 logs --plain
 logs --json
 logs --no-color
```

### `gateway <subcommand>`

Gateway ç½‘å…³ CLI è¾…åŠ©å·¥å…·ï¼ˆRPC å­å‘½ä»¤ä½¿ç”¨ `--url`ã€`--token`ã€`--password`ã€`--timeout`ã€`--expect-final`ï¼‰ã€‚

å­å‘½ä»¤ï¼š

- `gateway call <method> [--params <json>]`
- `gateway health`
- `gateway status`
- `gateway probe`
- `gateway discover`
- `gateway install|uninstall|start|stop|restart`
- `gateway run`

å¸¸è§ RPCï¼š

- `config.apply`ï¼ˆéªŒè¯ + å†™å…¥é…ç½® + é‡å¯ + å”¤é†’ï¼‰
- `config.patch`ï¼ˆåˆå¹¶éƒ¨åˆ†æ›´æ–° + é‡å¯ + å”¤é†’ï¼‰
- `update.run`ï¼ˆè¿è¡Œæ›´æ–° + é‡å¯ + å”¤é†’ï¼‰

æç¤ºï¼šç›´æŽ¥è°ƒç”¨ `config.set`/`config.apply`/`config.patch` æ—¶ï¼Œå¦‚æžœé…ç½®å·²å­˜åœ¨ï¼Œè¯·ä¼ å…¥æ¥è‡ª `config.get` çš„ `baseHash`ã€‚

## æ¨¡åž‹

å›žé€€è¡Œä¸ºå’Œæ‰«æç­–ç•¥å‚è§ [/concepts/models](/concepts/models)ã€‚

é¦–é€‰ Anthropic è®¤è¯ï¼ˆsetup-tokenï¼‰ï¼š

```bash
claude setup-token
 models auth setup-token --provider anthropic
 models status
```

### `models`ï¼ˆæ ¹å‘½ä»¤ï¼‰

` models` æ˜¯ `models status` çš„åˆ«åã€‚

æ ¹é€‰é¡¹ï¼š

- `--status-json`ï¼ˆ`models status --json` çš„åˆ«åï¼‰
- `--status-plain`ï¼ˆ`models status --plain` çš„åˆ«åï¼‰

### `models list`

é€‰é¡¹ï¼š

- `--all`
- `--local`
- `--provider <name>`
- `--json`
- `--plain`

### `models status`

é€‰é¡¹ï¼š

- `--json`
- `--plain`
- `--check`ï¼ˆé€€å‡ºç  1=è¿‡æœŸ/ç¼ºå¤±ï¼Œ2=å³å°†è¿‡æœŸï¼‰
- `--probe`ï¼ˆå¯¹å·²é…ç½®è®¤è¯é…ç½®æ–‡ä»¶è¿›è¡Œå®žæ—¶æŽ¢æµ‹ï¼‰
- `--probe-provider <name>`
- `--probe-profile <id>`ï¼ˆé‡å¤æˆ–é€—å·åˆ†éš”ï¼‰
- `--probe-timeout <ms>`
- `--probe-concurrency <n>`
- `--probe-max-tokens <n>`

å§‹ç»ˆåŒ…å«è®¤è¯æ¦‚è§ˆå’Œè®¤è¯å­˜å‚¨ä¸­é…ç½®æ–‡ä»¶çš„ OAuth è¿‡æœŸçŠ¶æ€ã€‚`--probe` è¿è¡Œå®žæ—¶è¯·æ±‚ï¼ˆå¯èƒ½æ¶ˆè€—ä»¤ç‰Œå¹¶è§¦å‘é€ŸçŽ‡é™åˆ¶ï¼‰ã€‚

### `models set <model>`

è®¾ç½® `agents.defaults.model.primary`ã€‚

### `models set-image <model>`

è®¾ç½® `agents.defaults.imageModel.primary`ã€‚

### `models aliases list|add|remove`

é€‰é¡¹ï¼š

- `list`ï¼š`--json`ã€`--plain`
- `add <alias> <model>`
- `remove <alias>`

### `models fallbacks list|add|remove|clear`

é€‰é¡¹ï¼š

- `list`ï¼š`--json`ã€`--plain`
- `add <model>`
- `remove <model>`
- `clear`

### `models image-fallbacks list|add|remove|clear`

é€‰é¡¹ï¼š

- `list`ï¼š`--json`ã€`--plain`
- `add <model>`
- `remove <model>`
- `clear`

### `models scan`

é€‰é¡¹ï¼š

- `--min-params <b>`
- `--max-age-days <days>`
- `--provider <name>`
- `--max-candidates <n>`
- `--timeout <ms>`
- `--concurrency <n>`
- `--no-probe`
- `--yes`
- `--no-input`
- `--set-default`
- `--set-image`
- `--json`

### `models auth add|setup-token|paste-token`

é€‰é¡¹ï¼š

- `add`ï¼šäº¤äº’å¼è®¤è¯è¾…åŠ©å·¥å…·
- `setup-token`ï¼š`--provider <name>`ï¼ˆé»˜è®¤ `anthropic`ï¼‰ã€`--yes`
- `paste-token`ï¼š`--provider <name>`ã€`--profile-id <id>`ã€`--expires-in <duration>`

### `models auth order get|set|clear`

é€‰é¡¹ï¼š

- `get`ï¼š`--provider <name>`ã€`--agent <id>`ã€`--json`
- `set`ï¼š`--provider <name>`ã€`--agent <id>`ã€`<profileIds...>`
- `clear`ï¼š`--provider <name>`ã€`--agent <id>`

## ç³»ç»Ÿ

### `system event`

å°†ç³»ç»Ÿäº‹ä»¶åŠ å…¥é˜Ÿåˆ—å¹¶å¯é€‰è§¦å‘å¿ƒè·³ï¼ˆGateway ç½‘å…³ RPCï¼‰ã€‚

å¿…éœ€ï¼š

- `--text <text>`

é€‰é¡¹ï¼š

- `--mode <now|next-heartbeat>`
- `--json`
- `--url`ã€`--token`ã€`--timeout`ã€`--expect-final`

### `system heartbeat last|enable|disable`

å¿ƒè·³æŽ§åˆ¶ï¼ˆGateway ç½‘å…³ RPCï¼‰ã€‚

é€‰é¡¹ï¼š

- `--json`
- `--url`ã€`--token`ã€`--timeout`ã€`--expect-final`

### `system presence`

åˆ—å‡ºç³»ç»Ÿå­˜åœ¨æ¡ç›®ï¼ˆGateway ç½‘å…³ RPCï¼‰ã€‚

é€‰é¡¹ï¼š

- `--json`
- `--url`ã€`--token`ã€`--timeout`ã€`--expect-final`

## å®šæ—¶ä»»åŠ¡

ç®¡ç†è®¡åˆ’ä»»åŠ¡ï¼ˆGateway ç½‘å…³ RPCï¼‰ã€‚å‚è§ [/automation/cron-jobs](/automation/cron-jobs)ã€‚

å­å‘½ä»¤ï¼š

- `cron status [--json]`
- `cron list [--all] [--json]`ï¼ˆé»˜è®¤è¡¨æ ¼è¾“å‡ºï¼›ä½¿ç”¨ `--json` èŽ·å–åŽŸå§‹æ•°æ®ï¼‰
- `cron add`ï¼ˆåˆ«åï¼š`create`ï¼›éœ€è¦ `--name` å’Œ `--at` | `--every` | `--cron` ä¸‰é€‰ä¸€ï¼Œä»¥åŠ `--system-event` | `--message` è´Ÿè½½äºŒé€‰ä¸€ï¼‰
- `cron edit <id>`ï¼ˆè¡¥ä¸å­—æ®µï¼‰
- `cron rm <id>`ï¼ˆåˆ«åï¼š`remove`ã€`delete`ï¼‰
- `cron enable <id>`
- `cron disable <id>`
- `cron runs --id <id> [--limit <n>]`
- `cron run <id> [--force]`

æ‰€æœ‰ `cron` å‘½ä»¤æŽ¥å— `--url`ã€`--token`ã€`--timeout`ã€`--expect-final`ã€‚

## èŠ‚ç‚¹ä¸»æœº

`node` è¿è¡Œ**æ— å¤´èŠ‚ç‚¹ä¸»æœº**æˆ–å°†å…¶ä½œä¸ºåŽå°æœåŠ¡ç®¡ç†ã€‚å‚è§ [` node`](/cli/node)ã€‚

å­å‘½ä»¤ï¼š

- `node run --host <gateway-host> --port 18789`
- `node status`
- `node install [--host <gateway-host>] [--port <port>] [--tls] [--tls-fingerprint <sha256>] [--node-id <id>] [--display-name <name>] [--runtime <node|bun>] [--force]`
- `node uninstall`
- `node stop`
- `node restart`

## èŠ‚ç‚¹

`nodes` ä¸Ž Gateway ç½‘å…³é€šä¿¡å¹¶é’ˆå¯¹å·²é…å¯¹çš„èŠ‚ç‚¹ã€‚å‚è§ [/nodes](/nodes)ã€‚

é€šç”¨é€‰é¡¹ï¼š

- `--url`ã€`--token`ã€`--timeout`ã€`--json`

å­å‘½ä»¤ï¼š

- `nodes status [--connected] [--last-connected <duration>]`
- `nodes describe --node <id|name|ip>`
- `nodes list [--connected] [--last-connected <duration>]`
- `nodes pending`
- `nodes approve <requestId>`
- `nodes reject <requestId>`
- `nodes rename --node <id|name|ip> --name <displayName>`
- `nodes invoke --node <id|name|ip> --command <command> [--params <json>] [--invoke-timeout <ms>] [--idempotency-key <key>]`
- `nodes run --node <id|name|ip> [--cwd <path>] [--env KEY=VAL] [--command-timeout <ms>] [--needs-screen-recording] [--invoke-timeout <ms>] <command...>`ï¼ˆmac èŠ‚ç‚¹æˆ–æ— å¤´èŠ‚ç‚¹ä¸»æœºï¼‰
- `nodes notify --node <id|name|ip> [--title <text>] [--body <text>] [--sound <name>] [--priority <passive|active|timeSensitive>] [--delivery <system|overlay|auto>] [--invoke-timeout <ms>]`ï¼ˆä»…é™ macï¼‰

ç›¸æœºï¼š

- `nodes camera list --node <id|name|ip>`
- `nodes camera snap --node <id|name|ip> [--facing front|back|both] [--device-id <id>] [--max-width <px>] [--quality <0-1>] [--delay-ms <ms>] [--invoke-timeout <ms>]`
- `nodes camera clip --node <id|name|ip> [--facing front|back] [--device-id <id>] [--duration <ms|10s|1m>] [--no-audio] [--invoke-timeout <ms>]`

ç”»å¸ƒ + å±å¹•ï¼š

- `nodes canvas snapshot --node <id|name|ip> [--format png|jpg|jpeg] [--max-width <px>] [--quality <0-1>] [--invoke-timeout <ms>]`
- `nodes canvas present --node <id|name|ip> [--target <urlOrPath>] [--x <px>] [--y <px>] [--width <px>] [--height <px>] [--invoke-timeout <ms>]`
- `nodes canvas hide --node <id|name|ip> [--invoke-timeout <ms>]`
- `nodes canvas navigate <url> --node <id|name|ip> [--invoke-timeout <ms>]`
- `nodes canvas eval [<js>] --node <id|name|ip> [--js <code>] [--invoke-timeout <ms>]`
- `nodes canvas a2ui push --node <id|name|ip> (--jsonl <path> | --text <text>) [--invoke-timeout <ms>]`
- `nodes canvas a2ui reset --node <id|name|ip> [--invoke-timeout <ms>]`
- `nodes screen record --node <id|name|ip> [--screen <index>] [--duration <ms|10s>] [--fps <n>] [--no-audio] [--out <path>] [--invoke-timeout <ms>]`

ä½ç½®ï¼š

- `nodes location get --node <id|name|ip> [--max-age <ms>] [--accuracy <coarse|balanced|precise>] [--location-timeout <ms>] [--invoke-timeout <ms>]`

## æµè§ˆå™¨

æµè§ˆå™¨æŽ§åˆ¶ CLIï¼ˆä¸“ç”¨ Chrome/Brave/Edge/Chromiumï¼‰ã€‚å‚è§ [` browser`](/cli/browser) å’Œ[æµè§ˆå™¨å·¥å…·](/tools/browser)ã€‚

é€šç”¨é€‰é¡¹ï¼š

- `--url`ã€`--token`ã€`--timeout`ã€`--json`
- `--browser-profile <name>`

ç®¡ç†ï¼š

- `browser status`
- `browser start`
- `browser stop`
- `browser reset-profile`
- `browser tabs`
- `browser open <url>`
- `browser focus <targetId>`
- `browser close [targetId]`
- `browser profiles`
- `browser create-profile --name <name> [--color <hex>] [--cdp-url <url>]`
- `browser delete-profile --name <name>`

æ£€æŸ¥ï¼š

- `browser screenshot [targetId] [--full-page] [--ref <ref>] [--element <selector>] [--type png|jpeg]`
- `browser snapshot [--format aria|ai] [--target-id <id>] [--limit <n>] [--interactive] [--compact] [--depth <n>] [--selector <sel>] [--out <path>]`

æ“ä½œï¼š

- `browser navigate <url> [--target-id <id>]`
- `browser resize <width> <height> [--target-id <id>]`
- `browser click <ref> [--double] [--button <left|right|middle>] [--modifiers <csv>] [--target-id <id>]`
- `browser type <ref> <text> [--submit] [--slowly] [--target-id <id>]`
- `browser press <key> [--target-id <id>]`
- `browser hover <ref> [--target-id <id>]`
- `browser drag <startRef> <endRef> [--target-id <id>]`
- `browser select <ref> <values...> [--target-id <id>]`
- `browser upload <paths...> [--ref <ref>] [--input-ref <ref>] [--element <selector>] [--target-id <id>] [--timeout-ms <ms>]`
- `browser fill [--fields <json>] [--fields-file <path>] [--target-id <id>]`
- `browser dialog --accept|--dismiss [--prompt <text>] [--target-id <id>] [--timeout-ms <ms>]`
- `browser wait [--time <ms>] [--text <value>] [--text-gone <value>] [--target-id <id>]`
- `browser evaluate --fn <code> [--ref <ref>] [--target-id <id>]`
- `browser console [--level <error|warn|info>] [--target-id <id>]`
- `browser pdf [--target-id <id>]`

## æ–‡æ¡£æœç´¢

### `docs [query...]`

æœç´¢åœ¨çº¿æ–‡æ¡£ç´¢å¼•ã€‚

## TUI

### `tui`

æ‰“å¼€è¿žæŽ¥åˆ° Gateway ç½‘å…³çš„ç»ˆç«¯ UIã€‚

é€‰é¡¹ï¼š

- `--url <url>`
- `--token <token>`
- `--password <password>`
- `--session <key>`
- `--deliver`
- `--thinking <level>`
- `--message <text>`
- `--timeout-ms <ms>`ï¼ˆé»˜è®¤ä¸º `agents.defaults.timeoutSeconds`ï¼‰
- `--history-limit <n>`


