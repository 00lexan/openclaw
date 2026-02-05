---
summary: "CLI reference for ` agents` (list/add/delete/set identity)"
read_when:
  - You want multiple isolated agents (workspaces + routing + auth)
title: "agents"
---

# ` agents`

Manage isolated agents (workspaces + auth + routing).

Related:

- Multi-agent routing: [Multi-Agent Routing](/concepts/multi-agent)
- Agent workspace: [Agent workspace](/concepts/agent-workspace)

## Examples

```bash
 agents list
 agents add work --workspace ~/./workspace-work
 agents set-identity --workspace ~/./workspace --from-identity
 agents set-identity --agent main --avatar avatars/.png
 agents delete work
```

## Identity files

Each agent workspace can include an `IDENTITY.md` at the workspace root:

- Example path: `~/./workspace/IDENTITY.md`
- `set-identity --from-identity` reads from the workspace root (or an explicit `--identity-file`)

Avatar paths resolve relative to the workspace root.

## Set identity

`set-identity` writes fields into `agents.list[].identity`:

- `name`
- `theme`
- `emoji`
- `avatar` (workspace-relative path, http(s) URL, or data URI)

Load from `IDENTITY.md`:

```bash
 agents set-identity --workspace ~/./workspace --from-identity
```

Override fields explicitly:

```bash
 agents set-identity --agent main --name "" --emoji "ðŸ¦ž" --avatar avatars/.png
```

Config sample:

```json5
{
  agents: {
    list: [
      {
        id: "main",
        identity: {
          name: "",
          theme: "space lobster",
          emoji: "ðŸ¦ž",
          avatar: "avatars/.png",
        },
      },
    ],
  },
}
```


