---
description: "Toggle Promptmark capture — start or stop storing prompts and responses in your Promptmark library for this session."
allowed-tools: Bash, Read, Grep, Glob
user-invocable: true
---

# /capture — Promptmark Session Capture

Toggle session capture on or off. When enabled, the `prompty` background agent stores every prompt sent and response received in your Promptmark library.

## When to Use

- `/capture` or `/capture start` — enable capture for this session
- `/capture stop` — disable capture
- `/capture status` — check if capture is active
- `/capture start "my eval run"` — enable with a custom session name

## What Gets Captured

When capture is active, `prompty` (a lightweight haiku background agent) automatically:

1. Creates a session collection in Promptmark
2. Stores each prompt sent to AI models via `create_prompt`
3. Stores each response via `capture_response` with metadata (model, tokens)
4. Tags everything with `capture`, session name, and model name
5. Deduplicates — same prompt sent twice gets responses added, not duplicated

## Execution

**To start**: Spawn the `prompty` agent in the background. It will create a session collection and begin capturing.

**To stop**: Signal `prompty` to produce a summary and stop capturing.

**To check status**: Report whether `prompty` is currently running.

## Notes

- Capture is off by default — the SessionStart hook offers to enable it
- `prompty` runs on haiku for minimal overhead
- All captured data is in your Promptmark library — searchable, versionable, exportable
- Use `/capture start "eval-run-3"` to name sessions for easy identification later
