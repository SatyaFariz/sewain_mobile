import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Headline } from 'react-native-paper'
import Logo from '../assets/logo_dark.svg'

const Component = props => {
  return (
    <View style={s.container}>
      <View style={s.innerContainer}>

        <Logo width={200} height={70}/>

        {props.text && props.text.trim() !== '' &&
        <Headline>{props.text}</Headline>
        }
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Component