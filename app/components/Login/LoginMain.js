import React, {Component} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import {Button} from "../common/Button";
import {appLogo} from "../../images/assets";
import {InputField} from "../common/InputField";

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
export class LoginMain extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white', padding: 16}}>
        <LogoWithText/>
        <InputField placeholder={'Name'}/>
        <View style={{height: 16}}/>
        <Button/>
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
