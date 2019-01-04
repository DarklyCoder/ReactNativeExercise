# 接入 Redux

1. 安装 Redux

   ```
   npm i redux , react-redux
   ```

2. 创建 Redux 目录

   创建 Redux 相关目录：`actions`、`constants`、`reducers`、`store`；

   ![redux_folder_structure][redux_folder_structure]

3. 以计数器为例

   首先定义常量，在 `constants` 目录下新建 `actionTypes.js` 文件，内容如下：

   ```
    export const TYPE_INCREASE = 'TYPE_INCREASE';
    export const TYPE_DECREASE = 'TYPE_DECREASE';
   ```

   接着在 `actions` 目录下新建 `count.js` 文件，内容如下：

[redux_folder_structure]: ../imgs/redux_folder_structure.png
