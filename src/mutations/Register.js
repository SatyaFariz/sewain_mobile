import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation RegisterMutation($input: RegisterInput!) {
    register(input: $input) {
      actionInfo {
        success,
        message
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
          const payload = res.register
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
