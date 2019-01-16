# 接入 Redux

1. 安装 Redux

   ```shell
   npm i redux react-redux
   ```

2. 创建 Redux 目录

   创建 Redux 相关目录：`actions`、`constants`、`reducers`、`store`；

   ![redux_folder_structure][redux_folder_structure]

3. 以计数器为例

   首先定义常量，在 `constants` 目录下新建 `actionTypes.js` 文件，内容如下：

   ```js
    export const TYPE_INCREASE = 'TYPE_INCREASE';
    export const TYPE_DECREASE = 'TYPE_DECREASE';
   ```

   接着在 `actions` 目录下新建 `countAction.js` 文件，内容如下：

   ```js
    import * as Types from "../constants/actionsTypes";

    export function increase() {
        return { type: Types.TYPE_INCREASE };
    }

    export function decrease() {
        return { type: Types.TYPE_DECREASE };
    }
   ```

   然后在 `reducers` 目录下新建 `countReducer.js` 和 `index.js` 文件，代码如下：

   ```js
    import * as Types from "../constants/actionTypes";

    const initialState = {
        count: 0
    };

    function handleCount(state = initialState, action = {}) {
        const { count } = state;

         switch (action.type) {
            case Types.TYPE_INCREASE:
                return { ...state, count: count + 1 };

            case Types.TYPE_DECREASE:
               return { ...state, count: count - 1 };

            default:
                return state;
        }
    }

    export default handleCount;

   ```

   ```js
    import { combineReducers } from "redux";

    import countReducer from "./countReducer";

    //合并多个reducer
    const rootReducer = combineReducers({
        countReducer
    });

    export default rootReducer;

   ```

   接着在 `store` 目录下创建 `index.js` 文件，内容如下：

   ```js
    import { createStore } from "redux";
    import reducer from "../reducers";

    function configureStore(initialState) {
        return createStore(reducer);
    }

    export default configureStore;
   ```

   接着修改 `App.js` 文件，改动如下：

   ```jsx
    ......
    import { Provider } from "react-redux";
    import configureStore from "./redux/store";

    const store = configureStore();

    export default class App extends Component {
        render() {
            return (
            //使用 <Provider/> 组件包裹根组件，注入store参数
            <Provider store={store}>
                ......
            </Provider>
            );
        }
    }

   ```

   最后在 `React Native` 组件中使用，下面先创建一个 `CountComponent.js` 文件，内容如下：

   ```jsx
    import React, { PureComponent } from "react";
    import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

    import { connect } from "react-redux";
    import * as CountAction from "../redux/actions/countAction";

    class CountComponent extends PureComponent {
        render() {
            return (
                <View style={styles.countContainer}>
                    <TouchableHighlight underlayColor="#FFF" onPress={this._decrease}>
                        <Text style={styles.btn}>-</Text>
                    </TouchableHighlight>
                    <Text style={styles.count}>{this.props.count}</Text>
                    <TouchableHighlight underlayColor="#FFF" onPress={this._increase}>
                        <Text style={styles.btn}>+</Text>
                    </TouchableHighlight>
                </View>
            );
        }

        _increase = () => {
            this.props.increase();
        };

        _decrease = () => {
            this.props.decrease();
        };
    }

    const styles = StyleSheet.create({
        countContainer: {
            height: 50,
            width: 200,
            flexDirection: "row",
            backgroundColor: "#F3F3F3"
        },
        btn: {
            width: 50,
            height: 50,
            backgroundColor: "#CCC",
            color: "#333",
            fontSize: 16,
            textAlign: "center",
            textAlignVertical: "center"
        },
        count: {
            color: "#F00",
            height: 50,
            width: 100,
            fontSize: 16,
            textAlign: "center",
            textAlignVertical: "center"
        }
    });

    const mapStateToProps = state => {
        return { count: state.countReducer.count };
    };

    const mapActionToProps = dispatch => {
        return {
            increase: () => dispatch(CountAction.increase()),
            decrease: () => dispatch(CountAction.decrease())
        };
    };

    //使用 connect 导出组件
    export default connect(
        mapStateToProps,
        mapActionToProps
    )(CountComponent);

   ```

4. 参考

- [Redux GitHub](https://github.com/reduxjs/redux)

[redux_folder_structure]: ../imgs/redux_folder_structure.png
