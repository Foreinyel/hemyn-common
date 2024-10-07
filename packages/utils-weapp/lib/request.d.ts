declare const setBaseUrl: (_baseUrl: string) => void;
declare const getBaseUrl: () => string;
export { setBaseUrl, getBaseUrl };
export interface Reponse<T> {
    code: number;
    data?: T;
    message?: string;
}
export declare const rGet: <T>(path: string) => Promise<Reponse<T>>;
export declare const rPost: <T, U>(path: string, data: U) => Promise<Reponse<T>>;
export declare const rPut: <T, U>(path: string, data: U) => Promise<Reponse<T>>;
