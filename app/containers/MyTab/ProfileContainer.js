import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ProfileMain} from "../../components/Profile/ProfileMain";
import {View} from "react-native";
import {TabHeader} from "../../components/common/TabHeader";

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
    const username = 'Ali' // FIX ME

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <TabHeader headerText={`Hello, ${username}`}/>
        <ProfileMain/>
      </View>
    )
  }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerBase)
