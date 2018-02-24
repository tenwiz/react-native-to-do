import React, {Component} from 'react'
import {View} from "react-native";
import {connect} from 'react-redux'
import {FeedMain} from "../../components/Feed/FeedMain";
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
class FeedContainerBase extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <TabHeader headerText={'Todo'}/>
        <FeedMain/>
      </View>
    )
  }
}

export const FeedContainer = connect(mapStateToProps, mapDispatchToProps)(FeedContainerBase)
