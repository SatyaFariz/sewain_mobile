const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')
//const { SubscriptionClient } = require('subscriptions-transport-ws')

export default function createRelay() {
  function fetchQuery(
    operation,
    variables,
    cacheConfig,
    uploadables,
  ) {
    
    const method = 'POST'
    const credentials = 'same-origin'
    let request

    if(uploadables) {
      if(!window.FormData) throw new Error('Uploading files without `FormData` not supported.')

      const formData = new FormData()
      formData.append('query', operation.text)
      formData.append('variables', JSON.stringify(variables))

      for(const uploadable in uploadables) {
        if(Object.prototype.hasOwnProperty.call(uploadables, uploadable))
          formData.append(uploadable, uploadables[uploadable])
      }

      request = {
        method: method,
        credentials: credentials,
        body: formData
      }

    } else {
      request = {
        method: method,
        credentials: credentials,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          query: operation.text,
          variables
        })
      }
    }

    const url = 'https://sewain.iot.my.id/graphql.php'
  //  const url = 'https://sewain-prod.herokuapp.com/graphql.php'
  //  const url = 'http://192.168.1.116/graphql.php'
    return fetch(url, request).then(response => {
      return response.json()
    })
    
  }
/*
  function setupSubscription(
    config,
    variables,
    cacheConfig,
    observer
  ) {
    const subscriptionsEndpoint = 'ws://localhost:4000/subscriptions'
    const query = config.text
    const { onNext, onError, onCompleted } = observer
    const subscriptionClient = new SubscriptionClient(subscriptionsEndpoint, { reconnect: true })
    subscriptionClient.request({ query, variables }).subscribe(onNext, onError, onCompleted)
  }
*/
  const source = new RecordSource(window.records)
  const store = new Store(source)
  const network = Network.create(fetchQuery/*, setupSubscription*/) // see note below
  const handlerProvider = null

  const environment = new Environment({
    handlerProvider, // Can omit.
    network,
    store,
  })

  return environment
}