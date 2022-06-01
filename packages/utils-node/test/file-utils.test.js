const path = require("path");
const { listFiles } = require("../lib");

describe("file-utils", () => {
  test("listFiles", async () => {
    const files = await listFiles(path.resolve(__dirname));
    const foundTestFile = !!files.find((filename) =>
      filename.indexOf("file-utils.test.js")
    );
    expect(foundTestFile).toBeTruthy();
  });
});
