export interface GetNextVersionParam {
    version?: string;
    beta?: boolean;
}
export declare const getNextVersion: (param?: GetNextVersionParam | undefined) => string;
/**
 * va > vb
 * @param va
 * @param vb
 */
export declare const versionCompare: (va: string, vb: string) => boolean;
