# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Conventional Commits](https://www.conventionalcommits.org/).

## [Unreleased]

### Added
- Initial repository scaffold — skills catalog, reference docs, integrations, examples, public issue tracker
- Claude Code agent infrastructure (docs-writer, pitchlady-savant, guardian-docs)
- GitHub issue templates (bug report, feature request, skill request)
- Claude Code review workflows for automated PR feedback
- Contributing guide with format specifications for skills, integrations, and examples
- 32 skills across 9 categories: 14 Claude Code skills + 18 AgentSkills
  - Prompt Engineering: prompt-optimizer, prompt-eval, prompt-critique, ab-test-setup, template-designer
  - Organization: library-audit, bulk-tagger, collection-organizer, duplicate-detector, bulk-migrate
  - Integration: prompt-to-code, ci-snapshot, prompt-export, langchain-sync
  - Analysis: library-stats, version-changelog, tag-taxonomy
  - Collaboration: publish-prep, portfolio-publisher, prompt-review
  - Import/Export: import-openai-playground, import-awesome-prompts, prompt-snapshot-export
  - Development: prompt-debug, prompt-scaffold, variable-validator, preflight (both platforms)
  - Safety: safety-audit, injection-hardener, compliance-report
  - Advanced: prompt-chain-builder
- 15 Promptmark workflow examples demonstrating MCP tools in real scenarios
  - Getting Started: template variables, versioning, response capture, collections, conversations
  - Publishing: safety scanning, public sharing, remixing, lineage tracking
  - Advanced: eval loops, agent backends, system prompt registry, full lifecycle
- Complete MCP reference with all 38 tools documented (parameters, types, descriptions)
- 10 prompt templates in docs/prompts/ (to be ported to promptmark.ai as public prompts)
- 8 reference integration plans: Anthropic SDK, OpenAI Agents, OpenClaw, Google ADK, LangChain, Vercel AI SDK, CrewAI, Go Native
  - Each with quickstart + full demo scope, MCP tools used, and service account setup
  - Blocked on service account feature — scaffolded with planned code structure
- Promptmark Claude Code plugin (plugin/)
  - prompty: haiku background agent for session capture (purple theme)
  - SessionStart hook: capture opt-in + library health summary
  - PostToolUse hook: auto-validate template variables after prompt edits
  - PreToolUse hook: block unsafe publishes (PII, secrets, missing metadata)
  - 4 slash commands: /capture, /audit, /validate, /publish-check
  - Auto-loaded rules for Promptmark MCP conventions
  - MCP server configuration for Promptmark
- Promptmark OpenClaw plugin (oc-plugin/)
  - TypeScript npm package with definePluginEntry
  - 12 registered tools: prompt CRUD, render, schema, capture, collections, tags, versions
  - Background capture service with /capture command
  - 4 agent skills: capture, audit, validate, publish-check
  - Typed MCP client interface (awaiting service accounts for implementation)
