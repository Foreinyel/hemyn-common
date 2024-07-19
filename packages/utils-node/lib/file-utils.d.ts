export interface FileItem {
    type: "folder" | "file";
    path: string;
    children?: FileItem[];
}
export declare const listFiles: (cwd: string, excludes?: string[], dep?: boolean) => Promise<string[]>;
export declare const listFolders: (cwd: string, excludes?: string[], dep?: boolean) => Promise<string[]>;
export declare const listAll: (cwd: string, excludes?: string[]) => Promise<FileItem[]>;
