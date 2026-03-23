import { Type } from "@sinclair/typebox";
import { createClient } from "../client.js";

/**
 * Register library management tools — collections, tags, and versioning.
 */
export function registerLibraryTools(api: any) {
  const client = createClient();

  // --- list_collections ---
  api.registerTool({
    name: "promptmark_list_collections",
    description: "List all prompt collections in the user's Promptmark library with prompt counts.",
    parameters: Type.Object({}),
    async execute() {
      const collections = await client.listCollections();
      return {
        content: [{ type: "text", text: JSON.stringify(collections, null, 2) }],
      };
    },
  });

  // --- create_collection ---
  api.registerTool({
    name: "promptmark_create_collection",
    description: "Create a new collection to organize prompts in Promptmark.",
    parameters: Type.Object({
      name: Type.String({ description: "Collection name" }),
      description: Type.Optional(Type.String({ description: "Collection description" })),
      color: Type.Optional(
        Type.String({
          description: "Color: gray, red, orange, yellow, green, cyan, blue, purple, pink",
          default: "gray",
        })
      ),
    }),
    async execute(_id: string, params: any) {
      const collection = await client.createCollection(params);
      return {
        content: [{ type: "text", text: JSON.stringify(collection, null, 2) }],
      };
    },
  });

  // --- list_tags ---
  api.registerTool({
    name: "promptmark_list_tags",
    description: "List all tags used across prompts in Promptmark with optional usage counts.",
    parameters: Type.Object({
      include_counts: Type.Optional(Type.Boolean({ description: "Include usage count per tag", default: true })),
    }),
    async execute(_id: string, params: any) {
      const tags = await client.listTags(params);
      return {
        content: [{ type: "text", text: JSON.stringify(tags, null, 2) }],
      };
    },
  });

  // --- get_prompt_versions ---
  api.registerTool({
    name: "promptmark_get_versions",
    description: "Get version history for a prompt in Promptmark.",
    parameters: Type.Object({
      prompt_id: Type.String({ description: "The prompt ID" }),
    }),
    async execute(_id: string, params: { prompt_id: string }) {
      const versions = await client.getPromptVersions(params.prompt_id);
      return {
        content: [{ type: "text", text: JSON.stringify(versions, null, 2) }],
      };
    },
  });
}
