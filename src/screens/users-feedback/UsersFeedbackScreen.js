import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

import AppBar from './AppBar'

const Component = props => {
  return (
    <View style={s.container}>
      <AppBar/>
      <WebView 
        style={s.container}
        source={{ uri: props.url }}
      />
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default Component