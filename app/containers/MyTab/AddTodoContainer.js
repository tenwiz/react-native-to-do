import React, {Component} from 'react'
import {connect} from 'react-redux'
import {TabHeader} from "../../components/common/TabHeader";
import {View} from "react-native";
import AddTodoMain from "../../components/AddTodo/AddTodoMain";
import * as toDosActions from "../../redux/modules/toDos";
import {bindActionCreators} from "redux";

const mapStateToProps = (state) => (
  {}
)

const mapDispatchToProps = (dispatch) => ( // short-hand dispatch syntax ftw
  bindActionCreators(toDosActions, dispatch)
)

/**
 * Design: ReplaceMe!
 */
class AddTodoContainerBase extends Component {
  render() {
    const { createTodoAndToFeed, navigation } = this.props

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <TabHeader headerText={'Add'}/>
        <AddTodoMain onSubmit={todo => createTodoAndToFeed(todo, navigation)}/>
      </View>
    )
  }
}

export const AddTodoContainer = connect(mapStateToProps, mapDispatchToProps)(AddTodoContainerBase)
