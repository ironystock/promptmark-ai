# Anthropic Claude SDK Integration

Use Promptmark as the prompt management backend for Claude-powered applications via the Anthropic SDK.

**Language**: Python + TypeScript
**Status**: Planned — awaiting [service account feature](https://promptmark.ai)

## Overview

This integration demonstrates how to connect the Anthropic Claude SDK to Promptmark's MCP server, enabling Claude to manage, render, and evaluate prompts stored in your Promptmark library.

## Prerequisites

- Python 3.11+ or Node.js 20+
- `anthropic` SDK (`pip install anthropic` / `npm install @anthropic-ai/sdk`)
- Promptmark account with service account API key
- MCP server access

## Quickstart

Connect to Promptmark, fetch a prompt, render it, and send it to Claude — in ~30 lines.

```python
# quickstart.py (planned)
import anthropic
from anthropic import Anthropic

client = Anthropic()

# TODO: Connect to Promptmark MCP server
# 1. list_prompts → find your prompt
# 2. get_prompt → retrieve content and variables
# 3. render_prompt → resolve template variables
# 4. Send rendered prompt to Claude
# 5. Print the response
```

**MCP tools used**: `list_prompts`, `get_prompt`, `render_prompt`

## Full Demo: Prompt Evaluation Agent

An agent that systematically evaluates prompts across different variable sets and captures results.

### What it does

1. Fetches a prompt from Promptmark by ID or search
2. Retrieves the variable schema via `get_prompt_schema`
3. Renders the prompt with multiple test variable sets
4. Sends each rendered prompt to Claude
5. Captures every response back in Promptmark via `capture_response`
6. Produces a comparison report

### Why this matters

Prompt evaluation is usually ad-hoc — you try a prompt, eyeball the result, tweak, repeat. This agent makes it systematic: test across variable combinations, capture every result, and compare programmatically.

**MCP tools used**: `list_prompts`, `get_prompt`, `get_prompt_schema`, `render_prompt`, `validate_prompt_inputs`, `capture_response`, `list_captured_responses`

## Directory Structure (Planned)

```
integrations/anthropic-sdk/
├── README.md              ← you are here
├── quickstart/
│   ├── quickstart.py      # Python quickstart
│   ├── quickstart.ts      # TypeScript quickstart
│   ├── requirements.txt
│   └── package.json
└── demo/
    ├── eval_agent.py      # Python eval agent
    ├── eval_agent.ts      # TypeScript eval agent
    ├── requirements.txt
    └── package.json
```

## Service Account Setup

> **Blocked**: This integration requires Promptmark service accounts, which are not yet available. The code structure is planned and will be implemented once service accounts ship.

```bash
export PROMPTMARK_API_KEY="pm_sk_..."
export ANTHROPIC_API_KEY="sk-ant-..."
```

## Related

- [MCP Reference](../../docs/api/mcp-reference.md) — all 38 Promptmark MCP tools
- [Eval Loop Example](../../examples/prompts/10-eval-loop.md) — the workflow this integration automates
- [Response Capture Example](../../examples/prompts/03-capture-and-compare-responses.md) — how capture_response works
