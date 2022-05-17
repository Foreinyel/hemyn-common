var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import message from "antd/es/message";
import axios from "axios";
import { getToken } from "./token";
// const NormalHttpStatusCode =
export var NormalHttpStatusCode;
(function (NormalHttpStatusCode) {
    NormalHttpStatusCode[NormalHttpStatusCode["SUCCESS"] = 200] = "SUCCESS";
    NormalHttpStatusCode[NormalHttpStatusCode["SUCCESS_CREATED"] = 201] = "SUCCESS_CREATED";
    NormalHttpStatusCode[NormalHttpStatusCode["SUCCESS_ACCEPTED"] = 202] = "SUCCESS_ACCEPTED";
})(NormalHttpStatusCode || (NormalHttpStatusCode = {}));
var instance = axios.create({
    timeout: 60000,
});
instance.interceptors.request.use(function (config) {
    var token = getToken();
    if (token) {
        config.headers.Authorization = "Bearer ".concat(token);
    }
    return config;
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
    if ("".concat(res.status) in NormalHttpStatusCode &&
        res.data &&
        res.data.code === 0) {
        return Promise.resolve(res.data.data);
    }
    if (res.data && res.data.message) {
        message.error(res.data.message);
        throw new Error(res.data.message);
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
        // message.error("请求失败，请稍后再试");
        message.error(data.message.join(";"));
    }
    else {
        message.error("请求失败，请稍后再试!");
    }
});
export var rPost = function (path, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, instance.post(path, data)];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
export var rGet = function (path) { return __awaiter(void 0, void 0, void 0, function () {
    var _path;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (path.indexOf("?") >= 0) {
                    _path = "".concat(path, "&t=").concat(Date.now());
                }
                else {
                    _path = "".concat(path, "?t=").concat(Date.now());
                }
                return [4 /*yield*/, instance.get(_path, {
                        method: "get",
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var rPut = function (path, data) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, instance.put(path, {
                    method: "put",
                    data: data,
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
