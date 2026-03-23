# Publish and Share Prompts

Take a prompt from private draft to public profile — with safety scanning and metadata polish.

## What You'll Learn

- Publishing prompts to your public profile
- Working with safety scanning and acknowledgment
- Making collections public
- Finding published prompts

## Workflow

### Step 1: Polish the prompt for publication

```
Tool: update_prompt
Input: {
  "id": "<prompt_id>",
  "title": "Customer Feedback Analyzer",
  "notes": "Extracts sentiment, topics, and action items from customer feedback. Works best with Claude and GPT-4o.",
  "tags": "[\"feedback\", \"sentiment\", \"analysis\", \"production\"]",
  "models": "[\"anthropic/claude-sonnet-4\", \"openai/gpt-4o\"]",
  "self_rating": 4
}
```

A published prompt is your public work — make the title clear, notes helpful, tags discoverable.

### Step 2: Publish it

```
Tool: update_prompt
Input: {
  "id": "<prompt_id>",
  "is_public": true
}
```

If safety scanning detects issues (PII, injection patterns, secrets), the publish may flag them.

### Step 3: Handle safety scan flags (if any)

If the scanner flags something, acknowledge it after review:

```
Tool: acknowledge_scan
Input: {
  "prompt_id": "<prompt_id>",
  "category": "pii"
}
```

Categories: `pii`, `injection`, `secrets`, `danger`. You must acknowledge all active flags before the prompt can be published.

### Step 4: Enable remixing (optional)

Let others fork your prompt and build on it:

```
Tool: update_prompt
Input: {
  "id": "<prompt_id>",
  "is_remixable": true
}
```

### Step 5: Publish an entire collection

```
Tool: update_collection
Input: {
  "id": "<collection_id>",
  "is_public": true
}
```

Public collections appear on your profile as curated sets.

### Step 6: Find all your published prompts

```
Tool: search_prompts
Input: { "is_public": true }
```

Your public prompt inventory — everything visible on your profile.

## MCP Tools Used

`update_prompt` (x3) → `acknowledge_scan` → `update_collection` → `search_prompts`

## Key Takeaway

Publishing is a deliberate act — polish metadata, pass safety scanning, then go public. Remixing lets the community build on your work. Collections let you curate a public portfolio.
