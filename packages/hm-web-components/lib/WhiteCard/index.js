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
import React from "react";
import { Card, Spin } from "antd";
import classnames from "classnames";
var WhiteCard = function (props) {
    var styl = {};
    if (props.style) {
        styl = __assign(__assign({}, props.style), { background: "#FFFFFF" });
    }
    else {
        styl = {
            background: "#FFFFFF",
        };
    }
    var cls = classnames(props.className, "white-card");
    var cardProps = __assign(__assign({}, props), { loading: false });
    return (React.createElement(Card, __assign({ style: styl }, cardProps, { className: cls }),
        React.createElement(Spin, { spinning: !!props.loading }, props.children)));
};
export default WhiteCard;
