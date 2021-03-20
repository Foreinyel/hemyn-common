# hm-utils

跨项目通用工具整理。

## package

```console
yarn build
```

## useCountDown

在`hooks`中使用`setInterval`自动计时，由于在`setInterval`中无法顺利的读取`useState`的值，因此在`setInterval`中直接调用`setState`是无效的。解决办法是使用`useRef`，直接更新`target.current`，但是这样又会出现一个问题是：虽然`target.current`的值是实时更新的，但是却无法出发组件的`re-render`的操作。因此有了这种解决办法，在`setInterval`中`setState`的值依赖的不再是`state`，改为了`target.current`。具体细节看代码，示例如下：

```javascript
import { useCountDown } from '@hemyn/utils'

const SomeComponent = () => {
  const {
    current: countDownCurrent,  // 实时读取最新的值
    start: countDownStart,  // 开始即时，同一时刻只能有一个计时器
    stop: countDownStop     // 手动停止计时
  } = useCountDown();

  ...
      countDownStart(10, 1000, afterCountToZeroRun)
  ...
      countDownStop()

  return (...<div>{countDownCurrent}</div>...)

}

```
