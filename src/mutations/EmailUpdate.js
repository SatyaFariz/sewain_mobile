import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation EmailUpdateMutation($email: Email!) {
    emailUpdate(email: $email) {
      actionInfo {
        success,
        message
      },
      userData {
        id,
        email
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
          const payload = res.emailUpdate
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
