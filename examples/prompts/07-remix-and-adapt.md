# Remix and Adapt Prompts

Fork a public prompt, adapt it for your needs, and track its lineage.

## What You'll Learn

- Creating remixes of existing prompts
- Tracking remix relationships
- Adapting variables for a new context

## Workflow

### Step 1: Find a prompt to remix

```
Tool: search_prompts
Input: {
  "query": "data extraction",
  "is_public": true
}
```

Browse public prompts. Find one that's close to what you need.

### Step 2: Inspect it

```
Tool: get_prompt
Input: { "id": "<public_prompt_id>" }
```

Read the content, check the variables, understand the approach.

### Step 3: Remix it

```
Tool: create_prompt
Input: {
  "title": "Invoice Data Extractor (Legal Team)",
  "prompt": "...adapted version with legal-specific fields...",
  "tags": "[\"extraction\", \"legal\", \"invoices\"]",
  "remixed_id": "<public_prompt_id>",
  "collection_id": "<legal_collection_id>"
}
```

The `remixed_id` links your prompt to the original — the lineage is tracked.

### Step 4: Customize the variables

```
Tool: update_prompt
Input: {
  "id": "<remix_prompt_id>",
  "prompt": "Extract the following legal-compliance fields from this {{document_type:select:invoice}} document.\n\nRequired fields: {{required_fields:text:vendor,amount,date,tax_id,jurisdiction}}\nOutput format: {{output_format:select:json}}\n\n---\n{{document:text}}\n---"
}
```

Same base concept, adapted variables for your domain.

### Step 5: See all remixes in your library

```
Tool: list_remixes
Input: { "limit": 50 }
```

Track which of your prompts are derived from others.

## MCP Tools Used

`search_prompts` → `get_prompt` → `create_prompt` (with `remixed_id`) → `update_prompt` → `list_remixes`

## Key Takeaway

Remixing is structured forking — adapt a prompt for your context while preserving the lineage. You can trace where ideas came from and discover improvements made to the original.
