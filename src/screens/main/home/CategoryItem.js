import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Caption, Avatar } from 'react-native-paper'
import useNavigator from '../../../hooks/useNavigator'

const Component = props => {
  const { navigate } = useNavigator()
  const { categoryID, name } = props

  const toCategoryScreen = () => {
    navigate('category', { categoryID, name })
  }

  return (
    <TouchableWithoutFeedback onPress={toCategoryScreen}>
      <View>
        {props.icon ?
        <Avatar.Icon size={55} icon={props.icon} style={{ backgroundColor: props.color }}/>
        :
        <Avatar.Text size={55} label="" style={{ backgroundColor: props.color }}/>
        }
        <View style={s.text}>
          <Caption>{props.name}</Caption>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const s = StyleSheet.create({
  text: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  }
})

export default Component