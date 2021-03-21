/**
 * @description 是否是手机号
 * @param mobile 手机号
 * @returns boolean
 */
export var isMobile = function (mobile) {
    var reg = /^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
    return reg.test(mobile);
};
/**
 * @description 将queryString转换成key, value键值对
 * @param {String} qs
 * @returns object
 */
export var qs2Obj = function (qs) {
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
/**
 * @description 是否是密码，限定密码为至少6位的任意字符
 * @param password
 * @returns boolean
 */
export var isPassword = function (password) {
    var reg = /^.{6,}$/;
    return reg.test(password);
};
