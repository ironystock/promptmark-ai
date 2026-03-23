# Full Prompt Lifecycle

From blank page to published, versioned, evaluated prompt — the complete Promptmark workflow in one example.

## What You'll Learn

- The complete journey of a prompt through the platform
- How all the tools work together
- A real-world workflow you can replicate

## The Scenario

You need a prompt that extracts action items from meeting transcripts. You'll create it, template it, test it, evaluate it, improve it, and publish it.

## Workflow

### 1. Create the first draft

```
Tool: create_prompt
Input: {
  "title": "Meeting Action Item Extractor",
  "prompt": "Extract all action items from the following meeting transcript.\n\nFor each action item, identify:\n- What needs to be done\n- Who is responsible\n- When it's due (if mentioned)\n\nTranscript:\n{{transcript:text}}\n\nReturn as JSON array.",
  "tags": "[\"meetings\", \"extraction\", \"productivity\"]",
  "type_id": "general",
  "collection_id": "<productivity_collection_id>"
}
```

### 2. Check the variable schema

```
Tool: get_prompt_schema
Input: { "id": "<prompt_id>" }
```

Verify: one `text` variable named `transcript`. Good — simple and focused.

### 3. Test with real input

```
Tool: render_prompt
Input: {
  "id": "<prompt_id>",
  "variables": {
    "transcript": "Sarah: Let's move the launch to Friday. Mike, can you update the docs by Thursday? And someone needs to notify the beta users — I'll handle that today."
  }
}
```

### 4. Capture the response

Send the rendered prompt to your model, then capture the result:

```
Tool: capture_response
Input: {
  "prompt_id": "<prompt_id>",
  "model_id": "anthropic/claude-sonnet-4",
  "content": "[{\"action\": \"Update docs\", \"owner\": \"Mike\", \"due\": \"Thursday\"}, {\"action\": \"Notify beta users\", \"owner\": \"Sarah\", \"due\": \"today\"}, {\"action\": \"Move launch to Friday\", \"owner\": \"team\", \"due\": \"Friday\"}]",
  "metadata": { "eval_run": "v1", "test_case": "simple" }
}
```

### 5. Improve based on results

The output is functional but could be better — add output format constraints and edge case handling:

```
Tool: update_prompt
Input: {
  "id": "<prompt_id>",
  "prompt": "Extract all action items from the following meeting transcript.\n\nFor each action item, identify:\n- **action**: What needs to be done (imperative verb phrase)\n- **owner**: Who is responsible (name or \"unassigned\")\n- **due**: When it's due (ISO date, \"ASAP\", or \"unspecified\")\n- **priority**: Inferred priority (high/medium/low)\n\nIf no action items exist, return an empty array.\nIf the owner is ambiguous, mark as \"unassigned\".\n\nTranscript:\n{{transcript:text}}\n\nReturn ONLY valid JSON: [{\"action\": \"\", \"owner\": \"\", \"due\": \"\", \"priority\": \"\"}]",
  "notes": "v2: Added priority field, output format constraints, edge case handling for empty/ambiguous inputs"
}
```

Auto-versioned — v1 is preserved.

### 6. Re-evaluate

```
Tool: render_prompt
Input: {
  "id": "<prompt_id>",
  "variables": { "transcript": "...same transcript..." }
}
```

```
Tool: capture_response
Input: {
  "prompt_id": "<prompt_id>",
  "model_id": "anthropic/claude-sonnet-4",
  "content": "[{\"action\": \"Update documentation\", \"owner\": \"Mike\", \"due\": \"Thursday\", \"priority\": \"high\"}, ...]",
  "metadata": { "eval_run": "v2", "test_case": "simple" }
}
```

Compare v1 and v2 responses — the output is now structured, consistent, and handles edge cases.

### 7. Verify version history

```
Tool: get_prompt_versions
Input: { "prompt_id": "<prompt_id>" }
```

Two versions: the first draft and the improved version with notes.

### 8. Publish

```
Tool: update_prompt
Input: {
  "id": "<prompt_id>",
  "is_public": true,
  "is_remixable": true,
  "self_rating": 4,
  "notes": "Tested with multiple transcript formats. Works well with Claude and GPT-4o."
}
```

### 9. Verify it's public

```
Tool: search_prompts
Input: { "query": "Meeting Action Item", "is_public": true }
```

Your prompt is live on your public profile.

## MCP Tools Used (in order)

`create_prompt` → `get_prompt_schema` → `render_prompt` → `capture_response` → `update_prompt` → `render_prompt` → `capture_response` → `get_prompt_versions` → `update_prompt` → `search_prompts`

## Key Takeaway

This is the Promptmark workflow: **create → test → capture → improve → version → publish**. Every step is tracked, every response is stored, every version is preserved. Your prompts are living, evolving assets — not disposable text.
