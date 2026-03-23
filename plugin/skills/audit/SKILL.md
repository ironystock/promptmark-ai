---
description: "Run a Promptmark library health audit — find orphaned prompts, unused tags, empty collections, and stale content."
allowed-tools: Bash, Read, Grep, Glob
user-invocable: true
---

# /audit — Promptmark Library Health Check

Run a detailed audit of your Promptmark library and get a prioritized list of cleanup actions.

## When to Use

- After a period of rapid prompt creation (things get messy)
- Before publishing a set of prompts (ensure quality)
- When onboarding a team to Promptmark (assess current state)
- Periodically for library hygiene

## What It Checks

| Check | What it finds |
|-------|--------------|
| Orphaned prompts | No collection, no tags |
| Empty collections | Collections with zero prompts |
| Unused tags | Tags not applied to any prompt |
| Stale prompts | No version activity in 90+ days |
| Tag sprawl | Synonymous tags, one-off tags |
| Collection imbalance | Collections with 1 prompt vs. 50+ |
| Incomplete metadata | Missing descriptions, empty titles |

## Execution

1. Call `list_prompts`, `list_collections`, `list_tags` via the Promptmark MCP server
2. For prompts with version concerns, check `get_prompt_versions`
3. Analyze the data for the issues listed above
4. Produce a structured report:
   - Health score (A through F)
   - Issue breakdown by severity (critical, warning, info)
   - Top 5 recommended actions
   - Summary metrics

## Notes

- The SessionStart hook shows a brief health summary automatically
- This skill provides the full detailed audit
- Suggest fixes but don't auto-apply — let the user decide
