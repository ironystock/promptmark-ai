# CLI Client

A command-line interface for Promptmark, enabling prompt management from shell scripts and CI/CD pipelines.

## Status

Planned — not yet implemented.

## Vision

A lightweight CLI for:
- Prompt CRUD operations
- Search and filtering
- Bulk import/export
- Template variable resolution
- Integration with shell workflows and automation

## Example Usage (Planned)

```bash
promptmark list --tag deployment
promptmark get my-prompt --var env=production
promptmark create --file prompt.md --tags "ops,deployment"
```
