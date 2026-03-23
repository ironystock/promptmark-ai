# Promptmark Workflow Examples

Step-by-step examples showing how to use Promptmark's MCP tools in real workflows. Each example includes actual tool invocations with inputs and expected outputs.

All examples use tools from the [MCP Reference](../../docs/api/mcp-reference.md).

## Getting Started

| # | Example | Tools Used | What You'll Learn |
|---|---------|-----------|-------------------|
| 01 | [Create and Template](01-create-and-template.md) | create_prompt, get_prompt_schema, validate_prompt_inputs, render_prompt | Template variables, typing, validation, rendering |
| 02 | [Version and Iterate](02-version-and-iterate.md) | update_prompt, get_prompt_versions, get_prompt_version, restore_prompt_version | Auto-versioning, history, restore |
| 03 | [Capture and Compare Responses](03-capture-and-compare-responses.md) | render_prompt, capture_response, list_captured_responses | Response storage, model comparison |
| 04 | [Organize with Collections and Tags](04-organize-with-collections-and-tags.md) | create_collection, assign_prompt_to_collection, list_prompts, search_prompts | Library organization |
| 05 | [Conversations with Prompts](05-conversations-with-prompts.md) | create_conversation, send_message, link_conversation_prompt, import_conversation | AI conversations, prompt linking |

## Publishing & Sharing

| # | Example | Tools Used | What You'll Learn |
|---|---------|-----------|-------------------|
| 06 | [Publish and Share](06-publish-and-share.md) | update_prompt, acknowledge_scan, update_collection, search_prompts | Publishing, safety scanning, public profiles |
| 07 | [Remix and Adapt](07-remix-and-adapt.md) | create_prompt (with remixed_id), list_remixes | Forking, lineage tracking |

## Library Management

| # | Example | Tools Used | What You'll Learn |
|---|---------|-----------|-------------------|
| 08 | [Bulk Library Management](08-bulk-library-management.md) | list_prompts, list_tags, rename_tag, assign_prompt_to_collection, list_collections | Auditing, retagging, cleanup |

## Advanced Patterns

| # | Example | Tools Used | What You'll Learn |
|---|---------|-----------|-------------------|
| 09 | [Prompts as System Instructions](09-prompt-as-system-instruction.md) | create_prompt, create_conversation, send_message, link_conversation_prompt | System prompt registry, hot-swapping |
| 10 | [Build an Evaluation Loop](10-eval-loop.md) | render_prompt, capture_response, update_prompt, get_prompt_versions | Systematic eval, data-driven iteration |
| 11 | [Build a Prompt-Driven Agent](11-prompt-driven-agent.md) | create_prompt, create_conversation, send_message, capture_response, link_conversation_prompt | Agent instruction backend |
| 12 | [Prompt Types and Model Targeting](12-prompt-types-and-models.md) | create_prompt (type_id, models), list_prompts | Semantic categorization, model association |
| 13 | [Safety Scanning Workflow](13-safety-scanning-workflow.md) | update_prompt, get_prompt, acknowledge_scan | Scan flags, acknowledgment, clean publishing |
| 14 | [Onboarding Achievements](14-onboarding-achievements.md) | list_achievements, dismiss_onboarding, restore_onboarding | First Steps checklist |
| 15 | [Full Prompt Lifecycle](15-full-lifecycle.md) | All core tools | Create → test → capture → improve → version → publish |

## MCP Tool Coverage

These examples collectively demonstrate **28 of 38** MCP tools — all the tools you'll use in everyday workflows.
