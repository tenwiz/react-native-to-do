import React, {Component} from 'react'
import {TextInput, StyleSheet} from "react-native";
import {INPUT_BORDER} from "../../resource/color";

/**
 * Design: ReplaceMe!
 */
export class InputField extends Component {
  render() {
    const { placeholder } = this.props

    return (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
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
