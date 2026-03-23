# prompt-snapshot-export

Exports a complete point-in-time snapshot of your library for backup or migration.

## Purpose

A full archive of everything — every prompt, every version, every collection and tag relationship — captured in a single structured file. For disaster recovery, compliance archival, platform migration, or just peace of mind.

## Prerequisites

- Promptmark MCP server connected and authenticated

## MCP Tools Used

- `list_prompts` — enumerate all prompts
- `get_prompt` — retrieve full prompt content and metadata
- `list_collections` — capture collection structure
- `get_collection` — collection membership details
- `list_tags` — capture tag set
- `list_versions` — version history per prompt
- `get_version` — full version content
- `user_profile` — account context for the archive header

## Usage

```
Export a complete snapshot of my library.
```

```
Create a full backup archive of all my prompts, versions, and collections.
```

## Output Format

### JSON Archive

```json
{
  "schema_version": "1.0",
  "exported_at": "2026-03-23T14:30:00Z",
  "user": { "username": "...", "profile_url": "..." },
  "summary": {
    "prompts": 47,
    "versions": 183,
    "collections": 8,
    "tags": 24
  },
  "prompts": [
    {
      "id": "abc123",
      "title": "...",
      "content": "...",
      "tags": ["..."],
      "variables": { ... },
      "collection_ids": ["..."],
      "versions": [
        { "id": "v1", "content": "...", "created_at": "...", "note": "..." }
      ]
    }
  ],
  "collections": [ ... ],
  "tags": [ ... ],
  "checksum": "sha256:..."
}
```

### YAML Archive

Same structure in YAML format.

## Notes

- Includes a SHA-256 checksum of the archive content for integrity verification
- Schema versioned for forward compatibility
- Can be large for libraries with extensive version histories — YAML is more readable, JSON is more compact
- Pair with `bulk-migrate` to restore from an archive into a fresh Promptmark instance
