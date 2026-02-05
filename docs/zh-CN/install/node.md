---
read_when:
  - ä½ å·²å®‰è£…  ä½† `` æç¤º"command not found"
  - ä½ æ­£åœ¨æ–°æœºå™¨ä¸Šé…ç½® Node.js/npm
  - npm install -g ... å› æƒé™æˆ– PATH é—®é¢˜å¤±è´¥
summary: Node.js + npm å®‰è£…å®Œæ•´æ€§æ£€æŸ¥ï¼šç‰ˆæœ¬ã€PATH åŠå…¨å±€å®‰è£…
title: Node.js + npmï¼ˆPATH å®‰è£…å®Œæ•´æ€§æ£€æŸ¥ï¼‰
x-i18n:
  generated_at: "2026-02-01T21:16:20Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 9f6d83be362e3e148ddf07d47e57c51679c22687263d3b5131cccbef2e37c598
  source_path: install/node.md
  workflow: 15
---

# Node.js + npmï¼ˆPATH å®‰è£…å®Œæ•´æ€§æ£€æŸ¥ï¼‰

 çš„è¿è¡Œæ—¶åŸºçº¿è¦æ±‚ä¸º **Node 22+**ã€‚

å¦‚æžœä½ èƒ½è¿è¡Œ `npm install -g @latest`ï¼Œä½†ä¹‹åŽçœ‹åˆ° `: command not found`ï¼Œè¿™å‡ ä¹Žæ€»æ˜¯ **PATH** é—®é¢˜ï¼šnpm å­˜æ”¾å…¨å±€äºŒè¿›åˆ¶æ–‡ä»¶çš„ç›®å½•ä¸åœ¨ä½  shell çš„ PATH ä¸­ã€‚

## å¿«é€Ÿè¯Šæ–­

è¿è¡Œï¼š

```bash
node -v
npm -v
npm prefix -g
echo "$PATH"
```

å¦‚æžœ `$(npm prefix -g)/bin`ï¼ˆmacOS/Linuxï¼‰æˆ– `$(npm prefix -g)`ï¼ˆWindowsï¼‰**æœªå‡ºçŽ°**åœ¨ `echo "$PATH"` çš„è¾“å‡ºä¸­ï¼Œä½ çš„ shell å°±æ— æ³•æ‰¾åˆ°å…¨å±€ npm äºŒè¿›åˆ¶æ–‡ä»¶ï¼ˆåŒ…æ‹¬ ``ï¼‰ã€‚

## ä¿®å¤ï¼šå°† npm çš„å…¨å±€ bin ç›®å½•æ·»åŠ åˆ° PATH

1. æŸ¥æ‰¾ä½ çš„å…¨å±€ npm å‰ç¼€ï¼š

```bash
npm prefix -g
```

2. å°†å…¨å±€ npm bin ç›®å½•æ·»åŠ åˆ°ä½ çš„ shell å¯åŠ¨æ–‡ä»¶ä¸­ï¼š

- zshï¼š`~/.zshrc`
- bashï¼š`~/.bashrc`

ç¤ºä¾‹ï¼ˆå°†è·¯å¾„æ›¿æ¢ä¸ºä½ çš„ `npm prefix -g` è¾“å‡ºï¼‰ï¼š

```bash
# macOS / Linux
export PATH="/path/from/npm/prefix/bin:$PATH"
```

ç„¶åŽæ‰“å¼€ä¸€ä¸ª**æ–°ç»ˆç«¯**ï¼ˆæˆ–åœ¨ zsh ä¸­è¿è¡Œ `rehash` / åœ¨ bash ä¸­è¿è¡Œ `hash -r`ï¼‰ã€‚

åœ¨ Windows ä¸Šï¼Œå°† `npm prefix -g` çš„è¾“å‡ºæ·»åŠ åˆ°ä½ çš„ PATH ä¸­ã€‚

## ä¿®å¤ï¼šé¿å… `sudo npm install -g` / æƒé™é”™è¯¯ï¼ˆLinuxï¼‰

å¦‚æžœ `npm install -g ...` å›  `EACCES` å¤±è´¥ï¼Œè¯·å°† npm çš„å…¨å±€å‰ç¼€åˆ‡æ¢åˆ°ç”¨æˆ·å¯å†™çš„ç›®å½•ï¼š

```bash
mkdir -p "$HOME/.npm-global"
npm config set prefix "$HOME/.npm-global"
export PATH="$HOME/.npm-global/bin:$PATH"
```

å°† `export PATH=...` è¿™ä¸€è¡ŒæŒä¹…åŒ–åˆ°ä½ çš„ shell å¯åŠ¨æ–‡ä»¶ä¸­ã€‚

## æŽ¨èçš„ Node å®‰è£…æ–¹å¼

å¦‚æžœ Node/npm çš„å®‰è£…æ–¹å¼æ»¡è¶³ä»¥ä¸‹æ¡ä»¶ï¼Œä½ å°†é‡åˆ°æœ€å°‘çš„é—®é¢˜ï¼š

- ä¿æŒ Node æ›´æ–°ï¼ˆ22+ï¼‰
- ä½¿å…¨å±€ npm bin ç›®å½•ç¨³å®šä¸”åœ¨æ–° shell ä¸­ä½äºŽ PATH ä¸­

å¸¸è§é€‰æ‹©ï¼š

- macOSï¼šHomebrewï¼ˆ`brew install node`ï¼‰æˆ–ç‰ˆæœ¬ç®¡ç†å™¨
- Linuxï¼šä½ åå¥½çš„ç‰ˆæœ¬ç®¡ç†å™¨ï¼Œæˆ–æä¾› Node 22+ çš„å‘è¡Œç‰ˆæ”¯æŒçš„å®‰è£…æ–¹å¼
- Windowsï¼šå®˜æ–¹ Node å®‰è£…ç¨‹åºã€`winget` æˆ– Windows Node ç‰ˆæœ¬ç®¡ç†å™¨

å¦‚æžœä½ ä½¿ç”¨ç‰ˆæœ¬ç®¡ç†å™¨ï¼ˆnvm/fnm/asdf ç­‰ï¼‰ï¼Œè¯·ç¡®ä¿å®ƒåœ¨ä½ æ—¥å¸¸ä½¿ç”¨çš„ shellï¼ˆzsh æˆ– bashï¼‰ä¸­å·²åˆå§‹åŒ–ï¼Œè¿™æ ·å®ƒè®¾ç½®çš„ PATH åœ¨ä½ è¿è¡Œå®‰è£…ç¨‹åºæ—¶æ‰ä¼šç”Ÿæ•ˆã€‚


