---
description: "Pre-publish review for Promptmark prompts — check safety, metadata completeness, and quality before making prompts public."
allowed-tools: Bash, Read, Grep, Glob
user-invocable: true
---

# /publish-check — Promptmark Pre-Publish Review

Run a thorough pre-publish check on one or more prompts before making them public.

## When to Use

- Before publishing a prompt to your public profile
- Before publishing an entire collection
- When the PreToolUse hook blocked a publish and you want details
- As a quality gate for team prompt reviews

## What It Checks

### Blockers (must fix)
- PII: email addresses, phone numbers, physical addresses
- Secrets: API keys, tokens, passwords, connection strings
- Injection risk: unguarded user input sections

### Warnings (should fix)
- Missing or generic title
- Empty description
- No tags (hurts discoverability)
- Template variables without defaults or descriptions
- Safety scan flags not acknowledged

### Quality
- Prompt length (too short or excessively long)
- Output format specification present
- Consistent formatting
- Latest version has a descriptive note

## Execution

1. Retrieve the prompt via `get_prompt`
2. Get the variable schema via `get_prompt_schema`
3. Run all checks listed above
4. If safety scan flags exist, list them and explain the `acknowledge_scan` workflow
5. Present findings grouped by severity
6. Offer to fix what's fixable automatically

## Notes

- The PreToolUse hook runs a fast version of the safety checks automatically on every publish attempt
- This skill provides the full quality review with actionable feedback
- Use this BEFORE the first publish attempt to avoid the hook blocking you
