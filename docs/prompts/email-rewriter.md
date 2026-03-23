---
title: Email Rewriter
description: Rewrites an email to match a specified tone while preserving all factual content.
tags: [email, content, writing, style-transfer]
technique: Style transfer with constraints
complexity: beginner
variables:
  target_tone:
    type: select
    default: professional
    options: [professional, friendly, urgent, diplomatic, concise, empathetic]
    description: Desired tone for the rewritten email
  max_length:
    type: select
    default: same
    options: [shorter, same, longer]
    description: Length relative to original
  original_email:
    type: text
    description: The email to rewrite
---

Rewrite the following email to be **{{target_tone}}** in tone. The rewritten version should be **{{max_length}}** in length compared to the original.

## Original Email

{{original_email}}

## Rules

1. **Preserve all facts**: Every piece of information in the original must appear in the rewrite. Do not add information that wasn't there.
2. **Preserve the ask**: If the original requests something, the rewrite must make the same request.
3. **Match the tone**: Adjust word choice, sentence structure, and framing to match {{target_tone}}.
4. **Keep it natural**: The result should read like a human wrote it in this tone from scratch, not like a machine rewrote it.
5. **Subject line**: Include a rewritten subject line if one is present or inferable.

## Output

Return only the rewritten email — subject line first (if applicable), then body. No explanation or commentary.
