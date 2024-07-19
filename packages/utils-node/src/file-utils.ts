import fs from "fs";
import path from "path";
import util from "util";

const readdir = util.promisify(fs.readdir);
const statfile = util.promisify(fs.stat);

export interface FileItem {
  type: "folder" | "file";
  path: string;
  children?: FileItem[];
}

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

export const listAll = async (cwd: string, excludes: string[] = []) => {
  const folderList = await listFolders(cwd);
  const fileList = await listFiles(cwd);
  const all: FileItem[] = [];

  for (let folder of folderList) {
    if (!excludes.some((ex) => folder.startsWith(ex))) {
      let children = await listAll(folder);
      all.push({
        type: "folder",
        path: folder,
        children,
      });
    }
  }

  for (let fileItem of fileList) {
    if (!excludes.some((ex) => fileItem.startsWith(ex))) {
      all.push({
        type: "file",
        path: fileItem,
      });
    }
  }

  return all;
};
