/// <reference types="react" />
declare const useTitle: (title: string) => {
    setNavTitle: import("react").Dispatch<import("react").SetStateAction<string>>;
};
export default useTitle;
