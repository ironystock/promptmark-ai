# Claude Code Skills

Slash-command invocable skills for Claude Code that enhance workflows with Promptmark.

## Format

Each skill lives in its own directory:

```
skills/claude-code/<skill-name>/
├── SKILL.md          # Required — skill definition with YAML frontmatter
├── README.md         # Optional — human-readable description
└── <support-files>   # Optional — templates, configs, etc.
```

## Available Skills

### Prompt Engineering
| Skill | Description |
|-------|-------------|
| [prompt-eval](prompt-eval/) | Run a prompt against multiple models and compare outputs side-by-side |
| [ab-test-setup](ab-test-setup/) | Create versioned prompt variants for systematic A/B testing |
| [template-designer](template-designer/) | Convert a static prompt into a parameterized template with typed variables |

### Organization
| Skill | Description |
|-------|-------------|
| [bulk-migrate](bulk-migrate/) | Import prompts from local files (markdown, YAML, JSON, plain text) |

### Integration
| Skill | Description |
|-------|-------------|
| [prompt-to-code](prompt-to-code/) | Generate SDK-ready code that fetches and uses a Promptmark prompt |
| [prompt-export](prompt-export/) | Export prompts to local files in markdown, JSON, or YAML |

### Collaboration
| Skill | Description |
|-------|-------------|
| [publish-prep](publish-prep/) | Pre-flight checklist before publishing — quality, safety, metadata |
| [prompt-review](prompt-review/) | Structured peer review of prompt changes |

### Import / Export
| Skill | Description |
|-------|-------------|
| [import-openai-playground](import-openai-playground/) | Import prompts from OpenAI Playground exports |
| [import-awesome-prompts](import-awesome-prompts/) | Import from awesome-chatgpt-prompts-style markdown files |

### Development
| Skill | Description |
|-------|-------------|
| [prompt-debug](prompt-debug/) | Diagnose why a prompt produces unexpected output |
| [prompt-scaffold](prompt-scaffold/) | Generate a complete prompt from a brief description |
| [preflight](preflight/) | Capture and store all prompts/responses during a session |

### Advanced
| Skill | Description |
|-------|-------------|
| [prompt-chain-builder](prompt-chain-builder/) | Design multi-step prompt chains with wired template variables |

## Installation

To use a skill, copy its directory into your project's `.claude/skills/` directory.
