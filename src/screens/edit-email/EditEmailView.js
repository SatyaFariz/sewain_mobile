import React, { useState } from 'react'
import { View, StyleSheet, ToastAndroid } from 'react-native'
import TextField from '../../common/TextField'
import Validator from '../../utils/validator'
import Button from '../../common/Button'
import { isEmail } from 'validator'
import useEnvironment from '../../hooks/useEnvironment'
import useNavigator from '../../hooks/useNavigator'
import EmailUpdate from '../../mutations/EmailUpdate'

const Component = props => {
  const { goBack } = useNavigator()
  const { environment } = useEnvironment()
  const oldEmail = (props.email || '').trim()
  const [email, setEmail] = useState(oldEmail)
  const [loading, setLoading] = useState(false)

  const [validation, setValidation] = useState({ isValid: false })

  const isValid = () => {
    const validator = new Validator([
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
      }
    ])

    const validation = validator.validate({ email });
    setValidation(validation)
    return validation.isValid
  }

  save = () => {
    const duration = ToastAndroid.LONG
    if(isValid() && !loading && email.trim() !== oldEmail) {
      EmailUpdate(environment, { email }, (payload, err) => {
        if(!err) {
          const { success, message } = payload.actionInfo
          success ? goBack() : ToastAndroid.show(message, duration)
        } else {
          ToastAndroid.show('Terjadi error.', duration)
        }

        setLoading(false)
      })

      setLoading(true)
    }
  }

  return (
    <View style={s.container}>
      <TextField
        label='Email'
        value={email}
        onChangeText={setEmail}
        error={validation.email && validation.email.message}
        autoFocus
      />

      <Button
        style={s.button}
        onPress={save}
      >
        Simpan
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
    marginTop: 20,
  }
})

export default Component