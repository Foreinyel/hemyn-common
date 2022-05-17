/**
 * @description 是否是手机号
 * @param mobile 手机号
 * @returns boolean
 */
export declare const isMobile: (mobile: string) => boolean;
/**
 * @description 将queryString转换成key, value键值对
 * @param {String} qs
 * @returns object
 */
export declare const qs2Obj: (qs: string) => any;
/**
 * @description 是否是密码，限定密码为至少6位的任意字符
 * @param password
 * @returns boolean
 */
export declare const isPassword: (password: string) => boolean;
/**
 * @description 是否是邮箱格式
 * @param mail
 * @returns boolean
 */
export declare const isMail: (mail: string) => boolean;
