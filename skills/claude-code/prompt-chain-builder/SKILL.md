---
description: "Design and scaffold multi-step prompt chains where each prompt's output feeds the next."
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
user-invocable: true
---

# prompt-chain-builder

Designs and scaffolds multi-step prompt chains from a complex task description.

## When to Use

Use `/prompt-chain-builder` when:
- A task is too complex for a single prompt
- You need multiple AI steps in sequence (extract → transform → validate → format)
- You want to build a reusable pipeline of prompts
- You're designing an agent workflow that chains multiple prompt calls

## Execution

1. Ask the user to describe the complex task
2. Decompose the task into focused single-responsibility steps
3. For each step, design a prompt with:
   - Clear single-step instructions
   - Input variables (including output from previous step)
   - Explicit output format that matches the next step's input
4. Create each prompt in Promptmark via `create_prompt`
5. Wire template variables for chaining:
   - Step N's output format → Step N+1's input variable
6. Group all prompts into a dedicated collection
7. Generate a chain definition document describing:
   - Execution order
   - Data flow between steps
   - Error handling at each step
   - Optional: orchestration code skeleton

## Example

```
/prompt-chain-builder
> Task: Process customer feedback — extract topics, classify sentiment
>       per topic, generate a summary report, and draft response email.
```

Creates 4 prompts in a "feedback-pipeline" collection:

```
Step 1: feedback-topic-extractor
  Input: {{raw_feedback}}
  Output: JSON array of topics

Step 2: feedback-sentiment-classifier
  Input: {{topics_json}} (from step 1)
  Output: JSON with sentiment per topic

Step 3: feedback-report-generator
  Input: {{classified_topics}} (from step 2)
  Output: Markdown summary report

Step 4: feedback-response-drafter
  Input: {{summary_report}} (from step 3), {{customer_name}}, {{tone}}
  Output: Draft response email
```

## Chain Definition Document

The generated chain doc includes:

```markdown
# Feedback Pipeline

## Flow
raw_feedback → [topic-extractor] → topics_json → [sentiment-classifier]
→ classified_topics → [report-generator] → summary_report
→ [response-drafter] → draft_email

## Steps
1. **feedback-topic-extractor** — extracts discussion topics from raw text
2. **feedback-sentiment-classifier** — classifies sentiment per topic
3. **feedback-report-generator** — produces a structured summary
4. **feedback-response-drafter** — drafts a customer response email

## Error Handling
- Step 1 failure: return "unable to extract topics" + raw feedback
- Step 2 failure: skip sentiment, pass topics directly to step 3
- Step 3/4 failure: return partial results from completed steps
```

## Notes

- Each prompt in the chain is independently usable — not locked to the chain
- Output format of step N is designed to parse cleanly as input to step N+1
- The chain definition is documentation, not executable code — pair with `prompt-to-code` to generate orchestration code
- Chains can branch (step 1 feeds both step 2a and step 2b) if the task requires it
