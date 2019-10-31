import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { graphql, createFragmentContainer } from 'react-relay'

import BottomNavigation from '../../components/BottomNavigation'
import MarkReadNotifications from '../../mutations/MarkReadNotifications'
import GetUnreadNotificationsCount from '../../mutations/GetUnreadNotificationsCount'
import RelayContext from '../../RelayContext'
import BottomNavigationContext from './BottomNavigationContext'
import Home from './home/HomeTab'
import Cart from './cart/CartTab'
import Notification from './notification/NotificationTab'
import Profile from './profile/ProfileTab'

class MainBottomNavigation extends Component {
  static contextType = RelayContext

  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'cart', title: 'Cart', icon: 'shopping-cart' },
      { key: 'notification', title: 'Notification', icon: 'notifications' },
      { key: 'profile', title: 'Profile', icon: 'person' }
    ],
  }

  _handleIndexChange = index => this.setState({ index })

  _renderScene = BottomNavigation.SceneMap({
    home: Home,
    cart: Cart,
    notification: Notification,
    profile: Profile,
  })

  getNotificationsCount = () => this.props.viewer.unreadNotificationsCount

  getNotificationBadge = () => {
    const count = this.getNotificationsCount()
    if(count === 0)
      return undefined
    else if(count > 99)
      return '99+'
    
    return count.toString()
  }

  isAuthenticated = () => this.props.viewer.isAuthenticated

  markReadNotifications = () => {
    if(this.isAuthenticated()) {
      const { environment } = this.context
      MarkReadNotifications(environment)
    }
  }

  getUnreadNotificationsCount = () => {
    const { environment } = this.context
    GetUnreadNotificationsCount(environment, () => {
      if(
        this.state.index === this.getIndex('notification') &&
        this.getNotificationsCount() > 0 &&
        this.notificationViewRef.current !== null
      ) {
        this.notificationViewRef.current.refresh()
        this.markReadNotifications()
      }
    })
  }

  getRoutes = () => [
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'cart', title: 'Cart', icon: 'shopping-cart' },
    { key: 'notification', title: 'Notification', icon: 'notifications', badge: this.getNotificationBadge() },
    { key: 'profile', title: 'Profile', icon: 'person' }
  ]

  getNavigationState = () => ({
    index: this.state.index,
    routes: this.getRoutes()
  })

  getIndex = key => this.state.routes.findIndex(route => route.key === key)

  componentDidUpdate() {
    if(this.state.index === this.getIndex('notification')) {
      this.markReadNotifications()
      if(this.notificationViewRef.current !== null && this.getNotificationsCount() > 0) {
        this.notificationViewRef.current.refresh()
      }
    }
  }

  componentDidMount() {
    if(this.isAuthenticated())
      // check for new notifications every 10 minutes
      this.notificationsCountUpdater = setInterval(this.getUnreadNotificationsCount, 1000 * 60 * 10)
  }

  componentWillUnmount() {
    if(this.isAuthenticated())
      clearInterval(this.notificationsCountUpdater)
  }

  notificationViewRef = React.createRef()

  render() {
    return (
      <BottomNavigationContext.Provider value={{ 
        viewer: this.props.viewer,
        notificationViewRef: this.notificationViewRef
      }}>
        <BottomNavigation
          navigationState={this.getNavigationState()}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
          barStyle={s.bar}
          style={s.main}
          labeled={true}
          shifting={false}
          keyboardHidesNavigationBar={false}
        />
      </BottomNavigationContext.Provider>
    )
  }
}

const s = StyleSheet.create({
  bar: {
    backgroundColor: 'white'
  },
  main: {
    backgroundColor: 'white'
  }
})

export default createFragmentContainer(MainBottomNavigation, {
  viewer: graphql`
    fragment MainBottomNavigation_viewer on Viewer {
      officialWhatsApp,
      unreadNotificationsCount,
      isAuthenticated
    }
  `
})