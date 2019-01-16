/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Home from "./components/HomeComponent";
import TabComp from "./components/TabComponent";

import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    TabComp: { screen: TabComp }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
