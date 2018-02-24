import React, {Component} from 'react'
import {connect} from 'react-redux'
import {TabHeader} from "../../components/common/TabHeader";
import {View} from "react-native";
import AddTodoMain from "../../components/AddTodo/AddTodoMain";

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
class AddTodoContainerBase extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <TabHeader headerText={'Add'}/>
        <AddTodoMain/>
      </View>
    )
  }
}

export const AddTodoContainer = connect(mapStateToProps, mapDispatchToProps)(AddTodoContainerBase)
