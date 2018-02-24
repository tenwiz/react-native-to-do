import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NewTodoMain} from "../../components/NewTodo/NewTodoMain";

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
    return <NewTodoMain/>
  }
}

export const NewTodoContainer = connect(mapStateToProps, mapDispatchToProps)(NewTodoContainerBase)
