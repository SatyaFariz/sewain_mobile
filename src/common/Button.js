import React from 'react'
import { Button } from 'react-native-paper'

const Component = props => {
  const { mode, style } = props
  return (
    <Button
      {...props}
      dark
      mode={mode || 'contained'}
      style={[style || {}, { elevation: 0 }]}
    />
  )
}

export default Component