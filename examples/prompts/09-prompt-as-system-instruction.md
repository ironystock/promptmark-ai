# Prompts as System Instructions

Use Promptmark as a system prompt registry — store, version, and swap system instructions for your AI applications.

## What You'll Learn

- Creating system-type prompts
- Linking prompts to conversations as system instructions
- Hot-swapping system prompts
- A/B testing different system instructions

## Workflow

### Step 1: Create a system prompt

```
Tool: create_prompt
Input: {
  "title": "Concise Technical Assistant",
  "prompt": "You are a technical assistant. Rules:\n1. Answer in 3 sentences or fewer unless asked to elaborate\n2. Include code examples when relevant\n3. Cite documentation links when available\n4. Say \"I don't know\" rather than guessing\n5. Use {{language:select:python}} for code examples",
  "type_id": "system",
  "tags": "[\"system-prompt\", \"technical\", \"concise\"]"
}
```

The `type_id: system` marks this as a system instruction, not a user-facing prompt.

### Step 2: Create an alternative version

```
Tool: create_prompt
Input: {
  "title": "Verbose Technical Tutor",
  "prompt": "You are a patient technical tutor. Rules:\n1. Explain concepts step by step\n2. Use analogies for complex topics\n3. Always include a code example AND a plain-English explanation\n4. Ask if the user wants more detail before moving on\n5. Use {{language:select:python}} for code examples",
  "type_id": "system",
  "tags": "[\"system-prompt\", \"technical\", \"verbose\", \"teaching\"]"
}
```

### Step 3: Start a conversation with the concise version

```
Tool: create_conversation
Input: {
  "title": "API Design Discussion",
  "model_id": "anthropic/claude-sonnet-4",
  "linked_prompt_id": "<concise_prompt_id>"
}
```

### Step 4: Test it

```
Tool: send_message
Input: {
  "conversation_id": "<conversation_id>",
  "content": "How should I handle pagination in a REST API?"
}
```

### Step 5: Swap to the verbose version mid-conversation

```
Tool: link_conversation_prompt
Input: {
  "conversation_id": "<conversation_id>",
  "prompt_id": "<verbose_prompt_id>"
}
```

The next message uses the new system prompt. Conversation history is preserved.

### Step 6: Send another message to compare

```
Tool: send_message
Input: {
  "conversation_id": "<conversation_id>",
  "content": "Explain cursor-based pagination vs offset pagination."
}
```

Compare how the same model responds with different system instructions.

## MCP Tools Used

`create_prompt` (x2) → `create_conversation` → `send_message` → `link_conversation_prompt` → `send_message`

## Key Takeaway

System prompts are just prompts — store them, version them, swap them. Promptmark becomes your system instruction registry. A/B test different instruction styles without changing your application code.
