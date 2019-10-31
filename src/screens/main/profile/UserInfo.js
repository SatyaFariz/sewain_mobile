import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, Text, IconButton } from 'react-native-paper'
import { graphql, createFragmentContainer } from 'react-relay'
import useNavigator from '../../../hooks/useNavigator'

const Component = props => {
  const {
    name,
    email,
    phone
  } = props.user

  const { navigate } = useNavigator()

  return (
    <View style={s.container}>
      <Avatar.Text size={60} label={name && name[0].toUpperCase()} />
      <View style={s.textContainer}>
        <Text style={s.name}>{name}</Text>
        <Text style={s.greyText}>{email}</Text>
        {phone && phone.length > 0 &&
        <Text style={s.greyText}>{phone}</Text>
        }
      </View>
      <View
        style={s.editBtn}
      >
        <IconButton
          icon="edit"
          size={20}
          onPress={() => navigate('editProfile')}
        />
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textContainer: {
    marginLeft: 10
  },
  name: {
    fontSize: 15
  },
  greyText: {
    color: '#000000',
    opacity: 0.6
  },
  editBtn: {
    alignItems: 'flex-end',
    flex: 1
  }
})

export default createFragmentContainer(Component, {
  user: graphql`
    fragment UserInfo_user on User {
      id,
      name,
      email,
      phone
    }
  `
})