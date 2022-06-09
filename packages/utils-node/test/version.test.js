const path = require("path");
const { getNextVersion, versionCompare } = require("../lib");

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

  test("versionCompare", async () => {
    expect(versionCompare("1.2.3", "1.2.2")).toBeTruthy();
    expect(versionCompare("1.2.3", "1.2.4")).toBeFalsy();
    expect(versionCompare("1.4.3", "1.2.4")).toBeTruthy();
    expect(versionCompare("1.4.3", "1.4.3")).toBeFalsy();
    expect(versionCompare("2.4.3", "1.4.3")).toBeTruthy();
    expect(versionCompare("2.4.3", "2.4.3-0")).toBeFalsy();
    expect(versionCompare("2.4.2-0", "2.4.3")).toBeFalsy();
    expect(versionCompare("2.4.2-0", "2.4.2-1")).toBeFalsy();
  });
});
