"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Col = exports.Row = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var Row = function (props) {
    var children = props.children, rest = __rest(props, ["children"]);
    return (react_1.default.createElement(antd_1.Row, __assign({}, rest, { gutter: { xs: 8, sm: 16, md: 24 } }), children));
};
exports.Row = Row;
var Col = function (props) {
    var children = props.children, rest = __rest(props, ["children"]);
    return (react_1.default.createElement(antd_1.Col, __assign({}, rest, { xs: { span: 24 }, sm: { span: 12 }, md: { span: 12 }, lg: { span: 8 }, xl: { span: 6 } }), children));
};
exports.Col = Col;
