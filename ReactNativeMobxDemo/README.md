# 接入 Mobx

1. 安装 `Mobx`

   ```
   npm i mobx  mobx-react
   ```

2. 创建 `babel` 插件，以支持 `ES7` 的 `decorator` 特性

   ```
   npm i babel-plugin-transform-decorators-legacy babel-preset-react-native-stage-0 --save-dev
   ```

3. `react-native`从 `0.56` 版本开始默认支持 `bable7`，需要安装下面的 4 个 `babel` 库，之前的写法都不对了

   ```
   npm i @babel/core @babel/plugin-proposal-decorators @babel/plugin-transform-runtime @babel/runtime --save-dev
   ```

4. 修改 `.babelrc`文件，完成这步就可以正常的使用装饰器了

   ```
   {
       "presets": ["module:metro-react-native-babel-preset"],
       "plugins": [
           [
           "@babel/plugin-proposal-decorators",
           {
               "legacy": true
           }
           ],
           [
           "@babel/transform-runtime",
           {
               "helpers": true,
               "regenerator": false
           }
           ]
       ]
   }
   ```

5. ES7 装饰器语法在 `VS Code` 编译器可能会报错, 解决办法如下：

   首选项-->设置-->工作区设置，加入以下代码：

   ```
   "javascript.implicitProjectConfig.experimentalDecorators": true
   ```

7) 参考

- [MobX 文档](https://cn.mobx.js.org/)

- [MobX GitHub](https://github.com/mobxjs/mobx)

[redux_folder_structure]: ../imgs/redux_folder_structure.png
