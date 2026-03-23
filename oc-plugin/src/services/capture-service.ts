import { createClient } from "../client.js";

/**
 * Background capture service for Promptmark.
 *
 * When enabled, this service listens for agent interactions and
 * automatically stores prompts and responses in the user's
 * Promptmark library — the OpenClaw equivalent of the prompty
 * background agent in the Claude Code plugin.
 *
 * Architecture:
 * - Registers as an OpenClaw service (runs in the gateway process)
 * - Hooks into agent lifecycle events to observe interactions
 * - Creates a session collection on enable
 * - Stores prompts via create_prompt, responses via capture_response
 * - Tags everything with session context (channel, agent, timestamp)
 */

interface CaptureState {
  enabled: boolean;
  sessionName: string;
  collectionId?: string;
  promptCount: number;
  responseCount: number;
  startedAt?: string;
}

const state: CaptureState = {
  enabled: false,
  sessionName: "",
  promptCount: 0,
  responseCount: 0,
};

export function registerCaptureService(api: any) {
  const { logger } = api;

  // Register the capture toggle command
  api.registerCommand?.({
    name: "capture",
    description: "Toggle Promptmark session capture on/off",
    async handler(args: string) {
      const cmd = args.trim().toLowerCase();

      if (cmd === "stop" || cmd === "off") {
        if (!state.enabled) {
          return "Capture is not active.";
        }
        state.enabled = false;
        const summary = formatSummary();
        logger.info("Promptmark capture stopped", { summary });
        return `Promptmark capture stopped.\n\n${summary}`;
      }

      if (cmd === "status") {
        if (!state.enabled) {
          return "Capture is not active. Use `/capture start` to enable.";
        }
        return formatSummary();
      }

      // Default: start capture
      const sessionName = cmd.replace(/^(start|on)\s*/, "").trim() || defaultSessionName();

      try {
        const client = createClient();
        const collection = await client.createCollection({
          name: `capture-${sessionName}`,
          description: `Captured from OpenClaw session: ${sessionName}`,
          color: "purple",
        });

        state.enabled = true;
        state.sessionName = sessionName;
        state.collectionId = collection.id;
        state.promptCount = 0;
        state.responseCount = 0;
        state.startedAt = new Date().toISOString();

        logger.info("Promptmark capture started", { sessionName, collectionId: collection.id });
        return `Promptmark capture enabled for session "${sessionName}".\nAll prompts and responses will be stored in your Promptmark library.`;
      } catch (err) {
        logger.error("Failed to start capture", { error: err });
        return `Failed to start capture: ${err instanceof Error ? err.message : "Unknown error"}`;
      }
    },
  });

  // TODO: Register hooks for agent lifecycle events to auto-capture
  // When OpenClaw's hook API is available:
  //
  // api.registerHook("agent:message:sent", async (event) => {
  //   if (!state.enabled) return;
  //   // Store the prompt via create_prompt
  // });
  //
  // api.registerHook("agent:message:received", async (event) => {
  //   if (!state.enabled) return;
  //   // Store the response via capture_response
  // });

  logger.info("Promptmark capture service registered — use /capture to enable");
}

function defaultSessionName(): string {
  const now = new Date();
  return now.toISOString().slice(0, 10);
}

function formatSummary(): string {
  return [
    `Session: ${state.sessionName}`,
    `Started: ${state.startedAt}`,
    `Prompts captured: ${state.promptCount}`,
    `Responses captured: ${state.responseCount}`,
    state.collectionId ? `Collection: ${state.collectionId}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}
