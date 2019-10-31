import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation AddressUpdateMutation($address: String!) {
    addressUpdate(address: $address) {
      id,
      address
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
          const payload = res.addressUpdate
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
