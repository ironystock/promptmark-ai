# REST API Reference

Promptmark's REST API for programmatic prompt management.

## Authentication

All API requests require a JWT token, passed via:
- **Cookie**: `token` (set during OAuth login)
- **Header**: `Authorization: Bearer <jwt>`

## Base URL

```
https://promptmark.ai/api
```

## Endpoints

<!-- TODO: Extract and document all public API endpoints from the platform -->
<!-- Categories: Prompts, Collections, Tags, Versions, Sharing, Models, User -->

*Full endpoint documentation coming soon.*

## Error Format

All errors return JSON:

```json
{
  "error": "Human-readable error message"
}
```

## Rate Limiting

API requests are rate-limited per authenticated user. Rate limit headers are included in responses.
