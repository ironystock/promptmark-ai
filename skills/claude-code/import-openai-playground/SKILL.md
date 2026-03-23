---
description: "Import prompts from OpenAI Playground exports — maps messages, model settings, and template variables."
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
user-invocable: true
---

# import-openai-playground

Imports prompts from exported OpenAI Playground JSON.

## When to Use

Use `/import-openai-playground` when:
- Migrating from OpenAI Playground to Promptmark
- You have saved Playground configs you want to preserve and version
- You want to centralize prompts that are currently scattered across Playground sessions

## Execution

1. Ask for the path to the export file(s) — JSON from Playground
2. Parse each file, extracting:
   - System message → prompt content (primary instruction)
   - User/assistant message pairs → few-shot examples section
   - Model name → tag (e.g., `gpt-4o`, `gpt-4-turbo`)
   - Temperature, top_p, max_tokens → metadata in description
3. Detect implicit template variables in the content
4. Preview the import: title, content, tags, variables
5. Create each prompt via `create_prompt` on confirmation
6. Optionally group into a "playground-imports" collection

## Example

```
/import-openai-playground
> Path: ./playground-exports/*.json
```

## Supported Formats

- OpenAI Playground "Save as JSON" export
- OpenAI API request format (`messages` array with `role`/`content`)
- ChatML-style format

## Mapping

| Playground Field | Promptmark Field |
|------------------|-----------------|
| System message | Prompt content |
| User/assistant pairs | Few-shot examples (appended to content) |
| Model name | Tag |
| Temperature | Description metadata |
| `{variable}` in content | Template variable (auto-detected) |

## Notes

- Preserves model settings as descriptive metadata, not executable config
- Handles both single-file and batch (glob pattern) imports
- Duplicate detection: warns if similar content already exists in your library
