# safety-audit

Runs a comprehensive safety review across all prompts before bulk publishing.

## Purpose

Before making prompts public — whether a single prompt or an entire portfolio — you need to know they're clean. This skill pre-screens your library for the same issues Promptmark's publish-time scanner checks, giving you a heads-up before you hit publish.

## Prerequisites

- Promptmark MCP server connected and authenticated
- Prompts to audit (all, by collection, or by tag)

## MCP Tools Used

- `list_prompts` — enumerate target prompts
- `get_prompt` — retrieve content for analysis
- `list_collections` — resolve collection-based targets

## Usage

```
Run a safety audit on all my prompts.
```

```
Audit the "production" collection before we publish it.
```

```
Safety-check everything tagged "client-facing".
```

## What It Scans

| Category | What It Detects |
|----------|----------------|
| **PII** | Email addresses, phone numbers, physical addresses, names, SSNs, credit card numbers |
| **Secrets** | API keys, tokens, passwords, connection strings, private keys |
| **Injection risk** | Unguarded user input sections, missing delimiters, prompt injection surfaces |
| **Content moderation** | Instructions that could generate harmful, biased, or inappropriate content |
| **Data leakage** | Internal URLs, file paths, database names, infrastructure details |

## Output

Each prompt is classified:

| Classification | Meaning |
|---------------|---------|
| **Safe** | No issues detected — ready to publish |
| **Needs review** | Medium-severity findings that warrant human review |
| **Blocked** | High-severity findings that must be fixed before publishing |

```
Safety Audit Report — "production" collection (12 prompts)

SAFE: 9 prompts
NEEDS REVIEW: 2 prompts
  - email-generator: Contains a hardcoded example email (line 14)
  - api-caller: References internal API endpoint (line 8)
BLOCKED: 1 prompt
  - legacy-auth-helper: Contains what appears to be a base64-encoded token (line 22)

Recommendation: Fix 1 blocker, review 2 warnings, then publish.
```

## Notes

- This is a pre-screen, not a guarantee — Promptmark's publish-time scanner is the final gate
- Catches issues early so you can fix them before attempting to publish
- Reports include line numbers and specific content excerpts
- Pair with `injection-hardener` to fix injection risks found during audit
