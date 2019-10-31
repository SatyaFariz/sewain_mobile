import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { graphql, createFragmentContainer } from 'react-relay'

const Component = props => {
  const {
    title,
    text,
    date
  } = props.notification

  return (
    <View style={s.container}>
      {title && title.length > 1 &&
      <Text style={s.title}>{title}</Text>
      }
      <Text style={s.text}>{text}</Text>
      <Text style={s.date}>{date}</Text>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1'
  },
  title: {
    fontSize: 17
  },
  text: {
    color: '#000000',
    opacity: 0.6
  },
  date: {
    fontSize: 10,
    marginTop: 7,
    color: '#1565C0'
  }
})

export default createFragmentContainer(Component, {
  notification: graphql`
    fragment NotificationItem_notification on Notification {
      id,
      rowID,
      title,
      text,
      ref,
      refID,
      mobilePressAction,
      url,
      date
    }
  `
})