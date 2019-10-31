import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { withTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Component = props =>
  <View style={s.container}>
    <TouchableWithoutFeedback
      onPress={props.retry}
    >
      <Icon
        name="replay"
        size={50}
        color={props.theme.colors.primary}
      />
    </TouchableWithoutFeedback>
  </View>

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default withTheme(Component)