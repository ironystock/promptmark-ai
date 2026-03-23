# Promptmark Plugin for Claude Code

The official [Promptmark](https://promptmark.ai) plugin for Claude Code — session capture, automatic validation, pre-publish safety gates, and library health monitoring.

## What It Does

| Feature | How it works | Trigger |
|---------|-------------|---------|
| **Capture** | `prompty` background agent stores every prompt + response in your Promptmark library | SessionStart opt-in → background agent |
| **Auto-validate** | Checks template variables after every prompt edit | PostToolUse hook on prompt edits |
| **Pre-publish gate** | Blocks unsafe publishes (PII, secrets, missing metadata) | PreToolUse hook on publish |
| **Library health** | Quick health summary when you connect | SessionStart hook |

## Installation

```bash
# Via Claude Code
/plugin install promptmark

# Or manually: copy this directory to your plugins location
```

### Configuration

Set your Promptmark API key:

```bash
export PROMPTMARK_API_KEY="pm_sk_..."
```

The plugin configures the Promptmark MCP server automatically via `.mcp.json`.

## Slash Commands

| Command | What it does |
|---------|-------------|
| `/capture` | Toggle session capture on/off, set session name |
| `/audit` | Full library health audit with prioritized cleanup actions |
| `/validate` | Comprehensive template variable validation across your library |
| `/publish-check` | Thorough pre-publish quality and safety review |

## How Capture Works

1. On session start, the plugin asks: *"Enable Promptmark capture?"*
2. If you say yes, `prompty` (a lightweight haiku background agent) starts silently
3. Every prompt you send to a model is stored via `create_prompt`
4. Every response is stored via `capture_response` with metadata
5. Everything is grouped into a session collection with consistent tags
6. At session end, you get a summary of what was captured

Capture is **opt-in per session** and off by default.

## How Auto-Validate Works

After every `create_prompt` or `update_prompt` call:
1. The PostToolUse hook checks for template variables in the content
2. If variables are found, it reminds Claude to verify schema definitions
3. Catches undefined variables, missing defaults, and orphaned definitions

For a full library-wide scan, use `/validate`.

## How the Pre-Publish Gate Works

When you try to publish a prompt (`is_public: true`):
1. The PreToolUse hook scans the content before the publish executes
2. **Blockers** (real email addresses, API keys, passwords) → publish is blocked
3. **Warnings** (missing tags, no description) → publish is allowed with a note
4. Clean prompts publish silently

For a thorough quality review before publishing, use `/publish-check`.

## Plugin Structure

```
plugin/
├── .claude-plugin/plugin.json     — plugin manifest
├── agents/prompty.md              — haiku background capture agent
├── skills/
│   ├── capture/SKILL.md           — /capture toggle
│   ├── audit/SKILL.md             — /audit library health
│   ├── validate/SKILL.md          — /validate variable check
│   └── publish-check/SKILL.md     — /publish-check pre-publish
├── hooks/hooks.json               — hook registrations
├── scripts/
│   ├── session-start.sh           — capture opt-in + health summary
│   ├── post-prompt-edit.sh        — auto-validate after edits
│   └── pre-publish-gate.sh        — block unsafe publishes
├── rules/
│   └── promptmark-conventions.md  — auto-loaded MCP conventions
├── .mcp.json                      — Promptmark MCP server config
└── README.md                      — this file
```

## Standalone Skills

This plugin elevates 4 skills into an automated experience. The original standalone skills remain available in [`skills/`](../skills/) for users who prefer manual invocation without installing the full plugin.

| Plugin Feature | Standalone Skill |
|---------------|-----------------|
| Capture (prompty) | [preflight](../skills/claude-code/preflight/) + [preflight (agent)](../skills/agent-skills/preflight/) |
| Auto-validate | [variable-validator](../skills/agent-skills/variable-validator/) |
| Pre-publish gate | [publish-prep](../skills/claude-code/publish-prep/) + [safety-audit](../skills/agent-skills/safety-audit/) |
| Library health | [library-audit](../skills/agent-skills/library-audit/) |

## MCP Tools Used

This plugin interacts with Promptmark via these MCP tools:

- `create_prompt`, `update_prompt`, `get_prompt`, `list_prompts`, `search_prompts`
- `get_prompt_schema`, `validate_prompt_inputs`, `render_prompt`
- `capture_response`, `list_captured_responses`
- `create_collection`, `list_collections`, `list_tags`
- `acknowledge_scan`
- `get_prompt_versions`

Full reference: [MCP Reference](../docs/api/mcp-reference.md)

## License

[Apache 2.0](../LICENSE)
