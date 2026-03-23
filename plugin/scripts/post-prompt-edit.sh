#!/bin/bash
# PostToolUse hook: Auto-validate template variables after prompt edits
#
# Runs after create_prompt or update_prompt succeeds.
# Reads the tool result from stdin, extracts the prompt ID,
# and checks for common variable issues.
#
# Input: JSON via stdin with tool result
# Output: warnings to stderr (visible to Claude as hook feedback)
# Exit: always 0 (observability hook, never blocks)

input=$(cat)

# Extract prompt ID from the tool result
prompt_id=$(echo "$input" | jq -r '.tool_result.id // .tool_result.prompt_id // empty' 2>/dev/null)

if [ -z "$prompt_id" ]; then
  # Can't extract ID — skip validation silently
  exit 0
fi

# Extract prompt content if available in the tool input
content=$(echo "$input" | jq -r '.tool_input.prompt // empty' 2>/dev/null)

if [ -z "$content" ]; then
  exit 0
fi

# Quick variable validation: find {{variables}} in content
variables_in_content=$(echo "$content" | grep -oE '\{\{[a-zA-Z_][a-zA-Z0-9_]*' | sed 's/{{//' | sort -u)

if [ -z "$variables_in_content" ]; then
  # No template variables — nothing to validate
  exit 0
fi

# Count variables found
var_count=$(echo "$variables_in_content" | wc -l)

# Output a reminder to stderr (Claude sees this as hook feedback)
echo "[Promptmark] Prompt $prompt_id has $var_count template variable(s). Use get_prompt_schema to verify they all have proper type definitions and defaults." >&2

exit 0
