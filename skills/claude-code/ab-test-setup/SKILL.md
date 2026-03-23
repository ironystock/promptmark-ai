---
description: "Create versioned prompt variants for systematic A/B testing with structured test plans."
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
user-invocable: true
---

# ab-test-setup

Creates versioned prompt variants for systematic A/B testing.

## When to Use

Use `/ab-test-setup` when:
- You want to test whether a different instruction style improves output quality
- You need to compare tone, structure, length, or constraint approaches
- You're running formal prompt evaluations and need controlled variants
- You want to isolate which part of a prompt drives a specific behavior

## Execution

1. Retrieve the base prompt via `get_prompt`
2. Ask the user what dimension to vary (tone, structure, length, instruction style, output format, constraint approach)
3. Generate N variations (default: 3) — each making a single controlled change to the target dimension
4. Store each variant as a named version with metadata:
   - What was changed and why
   - Which dimension was targeted
   - Hypothesis for expected impact
5. Output a structured test plan:
   - Test inputs (suggested variable values to test with)
   - Evaluation criteria (what to measure)
   - Comparison method (side-by-side, blind rating, metric-based)

## Example

```
/ab-test-setup
> Which prompt? email-generator
> Dimension to vary: tone
> Number of variants: 3
```

Creates versions:
- `v2-tone-formal` — corporate/professional tone instructions
- `v2-tone-casual` — conversational/friendly tone instructions
- `v2-tone-concise` — minimal/direct tone instructions

Plus a test plan with suggested email scenarios to run through each variant.

## Notes

- All variants are stored as versions of the same prompt — easy to diff and compare
- The base prompt is preserved unchanged
- Version notes include the full test plan for future reference
- Pair with `prompt-eval` to execute the test across models
