import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Title, Paragraph } from 'react-native-paper'
import { graphql, createFragmentContainer } from 'react-relay'

const Component = props => {
  return (
    <View style={s.container}>
      <Title>Deskripsi Barang</Title>
      <Paragraph>
        {props.product.description} 
      </Paragraph>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  }
})

export default createFragmentContainer(Component, {
  product: graphql`
    fragment Description_product on Product {
      id,
      description
    }
  `
})