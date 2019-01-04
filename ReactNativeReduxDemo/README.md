# 接入 Redux

1. 安装 Redux

   ```
   npm i redux react-redux
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

   ```
    import * as Types from "../constants/actionsTypes";

    export function increase() {
    return { type: Types.TYPE_INCREASE };
    }

    export function decrease() {
    return { type: Types.TYPE_DECREASE };
    }
   ```

   然后在 `reducers` 目录下新建 `countReducer.js` 和 `index.js` 文件，代码如下：

   ```
    import * as Types from "../constants/actionTypes";

    const initialState = {
        count: 0
    };

    function handleCount(state = initialState, action = {}) {
        switch (action.type) {
            case Types.TYPE_INCREASE:
            return { ...state, count: state.count++ };

            case Types.TYPE_DECREASE:
            return { ...state, count: state.count-- };

            default:
            return state;
        }
    }

    export default handleCount;

   ```

   ```
    import { combineReducers } from "redux";

    import countReducer from "./countReducer";

    //合并多个reducer
    const rootReducer = combineReducers({
    countReducer
    });

    export default rootReducer;

   ```

   接着在 `store` 目录下创建 `index.js` 文件，内容如下：

   ```
    import { createStore } from "redux";
    import reducer from "../reducers";

    function configureStore(initialState) {
    return createStore(reducer);
    }

    export default configureStore;
   ```

[redux_folder_structure]: ../imgs/redux_folder_structure.png
