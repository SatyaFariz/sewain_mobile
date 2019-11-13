import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { Headline } from 'react-native-paper'
import PromotionalProductItem from './PromotionalProductItem'
import { graphql, createFragmentContainer } from 'react-relay'

const itemContainerWidth = 190

const Component = props => {

  return (
    <View style={s.container}>
      <Headline style={s.headline}>Promo</Headline>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={s.list}
        snapToInterval={itemContainerWidth} //your element width
        snapToAlignment={"center"}
        data={props.products}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={s.itemContainer}>
            <PromotionalProductItem product={item}/>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={s.separator}/>}
        ListFooterComponent={() => <View style={s.separator}/>}
        ListHeaderComponent={() => <View style={s.separator}/>}
      />
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  headline: {
    marginLeft: 10,
    marginBottom: 8
  },
  itemContainer: {
    width: itemContainerWidth
  },
  separator: {
    width: 10
  }
})

export default createFragmentContainer(Component, {
  products: graphql`
    fragment PromotionalProductsList_products on Product @relay(plural: true) {
      id,
      ...PromotionalProductItem_product
    }
  `
})