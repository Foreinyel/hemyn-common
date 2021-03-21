export interface Response<T> {
    code: number;
    data: T;
    message?: string;
}
export declare const rPost: <T, U>(path: string, data: T) => Promise<import("axios").AxiosResponse<Response<U>>>;
export declare const rGet: <U>(path: string) => Promise<import("axios").AxiosResponse<Response<U>>>;
export declare const rPut: <T, U>(path: string, data: T) => Promise<import("axios").AxiosResponse<Response<U>>>;
