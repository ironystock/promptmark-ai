# MCP Reference

Promptmark's Model Context Protocol server provides 38 tools for AI agents to manage prompts, collections, conversations, and more.

## Connection

### stdio (Local)

```bash
promptmark-mcp
```

Authentication via OAuth Device Flow — the server provides a URL for browser-based login on first connection.

### Configuration (Claude Desktop)

```json
{
  "mcpServers": {
    "promptmark": {
      "command": "promptmark-mcp",
      "args": []
    }
  }
}
```

## Tools by Category

### Prompts (10 tools)

#### list_prompts

List prompts with optional filtering by search, tags, collection, and type.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `search` | string | no | | Filter by title or content |
| `tag` | string | no | | Filter by tag name |
| `collection_id` | string | no | | Filter by collection ID |
| `type_id` | string | no | | Filter by prompt type |
| `is_template` | boolean | no | | Filter templates only (true) or prompts only (false) |
| `is_remix` | boolean | no | | Filter remixes only (true) or exclude (false) |
| `limit` | integer | no | 50 | Max results (max 100) |
| `offset` | integer | no | 0 | Pagination offset |

#### get_prompt

Get a specific prompt by ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | yes | The prompt ID |

#### create_prompt

Create a new prompt with full field support.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `title` | string | yes | | The title of the prompt |
| `prompt` | string | yes | | The prompt content. Use `{{variable}}` syntax for templates. |
| `notes` | string | no | | Optional notes about the prompt |
| `is_public` | boolean | no | false | Whether the prompt is publicly visible |
| `is_remixable` | boolean | no | false | Whether others can remix this prompt |
| `tags` | string | no | | JSON array of tag strings, e.g. `["ai", "coding"]` |
| `type_id` | string | no | | Prompt type: general, system, query, text-to-image, text-to-video, text-to-speech, text-to-code, agent |
| `collection_id` | string | no | | Collection ID to organize the prompt |
| `remixed_id` | string | no | | ID of the prompt this is remixed from |
| `models` | string | no | | JSON array of model IDs this prompt is designed for |
| `self_rating` | float | no | | Self-rating from 1-5 (0 = no rating) |

#### update_prompt

Update an existing prompt. Any field not provided is left unchanged.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | yes | The ID of the prompt to update |
| `title` | string | no | New title |
| `prompt` | string | no | New prompt content |
| `notes` | string | no | New notes |
| `is_public` | boolean | no | Whether publicly visible |
| `is_remixable` | boolean | no | Whether remixable |
| `tags` | string | no | JSON array of tag strings |
| `type_id` | string | no | Prompt type |
| `collection_id` | string | no | Collection ID (empty string to remove) |
| `models` | string | no | JSON array of model IDs |
| `self_rating` | float | no | Self-rating from 1-5 |

#### delete_prompt

Delete a prompt (soft delete).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | yes | The ID of the prompt to delete |

#### search_prompts

Search prompts by title, tags, or visibility.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `query` | string | no | | Search term for title and notes |
| `tags` | array | no | | Filter by tags — must match ALL specified tags |
| `is_public` | boolean | no | | Filter by visibility |
| `limit` | integer | no | 50 | Max results |

#### list_tags

List all unique tags used across prompts.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `include_counts` | boolean | no | false | Include usage count per tag |
| `limit` | integer | no | 100 | Max tags to return |

#### get_prompt_schema

Get the template variable schema for a prompt. Returns variable names, types, defaults, and options for prompts using `{{variable}}` syntax.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | yes | The prompt ID |

#### render_prompt

Render a prompt template by substituting variables with provided values.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | yes | The prompt template ID |
| `variables` | object | no | Key-value pairs of variable names and values |

#### validate_prompt_inputs

Validate variable values before rendering. Returns validation errors for invalid or missing required values.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | yes | The prompt template ID |
| `variables` | object | yes | Key-value pairs to validate |

---

### Collections (6 tools)

#### list_collections

List all collections for the current user.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `include_counts` | boolean | no | true | Include prompt count per collection |

#### get_collection

Get a specific collection by ID with its prompts.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `id` | string | yes | | The collection ID |
| `include_prompts` | boolean | no | false | Include list of prompt IDs |

#### create_collection

Create a new collection.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `name` | string | yes | | Collection name |
| `description` | string | no | | Description |
| `icon` | string | no | folder | Icon identifier |
| `color` | string | no | gray | Color: gray, red, orange, yellow, green, cyan, blue, purple, pink |
| `is_public` | boolean | no | false | Whether publicly visible |

#### update_collection

Update an existing collection.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | yes | The collection ID |
| `name` | string | no | New name |
| `description` | string | no | New description |
| `icon` | string | no | New icon |
| `color` | string | no | New color |
| `is_public` | boolean | no | Public visibility |

#### delete_collection

Delete a collection (prompts in it become uncategorized).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | yes | The collection ID |

#### assign_prompt_to_collection

Move a prompt to a collection (or remove from collection).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `prompt_id` | string | yes | The prompt ID |
| `collection_id` | string | no | The collection ID (empty string to remove) |

---

### Tags (1 tool)

#### rename_tag

Rename a tag across all prompts that use it.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `old_name` | string | yes | Current tag name |
| `new_name` | string | yes | New tag name |

