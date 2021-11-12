import { EnvParser } from "./env-parser";
import errors from "_/__errors";
import { testSource, testPrefix1, testPrefix2 } from "_/__mock-data__/accounts";

describe.only("EnvParser", () => {
  describe("constructor & setSource & getSource", () => {
    it("sets/gets as expected", () => {
      const testSource = {
        test1: "1",
        test2: "2",
      };
      const envParser = new EnvParser(testSource);
      expect(envParser.getSource()).toBe(testSource);
    });

    it("uses `process.env` as source if constructor has no param", () => {
      const envParser = new EnvParser();
      expect(envParser.getSource()).toBe(process.env);
    });

    it("sets, gets source", () => {
      const testSource = { test: "hello" };
      const envParser = new EnvParser(testSource);
      expect(envParser.getSource()).toBe(testSource);
    });

    it("doesn't allow [] as source", () => {
      // @ts-ignore
      const testSource = [];
      // @ts-expect-error
      expect(() => new EnvParser(testSource)).toThrowError(
        errors.SOURCE_SHALL_BE_OBJECT
      );
    });

    it("doesn't allow null as source", () => {
      // @ts-ignore
      const testSource = null;
      // @ts-expect-error
      expect(() => new EnvParser(testSource)).toThrowError(
        errors.SOURCE_SHALL_BE_OBJECT
      );
    });
  });

  describe("parse", () => {
    let envParser: EnvParser;

    beforeEach(() => {
      envParser = new EnvParser(testSource);
    });

    describe("isParsed", () => {
      it("false before parse", () => {
        expect(envParser.isParsed()).toBe(false);
      });

      it("true after parse", () => {
        envParser.parse(testPrefix1);
        expect(envParser.isParsed()).toBe(true);
      });
    });

    describe("parseRaw", () => {
      it("Raw is map", () => {
        const raw = envParser.getRaw();
        expect(raw instanceof Map).toBe(true);
      });

      describe("has correct map size", () => {
        /**
         * The test should skip the undefined key, so the total number
         * of raw accounts shall be 5
         */
        it("Raw has expected size with `testPrefix1`", () => {
          envParser.parse(testPrefix1);
          const raw = envParser.getRaw();
          expect(raw.size).toBe(5); // #1
        });

        /**
         * The test should skip the undefined key, so the total number
         * of raw accounts shall be 2
         */
        it("Raw has expected size with `testPrefix2`", () => {
          envParser.parse(testPrefix2);
          const raw = envParser.getRaw();
          expect(raw.size).toBe(2); // #1
        });
      });

      describe("produces expected keys", () => {
        it("Raw has expected keys for `testPrefix1`", () => {
          envParser.parse(testPrefix1);
          const raw = envParser.getRaw();
          const keys = raw.keys();
          expect(keys.next().value).toBe("GROUP1_USER1");
          expect(keys.next().value).toBe("GROUP1_USER2");
          expect(keys.next().value).toBe("GROUP2_USER1");
          expect(keys.next().value).toBe("GROUP2_USER2");
          expect(keys.next().value).toBe("GROUP2_USER3");
          expect(keys.next().done).toBe(true);
        });

        it("Raw has expected keys for `testPrefix2`", () => {
          envParser.parse(testPrefix2);
          const raw = envParser.getRaw();
          const keys = raw.keys();
          expect(keys.next().value).toBe("GROUP1_USER1");
          expect(keys.next().value).toBe("GROUP1_USER2");
          expect(keys.next().done).toBe(true);
        });
      });

      describe("produces expected values", () => {
        it("Raw has expected values for `testPrefix1`", () => {
          envParser.parse(testPrefix1);
          const raw = envParser.getRaw();
          const values = raw.values();
          expect(values.next().value).toBe(testSource.ACCOUNT_GROUP1_USER1);
          expect(values.next().value).toBe(testSource.ACCOUNT_GROUP1_USER2);
          expect(values.next().value).toBe(testSource.ACCOUNT_GROUP2_USER1);
          expect(values.next().value).toBe(testSource.ACCOUNT_GROUP2_USER2);
          expect(values.next().value).toBe(testSource.ACCOUNT_GROUP2_USER3);
          expect(values.next().done).toBe(true);
        });

        it("Raw has expected values for `testPrefix2`", () => {
          envParser.parse(testPrefix2);
          const raw = envParser.getRaw();
          const values = raw.values();
          expect(values.next().value).toBe(testSource.ACCOUNT_GROUP1_USER1);
          expect(values.next().value).toBe(testSource.ACCOUNT_GROUP1_USER2);
          expect(values.next().done).toBe(true);
        });
      });
    });
  });
});

export {};
