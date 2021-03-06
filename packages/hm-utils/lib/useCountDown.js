"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useCountDown = function () {
    var _a = react_1.useState(), count = _a[0], setCount = _a[1];
    var countDown = react_1.useRef();
    var intervalValue = react_1.useRef();
    var countDownCallback = react_1.useRef();
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
exports.default = useCountDown;
