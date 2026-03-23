---
description: "Invoke pitchlady-savant for product marketing tasks: README copy, skill descriptions, integration overviews, and public-facing messaging."
allowed-tools: Bash, Read, Grep, Glob, Task, Edit, Write, WebFetch, WebSearch
user-invocable: true
---

# Product Marketing — pitchlady-savant

Invoke the pitchlady-savant agent for product marketing and public-facing content tasks.

## When to Use

Use `/pitch` when:
- Writing or rewriting the repo README
- Creating skill catalog descriptions
- Writing integration overview copy
- Crafting headlines, CTAs, or microcopy
- Developing messaging strategy or value propositions
- Reviewing public-facing content for conversion quality
- Writing CONTRIBUTING.md or other community-facing docs

## Execution

Delegate the task to the `pitchlady-savant` agent. Pass the user's request as context along with any relevant existing content or requirements.

The agent has:
- **Write access** to create and edit content files
- **Web search** for competitor research and inspiration
- **Codebase access** to read existing pages and content
- **Knowledge of Promptmark's** product, audience, and brand voice

When invoking the agent, do NOT pass a `model` parameter — let it use its configured model from YAML frontmatter.
