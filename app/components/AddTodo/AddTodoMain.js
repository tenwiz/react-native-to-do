import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {CustomButton} from "../common/CustomButton";
import { reduxForm, Field } from 'redux-form'

/**
 * Design: ReplaceMe!
 */
class AddTodoMain extends Component {
  render() {
    return (
      <View style={{flex:1, padding: 16}}>
        <Text>
          AddTodoMain
        </Text>
        <CustomButton btnText={'Add'} onPress={() => console.log('add')}/>
      </View>
    )
  }
}

export default reduxForm({
  form: 'addTodo'
})(AddTodoMain);
