---
description: "Generate SDK-ready code that fetches a Promptmark prompt and calls a target model with resolved template variables."
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
user-invocable: true
---

# prompt-to-code

Generates production-ready code that fetches and uses a Promptmark prompt at runtime.

## When to Use

Use `/prompt-to-code` when:
- Building an AI application that should pull prompts from Promptmark instead of hardcoding them
- Integrating Promptmark into an existing codebase
- Generating type-safe bindings for template variables
- Setting up a prompt-as-code workflow where prompts are managed in Promptmark but used in your app

## Execution

1. Retrieve the target prompt via `get_prompt` to understand its structure
2. Ask the user for:
   - Target language (Python, TypeScript, Go)
   - Framework (LangChain, LlamaIndex, Anthropic SDK, OpenAI SDK, raw HTTP)
   - Where to write the generated code
3. Generate code that:
   - Fetches the prompt from Promptmark via MCP or REST
   - Type-checks template variables against the schema
   - Resolves variables at call time
   - Calls the target model with the resolved prompt
   - Handles errors (prompt not found, variable validation, API failures)
   - Includes caching to avoid re-fetching on every call
4. Write the code to the specified location

## Example

```
/prompt-to-code
> Prompt: customer-support-router
> Language: Python
> Framework: Anthropic SDK
> Output: src/prompts/support_router.py
```

Generates:
```python
from promptmark import get_prompt

def route_support_ticket(category: str, urgency: str, message: str) -> str:
    prompt = get_prompt("customer-support-router")
    resolved = prompt.resolve(
        category=category,
        urgency=urgency,
        message=message,
    )
    # ... model call with error handling and caching
```

## Supported Targets

| Language | Frameworks |
|----------|-----------|
| Python | Anthropic SDK, OpenAI SDK, LangChain, LlamaIndex, raw HTTP |
| TypeScript | Anthropic SDK, OpenAI SDK, Vercel AI SDK, raw fetch |
| Go | Anthropic SDK, OpenAI SDK, raw net/http |

## Notes

- Generated code includes comments explaining each section
- Template variables become typed function parameters
- Caching is opt-in with configurable TTL
- The code references the prompt by ID, so updates in Promptmark are picked up automatically
