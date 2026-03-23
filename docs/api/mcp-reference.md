# MCP Reference

Promptmark's Model Context Protocol server provides 38 tools for AI agents to manage prompts.

## Connection

### stdio (Local)

```bash
go run cmd/mcp/main.go
```

Authentication via Device Flow — the server will provide a URL for browser-based login.

### Configuration (Claude Desktop)

```json
{
  "mcpServers": {
    "promptmark": {
      "command": "promptmark-mcp",
      "args": []
    }
  }
}
```

## Tool Categories

| Category | Tools | Description |
|----------|-------|-------------|
| Prompts | list, get, create, update, delete, search | Core prompt CRUD and search |
| Collections | list, get, create, update, delete | Organize prompts into collections |
| Tags | list, create, delete | Categorize and discover prompts |
| Versions | list, get, create, restore, diff | Snapshot-based version control |
| Sharing | publish, unpublish, get_shared | Public prompt sharing |
| Models | list | Available AI models |
| User | profile, stats | User information and statistics |

## Tool Reference

<!-- TODO: Document each tool with input schema, return type, and examples -->

*Full tool-by-tool documentation coming soon.*
