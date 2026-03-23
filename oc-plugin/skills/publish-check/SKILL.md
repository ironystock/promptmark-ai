---
name: promptmark-publish-check
description: Pre-publish safety and quality check for Promptmark prompts
user-invocable: true
---

# Promptmark Pre-Publish Check

Review a prompt for safety and quality before publishing to your public profile.

## What to Do

1. Use `promptmark_get_prompt` to retrieve the prompt
2. Use `promptmark_get_schema` to check variable completeness
3. Scan content for:
   - PII (email addresses, phone numbers — use placeholders instead)
   - Secrets (API keys, tokens — use template variables instead)
   - Missing metadata (title, description, tags)
   - Variables without defaults or descriptions
4. Report blockers, warnings, and suggestions
5. If clean, confirm ready to publish via `promptmark_update_prompt` with `is_public: true`
