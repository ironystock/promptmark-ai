---
globs: skills/**/*
---

# Skills Format Conventions

## Directory Naming

- Lowercase-kebab-case: `my-skill-name/`
- Descriptive, concise names reflecting what the skill does

## Claude Code Skills (`skills/claude-code/<name>/`)

Required structure:
```
skills/claude-code/<skill-name>/
├── SKILL.md          # Required — skill definition with YAML frontmatter
├── README.md         # Optional — human-readable description, examples
└── <support-files>   # Optional — templates, scripts, etc.
```

### SKILL.md Format

```yaml
---
description: "One-line description of what this skill does"
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
user-invocable: true
---
```

Body should include:
- **When to Use** — clear scenarios for invocation
- **Execution** — what the skill does step by step
- **Examples** — sample invocations and expected behavior

## AgentSkills (`skills/agent-skills/<name>/`)

Required structure:
```
skills/agent-skills/<skill-name>/
├── README.md         # Required — purpose, prerequisites, usage
└── <support-files>   # Optional — configs, examples, etc.
```

### README.md Must Include

1. **Purpose** — what this skill adds to the MCP server or agent workflow
2. **Prerequisites** — required tools, APIs, or configuration
3. **Usage** — how to install/configure and invoke
4. **Examples** — concrete invocations with expected output
