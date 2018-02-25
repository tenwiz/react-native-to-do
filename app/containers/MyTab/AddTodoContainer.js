import React, {Component} from 'react'
import {connect} from 'react-redux'
import {TabHeader} from "../../components/common/TabHeader";
import {View} from "react-native";
import AddTodoMain from "../../components/AddTodo/AddTodoMain";
import {createTodo} from "../../redux/modules/toDos";
import {resetStack} from "../../util/navigation";

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = { // short-hand dispatch syntax ftw
  createTodo
}

/**
 * Design: ReplaceMe!
 */
class AddTodoContainerBase extends Component {
  render() {
    const { createTodo, navigation } = this.props

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <TabHeader headerText={'Add'}/>
        <AddTodoMain onSubmit={value => {
          createTodo(value)
          resetStack('MyTab', navigation)
        }}/>
      </View>
    )
  }
}

export const AddTodoContainer = connect(mapStateToProps, mapDispatchToProps)(AddTodoContainerBase)
