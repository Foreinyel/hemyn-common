export interface RequestOptions {
    requestInterceptors?: (config: any) => void;
    timeout?: number;
    isOk?: (res: any) => boolean;
    getErr?: (res: any) => string;
    getData?: (res: any) => any;
    on401?: () => void;
    statusCodeKey?: string;
}
declare const _default: (options: RequestOptions) => {
    rPost: <T, U>(path: string, data: T) => Promise<U>;
    rGet: <U_1>(path: string) => Promise<U_1>;
    rPut: <T_1, U_2>(path: string, data: T_1) => Promise<U_2>;
};
export default _default;
