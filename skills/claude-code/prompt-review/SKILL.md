---
description: "Structured peer review of prompt changes — compares versions, checks intent preservation, safety, and regressions."
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
user-invocable: true
---

# prompt-review

Code-review-style feedback on prompt changes.

## When to Use

Use `/prompt-review` when:
- A teammate made changes to a shared prompt and you want to review them
- You're about to commit a prompt update and want a sanity check
- You want to verify that a prompt edit didn't introduce regressions
- Your team has a prompt review process and needs structured feedback

## Execution

1. Retrieve the prompt and its version history via `get_prompt` and `list_versions`
2. Identify what changed:
   - Compare current vs. previous version, or
   - Compare two specific versions the user identifies
3. Produce a structured review covering:
   - **Intent preservation** — does the prompt still do what it's supposed to?
   - **Variable changes** — were variables added, removed, or renamed?
   - **Safety implications** — did changes introduce injection surfaces or remove guardrails?
   - **Clarity** — is the prompt more or less clear after the change?
   - **Regressions** — could any change cause previously working inputs to fail?
4. Present the review with specific line-level comments

## Example

```
/prompt-review
> Which prompt? customer-support-router
> Compare: latest vs. v3
```

Output:
```
Review: customer-support-router (v5 vs v3)

CHANGES:
+ Added urgency-based routing logic (lines 4-8)
+ New variable {{escalation_threshold}} (type: number, default: 3)
~ Rewrote output format from free-text to JSON schema

REVIEW:
[OK] Intent preserved — still routes support tickets
[OK] New variable is well-typed with sensible default
[WARN] JSON output format is more rigid — ensure downstream consumers
       can parse the new format
[WARN] Escalation threshold of 3 may be too low for high-volume queues
       — consider making the default configurable per-team

VERDICT: Approve with suggestions
```

## Notes

- Works on any prompt with at least 2 versions
- Review format is designed to be shareable with teammates
- Pairs well with `prompt-critique` for deeper quality analysis
