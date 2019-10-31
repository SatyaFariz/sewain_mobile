import React from 'react'
import { RefreshControl } from 'react-native'
import { withTheme } from 'react-native-paper'

const Component = props => {
  const { primary } = props.theme.colors
  return (
    <RefreshControl colors={[primary]} {...props}/>
  )
}

export default withTheme(Component)