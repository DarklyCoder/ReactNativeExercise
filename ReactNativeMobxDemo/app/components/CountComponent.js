import React, { PureComponent } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { inject, observer } from "mobx-react/native";

@inject(["countStore"])
@observer
export default class CountComponent extends PureComponent {
  render() {
    const { count, _increase, _decrease } = this.props.countStore;

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
