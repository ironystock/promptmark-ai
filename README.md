# Promptmark AI

The public ecosystem for [Promptmark](https://promptmark.ai) — a prompt management platform built for developers who treat prompts as first-class software artifacts.

## What's Here

| Directory | What you'll find |
|-----------|-----------------|
| [**plugin/**](plugin/) | Official Claude Code plugin — session capture, auto-validation, pre-publish gates |
| [**skills/**](skills/) | 32 standalone Claude Code skills and AgentSkills for Promptmark |
| [**docs/**](docs/) | Architecture overview, API reference, integration guides, prompt templates |
| [**examples/**](examples/) | Promptmark workflow examples with MCP tool invocations |
| [**integrations/**](integrations/) | Reference integrations with 8 agent frameworks |
| [**apps/**](apps/) | Future alternate entrypoints (TUI, CLI, desktop) |

## What is Promptmark?

Promptmark is a prompt management platform for AI practitioners. It gives you:

- **Per-user database isolation** — your prompts live in your own SQLite database, not a shared blob
- **Version control** — snapshots, diffs, and restore for every prompt
- **Template variables** — typed parameters with schema validation
- **38 MCP tools** — AI agents manage prompts directly via the Model Context Protocol
- **COMPOSE wizard** — create prompts three ways: blank, guided, or AI consultation
- **Safety scanning** — PII detection, injection detection, and secrets scanning on publish

## Report an Issue

Found a bug or have a feature request? Use our issue templates:

- [Report a bug](../../issues/new?template=bug_report.yml)
- [Request a feature](../../issues/new?template=feature_request.yml)
- [Propose a skill](../../issues/new?template=skill_request.yml)

## Contributing

We welcome contributions — especially skills, integrations, and example prompts. See [CONTRIBUTING.md](CONTRIBUTING.md) for format requirements and submission process.

## License

[Apache 2.0](LICENSE)
