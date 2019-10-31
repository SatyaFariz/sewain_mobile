import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation MarkReadNotificationsMutation {
    markReadNotifications {
      id,
      unreadNotificationsCount
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
        if(typeof callback === 'function') {
          if(err)
            callback(null, err)
          else {
            const payload = res.markReadNotifications
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}
