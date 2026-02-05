import path from "node:path";
import { describe, expect, it } from "vitest";
import { resolveGatewayStateDir } from "./paths.js";

describe("resolveGatewayStateDir", () => {
  it("uses the default state dir when no overrides are set", () => {
    const env = { HOME: "/Users/test" };
    expect(resolveGatewayStateDir(env)).toBe(path.join("/Users/test", "."));
  });

  it("appends the profile suffix when set", () => {
    const env = { HOME: "/Users/test", _PROFILE: "rescue" };
    expect(resolveGatewayStateDir(env)).toBe(path.join("/Users/test", ".-rescue"));
  });

  it("treats default profiles as the base state dir", () => {
    const env = { HOME: "/Users/test", _PROFILE: "Default" };
    expect(resolveGatewayStateDir(env)).toBe(path.join("/Users/test", "."));
  });

  it("uses _STATE_DIR when provided", () => {
    const env = { HOME: "/Users/test", _STATE_DIR: "/var/lib/" };
    expect(resolveGatewayStateDir(env)).toBe(path.resolve("/var/lib/"));
  });

  it("expands ~ in _STATE_DIR", () => {
    const env = { HOME: "/Users/test", _STATE_DIR: "~/-state" };
    expect(resolveGatewayStateDir(env)).toBe(path.resolve("/Users/test/-state"));
  });

  it("preserves Windows absolute paths without HOME", () => {
    const env = { _STATE_DIR: "C:\\State\\" };
    expect(resolveGatewayStateDir(env)).toBe("C:\\State\\");
  });
});

