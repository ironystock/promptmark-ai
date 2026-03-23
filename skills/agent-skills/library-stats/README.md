# library-stats

Generates a rich analytics report on your prompt library.

## Purpose

Understand your library at a glance — how many prompts, how actively they're versioned, which tags dominate, what's published, and where the gaps are. Useful for teams tracking growth and individuals wanting a dashboard view.

## Prerequisites

- Promptmark MCP server connected and authenticated

## MCP Tools Used

- `user_stats` — aggregate metrics
- `user_profile` — account context
- `list_prompts` — enumerate prompts for analysis
- `list_collections` — collection metrics
- `list_tags` — tag distribution
- `list_versions` — version activity per prompt

## Usage

```
Show me stats on my prompt library.
```

```
Generate a library analytics report for our team review.
```

## Report Contents

| Section | Metrics |
|---------|---------|
| **Overview** | Total prompts, collections, tags, versions |
| **Activity** | Most recently updated, most versioned, newest, oldest |
| **Publishing** | Published vs. private ratio, most shared prompts |
| **Tags** | Tag distribution, most/least used, untagged prompt count |
| **Collections** | Collection sizes, largest, smallest, empty |
| **Variables** | Prompts using template variables, most common variable names/types |
| **Versioning** | Average versions per prompt, prompts with 1 version vs. many |

## Output

Structured markdown report suitable for sharing in a team channel or including in a status update. Includes both raw numbers and insights ("78% of your prompts have no version beyond the initial — consider versioning before edits").
