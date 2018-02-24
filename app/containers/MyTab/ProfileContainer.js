import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ProfileMain} from "../../components/Profile/ProfileMain";

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
class ProfileContainerBase extends Component {
  render() {
    return <ProfileMain/>
  }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerBase)
