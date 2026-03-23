---
name: promptmark-audit
description: Run a health audit on your Promptmark library — find orphans, unused tags, and stale prompts
user-invocable: true
---

# Promptmark Library Audit

Scan your Promptmark library and report on health, coverage, and hygiene.

## What to Do

1. Use `promptmark_list_prompts` to enumerate all prompts
2. Use `promptmark_list_collections` to check collection health
3. Use `promptmark_list_tags` with `include_counts: true` to audit tags
4. Use `promptmark_get_versions` to check version activity

## What to Report

- Orphaned prompts (no collection, no tags)
- Empty collections (zero prompts)
- Unused tags (count = 0) and synonym candidates
- Prompts with no version activity
- Overall health score and top 5 cleanup actions
