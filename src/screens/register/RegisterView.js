import React, { useState } from 'react'
import { ScrollView, View, StyleSheet, ToastAndroid } from 'react-native'
import TextField from '../../common/TextField'
import Validator from '../../utils/validator'
import { Button } from 'react-native-paper'
import { isEmail } from 'validator'
import useNavigator from '../../hooks/useNavigator'
import useEnvironment from '../../hooks/useEnvironment'
import Register from '../../mutations/Register'

const Component = props => {
  const { environment, resetEnvironment } = useEnvironment()
  const { goBack } = useNavigator()
  const [input, setInput] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    rePassword: ''
  })

  const [validation, setValidation] = useState({ isValid: false })
  const [loading, setLoading] = useState(false)

  const isTooShort = (password) => password.length < 6

  const matched = (rePassword) => {
    return rePassword.trim() === input.password.trim()
  }

  const isValid = () => {
    const validator = new Validator([
      {
        field: 'name',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Harap diisi dengan nama anda.'
      },

      {
        field: 'username',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Harap diisi dengan username anda.'
      },

      {
        field: 'username',
        method: Validator.isUsernameValid,
        validWhen: true,
        message: 'Username tidak valid.'
      },

      {
        field: 'email',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Harap diisi dengan email anda.'
      },

      {
        field: 'email',
        method: isEmail,
        validWhen: true,
        message: 'Email tidak valid.'
      },

      {
        field: 'phone',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Harap diisi dengan nomor HP anda.'
      },

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
        field: 'rePassword',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Harap diisi sesuai dengan password anda di atas.'
      },

      {
        field: 'rePassword',
        method: matched,
        validWhen: true,
        message: 'Password tidak sesuai dengan password anda di atas.'
      },
    ])

    const validation = validator.validate(input);
    setValidation(validation)
    return validation.isValid
  }

  const setField = name => text => {
    setInput({ ...input, [name]: text })
  }

  const register = () => {
    if(isValid() && !loading) {
      const duration = ToastAndroid.LONG
      const variables = {
        name: input.name,
        username: input.username,
        email: input.email,
        phone: input.phone,
        password: input.password
      }

      Register(environment, { input: variables }, (payload, err) => {
        if(err)
          ToastAndroid.show('Terjadi error.', duration)
        else {
          const { success, message } = payload.actionInfo
          if(success) {
            resetEnvironment()
            goBack()
          }
          else
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
          label='Nama'
          value={input.name}
          onChangeText={setField('name')}
          error={validation.name && validation.name.message}
          autoFocus
        />

        <TextField
          label='Username'
          value={input.username}
          onChangeText={setField('username')}
          error={validation.username && validation.username.message}
        />

        <TextField
          label='Email'
          value={input.email}
          onChangeText={setField('email')}
          error={validation.email && validation.email.message}
        />

        <TextField
          label='No. Telp'
          value={input.phone}
          onChangeText={setField('phone')}
          error={validation.phone && validation.phone.message}
          keyboardType="phone-pad"
        />

        <TextField
          label='Password'
          value={input.password}
          onChangeText={setField('password')}
          error={validation.password && validation.password.message}
          secureTextEntry
        />

        <TextField
          label='Ulangi Password'
          value={input.rePassword}
          onChangeText={setField('rePassword')}
          error={validation.rePassword && validation.rePassword.message}
          secureTextEntry
        />

        <Button
          style={s.button}
          dark
          mode="contained"
          onPress={register}
        >
          Daftar
        </Button>
      </View>
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