"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseResourceName = void 0;
var parseResourceName = function (name) {
    var newName = name.replace(/@/g, "").replace(/\//g, "_");
    return newName;
};
exports.parseResourceName = parseResourceName;
