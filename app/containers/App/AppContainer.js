import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View} from "react-native";
import RootNavigator from "../Navigator/RootNavigator";
import {bindActionCreators} from "redux";

const mapStateToProps = (state) => (
  {}
)

const mapDispatchToProps = dispatch => ( // short-hand dispatch syntax ftw
  // bindActionCreators(someActions, dispatch)
  {}
)

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
