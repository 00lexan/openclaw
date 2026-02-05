import type { PluginApi } from "../../src/plugins/types.js";
import { createLlmTaskTool } from "./src/llm-task-tool.js";

export default function register(api: PluginApi) {
  api.registerTool(createLlmTaskTool(api), { optional: true });
}

