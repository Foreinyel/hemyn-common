import fs from "fs";
import path from "path";
import util from "util";

const readdir = util.promisify(fs.readdir);
const statfile = util.promisify(fs.stat);

export const listFiles = async (cwd: string, excludes: string[] = []) => {
  const fileList: string[] = [];
  const files = await readdir(cwd);
  for (let file of files) {
    let fPath = path.join(cwd, file);
    const stat = await statfile(fPath);
    if (stat.isFile()) {
      fileList.push(fPath);
    } else if (!excludes.includes(fPath)) {
      const subFileList = await listFiles(fPath);
      fileList.push(...subFileList);
    }
  }
  return fileList;
};
export const listFolders = async (cwd: string, excludes: string[] = []) => {
  const folderList: string[] = [];
  const files = await readdir(cwd);
  for (let file of files) {
    let fPath = path.join(cwd, file);
    const stat = await statfile(fPath);
    if (stat.isDirectory() && !excludes.includes(fPath)) {
      folderList.push(fPath);

      const subFolderList = await listFolders(fPath);
      folderList.push(...subFolderList);
    }
  }
  return folderList;
};
