# Capture and Compare Model Responses

Store AI model outputs alongside your prompts for evaluation, comparison, and traceability.

## What You'll Learn

- Capturing AI responses with metadata
- Comparing responses across models
- Building an evaluation record

## Workflow

### Step 1: Render a prompt for testing

```
Tool: render_prompt
Input: {
  "id": "<prompt_id>",
  "variables": {
    "topic": "API rate limiting",
    "audience": "junior developers",
    "tone": "conversational"
  }
}
```

Get the fully resolved prompt text.

### Step 2: Send it to a model (or use your own client) and capture the response

```
Tool: capture_response
Input: {
  "prompt_id": "<prompt_id>",
  "model_id": "anthropic/claude-sonnet-4",
  "content": "Rate limiting is like a bouncer at a club...",
  "metadata": {
    "tokens_in": 245,
    "tokens_out": 892,
    "latency_ms": 1340,
    "temperature": 0.7
  }
}
```

The response is stored and linked to the prompt.

### Step 3: Capture from a different model

```
Tool: capture_response
Input: {
  "prompt_id": "<prompt_id>",
  "model_id": "openai/gpt-4o",
  "content": "API rate limiting controls how many requests...",
  "metadata": {
    "tokens_in": 245,
    "tokens_out": 756,
    "latency_ms": 980,
    "temperature": 0.7
  }
}
```

Now you have two responses for the same prompt from different models.

### Step 4: List captured responses for comparison

```
Tool: list_captured_responses
Input: { "prompt_id": "<prompt_id>" }
```

Returns all captured responses for this prompt, newest first. Compare:
- Which model followed instructions better?
- Which was more concise?
- Which had better tone for the target audience?
- Token usage and latency differences

### Step 5: Review a specific response in detail

```
Tool: get_captured_response
Input: { "id": "<response_id>" }
```

Full content plus metadata — everything you need for evaluation.

## MCP Tools Used

`render_prompt` → `capture_response` (x2) → `list_captured_responses` → `get_captured_response`

## Key Takeaway

Response capture turns ephemeral model outputs into persistent, searchable records. Compare models, track quality over time, and build evaluation datasets — all linked back to the prompt that generated them.
