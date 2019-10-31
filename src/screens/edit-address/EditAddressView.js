import React, { useState } from 'react'
import { View, StyleSheet, ToastAndroid } from 'react-native'
import TextField from '../../common/TextField'
import Validator from '../../utils/validator'
import { Button } from 'react-native-paper'
import useEnvironment from '../../hooks/useEnvironment'
import useNavigator from '../../hooks/useNavigator'
import AddressUpdate from '../../mutations/AddressUpdate'

const Component = props => {
  const { goBack } = useNavigator()
  const { environment } = useEnvironment()
  const oldAddress = (props.address || '').trim()
  const [address, setAddress] = useState(oldAddress)
  const [loading, setLoading] = useState(false)
  const [validation, setValidation] = useState({ isValid: false })

  const isValid = () => {
    const validator = new Validator([
      {
        field: 'address',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Harap diisi dengan alamat anda.'
      }
    ])

    const validation = validator.validate({ address });
    setValidation(validation)
    return validation.isValid
  }

  save = () => {
    if(isValid() && !loading && address.trim() !== oldAddress) {
      AddressUpdate(environment, { address }, (payload, err) => {
        err ? ToastAndroid.show('Terjadi error.', ToastAndroid.LONG) : goBack()
        setLoading(false)
      })

      setLoading(true)
    }
  }

  return (
    <View style={s.container}>
      <TextField
        label='Alamat'
        value={address}
        onChangeText={setAddress}
        error={validation.address && validation.address.message}
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