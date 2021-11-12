import { EnvPrefix } from "./env-prefix";
import errors from "../__errors";

describe("EnvPrefix", () => {
  describe("happy", () => {
    it("sets/gets 1 length string", () => {
      const prefix = "a";
      const envPrefix = new EnvPrefix();
      envPrefix.set(prefix);
      expect(envPrefix.get()).toEqual(prefix);
    });

    it("sets/gets 10000 length string", () => {
      const prefix = "a".repeat(10000);
      const envPrefix = new EnvPrefix();
      envPrefix.set(prefix);
      expect(envPrefix.get()).toEqual(prefix);
    });
  });

  describe("errors", () => {
    it("sets/gets 0 length string", () => {
      const prefix = "";
      const envPrefix = new EnvPrefix();

      expect(() => envPrefix.set(prefix)).toThrowError(errors.NO_EMPTY_STRING);
    });

    it("doesn't get without prior set", () => {
      const envPrefix = new EnvPrefix();
      expect(() => envPrefix.get()).toThrowError(errors.NO_GET_WITHOUT_SET);
    });
  });
});

export {};
