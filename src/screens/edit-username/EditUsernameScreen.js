import React from 'react'
import { View } from 'react-native'

import AppBar from './AppBar'
import EditUsernameView from './EditUsernameView'

const Component = props => {
  return (
    <View>
      <AppBar/>
      <EditUsernameView {...props}/>
    </View>
  )
}

export default Component