import React from 'react'
import { View, StyleSheet } from 'react-native'
import ProductDetailViewQuery from './ProductDetailViewQuery'
import AppBar from './AppBar'

const Component = props => {
  return (
    <View collapsable={false} style={s.container}>
      <AppBar {...props}/>
      <ProductDetailViewQuery {...props}/>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Component