declare const useCountDown: () => {
    current: number;
    start: (origin: number, delay: number, callback: (...param: any[]) => void) => void;
    stop: () => void;
};
export default useCountDown;
