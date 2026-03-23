# Self-Hosting

Deploy your own Promptmark instance with full data ownership.

## Prerequisites

- Docker and Docker Compose
- A Civic Auth application (for OAuth)
- (Optional) Turso account for cloud SQLite

## Quick Start

```bash
git clone https://github.com/promptmark/promptmark.git
cd promptmark
cp .env.example .env
# Edit .env with your configuration
docker compose up -d
```

Visit `http://localhost:8080` to access your instance.

## Environment Variables

### Required

| Variable | Description |
|----------|-------------|
| `CIVIC_AUTH_CLIENT_ID` | Civic Auth OAuth client ID |
| `CIVIC_AUTH_SECRET` | Civic Auth OAuth client secret |
| `CIVIC_AUTH_REDIRECT_URL` | OAuth callback URL |

### Optional

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `8080` | HTTP server port |
| `JWT_SECRET` | auto-generated | Secret for JWT signing |
| `MAX_BODY_SIZE` | — | Maximum request body size |

### AI Providers (BYOK)

| Variable | Description |
|----------|-------------|
| `OPENROUTER_API_KEY` | OpenRouter API key (default provider) |
| `OPENAI_API_KEY` | OpenAI direct access |
| `ANTHROPIC_API_KEY` | Anthropic direct access |

### Backups

| Variable | Description |
|----------|-------------|
| `GITHUB_TOKEN` | GitHub backup provider |
| `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` | S3 backup provider |
| `DROPBOX_*` | Dropbox backup provider |

## Production Deployment

<!-- TODO: Document production deployment best practices -->

*Production deployment guide coming soon.*
