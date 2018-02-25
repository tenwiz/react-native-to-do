import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ProfileMain} from "../../components/Profile/ProfileMain";
import {View} from "react-native";
import {TabHeader} from "../../components/common/TabHeader";

const mapStateToProps = (state) => {
  return {
    username: state.toDos.username
  }
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
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <TabHeader headerText={`Hello, ${this.props.username}`}/>
        <ProfileMain navigation={this.props.navigation}/>
      </View>
    )
  }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerBase)
