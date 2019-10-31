import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Headline, Text } from 'react-native-paper'
import { graphql, createFragmentContainer } from 'react-relay'

const Component = props => {
  const {
    rentalPricePerDayText,
    promotionalPriceText,
    estimatedBuyPriceText
  } = props.product

  return (
    <View style={s.container}>

      <Headline style={promotionalPriceText ? [s.headline, s.redText] : s.headline}>
        {rentalPricePerDayText}/hari
      </Headline>

      {promotionalPriceText &&
      <Headline style={s.headline}>
        {promotionalPriceText}/hari
      </Headline>
      }

      {estimatedBuyPriceText &&
      <Text
        theme={{ colors: 'disabled' }}
      >
        Perkiraan harga beli: {estimatedBuyPriceText}
      </Text>
      }
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    padding: 20
  },
  headline: {
    marginBottom: 5
  },
  redText: {
    textDecorationLine: 'line-through',
    color: '#B00020',
    opacity: 0.6
  }
})

export default createFragmentContainer(Component, {
  product: graphql`
    fragment Price_product on Product {
      id,
      rentalPricePerDayText,
      promotionalPriceText,
      estimatedBuyPriceText
    }
  `
})