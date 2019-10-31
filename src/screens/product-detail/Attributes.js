import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { graphql, createFragmentContainer } from 'react-relay'

const Component = props => {
  const { attributes } = props
  return (
    <View style={s.container}>
      {attributes.map((item, i) => (
        <View key={i} style={s.textContainer}>
          <Text style={s.name}>{`${item.name}: `}</Text>
          <Text>{item.value}</Text>
        </View>
      ))}
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  textContainer: {
    flexDirection: 'row',
    marginBottom: 2
  },
  name: {
    fontWeight: 'bold'
  }
})

export default createFragmentContainer(Component, {
  attributes: graphql`
    fragment Attributes_attributes on Attribute @relay(plural: true) {
      name,
      value
    }
  `
})