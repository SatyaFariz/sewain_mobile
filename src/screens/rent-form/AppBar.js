import React, { useContext } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { Appbar, withTheme } from 'react-native-paper'
import useNavigator from '../../hooks/useNavigator'

const Component = props => {
  const { colors } = props.theme
  const { goBack } = useNavigator()

  return (
    <View style={s.container}>
      <View style={[s.statusbar, { backgroundColor: colors.statusbar }]}/>
      <Appbar.Header style={s.container}>
        <Appbar.BackAction
          onPress={goBack}
          color="black"
        />
      </Appbar.Header>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  statusbar: {
    height: StatusBar.currentHeight
  }
})

export default withTheme(Component)