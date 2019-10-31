import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

const Component = props => {
  return (
    <Text style={s.text}>Produk ini sedang tidak tersedia.</Text>
  )
}

const s = StyleSheet.create({
  text: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 13,
    color: '#B00020',
    opacity: 0.6
  }
})

export default Component