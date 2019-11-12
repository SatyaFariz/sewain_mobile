import React, { useContext } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { Appbar, withTheme } from 'react-native-paper'
import useNavigator from '../../hooks/useNavigator'

const Component = props => {
  const { goBack } = useNavigator()
  const { colors } = props.theme

  const style = [s.container, { backgroundColor: colors.primary }]

  return (
    <View style={style}>
      <View style={[s.statusbar, { backgroundColor: colors.statusbar }]}/>
      <Appbar.Header style={style}>
        <Appbar.BackAction
          onPress={goBack}
        />
        <Appbar.Content
          title="Email"
        />
      </Appbar.Header>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    elevation: 6
  },
  statusbar: {
    height: StatusBar.currentHeight
  }
})

export default withTheme(Component)