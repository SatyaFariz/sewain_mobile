import React from 'react'
import { View } from 'react-native'

import AppBar from './AppBar'
import EditEmailView from './EditEmailView'

const Component = props => {
  return (
    <View>
      <AppBar/>
      <EditEmailView {...props}/>
    </View>
  )
}

export default Component