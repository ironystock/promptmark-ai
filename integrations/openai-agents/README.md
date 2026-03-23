# OpenAI Agents SDK Integration

Use Promptmark as the prompt management backend for OpenAI Agents with native MCP transport.

**Language**: Python
**Status**: Planned — awaiting [service account feature](https://promptmark.ai)

## Overview

The OpenAI Agents SDK has built-in MCP client support, making Promptmark a natural tool provider. This integration registers Promptmark's MCP server as an agent tool source, giving your agents direct access to 38 prompt management tools.

## Prerequisites

- Python 3.11+
- `openai-agents` SDK
- Promptmark account with service account API key
- MCP server access

## Quickstart

Define an Agent with Promptmark as a tool provider — in ~40 lines.

```python
# quickstart.py (planned)
from openai_agents import Agent, MCPToolProvider

# TODO: Connect Promptmark MCP as a tool provider
# 1. Create MCPToolProvider pointing to Promptmark
# 2. Define an Agent with the provider
# 3. Ask the agent to list and render a prompt
# 4. Print the result
```

**MCP tools used**: `list_prompts`, `get_prompt`, `render_prompt`

## Full Demo: Customer Support Agent

A support agent that uses Promptmark prompts as its instruction set — routing, responding, and logging all interactions.

### What it does

1. Loads the `customer-support-router` prompt from Promptmark
2. Classifies incoming tickets using `render_prompt` with the ticket content
3. Loads a response template based on the classification
4. Generates a response using the rendered template
5. Captures every interaction via `capture_response`
6. Creates a conversation in Promptmark for session tracking

### Why this matters

Support teams iterate on response templates constantly. With Promptmark, the templates are versioned, searchable, and independent of the agent code. Update a template in Promptmark and the agent uses it immediately — no redeployment.

**MCP tools used**: `list_prompts`, `get_prompt`, `render_prompt`, `validate_prompt_inputs`, `capture_response`, `create_conversation`, `send_message`

## Directory Structure (Planned)

```
integrations/openai-agents/
├── README.md              ← you are here
├── quickstart/
│   ├── quickstart.py
│   └── requirements.txt
└── demo/
    ├── support_agent.py
    └── requirements.txt
```

## Service Account Setup

> **Blocked**: This integration requires Promptmark service accounts, which are not yet available.

```bash
export PROMPTMARK_API_KEY="pm_sk_..."
export OPENAI_API_KEY="sk-..."
```

## Related

- [MCP Reference](../../docs/api/mcp-reference.md) — all 38 Promptmark MCP tools
- [Prompt-Driven Agent Example](../../examples/prompts/11-prompt-driven-agent.md) — the pattern this integration implements
- [Conversations Example](../../examples/prompts/05-conversations-with-prompts.md) — how conversation tracking works
