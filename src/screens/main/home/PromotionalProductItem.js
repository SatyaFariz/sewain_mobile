import React, { useContext } from 'react'
import { StyleSheet, View, TouchableNativeFeedback, Image } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import { graphql, createFragmentContainer } from 'react-relay'
import truncate from 'ellipsize'
import useNavigator from '../../../hooks/useNavigator'

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

  const nameTrimmed = name.trim()

  return (
    <View style={s.container}>
      <TouchableNativeFeedback onPress={toProductDetail}>
        <Card style={s.card}>
          <Image 
            source={{ uri: displayImage && displayImage.secureUrl }} 
            style={s.image}
          />
          <View style={s.info}>
            <Title style={s.title}>{nameTrimmed.length > 25 ? truncate(nameTrimmed, 25) : nameTrimmed}</Title>
            
            <Paragraph style={promotionalPriceText ? [s.text, s.redText] : s.text}>
              {rentalPricePerDayText}/hari
            </Paragraph>

            {promotionalPriceText &&
            <Paragraph style={s.text}>{promotionalPriceText}/hari</Paragraph>
            }
          
          </View>
        </Card>
      </TouchableNativeFeedback>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
    marginBottom: 2
  },
  card: {
    flex: 1,
    overflow: 'hidden'
  },
  title: {
    fontSize: 13,
    lineHeight: 13
  },
  info: {
    padding: 10
  },
  text: {
    fontSize: 13,
    lineHeight: 15
  },
  redText: {
    textDecorationLine: 'line-through',
    marginRight: 15,
    color: '#B00020',
    opacity: 0.6
  },
  image: {
    width: '100%',
    aspectRatio: 1
  }
})

export default createFragmentContainer(Component, {
  product: graphql`
    fragment PromotionalProductItem_product on Product {
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