import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppBar from './AppBar'
import RegisterView from './RegisterView'

const Component = props => {
  return (
    <View style={s.container}>
      <AppBar/>
      <RegisterView/>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Component