# variable-validator

Validates template variable definitions and catches mismatches between content and schema.

## Purpose

Template variables are powerful but easy to get wrong — a typo in a variable name, a missing definition, or a mismatched type can cause silent failures. This skill audits your variables and catches issues before they bite.

## Prerequisites

- Promptmark MCP server connected and authenticated
- Prompts using template variables

## MCP Tools Used

- `get_prompt` — retrieve prompt content and variable definitions
- `list_prompts` — batch validation across library
- `update_prompt` — auto-fix simple issues

## Usage

```
Validate template variables across all my prompts.
```

```
Check variables in prompt "data-extraction-pipeline" for issues.
```

## What It Catches

| Issue | Example | Severity |
|-------|---------|----------|
| **Undefined variable** | `{{urgency}}` in content, no definition in schema | Error |
| **Orphaned definition** | Variable defined but never used in content | Warning |
| **Type mismatch** | `select` type with no options defined | Error |
| **Missing default** | Variable with no default value (required input every time) | Warning |
| **Missing description** | Variable has no description for users | Warning |
| **Name inconsistency** | Mix of `camelCase` and `snake_case` variable names | Warning |
| **Duplicate names** | Same variable name appearing twice in definitions | Error |
| **Typo candidates** | `{{categoriy}}` near `{{category}}` (Levenshtein distance 1) | Error |

## Output

```
Variable Validation: data-extraction-pipeline

ERRORS (2):
  - {{output_fields}} used in content but not defined in schema
  - {{strict_mode}} is type "select" but has no options

WARNINGS (1):
  - {{max_retries}} is defined but never appears in prompt content

All other variables OK (4/7 passed clean)

Auto-fix available for 2 issues. Apply? [y/n]
```

## Notes

- Can run across your entire library in batch mode
- Auto-fix creates missing definitions with inferred types
- Auto-fix removes orphaned definitions (with confirmation)
- Reports are grouped by prompt when run in batch
