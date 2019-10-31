import React from 'react'
import { ScrollView, View, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { Text } from 'react-native-paper'

const Component = props => {
  return (
    <View style={[s.container, { elevation: props.elevation }]}>
      <ScrollView style={s.scrollView}>
        {props.suggestions.map((item, i) => (
          <TouchableNativeFeedback 
            onPress={() => props.handleSearch(item)} 
            key={i}
          >
            <View style={s.textContainer}>
              <Text>{item}</Text>
            </View>
          </TouchableNativeFeedback>
        ))}
      </ScrollView>
    </View>
  )
}

const s = StyleSheet.create({
  scrollView: {
    flex: 1
  },

  textContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15
  },

  container: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
})

export default Component