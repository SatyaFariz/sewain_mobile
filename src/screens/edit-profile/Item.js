import React from 'react'
import { TouchableNativeFeedback, View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

const Component = props => {
  const {
    label,
    value,
    onPress
  } = props

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={s.container}>
        <Text style={s.label}>{label}</Text>
        {value && value.length > 0 ?
        <Text style={s.value}>{value}</Text>
        :
        <Text style={s.notSet}>Not set</Text>
        }
      </View>
    </TouchableNativeFeedback>
  )
}

const s = StyleSheet.create({
  container: {
    padding: 15
  },
  label: {
    fontSize: 15,
    marginBottom: 4
  },
  value: {
    fontSize: 13,
    color: '#000000',
    opacity: 0.6
  },
  notSet: {
    fontSize: 13,
    color: '#B00020',
    opacity: 0.6
  }
})

export default Component