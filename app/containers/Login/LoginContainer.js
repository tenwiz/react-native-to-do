import React, {Component} from 'react'
import {connect} from 'react-redux'
import LoginMain from "../../components/Login/LoginMain";
import MyTab from "../Navigator/RootNavigator";
import { NavigationActions } from 'react-navigation'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = { // short-hand dispatch syntax ftw
  someDispatcher: () => {
  },
}

/**
 * Design: ReplaceMe!
 */
class LoginContainerBase extends Component {
  navigateToTab = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [ NavigationActions.navigate({ routeName: 'MyTab'}) ],
    })
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    return <LoginMain onSubmit={values => {
      console.log(values)
      this.navigateToTab()
    }}/>
  }
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainerBase)
