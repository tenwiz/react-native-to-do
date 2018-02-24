import React, {Component} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import {CustomButton} from "../common/CustomButton";
import {appLogo} from "../../resource/image/image";
import {InputField} from "../common/InputField";
import { reduxForm, Field } from 'redux-form'
import {commonFontFamily} from "../../resource/font";
import {commonPadding, paddingValue} from "../../resource/constant";

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
      <View style={{flex: 1, backgroundColor: 'white', padding: paddingValue}}>
        <LogoWithText/>
        <Field
          name={'username'}
          component={InputField}
          placeholder={'Name'}
        />
        <View style={commonPadding}/>
        <CustomButton btnText={'Login'} onPress={handleSubmit}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logoImg: {
    width: 88,
    height: 96,
    marginBottom: paddingValue
  },
  logoText: {
    fontSize: 24,
    ...commonFontFamily
  }
})

export default reduxForm({
  form: 'login'
})(LoginMain);
