---
description: "Validate template variables across your Promptmark prompts — catch undefined variables, orphaned definitions, type mismatches, and naming inconsistencies."
allowed-tools: Bash, Read, Grep, Glob
user-invocable: true
---

# /validate — Promptmark Variable Validation

Run a full validation pass on template variables across your Promptmark library.

## When to Use

- After bulk editing or importing prompts
- Before publishing (ensure all variables are properly defined)
- When template variables aren't resolving as expected
- As a periodic quality check

## What It Catches

| Issue | Severity | Example |
|-------|----------|---------|
| Undefined variable | Error | `{{urgency}}` in content, no schema definition |
| Orphaned definition | Warning | Variable defined but never used in content |
| Type mismatch | Error | `select` type with no options |
| Missing default | Warning | Variable with no default value |
| Typo candidates | Error | `{{categoriy}}` near `{{category}}` |
| Naming inconsistency | Warning | Mix of camelCase and snake_case |

## Execution

1. Call `list_prompts` to enumerate all prompts (or a filtered set)
2. For each prompt, call `get_prompt` to get content and `get_prompt_schema` for variable definitions
3. Compare variables in content (`{{name}}`) against schema definitions
4. Report issues grouped by prompt, ordered by severity
5. Offer auto-fix for simple issues (with user confirmation)

## Notes

- The PostToolUse hook runs a lightweight version of this automatically after every prompt edit
- This skill provides the comprehensive library-wide scan
- Auto-fix creates missing definitions with inferred types; removes orphaned definitions
