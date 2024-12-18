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
import Taro from "@tarojs/taro";
var baseUrl;
var toast = null;
var setBaseUrl = function (_baseUrl) {
    baseUrl = _baseUrl;
};
var getBaseUrl = function () {
    return baseUrl;
};
var setToast = function (_toast) {
    toast = _toast;
};
export { setBaseUrl, getBaseUrl, setToast };
var request = function (path, method, data) { return __awaiter(void 0, void 0, void 0, function () {
    var res, cookie;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!baseUrl) {
                    throw new Error("baseUrl is empty");
                }
                return [4 /*yield*/, Taro.request({
                        url: "".concat(baseUrl).concat(path),
                        method: method,
                        data: data,
                        header: {
                            "content-type": "application/json",
                            Cookie: Taro.getStorageSync("cookieKey"),
                        },
                    })];
            case 1:
                res = _a.sent();
                cookie = res.header["set-cookie"] || res.header["Set-Cookie"];
                if (res && res.header && cookie) {
                    Taro.setStorageSync("cookieKey", cookie); //保存Cookie到Storage
                }
                return [2 /*return*/, res.data];
        }
    });
}); };
export var rGet = function (path, data) { return __awaiter(void 0, void 0, void 0, function () {
    var res, err;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, request(path, "GET", data)];
            case 1:
                res = _b.sent();
                if ((res === null || res === void 0 ? void 0 : res.code) === 0) {
                    return [2 /*return*/, res === null || res === void 0 ? void 0 : res.data];
                }
                err = (res === null || res === void 0 ? void 0 : res.msg) || "系统异常";
                (_a = toast === null || toast === void 0 ? void 0 : toast.error) === null || _a === void 0 ? void 0 : _a.call(toast, err);
                throw err;
        }
    });
}); };
export var rGetQuietly = function (path, data) { return __awaiter(void 0, void 0, void 0, function () {
    var res, err;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, request(path, "GET", data)];
            case 1:
                res = _a.sent();
                if ((res === null || res === void 0 ? void 0 : res.code) === 0) {
                    return [2 /*return*/, res === null || res === void 0 ? void 0 : res.data];
                }
                err = (res === null || res === void 0 ? void 0 : res.msg) || "系统异常";
                throw err;
        }
    });
}); };
export var rPost = function (path, data) { return __awaiter(void 0, void 0, void 0, function () {
    var res, err;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, request(path, "POST", data)];
            case 1:
                res = _b.sent();
                if ((res === null || res === void 0 ? void 0 : res.code) === 0) {
                    return [2 /*return*/, res === null || res === void 0 ? void 0 : res.data];
                }
                err = (res === null || res === void 0 ? void 0 : res.msg) || "系统异常";
                (_a = toast === null || toast === void 0 ? void 0 : toast.error) === null || _a === void 0 ? void 0 : _a.call(toast, err);
                throw err;
        }
    });
}); };
export var rPostQuietly = function (path, data) { return __awaiter(void 0, void 0, void 0, function () {
    var res, err;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, request(path, "POST", data)];
            case 1:
                res = _a.sent();
                if ((res === null || res === void 0 ? void 0 : res.code) === 0) {
                    return [2 /*return*/, res === null || res === void 0 ? void 0 : res.data];
                }
                err = (res === null || res === void 0 ? void 0 : res.msg) || "系统异常";
                throw err;
        }
    });
}); };
export var rPut = function (path, data) { return __awaiter(void 0, void 0, void 0, function () {
    var res, err;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, request(path, "PUT", data)];
            case 1:
                res = _b.sent();
                if ((res === null || res === void 0 ? void 0 : res.code) === 0) {
                    return [2 /*return*/, res === null || res === void 0 ? void 0 : res.data];
                }
                err = (res === null || res === void 0 ? void 0 : res.msg) || "系统异常";
                (_a = toast === null || toast === void 0 ? void 0 : toast.error) === null || _a === void 0 ? void 0 : _a.call(toast, err);
                throw err;
        }
    });
}); };
export var rPutQuietly = function (path, data) { return __awaiter(void 0, void 0, void 0, function () {
    var res, err;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, request(path, "PUT", data)];
            case 1:
                res = _a.sent();
                if ((res === null || res === void 0 ? void 0 : res.code) === 0) {
                    return [2 /*return*/, res === null || res === void 0 ? void 0 : res.data];
                }
                err = (res === null || res === void 0 ? void 0 : res.msg) || "系统异常";
                throw err;
        }
    });
}); };
