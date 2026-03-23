# Organize with Collections and Tags

Structure your prompt library using collections (folders) and tags (labels) for fast discovery.

## What You'll Learn

- Creating collections with icons and colors
- Assigning prompts to collections
- Using tags for cross-cutting categorization
- Filtering and searching by collection or tag

## Workflow

### Step 1: Create a collection

```
Tool: create_collection
Input: {
  "name": "Customer Support",
  "description": "Prompts for support ticket handling, routing, and response generation",
  "icon": "headset",
  "color": "cyan"
}
```

Collections are the primary organizational unit — like folders. Each prompt can belong to one collection.

### Step 2: Create another collection

```
Tool: create_collection
Input: {
  "name": "Content Pipeline",
  "description": "Blog posts, emails, social media, and documentation generation",
  "icon": "pencil",
  "color": "purple"
}
```

### Step 3: Assign prompts to collections

```
Tool: assign_prompt_to_collection
Input: {
  "prompt_id": "<support_router_id>",
  "collection_id": "<customer_support_collection_id>"
}
```

```
Tool: assign_prompt_to_collection
Input: {
  "prompt_id": "<blog_outliner_id>",
  "collection_id": "<content_pipeline_collection_id>"
}
```

### Step 4: Add cross-cutting tags

Tags work across collections. A prompt in "Customer Support" can also be tagged `production` and `high-priority`.

```
Tool: update_prompt
Input: {
  "id": "<support_router_id>",
  "tags": "[\"production\", \"high-priority\", \"routing\"]"
}
```

### Step 5: Browse by collection

```
Tool: list_prompts
Input: { "collection_id": "<customer_support_collection_id>" }
```

Returns all prompts in the Customer Support collection.

### Step 6: Filter by tag across collections

```
Tool: list_prompts
Input: { "tag": "production" }
```

Returns all prompts tagged `production` regardless of collection — your production prompt inventory.

### Step 7: Search by content

```
Tool: search_prompts
Input: {
  "query": "routing",
  "tags": ["production"]
}
```

Full-text search filtered by tags. Finds prompts about routing that are in production.

## MCP Tools Used

`create_collection` (x2) → `assign_prompt_to_collection` (x2) → `update_prompt` → `list_prompts` → `search_prompts`

## Key Takeaway

Collections give structure (one prompt, one collection). Tags give flexibility (cross-cutting labels). Together they make even large libraries navigable.
