# Promptmark Plugin for OpenClaw

The official [Promptmark](https://promptmark.ai) plugin for [OpenClaw](https://docs.openclaw.ai) — prompt management, session capture, and library tools across 30+ channels.

## What It Does

| Feature | How it works |
|---------|-------------|
| **Prompt tools** | 6 LLM-callable tools for CRUD, search, rendering, and schema access |
| **Capture tools** | Store AI responses with metadata for evaluation and traceability |
| **Library tools** | Collections, tags, and version history management |
| **Capture service** | `/capture` command to toggle session-wide prompt/response logging |
| **Skills** | 4 agent skills for capture, audit, validation, and publish checks |

## Installation

```bash
openclaw plugins install @promptmark/openclaw-promptmark
```

Or for development, add to your workspace extensions:

```bash
# Clone and link
git clone https://github.com/ironystock/promptmark-ai.git
cd promptmark-ai/oc-plugin
npm install && npm run build

# Add to OpenClaw config
# plugins.load.paths: ["path/to/promptmark-ai/oc-plugin"]
```

### Configuration

Set your Promptmark API key in your OpenClaw config or environment:

```bash
export PROMPTMARK_API_KEY="pm_sk_..."
```

Or in `~/.openclaw/openclaw.json`:

```json5
{
  plugins: {
    entries: {
      "promptmark": {
        enabled: true,
        env: { PROMPTMARK_API_KEY: "pm_sk_..." }
      }
    }
  }
}
```

## Registered Tools

All tools are prefixed with `promptmark_` and are LLM-callable by your OpenClaw agents.

### Prompt Management
| Tool | Description |
|------|-------------|
| `promptmark_list_prompts` | List prompts with filtering (search, tag, collection) |
| `promptmark_get_prompt` | Get a specific prompt by ID |
| `promptmark_create_prompt` | Create a new prompt with template variables |
| `promptmark_render_prompt` | Render a template with variable substitution |
| `promptmark_get_schema` | Get template variable definitions |
| `promptmark_search` | Search prompts by title, tags, or visibility |

### Response Capture
| Tool | Description |
|------|-------------|
| `promptmark_capture_response` | Store an AI response with metadata |
| `promptmark_list_responses` | List captured responses (filter by prompt) |

### Library Management
| Tool | Description |
|------|-------------|
| `promptmark_list_collections` | List all collections with counts |
| `promptmark_create_collection` | Create a new collection |
| `promptmark_list_tags` | List all tags with usage counts |
| `promptmark_get_versions` | Get version history for a prompt |

## Capture Service

Toggle session-wide capture with the `/capture` command:

```
/capture start "eval-run-march"   → start capturing
/capture status                    → check what's been captured
/capture stop                      → stop and get summary
```

When active, all prompts and responses are stored in a purple session collection in your Promptmark library.

## Skills

The plugin includes 4 agent skills (loaded as `SKILL.md` files):

| Skill | What it does |
|-------|-------------|
| `promptmark-capture` | Toggle session capture |
| `promptmark-audit` | Library health audit |
| `promptmark-validate` | Template variable validation |
| `promptmark-publish-check` | Pre-publish safety review |

## Multi-Channel

Because this is an OpenClaw plugin, your Promptmark prompt library works across every channel OpenClaw supports — Discord, Slack, Telegram, WhatsApp, and 30+ more. Update a prompt in Promptmark and it's available to agents on every channel immediately.

## Plugin Structure

```
oc-plugin/
├── .claude-plugin/         — (not used by OpenClaw, for reference)
├── openclaw.plugin.json    — OpenClaw plugin manifest
├── package.json            — npm package with openclaw extension entry
├── tsconfig.json
├── src/
│   ├── index.ts            — Plugin entry: definePluginEntry + registration
│   ├── client.ts           — Promptmark MCP client (typed interface)
│   ├── tools/
│   │   ├── prompts.ts      — Prompt CRUD, render, schema tools
│   │   ├── capture.ts      — Response capture tools
│   │   └── library.ts      — Collections, tags, versions tools
│   └── services/
│       └── capture-service.ts  — Background capture + /capture command
└── skills/
    ├── capture/SKILL.md
    ├── audit/SKILL.md
    ├── validate/SKILL.md
    └── publish-check/SKILL.md
```

## Relationship to Claude Code Plugin

This is the OpenClaw equivalent of the [Claude Code plugin](../plugin/). Both provide:
- Session capture with background agent/service
- Library audit, validation, and publish checking
- Prompt management tools

The Claude Code plugin uses hooks (PreToolUse, PostToolUse, SessionStart) and a background haiku agent (prompty). The OpenClaw plugin uses `registerTool`, `registerCommand`, and lifecycle hooks native to the OpenClaw gateway.

## License

[Apache 2.0](../LICENSE)
