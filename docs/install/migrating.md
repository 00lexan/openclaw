---
summary: "Move (migrate) a  install from one machine to another"
read_when:
  - You are moving  to a new laptop/server
  - You want to preserve sessions, auth, and channel logins (WhatsApp, etc.)
title: "Migration Guide"
---

# Migrating  to a new machine

This guide migrates a  Gateway from one machine to another **without redoing onboarding**.

The migration is simple conceptually:

- Copy the **state directory** (`$_STATE_DIR`, default: `~/./`) â€” this includes config, auth, sessions, and channel state.
- Copy your **workspace** (`~/./workspace/` by default) â€” this includes your agent files (memory, prompts, etc.).

But there are common footguns around **profiles**, **permissions**, and **partial copies**.

## Before you start (what you are migrating)

### 1) Identify your state directory

Most installs use the default:

- **State dir:** `~/./`

But it may be different if you use:

- `--profile <name>` (often becomes `~/.-<profile>/`)
- `_STATE_DIR=/some/path`

If youâ€™re not sure, run on the **old** machine:

```bash
 status
```

Look for mentions of `_STATE_DIR` / profile in the output. If you run multiple gateways, repeat for each profile.

### 2) Identify your workspace

Common defaults:

- `~/./workspace/` (recommended workspace)
- a custom folder you created

Your workspace is where files like `MEMORY.md`, `USER.md`, and `memory/*.md` live.

### 3) Understand what you will preserve

If you copy **both** the state dir and workspace, you keep:

- Gateway configuration (`.json`)
- Auth profiles / API keys / OAuth tokens
- Session history + agent state
- Channel state (e.g. WhatsApp login/session)
- Your workspace files (memory, skills notes, etc.)

If you copy **only** the workspace (e.g., via Git), you do **not** preserve:

- sessions
- credentials
- channel logins

Those live under `$_STATE_DIR`.

## Migration steps (recommended)

### Step 0 â€” Make a backup (old machine)

On the **old** machine, stop the gateway first so files arenâ€™t changing mid-copy:

```bash
 gateway stop
```

(Optional but recommended) archive the state dir and workspace:

```bash
# Adjust paths if you use a profile or custom locations
cd ~
tar -czf -state.tgz .

tar -czf -workspace.tgz ./workspace
```

If you have multiple profiles/state dirs (e.g. `~/.-main`, `~/.-work`), archive each.

### Step 1 â€” Install  on the new machine

On the **new** machine, install the CLI (and Node if needed):

- See: [Install](/install)

At this stage, itâ€™s OK if onboarding creates a fresh `~/./` â€” you will overwrite it in the next step.

### Step 2 â€” Copy the state dir + workspace to the new machine

Copy **both**:

- `$_STATE_DIR` (default `~/./`)
- your workspace (default `~/./workspace/`)

Common approaches:

- `scp` the tarballs and extract
- `rsync -a` over SSH
- external drive

After copying, ensure:

- Hidden directories were included (e.g. `./`)
- File ownership is correct for the user running the gateway

### Step 3 â€” Run Doctor (migrations + service repair)

On the **new** machine:

```bash
 doctor
```

Doctor is the â€œsafe boringâ€ command. It repairs services, applies config migrations, and warns about mismatches.

Then:

```bash
 gateway restart
 status
```

## Common footguns (and how to avoid them)

### Footgun: profile / state-dir mismatch

If you ran the old gateway with a profile (or `_STATE_DIR`), and the new gateway uses a different one, youâ€™ll see symptoms like:

- config changes not taking effect
- channels missing / logged out
- empty session history

Fix: run the gateway/service using the **same** profile/state dir you migrated, then rerun:

```bash
 doctor
```

### Footgun: copying only `.json`

`.json` is not enough. Many providers store state under:

- `$_STATE_DIR/credentials/`
- `$_STATE_DIR/agents/<agentId>/...`

Always migrate the entire `$_STATE_DIR` folder.

### Footgun: permissions / ownership

If you copied as root or changed users, the gateway may fail to read credentials/sessions.

Fix: ensure the state dir + workspace are owned by the user running the gateway.

### Footgun: migrating between remote/local modes

- If your UI (WebUI/TUI) points at a **remote** gateway, the remote host owns the session store + workspace.
- Migrating your laptop wonâ€™t move the remote gatewayâ€™s state.

If youâ€™re in remote mode, migrate the **gateway host**.

### Footgun: secrets in backups

`$_STATE_DIR` contains secrets (API keys, OAuth tokens, WhatsApp creds). Treat backups like production secrets:

- store encrypted
- avoid sharing over insecure channels
- rotate keys if you suspect exposure

## Verification checklist

On the new machine, confirm:

- ` status` shows the gateway running
- Your channels are still connected (e.g. WhatsApp doesnâ€™t require re-pair)
- The dashboard opens and shows existing sessions
- Your workspace files (memory, configs) are present

## Related

- [Doctor](/gateway/doctor)
- [Gateway troubleshooting](/gateway/troubleshooting)
- [Where does  store its data?](/help/faq#where-does--store-its-data)


