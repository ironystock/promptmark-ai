# Prompt Types and Model Targeting

Categorize prompts by type and associate them with specific AI models for organized, model-aware management.

## What You'll Learn

- Using prompt type_id for categorization
- Associating prompts with target models
- Filtering by type and model
- Self-rating prompts for quality tracking

## Workflow

### Step 1: Create prompts with specific types

**System prompt:**
```
Tool: create_prompt
Input: {
  "title": "Code Review Assistant",
  "prompt": "You are a code review assistant. Focus on correctness, readability, and security.",
  "type_id": "system",
  "models": "[\"anthropic/claude-sonnet-4\", \"openai/gpt-4o\"]",
  "self_rating": 4
}
```

**Code generation prompt:**
```
Tool: create_prompt
Input: {
  "title": "REST Endpoint Generator",
  "prompt": "Generate a {{framework:select:express}} REST endpoint for {{resource:text}}.\nInclude: route handler, validation, error handling, and tests.",
  "type_id": "text-to-code",
  "models": "[\"anthropic/claude-sonnet-4\"]",
  "self_rating": 3
}
```

**Agent instruction:**
```
Tool: create_prompt
Input: {
  "title": "Research Agent Planner",
  "prompt": "You are a research planning agent. Given a topic, decompose it into 3-5 research subtasks with specific search queries for each.",
  "type_id": "agent",
  "models": "[\"anthropic/claude-sonnet-4\", \"openai/gpt-4o\"]"
}
```

### Available type_id values

| Type | Use Case |
|------|----------|
| `general` | Default — multi-purpose prompts |
| `system` | System instructions for conversations |
| `query` | Question-answering prompts |
| `text-to-code` | Code generation |
| `text-to-image` | Image generation instructions |
| `text-to-video` | Video generation instructions |
| `text-to-speech` | Speech/audio generation |
| `agent` | Agent instructions and tools |

### Step 2: Filter by type

```
Tool: list_prompts
Input: { "type_id": "system" }
```

Find all your system prompts. Or all your agent instructions:

```
Tool: list_prompts
Input: { "type_id": "agent" }
```

### Step 3: Find templates specifically

```
Tool: list_prompts
Input: { "is_template": true }
```

Returns prompts that use template variables — your reusable templates.

## MCP Tools Used

`create_prompt` (x3) → `list_prompts` (filtered by type_id, is_template)

## Key Takeaway

Prompt types and model associations add semantic structure to your library. Filter by type to find system prompts, agent instructions, or code generators. Model targeting helps you know which prompts work with which providers.
