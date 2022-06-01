export interface GetNextVersionParam {
    version?: string;
    beta?: boolean;
}
export declare const getNextVersion: (param?: GetNextVersionParam | undefined) => string;
