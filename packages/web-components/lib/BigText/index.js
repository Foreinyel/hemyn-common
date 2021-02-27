"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var BigText = function (props) {
    var text = props.text;
    // if (!text) {
    //   return '';
    // }
    var para = text || "";
    var valArr = para.split("\n");
    var ele = [];
    if (valArr && valArr.length > 0) {
        valArr.forEach(function (v) {
            if (v) {
                ele.push(react_1.default.createElement("p", { key: v }, v));
            }
        });
    }
    else {
        ele.push(react_1.default.createElement("p", { key: "single-para" }, para));
    }
    var data = react_1.useMemo(function () {
        return {
            isBig: para.length > 10,
            shortText: para.substr(0, 10),
        };
    }, [text]);
    return data.isBig ? (react_1.default.createElement(antd_1.Tooltip, { title: ele },
        data.shortText,
        "...")) : (react_1.default.createElement("span", null, ele));
};
exports.default = BigText;
