import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppBar from './AppBar'
import EditProfileViewQuery from './EditProfileViewQuery'

const Component = props => {
  return (
    <View style={s.container} collapsable={false}>
      <AppBar/>
      <EditProfileViewQuery/>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Component