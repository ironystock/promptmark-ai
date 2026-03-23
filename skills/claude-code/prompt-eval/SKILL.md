---
description: "Run a prompt against multiple models and compare outputs side-by-side with quality annotations."
allowed-tools: Bash, Read, Grep, Glob, Edit, Write, WebFetch
user-invocable: true
---

# prompt-eval

Runs a prompt against multiple BYOK models and compares outputs side-by-side.

## When to Use

Use `/prompt-eval` when:
- Choosing which model to pair with a prompt
- Comparing output quality across providers (OpenRouter, OpenAI, Anthropic)
- Validating that a prompt works consistently across model families
- Benchmarking a prompt update against multiple models before committing

## Execution

1. Retrieve the target prompt via `get_prompt` (by ID or search)
2. Ask the user which models to compare (they must have BYOK keys configured)
3. Validate template variables via `validate_prompt_inputs` and resolve the prompt via `render_prompt`
4. Execute the rendered prompt against 2-4 selected models
5. Present results in a comparison table with annotations:
   - Output completeness (did the model follow all instructions?)
   - Format compliance (did it match the requested output structure?)
   - Quality notes (hallucinations, hedging, verbosity)
   - Token usage per model
6. Recommend the best model for this prompt with rationale

## Example

```
/prompt-eval
> Which prompt? customer-support-router
> Variables: category=billing, urgency=high
> Models: gpt-4o, claude-sonnet-4-5, llama-3.1-70b
```

Output: side-by-side comparison table with quality scores and a recommendation.

## Notes

- Requires BYOK API keys configured for the models you want to test
- Template variables are resolved before sending to each model
- Results can be stored in Promptmark via `capture_response` for traceability
- Results are presented locally — nothing is saved to Promptmark unless you choose to capture or version the findings
