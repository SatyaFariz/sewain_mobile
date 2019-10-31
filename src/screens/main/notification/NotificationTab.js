import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import AppBar from './AppBar'
import NotificationViewQuery from './NotificationViewQuery'

class NotificationTab extends Component {
  render() {
    return (
      <View style={s.container}>
        <AppBar/>
        <NotificationViewQuery/>
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default NotificationTab