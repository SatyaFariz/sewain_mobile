import React from 'react'
import { View, StyleSheet } from 'react-native'

import AppBar from './AppBar'
import RentFormView from './RentFormView'

const Component = props => {
  return (
    <View style={s.container}>
      <AppBar/>
      <RentFormView {...props}/>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  }
})

export default Component