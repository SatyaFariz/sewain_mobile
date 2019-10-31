import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppBar from './AppBar'
import CartViewQuery from './CartViewQuery'

const Component = props => {
  return (
    <View style={s.container}>
      <AppBar/>
      <CartViewQuery/>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Component