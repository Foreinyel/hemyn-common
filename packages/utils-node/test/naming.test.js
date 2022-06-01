const path = require("path");
const { parseResourceName } = require("../lib");

describe("naming", () => {
  test("parseResourceName", async () => {
    expect(parseResourceName("@hemyn/utils-node")).toBe("hemyn_utils-node");
  });
});
