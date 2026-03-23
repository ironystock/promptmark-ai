# Contributing to Promptmark AI

We welcome contributions to the Promptmark ecosystem. This guide covers how to submit skills, integrations, examples, and documentation.

## Getting Started

1. Fork this repository
2. Create a feature branch (`feat/my-skill-name`)
3. Make your changes following the format guidelines below
4. Submit a pull request

## Submitting a Claude Code Skill

Claude Code skills are slash-command invocable behaviors that extend Claude Code's capabilities when working with Promptmark.

### Directory Structure

```
skills/claude-code/<skill-name>/
├── SKILL.md          # Required — skill definition with YAML frontmatter
├── README.md         # Optional — human-readable description
└── <support-files>   # Optional — templates, configs, etc.
```

### SKILL.md Format

```yaml
---
description: "One-line description"
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
user-invocable: true
---

# Skill Name

Body with: When to Use, Execution steps, Examples.
```

### Requirements

- Directory name must be lowercase-kebab-case
- SKILL.md must have valid YAML frontmatter
- Include at least one example invocation
- Describe what MCP tools or external services are needed

## Submitting an AgentSkill

AgentSkills are broader-purpose skills that extend the MCP server's usefulness or enhance agent workflows.

### Directory Structure

```
skills/agent-skills/<skill-name>/
├── README.md         # Required — purpose, prerequisites, usage
└── <support-files>   # Optional — configs, examples, etc.
```

### README.md Must Include

1. **Purpose** — what this skill adds
2. **Prerequisites** — required tools, APIs, or configuration
3. **Usage** — how to install/configure and invoke
4. **Examples** — concrete invocations with expected output

## Submitting an Integration

Reference integrations demonstrate how to connect Promptmark with agent frameworks.

### Directory Structure

```
integrations/<framework-name>/
├── README.md         # Required — overview, setup, usage
└── <implementation>  # Code, configs, or examples
```

### README.md Must Include

1. **Overview** — what this integration does
2. **Prerequisites** — framework version, API keys, Promptmark setup
3. **Setup** — step-by-step installation/configuration
4. **Usage** — working examples
5. **MCP Tools Used** — which Promptmark MCP tools this integration relies on

## Submitting Example Prompts

Example prompts showcase Promptmark's capabilities and template variable system.

Place examples in `examples/prompts/` with a descriptive filename and include:
- The prompt content
- Template variables used (if any)
- Expected use case
- Tags and metadata

## Naming Conventions

- All directories: `lowercase-kebab-case`
- All files: descriptive names, lowercase with hyphens or standard names (README.md, SKILL.md)

## Pull Request Process

1. Ensure your submission follows the format guidelines above
2. Update the relevant section README if adding a new entry
3. Add a CHANGELOG entry for new skills or integrations
4. Fill out the PR template completely
5. A documentation quality review (guardian-docs) will check your submission

## Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add openclaw integration
docs: update MCP reference with new tools
fix: correct broken link in getting-started guide
chore: update skill catalog index
```
