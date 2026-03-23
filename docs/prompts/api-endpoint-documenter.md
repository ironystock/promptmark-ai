---
title: API Endpoint Documenter
description: Generates complete API documentation from a handler function or route definition.
tags: [api, documentation, development, extraction]
technique: Extraction and transformation
complexity: intermediate
variables:
  language:
    type: select
    default: go
    options: [go, python, typescript, java, rust, csharp]
    description: Backend language
  framework:
    type: select
    default: gin
    options: [gin, echo, fastapi, express, nestjs, spring, actix, aspnet]
    description: Web framework
  doc_format:
    type: select
    default: markdown
    options: [markdown, openapi-yaml, openapi-json]
    description: Output documentation format
  code:
    type: text
    description: The handler function or route definition to document
---

You are a technical writer specializing in API documentation. Given a handler function, extract and document the endpoint completely.

## Source Code

```{{language}}
{{code}}
```

## Extract and Document

From the code above, identify and document:

1. **HTTP Method and Path** — the route (GET, POST, PUT, DELETE, PATCH)
2. **Description** — what this endpoint does (infer from function name and logic)
3. **Authentication** — is auth required? What kind? (infer from middleware or decorators)
4. **Path Parameters** — URL parameters with types
5. **Query Parameters** — query string parameters with types, defaults, and whether required
6. **Request Body** — JSON schema with field types, required fields, and validation rules
7. **Response** — success response schema with status code
8. **Error Responses** — possible error codes and their meaning
9. **Example** — a complete curl request and response

## Output Format: {{doc_format}}

If markdown, use clear headers and tables. If OpenAPI, produce valid spec YAML/JSON.

## Rules

- Infer types from the code (don't guess if unclear — mark as "unknown")
- Include validation rules visible in the code (min/max, regex, required)
- Note any rate limiting or pagination visible in the handler
- If the handler calls other functions you can't see, note "implementation details not visible" rather than guessing
