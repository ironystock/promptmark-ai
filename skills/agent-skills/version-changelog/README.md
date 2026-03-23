# version-changelog

Generates a human-readable changelog from a prompt's version history.

## Purpose

When a prompt has been through many iterations, it's hard to remember what changed and why. This skill reads the version history, diffs consecutive versions, and produces a changelog that tells the story of a prompt's evolution.

## Prerequisites

- Promptmark MCP server connected and authenticated
- A prompt with multiple versions

## MCP Tools Used

- `get_prompt` — retrieve the prompt
- `get_prompt_versions` — enumerate version history
- `get_prompt_version` — retrieve specific version content for comparison

## Usage

```
Generate a changelog for my prompt "data-extraction-pipeline".
```

```
Show me the evolution of prompt abc123 — what changed in each version?
```

## Output Example

```markdown
# Changelog: data-extraction-pipeline

## v5 (2026-03-20)
- Added JSON schema output constraint
- Reduced max token budget from 2000 to 1200
- **Why:** Output was inconsistent without schema enforcement

## v4 (2026-03-15)
- Added {{output_format}} template variable
- Made extraction fields configurable via {{fields}} variable
- **Why:** Needed to reuse the prompt across invoice and receipt extraction

## v3 (2026-02-28)
- Rewrote instructions for clarity
- Added edge case handling for empty input
- **Why:** Model was hallucinating fields when given blank documents

## v2 (2026-02-10)
- Added few-shot examples section
- **Why:** Zero-shot accuracy was below 80%

## v1 (2026-01-15)
- Initial version
```

## Notes

- Each version entry describes what changed and infers why from the diff
- Version notes (if present) are incorporated as-is
- Can be exported as markdown or displayed inline
- Useful for sharing prompt evolution context with teammates
