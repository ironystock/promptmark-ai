# tag-taxonomy

Analyzes your tag usage and proposes a clean, consistent taxonomy.

## Purpose

Tags grow organically and get messy — synonyms accumulate ("support" vs "customer-support"), one-off tags linger, and common categories go untagged. This skill audits your tag system and proposes a rationalized taxonomy.

## Prerequisites

- Promptmark MCP server connected and authenticated
- A library with tags to analyze

## MCP Tools Used

- `list_tags` — enumerate all tags with usage counts
- `list_prompts` — analyze prompt content for missing tag categories
- `rename_tag` — rename tags to canonical form
- `update_prompt` — re-tag prompts (tags are created inline via the tags field; unused tags are auto-removed)

## Usage

```
Clean up my tags — I know there are duplicates and orphans.
```

```
Propose a tag taxonomy for my library based on what's actually in there.
```

## What It Finds

| Issue | Example |
|-------|---------|
| **Synonyms** | "support", "customer-support", "cs" all meaning the same thing |
| **Overly broad** | "ai" applied to 80% of prompts (adds no signal) |
| **One-off tags** | Tags used on exactly one prompt |
| **Missing categories** | 20 prompts about code review but no "code-review" tag |
| **Inconsistent casing** | "API", "api", "Api" |
| **Redundant hierarchy** | "email" and "email-marketing" where all "email" prompts are marketing |

## Output

1. **Current state** — all tags with usage counts and health indicators
2. **Proposed taxonomy** — clean list of canonical tags with descriptions
3. **Migration plan** — which tags to merge, rename, or delete
4. **Execution** — on confirmation, applies the cleanup:
   - Merges synonyms (re-tags prompts to canonical tag, deletes old)
   - Removes unused tags
   - Creates missing category tags
   - Re-tags prompts as needed
