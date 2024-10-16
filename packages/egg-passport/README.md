# egg-passport

同`egg-passport`，有小的差异点：

1. 原来的`EggPassport`在`authenticate`时，默认会添加`successReturnToOrRedirect`，这个在api鉴权的时候不需要，因此去掉了。代码文件`packages/egg-passport/lib/passport.js`，修改方法`authenticate`
