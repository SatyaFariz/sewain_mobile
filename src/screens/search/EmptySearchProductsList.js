import React, { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { graphql, createPaginationContainer } from 'react-relay'

import InfiniteScrollListFooter from '../../common/InfiniteScrollListFooter'
import ResultItem from './ResultItem'

const Component = props => {
  const { edges } = props.viewer.products

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

  return (
    <View style={s.container}>
      <FlatList
        keyboardShouldPersistTaps="always"
        contentContainerStyle={s.contentContainer}
        data={edges}
        keyExtractor={item => item.node.id}
        renderItem={({item}) => (
          <ResultItem product={item.node}/>
        )}
        ItemSeparatorComponent={() => <View style={s.separator}/>}
        ListHeaderComponent={null}
        onEndReachedThreshold={0.3}
        onEndReached={onEndReached}
        ListFooterComponent={
          <InfiniteScrollListFooter
            error={error}
            retry={onRetry}
            isLoading={props.relay.isLoading()}
            hasMore={props.relay.hasMore()}
          />
        }
      />
    </View>
  )
}

const s = StyleSheet.create({
  text: {
    marginBottom: 20
  },
  contentContainer: {
    padding: 20
  },
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  separator: {
    height: 10
  }
})

//export default Component

export default createPaginationContainer(Component, {
  viewer: graphql`
    fragment EmptySearchProductsList_viewer on Viewer @argumentDefinitions(
      first: { type: "Int", defaultValue: 20 },
      after: { type: "String", defaultValue: null }
    ) {
      products(
        first: $first,
        after: $after
      ) @connection(key: "EmptySearchProductsList_products", filters: []){
        edges {
          cursor,
          node {
            id,
            productID,
            ...ResultItem_product
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
    return viewer && viewer.products
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
    query EmptySearchProductsListPaginationQuery($first: Int, $after: String) {
      viewer {        
        ...EmptySearchProductsList_viewer @arguments(first: $first, after: $after)        
      }
    }
  `
})