import React, { useState, useEffect } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { IconButton, Text, withTheme } from 'react-native-paper'
import useNavigator from '../../hooks/useNavigator'
import Animated from 'react-native-reanimated'
import ellipsize from 'ellipsize'

const Component = props => {
  const { colors } = props.theme
  // don't set backgroundColor to transparent directly because it will somehow make the button ripple not work
  const [toolbarBackgroundColor, setToolbarBackgroundColor] = useState(colors.primary)
  const { opacity, title } = props
  const { goBack } = useNavigator()
  

  useEffect(() => setToolbarBackgroundColor('transparent'), [])

  const toolbarStyle = {
    backgroundColor: colors.primary,
    opacity
  }

  return (
    <View style={s.absolute}>
      <Animated.View style={[s.absolute, s.elevated, toolbarStyle]}>
        <View style={[s.statusbar, { backgroundColor: colors.statusbar }]}/>
        <View style={s.header}/>
      </Animated.View>

      <View style={s.elevated}>
        <View style={[s.statusbar, { backgroundColor: 'transparent'}]}/>
        <View style={[s.header, s.toolbar, { backgroundColor: toolbarBackgroundColor }]}>
          <IconButton
            icon="arrow-back"
            onPress={goBack}
            color="white"
          />
          <Animated.View style={[s.titleContainer, { opacity }]}>
            <Text style={[s.title]}>{ellipsize(title, 23)}</Text>
          </Animated.View>
        </View>
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  elevated: {
    elevation: 2
  },
  absolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0
  },
  statusbar: {
    height: StatusBar.currentHeight
  },
  header: {
    height: 56,
    paddingLeft: 4,
    paddingRight: 4,
    justifyContent: 'center'
  },
  titleContainer: {
    paddingHorizontal: 12
  },
  title: {
    fontSize: 20,
    color: 'white',
    opacity: 1
  },
  toolbar: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  }
})

export default withTheme(Component)