import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Title, Text, Avatar } from 'react-native-paper'
import { withTheme } from 'react-native-paper'
import { graphql, createFragmentContainer } from 'react-relay'

class Header extends Component {
  render() {
    const { user, theme: { sidePadding }} = this.props
    return (
      <View style={[s.container, { padding: sidePadding }]}>
        <View style={s.texts}>
          <Title style={s.title}>{user.name}</Title>
          <Text style={s.text}>{user.email}</Text>
        </View>
        <Avatar.Text size={64} label={user.name[0]} color="white"/>
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 25,
    color: '#424242'
  },
  texts: {
    flex: 1,
    paddingBottom: 5
  },
  text: {
    color: '#424242'
  }
})

export default createFragmentContainer(withTheme(Header), {
  user: graphql`
    fragment ProfileViewHeader_user on User {
      id,
      name,
      email
    }
  `
})