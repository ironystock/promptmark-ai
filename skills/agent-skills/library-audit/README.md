# library-audit

Scans your entire prompt library and reports on health, coverage, and hygiene.

## Purpose

Libraries grow organically and accumulate cruft. This skill gives you an honest assessment of your library's state — orphaned prompts, unused tags, empty collections, stale content, duplicates — with prioritized cleanup actions.

## Prerequisites

- Promptmark MCP server connected and authenticated
- A library with enough prompts to benefit from auditing (10+)

## MCP Tools Used

- `list_prompts` — enumerate all prompts
- `get_prompt` — inspect individual prompts for completeness
- `list_collections` — find empty or underused collections
- `list_tags` — identify unused or redundant tags
- `get_prompt_versions` — check version activity per prompt

## Usage

```
Audit my prompt library — give me a health report.
```

```
Run a library audit focused on tag hygiene and orphaned prompts.
```

## What It Checks

| Check | What it finds |
|-------|--------------|
| **Orphaned prompts** | Prompts with no collection and no tags |
| **Empty collections** | Collections with zero prompts |
| **Unused tags** | Tags not applied to any prompt |
| **Stale prompts** | Prompts with no version activity in 90+ days |
| **Unversioned prompts** | Prompts that have never been versioned beyond initial creation |
| **Incomplete metadata** | Missing descriptions, empty titles, no template variable definitions |
| **Near-duplicates** | Prompts with substantially similar content |
| **Tag sprawl** | Synonymous tags (e.g., "support" and "customer-support") |
| **Collection imbalance** | Collections with 1 prompt vs. collections with 50+ |

## Output

Structured report with:
- **Health score** — overall library grade (A through F)
- **Issue breakdown** — grouped by severity (critical, warning, info)
- **Top 5 actions** — the highest-impact cleanup tasks, ordered by effort vs. benefit
- **Metrics summary** — total prompts, collections, tags, versions, publishing rate
