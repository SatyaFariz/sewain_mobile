import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Logo from '../../assets/logo_dark.svg'

const Component = props => {
  return (
    <View style={s.container}>
      <Logo width={200}/>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Component