# Version and Iterate on a Prompt

Use Promptmark's automatic versioning to iterate on a prompt safely — every edit creates a snapshot you can review and restore.

## What You'll Learn

- How editing auto-creates version snapshots
- Reviewing version history
- Comparing versions
- Restoring a previous version

## Workflow

### Step 1: Start with an existing prompt

```
Tool: get_prompt
Input: { "id": "<prompt_id>" }
```

Returns the current state — content, variables, tags, metadata.

### Step 2: Make an improvement

```
Tool: update_prompt
Input: {
  "id": "<prompt_id>",
  "prompt": "...improved content with better output format spec...",
  "notes": "v2: Added JSON schema constraint to output format"
}
```

This automatically snapshots the previous version before applying the change. Your history is preserved.

### Step 3: Iterate again

```
Tool: update_prompt
Input: {
  "id": "<prompt_id>",
  "prompt": "...further refined content...",
  "notes": "v3: Added few-shot examples for edge cases"
}
```

Each edit creates another snapshot. You now have v1, v2, and v3.

### Step 4: Review version history

```
Tool: get_prompt_versions
Input: { "prompt_id": "<prompt_id>" }
```

Returns a list of all versions with timestamps and notes. See how your prompt evolved.

### Step 5: Inspect a specific version

```
Tool: get_prompt_version
Input: { "version_id": "<version_id>" }
```

Returns the full content of that version. Compare manually with the current state to understand what changed.

### Step 6: Realize v2 was actually better — restore it

```
Tool: restore_prompt_version
Input: {
  "prompt_id": "<prompt_id>",
  "version_id": "<v2_version_id>"
}
```

This snapshots the current state (v3) first, then restores v2 as the active content. Nothing is lost — v3 is still in history.

## MCP Tools Used

`get_prompt` → `update_prompt` (x2) → `get_prompt_versions` → `get_prompt_version` → `restore_prompt_version`

## Key Takeaway

Every `update_prompt` call is safe — the previous state is always preserved. Iterate freely, restore fearlessly.
