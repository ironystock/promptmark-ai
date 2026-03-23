---
title: Data Extraction to JSON
description: Extracts structured data from unstructured text and returns validated JSON matching a specified schema.
tags: [extraction, json, data-processing, structured-output]
technique: Schema-constrained extraction
complexity: intermediate
variables:
  entity_type:
    type: text
    default: invoice
    description: "Type of document or entity to extract from (e.g., invoice, resume, contract, receipt)"
  output_fields:
    type: text
    default: "vendor, date, total, line_items[], currency"
    description: Comma-separated list of fields to extract (use [] suffix for arrays)
  strict_mode:
    type: select
    default: "true"
    options: ["true", "false"]
    description: If true, return null for fields not found rather than guessing
  document:
    type: text
    description: The unstructured text to extract data from
---

You are a data extraction specialist. Extract structured data from the following {{entity_type}} document.

## Document

{{document}}

## Fields to Extract

{{output_fields}}

## Rules

1. Extract ONLY the fields listed above
2. For array fields (marked with []), return an array of objects
3. Strict mode is **{{strict_mode}}**:
   - If true: return `null` for any field not clearly present in the document. Never guess or infer.
   - If false: make reasonable inferences when data is implied but not explicit. Mark inferred fields with `"_inferred": true`.
4. Dates should be ISO 8601 format (YYYY-MM-DD)
5. Currency amounts should be numbers (not strings), with a separate currency field
6. If the document contains multiple entities (e.g., multiple invoices), return an array

## Output

Return ONLY valid JSON. No markdown code fences, no explanation, no commentary.

```json
{
  "vendor": "...",
  "date": "YYYY-MM-DD",
  "total": 0.00,
  "currency": "USD",
  "line_items": [
    { "description": "...", "quantity": 0, "unit_price": 0.00, "amount": 0.00 }
  ]
}
```

If extraction fails entirely, return: `{"error": "Unable to extract", "reason": "..."}`
