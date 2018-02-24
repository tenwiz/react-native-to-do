import React, {Component} from 'react'
import {View} from 'react-native'
import {CustomButton} from "../common/CustomButton";
import { reduxForm, Field } from 'redux-form'
import {InputField} from "../common/InputField";
import {MUTILINE_INPUT_BORDER} from "../../resource/color";
import {commonPadding, paddingValue} from "../../resource/constant";
import {toDoColor} from "../../resource/image/image";
import {ColorOption} from "./ColorOption";

/**
 * Design: ReplaceMe!
 */
class AddTodoMain extends Component {
  render() {
    return (
      <View style={{flex:1, padding: paddingValue}}>
        <Field
          name={'task'}
          component={InputField}
          placeholder={'When do you need to do?'}
          borderColor={MUTILINE_INPUT_BORDER}
          height={100}
          multiline
        />
        <View style={commonPadding}/>
        <Field
          name={'deadline'}
          component={InputField}
          placeholder={'When is it due?'}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 32}}>
          {
            Object.keys(toDoColor).map((color, index) => (
              <Field
                key={index}
                name={'color'}
                component={ColorOption}
                color={color}
              />
            ))
          }
        </View>
        <CustomButton btnText={'Add'} onPress={() => console.log('add')}/>
      </View>
    )
  }
}

export default reduxForm({
  form: 'addTodo'
})(AddTodoMain);
