import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation AddProductToCartMutation($input: AddProductToCartInput!) {
    addProductToCart(input: $input) {
      actionInfo {
        success,
        message
      },
      product {
        id,
        availableItems
      },
      cartItem {
        id,
        cartedProductID,
        name,
        quantity,
        totalDays,
        totalPriceText,
        rentalDatesText,
        displayImage {
          id,
          secureUrl
        }
      }
    }
  }
`

export default (environment, variables, callback) => {
  commitMutation(
    environment,
    {
      mutation,
      variables,
      updater: store => {
        const payload = store.getRootField('addProductToCart', variables)
        if(payload) {
          const newCartItem = payload.getLinkedRecord('cartItem')
          if(newCartItem !== null) {
            const viewer = store.getRoot().getLinkedRecord('viewer')
            const cart = viewer && viewer.getLinkedRecords('cart')

            if(cart) {
              cart.unshift(newCartItem)
              viewer.setLinkedRecords(cart, 'cart')
            }
          }
        }
      },
      onCompleted: (res, err) => {
        if(err)
          callback(null, err)
        else {
          const payload = res.addProductToCart
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
