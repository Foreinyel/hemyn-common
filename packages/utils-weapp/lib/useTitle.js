import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
var useTitle = function (title) {
    var _a = useState(title), navTitle = _a[0], setNavTitle = _a[1];
    useEffect(function () {
        Taro.setNavigationBarTitle({ title: navTitle });
    }, [navTitle]);
    return {
        setNavTitle: setNavTitle
    };
};
export default useTitle;
