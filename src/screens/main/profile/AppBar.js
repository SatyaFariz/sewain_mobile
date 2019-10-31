import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar, withTheme } from 'react-native-paper'

const Component = props => {
  const { primary } = props.theme.colors
  const style = [s.container, { backgroundColor: primary }]
  return (
    <View style={style}>
      <Appbar.Header style={style}>
        <Appbar.Content
          title="Profil"
        />
      </Appbar.Header>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    elevation: 6
  }
})

export default withTheme(Component)