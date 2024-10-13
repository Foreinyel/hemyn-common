interface Toast {
    error?: (msg: string) => void;
}
declare const setBaseUrl: (_baseUrl: string) => void;
declare const getBaseUrl: () => string;
declare const setToast: (_toast: Toast) => void;
export { setBaseUrl, getBaseUrl, setToast };
export interface Response<T> {
    code: number;
    data?: T;
    msg?: string;
}
export declare const rGet: <T, U = any>(path: string, data?: U | undefined) => Promise<T | undefined>;
export declare const rGetQuietly: <T, U = any>(path: string, data?: U | undefined) => Promise<T | undefined>;
export declare const rPost: <T, U>(path: string, data?: U | undefined) => Promise<T | undefined>;
export declare const rPostQuietly: <T, U>(path: string, data?: U | undefined) => Promise<T | undefined>;
export declare const rPut: <T, U>(path: string, data?: U | undefined) => Promise<unknown>;
export declare const rPutQuietly: <T, U>(path: string, data?: U | undefined) => Promise<unknown>;
