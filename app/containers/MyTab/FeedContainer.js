import React, {Component} from 'react'
import {View} from "react-native";
import {connect} from 'react-redux'
import {FeedMain} from "../../components/Feed/FeedMain";
import {TabHeader} from "../../components/common/TabHeader";
import {sortDate} from "../../util/time";
import {completeTodo} from "../../redux/modules/toDos";

const mapStateToProps = (state) => {
  return {
    userToDos: state.toDos.userToDos
  }
}

const mapDispatchToProps = { // short-hand dispatch syntax ftw
  completeTodo
}

/**
 * Design: ReplaceMe!
 */
class FeedContainerBase extends Component {
  render() {
    const { userToDos, completeTodo } = this.props

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <TabHeader headerText={'Todo'}/>
        <FeedMain userToDos={sortDate(userToDos)} completeTodo={completeTodo}/>
      </View>
    )
  }
}

export const FeedContainer = connect(mapStateToProps, mapDispatchToProps)(FeedContainerBase)
