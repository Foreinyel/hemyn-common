import React, { useMemo } from "react";
import Tooltip from "antd/es/tooltip";
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
                ele.push(React.createElement("p", { key: v }, v));
            }
        });
    }
    else {
        ele.push(React.createElement("p", { key: "single-para" }, para));
    }
    var data = useMemo(function () {
        return {
            isBig: para.length > 10,
            shortText: para.substr(0, 10),
        };
    }, [text]);
    return data.isBig ? (React.createElement(Tooltip, { title: ele },
        data.shortText,
        "...")) : (React.createElement("span", null, ele));
};
export default BigText;
