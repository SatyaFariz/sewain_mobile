import React from 'react'
import { View } from 'react-native'

import AppBar from './AppBar'
import EditNameView from './EditNameView'

const Component = props => {
  return (
    <View>
      <AppBar/>
      <EditNameView {...props}/>
    </View>
  )
}

export default Component