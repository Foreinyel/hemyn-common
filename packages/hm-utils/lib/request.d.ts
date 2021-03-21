export declare enum NormalHttpStatusCode {
    SUCCESS = 200,
    SUCCESS_CREATED = 201,
    SUCCESS_ACCEPTED = 202
}
export interface Response<T> {
    code: number;
    data: T;
    message?: string;
}
export declare const rPost: <T, U>(path: string, data: T) => Promise<U>;
export declare const rGet: <U>(path: string) => Promise<U>;
export declare const rPut: <T, U>(path: string, data: T) => Promise<U>;
