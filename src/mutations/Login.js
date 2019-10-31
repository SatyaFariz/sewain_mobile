import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation LoginMutation($as: UserTypeEnum!, $usernameOrEmail: String!, $password: String!) {
    login(as: $as, usernameOrEmail: $usernameOrEmail, password: $password) {
      actionInfo {
        success,
        message
      }
    }
  }
`

export default (environment, variables, callback) => {
  variables.as = 'REGULAR_USER'
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (res, err) => {
        if(err)
          callback(null, err)
        else {
          const payload = res.login
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
