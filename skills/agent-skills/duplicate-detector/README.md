# duplicate-detector

Finds semantically similar or duplicate prompts in your library.

## Purpose

Libraries accumulate duplicates — slightly different versions of the same prompt created at different times, or prompts that evolved to do the same thing. This skill finds them, shows the diffs, and helps you consolidate.

## Prerequisites

- Promptmark MCP server connected and authenticated
- A library with enough prompts for duplicates to be likely (15+)

## MCP Tools Used

- `list_prompts` — enumerate all prompts
- `get_prompt` — retrieve content for comparison
- `search_prompts` — find prompts with similar content
- `delete_prompt` — remove duplicates (with user confirmation)

## Usage

```
Find duplicate prompts in my library.
```

```
Check my "customer-support" collection for overlapping prompts.
```

## How It Works

1. Retrieves all prompts (or prompts in a specified collection/tag)
2. Compares prompts pairwise for content similarity
3. Groups duplicates and near-duplicates into clusters
4. For each cluster, shows:
   - Side-by-side content diffs
   - Which prompt has more versions (indicates more active use)
   - Which was created/updated more recently
   - Which has richer metadata (tags, variables, descriptions)
5. Recommends which to keep based on the signals above
6. Offers to archive or delete the rest (with confirmation)

## Similarity Detection

- **Exact duplicates** — identical content (possibly different titles)
- **Near-duplicates** — same structure with minor wording differences
- **Functional duplicates** — different wording but same purpose and output
- **Superseded** — one prompt is clearly an evolution of another
