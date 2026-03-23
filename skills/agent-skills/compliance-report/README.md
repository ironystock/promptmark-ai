# compliance-report

Generates an auditable report of all prompts, their versions, sharing status, and safety posture.

## Purpose

For teams in regulated industries or agencies with audit requirements, you need to demonstrate governance over your AI prompt assets. This skill produces a formal report suitable for internal audits, compliance reviews, or client deliverables.

## Prerequisites

- Promptmark MCP server connected and authenticated

## MCP Tools Used

- `list_prompts` — enumerate all prompts
- `get_prompt` — full metadata for each prompt
- `get_prompt_versions` — version history
- `search_prompts` — find published prompts via is_public filter
- `list_collections` — organizational structure
- `list_tags` — categorization

## Usage

```
Generate a compliance report for our quarterly audit.
```

```
Produce an auditable inventory of all published prompts.
```

## Report Structure

### 1. Executive Summary
- Total prompts, collections, tags
- Published vs. private ratio
- Version activity summary
- Report generation timestamp

### 2. Prompt Inventory

| ID | Title | Created | Last Modified | Versions | Status | Collection | Tags |
|----|-------|---------|---------------|----------|--------|------------|------|
| abc123 | Support Router | 2026-01-15 | 2026-03-20 | 7 | Published | Production | support, routing |

### 3. Publishing Audit
- All publicly shared prompts with sharing dates
- Any prompts that were published then unpublished (with dates)
- Public profile URL

### 4. Version Activity
- Prompts with most active version histories
- Prompts unchanged since creation
- Version frequency distribution

### 5. Safety Posture
- Prompts with template variables accepting user input (injection surface)
- Prompts flagged by safety scanning (if any)
- Hardened vs. un-hardened prompt ratio

### 6. Organizational Coverage
- Collection completeness (orphaned prompts)
- Tag coverage
- Uncategorized or untagged prompts

## Output Formats

- **Markdown** — for sharing in docs or wikis
- **JSON** — for programmatic consumption or further analysis

## Notes

- Designed to be run periodically (monthly, quarterly)
- Includes timestamps for audit trail purposes
- Can be scoped to specific collections or tags
- Does not modify any data — strictly read-only
