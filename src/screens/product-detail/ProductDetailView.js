import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Images from './Images'
import Title from './Title'
import Description from './Description'
import Price from './Price'
import Attributes from './Attributes'
import SameCategoryProductsList from './SameCategoryProductsList'
import RelatedProductsList from './RelatedProductsList'
import { graphql, createFragmentContainer } from 'react-relay'

const Component = props => {
  const { allImages, relatedProducts, attributes } = props.product
  return (
    <ScrollView style={s.container}>
      <Title  product={props.product}/>
      <Images images={allImages}/>
      <Price product={props.product}/>

      {attributes.length > 0 &&
      <Attributes attributes={attributes}/>
      }

      <Description product={props.product}/>

      {relatedProducts.length > 0 &&
      <RelatedProductsList products={relatedProducts}/>
      }
      
      <SameCategoryProductsList product={props.product}/>
    </ScrollView>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default createFragmentContainer(Component, {
  product: graphql`
    fragment ProductDetailView_product on Product {
      id,
      ...Title_product,
      ...Price_product,
      ...Description_product,
      ...SameCategoryProductsList_product,
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
  `
})