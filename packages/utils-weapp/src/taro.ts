import Taro from "@tarojs/taro";

export const downloadFile = function(url: string) {
  return new Promise((resolve, reject) => {
    Taro.downloadFile({
      url,
      success: res => {
        if (res.statusCode === 200) {
          resolve(res.tempFilePath);
        } else {
          reject(null);
        }
      }
    });
  });
};

// queryString to Object
export const qs2Obj = (qs: string) => {
  // console.log(qs)
  const arr: string[] = qs.split("&");
  let obj: any = {};
  for (let i of arr) {
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
