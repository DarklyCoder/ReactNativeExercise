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

export default connect(
  mapStateToProps,
  mapActionToProps
)(CountComponent);
