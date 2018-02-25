import React, {Component} from 'react'
import {View} from 'react-native'
import {CustomButton} from "../common/CustomButton";
import {BUTTON_ALERT} from "../../resource/color";
import {paddingValue} from "../../resource/constant";
import {resetStack} from "../../util/navigation";

/**
 * Design: ReplaceMe!
 */
export class ProfileMain extends Component {
  render() {
    return (
      <View style={{flex:1, padding: paddingValue, justifyContent: 'flex-end'}}>
        <CustomButton
          btnText={'Logout'}
          textColor={BUTTON_ALERT}
          borderColor={BUTTON_ALERT}
          backgroundColor={'white'}
          onPress={() => resetStack('Login', this.props.navigation)}
        />
      </View>
    )
  }
}
