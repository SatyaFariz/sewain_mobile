import React from 'react'
import { View } from 'react-native'

import AppBar from './AppBar'
import EditPhoneView from './EditPhoneView'

const Component = props => {
  return (
    <View>
      <AppBar/>
      <EditPhoneView {...props}/>
    </View>
  )
}

export default Component