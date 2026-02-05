import { describe, expect, it } from "vitest";
import {
  buildParseArgv,
  getFlagValue,
  getCommandPath,
  getPrimaryCommand,
  getPositiveIntFlagValue,
  getVerboseFlag,
  hasHelpOrVersion,
  hasFlag,
  shouldMigrateState,
  shouldMigrateStateFromPath,
} from "./argv.js";

describe("argv helpers", () => {
  it("detects help/version flags", () => {
    expect(hasHelpOrVersion(["node", "", "--help"])).toBe(true);
    expect(hasHelpOrVersion(["node", "", "-V"])).toBe(true);
    expect(hasHelpOrVersion(["node", "", "status"])).toBe(false);
  });

  it("extracts command path ignoring flags and terminator", () => {
    expect(getCommandPath(["node", "", "status", "--json"], 2)).toEqual(["status"]);
    expect(getCommandPath(["node", "", "agents", "list"], 2)).toEqual(["agents", "list"]);
    expect(getCommandPath(["node", "", "status", "--", "ignored"], 2)).toEqual(["status"]);
  });

  it("returns primary command", () => {
    expect(getPrimaryCommand(["node", "", "agents", "list"])).toBe("agents");
    expect(getPrimaryCommand(["node", ""])).toBeNull();
  });

  it("parses boolean flags and ignores terminator", () => {
    expect(hasFlag(["node", "", "status", "--json"], "--json")).toBe(true);
    expect(hasFlag(["node", "", "--", "--json"], "--json")).toBe(false);
  });

  it("extracts flag values with equals and missing values", () => {
    expect(getFlagValue(["node", "", "status", "--timeout", "5000"], "--timeout")).toBe(
      "5000",
    );
    expect(getFlagValue(["node", "", "status", "--timeout=2500"], "--timeout")).toBe(
      "2500",
    );
    expect(getFlagValue(["node", "", "status", "--timeout"], "--timeout")).toBeNull();
    expect(getFlagValue(["node", "", "status", "--timeout", "--json"], "--timeout")).toBe(
      null,
    );
    expect(getFlagValue(["node", "", "--", "--timeout=99"], "--timeout")).toBeUndefined();
  });

  it("parses verbose flags", () => {
    expect(getVerboseFlag(["node", "", "status", "--verbose"])).toBe(true);
    expect(getVerboseFlag(["node", "", "status", "--debug"])).toBe(false);
    expect(getVerboseFlag(["node", "", "status", "--debug"], { includeDebug: true })).toBe(
      true,
    );
  });

  it("parses positive integer flag values", () => {
    expect(getPositiveIntFlagValue(["node", "", "status"], "--timeout")).toBeUndefined();
    expect(
      getPositiveIntFlagValue(["node", "", "status", "--timeout"], "--timeout"),
    ).toBeNull();
    expect(
      getPositiveIntFlagValue(["node", "", "status", "--timeout", "5000"], "--timeout"),
    ).toBe(5000);
    expect(
      getPositiveIntFlagValue(["node", "", "status", "--timeout", "nope"], "--timeout"),
    ).toBeUndefined();
  });

  it("builds parse argv from raw args", () => {
    const nodeArgv = buildParseArgv({
      programName: "",
      rawArgs: ["node", "", "status"],
    });
    expect(nodeArgv).toEqual(["node", "", "status"]);

    const versionedNodeArgv = buildParseArgv({
      programName: "",
      rawArgs: ["node-22", "", "status"],
    });
    expect(versionedNodeArgv).toEqual(["node-22", "", "status"]);

    const versionedNodeWindowsArgv = buildParseArgv({
      programName: "",
      rawArgs: ["node-22.2.0.exe", "", "status"],
    });
    expect(versionedNodeWindowsArgv).toEqual(["node-22.2.0.exe", "", "status"]);

    const versionedNodePatchlessArgv = buildParseArgv({
      programName: "",
      rawArgs: ["node-22.2", "", "status"],
    });
    expect(versionedNodePatchlessArgv).toEqual(["node-22.2", "", "status"]);

    const versionedNodeWindowsPatchlessArgv = buildParseArgv({
      programName: "",
      rawArgs: ["node-22.2.exe", "", "status"],
    });
    expect(versionedNodeWindowsPatchlessArgv).toEqual(["node-22.2.exe", "", "status"]);

    const versionedNodeWithPathArgv = buildParseArgv({
      programName: "",
      rawArgs: ["/usr/bin/node-22.2.0", "", "status"],
    });
    expect(versionedNodeWithPathArgv).toEqual(["/usr/bin/node-22.2.0", "", "status"]);

    const nodejsArgv = buildParseArgv({
      programName: "",
      rawArgs: ["nodejs", "", "status"],
    });
    expect(nodejsArgv).toEqual(["nodejs", "", "status"]);

    const nonVersionedNodeArgv = buildParseArgv({
      programName: "",
      rawArgs: ["node-dev", "", "status"],
    });
    expect(nonVersionedNodeArgv).toEqual(["node", "", "node-dev", "", "status"]);

    const directArgv = buildParseArgv({
      programName: "",
      rawArgs: ["", "status"],
    });
    expect(directArgv).toEqual(["node", "", "status"]);

    const bunArgv = buildParseArgv({
      programName: "",
      rawArgs: ["bun", "src/entry.ts", "status"],
    });
    expect(bunArgv).toEqual(["bun", "src/entry.ts", "status"]);
  });

  it("builds parse argv from fallback args", () => {
    const fallbackArgv = buildParseArgv({
      programName: "",
      fallbackArgv: ["status"],
    });
    expect(fallbackArgv).toEqual(["node", "", "status"]);
  });

  it("decides when to migrate state", () => {
    expect(shouldMigrateState(["node", "", "status"])).toBe(false);
    expect(shouldMigrateState(["node", "", "health"])).toBe(false);
    expect(shouldMigrateState(["node", "", "sessions"])).toBe(false);
    expect(shouldMigrateState(["node", "", "memory", "status"])).toBe(false);
    expect(shouldMigrateState(["node", "", "agent", "--message", "hi"])).toBe(false);
    expect(shouldMigrateState(["node", "", "agents", "list"])).toBe(true);
    expect(shouldMigrateState(["node", "", "message", "send"])).toBe(true);
  });

  it("reuses command path for migrate state decisions", () => {
    expect(shouldMigrateStateFromPath(["status"])).toBe(false);
    expect(shouldMigrateStateFromPath(["agents", "list"])).toBe(true);
  });
});

