import React, { useRef } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Animated from 'react-native-reanimated'
import { onScroll } from 'react-native-redash'
import ProductDetailViewQuery from './ProductDetailViewQuery'
import AppBar from './AppBar'

const { Value, interpolate } = Animated

const { width } = Dimensions.get('window')

const Component = props => {
  const scrollY = useRef(new Value(0))

  const _onScroll = onScroll({ y: scrollY.current })

  const appbarOpacity = interpolate(scrollY.current, {
    inputRange: [0, width],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  })

  return (
    <View collapsable={false} style={s.container}>
      <ProductDetailViewQuery 
        {...props}
        onScroll={_onScroll}
      />
      <AppBar
        opacity={appbarOpacity}
        title={props.name}
      />
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Component