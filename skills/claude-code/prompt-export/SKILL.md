---
description: "Export prompts to local files in markdown, JSON, or YAML format with metadata and version history."
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
user-invocable: true
---

# prompt-export

Exports prompts from Promptmark to local files.

## When to Use

Use `/prompt-export` when:
- You want prompts versioned alongside your application code in git
- Creating an offline backup of specific prompts
- Sharing prompts with someone who doesn't use Promptmark
- Migrating prompts to another system
- Generating documentation that includes prompt content

## Execution

1. Ask the user what to export:
   - Specific prompt IDs
   - All prompts in a collection
   - All prompts with a specific tag
   - Everything
2. Ask for output format and destination directory
3. Fetch prompts with their metadata, variables, and version history
4. Write each prompt to a file with the chosen format
5. Generate an index file listing all exported prompts

## Example

```
/prompt-export
> What: collection "production"
> Format: markdown
> Destination: ./exported-prompts/
```

```
/prompt-export
> What: tag "api"
> Format: json
> Destination: ./prompts/
```

## Output Formats

### Markdown (with frontmatter)

```markdown
---
id: abc123
title: Customer Support Router
tags: [support, routing, production]
variables:
  category: { type: select, default: general, options: [billing, technical, general] }
  urgency: { type: select, default: normal, options: [low, normal, high, critical] }
created: 2026-01-15
updated: 2026-03-20
versions: 7
---

Route the following customer support request to the appropriate team...
```

### JSON

```json
{
  "id": "abc123",
  "title": "Customer Support Router",
  "content": "Route the following...",
  "tags": ["support", "routing", "production"],
  "variables": { ... },
  "versions": [ ... ]
}
```

### YAML

Same structure as JSON, in YAML format.

## Notes

- Version history export is optional (can be large)
- File naming: `<slug-of-title>.md` (or `.json`/`.yaml`)
- Includes an `index.md` or `index.json` listing all exported prompts
- Re-running export updates existing files (won't duplicate)
