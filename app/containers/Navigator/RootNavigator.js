import { StackNavigator, TabNavigator } from 'react-navigation'
import {LoginContainer} from "../Login/LoginContainer"
import {FeedContainer} from "../MyTab/FeedContainer";
import {NewTodoContainer} from "../MyTab/NewTodoContainer";
import {ProfileContainer} from "../MyTab/ProfileContainer";

const FeedStack = StackNavigator({
  Feed: {
    screen: FeedContainer,
  },
})

const NewTodoStack = StackNavigator({
  NewTodo: {
    screen: NewTodoContainer,
  },
})

const ProfileStack = StackNavigator({
  Profile: {
    screen: ProfileContainer,
  },
})

const MyTab = TabNavigator({
  FeedStack: {
    screen: FeedStack,
  },
  NewTodoStack: {
    screen: NewTodoStack,
  },
  ProfileStack: {
    screen: ProfileStack,
  },
})

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginContainer,
  },
  MyTab: {
    screen: MyTab
  }
})

export default RootNavigator
