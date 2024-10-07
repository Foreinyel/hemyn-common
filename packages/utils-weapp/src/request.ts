import Taro from "@tarojs/taro";

let baseUrl: string;

const setBaseUrl = (_baseUrl: string) => {
  baseUrl = _baseUrl;
}

const getBaseUrl = () => {
  return baseUrl;
}

export {
  setBaseUrl, 
  getBaseUrl
}



export interface Reponse<T> {
  code: number;
  data?: T;
  message?: string;
}

const request = async <T, U>(
  path: string,
  method: "GET" | "POST" | "PUT",
  data: U
) => {

  if (!baseUrl) {

    throw new Error("baseUrl is empty")
  }

  const res: Taro.request.SuccessCallbackResult = await Taro.request({
    url: `${baseUrl}${path}`,
    method,
    data,
    header: {
      "content-type": "application/json",
      Cookie: Taro.getStorageSync("cookieKey")
    }
  });
  const cookie = res.header["set-cookie"] || res.header["Set-Cookie"];
  if (res && res.header && cookie) {
    Taro.setStorageSync("cookieKey", cookie); //保存Cookie到Storage
  }
  return res.data as T;
};

export const rGet: <T>(path: string) => Promise<Reponse<T>> = async path => {
  return await request(path, "GET", null);
};

export const rPost: <T, U>(
  path: string,
  data: U
) => Promise<Reponse<T>> = async (path, data) => {
  return await request(path, "POST", data);
};

export const rPut: <T, U>(
  path: string,
  data: U
) => Promise<Reponse<T>> = async (path, data) => {
  return await request(path, "PUT", data);
};
