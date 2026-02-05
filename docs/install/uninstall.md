---
summary: "Uninstall  completely (CLI, service, state, workspace)"
read_when:
  - You want to remove  from a machine
  - The gateway service is still running after uninstall
title: "Uninstall"
---

# Uninstall

Two paths:

- **Easy path** if `` is still installed.
- **Manual service removal** if the CLI is gone but the service is still running.

## Easy path (CLI still installed)

Recommended: use the built-in uninstaller:

```bash
 uninstall
```

Non-interactive (automation / npx):

```bash
 uninstall --all --yes --non-interactive
npx -y  uninstall --all --yes --non-interactive
```

Manual steps (same result):

1. Stop the gateway service:

```bash
 gateway stop
```

2. Uninstall the gateway service (launchd/systemd/schtasks):

```bash
 gateway uninstall
```

3. Delete state + config:

```bash
rm -rf "${_STATE_DIR:-$HOME/.}"
```

If you set `_CONFIG_PATH` to a custom location outside the state dir, delete that file too.

4. Delete your workspace (optional, removes agent files):

```bash
rm -rf ~/./workspace
```

5. Remove the CLI install (pick the one you used):

```bash
npm rm -g 
pnpm remove -g 
bun remove -g 
```

6. If you installed the macOS app:

```bash
rm -rf /Applications/.app
```

Notes:

- If you used profiles (`--profile` / `_PROFILE`), repeat step 3 for each state dir (defaults are `~/.-<profile>`).
- In remote mode, the state dir lives on the **gateway host**, so run steps 1-4 there too.

## Manual service removal (CLI not installed)

Use this if the gateway service keeps running but `` is missing.

### macOS (launchd)

Default label is `bot.molt.gateway` (or `bot.molt.<profile>`; legacy `com..*` may still exist):

```bash
launchctl bootout gui/$UID/bot.molt.gateway
rm -f ~/Library/LaunchAgents/bot.molt.gateway.plist
```

If you used a profile, replace the label and plist name with `bot.molt.<profile>`. Remove any legacy `com..*` plists if present.

### Linux (systemd user unit)

Default unit name is `-gateway.service` (or `-gateway-<profile>.service`):

```bash
systemctl --user disable --now -gateway.service
rm -f ~/.config/systemd/user/-gateway.service
systemctl --user daemon-reload
```

### Windows (Scheduled Task)

Default task name is ` Gateway` (or ` Gateway (<profile>)`).
The task script lives under your state dir.

```powershell
schtasks /Delete /F /TN " Gateway"
Remove-Item -Force "$env:USERPROFILE\.\gateway.cmd"
```

If you used a profile, delete the matching task name and `~\.-<profile>\gateway.cmd`.

## Normal install vs source checkout

### Normal install (install.sh / npm / pnpm / bun)

If you used `https://.ai/install.sh` or `install.ps1`, the CLI was installed with `npm install -g @latest`.
Remove it with `npm rm -g ` (or `pnpm remove -g` / `bun remove -g` if you installed that way).

### Source checkout (git clone)

If you run from a repo checkout (`git clone` + ` ...` / `bun run  ...`):

1. Uninstall the gateway service **before** deleting the repo (use the easy path above or manual service removal).
2. Delete the repo directory.
3. Remove state + workspace as shown above.


