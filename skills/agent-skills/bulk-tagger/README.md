# bulk-tagger

Automatically suggests and applies tags to untagged or under-tagged prompts.

## Purpose

Tagging is the first thing to slip when you're focused on writing prompts. This skill analyzes prompt content and suggests relevant tags from your existing taxonomy — or proposes new ones where gaps exist. Runs in batch across your library.

## Prerequisites

- Promptmark MCP server connected and authenticated
- Prompts with missing or insufficient tags

## MCP Tools Used

- `list_prompts` — find prompts needing tags
- `get_prompt` — analyze content for tag suggestions
- `list_tags` — respect existing taxonomy
- `create_tag` — create new tags when needed
- `update_prompt` — apply tags

## Usage

```
Tag all my untagged prompts.
```

```
Review tags across my library and fill in gaps — prefer existing tags
over creating new ones.
```

```
Suggest tags for prompts in my "onboarding" collection.
```

## How It Works

1. Identifies prompts with zero tags or fewer than a threshold (default: 2)
2. Analyzes each prompt's content, title, and description
3. Matches against existing tags first — avoids tag sprawl
4. Proposes new tags only when no existing tag fits
5. Presents suggestions grouped by prompt for user confirmation
6. Applies approved tags in batch

## Taxonomy Rules

- Prefers existing tags over creating new ones
- Groups suggestions by confidence (high / medium / low)
- Flags potential tag synonyms for consolidation
- Won't suggest more than 5 tags per prompt
