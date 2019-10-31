import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import AppBar from './AppBar'

import ResultsListQuery from './ResultsListQuery'
import EmptySearchProductsListQuery from './EmptySearchProductsListQuery'

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
      />
      <View style={s.container} collapsable={false}>
        {searchTextTrimmed === '' ?
        <EmptySearchProductsListQuery/>
        :
        <ResultsListQuery q={searchTextTrimmed}/>
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