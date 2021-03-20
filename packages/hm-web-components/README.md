# web-components

基于`antd`封装的通用组件。

## package

```console
yarn build
```

## development

目前组件库中的`less文件`会合并为统一的`style.less`，具体项目中需要在`global.less`中统一引入，如：

```css
...
@import '~hm-web-components/lib/style.less';
...
```

因此，组件库中只能写`className`具体名：

```html
<div className="hm-query-container">
```

本地开发时，可以使用`npm link`链接到`local node_modules`，然后在引用的项目中执行`npm link hm-web-components`：

```console
cd [hm-web-components path]
npm link
cd [project path]
npm link hm-web-components
```
