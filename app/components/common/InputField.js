import React, {Component} from 'react'
import {TextInput, StyleSheet} from "react-native";
import {INPUT_BORDER} from "../../resource/color";

/**
 * Design: ReplaceMe!
 */
export class InputField extends Component {
  render() {
    const { input, ...inputProps } = this.props

    return (
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        value={input.value}
        style={styles.input}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: INPUT_BORDER,
    paddingHorizontal: 12
  }
})
