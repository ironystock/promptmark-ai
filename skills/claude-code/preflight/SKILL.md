---
description: "Instructs the agent to store all prompts sent and responses received in Promptmark for traceability and iteration."
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
user-invocable: true
---

# preflight

Configures the agent to capture and store prompts and responses in Promptmark.

## When to Use

Use `/preflight` when:
- Starting a session where you want every prompt/response pair logged to Promptmark
- Building or debugging a workflow and want a traceable record of what was sent and returned
- Running evaluations and need to capture all interactions for later analysis
- You want to iterate on prompts based on real responses — store them, version them, improve them

## Execution

1. Activate preflight mode for the session
2. For each prompt sent to an AI model during the session:
   - Store the prompt in Promptmark via `create_prompt` with:
     - Title: auto-generated from content (first 60 chars or task description)
     - Tags: `preflight`, `session-<timestamp>`, model name
     - Template variables extracted from any parameterized parts
   - After receiving the response, create a version with:
     - The response appended as a structured note
     - Quality indicators (did the response match expected format? was it complete?)
3. Group all captured prompts into a session collection
4. At session end, produce a summary:
   - Total prompts captured
   - Models used
   - Success/failure rate
   - Links to each stored prompt for iteration

## Example

```
/preflight
> Session name: invoice-extraction-eval
```

During the session, every prompt/response is captured:

```
Captured: "Extract fields from invoice" → prompt-id: abc123
  Response stored as v1 note (gpt-4o, 847 tokens, format: correct)

Captured: "Validate extracted JSON schema" → prompt-id: def456
  Response stored as v1 note (claude-sonnet-4-5, 234 tokens, format: correct)

Session "invoice-extraction-eval" — 2 prompts captured, 2/2 successful
Collection: preflight-invoice-extraction-eval
```

## Why This Matters

Most prompt work happens in ephemeral sessions — you craft a prompt, get a response, tweak, repeat, and then close the window. The good prompts disappear. Preflight ensures:

- **Nothing is lost** — every prompt that worked (or didn't) is stored
- **Iteration is easy** — stored prompts can be versioned and improved
- **Patterns emerge** — reviewing session history reveals what works
- **Sharing is possible** — teammates can see what you tried and what worked

## Notes

- Preflight mode is per-session — it doesn't persist across sessions
- Responses are stored as version notes, not as prompt content (keeps prompts clean)
- Auto-deduplication: if the same prompt is sent twice, the second response is added as a new version
- Can be scoped to specific models or tasks within a session
- Works with any BYOK provider (OpenRouter, OpenAI, Anthropic)
