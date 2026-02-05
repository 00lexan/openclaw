import type { ElevatedLevel, ReasoningLevel } from "./directives.js";
import { formatCliCommand } from "../../cli/command-format.js";

export const SYSTEM_MARK = "âš™ï¸";

export const formatDirectiveAck = (text: string): string => {
  if (!text) {
    return text;
  }
  if (text.startsWith(SYSTEM_MARK)) {
    return text;
  }
  return `${SYSTEM_MARK} ${text}`;
};

export const formatOptionsLine = (options: string) => `Options: ${options}.`;
export const withOptions = (line: string, options: string) =>
  `${line}\n${formatOptionsLine(options)}`;

export const formatElevatedRuntimeHint = () =>
  `${SYSTEM_MARK} Runtime is direct; sandboxing does not apply.`;

export const formatElevatedEvent = (level: ElevatedLevel) => {
  if (level === "full") {
    return "Elevated FULL â€” exec runs on host with auto-approval.";
  }
  if (level === "ask" || level === "on") {
    return "Elevated ASK â€” exec runs on host; approvals may still apply.";
  }
  return "Elevated OFF â€” exec stays in sandbox.";
};

export const formatReasoningEvent = (level: ReasoningLevel) => {
  if (level === "stream") {
    return "Reasoning STREAM â€” emit live <think>.";
  }
  if (level === "on") {
    return "Reasoning ON â€” include <think>.";
  }
  return "Reasoning OFF â€” hide <think>.";
};

export function formatElevatedUnavailableText(params: {
  runtimeSandboxed: boolean;
  failures?: Array<{ gate: string; key: string }>;
  sessionKey?: string;
}): string {
  const lines: string[] = [];
  lines.push(
    `elevated is not available right now (runtime=${params.runtimeSandboxed ? "sandboxed" : "direct"}).`,
  );
  const failures = params.failures ?? [];
  if (failures.length > 0) {
    lines.push(`Failing gates: ${failures.map((f) => `${f.gate} (${f.key})`).join(", ")}`);
  } else {
    lines.push(
      "Fix-it keys: tools.elevated.enabled, tools.elevated.allowFrom.<provider>, agents.list[].tools.elevated.*",
    );
  }
  if (params.sessionKey) {
    lines.push(
      `See: ${formatCliCommand(` sandbox explain --session ${params.sessionKey}`)}`,
    );
  }
  return lines.join("\n");
}


