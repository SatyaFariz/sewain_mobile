import React, { useState } from 'react'
import { ScrollView, View, StyleSheet, ToastAndroid } from 'react-native'
import TextField from '../../common/TextField'
import Validator from '../../utils/validator'
import Button from '../../common/Button'
import PasswordUpdate from '../../mutations/PasswordUpdate'
import useEnvironment from '../../hooks/useEnvironment'
import useNavigator from '../../hooks/useNavigator'

const Component = props => {

  const { environment } = useEnvironment()
  const { goBack } = useNavigator()

  const [input, setInput] = useState({
    password: '',
    newPassword: '',
    rePassword: ''
  })

  const [loading, setLoading] = useState(false)

  const [validation, setValidation] = useState({ isValid: false })

  const onChangeText = name => text => setInput({ ...input, [name]: text })

  const isTooShort = (password) => password.length < 6

  const matched = (rePassword) => {
    return rePassword.trim() === input.newPassword.trim()
  }

  const isValid = () => {
    const validator = new Validator([
      {
        field: 'password',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Harap diisi dengan password anda.'
      },
      {
        field: 'password',
        method: isTooShort,
        validWhen: false,
        message: 'Password minimal 6 karakter.'
      },
      {
        field: 'newPassword',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Harap diisi dengan password yang baru.'
      },
      {
        field: 'newPassword',
        method: isTooShort,
        validWhen: false,
        message: 'Password minimal 6 karakter.'
      },
      {
        field: 'rePassword',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Harap diisi sesuai dengan password anda diatas.'
      },
      {
        field: 'rePassword',
        method: matched,
        validWhen: true,
        message: 'Tidak sesuai dengan password di atas.'
      },
    ])

    const validation = validator.validate(input);
    setValidation(validation)
    return validation.isValid
  }

  save = () => {
    if(isValid() && !loading) {
      const variables = {
        oldPassword: input.password,
        newPassword: input.newPassword
      }

      const duration = ToastAndroid.LONG

      PasswordUpdate(environment, variables, (payload, err) => {
        if(err)
          ToastAndroid.show('Terjadi error.', duration)
        else {
          const { success, message } = payload
          if(success)
            goBack()
          
          ToastAndroid.show(message, duration)
        }

        setLoading(false)
      })

      setLoading(true)
    }
  }

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <View style={s.container}>
        <TextField
          label='Password Anda'
          value={input.password}
          onChangeText={onChangeText('password')}
          error={validation.password && validation.password.message}
          autoFocus
          secureTextEntry
        />

        <TextField
          label='Password Baru'
          value={input.newPassword}
          onChangeText={onChangeText('newPassword')}
          error={validation.newPassword && validation.newPassword.message}
          secureTextEntry
        />

        <TextField
          label='Ulangi Password'
          value={input.rePassword}
          onChangeText={onChangeText('rePassword')}
          error={validation.rePassword && validation.rePassword.message}
          secureTextEntry
        />

        <Button
          style={s.button}
          onPress={save}
        >
          Simpan
        </Button>
      </View>
    </ScrollView>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  button: {
    marginTop: 20,
  }
})

export default Component