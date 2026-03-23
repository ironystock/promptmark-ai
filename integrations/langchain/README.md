# LangChain / LangGraph Integration

Use Promptmark as the prompt management backend for LangChain applications and LangGraph workflows.

**Language**: Python
**Status**: Planned — awaiting [service account feature](https://promptmark.ai)

## Overview

LangChain is the most widely used agent framework. This integration wraps Promptmark's MCP tools as LangChain tools and demonstrates how to use Promptmark-managed prompts as `PromptTemplate` objects in chains and LangGraph workflows.

## Prerequisites

- Python 3.11+
- `langchain` and `langchain-core` (`pip install langchain langchain-core`)
- `langgraph` for the full demo (`pip install langgraph`)
- Promptmark account with service account API key
- MCP server access

## Quickstart

Wrap Promptmark MCP tools as LangChain tools and use a Promptmark-backed `PromptTemplate` — in ~40 lines.

```python
# quickstart.py (planned)
from langchain_core.prompts import PromptTemplate
from langchain_core.tools import Tool

# TODO: Bridge Promptmark MCP to LangChain
# 1. Connect to Promptmark MCP server
# 2. Wrap get_prompt + render_prompt as a LangChain Tool
# 3. Fetch a prompt and convert to PromptTemplate
# 4. Invoke the chain with variables
# 5. Print the result
```

**MCP tools used**: `list_prompts`, `get_prompt`, `get_prompt_schema`, `render_prompt`

## Full Demo: LangGraph Workflow

A multi-step LangGraph workflow where each node uses a Promptmark prompt template.

### What it does

1. Fetches prompt templates from Promptmark for each workflow step
2. Builds a LangGraph with nodes backed by Promptmark prompts:
   - **Extract** node: pulls data from input using an extraction prompt
   - **Transform** node: reformats data using a transformation prompt
   - **Validate** node: checks output against constraints
3. Captures intermediate results at each node via `capture_response`
4. Routes based on validation results (pass → output, fail → retry with adjusted variables)

### Why this matters

LangGraph workflows need structured prompts at each node. Managing them inline makes iteration painful. With Promptmark, each node's prompt is versioned independently — update the extraction prompt without touching the transformation or validation steps.

**MCP tools used**: `list_prompts`, `get_prompt`, `get_prompt_schema`, `render_prompt`, `validate_prompt_inputs`, `capture_response`

## Directory Structure (Planned)

```
integrations/langchain/
├── README.md              ← you are here
├── quickstart/
│   ├── quickstart.py
│   └── requirements.txt
└── demo/
    ├── graph_workflow.py
    └── requirements.txt
```

## Service Account Setup

> **Blocked**: This integration requires Promptmark service accounts, which are not yet available.

```bash
export PROMPTMARK_API_KEY="pm_sk_..."
export OPENAI_API_KEY="sk-..."  # or ANTHROPIC_API_KEY
```

## Related

- [MCP Reference](../../docs/api/mcp-reference.md) — all 38 Promptmark MCP tools
- [langchain-sync skill](../../skills/agent-skills/langchain-sync/) — automated LangChain template generation
- [Full Lifecycle Example](../../examples/prompts/15-full-lifecycle.md) — the complete prompt workflow
