import React from 'react'
import { View, StyleSheet } from 'react-native'

import AppBar from './AppBar'
import EditPasswordView from './EditPasswordView'

const Component = props => {
  return (
    <View style={s.container}>
      <AppBar/>
      <EditPasswordView/>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Component