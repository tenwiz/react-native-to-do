import React, {Component} from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import {BUTTON_GREEN} from "../../resource/color";

/**
 * Design: ReplaceMe!
 */
export class Button extends Component {
  static defaultProps = {
    btnText: 'Continue',
    textColor: 'white',
    backgroundColor: BUTTON_GREEN
  }

  render() {
    const { btnText, backgroundColor, textColor } = this.props

    return (
      <TouchableOpacity style={[styles.button, { backgroundColor } ]}>
        <Text style={[styles.btnText, { color: textColor }]}>
          {btnText}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 14
  }
})
