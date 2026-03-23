---
description: "Pre-flight checklist before publishing a prompt — checks quality, safety, and metadata completeness."
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
user-invocable: true
---

# publish-prep

Prepares a prompt for public sharing with a comprehensive pre-flight check.

## When to Use

Use `/publish-prep` when:
- You're about to publish a prompt to your public profile
- You want to verify a prompt meets quality standards before sharing
- You need to check for PII, secrets, or injection risks before going public
- You want to ensure your published prompt looks professional

## Execution

1. Retrieve the prompt via `get_prompt`
2. Run the pre-flight checklist (see below)
3. If safety scan issues exist, review and `acknowledge_scan` as appropriate
4. Present findings grouped by severity (blocker, warning, suggestion)
5. Offer to fix issues automatically where possible
6. On all-clear, confirm readiness to publish

## Pre-Flight Checklist

### Blockers (must fix before publishing)

- [ ] **PII scan** — no email addresses, phone numbers, names, or addresses in prompt content
- [ ] **Secrets scan** — no API keys, tokens, passwords, or connection strings
- [ ] **Injection risk** — no unguarded user input sections that could be exploited

### Warnings (should fix)

- [ ] **Title** — clear, descriptive, not generic ("Untitled" or "test")
- [ ] **Description** — present and meaningful (not empty or placeholder)
- [ ] **Tags** — at least 2 relevant tags for discoverability
- [ ] **Template variables** — all variables have descriptions and defaults
- [ ] **Default output** — prompt produces useful output with default variable values

### Suggestions (nice to have)

- [ ] **Length** — prompt is neither too short (under 50 chars) nor excessively long
- [ ] **Formatting** — consistent formatting, clear sections
- [ ] **Output format** — explicitly specifies expected output structure
- [ ] **Version note** — latest version has a descriptive note

## Example

```
/publish-prep
> Which prompt? data-extraction-pipeline
```

Output:
```
Pre-flight check for "data-extraction-pipeline"

BLOCKERS: 0
WARNINGS: 1
  - Missing description (currently empty)
SUGGESTIONS: 2
  - Consider adding an output format specification
  - Variable "fields" has no default value

Ready to publish after addressing 1 warning.
```