---

### Remix (1 tool)

#### list_remixes

List all remixes (prompts derived from other prompts).

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `limit` | integer | no | 50 | Max results |

---

### Versions (3 tools)

#### get_prompt_versions

Get version history for a prompt.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `prompt_id` | string | yes | The prompt ID |

#### get_prompt_version

Get a specific version of a prompt.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `version_id` | string | yes | The version ID |

#### restore_prompt_version

Restore a prompt to a previous version. Creates a snapshot of the current state first.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `prompt_id` | string | yes | The prompt ID |
| `version_id` | string | yes | The version ID to restore to |

---

### Responses (4 tools)

#### capture_response

Capture an AI response for a prompt. Use this to save model outputs for later analysis, comparison, or review.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `prompt_id` | string | yes | ID of the prompt this response is for |
| `model_id` | string | yes | ID or name of the model that generated this response |
| `content` | string | yes | The AI-generated response content |
| `metadata` | object | no | Optional metadata (tokens, latency, temperature, etc.) |

#### list_captured_responses

List captured AI responses with optional filtering by prompt.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `prompt_id` | string | no | | Filter by prompt ID |
| `limit` | integer | no | 20 | Max results (max 100) |
| `offset` | integer | no | 0 | Pagination offset |

#### get_captured_response

Get a specific captured response by ID with full content.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | yes | The captured response ID |

#### delete_captured_response

Permanently delete a captured response.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | yes | The captured response ID |

---

### Achievements (3 tools)

#### list_achievements

Get the user's achievement state for the First Steps onboarding checklist. Returns all 6 achievements with their unlock status.

*No parameters.*

#### dismiss_onboarding

Hide the First Steps onboarding widget from the dashboard.

*No parameters.*

#### restore_onboarding

Restore the First Steps onboarding widget to the dashboard.

*No parameters.*

---

### Scans (1 tool)

#### acknowledge_scan

Acknowledge a safety scan issue for a prompt. Transitions the flag from active to acknowledged. All active issues must be acknowledged before a prompt can be published.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `prompt_id` | string | yes | The prompt ID |
| `category` | string | yes | Scan category: pii, injection, secrets, or danger |

---

### Conversations (9 tools)

#### list_conversations

List conversations with optional search and source filtering.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `page` | integer | no | 1 | Page number (1-indexed) |
| `search` | string | no | | Search by title |
| `source` | string | no | | Filter by source: native, claude, chatgpt, json, markdown |
| `linked_prompt_id` | string | no | | Filter by linked prompt ID |

#### get_conversation

Get a conversation by ID with optional messages.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `id` | string | yes | | The conversation ID |
| `include_messages` | boolean | no | true | Include messages |
| `message_limit` | integer | no | 50 | Max messages (max 200) |

#### create_conversation

Create a new conversation with a model and optional system prompt.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | yes | Conversation title |
| `model_id` | string | yes | AI model ID (e.g. `anthropic/claude-sonnet-4`) |
| `linked_prompt_id` | string | no | Link to an existing prompt ID for system prompt |
| `system_prompt` | string | no | Custom system prompt (overrides linked prompt) |

#### update_conversation

Update conversation metadata.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | yes | The conversation ID |
| `title` | string | no | New title (max 200 chars) |
| `model_id` | string | no | New model ID |
| `linked_prompt_id` | string | no | Prompt ID to link (empty string to unlink) |
| `system_prompt` | string | no | New system prompt |

#### delete_conversation

Delete a conversation (soft delete).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | yes | The conversation ID |

#### send_message

Send a message in a conversation and get the AI response (non-streaming). Requires an API key configured in Settings.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `conversation_id` | string | yes | The conversation ID |
| `content` | string | yes | Message content to send |
| `prompt_reference_id` | string | no | Optional reference to a prompt ID |

#### import_conversation

Import a conversation with messages from an external source.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | yes | Conversation title |
| `source` | string | no | Import source (e.g. claude, chatgpt) |
| `model` | string | no | Model ID used in the conversation |
| `messages` | array | yes | Array of `{role, content}` objects (role: system, user, assistant) |

#### list_conversation_messages

List messages with cursor-based pagination for large threads.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `conversation_id` | string | yes | | The conversation ID |
| `before` | string | no | | Cursor: messages before this ISO 8601 timestamp |
| `limit` | integer | no | 50 | Max messages (max 200) |

#### link_conversation_prompt

Link a conversation to an existing prompt for system prompt injection.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `conversation_id` | string | yes | The conversation ID |
| `prompt_id` | string | yes | The prompt ID to link |

---

## Summary

| Category | Count | Key Capabilities |
|----------|-------|-----------------|
| Prompts | 10 | CRUD, search, template variables (schema, render, validate) |
| Collections | 6 | CRUD, prompt assignment |
| Tags | 1 | Rename across all prompts |
| Remix | 1 | List derived prompts |
| Versions | 3 | History, retrieval, restore |
| Responses | 4 | Capture and review AI outputs |
| Achievements | 3 | Onboarding state |
| Scans | 1 | Safety scan acknowledgment |
| Conversations | 9 | Full conversation lifecycle with AI messaging |
| **Total** | **38** | |
