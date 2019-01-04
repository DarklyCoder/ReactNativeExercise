import React, { PureComponent } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";

import { connect } from "react-redux";
import * as CountAction from "../redux/actions/countAction";

class CountComponent extends PureComponent {
  render() {
    return (
      <View style={styles.countContainer}>
        <TouchableWithoutFeedback onPress={this._decrease}>
          <Text style={styles.btn}>-</Text>
        </TouchableWithoutFeedback>
        <Text style={styles.count}>{this.props.count}</Text>
        <TouchableWithoutFeedback onPress={this._increase}>
          <Text style={styles.btn}>+</Text>
        </TouchableWithoutFeedback>
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
    flexDirection: "row"
  },
  btn: {
    width: 50,
    height: 50,
    backgroundColor: "#F5F5F5",
    color: "#333",
    fontSize: 10
  },
  count: {
    color: "#F00",
    height: 50,
    width: 100,
    fontSize: 16
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
