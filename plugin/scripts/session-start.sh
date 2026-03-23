#!/bin/bash
# SessionStart hook: Promptmark capture opt-in + library health summary
#
# This hook runs when a Claude Code session starts. It:
# 1. Asks the user if they want to enable capture for this session
# 2. Shows a quick library health summary
#
# Output to stdout becomes context for Claude.
# The capture opt-in is presented as a message; Claude handles the actual
# prompty agent spawning based on the user's response.

cat <<'EOF'
[Promptmark] Session connected.

Would you like to enable Promptmark capture for this session?
If enabled, prompty (a lightweight background agent) will store all prompts
and responses in your Promptmark library for traceability and iteration.

To enable: tell Claude "yes, enable capture" or use /capture
To skip: just continue working — capture is off by default.
EOF
