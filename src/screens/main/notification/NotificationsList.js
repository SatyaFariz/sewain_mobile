import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { graphql, createPaginationContainer } from 'react-relay'

import InfiniteScrollListFooter from '../../../common/InfiniteScrollListFooter'
import NoContentView from '../../../common/NoContentView'
import NotificationItem from './NotificationItem'

const Component = props => {
  const { edges } = props.viewer.notifications

  const [error, setError] = useState(false)

  loadMore = () => {
    const { relay } = props
    if(!relay.hasMore())
      return
    else if(relay.isLoading())
      return
    
    relay.loadMore(null, err => {
      if(err)
        setError(true)
    })

    setError(false)
  }

  onEndReached = () => !error && loadMore()

  onRetry = () => error && loadMore()

  if(edges.length === 0)
    return <NoContentView text="Tidak ada notifikasi"/>

  return (
    <FlatList
      data={edges}
      keyExtractor={item => item.node.id}
      renderItem={({item}) => (
        <NotificationItem notification={item.node}/>
      )}
      ItemSeparatorComponent={() => <View style={s.separator}/>}
      onEndReachedThreshold={0.3}
      onEndReached={onEndReached}
      ListFooterComponent={
        <InfiniteScrollListFooter
          error={error}
          retry={onRetry}
          isLoading={props.relay.isLoading()}
          hasMore={props.relay.hasMore()}
          containerStyle={s.footerContainer}
        />
      }
    />
  )
}

const s = StyleSheet.create({
  contentContainer: {
    flex: 1
  },
  footerContainer: {
    paddingBottom: 15
  }
})

export default createPaginationContainer(Component, {
  viewer: graphql`
    fragment NotificationsList_viewer on Viewer @argumentDefinitions(
      first: { type: "Int", defaultValue: 12 },
      after: { type: "String", defaultValue: null }
    ) {
      notifications(
        first: $first,
        after: $after
      ) @connection(key: "NotificationsList_notifications", filters: []){
        edges {
          cursor,
          node {
            id,
            ...NotificationItem_notification
          }
        },
        pageInfo {
          hasNextPage,
          endCursor
        }
      }
    }
  `
}, {
  direction: 'forward',
  getConnectionFromProps(props) {
    const { viewer } = props
    return viewer && viewer.notifications
  },
  getFragmentVariables(prevVars, totalCount) {
    return {
      ...prevVars,
      count: totalCount
    }
  },
  getVariables(props, { count, cursor }, fragmentVariables) {
    return {
      ...fragmentVariables,
      after: cursor
    }
  },
  query: graphql`
    query NotificationsListPaginationQuery($first: Int, $after: String) {
      viewer {        
        ...NotificationsList_viewer @arguments(first: $first, after: $after)        
      }
    }
  `
})