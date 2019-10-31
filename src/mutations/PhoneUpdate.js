import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation PhoneUpdateMutation($phone: String!) {
    phoneUpdate(phone: $phone) {
      id,
      phone
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
          const payload = res.phoneUpdate
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
