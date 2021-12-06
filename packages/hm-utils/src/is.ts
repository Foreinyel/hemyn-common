/**
 * @description 是否是手机号
 * @param mobile 手机号
 * @returns boolean
 */
export const isMobile = (mobile: string) => {
  const reg = /^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
  return reg.test(mobile);
};

/**
 * @description 将queryString转换成key, value键值对
 * @param {String} qs
 * @returns object
 */
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

/**
 * @description 是否是密码，限定密码为至少6位的任意字符
 * @param password
 * @returns boolean
 */
export const isPassword = (password: string) => {
  const reg = /^.{6,}$/;
  return reg.test(password);
};

/**
 * @description 是否是邮箱格式
 * @param mail
 * @returns boolean
 */
export const isMail = (mail: string) =>
  /^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(
    mail
  );
