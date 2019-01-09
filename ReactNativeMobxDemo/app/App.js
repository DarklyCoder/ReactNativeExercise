import React, { Component } from "react";
import CountComponent from "./components/CountComponent";
import { Provider } from "mobx-react/native";
import stores from "./flux";

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <CountComponent />
      </Provider>
    );
  }
}
