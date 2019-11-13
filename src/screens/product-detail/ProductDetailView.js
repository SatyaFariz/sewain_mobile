import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Divider } from 'react-native-paper'
import Animated from 'react-native-reanimated'
import Images from './Images'
import Title from './Title'
import Description from './Description'
import Price from './Price'
import Attributes from './Attributes'
import SameCategoryProductsList from './SameCategoryProductsList'
import RelatedProductsList from './RelatedProductsList'
import AddToCartButton from './AddToCartButton'
import { graphql, createFragmentContainer } from 'react-relay'

const Component = props => {
  const { allImages, relatedProducts, attributes, availableItems } = props.product
  return (
    <View style={s.container}>
      <Animated.ScrollView 
        onScroll={props.onScroll}
        style={s.container}
        showsVerticalScrollIndicator={false}
      >
        <Images images={allImages}/>
        <Title  product={props.product}/>
        <Divider style={s.divider}/>
        <Price product={props.product}/>

        {attributes.length > 0 &&
        <Attributes attributes={attributes}/>
        }

        <Description product={props.product}/>

        {relatedProducts.length > 0 &&
        <RelatedProductsList products={relatedProducts}/>
        }
        
        <SameCategoryProductsList product={props.product}/>
      </Animated.ScrollView>
      {availableItems > 0 &&
        <AddToCartButton 
          viewer={props.viewer}
          product={props.product}
        />
      }
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1
  },
  divider: {
    marginHorizontal: 20
  }
})

export default createFragmentContainer(Component, {
  product: graphql`
    fragment ProductDetailView_product on Product {
      id,
      availableItems,
      ...Title_product,
      ...Price_product,
      ...Description_product,
      ...SameCategoryProductsList_product,
      ...AddToCartButton_product,
      attributes {
        ...Attributes_attributes
      },
      allImages {
        ...Images_images
      },
      relatedProducts {
        ...RelatedProductsList_products
      }
    }
  `,
  viewer: graphql`
    fragment ProductDetailView_viewer on Viewer {
      id,
      ...AddToCartButton_viewer
    }
  `
})