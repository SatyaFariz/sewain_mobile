import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation LogoutMutation {
    logout {
      success,
      message
    }
  }
`

export default (environment, callback) => {
  const variables = {}
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (res, err) => {
        if(err)
          callback(null, err)
        else {
          const payload = res.logout
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
