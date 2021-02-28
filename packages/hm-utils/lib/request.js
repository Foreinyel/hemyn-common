"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rPut = exports.rGet = exports.rPost = void 0;
var antd_1 = require("antd");
var axios_1 = __importDefault(require("axios"));
var instance = axios_1.default.create({
    timeout: 60000,
});
instance.interceptors.response.use(function (res) {
    if (res.headers["content-type"] === "application/octet-stream") {
        var filename = res.headers["content-disposition"].match(/filename=(.*)/)[1];
        var blob = new Blob([res.data], { type: "application/octet-stream" });
        if (typeof window.navigator.msSaveBlob !== "undefined") {
            // 兼容IE，window.navigator.msSaveBlob：以本地方式保存文件
            window.navigator.msSaveBlob(blob, decodeURI(filename));
        }
        else {
            // 创建新的URL并指向File对象或者Blob对象的地址
            var blobURL = window.URL.createObjectURL(blob);
            // 创建a标签，用于跳转至下载链接
            var tempLink = document.createElement("a");
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
        antd_1.message.error(res.data.message);
        throw new Error(res.data.message);
    }
    antd_1.message.error("请求失败");
    throw new Error("请求失败");
});
exports.rPost = function (path, data) { return instance.post(path, data); };
exports.rGet = function (path) {
    return instance.get(path, {
        method: "get",
    });
};
exports.rPut = function (path, data) {
    return instance.put(path, {
        method: "put",
        data: data,
    });
};
