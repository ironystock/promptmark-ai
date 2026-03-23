import { Type } from "@sinclair/typebox";
import { createClient } from "../client.js";

/**
 * Register prompt management tools — LLM-callable functions for
 * CRUD operations on prompts, template variable handling, and rendering.
 */
export function registerPromptTools(api: any) {
  const client = createClient();

  // --- list_prompts ---
  api.registerTool({
    name: "promptmark_list_prompts",
    description:
      "List prompts from the user's Promptmark library with optional filtering by search, tag, or collection.",
    parameters: Type.Object({
      search: Type.Optional(Type.String({ description: "Filter by title or content" })),
      tag: Type.Optional(Type.String({ description: "Filter by tag name" })),
      collection_id: Type.Optional(Type.String({ description: "Filter by collection ID" })),
      limit: Type.Optional(Type.Number({ description: "Max results (default 50)", default: 50 })),
    }),
    async execute(_id: string, params: any) {
      const prompts = await client.listPrompts(params);
      return {
        content: [{ type: "text", text: JSON.stringify(prompts, null, 2) }],
      };
    },
  });

  // --- get_prompt ---
  api.registerTool({
    name: "promptmark_get_prompt",
    description: "Get a specific prompt by ID from Promptmark, including content, tags, and metadata.",
    parameters: Type.Object({
      id: Type.String({ description: "The prompt ID" }),
    }),
    async execute(_id: string, params: { id: string }) {
      const prompt = await client.getPrompt(params.id);
      return {
        content: [{ type: "text", text: JSON.stringify(prompt, null, 2) }],
      };
    },
  });

  // --- create_prompt ---
  api.registerTool({
    name: "promptmark_create_prompt",
    description:
      "Create a new prompt in Promptmark. Use {{variable}} or {{variable:type:default}} syntax for template variables.",
    parameters: Type.Object({
      title: Type.String({ description: "Prompt title" }),
      prompt: Type.String({ description: "Prompt content with optional {{template}} variables" }),
      notes: Type.Optional(Type.String({ description: "Notes about the prompt" })),
      tags: Type.Optional(Type.String({ description: 'JSON array of tags, e.g. ["ai", "coding"]' })),
      type_id: Type.Optional(
        Type.String({ description: "Type: general, system, query, text-to-code, agent" })
      ),
      collection_id: Type.Optional(Type.String({ description: "Collection ID" })),
    }),
    async execute(_id: string, params: any) {
      const prompt = await client.createPrompt(params);
      return {
        content: [{ type: "text", text: JSON.stringify(prompt, null, 2) }],
      };
    },
  });

  // --- render_prompt ---
  api.registerTool({
    name: "promptmark_render_prompt",
    description:
      "Render a Promptmark prompt template by substituting variables with provided values. Returns the fully resolved prompt text.",
    parameters: Type.Object({
      id: Type.String({ description: "The prompt template ID" }),
      variables: Type.Optional(
        Type.Record(Type.String(), Type.Unknown(), {
          description: "Key-value pairs of variable names and values",
        })
      ),
    }),
    async execute(_id: string, params: { id: string; variables?: Record<string, unknown> }) {
      const rendered = await client.renderPrompt(params.id, params.variables);
      return {
        content: [{ type: "text", text: rendered }],
      };
    },
  });

  // --- get_prompt_schema ---
  api.registerTool({
    name: "promptmark_get_schema",
    description:
      "Get the template variable schema for a prompt — variable names, types, defaults, and options.",
    parameters: Type.Object({
      id: Type.String({ description: "The prompt ID" }),
    }),
    async execute(_id: string, params: { id: string }) {
      const schema = await client.getPromptSchema(params.id);
      return {
        content: [{ type: "text", text: JSON.stringify(schema, null, 2) }],
      };
    },
  });

  // --- search_prompts ---
  api.registerTool({
    name: "promptmark_search",
    description: "Search Promptmark prompts by title, tags, or visibility.",
    parameters: Type.Object({
      query: Type.Optional(Type.String({ description: "Search term" })),
      is_public: Type.Optional(Type.Boolean({ description: "Filter by visibility" })),
      limit: Type.Optional(Type.Number({ description: "Max results", default: 50 })),
    }),
    async execute(_id: string, params: any) {
      const results = await client.searchPrompts(params);
      return {
        content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
      };
    },
  });
}
