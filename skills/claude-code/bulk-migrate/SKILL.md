---
description: "Import prompts from local files (markdown, YAML, JSON, plain text) into Promptmark with auto-detected template variables."
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
user-invocable: true
---

# bulk-migrate

Imports prompts from local files into Promptmark.

## When to Use

Use `/bulk-migrate` when:
- Moving from file-based prompt management to Promptmark
- Importing a directory of prompt files from another project
- Migrating prompts from a repo or shared drive
- Onboarding a team that has prompts scattered across files

## Execution

1. Ask the user for the source path and optional glob pattern
2. Scan matching files and detect format (markdown, YAML, JSON, plain text)
3. For each file, extract:
   - Title (from filename, frontmatter, or first heading)
   - Content (the prompt body)
   - Tags (from frontmatter, directory structure, or content analysis)
   - Template variables (auto-detect `{{var}}`, `{var}`, `{{ var }}`, `<var>` syntax)
4. Present a preview of what will be imported
5. On confirmation, create each prompt via `create_prompt`
6. Optionally create a collection for the import batch
7. Report results: created, skipped (duplicates), failed

## Example

```
/bulk-migrate
> Source: ./prompts/**/*.md
```

```
/bulk-migrate
> Source: ./team-prompts/
> Collection: imported-2026-03
```

## Supported Formats

| Format | Detection | Title Source | Variable Syntax |
|--------|-----------|-------------|-----------------|
| Markdown | `.md` extension | First `#` heading or filename | `{{var}}`, `{var}` |
| YAML | `.yml`/`.yaml` extension | `title` or `name` field | `{{var}}`, `{var}` |
| JSON | `.json` extension | `title` or `name` field | `{{var}}`, `{var}` |
| Plain text | `.txt` or fallback | Filename | `{{var}}`, `{var}` |
| Markdown + frontmatter | `.md` with `---` block | Frontmatter `title` | `{{var}}`, `{var}` |

## Variable Syntax Translation

Common formats are auto-detected and normalized to Promptmark's `{{variable}}` syntax:

- LangChain: `{variable}` → `{{variable}}`
- Jinja: `{{ variable }}` → `{{variable}}`
- XML-style: `<variable>` → `{{variable}}` (with confirmation, since this can be ambiguous)

## Notes

- Duplicate detection: skips files whose content matches an existing prompt
- Dry-run mode: preview what will be imported without creating anything
- Preserves directory structure as tags (e.g., `prompts/support/greeting.md` → tag: `support`)
