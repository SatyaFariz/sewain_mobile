import React from 'react'
import { View, StyleSheet } from 'react-native'
import { QueryRenderer, graphql } from 'react-relay'
import MainBottomNavigation from './MainBottomNavigation'
import useEnvironment from '../../hooks/useEnvironment'
import SplashView from './SplashView'
import ErrorView from '../../common/ErrorView'

const query = graphql`
  query MainScreenQuery {
    viewer {
      id,
      ...MainBottomNavigation_viewer
    }
  }
`

const Component = props => {
  const { environment } = useEnvironment()
  return (
    <QueryRenderer
      query={query}
      variables={{}}
      environment={environment}
      render={({ error, props, retry }) => {
        if(error) {
          return <ErrorView retry={retry}/>
        } else if(props) {
          return <MainBottomNavigation viewer={props.viewer}/>
        }

        return <SplashView/>
      }}
    />
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Component