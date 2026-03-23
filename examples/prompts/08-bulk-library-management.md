# Bulk Library Management

Manage a large prompt library at scale — audit, retag, reorganize, and clean up.

## What You'll Learn

- Auditing your library for issues
- Bulk retagging with rename_tag
- Reorganizing prompts across collections
- Cleaning up orphaned content

## Workflow

### Step 1: Get a full inventory

```
Tool: list_prompts
Input: { "limit": 100, "offset": 0 }
```

Page through your entire library. For each prompt, note: has tags? has collection? has versions?

### Step 2: Find orphaned prompts (no collection, no tags)

```
Tool: list_prompts
Input: { "limit": 100 }
```

Filter the results client-side for prompts where `collection_id` is null and `tags` is empty. These are your orphans.

### Step 3: Audit tag health

```
Tool: list_tags
Input: { "include_counts": true, "limit": 100 }
```

Look for:
- Tags with count 1 (probably one-offs)
- Similar tags that should be merged (`support` vs `customer-support`)
- Overly broad tags used on most prompts (add no signal)

### Step 4: Merge duplicate tags

```
Tool: rename_tag
Input: {
  "old_name": "customer-support",
  "new_name": "support"
}
```

All prompts tagged `customer-support` are now tagged `support`. Clean.

### Step 5: Move prompts to the right collections

```
Tool: assign_prompt_to_collection
Input: {
  "prompt_id": "<orphaned_prompt_id>",
  "collection_id": "<appropriate_collection_id>"
}
```

Repeat for each orphaned prompt.

### Step 6: Check collection health

```
Tool: list_collections
Input: { "include_counts": true }
```

Look for empty collections (count 0) — delete them:

```
Tool: delete_collection
Input: { "id": "<empty_collection_id>" }
```

### Step 7: Audit version activity

```
Tool: get_prompt_versions
Input: { "prompt_id": "<prompt_id>" }
```

Prompts with zero version history beyond creation might be abandoned drafts worth reviewing.

## MCP Tools Used

`list_prompts` → `list_tags` → `rename_tag` → `assign_prompt_to_collection` → `list_collections` → `delete_collection` → `get_prompt_versions`

## Key Takeaway

A healthy library requires periodic maintenance. Use the listing and filtering tools to identify issues, then the update tools to fix them in bulk. Tags, collections, and versions each tell you something about library health.
