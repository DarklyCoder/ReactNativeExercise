import React, { Component } from "react";
import { View } from "react-native";
import CountComponent from "./components/CountComponent";
import { Provider } from "mobx-react/native";
import stores from "./stores";

export default class App extends Component {
  render() {
    return (
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
