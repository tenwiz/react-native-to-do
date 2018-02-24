import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View} from "react-native";
import RootNavigator from "../Navigator/RootNavigator";

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
class AppContainerBase extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <RootNavigator/>
      </View>
    );
  }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainerBase)
