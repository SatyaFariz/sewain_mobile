import React from 'react'
import { View } from 'react-native'

import AppBar from './AppBar'
import EditAddressView from './EditAddressView'

const Component = props => {
  return (
    <View>
      <AppBar/>
      <EditAddressView {...props}/>
    </View>
  )
}

export default Component