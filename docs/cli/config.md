---
summary: "CLI reference for ` config` (get/set/unset config values)"
read_when:
  - You want to read or edit config non-interactively
title: "config"
---

# ` config`

Config helpers: get/set/unset values by path. Run without a subcommand to open
the configure wizard (same as ` configure`).

## Examples

```bash
 config get browser.executablePath
 config set browser.executablePath "/usr/bin/google-chrome"
 config set agents.defaults.heartbeat.every "2h"
 config set agents.list[0].tools.exec.node "node-id-or-name"
 config unset tools.web.search.apiKey
```

## Paths

Paths use dot or bracket notation:

```bash
 config get agents.defaults.workspace
 config get agents.list[0].id
```

Use the agent list index to target a specific agent:

```bash
 config get agents.list
 config set agents.list[1].tools.exec.node "node-id-or-name"
```

## Values

Values are parsed as JSON5 when possible; otherwise they are treated as strings.
Use `--json` to require JSON5 parsing.

```bash
 config set agents.defaults.heartbeat.every "0m"
 config set gateway.port 19001 --json
 config set channels.whatsapp.groups '["*"]' --json
```

Restart the gateway after edits.


