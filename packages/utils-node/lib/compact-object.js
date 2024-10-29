"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compactObject = void 0;
var lodash_1 = __importDefault(require("lodash"));
var compactObject = function (obj) {
    var newObj = lodash_1.default.omitBy(obj, lodash_1.default.isUndefined);
    newObj = lodash_1.default.omitBy(newObj, lodash_1.default.isNull);
    newObj = lodash_1.default.omitBy(newObj, function (val) { return val === ''; });
    return newObj;
};
exports.compactObject = compactObject;
