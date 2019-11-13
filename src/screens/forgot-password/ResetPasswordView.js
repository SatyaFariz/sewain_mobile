import React, { useState } from 'react'
import { View, StyleSheet, ToastAndroid } from 'react-native'
import TextField from '../../common/TextField'
import Validator from '../../utils/validator'
import Button from '../../common/Button'
import useEnvironment from '../../hooks/useEnvironment'
import useNavigator from '../../hooks/useNavigator'
import ResetPassword from '../../mutations/ResetPassword'

const Component = props => {
  const { goBack } = useNavigator()
  const { environment } = useEnvironment()
  const [input, setInput] = useState({
    password: '',
    rePassword: '',
    code: ''
  })

  const [validation, setValidation] = useState({ isValid: false })
  const [loading, setLoading] = useState(false)

  const isSixDigit = code => code.trim().length === 6

  const isTooShort = password => password.trim().length < 6

  const matched = rePassword => input.password.trim() === rePassword

  const setField = name => text => setInput({ ...input, [name]: text })

  const isValid = () => {
    const validator = new Validator([
      {
        field: 'code',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Masukan kode yang telah kami kirim ke email anda.'
      },

      {
        field: 'code',
        method: isSixDigit,
        validWhen: true,
        message: 'Masukan kode 6 digit.'
      },

      {
        field: 'password',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Harap diisi dengan password baru anda.'
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
        message: 'Password tidak cocok dengan password anda di atas.'
      }
    ])

    const validation = validator.validate(input);
    setValidation(validation)
    return validation.isValid
  }

  const changePassword = () => {
    if(isValid() && !loading) {
      const duration = ToastAndroid.LONG

      const variables = {
        newPassword: input.password,
        code: input.code,
        email: props.email
      }

      ResetPassword(environment, variables, (payload, err) => {
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
    <View style={s.container}>
      <TextField
        label='Kode'
        value={input.code}
        onChangeText={setField('code')}
        error={validation.code && validation.code.message}
        autoFocus
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
        style={{ marginTop: 20 }}
        onPress={changePassword}
      >
        Ubah Password
      </Button>

      <Button
        style={s.button}
        onPress={props.sendCode}
      >
        Kirim ulang kode
      </Button>
    </View>
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