---
title: Meeting Notes Summarizer
description: Transforms raw meeting notes or transcripts into structured summaries with decisions, action items, and follow-ups.
tags: [meetings, summarization, business, productivity]
technique: Multi-section extraction and transformation
complexity: beginner
variables:
  meeting_type:
    type: select
    default: team-standup
    options: [team-standup, sprint-planning, design-review, stakeholder-update, one-on-one, incident-review, all-hands]
    description: Type of meeting (adjusts what to extract)
  attendees:
    type: text
    default: ""
    description: "Comma-separated list of attendees (optional, helps attribute action items)"
  notes:
    type: text
    description: Raw meeting notes or transcript
---

Summarize the following {{meeting_type}} meeting notes into a structured format.

## Raw Notes

{{notes}}

## Attendees

{{attendees}}

## Output Format

### Meeting Summary
2-3 sentence overview of what was discussed and the overall outcome.

### Key Decisions
Bulleted list of decisions made during the meeting. For each:
- What was decided
- Who made/approved the decision (if clear from notes)

If no decisions were made, write "No decisions recorded."

### Action Items
Table format:

| Action | Owner | Due | Priority |
|--------|-------|-----|----------|
| What needs to be done | Who is responsible | When (if mentioned) | High/Medium/Low |

Assign owners based on who volunteered or was assigned in the notes. If unclear, mark as "TBD".

### Discussion Highlights
3-5 bullet points capturing the most important discussion topics that weren't captured as decisions or action items. Include any disagreements, open questions, or deferred topics.

### Follow-Up Needed
Items that need follow-up before the next meeting but weren't assigned as action items.

## Rules

- Extract information only from the notes — don't add or infer topics not discussed
- Use names from the attendees list when attributing actions
- If the notes are incomplete or unclear, flag it: "[Note: unclear from transcript]"
- Keep the summary concise — the reader should get the key info in 30 seconds
