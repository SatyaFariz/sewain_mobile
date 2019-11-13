import React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from '../../../common/Button'
import useNavigator from '../../../hooks/useNavigator'
import NoContentView from '../../../common/NoContentView'

const Component = props => {
  const { navigate } = useNavigator()

  const navigateToSignUp = () => {
    navigate('register')
  }

  const navigateToSignIn = () => {
    navigate('login')
  }

  return (
    <View style={s.container}>
      <View style={s.imageContainer}>
        <NoContentView/>
      </View>
      <View>
        <Button
          style={s.button}
          mode="text"
          onPress={navigateToSignIn}
        >
          Masuk
        </Button>

        <Button
          style={s.button}
          onPress={navigateToSignUp}
        >
          Daftar
        </Button>
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    padding: 18,
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  imageContainer: {
    flex: 1
  },
  button: {
    marginBottom: 10,
  }
})

export default Component