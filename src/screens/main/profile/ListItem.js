import React from 'react'
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { withTheme } from 'react-native-paper'

const ListItem = props => {
  const { theme: { sidePadding }, onPress } = props
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={[
          s.container,
          {
            paddingLeft: sidePadding,
            paddingRight: sidePadding
          }
        ]}
      >
        {props.children}
      </View>
    </TouchableNativeFeedback>
  )
}

const s = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15
  }
})

export default withTheme(ListItem)