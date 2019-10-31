import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation SendResetPasswordCodeMutation($email: Email!) {
    sendResetPasswordCode(email: $email) {
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
          const payload = res.sendResetPasswordCode
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
