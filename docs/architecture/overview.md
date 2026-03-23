# Architecture Overview

High-level architecture of the Promptmark platform.

## Platform Architecture

Promptmark is built on a Go + Gin backend with an HTMX + Templ frontend, designed for production-grade prompt management.

### Entry Points

| Entry Point | Protocol | Purpose |
|-------------|----------|---------|
| Web UI | HTTP | Browser-based prompt management |
| MCP Server | stdio / HTTP+SSE | AI agent integration via Model Context Protocol |
| REST API | HTTP | Programmatic access for integrations |

### Core Components

- **Authentication** — OAuth 2.0 via Civic Auth with JWT session management
- **Database** — Dual-database design: system DB (accounts, OAuth, models) + per-user SQLite databases (isolated prompt libraries)
- **MCP Server** — 38 tools for AI agents to manage prompts, collections, tags, versions, and more
- **COMPOSE Wizard** — AI-assisted prompt creation with three modes (Blank, Guided, AI Consultation)
- **Safety Scanner** — PII detection, injection detection, secrets scanning, and moderation on publish
- **Versioning** — Snapshot-based version control with diff and restore
- **Backups** — Remote backup providers (GitHub, S3, Dropbox)

### Database Isolation

Every user gets their own SQLite database. This design provides:
- **Data isolation** — no accidental cross-tenant data access
- **Performance** — no row-level filtering overhead
- **Portability** — export your entire database as a single file
- **Simplicity** — schema migrations run per-database

### Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Go 1.25.x + Gin |
| Frontend | HTMX + Templ + Tailwind CSS v4 |
| Database | SQLite / Turso (libSQL) |
| Auth | Civic Auth (OAuth 2.0) + JWT |
| MCP | Model Context Protocol (stdio + HTTP+SSE) |
| Email | Postmark (transactional) |
| AI Providers | OpenRouter, OpenAI, Anthropic (BYOK) |
