declare const useCountDown: () => {
    current: any;
    start: (origin: number, delay: number, callback: (...param: any[]) => void) => void;
    stop: () => void;
};
export default useCountDown;
