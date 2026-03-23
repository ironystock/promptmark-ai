# collection-organizer

Proposes and creates a collection structure based on your existing prompts.

## Purpose

When you have dozens of prompts floating without structure, or your current collections no longer make sense, this skill analyzes everything and proposes a clean organizational scheme. Especially useful when onboarding a team to Promptmark or after a bulk import.

## Prerequisites

- Promptmark MCP server connected and authenticated
- A library with uncategorized prompts

## MCP Tools Used

- `list_prompts` — enumerate all prompts
- `get_prompt` — analyze content for grouping signals
- `list_collections` — assess current structure
- `create_collection` — create new collections
- `update_collection` — reorganize existing collections
- `list_tags` — use tags as grouping signals

## Usage

```
Organize my prompts into collections — I've been throwing everything
in without structure.
```

```
My collections are a mess from two team merges. Propose a new structure.
```

## How It Works

1. Lists all prompts and their current collection memberships (if any)
2. Analyzes content, tags, and naming patterns to identify natural groupings
3. Proposes a collection structure with:
   - Collection names and descriptions
   - Which prompts belong in each
   - Any prompts that could fit multiple collections
4. Presents the proposal for user approval
5. Creates collections and assigns prompts on confirmation

## Organizational Signals

- Content similarity (prompts about the same domain)
- Tag overlap (prompts sharing tags likely belong together)
- Naming patterns (prefixes like "email-", "api-", "support-")
- Template variable overlap (prompts with similar variable schemas)
- Usage context (development, production, testing, personal)
