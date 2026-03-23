import { Type } from "@sinclair/typebox";
import { createClient } from "../client.js";

/**
 * Register capture/response tools — store AI model outputs
 * in Promptmark for traceability and evaluation.
 */
export function registerCaptureTools(api: any) {
  const client = createClient();

  // --- capture_response ---
  api.registerTool({
    name: "promptmark_capture_response",
    description:
      "Capture an AI response for a prompt in Promptmark. Stores model output with metadata for evaluation and traceability.",
    parameters: Type.Object({
      prompt_id: Type.String({ description: "ID of the prompt this response is for" }),
      model_id: Type.String({ description: "Model that generated this response (e.g. anthropic/claude-sonnet-4)" }),
      content: Type.String({ description: "The AI-generated response content" }),
      metadata: Type.Optional(
        Type.Record(Type.String(), Type.Unknown(), {
          description: "Optional metadata: tokens, latency, temperature, etc.",
        })
      ),
    }),
    async execute(_id: string, params: any) {
      const response = await client.captureResponse(params);
      return {
        content: [{ type: "text", text: JSON.stringify(response, null, 2) }],
      };
    },
  });

  // --- list_captured_responses ---
  api.registerTool({
    name: "promptmark_list_responses",
    description:
      "List captured AI responses, optionally filtered by prompt. Returns responses newest first.",
    parameters: Type.Object({
      prompt_id: Type.Optional(Type.String({ description: "Filter by prompt ID" })),
      limit: Type.Optional(Type.Number({ description: "Max results (default 20)", default: 20 })),
    }),
    async execute(_id: string, params: any) {
      const responses = await client.listCapturedResponses(params);
      return {
        content: [{ type: "text", text: JSON.stringify(responses, null, 2) }],
      };
    },
  });
}
