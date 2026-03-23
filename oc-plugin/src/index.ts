import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";
import { Type } from "@sinclair/typebox";
import { registerPromptTools } from "./tools/prompts.js";
import { registerCaptureTools } from "./tools/capture.js";
import { registerLibraryTools } from "./tools/library.js";
import { registerCaptureService } from "./services/capture-service.js";

export default definePluginEntry({
  id: "promptmark",
  name: "Promptmark",

  register(api) {
    const { logger, pluginConfig } = api;

    logger.info("Promptmark plugin loading");

    // Register prompt management tools (LLM-callable)
    registerPromptTools(api);

    // Register capture/response tools
    registerCaptureTools(api);

    // Register library management tools
    registerLibraryTools(api);

    // Register background capture service
    registerCaptureService(api);

    logger.info("Promptmark plugin ready — tools, capture service, and skills loaded");
  },
});
