import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { Title } from 'react-native-paper'
import { graphql, createFragmentContainer } from 'react-relay'

import LeasedProductItem from './LeasedProductItem'

const Component = props => {
  const { products } = props
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={s.contentContainer}
      data={products}
      keyExractor={item => item.id}
      renderItem={({ item }) => 
        <View style={s.itemContainer}>
          <LeasedProductItem product={item}/>
        </View>
      }
      ItemSeparatorComponent={() => <View style={s.separator}/>}
      ListHeaderComponent={() => 
        <View style={s.header}>
          <Title>Sedang Disewa</Title>
        </View>
      }
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
  },
  header: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10
  }
})

export default createFragmentContainer(Component, {
  products: graphql`
    fragment LeasedProductsList_products on LeasedProduct @relay(plural: true) {
      id,
      ...LeasedProductItem_product
    }
  `
})