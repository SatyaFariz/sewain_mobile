import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation UsernameUpdateMutation($username: Username!) {
    usernameUpdate(username: $username) {
      actionInfo {
        success,
        message
      },
      userData {
        id,
        username
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
          const payload = res.usernameUpdate
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
