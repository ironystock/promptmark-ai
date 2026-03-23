---
title: Blog Post Outliner
description: Creates a detailed blog post outline with title options, hook, sections, and SEO considerations.
tags: [content, blog, writing, planning, seo]
technique: Chain-of-thought planning
complexity: intermediate
variables:
  topic:
    type: text
    description: The subject of the blog post
  audience:
    type: text
    default: software developers
    description: Target reader persona
  tone:
    type: select
    default: conversational
    options: [conversational, professional, academic, casual, authoritative]
    description: Writing tone
  target_length:
    type: select
    default: "1500"
    options: ["800", "1200", "1500", "2000", "3000"]
    description: Target word count
  goal:
    type: select
    default: educate
    options: [educate, persuade, entertain, convert, establish-authority]
    description: Primary goal of the post
---

You are a content strategist creating a blog post outline. Think step by step.

## Brief

- **Topic**: {{topic}}
- **Audience**: {{audience}}
- **Tone**: {{tone}}
- **Length**: ~{{target_length}} words
- **Goal**: {{goal}}

## Step 1: Audience Analysis

Before outlining, think about:
- What does {{audience}} already know about {{topic}}?
- What misconceptions might they have?
- What would make them stop scrolling and read?
- What action should they take after reading?

## Step 2: Create the Outline

### Title Options
Provide 3 title options, each using a different approach:
1. How-to / practical ("How to...")
2. Curiosity / insight ("Why X is actually Y")
3. Listicle / scannable ("N things about...")

### Hook (intro paragraph)
Write the opening paragraph — it must answer "why should I keep reading?" within 2 sentences. Reference a specific pain point or surprising fact.

### Sections
For each section, provide:
- **Heading** (H2)
- **Key point** (one sentence summary)
- **Sub-points** (3-5 bullets of what to cover)
- **Estimated word count**

Sections should flow logically and total approximately {{target_length}} words.

### Conclusion
- Key takeaway (one sentence the reader should remember)
- Call to action aligned with the {{goal}} goal

### SEO Notes
- Suggested primary keyword
- 3-5 secondary keywords
- Meta description (under 160 characters)

## Rules

- Each section must earn its place — no filler sections
- Sections should alternate between conceptual and practical where possible
- Include at least one section with a concrete example or case study placeholder
- The outline should be detailed enough that a writer can draft without additional research
