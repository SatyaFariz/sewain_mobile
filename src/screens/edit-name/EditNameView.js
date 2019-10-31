import React, { useState } from 'react'
import { View, StyleSheet, ToastAndroid } from 'react-native'
import TextField from '../../common/TextField'
import Validator from '../../utils/validator'
import { Button } from 'react-native-paper'
import useEnvironment from '../../hooks/useEnvironment'
import useNavigator from '../../hooks/useNavigator'
import NameUpdate from '../../mutations/NameUpdate'

const Component = props => {
  const { goBack } = useNavigator()
  const { environment } = useEnvironment()
  const oldName = (props.name || '').trim()
  const [name, setName] = useState(oldName)
  const [loading, setLoading] = useState(false)

  const [validation, setValidation] = useState({ isValid: false })

  const isValid = () => {
    const validator = new Validator([
      {
        field: 'name',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Harap diisi dengan nama anda.'
      }
    ])

    const validation = validator.validate({ name });
    setValidation(validation)
    return validation.isValid
  }

  save = () => {
    if(isValid() && !loading && name.trim() !== oldName) {
      NameUpdate(environment, { name }, (payload, err) => {
        err ? ToastAndroid.show('Terjadi error.', ToastAndroid.LONG) : goBack()

        setLoading(false)
      })

      setLoading(true)
    }
  }

  return (
    <View style={s.container}>
      <TextField
        label='Nama'
        value={name}
        onChangeText={setName}
        error={validation.name && validation.name.message}
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