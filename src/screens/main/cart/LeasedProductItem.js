import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text, Card, IconButton } from 'react-native-paper'
import { graphql, createFragmentContainer } from 'react-relay'
import truncate from 'ellipsize'

const Component = props => {
  const { 
    name,
    rentalDatesText,
    quantity,
    totalDays,
    returnDate,
    isDueToday,
    totalDaysOverdue,
    displayImage 
  } = props.product

  const renderNoticeText = () => {
    if(isDueToday)
      return <Text style={s.greenText}>Pengembalian hari ini.</Text>
    else if(totalDaysOverdue > 0)
      return <Text style={s.redText}>Pengembalian telat {totalDaysOverdue} hari.</Text>

    return null
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
          <Text style={s.secondaryText}>{truncate(`Tgl Kembali: ${returnDate}`, 30)}</Text>
          {renderNoticeText()}
        </View>
      </View>
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
    opacity: 0.6
  },
  greenText: {
    color: '#2e7b32'
  }
})

export default createFragmentContainer(Component, {
  product: graphql`
    fragment LeasedProductItem_product on LeasedProduct {
      id,
      name,
      quantity,
      totalDays,
      rentalDatesText,
      isDueToday,
      totalDaysOverdue,
      returnDate,
      displayImage {
        id,
        secureUrl
      }
    }
  `
})