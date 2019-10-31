import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { graphql, createFragmentContainer } from 'react-relay'

import CartedProductItem from './CartedProductItem'

const Component = props => {
  const { products } = props
  return (
    <FlatList
      contentContainerStyle={s.contentContainer}
      data={products}
      keyExractor={item => item.id}
      renderItem={({ item }) => 
        <View style={s.itemContainer}>
          <CartedProductItem product={item}/>
        </View>
      }
      ItemSeparatorComponent={() => <View style={s.separator}/>}
    />
  )
}

const s = StyleSheet.create({
  contentContainer: {
    paddingTop: 15,
    paddingBottom: 15
  },
  separator: {
    height: 10
  },
  itemContainer: {
    paddingLeft: 8,
    paddingRight: 8
  }
})

export default createFragmentContainer(Component, {
  products: graphql`
    fragment CartedProductsList_products on CartedProduct @relay(plural: true) {
      id,
      ...CartedProductItem_product
    }
  `
})