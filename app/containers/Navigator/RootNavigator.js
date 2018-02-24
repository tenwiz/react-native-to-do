import React from 'react'
import {Image} from "react-native";
import { StackNavigator, TabNavigator } from 'react-navigation'
import {LoginContainer} from "../Login/LoginContainer"
import {FeedContainer} from "../MyTab/FeedContainer";
import {AddTodoContainer} from "../MyTab/AddTodoContainer";
import {ProfileContainer} from "../MyTab/ProfileContainer";
import {addIn, addOut, feedIn, feedOut, profileIn, profileOut} from "../../resource/image/image";

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

const AddTodoStack = StackNavigator({
  AddTodo: {
    screen: AddTodoContainer,
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
  AddTodoStack: {
    screen: AddTodoStack,
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

const TabNavigatorConfig = {
  tabBarOptions: {
    showLabel: false,
    style: {
      paddingHorizontal: 85,
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
