import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar, withTheme } from 'react-native-paper'
import useNavigator from '../../hooks/useNavigator'

const Component = props => {
  const { goBack } = useNavigator()

  return (
    <View style={s.container}>
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
  }
})

export default withTheme(Component)