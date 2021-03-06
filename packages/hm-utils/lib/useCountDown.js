import { useState, useRef } from "react";
var useCountDown = function () {
    var _a = useState(), count = _a[0], setCount = _a[1];
    var countDown = useRef();
    var intervalValue = useRef();
    var countDownCallback = useRef();
    var start = function (origin, delay, callback) {
        setCount(origin);
        countDownCallback.current = callback;
        countDown.current = origin;
        intervalValue.current = setInterval(function () {
            countDown.current -= 1;
            setCount(countDown.current);
            if (countDown.current === 0) {
                stop();
            }
        }, delay);
    };
    var stop = function () {
        clearInterval(intervalValue.current);
        setCount(undefined);
        countDown.current = undefined;
        countDownCallback.current();
    };
    return {
        current: count || 0,
        start: start,
        stop: stop,
    };
};
export default useCountDown;
