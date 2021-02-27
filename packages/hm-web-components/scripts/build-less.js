const path = require("path");
const fs = require("fs");

const libPath = path.resolve(__dirname, "../lib");

const listAllLess = (arr, lessList) => {
  while (arr.length > 0) {
    const dir = arr.shift();
    const dirs = fs.readdirSync(dir);
    dirs.forEach((_dir) => {
      const fullPath = path.join(dir, _dir);
      const stats = fs.statSync(fullPath);
      if (stats.isDirectory()) {
        arr.push(fullPath);
      } else if (fullPath.endsWith("less")) {
        lessList.push(fullPath);
      }
    });
  }
};

const build = async () => {
  const src = path.resolve(__dirname, "../src");
  const lessList = [];
  listAllLess([src], lessList);
  console.log(lessList);

  // merge to one big less
  const styleLess = "style.less";
  const targetLessFile = path.join(libPath, styleLess);
  console.log(targetLessFile);
  // const exists = fs.statSync(targetLessFile);
  // console.log(exists);
  try {
    // 删除文件
    fs.unlinkSync(targetLessFile);
  } catch (err) {
    console.error(`failed to delete ${styleLess}`);
  }

  const file = fs.openSync(targetLessFile, "w");

  lessList.forEach((item) => {
    const data = fs.readFileSync(item, "utf-8");
    fs.appendFileSync(file, data);
  });
};

// module.exports = build;

build();
