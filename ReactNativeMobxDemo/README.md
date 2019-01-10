# 接入 Mobx 5.x

1. 安装 `Mobx`

   ```
   npm i mobx  mobx-react
   ```

2. 安装 `babel` 插件，以支持 `ES7` 的 `decorator` 特性

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

6. 在 `Android` 设备上运行还需要安装 `jsc vm`:

   ```
   npm i jsc-android --save
   ```

   安装完成后需要修改部分配置：

   在 `android/build.gradle` 中修改如下：

   ```
   allprojects {
    repositories {
        mavenLocal()
        jcenter()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url "$rootDir/../node_modules/react-native/android"
        }

    +  maven {
    +       // Local Maven repo containing AARs with JSC library built for Android
    +      url "$rootDir/../node_modules/jsc-android/dist"
    +  }
    }
   }
   ```

   在 `android/app/build.gradle` 中修改如下：

   ```
    + configurations.all {
    +    resolutionStrategy {
    +        force 'org.webkit:android-jsc:r236355'
    +    }
    +}

    dependencies {
        ......
    }
   ```

7. 以计数器为例

   创建 `stores` 文件夹，下面创建两个文件：

   `CountStore.js`

   ```
   import { observable, action } from "mobx";

   class CountStore {
       @observable count = 0;

       @action _increase = () => {
           ++this.count;
       };

       @action _decrease = () => {
           --this.count;
       };
   }

   export default new CountStore();
   ```

   `index.js`

   ```
   import CountStore from "./CountStore";

   const stores = { CountStore };

   export default stores;
   ```

   再创建 `components` 文件夹，下面创建一个文件：

   `CountComponent.js`

   ```
   import React, { Component } from "react";
   import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
   import { inject, observer } from "mobx-react/native";

   @inject("CountStore")
   @observer
   export default class CountComponent extends Component {
        render() {
            const { count, _increase, _decrease } = this.props.CountStore;

            return (
            <View style={styles.countContainer}>
                <TouchableHighlight underlayColor="#FFF" onPress={_decrease}>
                    <Text style={styles.btn}>-</Text>
                </TouchableHighlight>
                <Text style={styles.count}>{count}</Text>
                <TouchableHighlight underlayColor="#FFF" onPress={_increase}>
                    <Text style={styles.btn}>+</Text>
                </TouchableHighlight>
            </View>
            );
        }
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
   ```

   最后修改 `App.js`:

   ```
    import React, { Component } from "react";
    import { View } from "react-native";
    import CountComponent from "./components/CountComponent";
    import { Provider } from "mobx-react/native";
    import stores from "./stores";

    export default class App extends Component {
        render() {
            return (
                //注入
                <Provider {...stores}>
                    <View
                        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                    >
                        <CountComponent />
                    </View>
                </Provider>
            );
        }
    }
   ```

8. 参考

- [MobX 文档](https://cn.mobx.js.org/)

- [MobX GitHub](https://github.com/mobxjs/mobx)

- [jsc-android](https://github.com/react-native-community/jsc-android-buildscripts)

[redux_folder_structure]: ../imgs/redux_folder_structure.png
