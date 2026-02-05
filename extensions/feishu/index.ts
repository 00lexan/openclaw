import type { PluginApi } from "/plugin-sdk";
import { emptyPluginConfigSchema } from "/plugin-sdk";
import { feishuPlugin } from "./src/channel.js";

const plugin = {
  id: "feishu",
  name: "Feishu",
  description: "Feishu (Lark) channel plugin",
  configSchema: emptyPluginConfigSchema(),
  register(api: PluginApi) {
    api.registerChannel({ plugin: feishuPlugin });
  },
};

export default plugin;


