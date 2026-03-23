# Google ADK Integration

Use Promptmark as the prompt management backend for Google Agent Development Kit agents.

**Language**: Python
**Status**: Planned — awaiting [service account feature](https://promptmark.ai)

## Overview

The Google Agent Development Kit (ADK) supports external tool sources including MCP. This integration registers Promptmark as an MCP tool provider, giving ADK agents access to versioned prompts, template variables, and response capture.

## Prerequisites

- Python 3.11+
- Google ADK (`pip install google-adk`)
- Promptmark account with service account API key
- MCP server access

## Quickstart

Register Promptmark MCP as a tool source and build a simple agent — in ~40 lines.

```python
# quickstart.py (planned)
from google_adk import Agent, MCPTools

# TODO: Register Promptmark as MCP tool source
# 1. Connect to Promptmark MCP server
# 2. Build agent with Promptmark tools available
# 3. Ask agent to fetch and render a prompt
# 4. Print the result
```

**MCP tools used**: `list_prompts`, `get_prompt`, `render_prompt`

## Full Demo: Research Agent

A research agent that uses Promptmark prompt templates to structure its research across different domains.

### What it does

1. Pulls research prompt templates from Promptmark (e.g., "literature-review", "competitive-analysis")
2. Uses template variables to parameterize for different research domains
3. Executes research via ADK's agent loop
4. Stores research iterations as prompt versions for refinement
5. Tracks research sessions via Promptmark conversations

### Why this matters

Research agents need structured, reproducible prompts. With Promptmark, the research templates are versioned and parameterized — run the same analysis across different domains by changing variables, compare results across versions, and build on what works.

**MCP tools used**: `list_prompts`, `get_prompt`, `render_prompt`, `update_prompt`, `get_prompt_versions`, `create_conversation`, `send_message`

## Directory Structure (Planned)

```
integrations/google-adk/
├── README.md              ← you are here
├── quickstart/
│   ├── quickstart.py
│   └── requirements.txt
└── demo/
    ├── research_agent.py
    └── requirements.txt
```

## Service Account Setup

> **Blocked**: This integration requires Promptmark service accounts, which are not yet available.

```bash
export PROMPTMARK_API_KEY="pm_sk_..."
export GOOGLE_API_KEY="..."
```

## Related

- [MCP Reference](../../docs/api/mcp-reference.md) — all 38 Promptmark MCP tools
- [Version and Iterate Example](../../examples/prompts/02-version-and-iterate.md) — the versioning pattern used in the demo
- [Google ADK Docs](https://google.github.io/adk-docs/) — ADK documentation
