import React, {Component} from 'react'
import {Image, StyleSheet, TouchableOpacity} from 'react-native'
import {toDoColor} from "../../resource/image/image";

/**
 * Design: ReplaceMe!
 */
export class ColorOption extends Component {
  render() {
    const { input, color } = this.props

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => input.onChange(color)}
      >
        <Image
          source={toDoColor[color]}
          style={[styles.image, {opacity: input.value === color ? 1 : 0.2}]}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    height: 48, width: 48
  }
})
