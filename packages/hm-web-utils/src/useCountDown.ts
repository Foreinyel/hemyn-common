import { useState, useRef } from "react";

const useCountDown = () => {
  const [count, setCount] = useState<number>();
  const countDown = useRef<number>();
  const intervalValue = useRef<number>();
  const countDownCallback = useRef<Function>();

  const start = (
    origin: number,
    delay: number,
    callback: (...param: any[]) => void
  ) => {
    setCount(origin);
    countDownCallback.current = callback;
    countDown.current = origin;
    intervalValue.current = setInterval(() => {
      countDown!.current! -= 1;
      setCount(countDown.current);
      if (countDown.current === 0) {
        stop();
      }
    }, delay);
  };

  const stop = () => {
    clearInterval(intervalValue.current);
    setCount(undefined);
    countDown!.current = undefined;
    countDownCallback!.current!();
  };

  return {
    current: count || 0,
    start,
    stop,
  };
};

export default useCountDown;
