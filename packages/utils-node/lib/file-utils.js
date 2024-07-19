"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAll = exports.listFolders = exports.listFiles = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var util_1 = __importDefault(require("util"));
var readdir = util_1.default.promisify(fs_1.default.readdir);
var statfile = util_1.default.promisify(fs_1.default.stat);
var listFiles = function (cwd, excludes) {
    if (excludes === void 0) { excludes = []; }
    return __awaiter(void 0, void 0, void 0, function () {
        var fileList, files, _i, files_1, file, fPath, stat, subFileList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fileList = [];
                    return [4 /*yield*/, readdir(cwd)];
                case 1:
                    files = _a.sent();
                    _i = 0, files_1 = files;
                    _a.label = 2;
                case 2:
                    if (!(_i < files_1.length)) return [3 /*break*/, 7];
                    file = files_1[_i];
                    fPath = path_1.default.join(cwd, file);
                    return [4 /*yield*/, statfile(fPath)];
                case 3:
                    stat = _a.sent();
                    if (!stat.isFile()) return [3 /*break*/, 4];
                    fileList.push(fPath);
                    return [3 /*break*/, 6];
                case 4:
                    if (!!excludes.includes(fPath)) return [3 /*break*/, 6];
                    return [4 /*yield*/, exports.listFiles(fPath)];
                case 5:
                    subFileList = _a.sent();
                    fileList.push.apply(fileList, subFileList);
                    _a.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 2];
                case 7: return [2 /*return*/, fileList];
            }
        });
    });
};
exports.listFiles = listFiles;
var listFolders = function (cwd, excludes) {
    if (excludes === void 0) { excludes = []; }
    return __awaiter(void 0, void 0, void 0, function () {
        var folderList, files, _i, files_2, file, fPath, stat, subFolderList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    folderList = [];
                    return [4 /*yield*/, readdir(cwd)];
                case 1:
                    files = _a.sent();
                    _i = 0, files_2 = files;
                    _a.label = 2;
                case 2:
                    if (!(_i < files_2.length)) return [3 /*break*/, 6];
                    file = files_2[_i];
                    fPath = path_1.default.join(cwd, file);
                    return [4 /*yield*/, statfile(fPath)];
                case 3:
                    stat = _a.sent();
                    if (!(stat.isDirectory() && !excludes.includes(fPath))) return [3 /*break*/, 5];
                    folderList.push(fPath);
                    return [4 /*yield*/, exports.listFolders(fPath)];
                case 4:
                    subFolderList = _a.sent();
                    folderList.push.apply(folderList, subFolderList);
                    _a.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 2];
                case 6: return [2 /*return*/, folderList];
            }
        });
    });
};
exports.listFolders = listFolders;
var listAll = function (cwd) { return __awaiter(void 0, void 0, void 0, function () {
    var folderList, fileList, all, _i, folderList_1, folder, children, _a, fileList_1, fileItem;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, exports.listFolders(cwd)];
            case 1:
                folderList = _b.sent();
                return [4 /*yield*/, exports.listFiles(cwd)];
            case 2:
                fileList = _b.sent();
                all = [];
                _i = 0, folderList_1 = folderList;
                _b.label = 3;
            case 3:
                if (!(_i < folderList_1.length)) return [3 /*break*/, 6];
                folder = folderList_1[_i];
                return [4 /*yield*/, exports.listAll(folder)];
            case 4:
                children = _b.sent();
                all.push({
                    type: "folder",
                    path: folder,
                    children: children,
                });
                _b.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 3];
            case 6:
                for (_a = 0, fileList_1 = fileList; _a < fileList_1.length; _a++) {
                    fileItem = fileList_1[_a];
                    all.push({
                        type: "file",
                        path: fileItem,
                    });
                }
                return [2 /*return*/, all];
        }
    });
}); };
exports.listAll = listAll;
