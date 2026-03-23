---
title: Git Commit Message
description: Generates a conventional commit message from a diff or description of changes.
tags: [git, development, commit, conventional-commits]
technique: Constrained output format
complexity: beginner
variables:
  commit_style:
    type: select
    default: conventional
    options: [conventional, angular, gitmoji, simple]
    description: Commit message style convention
  max_subject_length:
    type: number
    default: 72
    description: Maximum characters for the subject line
  changes:
    type: text
    description: The diff or description of what changed
---

Generate a git commit message for the following changes using the **{{commit_style}}** convention.

## Changes

{{changes}}

## Rules

1. **Subject line**: Maximum {{max_subject_length}} characters. Imperative mood ("add" not "added", "fix" not "fixes").
2. **Type**: Choose the most specific type that fits:
   - `feat` — new feature or capability
   - `fix` — bug fix
   - `docs` — documentation only
   - `refactor` — code change that neither fixes a bug nor adds a feature
   - `test` — adding or updating tests
   - `chore` — build, CI, tooling, or maintenance
   - `perf` — performance improvement
   - `style` — formatting, whitespace (no logic change)
3. **Scope** (optional): The area of the codebase affected, in parentheses.
4. **Body**: If the change is non-trivial, add a body paragraph explaining WHY the change was made, not WHAT changed (the diff shows what).
5. **Breaking changes**: If the change breaks backward compatibility, add `BREAKING CHANGE:` in the footer.

## Output

Return ONLY the commit message — no explanation, no markdown formatting, no code fences. Ready to paste into `git commit -m`.
