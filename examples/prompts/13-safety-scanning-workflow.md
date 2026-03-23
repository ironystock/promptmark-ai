# Safety Scanning Workflow

Understand and work with Promptmark's safety scanning — PII detection, injection detection, secrets scanning, and content moderation.

## What You'll Learn

- How safety scanning triggers on publish
- Reviewing and acknowledging scan findings
- Writing prompts that pass scanning cleanly
- The acknowledge workflow for false positives

## How Safety Scanning Works

When you set `is_public: true` on a prompt, Promptmark scans the content for:

| Category | What it detects |
|----------|----------------|
| `pii` | Email addresses, phone numbers, physical addresses, names, SSNs |
| `injection` | Prompt injection patterns, instruction override attempts |
| `secrets` | API keys, tokens, passwords, connection strings |
| `danger` | Content that could generate harmful or inappropriate output |

If issues are found, they must be acknowledged before the prompt becomes publicly visible.

## Workflow

### Step 1: Attempt to publish

```
Tool: update_prompt
Input: {
  "id": "<prompt_id>",
  "is_public": true
}
```

If the scanner flags issues, the prompt is saved but scan flags are set.

### Step 2: Check the prompt

```
Tool: get_prompt
Input: { "id": "<prompt_id>" }
```

The response includes scan status fields indicating which categories have active flags.

### Step 3: Review and fix real issues

If the scanner found a real problem (e.g., a hardcoded email address in an example), fix it:

```
Tool: update_prompt
Input: {
  "id": "<prompt_id>",
  "prompt": "...content with example@example.com instead of real email..."
}
```

### Step 4: Acknowledge false positives

If the scanner flagged something that's intentional (e.g., a prompt ABOUT PII detection that mentions PII patterns), acknowledge it:

```
Tool: acknowledge_scan
Input: {
  "prompt_id": "<prompt_id>",
  "category": "pii"
}
```

This transitions the flag from active to acknowledged — you've reviewed it and confirmed it's intentional.

### Step 5: Writing scan-clean prompts

Tips for prompts that pass scanning on first try:

- Use `user@example.com` instead of real email addresses
- Use `{{api_key}}` template variables instead of hardcoded keys
- Frame injection-detection prompts carefully — describe the concept without including actual injection payloads
- Use placeholder data (`555-0100` phone numbers, `123 Main St` addresses)

## MCP Tools Used

`update_prompt` → `get_prompt` → `update_prompt` → `acknowledge_scan`

## Key Takeaway

Safety scanning is a guardrail, not a blocker. Real issues should be fixed. False positives can be acknowledged. The goal is to keep your public prompts clean of accidental PII, leaked secrets, and injection vulnerabilities.
