/** @format */

// import applyDecoratedDescriptor from "@babel/runtime/helpers/esm/applyDecoratedDescriptor";
// import initializerDefineProperty from "@babel/runtime/helpers/esm/initializerDefineProperty";

// Object.assign(babelHelpers, {
//   applyDecoratedDescriptor,
//   initializerDefineProperty
// });

import { AppRegistry } from "react-native";
import App from "./app/App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
