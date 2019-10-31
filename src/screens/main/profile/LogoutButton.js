import React, { useState } from 'react'
import { TouchableNativeFeedback, View, StyleSheet, ToastAndroid } from 'react-native'
import { Subheading } from 'react-native-paper'
import Logout from '../../../mutations/Logout'
import useEnvironment from '../../../hooks/useEnvironment'

const Component = props => {
  const [loading, setLoading] = useState(false)
  const { environment, resetEnvironment } = useEnvironment()

  const logout = () => {
    if(!loading) {
      const duration = ToastAndroid.LONG
      Logout(environment, (payload, err) => {
        if(err)
          ToastAndroid.show('Terjadi error.', duration)
        else {
          const { success } = payload
          resetEnvironment()
        }

        setLoading(false)
      })

      setLoading(true)
    }
  }

  return (
    <TouchableNativeFeedback onPress={logout}>
      <View style={s.container}>
        <Subheading style={s.text}>Log Out</Subheading>
      </View>
    </TouchableNativeFeedback>
  )
}

const s = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center'
  },

  text: {
    fontWeight: 'bold'
  }
})

export default Component