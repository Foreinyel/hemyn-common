import http from "http";
import https from "https";
import fs from "fs";
import path from "path";
import assert from "assert";
import compressing from "compressing";

const get_file = function (url: string, dest: string) {
  const client = url.startsWith("https") ? https : http;
  return new Promise((resolve) => {
    const writeStream = fs.createWriteStream(dest);
    client.get(url, (res) => {
      res.pipe(writeStream);
    });
    writeStream.on("finish", () => {
      writeStream.close();
      resolve(dest);
    });
  });
};

export interface DownloadOptions {
  dest: string;
  url: string;
  extract?: "zip";
  filename?: string;
}

export const download = async (options: DownloadOptions) => {
  const filename =
    options.filename || new URL(options.url)?.pathname?.split("/").pop();
  assert(!!filename, "Invalid filename.");
  const dest = path.resolve(options.dest, filename);
  await get_file(options.url, dest);
  if (options.extract === "zip") {
    await compressing.zip.uncompress(dest, options.dest);
  }
};
