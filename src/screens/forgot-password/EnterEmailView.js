import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import TextField from '../../common/TextField'
import Validator from '../../utils/validator'
import Button from '../../common/Button'
import { isEmail } from 'validator'

const Component = props => {
  const { email, setEmail } = props
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

  const sendCode = () => isValid() && props.sendCode()

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
        onPress={sendCode}
      >
        Kirim Kode
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