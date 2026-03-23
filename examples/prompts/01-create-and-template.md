# Create a Templated Prompt

Build a prompt with typed template variables and validate it — the foundation of everything in Promptmark.

## What You'll Learn

- Creating prompts with `{{variable:type:default}}` syntax
- Retrieving the variable schema
- Validating inputs before rendering
- Rendering with variable substitution

## Workflow

### Step 1: Create a prompt with template variables

```
Tool: create_prompt
Input: {
  "title": "Bug Report Summarizer",
  "prompt": "Summarize the following bug report for the {{audience:select:engineering}} team.\n\nPrioritize {{focus:select:root-cause}} analysis.\nKeep the summary under {{max_words:number:200}} words.\n\n---\n{{bug_report:text}}\n---\n\nOutput a structured summary with: title, severity, root cause, and recommended fix.",
  "tags": "[\"bug-reports\", \"summarization\", \"engineering\"]",
  "type_id": "general"
}
```

The `{{name:type:default}}` syntax automatically creates typed variables:
- `audience` — select type (options defined on first use)
- `focus` — select type
- `max_words` — number type, defaults to 200
- `bug_report` — text type (the input)

### Step 2: Retrieve the variable schema

```
Tool: get_prompt_schema
Input: { "id": "<prompt_id>" }
```

Returns the full schema — variable names, types, defaults, and options. Use this to build forms, validate inputs, or generate code bindings.

### Step 3: Validate inputs before rendering

```
Tool: validate_prompt_inputs
Input: {
  "id": "<prompt_id>",
  "variables": {
    "audience": "product",
    "focus": "root-cause",
    "max_words": 150,
    "bug_report": "Users report 500 errors on /api/prompts endpoint..."
  }
}
```

Returns validation errors for invalid types, missing required values, or out-of-range numbers. Always validate before rendering in production.

### Step 4: Render the prompt

```
Tool: render_prompt
Input: {
  "id": "<prompt_id>",
  "variables": {
    "audience": "product",
    "focus": "root-cause",
    "max_words": 150,
    "bug_report": "Users report 500 errors on /api/prompts endpoint..."
  }
}
```

Returns the fully rendered prompt with all variables substituted — ready to send to a model.

## MCP Tools Used

`create_prompt` → `get_prompt_schema` → `validate_prompt_inputs` → `render_prompt`

## Key Takeaway

Template variables aren't just string replacement — they're typed, validated, and schema-queryable. Build prompts once, reuse them with different inputs reliably.
