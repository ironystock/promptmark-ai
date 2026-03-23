# prompt-optimizer

Analyzes a prompt and produces a structurally improved version with explanations for each change.

## Purpose

Takes a prompt that's "working but not great" and makes it better. Identifies common weaknesses — ambiguity, missing constraints, poor formatting, lack of output specification, inefficient token usage — and produces a new version with concrete improvements. Each change is explained so you learn, not just receive.

## Prerequisites

- Promptmark MCP server connected and authenticated
- At least one prompt in your library to optimize

## MCP Tools Used

- `get_prompt` — retrieve the prompt to analyze
- `create_version` — save the optimized version
- `diff_versions` — show what changed

## Usage

Ask your AI agent to optimize a prompt:

```
Optimize my prompt "customer-support-router" — it's getting inconsistent
output formats across different inputs.
```

```
Review and improve prompt ID abc123 — focus on reducing token usage
while keeping the same output quality.
```

## What It Checks

1. **Clarity** — Are instructions unambiguous? Could they be misinterpreted?
2. **Specificity** — Are constraints concrete or vague? ("be concise" vs "respond in under 100 words")
3. **Output format** — Is the expected output structure explicitly defined?
4. **Variable design** — Are template variables well-named with clear purposes?
5. **Token efficiency** — Can the same instructions be expressed more concisely?
6. **Model fit** — Are instructions appropriate for the target model's strengths?
7. **Edge cases** — Does the prompt handle unusual inputs gracefully?

## Output

The optimizer creates a new version of the prompt with:
- The improved content
- A version note listing each change and its rationale
- Before/after comparison via `diff_versions`
