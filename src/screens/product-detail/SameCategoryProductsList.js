import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Headline } from 'react-native-paper'
import SameCategoryProductItem from './SameCategoryProductItem'
import { graphql, createFragmentContainer } from 'react-relay'

itemContainerWidth = 240

const Component = props => {
  const { sameCategoryProducts, category } = props.product

  if(sameCategoryProducts.length > 0) {
    return (
      <View style={s.container}>
        <Headline style={s.headline}>Kategori: {category.name}</Headline>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={s.list}
          snapToInterval={itemContainerWidth} //your element width
          snapToAlignment={"center"}
          data={sameCategoryProducts}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={s.itemContainer}>
              <SameCategoryProductItem product={item}/>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={s.separator}/>}
          ListFooterComponent={() => <View style={s.sidePadding}/>}
          ListHeaderComponent={() => <View style={s.sidePadding}/>}
        />
      </View>
    )
  }

  return null
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
  product: graphql`
    fragment SameCategoryProductsList_product on Product {
      id,
      category {
        name
      },
      sameCategoryProducts {
        ...SameCategoryProductItem_product
      }
    }
  `
})