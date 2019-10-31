import React from 'react'
import { TouchableNativeFeedback, View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

const Component = props => {
  const {
    text,
    onPress
  } = props

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={s.container}>
        <Text>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

const s = StyleSheet.create({
  container: {
    padding: 15
  }
})

export default Component