# CrewAI Integration

Use Promptmark as the shared prompt library for CrewAI multi-agent crews.

**Language**: Python
**Status**: Planned — awaiting [service account feature](https://promptmark.ai)

## Overview

CrewAI orchestrates multiple AI agents working together. This integration gives every agent in your crew access to Promptmark's prompt library — shared templates, consistent instructions, and centralized response capture across agents.

## Prerequisites

- Python 3.11+
- `crewai` (`pip install crewai`)
- Promptmark account with service account API key
- MCP server access

## Quickstart

Define a Crew with Promptmark MCP tools — in ~40 lines.

```python
# quickstart.py (planned)
from crewai import Agent, Task, Crew

# TODO: Bridge Promptmark MCP to CrewAI tools
# 1. Wrap Promptmark MCP tools as CrewAI tools
# 2. Create an agent with prompt management capabilities
# 3. Define a task: "find and render the best prompt for X"
# 4. Run the crew
```

**MCP tools used**: `list_prompts`, `get_prompt`, `render_prompt`

## Full Demo: Content Pipeline Crew

A three-agent crew that collaborates on content production using Promptmark prompts.

### What it does

1. **Research Agent**: searches Promptmark for relevant prompt templates, adapts them for the current task
2. **Writer Agent**: renders prompts with context-specific variables, generates content
3. **Reviewer Agent**: captures all outputs via `capture_response`, evaluates quality, suggests prompt improvements
4. All three agents share the same Promptmark library and can see each other's captured responses

### Why this matters

Multi-agent systems need shared context. With Promptmark, all agents draw from the same versioned prompt library. The reviewer can trace which prompt + variables produced each output, and improvements feed back into the library for the next run.

**MCP tools used**: `list_prompts`, `get_prompt`, `search_prompts`, `render_prompt`, `update_prompt`, `capture_response`, `create_collection`

## Directory Structure (Planned)

```
integrations/crewai/
├── README.md              ← you are here
├── quickstart/
│   ├── quickstart.py
│   └── requirements.txt
└── demo/
    ├── content_pipeline.py
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
- [Capture and Compare Example](../../examples/prompts/03-capture-and-compare-responses.md) — the response capture pattern
- [CrewAI Docs](https://docs.crewai.com/) — CrewAI documentation
