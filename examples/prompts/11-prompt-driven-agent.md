# Build a Prompt-Driven Agent

Use Promptmark as the instruction backend for an AI agent — prompts as tools, conversations as memory, response capture as logging.

## What You'll Learn

- Using prompts as agent instructions
- Chaining prompt → conversation → response capture
- Building agent memory with conversations
- Using prompt references in messages

## Workflow

### Step 1: Create the agent's instruction prompts

```
Tool: create_prompt
Input: {
  "title": "Agent: Classify Intent",
  "prompt": "Classify the user's intent into one of: {{intents:text:question,task,feedback,complaint}}\n\nReturn JSON: {\"intent\": \"...\", \"confidence\": 0.0-1.0, \"entities\": [...]}",
  "type_id": "agent",
  "tags": "[\"agent\", \"classification\", \"intent\"]",
  "collection_id": "<agent_collection_id>"
}
```

```
Tool: create_prompt
Input: {
  "title": "Agent: Generate Response",
  "prompt": "Given the user's intent ({{intent:text}}) and their message, generate an appropriate response.\n\nTone: {{tone:select:helpful}}\nMax length: {{max_words:number:150}} words\n\nIf intent is 'complaint', always acknowledge the frustration first.",
  "type_id": "agent",
  "tags": "[\"agent\", \"response\", \"generation\"]",
  "collection_id": "<agent_collection_id>"
}
```

### Step 2: Start an agent conversation

```
Tool: create_conversation
Input: {
  "title": "Agent Session: User #4521",
  "model_id": "anthropic/claude-sonnet-4",
  "linked_prompt_id": "<classify_intent_prompt_id>"
}
```

### Step 3: Classify intent

```
Tool: send_message
Input: {
  "conversation_id": "<conversation_id>",
  "content": "I've been waiting 3 days for my export and it still hasn't arrived!"
}
```

The agent classifies: `{"intent": "complaint", "confidence": 0.95, "entities": ["export"]}`

### Step 4: Capture the classification

```
Tool: capture_response
Input: {
  "prompt_id": "<classify_intent_prompt_id>",
  "model_id": "anthropic/claude-sonnet-4",
  "content": "{\"intent\": \"complaint\", \"confidence\": 0.95, \"entities\": [\"export\"]}",
  "metadata": { "session": "user-4521", "step": "classify" }
}
```

### Step 5: Swap to the response generation prompt

```
Tool: link_conversation_prompt
Input: {
  "conversation_id": "<conversation_id>",
  "prompt_id": "<generate_response_prompt_id>"
}
```

### Step 6: Generate the response with a prompt reference

```
Tool: send_message
Input: {
  "conversation_id": "<conversation_id>",
  "content": "Intent: complaint. User message: I've been waiting 3 days for my export and it still hasn't arrived!",
  "prompt_reference_id": "<generate_response_prompt_id>"
}
```

### Step 7: Capture the agent response

```
Tool: capture_response
Input: {
  "prompt_id": "<generate_response_prompt_id>",
  "model_id": "anthropic/claude-sonnet-4",
  "content": "I understand how frustrating the wait has been — three days is too long...",
  "metadata": { "session": "user-4521", "step": "respond" }
}
```

## MCP Tools Used

`create_prompt` (x2) → `create_conversation` → `send_message` → `capture_response` → `link_conversation_prompt` → `send_message` → `capture_response`

## Key Takeaway

Promptmark isn't just a prompt store — it's an agent instruction backend. Store each agent step as a versioned prompt, use conversations for session memory, and capture every response for observability. Update any instruction without redeploying.
