var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { message } from "antd";
import axios from "axios";
import { NormalHttpStatusCode } from ".";
import { getToken } from "./token";
var defaultOptions = {
    timeout: 60000,
    requestInterceptors: function (config) {
        var token = getToken();
        if (token) {
            config.headers.Authorization = "Bearer ".concat(token);
        }
        return config;
    },
    isOk: function (res) { return res.data && res.data.code === 0; },
    getErr: function (res) { return res.data && res.data.message; },
    getData: function (res) { var _a; return (_a = res.data) === null || _a === void 0 ? void 0 : _a.data; },
};
export default (function (options) {
    var mergedOptions = __assign(__assign({}, defaultOptions), options);
    var instance = axios.create({
        timeout: mergedOptions.timeout,
    });
    instance.interceptors.request.use(mergedOptions.requestInterceptors);
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
        if ("".concat(res.status) in NormalHttpStatusCode && mergedOptions.isOk(res)) {
            return Promise.resolve(mergedOptions.getData(res));
        }
        if (mergedOptions.getErr(res)) {
            message.error(mergedOptions.getErr(res));
            throw new Error(mergedOptions.getErr(res));
        }
        message.error("请求失败");
        throw new Error("请求失败");
    }, function (err) {
        var data = err.response.data;
        if (data.statusCode === 401) {
            message.error("没有权限，或登录状态失效!");
            window.location.href = "/login";
        }
        else if (data.message) {
            message.error(data.message.join(";"));
        }
        else {
            message.error("请求失败，请稍后再试!");
        }
    });
});
