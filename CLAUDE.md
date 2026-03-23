# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working in this repository.

## Project Overview

**promptmark-ai** is the public companion repository for [Promptmark](https://promptmark.ai), a production-grade prompt management platform.

**This repo does NOT contain the Go application.** Do not attempt to build, test, or run Go code here.

This repository serves as:
- **Public issue tracker** for the Promptmark platform
- **Skills catalog** for Claude Code skills and AgentSkills that extend MCP server usefulness
- **Reference documentation** for API, architecture, and integration guides
- **Example prompts** showcasing Promptmark capabilities
- **Reference integrations** with agent frameworks (OpenClaw, ADK, OpenAI Agents, etc.)
- **Future alternate entrypoints** (TUI, CLI, desktop/mobile apps)

**Promptmark Technical Context:** Go + Gin | Civic Auth (OAuth) | Per-user SQLite isolation | 38 MCP tools | HTMX + Templ templates

## Agent Model Configuration (CRITICAL)

> All subagents in `.claude/agents/` have explicit, purposeful model choices (opus for content creation, sonnet for validation). **DO NOT** pass a `model` parameter to the Task tool when invoking these agents. Let them use their configured models.

## Agent Delegation

| Domain | Agent | When to use |
|--------|-------|-------------|
| Documentation content | `docs-writer` | Writing/editing docs in `docs/`, skill descriptions, integration guides |
| Product marketing | `pitchlady-savant` | README copy, public-facing content, skill catalog descriptions, landing page text |
| Documentation quality | `guardian-docs` | Pre-PR review for markdown quality, skill format compliance, broken links |

## Directory Structure

| Directory | Purpose |
|-----------|---------|
| `docs/` | Reference documentation (architecture, API, guides, self-hosting) |
| `skills/` | Skills catalog — Claude Code skills and AgentSkills |
| `examples/` | Sample prompts and usage patterns |
| `integrations/` | Reference integrations with agent frameworks |
| `apps/` | Future alternate entrypoints (TUI, CLI, desktop) |
| `.github/` | Issue templates, PR template, CI workflows |

## Content Conventions

- **Markdown only** — no Hugo shortcodes, no templating. Plain GitHub-flavored markdown.
- **Commits** — use [Conventional Commits](https://www.conventionalcommits.org/) (feat:, fix:, docs:, chore:)
- **Skill format** — Claude Code skills require `SKILL.md` with YAML frontmatter; AgentSkills require `README.md` with purpose, prerequisites, usage
- **Naming** — lowercase-kebab-case for all directories
- **Links** — relative within repo, absolute for external resources

> Path-specific conventions are in `.claude/rules/` and load automatically when you touch matching files.
