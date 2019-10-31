import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar, withTheme } from 'react-native-paper'
import useNavigator from '../../hooks/useNavigator'

const Component = props => {
  const { goBack } = useNavigator()
  const { primary } = props.theme.colors

  const style = [s.container, { backgroundColor: primary }]

  return (
    <View style={style}>
      <Appbar.Header style={style}>
        <Appbar.BackAction
          onPress={goBack}
        />
        <Appbar.Content
          title="Nama"
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