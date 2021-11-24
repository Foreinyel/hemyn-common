export interface RequestOptions {
    requestInterceptors?: (config: any) => void;
    timeout?: number;
    isOk?: (res: any) => boolean;
    getErr?: (res: any) => string;
    getData?: (res: any) => any;
}
declare const _default: (options: RequestOptions) => void;
export default _default;
