import React from 'react'
import { View, StyleSheet } from 'react-native'
import { graphql, createFragmentContainer } from 'react-relay'

import Categories from './Categories'
import FeaturedProductsList from './FeaturedProductsList'
import PromotionalProductsList from './PromotionalProductsList'

const Component = props => {
  const { promotionalProducts, featuredProducts } = props.viewer

  return (
    <View style={s.container}>
      <Categories categories={props.viewer.categories}/>

      {promotionalProducts.length > 1 &&
      <PromotionalProductsList products={promotionalProducts}/>
      }

      {featuredProducts.length > 1 &&
      <FeaturedProductsList products={featuredProducts}/>
      }
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default createFragmentContainer(Component, {
  viewer: graphql`
    fragment HomeView_viewer on Viewer {
      id,
      isAuthenticated,
      categories {
        ...Categories_categories
      },
      promotionalProducts {
        id,
        ...PromotionalProductsList_products
      },
      featuredProducts {
        id,
        ...FeaturedProductsList_products
      }
    }
  `
})