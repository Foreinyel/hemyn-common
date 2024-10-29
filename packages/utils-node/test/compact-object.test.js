const path = require("path");
const { compactObject } = require("../lib");

describe("compact-object", () => {
  test("compactObject", async () => {
    const o1 = {
      a: undefined,
      b: null,
      c: "",
      d: 0,
      e: 4
    }

    const o2 = compactObject(o1);
    
    expect(Object.keys(o2).length).toBe(2);
  });
});
