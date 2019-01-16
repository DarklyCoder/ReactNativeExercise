/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";

export default class App extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="TabComponent" onPress={this._onClickTabComponent} />
      </View>
    );
  }

  _onClickTabComponent = () => {
    this.props.navigation.push("TabComp");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
