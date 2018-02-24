import React, {Component} from 'react'
import {connect} from 'react-redux'
import LoginMain from "../../components/Login/LoginMain";

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
  render() {
    return <LoginMain onSubmit={values => console.log(values)}/>;
  }
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainerBase)
