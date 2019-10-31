import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation RemoveProductFromCartMutation($cartedProductID: Int!) {
    removeProductFromCart(cartedProductID: $cartedProductID) {
      actionInfo {
        success,
        message
      },
      deletedID
    }
  }
`

function update(store, deletedID) {
  const viewer = store.get('viewer')
  const cart = viewer && viewer.getLinkedRecords('cart')
  if(cart) {
    const newCart = cart.filter(photo => photo && photo.getValue('cartedProductID') !== deletedID)
    viewer.setLinkedRecords(newCart, 'cart')
  }
}

export default (environment, variables, callback) => {
  commitMutation(
    environment,
    {
      mutation,
      variables,
      updater: (store) => {
        const payload = store.getRootField('removeProductFromCart', variables)
        const deletedID = payload.getValue('deletedID')
        update(store, deletedID)
      },

      optimisticUpdater: store => {
        update(store, variables.cartedProductID)
      },
      onCompleted: (res, err) => {
        if(typeof callback === 'function') {
          if(err)
            callback(null, err)
          else {
            const payload = res.removeProductFromCart
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}
