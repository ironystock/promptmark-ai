# Reference Integrations

Working examples of connecting [Promptmark](https://promptmark.ai) with agent frameworks and AI platforms. Each integration includes a quickstart (~30-50 lines) and a full demo (real use case end-to-end).

> **Note**: All integrations require Promptmark service accounts (API key auth for autonomous agents). This feature is in development — implementations are planned and scaffolded, with runnable code to follow.

## Integration Matrix

| Integration | Language | MCP Pattern | Priority | Status |
|-------------|----------|-------------|----------|--------|
| [Anthropic Claude SDK](anthropic-sdk/) | Python + TS | Tool use / MCP client | High | Planned |
| [OpenAI Agents SDK](openai-agents/) | Python | Native MCP transport | High | Planned |
| [OpenClaw](openclaw/) | TypeScript | Gateway skill/plugin | High | Planned |
| [Google ADK](google-adk/) | Python | MCP tool provider | High | Planned |
| [LangChain / LangGraph](langchain/) | Python | MCP adapter | Medium | Planned |
| [Vercel AI SDK](vercel-ai-sdk/) | TypeScript | MCP support | Medium | Planned |
| [CrewAI](crewai/) | Python | MCP tools | Medium | Planned |
| [Go Native](go-native/) | Go | Direct MCP client | — | Stub |

## Each Integration Includes

- **Quickstart** — minimal code to connect and use Promptmark tools
- **Full Demo** — real use case with multiple MCP tools
- **MCP Tools Used** — which of the [38 Promptmark tools](../docs/api/mcp-reference.md) are demonstrated
- **Service Account Setup** — configuration for API key auth

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for integration format requirements. We welcome integrations for additional frameworks.
