import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Component = props => {
  return (
    <View style={s.container}>
      <Text>Category Banner</Text>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Component