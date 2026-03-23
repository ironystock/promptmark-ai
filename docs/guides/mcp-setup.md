# MCP Setup

Connect AI agents to your Promptmark prompt library via the Model Context Protocol.

## Prerequisites

- A Promptmark account
- An MCP-compatible client (Claude Desktop, Cursor, Warp, etc.)

## Claude Desktop

Add to your Claude Desktop MCP configuration:

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

On first connection, the server will initiate Device Flow authentication — follow the URL in your browser to log in.

## Cursor

<!-- TODO: Document Cursor-specific MCP configuration -->

*Cursor setup guide coming soon.*

## Warp

<!-- TODO: Document Warp-specific MCP configuration -->

*Warp setup guide coming soon.*

## Available Tools

Once connected, your AI agent has access to 38 tools for managing prompts, collections, tags, versions, and more. See the [MCP Reference](../api/mcp-reference.md) for the complete tool list.

## Troubleshooting

### Authentication Issues
- Ensure your browser can reach promptmark.ai for Device Flow auth
- Check that the MCP server binary is on your PATH

### Connection Issues
- Verify the MCP configuration JSON is valid
- Restart your MCP client after configuration changes
