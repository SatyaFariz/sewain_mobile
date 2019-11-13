import React, { useState } from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import ViewPager from "@react-native-community/viewpager"
import { graphql, createFragmentContainer } from 'react-relay'

const { width } = Dimensions.get('window')

const Component = props => {

  const { images } = props

  const [page, setPage] = useState(0)

  const _handlePageSelected = (e) => {
    const { position } = e.nativeEvent
    setPage(position)
  }

  return (
    <View>
      <ViewPager
        style={s.viewPager}
        initialPage={page}
        onPageSelected={_handlePageSelected}
      >
        
        {images.map(item => (
          <View key={item.id}>
            <Image
              style={s.image}
              source={{ uri: item.secureUrl }}
            />
          </View>
        ))}
      </ViewPager>
      
      {images.length > 1 &&
      <View style={s.bullets} pointerEvents="none">
        <View style={s.bulletsContainer}>
          {images.map((item, i) => (
            <View key={i} style={[s.bullet, { backgroundColor: i === page ? '#0288D1' : 'white' }]}/>
          ))}
        </View>
      </View>
      }
    </View>
  )
}

const bulletDiameter = 8

const s = StyleSheet.create({
  viewPager: {
    flex: 1,
    height: width
  },
  image: {
    width: '100%',
    height: '100%'
  },

  bullets: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },

  bulletsContainer: {
    display: 'flex',
    padding: 10,
    flexDirection: 'row'
  },

  bullet: {
    height: bulletDiameter,
    width: bulletDiameter,
    borderRadius: (bulletDiameter / 2),
    margin: 2
  } 
})

export default createFragmentContainer(Component, {
  images: graphql`
    fragment Images_images on Image @relay(plural: true) {
      id,
      secureUrl
    }
  `
})