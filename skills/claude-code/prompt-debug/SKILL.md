---
description: "Diagnose why a prompt produces unexpected output — analyzes structure, compares versions, and suggests targeted fixes."
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
user-invocable: true
---

# prompt-debug

Diagnoses why a prompt isn't working as expected.

## When to Use

Use `/prompt-debug` when:
- A prompt is producing inconsistent or wrong output
- Output quality degraded after a recent edit
- A prompt works with one model but fails with another
- You can't figure out why a prompt behaves differently than intended

## Execution

1. Retrieve the prompt via `get_prompt`
2. Ask the user to describe the unexpected behavior
3. Analyze the prompt for common failure patterns:
   - **Conflicting instructions** — two parts of the prompt ask for contradictory things
   - **Ambiguous constraints** — instructions that can be interpreted multiple ways
   - **Missing output format** — no explicit specification of expected output structure
   - **Overly broad scope** — too many tasks in a single prompt
   - **Variable misuse** — template variables used in confusing contexts
   - **Model mismatch** — instructions that assume capabilities the target model lacks
4. If the prompt has versions, compare against the last known-good version:
   - Diff the versions to identify what changed
   - Pinpoint which change likely caused the regression
5. Propose targeted fixes with explanations
6. Optionally create a fixed version

## Example

```
/prompt-debug
> Which prompt? data-extraction-pipeline
> Problem: It's returning empty arrays for the "contacts" field even
>          when the input clearly has contact information.
```

Output:
```
Diagnosis: data-extraction-pipeline

ROOT CAUSE: The extraction instruction on line 7 says "extract all
contacts" but line 12 constrains output to "only include fields with
validated email addresses." Contacts without emails are being silently
dropped.

REGRESSION: This was introduced in v4 (2026-03-15) when the validation
constraint was added. v3 extracted all contacts correctly.

FIX: Separate email validation from contact extraction. Extract all
contacts, then flag which ones have validated emails in a sub-field.

[Create fixed version? y/n]
```

## Common Failure Patterns

| Pattern | Symptom | Typical Fix |
|---------|---------|-------------|
| Conflicting instructions | Inconsistent output | Remove or reconcile contradictions |
| Missing output spec | Wrong format | Add explicit format/schema |
| Overly broad scope | Partial completion | Split into focused sub-prompts |
| Implicit assumptions | Works on one model, fails on another | Make assumptions explicit |
| Variable context | Weird interpolation results | Clarify variable placement and purpose |
