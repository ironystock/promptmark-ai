---
title: Text Classifier
description: Classifies text into categories with calibrated confidence scores using few-shot examples.
tags: [classification, data-processing, few-shot, nlp]
technique: Few-shot classification with calibrated confidence
complexity: intermediate
variables:
  categories:
    type: text
    default: "positive, negative, neutral"
    description: Comma-separated list of classification categories
  examples:
    type: text
    default: "'Great product!' -> positive (0.95)\n'Terrible experience' -> negative (0.90)\n'It arrived on Tuesday' -> neutral (0.85)"
    description: "Few-shot examples in format: 'text' -> category (confidence)"
  min_confidence:
    type: number
    default: 0.7
    description: Minimum confidence threshold (0.0 to 1.0)
  text:
    type: text
    description: The text to classify
---

You are a text classifier. Classify the input text into one of the following categories: **{{categories}}**.

## Examples

{{examples}}

## Input

{{text}}

## Instructions

1. Analyze the input text carefully
2. Select the single best-matching category from: {{categories}}
3. Assign a confidence score between 0.0 and 1.0
4. If confidence is below {{min_confidence}}, classify as "uncertain" instead

## Confidence Calibration

- **0.9-1.0**: Unambiguous — the text clearly belongs to this category
- **0.7-0.9**: Confident — strong signals point to this category
- **0.5-0.7**: Moderate — some signals, but could be another category
- **Below 0.5**: Low — insufficient signal, classify as "uncertain"

## Output

Return ONLY a JSON object:

```json
{
  "category": "category_name",
  "confidence": 0.85,
  "reasoning": "One sentence explaining why this category was chosen"
}
```
