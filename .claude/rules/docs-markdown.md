---
globs: docs/**/*.md
---

# Documentation Markdown Conventions

## Style

- ATX headings (`#`, `##`, `###`) — never setext (underline) style
- One sentence per line where practical (produces better diffs)
- Fenced code blocks with language identifiers (```json, ```bash, ```go, etc.)
- No Hugo shortcodes or templating syntax — plain GitHub-flavored markdown only

## Links

- **Internal**: Use relative paths (`../api/rest-reference.md`, `./mcp-setup.md`)
- **External**: Use absolute URLs (`https://promptmark.ai/docs/...`)
- **Anchors**: Use lowercase kebab-case (`#getting-started`, `#mcp-tools`)

## Structure

- Each file should have exactly one `#` (H1) heading as the title
- Do not skip heading levels (H1 -> H3 without H2)
- Use H2 (`##`) for major sections, H3 (`###`) for subsections
- Keep files focused — one topic per file, split if over 300 lines

## Code Examples

- All code examples must be copy-pasteable and correct
- Include language identifier on every fenced code block
- Use `bash` for shell commands, `json` for JSON, `go` for Go code
- Show expected output where helpful
