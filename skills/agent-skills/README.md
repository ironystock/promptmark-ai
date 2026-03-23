# AgentSkills

Broader-purpose skills that extend Promptmark's MCP server capabilities or enhance agent workflows.

## Format

Each skill lives in its own directory:

```
skills/agent-skills/<skill-name>/
├── README.md         # Required — purpose, prerequisites, usage
└── <support-files>   # Optional — configs, examples, etc.
```

## Available Skills

### Prompt Engineering
| Skill | Description |
|-------|-------------|
| [prompt-optimizer](prompt-optimizer/) | Analyze a prompt and produce an improved version with explanations |
| [prompt-critique](prompt-critique/) | Structured scorecard review across 8 quality dimensions |

### Organization
| Skill | Description |
|-------|-------------|
| [library-audit](library-audit/) | Scan your library for orphaned prompts, unused tags, duplicates |
| [bulk-tagger](bulk-tagger/) | Auto-suggest and apply tags to untagged prompts |
| [collection-organizer](collection-organizer/) | Propose and create a collection structure from your prompts |
| [duplicate-detector](duplicate-detector/) | Find semantically similar or duplicate prompts |

### Integration
| Skill | Description |
|-------|-------------|
| [ci-snapshot](ci-snapshot/) | Create version snapshots for CI/CD pipeline integration |
| [langchain-sync](langchain-sync/) | Sync prompts into LangChain-compatible template format |

### Analysis
| Skill | Description |
|-------|-------------|
| [library-stats](library-stats/) | Rich analytics report on your prompt library |
| [version-changelog](version-changelog/) | Human-readable changelog from a prompt's version history |
| [tag-taxonomy](tag-taxonomy/) | Analyze tag usage and propose a clean taxonomy |

### Collaboration
| Skill | Description |
|-------|-------------|
| [portfolio-publisher](portfolio-publisher/) | Batch-publish a curated set of prompts as a public portfolio |

### Import / Export
| Skill | Description |
|-------|-------------|
| [prompt-snapshot-export](prompt-snapshot-export/) | Full point-in-time library archive for backup or migration |

### Development
| Skill | Description |
|-------|-------------|
| [variable-validator](variable-validator/) | Validate template variable definitions and catch mismatches |
| [preflight](preflight/) | Store all prompts and responses from any MCP-connected agent |

### Safety & Compliance
| Skill | Description |
|-------|-------------|
| [safety-audit](safety-audit/) | Bulk safety review for PII, secrets, injection, and moderation |
| [injection-hardener](injection-hardener/) | Add defensive patterns against prompt injection attacks |
| [compliance-report](compliance-report/) | Auditable report of prompts, versions, sharing status, and safety |
