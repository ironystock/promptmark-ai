---
description: "Generate a complete, well-structured prompt from a brief natural-language description."
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
user-invocable: true
---

# prompt-scaffold

Generates a full prompt from a one-sentence description.

## When to Use

Use `/prompt-scaffold` when:
- Starting a new prompt from scratch and want a solid foundation
- You know what you want the prompt to do but don't want to write the boilerplate
- You want to follow prompt engineering best practices without remembering all of them
- You need a prompt quickly and will iterate later

## Execution

1. Ask the user for a brief description of what the prompt should do
2. Optionally ask for target model and use case context
3. Generate a complete prompt with:
   - **Role/context framing** — who the AI is and what context it operates in
   - **Clear instructions** — step-by-step task description
   - **Output format specification** — exactly what the response should look like
   - **Edge case handling** — what to do with unexpected or missing input
   - **Template variables** — configurable parts with types, defaults, and descriptions
4. Create the prompt in Promptmark via `create_prompt`
5. Apply relevant tags based on the content
6. Present the created prompt for review

## Example

```
/prompt-scaffold
> What should it do? Extract structured data from invoices and output JSON
```

Creates a prompt with:
- Role: "You are a document extraction specialist..."
- Instructions: step-by-step extraction process
- Output format: JSON schema with required fields
- Edge cases: missing fields, multiple currencies, handwritten text
- Variables: `{{document_type}}` (select: invoice/receipt/po), `{{output_fields}}` (text), `{{strict_mode}}` (select: true/false)
- Tags: `extraction`, `json`, `documents`

## Prompt Structure

Every scaffolded prompt follows this pattern:

```
[Role and context]

[Task instructions — numbered steps]

[Input specification — what the user will provide]

[Output format — exact structure expected]

[Constraints and edge cases]

[Examples (if appropriate)]
```

## Notes

- The scaffold is a starting point — always review and iterate
- Uses prompt engineering best practices: specificity, output format, edge case handling
- Template variables are added where parameterization adds genuine reuse value
- Pairs well with `prompt-critique` for a review of the generated prompt
