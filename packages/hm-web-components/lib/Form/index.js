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
exports.TailButton = exports.Form = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var classnames_1 = __importDefault(require("classnames"));
var layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
var Form = function (props) {
    var children = props.children, rest = __rest(props, ["children"]);
    return (react_1.default.createElement(antd_1.Form, __assign({}, rest, layout), children));
};
exports.Form = Form;
exports.Form.Item = antd_1.Form.Item;
// export const FormItem = AntdForm.Item;
var tailLayout = {
    wrapperCol: { xs: { offset: 0, span: 16 }, sm: { offset: 8, span: 16 } },
};
var TailButton = function (props) {
    var children = props.children, className = props.className, rest = __rest(props, ["children", "className"]);
    var cls = classnames_1.default("hm-form-button", className);
    return (react_1.default.createElement(antd_1.Form.Item, __assign({}, tailLayout),
        react_1.default.createElement(antd_1.Button, __assign({ className: cls }, rest), children)));
};
exports.TailButton = TailButton;
