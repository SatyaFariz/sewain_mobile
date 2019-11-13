import React, { useState } from 'react'
import { ScrollView, StyleSheet, ToastAndroid } from 'react-native'
import TextField from '../../common/TextField'
import Validator from '../../utils/validator'
import Button from '../../common/Button'
import Login from '../../mutations/Login'
import useEnvironment from '../../hooks/useEnvironment'
import useNavigator from '../../hooks/useNavigator'

const Component = props => {
  const { navigate, goBack } = useNavigator()

  const { environment, resetEnvironment } = useEnvironment()
  const [input, setInput] = useState({
    usernameOrEmail: '',
    password: ''
  })

  const [validation, setValidation] = useState({ isValid: false })
  const [loading, setLoading] = useState(false)

  const isValid = () => {
    const validator = new Validator([
      {
        field: 'usernameOrEmail',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Harap diisi dengan username atau email anda.'
      },

      {
        field: 'password',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Harap diisi dengan password anda.'
      }
    ])

    const validation = validator.validate(input);
    setValidation(validation)
    return validation.isValid
  }

  const setField = name => text => {
    setInput({ ...input, [name]: text })
  }

  const login = () => {
    if(isValid() && !loading) {
      const duration = ToastAndroid.LONG
      Login(environment, { ...input }, (payload, err) => {
        if(err)
          ToastAndroid.show('Terjadi error.', duration)
        else {
          const { success, message } = payload.actionInfo
          if(success) {
            resetEnvironment()
            goBack()
          } else {
            ToastAndroid.show(message, duration)
          }
        }

        setLoading(false)
      })

      setLoading(true)
    }
  }

  const toForgotPasswordScreen = () => {
    !loading && navigate('forgotPassword')
  }

  return (
    <ScrollView style={s.container}
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <TextField
        label='Username/Email'
        value={input.usernameOrEmail}
        onChangeText={setField('usernameOrEmail')}
        error={validation.usernameOrEmail && validation.usernameOrEmail.message}
        autoFocus
      />

      <TextField
        label='Password'
        value={input.password}
        type="password"
        onChangeText={setField('password')}
        error={validation.password && validation.password.message}
        secureTextEntry
      />

      <Button
        style={[s.button, { marginTop: 20 }]}
        dark
        mode="contained"
        onPress={login}
      >
        Masuk
      </Button>

      <Button
        style={s.button}
        onPress={toForgotPasswordScreen}
      >
        Lupa Password
      </Button>
    </ScrollView>
  )
}

const s = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  button: {
    marginTop: 10,
  }
})

export default Component