/**
 * Promptmark MCP client — wraps the Promptmark MCP server for use
 * within the OpenClaw plugin. Communicates via stdio or HTTP+SSE.
 *
 * TODO: Replace with actual MCP client once service accounts ship.
 * For now, this is a typed interface showing the expected API surface.
 */

export interface PromptmarkConfig {
  apiKey: string;
  baseUrl?: string;
}

export interface Prompt {
  id: string;
  title: string;
  prompt: string;
  notes?: string;
  tags?: string[];
  type_id?: string;
  is_public?: boolean;
  is_remixable?: boolean;
  collection_id?: string;
  self_rating?: number;
  created_at?: string;
  updated_at?: string;
}

export interface PromptSchema {
  variables: Array<{
    name: string;
    type: "text" | "number" | "select";
    default?: string | number;
    description?: string;
    options?: string[];
    required?: boolean;
  }>;
}

export interface CapturedResponse {
  id: string;
  prompt_id: string;
  model_id: string;
  content: string;
  metadata?: Record<string, unknown>;
  created_at?: string;
}

export interface Collection {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  color?: string;
  is_public?: boolean;
  prompt_count?: number;
}

/**
 * Promptmark client — calls MCP tools via the configured transport.
 *
 * Each method maps 1:1 to a Promptmark MCP tool.
 * See: https://github.com/ironystock/promptmark-ai/blob/master/docs/api/mcp-reference.md
 */
export class PromptmarkClient {
  private config: PromptmarkConfig;

  constructor(config: PromptmarkConfig) {
    this.config = config;
  }

  // --- Prompts ---

  async listPrompts(params?: {
    search?: string;
    tag?: string;
    collection_id?: string;
    type_id?: string;
    limit?: number;
    offset?: number;
  }): Promise<Prompt[]> {
    return this.call("list_prompts", params ?? {});
  }

  async getPrompt(id: string): Promise<Prompt> {
    return this.call("get_prompt", { id });
  }

  async createPrompt(params: {
    title: string;
    prompt: string;
    notes?: string;
    tags?: string;
    type_id?: string;
    collection_id?: string;
    is_public?: boolean;
    self_rating?: number;
  }): Promise<Prompt> {
    return this.call("create_prompt", params);
  }

  async updatePrompt(params: {
    id: string;
    title?: string;
    prompt?: string;
    notes?: string;
    tags?: string;
    is_public?: boolean;
    collection_id?: string;
  }): Promise<Prompt> {
    return this.call("update_prompt", params);
  }

  async searchPrompts(params: {
    query?: string;
    tags?: string[];
    is_public?: boolean;
    limit?: number;
  }): Promise<Prompt[]> {
    return this.call("search_prompts", params);
  }

  // --- Template Variables ---

  async getPromptSchema(id: string): Promise<PromptSchema> {
    return this.call("get_prompt_schema", { id });
  }

  async renderPrompt(id: string, variables?: Record<string, unknown>): Promise<string> {
    return this.call("render_prompt", { id, variables });
  }

  async validatePromptInputs(
    id: string,
    variables: Record<string, unknown>
  ): Promise<{ errors: string[] }> {
    return this.call("validate_prompt_inputs", { id, variables });
  }

  // --- Responses ---

  async captureResponse(params: {
    prompt_id: string;
    model_id: string;
    content: string;
    metadata?: Record<string, unknown>;
  }): Promise<CapturedResponse> {
    return this.call("capture_response", params);
  }

  async listCapturedResponses(params?: {
    prompt_id?: string;
    limit?: number;
    offset?: number;
  }): Promise<CapturedResponse[]> {
    return this.call("list_captured_responses", params ?? {});
  }

  // --- Collections ---

  async createCollection(params: {
    name: string;
    description?: string;
    icon?: string;
    color?: string;
  }): Promise<Collection> {
    return this.call("create_collection", params);
  }

  async listCollections(): Promise<Collection[]> {
    return this.call("list_collections", { include_counts: true });
  }

  // --- Tags ---

  async listTags(params?: {
    include_counts?: boolean;
    limit?: number;
  }): Promise<Array<{ name: string; count?: number }>> {
    return this.call("list_tags", params ?? {});
  }

  // --- Versions ---

  async getPromptVersions(promptId: string): Promise<unknown[]> {
    return this.call("get_prompt_versions", { prompt_id: promptId });
  }

  // --- Private ---

  private async call<T>(tool: string, params: Record<string, unknown>): Promise<T> {
    // TODO: Implement actual MCP client transport (stdio or HTTP+SSE)
    // This will use the Promptmark service account API key for auth.
    //
    // For now, throw to make it clear this is a scaffold.
    throw new Error(
      `PromptmarkClient.${tool}() not yet implemented — awaiting service account feature. ` +
        `See: https://github.com/ironystock/promptmark-ai/blob/master/docs/api/mcp-reference.md`
    );
  }
}

/**
 * Create a Promptmark client from environment variables.
 */
export function createClient(): PromptmarkClient {
  const apiKey = process.env.PROMPTMARK_API_KEY;
  if (!apiKey) {
    throw new Error(
      "PROMPTMARK_API_KEY environment variable is required. " +
        "Get your API key from https://promptmark.ai/settings"
    );
  }
  return new PromptmarkClient({
    apiKey,
    baseUrl: process.env.PROMPTMARK_BASE_URL,
  });
}
