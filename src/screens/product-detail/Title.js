import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Subheading, Caption, Text } from 'react-native-paper'
import { graphql, createFragmentContainer } from 'react-relay'

const Component = props => {
  const { name, category, availableItems } = props.product
  return (
    <View style={s.container}>
      <Caption>{category.name}</Caption>
      <Subheading>
       {name}
      </Subheading>
      {availableItems < 1 &&
      <Text style={s.text}>Produk ini sedang tidak tersedia.</Text>
      }
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    padding: 20
  },
  text: {
    fontSize: 13,
    color: '#B00020',
    opacity: 0.6
  }
})

export default createFragmentContainer(Component, {
  product: graphql`
    fragment Title_product on Product {
      id,
      name,
      availableItems,
      category {
        id,
        name
      }
    }
  `
})