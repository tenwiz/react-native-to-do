import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text, View} from "react-native";

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
        <Text>
          hello mars
        </Text>
      </View>
    );
  }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainerBase)
