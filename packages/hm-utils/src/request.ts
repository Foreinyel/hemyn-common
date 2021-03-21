import message from "antd/es/message";
import axios from "axios";

export interface Response<T> {
  code: number;
  data: T;
  message?: string;
}

const instance = axios.create({
  timeout: 60000,
});

instance.interceptors.response.use(
  (res) => {
    if (res.headers["content-type"] === "application/octet-stream") {
      const filename = res.headers["content-disposition"].match(
        /filename=(.*)/
      )[1];
      const blob = new Blob([res.data], { type: "application/octet-stream" });
      if (typeof window.navigator.msSaveBlob !== "undefined") {
        // 兼容IE，window.navigator.msSaveBlob：以本地方式保存文件
        window.navigator.msSaveBlob(blob, decodeURI(filename));
      } else {
        // 创建新的URL并指向File对象或者Blob对象的地址
        const blobURL = window.URL.createObjectURL(blob);
        // 创建a标签，用于跳转至下载链接
        const tempLink = document.createElement("a");
        tempLink.style.display = "none";
        tempLink.href = blobURL;
        tempLink.setAttribute("download", decodeURI(filename));
        // 兼容：某些浏览器不支持HTML5的download属性
        if (typeof tempLink.download === "undefined") {
          tempLink.setAttribute("target", "_blank");
        }
        // 挂载a标签
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        // 释放blob URL地址
        window.URL.revokeObjectURL(blobURL);
      }
      return Promise.resolve();
    }
    if (res.status === 200 && res.data && res.data.code === 0) {
      return Promise.resolve(res.data.data);
    }
    if (res.data && res.data.message) {
      // throw new Error(res.data.message);
      message.error(res.data.message);
      throw new Error(res.data.message);
    }
    message.error("请求失败");
    throw new Error("请求失败");
  },
  (err) => {
    if (err && err.message && err.message.indexOf("401") >= 0) {
      message.error("没有权限，请联系管理员!");
    } else {
      message.error("请求失败，请稍后再试!");
    }
  }
);

export const rPost = <T, U>(path: string, data: T) =>
  instance.post<Response<U>>(path, data);

export const rGet = <U>(path: string) =>
  instance.get<Response<U>>(path, {
    method: "get",
  });

export const rPut = <T, U>(path: string, data: T) =>
  instance.put<Response<U>>(path, {
    method: "put",
    data,
  });
