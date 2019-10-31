import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation NameUpdateMutation($name: String!) {
    nameUpdate(name: $name) {
      id,
      name
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
          const payload = res.nameUpdate
          callback(payload, null)
        }
      },
      onError: err => console.log(err),
    }
  )
}
