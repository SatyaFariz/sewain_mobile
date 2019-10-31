import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation ResetPasswordMutation($email: Email!, $code: String!, $newPassword: String!) {
    resetPassword(email: $email, code: $code, newPassword: $newPassword) {
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
          const payload = res.resetPassword
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
