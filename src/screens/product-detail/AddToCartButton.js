import React from 'react'
import { ToastAndroid } from 'react-native'
import { Appbar } from 'react-native-paper'
import { graphql, QueryRenderer } from 'react-relay'
import useEnvironment from '../../hooks/useEnvironment'
import useNavigator from '../../hooks/useNavigator'

const query = graphql`
  query AddToCartButtonQuery($productID: Int!) {
    viewer {
      id,
      isAuthenticated,
      userData {
        id,
        address
      },
      product(productID: $productID) {
        id,
        productID,
        availableItems
      }
    }
  }
`

const Component = _props => {
  const { navigate } = useNavigator()
  const { environment } = useEnvironment()

  const handlePress = (product, viewer) => {
    const duration = ToastAndroid.LONG
    if(!viewer.isAuthenticated) {
      ToastAndroid.show('Silahkan masuk terlebih dahulu.', duration)
    } else if(product.availableItems < 1) {
      ToastAndroid.show('Produk ini sedang tidak tersedia.', duration)
    } else {
      const { productID, availableItems } = product
      const { address } = viewer.userData
      navigate('rentForm', { productID, availableItems, address })
    }
  }

  return (
    <QueryRenderer
      variables={{ productID: _props.productID }}
      query={query}
      environment={environment}
      render={({ error, props, retry }) => {
        if(error) {
          retry()
          return <Appbar.Action icon="add-shopping-cart" onPress={() => {}} color="white"/>
        } else if(props) {
          const { product } = props.viewer
          if(product) {
            return (
              <Appbar.Action 
                icon="add-shopping-cart" 
                onPress={() => handlePress(product, props.viewer)} 
                color="white"
              />
            )
          }

          return <Appbar.Action icon="add-shopping-cart" onPress={() => {}} color="white"/>
        }

        return <Appbar.Action icon="add-shopping-cart" onPress={() => {}} color="white"/>
      }}
    />
  )
}

export default Component