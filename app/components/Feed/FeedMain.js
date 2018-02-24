import React, {Component} from 'react'
import {View, Text, FlatList, StyleSheet, Image} from 'react-native'
import {DEADLINE_COLOR, TASK_DONE} from "../../resource/color";
import {commonPadding, paddingValue} from "../../resource/constant";
import {toDoColor} from "../../resource/image/image";
import {cropText} from "../../util/text";

/**
 * Design: ReplaceMe!
 */
export class FeedMain extends Component {
  renderItem = ({ item, index }) => (
    <View>
      {index === 0 && <View style={commonPadding}/>}
      <View style={styles.item}>
        <Image source={toDoColor[item.color]} style={styles.image}/>
        <View style={{justifyContent: 'space-between'}}>
          {/*{FIX ME}*/}
          <Text style={index !== 2 ? styles.task : styles.taskDone }>{cropText(item.task)}</Text>
          <Text style={index !== 2 ? styles.deadline : styles.deadlineDone}>{`Due ${item.deadline}`}</Text>
        </View>
      </View>
    </View>
  )

  render() {
    return (
      <View
        style={{flex:1, paddingHorizontal: paddingValue}}
      >
      <FlatList
        data={this.props.userToDos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItem}
      />
      </View>
    )
  }
}

const taskTextSize = 18
const deadlineTextSize = 12

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    height: 43,
    // backgroundColor: 'green', // FIX ME
    marginBottom: paddingValue,
  },
  image: {
    height: 16,
    width: 16,
    alignSelf: 'center',
    marginRight: 12,
  },
  task: {
    fontSize: taskTextSize,
  },
  taskDone: {
    fontSize: taskTextSize,
    color: TASK_DONE,
    textDecorationLine: 'line-through'
  },
  deadline: {
    fontSize: deadlineTextSize,
    color: DEADLINE_COLOR
  },
  deadlineDone: {
    fontSize: deadlineTextSize,
    color: TASK_DONE,
  }
})
