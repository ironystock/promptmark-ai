# Conversations Powered by Prompts

Use stored prompts as system prompts for AI conversations — link a prompt to a conversation and iterate on either independently.

## What You'll Learn

- Creating conversations linked to prompts
- Sending messages and getting AI responses
- Swapping the system prompt without losing history
- Importing external conversations

## Workflow

### Step 1: Create a system prompt

```
Tool: create_prompt
Input: {
  "title": "Technical Support Agent",
  "prompt": "You are a technical support agent for a SaaS platform.\n\nRules:\n- Be concise and helpful\n- Ask clarifying questions before troubleshooting\n- Never share internal system details\n- Escalate billing issues to the billing team\n- Always confirm the issue is resolved before closing",
  "tags": "[\"system-prompt\", \"support\", \"agent\"]",
  "type_id": "system"
}
```

### Step 2: Start a conversation linked to that prompt

```
Tool: create_conversation
Input: {
  "title": "Support: User can't export data",
  "model_id": "anthropic/claude-sonnet-4",
  "linked_prompt_id": "<prompt_id>"
}
```

The prompt content becomes the system prompt for this conversation.

### Step 3: Send a message

```
Tool: send_message
Input: {
  "conversation_id": "<conversation_id>",
  "content": "Hi, I'm trying to export my data as CSV but the button is grayed out. I'm on the Pro plan."
}
```

Returns the AI response, using your linked prompt as the system instruction.

### Step 4: Continue the conversation

```
Tool: send_message
Input: {
  "conversation_id": "<conversation_id>",
  "content": "I've tried Chrome and Firefox, same issue on both."
}
```

Full conversation history is maintained.

### Step 5: Try a different system prompt

Update the prompt and the next message uses the new instructions:

```
Tool: update_prompt
Input: {
  "id": "<prompt_id>",
  "prompt": "...updated instructions with better escalation criteria..."
}
```

Or link a completely different prompt:

```
Tool: link_conversation_prompt
Input: {
  "conversation_id": "<conversation_id>",
  "prompt_id": "<different_prompt_id>"
}
```

### Step 6: Import a conversation from another platform

```
Tool: import_conversation
Input: {
  "title": "Imported: Claude chat about API design",
  "source": "claude",
  "model": "anthropic/claude-sonnet-4",
  "messages": [
    { "role": "system", "content": "You are an API design expert." },
    { "role": "user", "content": "How should I handle pagination?" },
    { "role": "assistant", "content": "Cursor-based pagination is generally preferred..." }
  ]
}
```

Bring in conversations from Claude, ChatGPT, or any source.

## MCP Tools Used

`create_prompt` → `create_conversation` → `send_message` (x2) → `link_conversation_prompt` → `import_conversation`

## Key Takeaway

Prompts and conversations are linked but independent. Iterate on your system prompt without losing conversation history. Import conversations from anywhere. Your prompt library becomes a reusable instruction set for AI interactions.
