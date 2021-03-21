"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qs2Obj = exports.isMobile = void 0;
var isMobile = function (mobile) {
    var reg = /^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
    return reg.test(mobile);
};
exports.isMobile = isMobile;
// queryString to Object
var qs2Obj = function (qs) {
    // console.log(qs)
    var arr = qs.split("&");
    var obj = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        if (i) {
            obj[i.split("=")[0]] = i.split("=")[1]; //对数组每项用=分解开，=前为对象属性名，=后为属性值
        }
    }
    return obj;
};
exports.qs2Obj = qs2Obj;
