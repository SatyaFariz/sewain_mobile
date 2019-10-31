import React, { useState } from 'react'
import { View, StyleSheet, ToastAndroid } from 'react-native'
import TextField from '../../common/TextField'
import Validator from '../../utils/validator'
import { Button } from 'react-native-paper'
import useEnvironment from '../../hooks/useEnvironment'
import useNavigator from '../../hooks/useNavigator'
import PhoneUpdate from '../../mutations/PhoneUpdate'

const Component = props => {
  const { goBack } = useNavigator()
  const { environment } = useEnvironment()
  const oldPhone = (props.phone || '').trim()
  const [phone, setPhone] = useState(props.phone || '')
  const [loading, setLoading] = useState(false)

  const [validation, setValidation] = useState({ isValid: false })

  const isValid = () => {
    const validator = new Validator([
      {
        field: 'phone',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Harap diisi dengan nomor telepon/HP anda.'
      }
    ])

    const validation = validator.validate({ phone });
    setValidation(validation)
    return validation.isValid
  }

  save = () => {
    if(isValid() && !loading && phone.trim() !== oldPhone) {
      PhoneUpdate(environment, { phone }, (payload, err) => {
        err ? ToastAndroid.show('Terjadi error.', ToastAndroid.LONG) : goBack()
        setLoading(false)
      })
      
      setLoading(true)
    }
  }

  return (
    <View style={s.container}>
      <TextField
        label='Telp'
        value={phone}
        onChangeText={setPhone}
        error={validation.phone && validation.phone.message}
        autoFocus
      />

      <Button
        style={[s.button, { marginTop: 20 }]}
        dark
        mode="contained"
        onPress={save}
      >
        Save
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