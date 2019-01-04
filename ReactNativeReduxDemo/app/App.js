/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import CountComponent from "./component/CountComponent";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CountComponent />
      </Provider>
    );
  }
}
