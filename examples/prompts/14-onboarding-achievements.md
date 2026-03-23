# First Steps: Onboarding Achievements

Track your progress through Promptmark's onboarding checklist and unlock achievements as you explore the platform.

## What You'll Learn

- Checking achievement status
- What each onboarding step unlocks
- Managing the onboarding widget

## Workflow

### Step 1: Check your achievement status

```
Tool: list_achievements
Input: {}
```

Returns all 6 First Steps achievements with their unlock status — which ones you've completed and which are still pending.

### Step 2: Complete achievements by using the platform

Achievements unlock automatically as you use Promptmark:

| Achievement | How to Unlock |
|-------------|--------------|
| Create your first prompt | `create_prompt` |
| Add tags to a prompt | `update_prompt` with tags |
| Create a collection | `create_collection` |
| Version a prompt | `update_prompt` (auto-versions) |
| Share a prompt publicly | `update_prompt` with `is_public: true` |
| Start a conversation | `create_conversation` + `send_message` |

### Step 3: Dismiss the widget when you're done

```
Tool: dismiss_onboarding
Input: {}
```

Hides the First Steps widget from the dashboard. Your trophy case is still visible in Settings.

### Step 4: Bring it back if needed

```
Tool: restore_onboarding
Input: {}
```

Shows the widget again.

## MCP Tools Used

`list_achievements` → `dismiss_onboarding` → `restore_onboarding`

## Key Takeaway

The onboarding checklist guides you through Promptmark's core features. Each achievement corresponds to a key capability — by the time you've unlocked them all, you've used the full platform.
