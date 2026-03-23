# preflight

Instructs any MCP-connected agent to store all prompts and responses in Promptmark for traceability and iteration.

## Purpose

AI agent sessions are ephemeral — prompts are sent, responses come back, and the conversation disappears. Preflight changes that. It tells the agent to log every prompt/response pair to Promptmark, creating a traceable, versionable, searchable record of what was sent and what came back.

Works with any MCP-compatible client: Claude Desktop, Cursor, Warp, or custom integrations.

## Prerequisites

- Promptmark MCP server connected and authenticated
- An active agent session

## MCP Tools Used

- `create_prompt` — store each prompt sent
- `capture_response` — store AI responses for traceability
- `update_prompt` — save changes and attach response notes (auto-versions)
- `create_collection` — group session prompts together
- `search_prompts` — deduplicate against previously captured prompts
- `list_tags` — check for existing session tags (tags are created inline via create_prompt/update_prompt tags field)

## Usage

Tell your agent:

```
Enable preflight — store every prompt and response in Promptmark
under the session name "api-debugging-march".
```

```
Turn on preflight logging. Tag everything with "eval-run-42".
```

## How It Works

1. Agent acknowledges preflight mode is active
2. For each interaction during the session:
   - **Prompt capture**: the prompt sent to the model is stored via `create_prompt`
     - Title: derived from content or user-provided label
     - Tags: `preflight`, session name, model name, ISO date
   - **Response capture**: the model's response is stored via `capture_response`
     - Includes: model used, token count, response time (if available)
     - Includes: quality flag (complete/partial/error)
3. All prompts are grouped into a session collection
4. At session end (or on request), a summary is produced

## Session Collection

```
Collection: preflight-api-debugging-march
├── prompt: "Debug the authentication flow" (3 versions — 3 model responses)
├── prompt: "Generate test fixtures" (1 version)
├── prompt: "Review error handling" (2 versions — tried 2 models)
└── prompt: "Summarize findings" (1 version)
```

## Use Cases

- **Evaluation runs** — capture all prompts/responses for a structured eval
- **Debugging sessions** — trace what you tried and what worked
- **Training data** — collect high-quality prompt/response pairs for fine-tuning review
- **Audit trail** — demonstrate what AI interactions occurred and when
- **Knowledge capture** — turn good one-off prompts into reusable library entries

## Notes

- Session-scoped — does not persist across sessions automatically
- Deduplicates: if the same prompt is sent again, the new response is added as a version
- Lightweight: captures metadata, not the full agent context window
- Can be filtered: "only capture prompts tagged 'production'" or "skip debug messages"
