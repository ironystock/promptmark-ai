# prompt-critique

Provides a structured, opinionated review of a prompt's effectiveness.

## Purpose

Think of this as a code review, but for prompts. Evaluates a prompt across multiple dimensions and returns a scorecard with actionable recommendations. Helps teams maintain prompt quality standards and helps individuals improve their prompt engineering skills.

## Prerequisites

- Promptmark MCP server connected and authenticated
- A prompt to review

## MCP Tools Used

- `get_prompt` — retrieve the prompt to critique
- `update_prompt` — optionally save an improved version incorporating suggestions (auto-versions)

## Usage

```
Critique my prompt "data-extraction-pipeline" — I need it to be
production-ready.
```

```
Review prompt abc123 with a focus on safety and injection resistance.
```

## Scorecard Dimensions

Each dimension is scored 1-5 with specific feedback:

| Dimension | What it measures |
|-----------|-----------------|
| **Clarity** | Can the instructions be misinterpreted? Are there ambiguities? |
| **Specificity** | Are constraints concrete and measurable? |
| **Safety** | Is the prompt resistant to injection? Does it handle adversarial input? |
| **Output format** | Is the expected output structure explicitly defined and enforceable? |
| **Variable design** | Are template variables well-typed, well-named, with sensible defaults? |
| **Model fit** | Are the instructions appropriate for the target model's capabilities? |
| **Reusability** | Could this prompt be used across different contexts with variable changes? |
| **Efficiency** | Is the prompt concise without sacrificing clarity? |

## Output

- Scorecard with dimension-by-dimension ratings
- Top 3 priority improvements with specific rewrite suggestions
- Overall assessment: production-ready, needs-work, or major-revision
- Optional: creates a new version with the suggested improvements applied
