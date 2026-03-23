# OpenClaw Integration

Use Promptmark as the prompt backend for OpenClaw agents — managed prompts across Discord, Slack, Telegram, and 30+ channels.

**Language**: TypeScript (Node.js)
**Status**: Planned — awaiting [service account feature](https://promptmark.ai)

## Overview

[OpenClaw](https://docs.openclaw.ai) is an AI agent platform with a gateway architecture supporting 30+ communication channels. This integration creates an OpenClaw skill that connects to Promptmark's MCP server, enabling your OpenClaw agents to use managed, versioned prompts as their instruction set.

## Prerequisites

- Node.js 22.16+ (24 recommended)
- OpenClaw installed and configured
- Promptmark account with service account API key
- MCP server access

## Quickstart

Create an OpenClaw skill that exposes Promptmark prompt listing and rendering — in ~50 lines.

```typescript
// promptmark-skill.ts (planned)

// TODO: Create OpenClaw skill that bridges to Promptmark MCP
// 1. Register skill with OpenClaw gateway
// 2. Expose "list prompts" and "render prompt" as skill commands
// 3. Handle variable resolution from conversation context
// 4. Return rendered prompt output
```

**MCP tools used**: `list_prompts`, `get_prompt`, `render_prompt`

## Full Demo: Multi-Channel Prompt Agent

An OpenClaw agent with Promptmark as its prompt backend, working across any channel OpenClaw supports.

### What it does

1. On conversation start, loads a system prompt from Promptmark via `get_prompt`
2. Resolves template variables from the channel context (user info, channel type, etc.)
3. Uses `render_prompt` to produce the system instruction
4. Links the conversation in Promptmark via `create_conversation`
5. Captures all responses via `capture_response` for quality tracking
6. Works identically across Discord, Slack, Telegram, WhatsApp, etc.

### Why this matters

OpenClaw's strength is multi-channel distribution. Promptmark's strength is prompt management. Together, you get versioned, testable prompts deployed across every channel simultaneously. Update a prompt in Promptmark and it's live everywhere — no per-channel configuration.

**MCP tools used**: `list_prompts`, `get_prompt`, `render_prompt`, `get_prompt_schema`, `capture_response`, `create_conversation`, `link_conversation_prompt`

## Directory Structure (Planned)

```
integrations/openclaw/
├── README.md              ← you are here
├── quickstart/
│   ├── promptmark-skill.ts
│   └── package.json
└── demo/
    ├── promptmark-agent.ts
    ├── config.yaml
    └── package.json
```

## Service Account Setup

> **Blocked**: This integration requires Promptmark service accounts, which are not yet available.

```bash
export PROMPTMARK_API_KEY="pm_sk_..."
```

## Related

- [MCP Reference](../../docs/api/mcp-reference.md) — all 38 Promptmark MCP tools
- [System Instructions Example](../../examples/prompts/09-prompt-as-system-instruction.md) — the pattern this integration uses
- [OpenClaw Docs](https://docs.openclaw.ai) — OpenClaw platform documentation
