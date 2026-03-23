# portfolio-publisher

Publishes a curated set of prompts as a cohesive public portfolio.

## Purpose

When you want to showcase your prompt engineering work publicly — whether for personal branding, team demonstration, or agency marketing — individual publishing isn't enough. You need consistency across titles, descriptions, tags, and quality. This skill batch-publishes a polished portfolio.

## Prerequisites

- Promptmark MCP server connected and authenticated
- Prompts to publish (in a collection or by ID list)
- A public profile set up on Promptmark

## MCP Tools Used

- `get_prompt` — retrieve prompts for review
- `list_collections` — resolve collection-based targets
- `update_prompt` — set is_public to publish each prompt
- `search_prompts` — verify published state via is_public filter

## Usage

```
Publish my "showcase" collection as a public portfolio.
```

```
Prepare and publish prompts abc123, def456, ghi789 as a portfolio
with consistent formatting.
```

## How It Works

1. Resolves target prompts (by collection or ID list)
2. Reviews each prompt for portfolio readiness:
   - Consistent naming conventions across the set
   - All have descriptions, tags, and template variable definitions
   - No PII, secrets, or placeholder content
3. Identifies and reports issues that need fixing
4. On confirmation, publishes all prompts in batch
5. Generates a shareable index:
   - Title and one-line description for each prompt
   - Link to each prompt on your public profile
   - Portfolio summary with themes and capabilities demonstrated

## Output

A published portfolio plus a markdown index you can share:

```markdown
# My Prompt Portfolio

## Data Engineering
- [Data Extraction Pipeline](https://promptmark.ai/u/username/data-extraction-pipeline) — Extracts structured data from unstructured documents
- [SQL Query Generator](https://promptmark.ai/u/username/sql-query-generator) — Generates optimized SQL from natural language

## Content Creation
- [Blog Post Writer](https://promptmark.ai/u/username/blog-post-writer) — Produces SEO-optimized blog posts with configurable tone
```
