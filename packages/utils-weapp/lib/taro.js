import Taro from "@tarojs/taro";
export var downloadFile = function (url) {
    return new Promise(function (resolve, reject) {
        Taro.downloadFile({
            url: url,
            success: function (res) {
                if (res.statusCode === 200) {
                    resolve(res.tempFilePath);
                }
                else {
                    reject(null);
                }
            }
        });
    });
};
// queryString to Object
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
// Image is not defined
// export const getImageSize = (imgUrl: string) => {
//   return new Promise(resolve => {
//     const image = new Image();
//     image.src = imgUrl;
//     image.onload = data => {
//       resolve(data);
//     };
//   });
// };
