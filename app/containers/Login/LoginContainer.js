import React, {Component} from 'react'
import {connect} from 'react-redux'
import LoginMain from "../../components/Login/LoginMain";
import {bindActionCreators} from 'redux'
import * as toDosActions from "../../redux/modules/toDos";
import configureStore from '../../configureStore'

const mapStateToProps = (state) => (
  {}
)

const mapDispatchToProps = (dispatch) => ( // short-hand dispatch syntax ftw
  bindActionCreators(toDosActions, dispatch)
)

/**
 * Design: ReplaceMe!
 */
class LoginContainerBase extends Component {
  componentDidMount() {
    // this.props.clearAll()
  }

  render() {
    const { userLogin, navigation } = this.props

    return (
      <LoginMain onSubmit={({ username }) => userLogin(username, navigation)}/>
    )
  }
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainerBase)
