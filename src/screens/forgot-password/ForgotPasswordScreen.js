import React, { useState } from 'react'
import { ScrollView, View, StyleSheet, ToastAndroid } from 'react-native'

import AppBar from './AppBar'
import EnterEmailView from './EnterEmailView'
import ResetPasswordView from './ResetPasswordView'
import SendCode from '../../mutations/SendResetPasswordCode'
import useEnvironment from '../../hooks/useEnvironment'

const Component = props => {
  const { environment } = useEnvironment()
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const next = () => setStep(step + 1)

  const sendCode = () => {
    if(!loading) {
      const duration = ToastAndroid.LONG
      SendCode(environment, { email }, (payload, err) => {
        if(err)
          ToastAndroid.show('Terjadi error.', duration)
        else {
          const { success, message } = payload
          if(success)
            next()
          
          ToastAndroid.show(message, duration)
        }

        setLoading(false)
      })

      setLoading(true)
    }
  }
  
  const renderView = () => {
    switch (step) {
      case 0:
        return (
          <EnterEmailView
            sendCode={sendCode}
            email={email}
            setEmail={setEmail}
          />
        )
    
      default:
        return (
          <ResetPasswordView
            email={email}
            sendCode={sendCode}
          />
        )
    }
  }

  return (
    <View style={s.container}>
      <AppBar/>
      <ScrollView 
        style={s.container}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
      >
        {renderView()}
      </ScrollView>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  }
})

export default Component