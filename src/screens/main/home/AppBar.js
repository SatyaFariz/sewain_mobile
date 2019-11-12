import React, { useContext } from 'react'
import { StyleSheet, Linking, View, ToastAndroid, Image, StatusBar } from 'react-native'
import { Appbar, IconButton, withTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import BottomNavigationContext from '../BottomNavigationContext'
import useNavigator from '../../../hooks/useNavigator'
import useEnvironment from '../../../hooks/useEnvironment'
import Logo from '../../../assets/logo_light.svg'

const Component = props => {
  const { colors } = props.theme
  const { navigate } = useNavigator()
  const { environment } = useEnvironment()
  const { viewer } = useContext(BottomNavigationContext)

  const _onSearch = () => navigate('search')

  const _openWhatsapp = () => {
    if(viewer && viewer.officialWhatsApp) {
      const url = viewer.officialWhatsApp
      Linking.canOpenURL(url).then(supported => {
        if(!supported) {
          ToastAndroid.show('Tidak dapat membuka WhatsApp.'. ToastAndroid.LONG)
        } else {
          Linking.openURL(url)
        }
      })
    }
  }

  const style = [s.container, { backgroundColor: colors.primary }]

  return (
    <View style={style}>
      <View style={[s.statusbar, { backgroundColor: colors.statusbar }]}/>
      <Appbar.Header style={style}>
        <View
          style={s.logoContainer}
        >
          <Logo width={100}/>
        </View>
        <Appbar.Action icon="search" onPress={_onSearch} color="white"/>
        <Appbar.Action 
          icon={({ size, color }) => (
            <Icon
              name="logo-whatsapp"
              size={size}
              color={color}
            />
          )} 
          onPress={_openWhatsapp} 
          color="white"
        />
      </Appbar.Header>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    elevation: 6
  },
  logoContainer: {
    flex: 1,
    marginLeft: 10
  },
  statusbar: {
    height: StatusBar.currentHeight
  }
})

export default withTheme(Component)