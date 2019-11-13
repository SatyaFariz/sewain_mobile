import React from 'react'
import { ToastAndroid, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { graphql, createFragmentContainer } from 'react-relay'
import useNavigator from '../../hooks/useNavigator'

const Component = props => {
  const { viewer, product } = props
  const { navigate } = useNavigator()

  const handlePress = () => {
    const duration = ToastAndroid.LONG
    if(!viewer.isAuthenticated) {
      ToastAndroid.show('Silahkan masuk terlebih dahulu.', duration)
    } else {
      const { productID, availableItems } = product
      const { address } = viewer.userData
      navigate('rentForm', { productID, availableItems, address })
    }
  }

  return (
    <Button
      style={s.button}
      onPress={handlePress}
      mode="contained"
    >
      Tambahkan ke keranjang
    </Button>
  )
}

const s = StyleSheet.create({
  button: {
    padding: 7,
    borderRadius: 0
  },
})

export default createFragmentContainer(Component, {
  product: graphql`
    fragment AddToCartButton_product on Product {
      id,
      productID,
      availableItems
    }
  `,
  viewer: graphql`
    fragment AddToCartButton_viewer on Viewer {
      id,
      isAuthenticated,
      userData {
        id,
        address
      }
    }
  `
})