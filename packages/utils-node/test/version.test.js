const path = require("path");
const { getNextVersion } = require("../lib");

describe("version", () => {
  test("getNextVersion: get default version", async () => {
    expect(getNextVersion()).toBe("1.0.0");
  });

  test("getNextVersion: get default beta version", async () => {
    expect(getNextVersion({ beta: true })).toBe("1.0.0-beta.0");
  });

  test("getNextVersion: get version from curent version", async () => {
    expect(getNextVersion({ version: "1.0.1" })).toBe("1.0.2");
  });
  test("getNextVersion: get beta version from curent version", async () => {
    expect(getNextVersion({ version: "1.0.1", beta: true })).toBe(
      "1.0.2-beta.0"
    );
  });
  test("getNextVersion: get version from curent beta version", async () => {
    expect(getNextVersion({ version: "1.0.1-beta.0" })).toBe("1.0.1");
  });
  test("getNextVersion: get beta version from curent beta version", async () => {
    expect(getNextVersion({ version: "1.0.1-beta.0", beta: true })).toBe(
      "1.0.1-beta.1"
    );
  });
});
