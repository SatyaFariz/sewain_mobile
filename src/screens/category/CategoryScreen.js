import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AppBar from './AppBar'

import CategoryProductsListQuery from './CategoryProductsListQuery'
import CategorySearchResultsListQuery from './CategorySearchResultsListQuery'

const Component = props => {

  const [query, setQuery] = useState('')
  const [searchText, setSearchText] = useState(query)

  const resetQuery = () => {
    setSearchText('')
    setQuery('')
  }

  const handleSearch = () => setSearchText(query)

  const searchTextTrimmed = searchText.trim()

  return (
    <View style={s.container}>
      <AppBar
        query={query}
        setSearchText={setSearchText}
        handleQueryChange={setQuery}
        resetQuery={resetQuery}
        handleSubmit={handleSearch}
        name={props.name}
      />
      <View style={s.container} collapsable={false}>
        {searchTextTrimmed === '' ?
        <CategoryProductsListQuery categoryID={props.categoryID}/>
        :
        <CategorySearchResultsListQuery categoryID={props.categoryID} q={searchTextTrimmed}/>
        }
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Component