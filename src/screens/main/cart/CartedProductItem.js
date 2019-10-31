import React from 'react'
import { View, StyleSheet, Image, Alert } from 'react-native'
import { Text, Card, IconButton } from 'react-native-paper'
import { graphql, createFragmentContainer } from 'react-relay'
import truncate from 'ellipsize'
import RemoveProduct from '../../../mutations/RemoveProductFromCart'

const Component = props => {
  const { 
    cartedProductID,
    name,
    rentalDatesText,
    quantity,
    totalDays,
    totalPriceText,
    displayImage,
  } = props.product

  const _deleteItem = () => {
    const { environment } = props.relay
    RemoveProduct(environment, { cartedProductID })
  }

  const _delete = () => {
    Alert.alert(
      'Konfirmasi',
      'Anda yakin ingin membatalkan pemesanan ?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK', onPress: _deleteItem
        },
      ],
      { cancelable: false },
    )
  }

  return (
    <Card style={s.card}>
      <View style={s.container}>
        <View style={s.imageContainer}>
          <Image source={{ uri: displayImage && displayImage.secureUrl }} style={s.image}/>
        </View>
        <View style={s.textsContainer}>
          <Text>{truncate(name.trim(), 30)}</Text>
          <Text style={s.secondaryText}>{truncate(rentalDatesText.trim(), 30)}</Text>
          <Text style={s.secondaryText}>{`${quantity} item • ${totalDays} hari`}</Text>
          <View style={s.row}>
            <Text style={s.secondaryText}>{`Total: ${totalPriceText}`}</Text>
            <View style={s.buttonContainer}>
              <IconButton
                icon="delete"
                color="grey"
                size={20}
                onPress={_delete}
              />
            </View>
          </View>
        </View>
      </View>
    </Card>
  )
}

const s = StyleSheet.create({
  card: {
    borderRadius: 2,
    overflow: 'hidden',
    width: '100%'
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
  row: {
    flexDirection: 'row'
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1
  }
})

export default createFragmentContainer(Component, {
  product: graphql`
    fragment CartedProductItem_product on CartedProduct {
      id,
      cartedProductID,
      name,
      quantity,
      totalDays,
      totalPriceText,
      rentalDatesText,
      displayImage {
        id,
        secureUrl
      }
    }
  `
})