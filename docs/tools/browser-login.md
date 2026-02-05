---
summary: "Manual logins for browser automation + X/Twitter posting"
read_when:
  - You need to log into sites for browser automation
  - You want to post updates to X/Twitter
title: "Browser Login"
---

# Browser login + X/Twitter posting

## Manual login (recommended)

When a site requires login, **sign in manually** in the **host** browser profile (the  browser).

Do **not** give the model your credentials. Automated logins often trigger antiâ€‘bot defenses and can lock the account.

Back to the main browser docs: [Browser](/tools/browser).

## Which Chrome profile is used?

 controls a **dedicated Chrome profile** (named ``, orangeâ€‘tinted UI). This is separate from your daily browser profile.

Two easy ways to access it:

1. **Ask the agent to open the browser** and then log in yourself.
2. **Open it via CLI**:

```bash
 browser start
 browser open https://x.com
```

If you have multiple profiles, pass `--browser-profile <name>` (the default is ``).

## X/Twitter: recommended flow

- **Read/search/threads:** use the **bird** CLI skill (no browser, stable).
  - Repo: https://github.com/steipete/bird
- **Post updates:** use the **host** browser (manual login).

## Sandboxing + host browser access

Sandboxed browser sessions are **more likely** to trigger bot detection. For X/Twitter (and other strict sites), prefer the **host** browser.

If the agent is sandboxed, the browser tool defaults to the sandbox. To allow host control:

```json5
{
  agents: {
    defaults: {
      sandbox: {
        mode: "non-main",
        browser: {
          allowHostControl: true,
        },
      },
    },
  },
}
```

Then target the host browser:

```bash
 browser open https://x.com --browser-profile  --target host
```

Or disable sandboxing for the agent that posts updates.


