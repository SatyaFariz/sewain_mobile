import React, { useContext } from 'react'
import { StyleSheet, View, TouchableNativeFeedback, Image } from 'react-native'
import { Card, Text } from 'react-native-paper'
import { graphql, createFragmentContainer } from 'react-relay'
import truncate from 'ellipsize'
import useNavigator from '../../hooks/useNavigator'

const Component = props => {
  const {
    productID,
    name,
    rentalPricePerDayText,
    promotionalPriceText,
    displayImage
  } = props.product

  const { navigate } = useNavigator()

  const toProductDetail = () => {
    const params = {
      productID,
      name,
      image: displayImage.secureUrl
    }
    
    navigate('productDetail', params)
  }

  return (
    <Card style={s.card}>
      <TouchableNativeFeedback onPress={toProductDetail}>
        <View style={s.container}>
          <View style={s.imageContainer}>
            <Image source={{ uri: displayImage && displayImage.secureUrl }} style={s.image}/>
          </View>
          <View style={s.textsContainer}>
            <Text>{truncate(name.trim(), 80)}</Text>

            <Text style={promotionalPriceText ? s.redText : s.secondaryText}>
              {rentalPricePerDayText}/hari
            </Text>

            {promotionalPriceText &&
            <Text style={s.secondaryText}>{promotionalPriceText}/hari</Text>
            }
            
          </View>
        </View>
      </TouchableNativeFeedback>
    </Card>
  )
}

const s = StyleSheet.create({
  card: {
    borderRadius: 2,
    width: '100%',
    overflow: 'hidden'
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flexDirection: 'row'
  },
  textsContainer: {
    flex: 1,
    padding: 10
  },
  image: {
    aspectRatio: 1,
    width: 120
  },
  secondaryText: {
    opacity: 0.6
  },
  redText: {
    color: '#B00020',
    opacity: 0.6,
    textDecorationLine: 'line-through',
  }
})

export default createFragmentContainer(Component, {
  product: graphql`
    fragment ResultItem_product on Product {
      id,
      productID,
      name,
      rentalPricePerDayText,
      promotionalPriceText,
      displayImage {
        id,
        secureUrl
      }
    }
  `
})