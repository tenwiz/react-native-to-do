import React from 'react'
import {Image} from "react-native";
import { StackNavigator, TabNavigator } from 'react-navigation'
import {LoginContainer} from "../Login/LoginContainer"
import {FeedContainer} from "../MyTab/FeedContainer";
import {NewTodoContainer} from "../MyTab/NewTodoContainer";
import {ProfileContainer} from "../MyTab/ProfileContainer";
import {addIn, addOut, feedIn, feedOut, profileIn, profileOut} from "../../images/assets";
import {deviceWidth} from "../../util/dimensions";

const commonNavigationOptions = {
  header: null
}

const FeedStack = StackNavigator({
  Feed: {
    screen: FeedContainer,
    navigationOptions: {
      ...commonNavigationOptions,
    },
  },
})

const NewTodoStack = StackNavigator({
  NewTodo: {
    screen: NewTodoContainer,
    navigationOptions: {
      ...commonNavigationOptions,
    },
  },
})

const ProfileStack = StackNavigator({
  Profile: {
    screen: ProfileContainer,
    navigationOptions: {
      ...commonNavigationOptions,
    },
  },
})

const TabBarItem = (focused, iconOut, iconIn) => (
  <Image
    source={focused ? iconIn : iconOut}
    style={{ width: 20, height: 20 }}
  />
)

const MyTabRouteConfigs = {
  FeedStack: {
    screen: FeedStack,
    navigationOptions: {
      ...commonNavigationOptions,
      tabBarIcon: ({ focused }) => (
        TabBarItem( focused, feedOut, feedIn)
      ),
    },
  },
  NewTodoStack: {
    screen: NewTodoStack,
    navigationOptions: {
      ...commonNavigationOptions,
      tabBarIcon: ({ focused }) => (
        TabBarItem( focused, addOut, addIn)
      ),
    },
  },
  ProfileStack: {
    screen: ProfileStack,
    navigationOptions: {
      ...commonNavigationOptions,
      tabBarIcon: ({ focused }) => (
        TabBarItem( focused, profileOut, profileIn)
      ),
    },
  },
}

const iconWidth = 50
const iconPadding = 20

const TabNavigatorConfig = {
  tabBarOptions: {
    showLabel: false,
    style: {
      paddingHorizontal: (deviceWidth - iconWidth * 3 - iconPadding * 2) / 2,
      backgroundColor: 'white'
    },
  }
}

const MyTab = TabNavigator(MyTabRouteConfigs, TabNavigatorConfig)

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginContainer,
    navigationOptions: {
      ...commonNavigationOptions,
    },
  },
  MyTab: {
    screen: MyTab,
  }
})

export default RootNavigator
