import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { graphql, createRefetchContainer } from 'react-relay'
import RefreshControl from '../../../common/RefreshControl'
import HomeView from './HomeView'

const Component = props => {
  const [refreshing, setRefreshing] = useState(false)

  refresh = () => {
    props.relay.refetch({}, {}, () => {
      setRefreshing(false)
    }, { force: true })
    setRefreshing(true)
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={refresh}
        />
      }
    >
      <HomeView viewer={props.viewer}/>
    </ScrollView>
  )
}

export default createRefetchContainer(Component,
  {
    viewer: graphql`
      fragment HomeRefreshableView_viewer on Viewer {
        ...HomeView_viewer
      }
    `
  },
  graphql`
    query HomeRefreshableViewQuery {
      viewer {
        id,
        isAuthenticated,
        ...HomeRefreshableView_viewer
      }
    }
  `
)