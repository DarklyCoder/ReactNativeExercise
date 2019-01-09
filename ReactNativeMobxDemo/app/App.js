import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import CountComponent from "./components/CountComponent";
import { Provider } from "mobx-react/native";
import stores from "./flux";

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <StatusBar
            hidden={false}
            backgroundColor="#FFF"
            barStyle="dark-content"
          />
          <CountComponent style={{ marginTop: 100 }} />
        </View>
      </Provider>
    );
  }
}
