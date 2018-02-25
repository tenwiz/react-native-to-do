import React, {Component} from 'react'
import {connect} from 'react-redux'
import LoginMain from "../../components/Login/LoginMain";
import MyTab from "../Navigator/RootNavigator";
import {resetStack} from "../../util/navigation";
import {createUser} from "../../redux/modules/toDos";

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = { // short-hand dispatch syntax ftw
  createUser
}

/**
 * Design: ReplaceMe!
 */
class LoginContainerBase extends Component {
  render() {
    const { createUser, navigation } = this.props

    return <LoginMain onSubmit={value => {
      createUser(value)
      resetStack('MyTab', navigation)
    }}/>
  }
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainerBase)
