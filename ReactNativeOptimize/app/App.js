/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  Animated,
  InteractionManager
} from "react-native";

const { width } = Dimensions.get("window");
const TabWidth = width / 3;

class TabLayout_1 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      curIndex: 0
    };
  }

  setTab = index => {
    //通过改变state来移动
    this.setState({ curIndex: index });
  };

  render() {
    return (
      <View>
        <View style={styles.tab}>
          <TouchableHighlight
            style={styles.tabItem}
            underlayColor="#FFFF10"
            onPress={() => {
              this.setTab(0);
            }}
          >
            <Text>Tab1</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.tabItem}
            underlayColor="#FFFF10"
            onPress={() => {
              this.setTab(1);
            }}
          >
            <Text>Tab2</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.tabItem}
            underlayColor="#FFFF10"
            onPress={() => {
              this.setTab(2);
            }}
          >
            <Text>Tab3</Text>
          </TouchableHighlight>
        </View>

        <View
          style={{
            width: TabWidth,
            height: 2,
            position: "absolute",
            backgroundColor: "#000",
            top: 45,
            left: this.state.curIndex * TabWidth
          }}
        />
      </View>
    );
  }
}

class TabLayout_2 extends PureComponent {
  constructor(props) {
    super(props);
    this.curIndex = 0;
  }

  setTab = index => {
    this.curIndex = index;
    //通过直接设置属性
    this.refs.line.setNativeProps({
      style: {
        width: TabWidth,
        height: 2,
        position: "absolute",
        backgroundColor: "#000",
        top: 45,
        left: this.curIndex * TabWidth
      }
    });
  };

  render() {
    return (
      <View>
        <View style={styles.tab}>
          <TouchableHighlight
            style={styles.tabItem}
            underlayColor="#FFFF10"
            onPress={() => {
              this.setTab(0);
            }}
          >
            <Text>Tab1</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.tabItem}
            underlayColor="#FFFF10"
            onPress={() => {
              this.setTab(1);
            }}
          >
            <Text>Tab2</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.tabItem}
            underlayColor="#FFFF10"
            onPress={() => {
              this.setTab(2);
            }}
          >
            <Text>Tab3</Text>
          </TouchableHighlight>
        </View>

        <View
          ref="line"
          style={{
            width: TabWidth,
            height: 2,
            position: "absolute",
            backgroundColor: "#000",
            top: 45,
            left: this.curIndex * TabWidth
          }}
        />
      </View>
    );
  }
}

class TabLayout_3 extends PureComponent {
  constructor(props) {
    super(props);
    this.curIndex = new Animated.Value(0);
  }

  setTab = index => {
    // this.curIndex.setValue(index);

    //带有动画效果的变换
    Animated.spring(this.curIndex, { toValue: index }).start();
  };

  render() {
    return (
      <View>
        <View style={styles.tab}>
          <TouchableHighlight
            style={styles.tabItem}
            underlayColor="#FFFF10"
            onPress={() => {
              this.setTab(0);
            }}
          >
            <Text>Tab1</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.tabItem}
            underlayColor="#FFFF10"
            onPress={() => {
              this.setTab(1);
            }}
          >
            <Text>Tab2</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.tabItem}
            underlayColor="#FFFF10"
            onPress={() => {
              this.setTab(2);
            }}
          >
            <Text>Tab3</Text>
          </TouchableHighlight>
        </View>

        <Animated.View
          style={{
            width: TabWidth,
            height: 2,
            position: "absolute",
            backgroundColor: "#000",
            top: 45,
            left: this.curIndex.interpolate({
              inputRange: [0, 3],
              outputRange: [0, width]
            })
          }}
        />
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={styles.label}>使用setState</Text>
        <TabLayout_1 />

        <Text style={styles.label}>使用setNativeProps</Text>
        <TabLayout_2 />

        <Text style={styles.label}>使用Animated</Text>
        <TabLayout_3 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: { marginTop: 20 },
  tab: {
    height: 45,
    flexDirection: "row"
  },
  tabItem: {
    flex: 1,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF0"
  }
});
