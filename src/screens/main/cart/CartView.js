import React, { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { graphql, createRefetchContainer } from 'react-relay'
import CartedProductsList from './CartedProductsList'
import LeasedProductsList from './LeasedProductsList'
import RefreshControl from '../../../common/RefreshControl'
import NoContentView from '../../../common/NoContentView'

const Component = props => {
  const { cart, leasedProducts } = props.viewer
  const [refreshing, setRefreshing] = useState(false)

  refresh = () => {
    props.relay.refetch({}, {}, () => {
      setRefreshing(false)
    }, { force: true })
    setRefreshing(true)
  }

  return (
    <ScrollView
      contentContainerStyle={s.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={refresh}
        />
      }
    >
      {cart.length > 0 &&
      <CartedProductsList products={cart}/>
      }
      {leasedProducts.length > 0 &&
      <LeasedProductsList products={leasedProducts}/>
      }

      {cart.length === 0 && leasedProducts.length === 0 &&
        <NoContentView text="Keranjang anda kosong"/>
      }
    </ScrollView>
  )
}

const s = StyleSheet.create({
  container: {
    flexGrow: 1
  }
})

export default createRefetchContainer(Component, 
  {
    viewer: graphql`
      fragment CartView_viewer on Viewer {
        id,
        cart {
          ...CartedProductsList_products
        },
        leasedProducts {
          ...LeasedProductsList_products
        }
      }
    `
  },
  graphql`
    query CartViewRefetchQuery {
      viewer {
        id,
        isAuthenticated,
        ...CartView_viewer
      }
    }
  `
)