import { AxiosResponse } from "axios";
export interface Response<T> {
    code: number;
    data: T;
    message?: string;
}
export declare const rPost: <T, U>(path: string, data: T) => Promise<AxiosResponse<Response<U>>>;
export declare const rGet: <U>(path: string) => Promise<AxiosResponse<Response<U>>>;
export declare const rPut: <T, U>(path: string, data: T) => Promise<AxiosResponse<Response<U>>>;
