import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Headline } from 'react-native-paper'
import FeaturedProductItem from './FeaturedProductItem'
import { graphql, createFragmentContainer } from 'react-relay'

itemContainerWidth = 240

const Component = props => {
  return (
    <View style={s.container}>
      <Headline style={s.headline}>Featured</Headline>
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
            <FeaturedProductItem product={item}/>
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
  headline: {
    marginLeft: 10,
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
    fragment FeaturedProductsList_products on Product @relay(plural: true) {
      id,
      ...FeaturedProductItem_product
    }
  `
})