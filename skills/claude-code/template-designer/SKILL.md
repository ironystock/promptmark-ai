---
description: "Convert a static prompt into a parameterized template with typed variables, defaults, and descriptions."
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
user-invocable: true
---

# template-designer

Converts a static prompt into a parameterized template with typed variables.

## When to Use

Use `/template-designer` when:
- You have a prompt with hardcoded values that should be configurable
- You're turning a one-off prompt into a reusable template
- You want to add proper type definitions and defaults to existing `{{variables}}`
- You're building a prompt library for a team and need consistent parameterization

## Execution

1. Retrieve the prompt via `get_prompt` and its existing variable definitions via `get_prompt_schema`
2. Analyze the content to identify parameterizable values:
   - Audiences, personas, or roles
   - Topics, subjects, or domains
   - Tone, style, or format preferences
   - Constraints (length, complexity, language)
   - Output format specifications
   - Any hardcoded value that could vary across use cases
3. For each identified variable:
   - Choose an appropriate type (`text`, `number`, `select`)
   - Set a sensible default (the current hardcoded value)
   - Write a clear description
   - For `select` types, define the option set
4. Replace hardcoded values with `{{variable_name}}` syntax
5. Update the prompt with the new template content and variable definitions
6. Create a version noting the parameterization changes

## Example

```
/template-designer
> Which prompt? blog-post-writer
```

Before:
```
Write a professional blog post about machine learning for software engineers.
Keep it under 1500 words. Use a conversational tone.
```

After:
```
Write a {{style}} blog post about {{topic}} for {{audience}}.
Keep it under {{max_words}} words. Use a {{tone}} tone.
```

Variables:
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `style` | select | professional | Writing style (professional, casual, academic, technical) |
| `topic` | text | machine learning | The subject to write about |
| `audience` | text | software engineers | Target reader persona |
| `max_words` | number | 1500 | Maximum word count |
| `tone` | select | conversational | Voice (conversational, formal, enthusiastic, neutral) |

## Notes

- Preserves the original prompt behavior when all defaults are used
- Won't over-parameterize — only extracts variables where configurability adds real value
- Respects existing `{{variables}}` and adds definitions for any that lack them
