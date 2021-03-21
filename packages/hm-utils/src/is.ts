export const isMobile = (mobile: string) => {
  const reg = /^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
  return reg.test(mobile);
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
