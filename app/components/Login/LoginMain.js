import React, {Component} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import {Button} from "../common/Button";
import {appLogo} from "../../images/assets";
import {InputField} from "../common/InputField";
import { reduxForm, Field } from 'redux-form'

const LogoWithText = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Image source={appLogo} style={styles.logoImg}/>
    <Text style={styles.logoText}>
      Todo
    </Text>
  </View>
)

/**
 * Design: ReplaceMe!
 */
class LoginMain extends Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <View style={{flex: 1, backgroundColor: 'white', padding: 16}}>
        <LogoWithText/>
        <Field
          name={'username'}
          component={InputField}
          placeholder={'Name'}
        />
        <View style={{height: 16}}/>
        <Button btnText={'Login'} onPress={handleSubmit}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logoImg: {
    width: 88,
    height: 96,
    marginBottom: 16
  },
  logoText: {
    fontSize: 24
  }
})

export default reduxForm({
  form: 'login'
})(LoginMain);
