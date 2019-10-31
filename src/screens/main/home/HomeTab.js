import React from 'react'
import { View, StyleSheet } from 'react-native'
import HomeViewQuery from './HomeViewQuery'
import AppBar from './AppBar'

const Component = props => {
  return (
    <View style={s.container}>
      <AppBar/>
      <HomeViewQuery/>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Component