import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { withTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'

const size = 40

const Component = props => {
  const containerStyle = [s.container, props.containerStyle || {}]
  if(props.error) {
    return (
      <View style={containerStyle}>
        <TouchableWithoutFeedback
          onPress={props.retry}
        >
          <Icon
            name="replay"
            size={size}
            color={props.theme.colors.primary}
          />
        </TouchableWithoutFeedback>
      </View>
    )
  } else if(!props.hasMore) {
    return null
  }

  return (
    <View style={containerStyle}>
      <ActivityIndicator size={size}/>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    paddingBottom: 0,
    paddingTop: 20
  }
})

export default withTheme(Component)