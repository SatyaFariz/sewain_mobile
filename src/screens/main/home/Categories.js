import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { graphql, createFragmentContainer } from 'react-relay'

import CategoryItem from './CategoryItem'
/*
const categories = [
  {
    name: 'Fotografi',
    color: '#90A4AE'
  },
  {
    name: 'Outdoor',
    color: '#5C6BC0'
  },
  {
    name: 'Event',
    color: '#B39DDB'
  },
  {
    name: 'Kantor',
    color: '#C8E6C9'
  },
  {
    name: 'Rumah',
    color: '#7986CB'
  },
  {
    name: 'Konstruksi',
    color: '#00BFA5'
  }
]*/


const Component = props => {
  const { categories } = props
  return (
    <FlatList
      style={s.list}
      horizontal
      contentContainerStyle={s.container}
      data={categories}
      ItemSeparatorComponent={() => <View style={s.separator}/>}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.name}
      renderItem={({item}) => (
        <CategoryItem 
          name={item.name} 
          color={item.backgroundColor}
          icon={item.icon}
          categoryID={item.categoryID}
        />
      )}
    />
  )
}

const s = StyleSheet.create({
  list: {
    alignSelf: 'flex-start'
  },
  separator: {
    width: 15
  },
  container: {
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
})

export default createFragmentContainer(Component, {
  categories: graphql`
    fragment Categories_categories on Category @relay(plural: true) {
      id,
      categoryID,
      name,
      backgroundColor,
      icon
    }
  `
})