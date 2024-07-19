const path = require("path");
const { listFiles, listFolders, listAll } = require("../lib");

describe("file-utils", () => {
  test("listFiles", async () => {
    const files = await listFiles(path.resolve(__dirname));
    const foundTestFile = !!files.find((filename) =>
      filename.indexOf("file-utils.test.js")
    );
    expect(foundTestFile).toBeTruthy();
  });

  test("listFolders", async () => {
    const folders = await listFolders(path.resolve(__dirname, "../src"));
    expect(folders.length === 1);
  });

  test("listAll", async () => {
    const allFileItems = await listAll(path.resolve(__dirname, "../src"));
    expect(allFileItems.length === 7);
  });
});
