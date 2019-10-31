import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Headline } from 'react-native-paper'
import RelatedProductItem from './RelatedProductItem'
import { graphql, createFragmentContainer } from 'react-relay'

itemContainerWidth = 240

const Component = props => {
  const { products } = props

  return (
    <View style={s.container}>
      <Headline style={s.headline}>Related</Headline>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemContainerWidth} //your element width
        snapToAlignment={"center"}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={s.itemContainer}>
            <RelatedProductItem product={item}/>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={s.separator}/>}
        ListFooterComponent={() => <View style={s.sidePadding}/>}
        ListHeaderComponent={() => <View style={s.sidePadding}/>}
      />
    </View>
  )
}

const s = StyleSheet.create({
  sidePadding: {
    width: 20
  },
  headline: {
    marginLeft: 20,
    marginBottom: 8
  },
  itemContainer: {
    width: itemContainerWidth
  },
  container: {
    marginBottom: 20
  },
  separator: {
    width: 10
  }
})

export default createFragmentContainer(Component, {
  products: graphql`
    fragment RelatedProductsList_products on Product @relay(plural: true) {
      id,
      ...RelatedProductItem_product
    }
  `
})