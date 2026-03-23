---
description: Promptmark MCP tool conventions and patterns
---

# Promptmark Conventions

When working with Promptmark MCP tools:

## Template Variables
- Use `{{name}}` or `{{name:type:default}}` syntax in prompt content
- Types: `text`, `number`, `select` (with options)
- Every variable should have a type, default, and description

## Tags and Collections
- Tags are created inline via `create_prompt` / `update_prompt` tags field (JSON array of strings)
- Unused tags are auto-removed when no prompt references them
- Use `rename_tag` to merge duplicate tags
- One prompt per collection; use tags for cross-cutting labels

## Publishing
- Set `is_public: true` via `update_prompt` to publish (not a separate tool)
- Safety scanning runs on publish — `acknowledge_scan` to handle flags
- Set `is_remixable: true` to allow others to fork your prompt

## Versioning
- Every `update_prompt` call auto-snapshots the previous version
- Use `get_prompt_versions` to see history, `restore_prompt_version` to roll back
- Nothing is ever lost — restoring creates a new snapshot of current state first

## Responses
- Use `capture_response` to store model outputs linked to prompts
- Include metadata (model, tokens, latency) for traceability
- Use `list_captured_responses` filtered by prompt_id to compare

## Conversations
- Link prompts to conversations as system instructions via `link_conversation_prompt`
- Swap system prompts mid-conversation without losing history
- Use `import_conversation` to bring in chats from other platforms

Full reference: https://github.com/ironystock/promptmark-ai/blob/master/docs/api/mcp-reference.md
