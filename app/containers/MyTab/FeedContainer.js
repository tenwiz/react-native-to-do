import React, {Component} from 'react'
import {connect} from 'react-redux'
import {FeedMain} from "../../components/Feed/FeedMain";

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
    return <FeedMain/>
  }
}

export const FeedContainer = connect(mapStateToProps, mapDispatchToProps)(FeedContainerBase)
