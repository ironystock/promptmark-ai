---
description: "Import prompts from awesome-chatgpt-prompts-style markdown files into Promptmark."
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
user-invocable: true
---

# import-awesome-prompts

Imports prompts from curated awesome-prompts-style markdown collections.

## When to Use

Use `/import-awesome-prompts` when:
- You have a markdown file or repo following the awesome-chatgpt-prompts format
- You want to import a community prompt collection into your Promptmark library
- You're migrating from a markdown-based prompt collection to structured management

## Execution

1. Ask for the path to the markdown file(s)
2. Parse the file, detecting the format:
   - `## Heading` + quote block → heading is title, quote is content
   - `## Heading` + paragraph → heading is title, paragraph is content
   - Table format → columns map to title and content
3. For each extracted prompt:
   - Title from heading
   - Content from the body
   - Tags inferred from content (role-based: "assistant", "writer", "coder", etc.)
   - Template variables detected from `{{var}}` or `{var}` patterns
4. Preview the import with count and sample
5. Create prompts on confirmation
6. Group into a collection named after the source file

## Example

```
/import-awesome-prompts
> Path: ./awesome-chatgpt-prompts/prompts.md
```

```
/import-awesome-prompts
> Path: ./curated-prompts/**/*.md
```

## Supported Formats

### Heading + Quote (most common)

```markdown
## Act as a Linux Terminal
> I want you to act as a linux terminal. I will type commands and you will
> reply with what the terminal should show.
```

### Heading + Paragraph

```markdown
## Linux Terminal Simulator
I want you to act as a linux terminal...
```

### Table Format

```markdown
| Act | Prompt |
|-----|--------|
| Linux Terminal | I want you to act as... |
```

## Notes

- Handles files with 100+ prompts efficiently
- Infers "act as X" pattern into role-based tags
- Deduplicates against existing library content
- Preserves original formatting within prompt content
