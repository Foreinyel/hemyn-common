export interface DownloadOptions {
    dest: string;
    url: string;
    extract?: "zip";
    filename?: string;
}
export declare const download: (options: DownloadOptions) => Promise<void>;
