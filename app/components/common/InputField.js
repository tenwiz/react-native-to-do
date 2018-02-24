import React, {Component} from 'react'
import {TextInput, StyleSheet} from "react-native";
import {INPUT_BORDER, PLACEHOLDER_COLOR} from "../../resource/color";
import {commonFontFamily} from "../../resource/font";

/**
 * Design: ReplaceMe!
 */
export class InputField extends Component {
  static defaultProps = {
    multiline: false,
    borderColor: INPUT_BORDER,
    height: 48
  }

  render() {
    const { input, borderColor, height, ...inputProps } = this.props

    return (
      <TextInput
        {...inputProps}
        placeholderTextColor={PLACEHOLDER_COLOR}
        onChangeText={input.onChange}
        value={input.value}
        style={[styles.input, { borderColor, height }]}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingTop: 16,
    paddingBottom: 15,
    fontSize: 14,
    ...commonFontFamily
  }
})
