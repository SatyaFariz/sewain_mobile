import React from 'react'
import { View } from 'react-native'
import { graphql, createFragmentContainer } from 'react-relay'
import Item from './Item'
import Separator from '../../common/Separator'
import useNavigator from '../../hooks/useNavigator'

const Component = props => {
  const { navigate } = useNavigator()
  const {
    name,
    username,
    email,
    phone,
    address
  } = props.user

  return (
    <View>
      <Item
        label="Nama"
        value={name}
        onPress={() => navigate('editName', { name })}
      />
      <Separator/>
      <Item
        label="Username"
        value={username}
        onPress={() => navigate('editUsername', { username })}
      />
      <Separator/>
      <Item
        label="Email"
        value={email}
        onPress={() => navigate('editEmail', { email })}
      />
      <Separator/>
      <Item
        label="Telp"
        value={phone}
        onPress={() => navigate('editPhone', { phone })}
      />
      <Separator/>
      <Item
        label="Alamat"
        value={address}
        onPress={() => navigate('editAddress', { address })}
      />
      <Separator/>
      <Item
        label="Password"
        value="******"
        onPress={() => navigate('editPassword')}
      />
      <Separator/>
    </View>
  )
}

export default createFragmentContainer(Component, {
  user: graphql`
    fragment EditProfileView_user on User {
      id,
      name,
      username,
      email,
      phone,
      address
    }
  `
})