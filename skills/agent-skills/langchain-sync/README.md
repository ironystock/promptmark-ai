# langchain-sync

Syncs Promptmark prompts into LangChain-compatible prompt template format.

## Purpose

If you're building with LangChain or LangGraph, you want your Promptmark prompts to work natively as LangChain `PromptTemplate` or `ChatPromptTemplate` objects. This skill bridges the two systems — manage prompts in Promptmark, use them in LangChain without manual conversion.

## Prerequisites

- Promptmark MCP server connected and authenticated
- LangChain installed in your Python environment
- Prompts in Promptmark that you want to use in LangChain

## MCP Tools Used

- `get_prompt` — retrieve prompt content and variable definitions
- `list_prompts` — enumerate prompts for batch sync
- `search_prompts` — find prompts by content or tags
- `render_prompt` — render prompt with variable substitution for template output

## Usage

```
Sync my "production" collection into LangChain templates.
```

```
Generate a LangChain PromptTemplate for prompt "data-extractor".
```

## How It Works

1. Fetches prompts from Promptmark
2. Maps Promptmark template variables to LangChain's `input_variables`
   - `{{variable}}` → `{variable}` (LangChain syntax)
   - Variable types map to LangChain's validation
3. Generates Python code with proper imports:
   - `PromptTemplate` for single-turn prompts
   - `ChatPromptTemplate` for multi-turn/system+user prompts
4. Optionally generates a loader module that auto-fetches from Promptmark at import time

## Output Example

```python
from langchain_core.prompts import PromptTemplate

# Auto-generated from Promptmark prompt: customer-support-router
# Last synced: 2026-03-23
support_router = PromptTemplate(
    input_variables=["category", "urgency", "message"],
    template="""Route the following {category} support request...
    Urgency: {urgency}
    Message: {message}""",
)
```

## Supported Patterns

- `PromptTemplate` — standard single-template prompts
- `ChatPromptTemplate` — system + user message pairs
- `FewShotPromptTemplate` — prompts with example patterns
- LangGraph tool-calling prompts
