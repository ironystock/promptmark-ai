# ci-snapshot

Creates version snapshots of specified prompts, designed for CI/CD pipeline integration.

## Purpose

When you deploy code that depends on specific prompts, you want to snapshot those prompts at the same time — so you can always trace which prompt version was live with which code version. This skill creates versioned snapshots with commit-message-style notes.

## Prerequisites

- Promptmark MCP server connected and authenticated
- Prompts to snapshot (by ID or collection)

## MCP Tools Used

- `get_prompt` — retrieve current prompt state
- `create_version` — create the snapshot
- `list_versions` — verify snapshot was created
- `get_collection` — resolve collection-based targets

## Usage

```
Snapshot all prompts in the "production" collection with note
"Release v2.4.1 — updated routing logic"
```

```
Create CI snapshots for prompts abc123, def456, ghi789 tagged with
commit hash a1b2c3d.
```

## How It Works

1. Resolves target prompts (by ID list, collection, or tag filter)
2. Creates a version snapshot for each with a structured note:
   - Snapshot timestamp
   - User-provided message (like a commit message)
   - Optional: git commit hash, CI build number, or release tag
3. Returns a manifest of created versions with IDs for traceability

## CI/CD Integration

Call from your pipeline after a successful deploy:

```yaml
# GitHub Actions example
- name: Snapshot prompts
  run: |
    # Via MCP client or REST API
    promptmark snapshot \
      --collection production \
      --note "Deploy ${{ github.sha }}"
```

## Output

```json
{
  "snapshots": [
    {"prompt_id": "abc123", "version_id": "v7", "note": "Release v2.4.1"},
    {"prompt_id": "def456", "version_id": "v3", "note": "Release v2.4.1"}
  ],
  "timestamp": "2026-03-23T14:30:00Z"
}
```
