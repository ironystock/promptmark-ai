# Vercel AI SDK Integration

Use Promptmark as the prompt management backend for Next.js applications via the Vercel AI SDK.

**Language**: TypeScript
**Status**: Planned — awaiting [service account feature](https://promptmark.ai)

## Overview

The Vercel AI SDK provides MCP support for server-side AI applications. This integration connects a Next.js app to Promptmark, enabling schema-driven prompt forms, streamed responses, and response capture — all managed through the Promptmark library.

## Prerequisites

- Node.js 20+
- Next.js 14+
- `ai` package (`npm install ai`)
- Promptmark account with service account API key
- MCP server access

## Quickstart

Connect to Promptmark MCP from a Next.js API route — fetch, render, and stream — in ~50 lines.

```typescript
// app/api/prompt/route.ts (planned)
import { streamText } from 'ai';

// TODO: Connect to Promptmark MCP
// 1. Fetch prompt via get_prompt
// 2. Get variable schema via get_prompt_schema
// 3. Validate inputs via validate_prompt_inputs
// 4. Render prompt via render_prompt
// 5. Stream the result to the client
```

**MCP tools used**: `get_prompt`, `get_prompt_schema`, `render_prompt`

## Full Demo: Prompt Explorer App

A Next.js app that lets users browse, configure, and run prompts from their Promptmark library.

### What it does

1. **Prompt browser** — lists and searches prompts via `list_prompts` and `search_prompts`
2. **Variable form** — auto-generates a form from `get_prompt_schema` (select dropdowns, text inputs, number fields)
3. **Validation** — validates inputs via `validate_prompt_inputs` before rendering
4. **Streaming** — sends the rendered prompt to a model and streams the response
5. **Response capture** — stores the response in Promptmark via `capture_response`

### Why this matters

Web developers building AI-powered apps need a way to manage prompts outside their codebase. This demo shows the full loop: browse prompts, fill in variables, get streamed responses, and capture results — all backed by Promptmark.

**MCP tools used**: `list_prompts`, `search_prompts`, `get_prompt`, `get_prompt_schema`, `render_prompt`, `validate_prompt_inputs`, `capture_response`

## Directory Structure (Planned)

```
integrations/vercel-ai-sdk/
├── README.md              ← you are here
├── quickstart/
│   ├── route.ts
│   └── package.json
└── demo/
    ├── app/
    │   ├── page.tsx
    │   └── api/prompt/route.ts
    ├── package.json
    └── tsconfig.json
```

## Service Account Setup

> **Blocked**: This integration requires Promptmark service accounts, which are not yet available.

```bash
PROMPTMARK_API_KEY=pm_sk_...
OPENAI_API_KEY=sk-...
```

## Related

- [MCP Reference](../../docs/api/mcp-reference.md) — all 38 Promptmark MCP tools
- [Create and Template Example](../../examples/prompts/01-create-and-template.md) — the variable system this UI exposes
- [Vercel AI SDK Docs](https://sdk.vercel.ai/docs) — Vercel AI SDK documentation
