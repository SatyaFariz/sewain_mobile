import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
import { graphql, QueryRenderer } from 'react-relay'

import AppBar from './AppBar'
import useEnvironment from '../../hooks/useEnvironment'
import LoadingView from '../../common/LoadingView'
import ErrorView from '../../common/ErrorView'

const query = graphql`
  query PrivacyPolicyScreenQuery {
    viewer {
      id,
      privacyPolicy
    }
  }
`

const Component = _props => {
  const { environment } = useEnvironment()
  return (
    <View style={s.container}>
      <AppBar/>
      <QueryRenderer
        variables={{}}
        query={query}
        environment={environment}
        render={({ error, props, retry }) => {
          if(error)
            return <ErrorView retry={retry}/>
          else if(props) {
            return (
              <WebView 
                style={s.container}
                source={{ html: props.viewer.privacyPolicy }}
              />
            )
          }

          return <LoadingView/>
        }}
      />
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Component