import { message } from "antd";
import axios from "axios";
import { NormalHttpStatusCode } from ".";
import { getToken } from "./token";

export interface RequestOptions {
  requestInterceptors?: (config: any) => void;
  timeout?: number;
  isOk?: (res: any) => boolean;
  getErr?: (res: any) => string;
  getData?: (res: any) => any;
}

type Required<T> = {
  [k in keyof T]-?: T[k];
};

const defaultOptions: RequestOptions = {
  timeout: 60000,
  requestInterceptors: (config: any) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  isOk: (res) => res.data && res.data.code === 0,
  getErr: (res) => res.data && res.data.message,
  getData: (res: any) => res.data?.data,
};

export default (options: RequestOptions) => {
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  } as Required<RequestOptions>;

  const instance = axios.create({
    timeout: mergedOptions.timeout,
  });

  instance.interceptors.request.use(mergedOptions.requestInterceptors);

  instance.interceptors.response.use(
    (res) => {
      if (res.headers["content-type"] === "application/octet-stream") {
        const filename =
          res.headers["content-disposition"].match(/filename=(.*)/)[1];
        const blob = new Blob([res.data], { type: "application/octet-stream" });
        if (typeof (window.navigator as any).msSaveBlob !== "undefined") {
          // 兼容IE，window.navigator.msSaveBlob：以本地方式保存文件
          (window.navigator as any).msSaveBlob(blob, decodeURI(filename));
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
      if (`${res.status}` in NormalHttpStatusCode && mergedOptions.isOk(res)) {
        return Promise.resolve(mergedOptions.getData(res));
      }
      if (mergedOptions.getErr(res)) {
        message.error(mergedOptions.getErr(res));
        throw new Error(mergedOptions.getErr(res));
      }
      message.error("请求失败");
      throw new Error("请求失败");
    },
    (err) => {
      const {
        response: { data },
      } = err;

      if (data.statusCode === 401) {
        message.error("没有权限，或登录状态失效!");
        window.location.href = "/login";
      } else if (data.message) {
        message.error(data.message.join(";"));
      } else {
        message.error("请求失败，请稍后再试!");
      }
    }
  );
};
