import React, { useState } from 'react'
import { View, StyleSheet, ToastAndroid } from 'react-native'
import TextField from '../../common/TextField'
import Validator from '../../utils/validator'
import Button from '../../common/Button'
import useEnvironment from '../../hooks/useEnvironment'
import useNavigator from '../../hooks/useNavigator'
import UsernameUpdate from '../../mutations/UsernameUpdate'

const Component = props => {
  const { goBack } = useNavigator()
  const { environment } = useEnvironment()
  const oldUsername = (props.username || '').trim()
  const [username, setUsername] = useState(oldUsername)
  const [loading, setLoading] = useState(false)
  const [validation, setValidation] = useState({ isValid: false })

  const isValid = () => {
    const validator = new Validator([
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
      }
    ])

    const validation = validator.validate({ username });
    setValidation(validation)
    return validation.isValid
  }

  save = () => {
    const duration = ToastAndroid.LONG
    if(isValid() && !loading && username.trim() !== oldUsername) {
      UsernameUpdate(environment, { username }, (payload, err) => {
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
        label='Username'
        value={username}
        onChangeText={setUsername}
        error={validation.username && validation.username.message}
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