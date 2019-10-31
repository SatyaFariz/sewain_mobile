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
