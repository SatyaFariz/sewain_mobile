import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import NotLoggedView from './NotLoggedView'
import AppBar from './AppBar'
import ProfileViewQuery from './ProfileViewQuery'

class ProfileTab extends Component {
  render() {
    return (
      <View style={s.container}>
        <AppBar/>
        <ProfileViewQuery/>
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default ProfileTab