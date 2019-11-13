import React, { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Text } from 'react-native-paper'
import { graphql, createPaginationContainer } from 'react-relay'

import InfiniteScrollListFooter from '../../common/InfiniteScrollListFooter'
import NoContentView from '../../common/NoContentView'
import ResultItem from './ResultItem'

const Component = props => {

  const { edges } = props.viewer.search

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
    return <NoContentView text="Tidak ditemukan"/>

  return (
    <View style={s.container}>
      <FlatList
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={s.contentContainer}
        data={edges}
        keyExtractor={item => item.node.id}
        renderItem={({item}) => (
          <ResultItem product={item.node}/>
        )}
        ItemSeparatorComponent={() => <View style={s.separator}/>}
        ListHeaderComponent={() => (
          <View style={s.text}>
            <Text>{`Hasil dari "${props.q}"`}</Text>
          </View>
        )}
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
    fragment ResultsList_viewer on Viewer @argumentDefinitions(
      first: { type: "Int", defaultValue: 20 },
      after: { type: "String", defaultValue: null },
      q: { type: "String!" }
    ) {
      search(
        first: $first,
        after: $after,
        q: $q
      ) @connection(key: "ResultsList_search", filters: []){
        edges {
          cursor,
          node {
            id,
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
    return viewer && viewer.search
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
    query ResultsListPaginationQuery($first: Int, $after: String, $q: String!) {
      viewer {        
        ...ResultsList_viewer @arguments(first: $first, after: $after, q: $q)        
      }
    }
  `
})