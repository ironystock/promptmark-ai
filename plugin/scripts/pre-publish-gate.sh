#!/bin/bash
# PreToolUse hook: Gate unsafe prompt publishing
#
# Runs before update_prompt. If is_public is being set to true,
# performs quick safety checks on the prompt content.
#
# Input: JSON via stdin with tool_input
# Output: stderr messages for warnings/blockers
# Exit 0: allow the tool call
# Exit 2: block the tool call (with reason on stderr)

input=$(cat)

# Check if this is a publish action (is_public being set to true)
is_public=$(echo "$input" | jq -r '.tool_input.is_public // empty' 2>/dev/null)

if [ "$is_public" != "true" ]; then
  # Not a publish action — allow silently
  exit 0
fi

# Extract prompt content and metadata from tool input
content=$(echo "$input" | jq -r '.tool_input.prompt // empty' 2>/dev/null)
title=$(echo "$input" | jq -r '.tool_input.title // empty' 2>/dev/null)
tags=$(echo "$input" | jq -r '.tool_input.tags // empty' 2>/dev/null)

blockers=0
warnings=0

# --- BLOCKER CHECKS ---

# Check for email addresses
if echo "$content" | grep -qiE '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'; then
  # Exclude common safe patterns
  if ! echo "$content" | grep -qiE '(example\.com|example\.org|test\.com|placeholder)'; then
    echo "[Promptmark BLOCKER] Prompt content contains what appears to be a real email address. Replace with example@example.com or use a template variable." >&2
    blockers=$((blockers + 1))
  fi
fi

# Check for API key patterns
if echo "$content" | grep -qiE '(sk-[a-zA-Z0-9]{20,}|key-[a-zA-Z0-9]{20,}|AIza[a-zA-Z0-9]{30,}|ghp_[a-zA-Z0-9]{30,})'; then
  echo "[Promptmark BLOCKER] Prompt content contains what appears to be an API key or token. Remove it or use a template variable like {{api_key}}." >&2
  blockers=$((blockers + 1))
fi

# Check for password patterns
if echo "$content" | grep -qiE '(password|passwd|secret)\s*[:=]\s*["\x27][^\s]+["\x27]'; then
  echo "[Promptmark BLOCKER] Prompt content contains what appears to be a hardcoded password or secret." >&2
  blockers=$((blockers + 1))
fi

# --- WARNING CHECKS ---

# Check for phone number patterns
if echo "$content" | grep -qE '\b[0-9]{3}[-.]?[0-9]{3}[-.]?[0-9]{4}\b'; then
  if ! echo "$content" | grep -qE '555-0[0-9]{3}'; then
    echo "[Promptmark WARNING] Prompt content may contain a phone number. Consider using a placeholder like 555-0100." >&2
    warnings=$((warnings + 1))
  fi
fi

# Check for missing metadata
if [ -z "$title" ]; then
  echo "[Promptmark WARNING] Publishing without a title update. Ensure the prompt has a clear, descriptive title." >&2
  warnings=$((warnings + 1))
fi

if [ -z "$tags" ] || [ "$tags" = "null" ]; then
  echo "[Promptmark WARNING] Publishing without tags. Tags improve discoverability on your public profile." >&2
  warnings=$((warnings + 1))
fi

# --- VERDICT ---

if [ $blockers -gt 0 ]; then
  echo "[Promptmark] Blocked: $blockers safety issue(s) must be resolved before publishing. Fix the issues above and try again." >&2
  exit 2
fi

if [ $warnings -gt 0 ]; then
  echo "[Promptmark] $warnings warning(s) noted. Publishing is allowed but consider addressing them." >&2
fi

exit 0
