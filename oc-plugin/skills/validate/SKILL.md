---
name: promptmark-validate
description: Validate template variables across Promptmark prompts — catch undefined variables and schema issues
user-invocable: true
---

# Promptmark Variable Validation

Check template variables for issues across your prompt library.

## What to Do

1. Use `promptmark_list_prompts` to enumerate prompts
2. For each prompt, use `promptmark_get_prompt` to read content
3. Use `promptmark_get_schema` to get variable definitions
4. Compare `{{variables}}` in content against schema definitions

## What to Report

- Undefined variables (in content but not in schema)
- Orphaned definitions (in schema but not in content)
- Select variables with no options
- Variables without defaults
- Naming inconsistencies (camelCase vs snake_case mix)
