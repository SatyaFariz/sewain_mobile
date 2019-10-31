import React from 'react'
import { View, StyleSheet } from 'react-native'

const Component = props => {
  return (
    <View style={[s.separator, { height: props.height || 1 }]}/>
  )
}

const s = StyleSheet.create({
  separator: {
    backgroundColor: '#f1f1f1'
  }
})

export default Component