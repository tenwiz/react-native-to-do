import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NewTodoMain} from "../../components/NewTodo/NewTodoMain";
import {TabHeader} from "../../components/common/TabHeader";
import {View} from "react-native";

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
class NewTodoContainerBase extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <TabHeader headerText={'Add'}/>
        <NewTodoMain/>
      </View>
    )
  }
}

export const NewTodoContainer = connect(mapStateToProps, mapDispatchToProps)(NewTodoContainerBase)
