import React from 'react'
import { ScrollView, StyleSheet, Linking, ToastAndroid } from 'react-native'
import { Text } from 'react-native-paper'
import { graphql, createFragmentContainer } from 'react-relay'
import UserInfo from './UserInfo'
import LogoutButton from './LogoutButton'
import Item from './Item'
import Separator from './Separator'
import useNavigator from '../../../hooks/useNavigator'

const Component = props => {
  const { 
    usersFeedbackGoogleFormUrl,
    officialInstagram, 
    officialInstagramWeb,
    officialTwitter,
    officialTwitterWeb,
    officialFacebook,
    officialFacebookWeb,
    playstore,
    playstoreWeb
  } = props.viewer

  const duration = ToastAndroid.LONG
  const { navigate } = useNavigator()

  const toPrivacyPolicyScreen = () => {
    navigate('privacyPolicy')
  }

  const toTermsAndConditionsScreen = () => {
    navigate('termsAndConditions')
  }

  const toUserFeedbackGoogleFormScreen = () => {
    navigate('usersFeedback', { url: usersFeedbackGoogleFormUrl })
  }  

  const openInstagramInBrowser = () => {
    if(officialInstagramWeb) {
      Linking.canOpenURL(officialInstagramWeb).then(supported => {
        if(!supported) {
          ToastAndroid.show('Tidak dapat membuka Instagram.', duration)
        } else {
          Linking.openURL(officialInstagramWeb)
        }
      })
    }
  }

  const openInstagram = () => {
    if(officialInstagram) {
      Linking.canOpenURL(officialInstagram).then(supported => {
        if(!supported) {
          openInstagramInBrowser()
        } else {
          Linking.openURL(officialInstagram)
        }
      })
    }
  }

  const openPlayStoreWeb = () => {
    if(playstoreWeb) {
      Linking.canOpenURL(playstore).then(supported => {
        if(!supported) {
          ToastAndroid.show('Tidak dapat membuka Play Store.', duration)
        } else {
          Linking.openURL(playstoreWeb)
        }
      })
    }
  }

  const openPlayStore = () => {
    if(playstore) {
      Linking.canOpenURL(playstore).then(supported => {
        if(!supported) {
          openPlayStoreWeb()
        } else {
          Linking.openURL(playstore)
        }
      })
    }
  }

  const openTwitterWeb = () => {
    if(officialTwitterWeb) {
      Linking.canOpenURL(officialTwitterWeb).then(supported => {
        if(!supported) {
          ToastAndroid.show('Tidak dapat membuka Twitter.', duration)
        } else {
          Linking.openURL(officialTwitterWeb)
        }
      })
    }
  }

  const openTwitter = () => {
    if(officialTwitter) {
      Linking.canOpenURL(officialTwitter).then(supported => {
        if(!supported) {
          openTwitterWeb()
        } else {
          Linking.openURL(officialTwitter)
        }
      })
    }
  }

  const openFacebookWeb = () => {
    if(officialFacebookWeb) {
      Linking.canOpenURL(officialFacebookWeb).then(supported => {
        if(!supported) {
          ToastAndroid.show('Tidak dapat membuka Facebook.', duration)
        } else {
          Linking.openURL(officialFacebookWeb)
        }
      })
    }
  }

  const openFacebook = () => {
    if(officialFacebook) {
      Linking.canOpenURL(officialFacebook).then(supported => {
        if(!supported) {
          openFacebookWeb()
        } else {
          Linking.openURL(officialFacebook)
        }
      })
    }
  }

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <UserInfo user={props.viewer.userData}/>
      <Separator height={10}/>
      <Item text="Ketentuan Layanan" onPress={toTermsAndConditionsScreen}/>
      <Separator/>
      <Item text="Kebijakan Privasi" onPress={toPrivacyPolicyScreen}/>
      <Separator/>
      <Item text="Beri Kami Nilai" onPress={openPlayStore}/>
      <Separator/>
      <Item text="Kritik/Saran" onPress={toUserFeedbackGoogleFormScreen}/>
      <Separator height={10}/>
      <Item text="Twitter" onPress={openTwitter}/>
      <Separator/>
      <Item text="Facebook"/>
      <Separator/>
      <Item text="Instagram" onPress={openInstagram}/>
      <Separator height={10}/>
      <LogoutButton/>
    </ScrollView>
  )
}

const s = StyleSheet.create({
  text: {
    fontSize: 16
  }
})

export default createFragmentContainer(Component, {
  viewer: graphql`
    fragment ProfileView_viewer on Viewer {
      id,
      usersFeedbackGoogleFormUrl,
      officialInstagram,
      officialInstagramWeb,
      officialFacebook,
      officialFacebookWeb,
      officialTwitter,
      officialTwitterWeb,
      playstore,
      playstoreWeb,
      userData {
        id,
        ...UserInfo_user
      }
    }
  `
})