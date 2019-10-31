import React, { useContext } from 'react'
import { FlatList, StyleSheet, View, TouchableNativeFeedback } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import { graphql, createFragmentContainer } from 'react-relay'
import truncate from 'ellipsize'
import useNavigator from '../../../hooks/useNavigator'

const Component = props => {
  const {
    productID,
    name,
    displayImage,
    rentalPricePerDayText,
    promotionalPriceText
  } = props.product
  
  const { navigate } = useNavigator()

  const toProductDetail = () => {
    navigate('productDetail', { productID })
  }

  return (
    <View style={s.container}>
      <TouchableNativeFeedback onPress={toProductDetail}>
        <Card style={s.card}>        
          <Card.Cover source={{ uri: displayImage && displayImage.secureUrl }} />
          <View style={s.info}>
            <Title style={s.title}>{truncate(name.trim(), 30)}</Title>
            
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
    flex: 1
  },
  title: {
    fontSize: 15,
    lineHeight: 15
  },
  info: {
    padding: 10
  },
  text: {
    fontSize: 14,
    lineHeight: 17
  },
  redText: {
    textDecorationLine: 'line-through',
    marginRight: 15,
    color: '#B00020',
    opacity: 0.6
  }
})

export default createFragmentContainer(Component, {
  product: graphql`
    fragment FeaturedProductItem_product on Product {
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