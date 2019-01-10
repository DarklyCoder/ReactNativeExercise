/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { View } from "react-native";
import CountComponent from "./component/CountComponent";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <CountComponent />
        </View>
      </Provider>
    );
  }
}
