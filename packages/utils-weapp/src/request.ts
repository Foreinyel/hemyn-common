import Taro from "@tarojs/taro";

interface Toast {
  error?: (msg: string) => void;
}

let baseUrl: string;
let toast: Toast | null = null;

const setBaseUrl = (_baseUrl: string) => {
  baseUrl = _baseUrl;
};

const getBaseUrl = () => {
  return baseUrl;
};

const setToast = (_toast: Toast) => {
  toast = _toast;
};

export { setBaseUrl, getBaseUrl, setToast };

export interface Response<T> {
  code: number;
  data?: T;
  msg?: string;
}

const request = async <T, U>(
  path: string,
  method: "GET" | "POST" | "PUT",
  data?: U
) => {
  if (!baseUrl) {
    throw new Error("baseUrl is empty");
  }

  const res: Taro.request.SuccessCallbackResult = await Taro.request({
    url: `${baseUrl}${path}`,
    method,
    data,
    header: {
      "content-type": "application/json",
      Cookie: Taro.getStorageSync("cookieKey"),
    },
  });
  const cookie = res.header["set-cookie"] || res.header["Set-Cookie"];
  if (res && res.header && cookie) {
    Taro.setStorageSync("cookieKey", cookie); //保存Cookie到Storage
  }
  return res.data as Response<T>;
};

export const rGet = async <T, U>(path: string, data?: U) => {
  const res = await request<T, U>(path, "GET", data);
  if (res?.code === 0) {
    return res?.data;
  }
  const err = res?.msg || "系统异常";
  toast?.error?.(err);
  throw err;
};

export const rPost = async <T, U>(path: string, data?: U) => {
  const res = await request<T, U>(path, "POST", data);
  if (res?.code === 0) {
    return res?.data;
  }
  const err = res?.msg || "系统异常";
  toast?.error?.(err);
  throw err;
};

export const rPut = async <T, U>(path: string, data?: U) => {
  const res = await request(path, "PUT", data);
  if (res?.code === 0) {
    return res?.data;
  }
  const err = res?.msg || "系统异常";
  toast?.error?.(err);
  throw err;
};
