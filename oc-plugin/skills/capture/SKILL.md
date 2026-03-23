---
name: promptmark-capture
description: Toggle Promptmark session capture — store all prompts and responses in your Promptmark library
user-invocable: true
---

# Promptmark Capture

Toggle session capture on or off. When enabled, all prompts sent and responses received are automatically stored in your Promptmark library.

## Commands

- `/capture` or `/capture start` — enable capture
- `/capture start "my eval run"` — enable with a custom session name
- `/capture stop` — disable capture and show summary
- `/capture status` — check capture state

## What Gets Captured

- Every prompt sent to the model → stored via `promptmark_create_prompt`
- Every response received → stored via `promptmark_capture_response`
- All captured items grouped into a session collection (purple)
- Tagged with: `capture`, session name, channel name, model name

## When to Use

- Evaluating prompt quality across conversations
- Building a traceable record of agent interactions
- Capturing good prompts for reuse in your library
- Training data collection for prompt iteration
