# Go Native MCP Client

Use Promptmark directly from Go applications via the MCP Go SDK.

**Language**: Go
**Status**: Stub — will be built after TypeScript and Python implementations

## Overview

Promptmark itself is built in Go. This integration demonstrates how to connect to the Promptmark MCP server from Go applications using the MCP Go SDK (`modelcontextprotocol/go-sdk`), enabling Go services to manage prompts programmatically.

## Planned Scope

### Quickstart
- Connect to Promptmark MCP server from Go
- List prompts, fetch one, render with variables
- ~50 lines

### Full Demo
- A Go service that uses Promptmark as its prompt configuration backend
- Prompts loaded on startup, cached with TTL
- Template variables resolved from request context
- Response capture for observability

## Prerequisites (Planned)

- Go 1.25+
- `modelcontextprotocol/go-sdk`
- Promptmark account with service account API key

## Directory Structure (Planned)

```
integrations/go-native/
├── README.md              ← you are here
├── quickstart/
│   ├── main.go
│   └── go.mod
└── demo/
    ├── main.go
    ├── promptmark/
    │   └── client.go
    └── go.mod
```

## Related

- [MCP Reference](../../docs/api/mcp-reference.md) — all 38 Promptmark MCP tools
- [Promptmark source](https://github.com/ironystock/promptmark) — the Go application this mirrors
