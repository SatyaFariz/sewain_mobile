import React from 'react'
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, StatusBar } from 'react-native'
import { Appbar, withTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { NavigationContext } from 'navigation-react'
import { debounce } from "throttle-debounce"

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.searchDebounced = debounce(500, props.setSearchText);
  }

  static contextType = NavigationContext

  _goBack = () => {
    const { stateNavigator } = this.context
    stateNavigator.navigateBack(1)
  }

  handleTextChanged = text => {
    this.props.handleQueryChange(text)
    this.searchDebounced(text)
  }

  render() {
    const { colors } = this.props.theme
    const containerStyle = [s.rootContainer, { backgroundColor: colors.primary }]
    return (
      <View style={containerStyle}>
        <View style={[s.statusbar, { backgroundColor: colors.statusbar }]}/>
        <Appbar.Header style={containerStyle}>
          <Appbar.BackAction
            onPress={this._goBack}
          />
          <View style={s.container}>
            <View style={s.innerContainer}>
              <TextInput
                placeholder={`Search ${this.props.name}...`}
                autoFocus
                onChangeText={this.handleTextChanged}
                style={s.textInput}
                value={this.props.query}
                onSubmitEditing={this.props.handleSubmit}
              />

              <TouchableWithoutFeedback onPress={this.props.resetQuery}>
                <View style={s.icon}>
                  <Icon name="close" size={18}/>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </Appbar.Header>
      </View>
    )
  }
}

const s = StyleSheet.create({
  rootContainer: {
    elevation: 6
  },
  container: {
    flex: 1,
    marginRight: 8,
  },
  innerContainer: {
    height: 36,
    backgroundColor: '#f1f1f1',
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    paddingVertical: 0,
    height: '100%',
    paddingLeft: 6,
    paddingRight: 6,
    flex: 1
  },
  icon: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 4,
    paddingRight: 4
  },
  statusbar: {
    height: StatusBar.currentHeight
  }
})

export default withTheme(Component)