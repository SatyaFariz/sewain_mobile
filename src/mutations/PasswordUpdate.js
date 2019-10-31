import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation PasswordUpdateMutation($oldPassword: String!, $newPassword: String!) {
    passwordUpdate(oldPassword: $oldPassword, newPassword: $newPassword) {
      success,
      message
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
          const payload = res.passwordUpdate
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
